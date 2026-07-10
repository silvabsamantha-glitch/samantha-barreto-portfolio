// Netlify Function: busca o RSS do Substack e devolve JSON compacto.
// Não depende de pacotes externos (Node runtime já tem fetch global).
// URL do feed vem de uma variável de ambiente para não acoplar este
// arquivo a uma publicação específica.
const FEED_URL = process.env.SUBSTACK_FEED_URL;
const MAX_POSTS = 12;
const CACHE_CONTROL = 'public, max-age=3600';

function decodeEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, '').trim();
}

function extractTag(block, tag) {
  const re = new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>', 'i');
  const m = block.match(re);
  if (!m) return '';
  let value = m[1].trim();
  const cdata = value.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  if (cdata) value = cdata[1];
  return decodeEntities(value.trim());
}

function extractEnclosure(block) {
  const m = block.match(/<enclosure[^>]*\burl="([^"]+)"/i);
  return m ? m[1] : null;
}

function parseFeed(xml) {
  const itemRe = /<item[^>]*>([\s\S]*?)<\/item>/gi;
  const posts = [];
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const title = extractTag(block, 'title');
    const link = extractTag(block, 'link');
    if (!title || !link) continue;
    posts.push({
      title,
      link,
      pubDate: extractTag(block, 'pubDate'),
      description: stripTags(extractTag(block, 'description')),
      image: extractEnclosure(block),
    });
  }
  return posts;
}

exports.handler = async function () {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': CACHE_CONTROL,
  };

  if (!FEED_URL) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ configured: false, posts: [] }),
    };
  }

  try {
    const res = await fetch(FEED_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SamanthaBarretoPortfolio/1.0)',
      },
    });
    if (!res.ok) {
      throw new Error('Feed request failed with status ' + res.status);
    }
    const xml = await res.text();
    const posts = parseFeed(xml).slice(0, MAX_POSTS);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ configured: true, posts }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ configured: true, error: true, posts: [] }),
    };
  }
};
