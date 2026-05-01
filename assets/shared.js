// ── Language system ──────────────────────────────────────────────
const LANG_KEY = 'ss_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'pt';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.innerHTML = lang === 'en' ? (el.dataset.en || el.dataset.pt) : el.dataset.pt;
  });
  document.querySelectorAll('[data-pt-placeholder]').forEach(el => {
    el.placeholder = lang === 'en' ? (el.dataset.enPlaceholder || el.dataset.ptPlaceholder) : el.dataset.ptPlaceholder;
  });
  document.querySelectorAll('[data-alt-pt]').forEach(el => {
    el.alt = lang === 'en' ? (el.dataset.altEn || el.dataset.altPt) : el.dataset.altPt;
  });
  // Toggle PT/EN content blocks (Option B SVG duplication + any data-lang-block elements)
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    el.style.display = el.dataset.langBlock === lang ? '' : 'none';
  });
  // Swap src for iframes with bilingual versions
  document.querySelectorAll('iframe[data-src-pt]').forEach(function(f) {
    var newSrc = lang === 'en' ? (f.dataset.srcEn || f.dataset.srcPt) : f.dataset.srcPt;
    if (f.getAttribute('src') !== newSrc) f.src = newSrc;
  });
  // Swap src for static images with bilingual versions
  document.querySelectorAll('img[data-src-pt]').forEach(function(img) {
    var newSrc = lang === 'en' ? (img.dataset.srcEn || img.dataset.srcPt) : img.dataset.srcPt;
    if (img.getAttribute('src') !== newSrc) img.src = newSrc;
  });
  // Broadcast language to all iframes (fallback for iframes without data-src-pt)
  document.querySelectorAll('iframe').forEach(f => {
    try { f.contentWindow.postMessage({ type: 'setLang', lang: lang }, '*'); } catch(e) {}
  });
  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.documentElement.setAttribute('data-lang', lang);
}

function initLang() {
  const lang = getLang();
  applyLang(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

// ── Counter animation ─────────────────────────────────────────────
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const isFloat = target % 1 !== 0;
  const duration = 1600;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = isFloat ? (eased * target).toFixed(1) : Math.round(eased * target);
    el.textContent = prefix + value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = true;
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

// ── Scroll fade-in ────────────────────────────────────────────────
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
}

// ── Nav scroll state ──────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Voltar ao topo ────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>';
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Init all ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initCounters();
  initFadeIn();
  initNav();
  initBackToTop();
});
