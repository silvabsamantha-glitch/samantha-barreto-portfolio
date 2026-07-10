#!/usr/bin/env python3
"""Injects content/*.json values into the HTML files' data-pt/data-en (and
related) attributes, at the exact spots marked with a `data-field="..."`
attribute already present in the source HTML.

This script never touches assets/shared.js and never introduces a runtime
content system: it runs once, before the site is served (locally, or as the
Netlify build command), and only rewrites the narrow byte ranges of each
marked element (its opening tag's attributes, and its text content when the
field is a visible-text field). Everything else in every file is left
byte-for-byte identical. `data-field` is inert at runtime -- shared.js's
applyLang() never looks at it.

Usage:
    python3 scripts/build_content.py             # build in place
    python3 scripts/build_content.py --check     # dry run, diff-only, no writes
    python3 scripts/build_content.py --root DIR  # operate on a different root
                                                   (used for local scratch verification)
"""
import argparse
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}


def esc_attr(s):
    return s.replace("&", "&amp;").replace('"', "&quot;")


def esc_text(s):
    return s.replace("&", "&amp;")


class FieldScanner(HTMLParser):
    """Finds every element carrying data-field, and records the exact
    source-text spans needed to patch its opening tag and (for non-void
    elements) its inner content -- without re-serializing anything else."""

    def __init__(self, source):
        super().__init__(convert_charrefs=False)
        self.source = source
        self._line_offsets = [0]
        for line in source.splitlines(keepends=True):
            self._line_offsets.append(self._line_offsets[-1] + len(line))
        self.stack = []
        self.fields = []

    def _offset(self):
        line, col = self.getpos()
        return self._line_offsets[line - 1] + col

    def _start(self, tag, attrs, self_closing):
        start = self._offset()
        starttag_text = self.get_starttag_text()
        starttag_end = start + len(starttag_text)
        entry = {
            "tag": tag,
            "start": start,
            "starttag_end": starttag_end,
            "attrs": dict(attrs),
            "data_field": dict(attrs).get("data-field"),
        }
        if self_closing or tag in VOID_TAGS:
            if entry["data_field"]:
                entry["content_start"] = None
                entry["content_end"] = None
                self.fields.append(entry)
        else:
            self.stack.append(entry)

    def handle_starttag(self, tag, attrs):
        self._start(tag, attrs, self_closing=False)

    def handle_startendtag(self, tag, attrs):
        self._start(tag, attrs, self_closing=True)

    def handle_endtag(self, tag):
        end_start = self._offset()
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i]["tag"] == tag:
                entry = self.stack[i]
                self.stack = self.stack[:i]
                if entry["data_field"]:
                    entry["content_start"] = entry["starttag_end"]
                    entry["content_end"] = end_start
                    self.fields.append(entry)
                return


def load_content(content_dir):
    def read_json(path):
        if path.exists():
            with open(path, encoding="utf-8") as f:
                return json.load(f)
        return {}

    index_json = read_json(content_dir / "index.json")
    sobre_json = read_json(content_dir / "sobre.json")
    cases_index_json = read_json(content_dir / "cases-index.json")
    notas_json = read_json(content_dir / "notas.json")

    cases = {}
    cases_dir = content_dir / "cases"
    if cases_dir.exists():
        for p in sorted(cases_dir.glob("case-*.json")):
            with open(p, encoding="utf-8") as f:
                cases[p.stem] = json.load(f)

    index_json = dict(index_json)
    index_json["cards"] = cases

    return {
        "index": index_json,
        "sobre": sobre_json,
        "cases": cases,
        "casesIndex": cases_index_json,
        "notas": notas_json,
    }


def resolve_path(root_obj, segments):
    node = root_obj
    for seg in segments:
        if isinstance(node, list):
            idx = int(seg)
            if idx >= len(node):
                return None
            node = node[idx]
        elif isinstance(node, dict):
            if seg not in node:
                return None
            node = node[seg]
        else:
            return None
    return node


def resolve_field(data_field, context, case_json):
    """data_field is e.g. 'case.page.title', 'index.cards.case-01.card.title',
    'index.contact.links.whatsapp', 'sobre.interests.pills.4'."""
    parts = data_field.split(".")
    namespace, rest = parts[0], parts[1:]
    if namespace == "case":
        root = case_json
    elif namespace == "index":
        root = context["index"]
    elif namespace == "sobre":
        root = context["sobre"]
    elif namespace == "casesIndex":
        root = context["casesIndex"]
    elif namespace == "notas":
        root = context["notas"]
    else:
        return None, None
    value = resolve_path(root, rest)
    if value is None:
        return None, None
    kind = "text"
    if rest[-2:] == ["links", "email"]:
        kind = "mailto"
    elif "links" in rest:
        kind = "href"
    elif "heroImages" in rest and rest[-1].isdigit():
        kind = "image"
    return kind, value


COMPANY_TOKEN = "{{company}}"


def substitute_company(value, company):
    if company is None:
        return value
    if isinstance(value, str):
        return value.replace(COMPANY_TOKEN, company)
    if isinstance(value, dict):
        return {k: substitute_company(v, company) for k, v in value.items()}
    return value


def patch_attr(text, name, new_value):
    pattern = re.compile(r'(\b' + re.escape(name) + r'=")[^"]*(")')
    if not pattern.search(text):
        return text, False
    return pattern.sub(lambda m: m.group(1) + esc_attr(new_value) + m.group(2), text, count=1), True


def build_replacements(entry, kind, value, company):
    """Returns a list of (start, end, new_text) spans relative to the file."""
    value = substitute_company(value, company)
    spans = []
    starttag_slice = None

    if kind == "href":
        starttag_slice = entry["starttag_end"]
        text = SOURCE_SLICE(entry)
        new_text, _ = patch_attr(text, "href", value)
        spans.append((entry["start"], entry["starttag_end"], new_text))
        return spans

    if kind == "mailto":
        text = SOURCE_SLICE(entry)
        new_text, _ = patch_attr(text, "href", "mailto:" + value)
        spans.append((entry["start"], entry["starttag_end"], new_text))
        if entry.get("content_start") is not None:
            spans.append((entry["content_start"], entry["content_end"], esc_text(value)))
        return spans

    if kind == "image":
        text = SOURCE_SLICE(entry)
        for attr, key in (
            ("src", "srcPt"), ("data-src-pt", "srcPt"), ("data-src-en", "srcEn"),
            ("alt", "altPt"), ("data-alt-pt", "altPt"), ("data-alt-en", "altEn"),
        ):
            if key in value:
                text, _ = patch_attr(text, attr, value[key])
        spans.append((entry["start"], entry["starttag_end"], text))
        return spans

    # kind == "text": either bilingual {pt,en} or a plain string
    text = SOURCE_SLICE(entry)
    if isinstance(value, dict) and "pt" in value and "en" in value:
        text, has_pt = patch_attr(text, "data-pt", value["pt"])
        text, has_en = patch_attr(text, "data-en", value["en"])
        visible = value["pt"]
    else:
        visible = value if isinstance(value, str) else str(value)

    spans.append((entry["start"], entry["starttag_end"], text))

    if entry.get("content_start") is not None:
        spans.append((entry["content_start"], entry["content_end"], esc_text(visible)))

    return spans


_CURRENT_SOURCE = None


def SOURCE_SLICE(entry):
    return _CURRENT_SOURCE[entry["start"]:entry["starttag_end"]]


def apply_spans(source, spans):
    spans = sorted(spans, key=lambda s: s[0])
    for i in range(1, len(spans)):
        if spans[i][0] < spans[i - 1][1]:
            raise ValueError(f"overlapping replacement spans at {spans[i]} / {spans[i-1]}")
    out = []
    cursor = 0
    for start, end, new_text in spans:
        out.append(source[cursor:start])
        out.append(new_text)
        cursor = end
    out.append(source[cursor:])
    return "".join(out)


def process_file(path, context, case_json, company):
    global _CURRENT_SOURCE
    source = path.read_text(encoding="utf-8")
    _CURRENT_SOURCE = source
    scanner = FieldScanner(source)
    scanner.feed(source)
    scanner.close()

    if not scanner.fields:
        return source, source, []

    all_spans = []
    warnings = []
    for entry in scanner.fields:
        kind, value = resolve_field(entry["data_field"], context, case_json)
        if value is None:
            warnings.append(f"{path}: no content found for data-field={entry['data_field']!r}")
            continue
        all_spans.extend(build_replacements(entry, kind, value, company))

    new_source = apply_spans(source, all_spans)
    return source, new_source, warnings


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="dry run, report diffs, write nothing")
    parser.add_argument("--root", default=None, help="repo root to operate on (default: repo containing this script)")
    args = parser.parse_args()

    root = Path(args.root) if args.root else Path(__file__).resolve().parent.parent
    content_dir = root / "content"
    context = load_content(content_dir)
    company = context["index"].get("currentCompany")

    targets = [root / "index.html", root / "sobre.html"]
    targets += sorted((root / "cases").glob("case-*.html"))
    targets += [root / "cases" / "index.html", root / "notas" / "index.html"]

    changed = []
    all_warnings = []
    for path in targets:
        if not path.exists():
            continue
        case_json = context["cases"].get(path.stem) if path.parent.name == "cases" else None
        old, new, warnings = process_file(path, context, case_json, company)
        all_warnings.extend(warnings)
        if old != new:
            changed.append(path)
            if not args.check:
                path.write_text(new, encoding="utf-8")

    for w in all_warnings:
        print(f"WARNING: {w}", file=sys.stderr)

    if args.check:
        print(f"[check] {len(changed)} file(s) would change: " + ", ".join(str(p.relative_to(root)) for p in changed))
    else:
        print(f"Built {len(changed)} file(s): " + ", ".join(str(p.relative_to(root)) for p in changed))

    return 0


if __name__ == "__main__":
    sys.exit(main())
