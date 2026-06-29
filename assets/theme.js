(function () {
  const KEY = 'sb_theme';
  const BTN_ID = 'theme-toggle-btn';
  const html = document.documentElement;

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    html.classList.toggle('dark-mode', isDark);
    html.classList.toggle('light-mode', !isDark);
    const btn = document.getElementById(BTN_ID);
    if (!btn) return;
    btn.textContent = isDark ? '☀' : '☾';
    const labelPt = isDark ? 'Ativar modo claro' : 'Ativar modo escuro';
    const labelEn = isDark ? 'Enable light mode' : 'Enable dark mode';
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    btn.setAttribute('data-label-pt', labelPt);
    btn.setAttribute('data-label-en', labelEn);
    const lang = localStorage.getItem('ss_lang') || 'pt';
    btn.setAttribute('aria-label', lang === 'en' ? labelEn : labelPt);
  }

  function toggle() {
    const next = html.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem(KEY);
    applyTheme(saved === 'dark' ? 'dark' : 'light');
    const btn = document.getElementById(BTN_ID);
    if (btn) btn.addEventListener('click', toggle);
  });
})();
