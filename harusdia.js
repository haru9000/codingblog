/* =========================================================
   Haru Blog Portal Responsive JS（revised）
   ========================================================= */
(function () {
  'use strict';

  const SITES = [
    {
      host: 'harusdia.hatenablog.com',
      title: '雑記',
      desc: 'AI・技術・生活改善を中心にした雑記ブログ。',
      icon: '🤖',
      color: '#ff6f9f',
      url: 'https://harusdia.hatenablog.com/'
    },
    {
      host: 'hakodate-glay.hatenablog.com',
      title: '紅茶',
      desc: '紅茶・ハーブティー・アレンジドリンクの記録。',
      icon: '☕',
      color: '#377dff',
      url: 'https://hakodate-glay.hatenablog.com/'
    },
    {
      host: 'harureverse.hatenablog.com',
      title: '素材',
      desc: '背景・UI・配信素材などの配布と制作。',
      icon: '🧩',
      color: '#29a66a',
      url: 'https://harureverse.hatenablog.com/'
    },
    {
      host: 'haru-fashion-eng.hatenablog.com',
      title: '考察',
      desc: 'ゲーム・物語・思想の考察と解釈。',
      icon: '📖',
      color: '#ff8a2a',
      url: 'https://haru-fashion-eng.hatenablog.com/'
    }
  ];

  const CATEGORIES = [
    ['AI / 技術', 'https://harusdia.hatenablog.com/archive/category/AI'],
    ['生活・習慣', 'https://harusdia.hatenablog.com/'],
    ['グラブル', 'https://harusdia.hatenablog.com/archive/category/%E3%82%B0%E3%83%A9%E3%83%96%E3%83%AB'],
    ['紅茶・ドリンク', 'https://hakodate-glay.hatenablog.com/'],
    ['素材・配布', 'https://harureverse.hatenablog.com/'],
    ['考察・レビュー', 'https://haru-fashion-eng.hatenablog.com/']
  ];

  function currentSite() {
    return SITES.find(site => location.hostname === site.host) || SITES[0];
  }

  function makeNav() {
    if (document.querySelector('.haru-global-nav')) return;

    const nav = document.createElement('nav');
    nav.className = 'haru-global-nav';

    SITES.forEach(site => {
      const a = document.createElement('a');
      a.href = site.url;
      a.textContent = site.title;

      if (location.hostname === site.host) {
        a.classList.add('is-current');
      }

      nav.appendChild(a);
    });

    const target = document.querySelector('#top-box') || document.body;
    target.insertAdjacentElement('afterend', nav);
  }

  function makePortal() {
    if (document.querySelector('.haru-portal')) return;
    if (!document.body.classList.contains('page-index')) return;

    const portal = document.createElement('section');
    portal.className = 'haru-portal';

    portal.innerHTML = `
      <div class="haru-site-grid">
        ${SITES.map(site => `
          <a class="haru-site-card" href="${site.url}" data-haru-blog="${site.host}">
            <h3>${site.icon} ${site.title}</h3>
            <p>${site.desc}</p>
          </a>
        `).join('')}
      </div>
    `;

    const target = document.querySelector('#content') || document.body;
    target.insertAdjacentElement('beforebegin', portal);
  }

  function makeCategoryPanel() {
    if (document.querySelector('.haru-category-panel')) return;

    const panel = document.createElement('section');
    panel.className = 'haru-category-panel';

    panel.innerHTML = `
      <h3>カテゴリから探す</h3>
      <div class="haru-category-grid">
        ${CATEGORIES.map(([label, href]) =>
          `<a href="${href}" class="haru-category-chip">${label}</a>`
        ).join('')}
      </div>
    `;

    const content = document.querySelector('#content');
    if (content) content.insertAdjacentElement('afterend', panel);
  }

  function markExternalBlogLinks() {
    document.querySelectorAll('a[href]').forEach(a => {
      const site = SITES.find(s => a.href.includes(s.host));
      if (!site) return;
      a.dataset.haruBlog = site.host;
    });
  }

  function boot() {
    makeNav();
    makePortal();
    makeCategoryPanel();
    markExternalBlogLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
