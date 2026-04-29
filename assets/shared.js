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
  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
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

// ── Init all ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initCounters();
  initFadeIn();
  initNav();
});
