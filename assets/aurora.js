// ── Aurora: abertura conversacional do hero ───────────────────────
// Lê assets/conversa.json (PT/EN) e roteia a conversa por JS puro.
// Não toca em shared.js nem nos atributos data-pt/data-en das demais
// seções: shared.js continua o único responsável pela tradução do site.
(function () {
  'use strict';

  var root = document.getElementById('aurora-conversation');
  if (!root) return;

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var data = null;
  var history = []; // { kind: 'greeting'|'user'|'bot', key?: branch id, level?: 'root'|branchId }
  var currentQuickReplies = null; // { level: 'root'|branchId }
  var done = false; // true once "explorar por conta própria" foi escolhido

  function getLang() {
    return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
  }

  function t() {
    return data[getLang()];
  }

  // ── Render ────────────────────────────────────────────────────
  var logEl, qrEl;

  function buildSkeleton() {
    root.innerHTML = '';
    root.classList.add('aurora-chat');

    logEl = document.createElement('div');
    logEl.className = 'aurora-log';
    logEl.setAttribute('role', 'log');
    logEl.setAttribute('aria-live', 'polite');
    logEl.setAttribute('aria-label', getLang() === 'en'
      ? 'Conversation with Aurora'
      : 'Conversa com a Aurora');

    qrEl = document.createElement('div');
    qrEl.className = 'aurora-quick-replies';
    qrEl.setAttribute('role', 'group');
    qrEl.setAttribute('aria-label', getLang() === 'en' ? 'Quick replies' : 'Respostas rápidas');

    root.appendChild(logEl);
    root.appendChild(qrEl);
  }

  // Espera o layout assentar (depois de inserções/remoções no DOM que
  // mudam a altura da página) antes de rodar fn. Dois rAF garantem que o
  // reflow do passo anterior já foi aplicado quando fn executa.
  function afterLayout(fn) {
    requestAnimationFrame(function () {
      requestAnimationFrame(fn);
    });
  }

  function appendMessage(text, who, animate, onDone) {
    var msg = document.createElement('div');
    msg.className = 'aurora-msg aurora-msg-' + who;

    if (who === 'bot' && animate && !prefersReducedMotion) {
      var typing = document.createElement('div');
      typing.className = 'aurora-typing';
      typing.setAttribute('aria-hidden', 'true');
      typing.innerHTML = '<span></span><span></span><span></span>';
      logEl.appendChild(typing);
      setTimeout(function () {
        if (typing.parentNode) typing.parentNode.removeChild(typing);
        msg.textContent = text;
        logEl.appendChild(msg);
        if (onDone) afterLayout(onDone);
      }, 550);
    } else {
      msg.textContent = text;
      logEl.appendChild(msg);
      if (onDone) afterLayout(onDone);
    }
  }

  function renderQuickReplies(buttons) {
    qrEl.innerHTML = '';
    buttons.forEach(function (qr) {
      var el;
      if (qr.action && qr.action.type === 'download-cv') {
        el = document.createElement('a');
        el.href = 'assets/cv-samantha-barreto-' + getLang() + '.pdf';
        el.setAttribute('download', '');
      } else {
        el = document.createElement('button');
        el.type = 'button';
      }
      el.className = 'aurora-qr-btn';
      el.textContent = qr.label;
      el.addEventListener('click', function (ev) {
        handleQuickReply(qr, ev);
      });
      qrEl.appendChild(el);
    });

    var first = qrEl.querySelector('.aurora-qr-btn');
    if (first) {
      // dá foco ao primeiro botão para quem navega por teclado;
      // aria-live já cobre o anúncio para leitores de tela
      setTimeout(function () { first.focus({ preventScroll: true }); }, prefersReducedMotion ? 0 : 600);
    }
  }

  // ── Ações ─────────────────────────────────────────────────────
  function runAction(action) {
    if (!action) return;
    switch (action.type) {
      case 'scroll':
        // Espera o layout assentar antes de medir/rolar até o destino,
        // para o ponto de chegada não se deslocar no meio do caminho.
        afterLayout(function () { scrollToTarget(action.target); });
        break;
      case 'link':
        window.location.href = action.target;
        break;
      case 'download-cv':
        // tratado via <a download> em renderQuickReplies
        break;
      case 'filter-cases':
        filterCases(action.value);
        if (action.then) {
          // Espera o layout assentar após esconder/mostrar cards antes de
          // rolar, para o destino não se deslocar no meio do scroll.
          afterLayout(function () { runAction(action.then); });
        }
        break;
      case 'reveal-traditional':
        revealTraditionalHero();
        break;
      case 'restart':
        restart();
        break;
    }
  }

  function scrollToTarget(selector) {
    var target = document.querySelector(selector);
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }

  function filterCases(value) {
    var casesSec = document.getElementById('cases');
    if (!casesSec) return;
    casesSec.setAttribute('data-aurora-filter', value);
  }

  function revealTraditionalHero() {
    done = true;
    var heroLeft = document.querySelector('.hero-left');
    if (heroLeft) heroLeft.classList.add('aurora-done');
  }

  function restart() {
    // "Voltar" não é uma reapresentação: usa a mensagem "back" do JSON,
    // sem repetir a saudação inicial.
    history.push({ kind: 'bot', key: 'back' });
    appendMessage(t().back, 'bot', true);
    currentQuickReplies = { level: 'root' };
    history.push({ kind: 'quickReplies', ref: { level: 'root' } });
    setTimeout(function () { renderQuickReplies(t().rootQuickReplies); }, prefersReducedMotion ? 0 : 600);
  }

  // ── Fluxo principal ──────────────────────────────────────────
  function handleQuickReply(qr, ev) {
    // download-cv é um <a download>: deixa o navegador seguir o link
    // normalmente, só registra a escolha na conversa.
    var isDownload = qr.action && qr.action.type === 'download-cv';

    history.push({ kind: 'user', label: qr.label });
    appendMessage(qr.label, 'user', false);

    var lvl = currentQuickReplies && currentQuickReplies.level;

    if (lvl === 'root') {
      var branch = t().branches[qr.id];
      if (branch) {
        history.push({ kind: 'bot', key: 'branch', branch: qr.id });
        // Roda a ação só depois que a mensagem (e a animação de digitação)
        // já estiverem no DOM e o layout tiver assentado, para o scroll
        // não medir uma altura que ainda vai mudar.
        appendMessage(branch.response, 'bot', true, function () {
          if (!isDownload) runAction(branch.action);
        });
        if (branch.quickReplies && branch.quickReplies.length) {
          currentQuickReplies = { level: qr.id };
          history.push({ kind: 'quickReplies', ref: { level: qr.id } });
          setTimeout(function () { renderQuickReplies(branch.quickReplies); }, prefersReducedMotion ? 0 : 600);
        } else {
          currentQuickReplies = null;
          qrEl.innerHTML = '';
        }
      }
    } else {
      // segundo nível: executa a ação do quick reply
      if (!isDownload) runAction(qr.action);
      if (qr.action && qr.action.type === 'restart') {
        // restart já cuida de renderizar tudo de novo
        return;
      }
    }
  }

  // ── Re-render ao trocar idioma, preservando o histórico ────────
  function rerenderForLang() {
    if (!data) return;
    logEl.innerHTML = '';
    history.forEach(function (entry) {
      if (entry.kind === 'greeting' || (entry.kind === 'bot' && entry.key === 'greeting')) {
        appendMessage(t().greeting, 'bot', false);
      } else if (entry.kind === 'bot' && entry.key === 'back') {
        appendMessage(t().back, 'bot', false);
      } else if (entry.kind === 'bot' && entry.key === 'branch') {
        appendMessage(t().branches[entry.branch].response, 'bot', false);
      } else if (entry.kind === 'user') {
        // re-traduz o rótulo escolhido procurando pelo id correspondente
        var label = findCurrentLabelById(entry.label);
        appendMessage(label, 'user', false);
      }
    });

    logEl.setAttribute('aria-label', getLang() === 'en'
      ? 'Conversation with Aurora'
      : 'Conversa com a Aurora');
    qrEl.setAttribute('aria-label', getLang() === 'en' ? 'Quick replies' : 'Respostas rápidas');

    if (currentQuickReplies) {
      var list = currentQuickReplies.level === 'root'
        ? t().rootQuickReplies
        : t().branches[currentQuickReplies.level].quickReplies;
      renderQuickReplies(list || []);
    }
  }

  // Mapeia um label antigo para o label correspondente no novo idioma,
  // usando o id armazenado junto ao label original.
  function findCurrentLabelById(oldLabel) {
    // history guarda apenas o label; para preservar o ponto exato sem
    // duplicar lógica, re-percorremos rootQuickReplies + todas as branches
    // de AMBOS os idiomas procurando o índice do label antigo.
    var langs = ['pt', 'en'];
    for (var i = 0; i < langs.length; i++) {
      var d = data[langs[i]];
      var idx = d.rootQuickReplies.findIndex(function (qr) { return qr.label === oldLabel; });
      if (idx > -1) return t().rootQuickReplies[idx].label;
      for (var key in d.branches) {
        var qrs = d.branches[key].quickReplies || [];
        var j = qrs.findIndex(function (qr) { return qr.label === oldLabel; });
        if (j > -1) {
          var targetQrs = t().branches[key].quickReplies || [];
          if (targetQrs[j]) return targetQrs[j].label;
        }
      }
    }
    return oldLabel;
  }

  // ── Init ─────────────────────────────────────────────────────
  function init() {
    buildSkeleton();
    history.push({ kind: 'bot', key: 'greeting' });
    appendMessage(t().greeting, 'bot', true);
    currentQuickReplies = { level: 'root' };
    history.push({ kind: 'quickReplies', ref: { level: 'root' } });
    setTimeout(function () { renderQuickReplies(t().rootQuickReplies); }, prefersReducedMotion ? 0 : 600);

    root.hidden = false;
    var heroRoles = document.querySelector('.hero-roles');
    if (heroRoles) heroRoles.classList.add('aurora-hidden');

    // Reage a trocas de idioma feitas pelo toggle existente (shared.js
    // já atualiza document.documentElement.lang / [data-lang]).
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        // espera o shared.js aplicar o novo idioma antes de re-renderizar
        setTimeout(rerenderForLang, 0);
      });
    });
  }

  fetch('assets/conversa.json')
    .then(function (res) { return res.json(); })
    .then(function (json) {
      data = json;
      init();
    })
    .catch(function () {
      // Falha ao carregar: hero tradicional permanece como está (chips visíveis)
    });
})();
