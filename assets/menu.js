// ── Menu hambúrguer (tablet/mobile, ≤900px) ────────────────────────
// Arquivo isolado: não modifica shared.js nem theme.js.
(function () {
  const BTN_ID = 'menu-toggle-btn';
  const PANEL_ID = 'mobile-menu-panel';
  const CLOSE_MS = 220;

  function currentLang() {
    return localStorage.getItem('ss_lang') || 'pt';
  }

  function syncToggleLabel(btn) {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const pt = isOpen ? btn.dataset.labelClosePt : btn.dataset.labelPt;
    const en = isOpen ? btn.dataset.labelCloseEn : btn.dataset.labelEn;
    btn.setAttribute('aria-label', currentLang() === 'en' ? en : pt);
  }

  function syncMobileTheme(panel) {
    const real = document.getElementById('theme-toggle-btn');
    const mobile = panel.querySelector('#theme-toggle-btn-mobile');
    if (!real || !mobile) return;
    mobile.textContent = real.textContent;
    mobile.setAttribute('aria-pressed', real.getAttribute('aria-pressed') || 'false');
    const pt = real.dataset.labelPt;
    const en = real.dataset.labelEn;
    if (pt) mobile.dataset.labelPt = pt;
    if (en) mobile.dataset.labelEn = en;
    mobile.setAttribute('aria-label', currentLang() === 'en' ? (en || pt) : pt);
  }

  function getFocusable(panel) {
    return Array.prototype.slice
      .call(panel.querySelectorAll('a[href], button:not([disabled])'))
      .filter(function (el) { return el.offsetParent !== null; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById(BTN_ID);
    const panel = document.getElementById(PANEL_ID);
    if (!btn || !panel) return;

    syncToggleLabel(btn);

    function openMenu() {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      syncToggleLabel(btn);
      document.body.classList.add('menu-open');
      syncMobileTheme(panel);
      const focusables = getFocusable(panel);
      if (focusables.length) focusables[0].focus();
    }

    function closeMenu(returnFocus) {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      syncToggleLabel(btn);
      document.body.classList.remove('menu-open');
      if (returnFocus !== false) btn.focus();
    }

    btn.addEventListener('click', function () {
      if (btn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });

    panel.querySelectorAll('.mobile-menu-links a').forEach(function (a) {
      a.addEventListener('click', function () { closeMenu(false); });
    });

    const mobileThemeBtn = panel.querySelector('#theme-toggle-btn-mobile');
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', function () {
        const real = document.getElementById('theme-toggle-btn');
        if (real) real.click();
        syncMobileTheme(panel);
      });
    }

    // Mantém o rótulo bilíngue do botão hambúrguer e o toggle de tema do
    // painel sincronizados caso o idioma seja trocado com o painel aberto.
    document.querySelectorAll('.lang-btn').forEach(function (langBtn) {
      langBtn.addEventListener('click', function () {
        syncToggleLabel(btn);
        if (btn.getAttribute('aria-expanded') === 'true') syncMobileTheme(panel);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = getFocusable(panel);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      closeMenu(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && btn.getAttribute('aria-expanded') === 'true') {
        closeMenu(false);
      }
    });
  });
})();
