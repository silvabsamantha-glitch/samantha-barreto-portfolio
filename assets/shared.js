// ── Language system ──────────────────────────────────────────────
var LANG_KEY = 'ss_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'pt';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  // Se textos.js carregou, sincroniza data-pt/en antes de aplicar
  if (typeof TEXTOS !== 'undefined') {
    var pageKey = document.body && document.body.dataset.page;
    var texts = pageKey && TEXTOS[pageKey];
    if (texts) {
      var els = document.querySelectorAll('[data-pt]');
      var keys = Object.keys(texts);
      els.forEach(function(el, i) {
        var k = 't' + i;
        if (texts[k]) {
          el.dataset.pt = texts[k].pt;
          el.dataset.en = texts[k].en;
        }
      });
    }
  }

  document.querySelectorAll('[data-pt]').forEach(function(el) {
    el.innerHTML = lang === 'en'
      ? (el.dataset.en || el.dataset.pt)
      : el.dataset.pt;
  });

  document.querySelectorAll('[data-pt-placeholder]').forEach(function(el) {
    el.placeholder = lang === 'en'
      ? (el.dataset.enPlaceholder || el.dataset.ptPlaceholder)
      : el.dataset.ptPlaceholder;
  });

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
}

function initLang() {
  applyLang(getLang());
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLang(btn.dataset.lang); });
  });
}

// ── Counter animation ─────────────────────────────────────────────
function animateCounter(el) {
  var target = parseFloat(el.dataset.target);
  var suffix = el.dataset.suffix || '';
  var prefix = el.dataset.prefix || '';
  var isFloat = target % 1 !== 0;
  var duration = 1600;
  var start = performance.now();
  function step(now) {
    var p = Math.min((now - start) / duration, 1);
    var e = 1 - Math.pow(1 - p, 3);
    var v = isFloat ? (e * target).toFixed(1) : Math.round(e * target);
    el.textContent = prefix + v + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initCounters() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = true;
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(function(el) { obs.observe(el); });
}

// ── Scroll fade-in ────────────────────────────────────────────────
function initFadeIn() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var delay = entry.target.dataset.delay || 0;
        setTimeout(function() { entry.target.classList.add('visible'); }, delay);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.fade').forEach(function(el) { obs.observe(el); });
}

// ── Nav scroll state ──────────────────────────────────────────────
function initNav() {
  var nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initLang();
  initCounters();
  initFadeIn();
  initNav();
});
