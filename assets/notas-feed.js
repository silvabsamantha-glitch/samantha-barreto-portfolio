// ── Notas: consome netlify/functions/substack-feed.js ──────────────
// Arquivo isolado: não modifica shared.js. O conteúdo dos posts vem do
// Substack no idioma original (sem tradução automática); só a
// interface (estados de carregando/vazio/erro e a data formatada)
// acompanha o idioma ativo do site.
(function () {
  const FEED_ENDPOINT = '/.netlify/functions/substack-feed';

  function currentLang() {
    return localStorage.getItem('ss_lang') || 'pt';
  }

  function formatDate(pubDate) {
    if (!pubDate) return '';
    const d = new Date(pubDate);
    if (isNaN(d.getTime())) return '';
    const lang = currentLang();
    try {
      return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'pt-BR', {
        day: 'numeric', month: 'long', year: 'numeric'
      }).format(d);
    } catch (e) {
      return '';
    }
  }

  function buildCard(post) {
    const a = document.createElement('a');
    a.className = 'nota-card fade';
    a.href = post.link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', (currentLang() === 'en' ? 'Read on Substack: ' : 'Ler no Substack: ') + post.title);

    if (post.image) {
      const img = document.createElement('img');
      img.className = 'nota-card-cover';
      img.src = post.image;
      img.alt = post.title;
      img.loading = 'lazy';
      a.appendChild(img);
    } else {
      const fallback = document.createElement('div');
      fallback.className = 'nota-card-cover-fallback';
      fallback.setAttribute('aria-hidden', 'true');
      const marker = document.createElement('span');
      marker.textContent = '§';
      fallback.appendChild(marker);
      a.appendChild(fallback);
    }

    const body = document.createElement('div');
    body.className = 'nota-card-body';

    const date = document.createElement('p');
    date.className = 'nota-card-date';
    if (post.pubDate) date.dataset.timestamp = post.pubDate;
    date.textContent = formatDate(post.pubDate);

    const title = document.createElement('h2');
    title.className = 'nota-card-title';
    title.textContent = post.title;

    const desc = document.createElement('p');
    desc.className = 'nota-card-desc';
    desc.textContent = post.description;

    body.appendChild(date);
    body.appendChild(title);
    body.appendChild(desc);
    a.appendChild(body);
    return a;
  }

  function showState(id) {
    ['notas-skeleton', 'notas-feed', 'notas-empty', 'notas-error'].forEach(function (elId) {
      const el = document.getElementById(elId);
      if (el) el.hidden = elId !== id;
    });
    const status = document.getElementById('notas-loading-status');
    if (status) status.hidden = id !== 'notas-skeleton';
  }

  function observeFadeIn(container) {
    const els = container.querySelectorAll('.fade');
    if (!window.IntersectionObserver) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { obs.observe(el); });
  }

  function renderPosts(posts) {
    const feed = document.getElementById('notas-feed');
    if (!feed) return;
    feed.innerHTML = '';
    posts.forEach(function (post) { feed.appendChild(buildCard(post)); });
    observeFadeIn(feed);
  }

  function updateDatesAndLabels() {
    document.querySelectorAll('.nota-card-date[data-timestamp]').forEach(function (el) {
      el.textContent = formatDate(el.dataset.timestamp);
    });
    document.querySelectorAll('.nota-card').forEach(function (card) {
      const title = card.querySelector('.nota-card-title');
      if (!title) return;
      card.setAttribute('aria-label', (currentLang() === 'en' ? 'Read on Substack: ' : 'Ler no Substack: ') + title.textContent);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('notas-feed')) return;

    fetch(FEED_ENDPOINT)
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed with status ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data || data.configured === false) {
          showState('notas-empty');
          return;
        }
        if (data.error || !Array.isArray(data.posts)) {
          showState('notas-error');
          return;
        }
        if (data.posts.length === 0) {
          showState('notas-empty');
          return;
        }
        renderPosts(data.posts);
        showState('notas-feed');
      })
      .catch(function () {
        showState('notas-error');
      });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setTimeout(updateDatesAndLabels, 0); });
    });
  });
})();
