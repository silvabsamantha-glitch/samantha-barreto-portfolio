// ── Filtro de tema da seção de cases ──────────────────────────────
// Usa o mesmo mecanismo da Aurora (#cases[data-aurora-filter] +
// data-case-cat nos cards). Não cria sistema paralelo: lê e escreve
// o mesmo atributo que assets/aurora.js já manipula.
(function () {
  'use strict';

  var casesSec = document.getElementById('cases');
  var filterBar = document.querySelector('.cases-filter');
  if (!casesSec || !filterBar) return;

  var buttons = Array.prototype.slice.call(filterBar.querySelectorAll('.case-filter-btn'));
  var statusEl = filterBar.querySelector('[data-cases-filter-status]');

  var statusText = {
    all: { pt: 'Mostrando todos os cases.', en: 'Showing all cases.' },
    ia: { pt: 'Mostrando cases de IA Generativa.', en: 'Showing Generative AI cases.' },
    conversacional: { pt: 'Mostrando cases de Conversacional.', en: 'Showing Conversational cases.' },
    'ux-writing': { pt: 'Mostrando cases de UX Writing.', en: 'Showing UX Writing cases.' },
    'tom-de-voz': { pt: 'Mostrando cases de Tom de Voz.', en: 'Showing Tone of Voice cases.' }
  };

  function getLang() {
    return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
  }

  function syncUI() {
    var current = casesSec.getAttribute('data-aurora-filter') || 'all';
    buttons.forEach(function (btn) {
      var active = btn.dataset.filter === current;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (statusEl) {
      var text = (statusText[current] || statusText.all)[getLang()];
      statusEl.textContent = text;
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      casesSec.setAttribute('data-aurora-filter', btn.dataset.filter);
    });
  });

  // A Aurora também escreve em data-aurora-filter (ex.: "Tenho interesse
  // em IA"); observamos a mudança para manter os botões sincronizados.
  new MutationObserver(syncUI).observe(casesSec, {
    attributes: true,
    attributeFilter: ['data-aurora-filter']
  });

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTimeout(syncUI, 0);
    });
  });

  if (!casesSec.hasAttribute('data-aurora-filter')) {
    casesSec.setAttribute('data-aurora-filter', 'all');
  }
  syncUI();
})();
