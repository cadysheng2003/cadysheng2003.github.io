(function () {

  /* ─────────────────────────────────────────────
     STYLES
  ───────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [

    /* ── Overlay ── */
    '#lb-overlay{display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;',
    'background:rgba(255,255,255,0.93);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);',
    'flex-direction:column;overflow:hidden;}',
    '#lb-overlay.active{display:flex;}',

    /* Desktop: offset for side nav */
    '@media(min-width:768px){#lb-overlay{left:240px;width:calc(100vw - 240px);}}',

    /* ── Top bar ── */
    '#lb-topbar{display:flex;justify-content:flex-end;padding:20px 32px 0;flex-shrink:0;}',
    '#lb-close{font-family:"Inter",system-ui,sans-serif;font-size:11px;letter-spacing:2px;',
    'text-transform:uppercase;color:#bbb;background:none;border:none;cursor:pointer;',
    'padding:0;transition:color 0.18s ease;}',
    '#lb-close:hover{color:#1a1a1a;}',

    /* ── Hero: image area, fills remaining space ── */
    '#lb-hero{flex:1;display:flex;flex-direction:column;min-height:0;overflow:hidden;}',

    '#lb-image-col{flex:1;display:flex;align-items:center;justify-content:center;',
    'padding:8px 48px 0;box-sizing:border-box;min-height:0;overflow:hidden;cursor:crosshair;}',

    '#lb-img{display:block;object-fit:contain;max-width:100%;}',
    '#lb-img.is-landscape{max-height:100%;max-width:100%;width:auto;height:auto;}',
    '#lb-img.is-portrait{max-height:100%;max-width:100%;width:auto;height:auto;}',

    /* ── Nav bar (Prev | title+counter | Next) ── */
    '#lb-bottom{flex-shrink:0;padding:14px 48px 0;box-sizing:border-box;}',
    '#lb-navrow{display:flex;align-items:center;justify-content:space-between;gap:16px;}',
    '.lb-navbtn{font-family:"Inter",system-ui,sans-serif;font-size:11px;font-weight:400;',
    'letter-spacing:2px;text-transform:uppercase;color:#aaa;background:none;border:none;',
    'cursor:pointer;padding:0;line-height:1;transition:color 0.18s ease;',
    'display:flex;align-items:center;gap:5px;min-width:80px;}',
    '.lb-navbtn:hover{color:#1a1a1a;}',
    '.lb-navbtn:disabled{color:#ddd;cursor:default;}',
    '#lb-prev-btn{justify-content:flex-start;}',
    '#lb-next-btn{justify-content:flex-end;}',
    '#lb-center{text-align:center;flex:1;min-width:0;}',
    '#lb-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:17px;font-weight:400;',
    'color:#555;letter-spacing:0.8px;display:block;}',
    '#lb-nav-counter{font-family:"Inter",system-ui,sans-serif;font-size:10px;letter-spacing:1.4px;',
    'color:#ccc;display:block;margin-top:4px;text-align:center;}',

    /* ── Description section (desktop: below hero, scrollable) ── */
    '#lb-desc-section{flex-shrink:0;padding:16px 48px 40px;box-sizing:border-box;',
    'max-width:620px;margin:0 auto;width:100%;text-align:center;}',
    '#lb-desc{font-family:"Lora",Georgia,serif;font-size:14px;font-style:italic;',
    'color:#bbb;line-height:1.8;letter-spacing:0;margin-bottom:24px;white-space:pre-line;}',
    '#lb-desc.has-content{color:#888;}',
    '#lb-back-btn{display:inline-block;font-family:"Inter",system-ui,sans-serif;font-size:10px;',
    'letter-spacing:2px;text-transform:uppercase;color:#ccc;background:none;border:none;',
    'cursor:pointer;padding:0;transition:color 0.2s ease;}',
    '#lb-back-btn:hover{color:#555;}',

    /* ─────────────────────────────────────────────
       MOBILE (touch ≤ 767px)
       Layout goal: image + title + desc ALL visible
       without scrolling on open.
       topbar(fixed h) → image(flex, max 42-52vh)
       → navrow → desc — all in one screen
    ───────────────────────────────────────────── */
    '@media(max-width:767px) and (pointer:coarse){',

    '#lb-overlay{overflow-y:auto;}',
    '#lb-topbar{padding:12px 20px 0;flex-shrink:0;}',

    /* Hero: do NOT fill viewport — shrink to image natural size */
    '#lb-hero{flex:0 0 auto;min-height:0;}',

    /* Image col: no flex:1, just wrap image */
    '#lb-image-col{',
      'flex:0 0 auto;',
      'padding:6px 16px 0;',
      'min-height:100px;',
      'display:flex;align-items:center;justify-content:center;',
    '}',

    /* Cap image height so title+desc fit below on screen */
    '#lb-img.is-landscape{max-height:42vh !important;width:auto !important;display:block;}',
    '#lb-img.is-portrait{max-height:52vh !important;width:auto !important;display:block;}',

    '#lb-bottom{padding:10px 20px 0;}',
    '#lb-prev-btn,#lb-next-btn{display:none;}',
    '#lb-center{text-align:center;}',
    '#lb-title{font-size:15px;}',
    '#lb-nav-counter{font-size:9px;}',

    '#lb-desc-section{padding:10px 20px 28px;max-width:100%;}',
    '#lb-desc{font-size:13px;line-height:1.7;margin-bottom:12px;}',

    '}'

  ].join('');
  document.head.appendChild(style);

  /* ─────────────────────────────────────────────
     BUILD DOM
  ───────────────────────────────────────────── */
  function el(tag, props) {
    var node = document.createElement(tag);
    if (props) Object.assign(node, props);
    return node;
  }
  function append(parent) {
    for (var i = 1; i < arguments.length; i++) parent.appendChild(arguments[i]);
  }

  var overlay = el('div', {id:'lb-overlay'});

  /* Top bar */
  var topbar   = el('div',    {id:'lb-topbar'});
  var btnClose = el('button', {id:'lb-close', textContent:'Close'});
  append(topbar, btnClose);

  /* Hero: image */
  var hero     = el('div', {id:'lb-hero'});
  var imageCol = el('div', {id:'lb-image-col'});
  var img      = el('img', {id:'lb-img'});
  append(imageCol, img);

  /* Nav bar: Prev | title + counter | Next */
  var bottom  = el('div', {id:'lb-bottom'});
  var navrow  = el('div', {id:'lb-navrow'});
  var btnPrev = el('button', {className:'lb-navbtn', id:'lb-prev-btn'});
  btnPrev.innerHTML = '&#8592;&ensp;Prev';
  var center     = el('div',  {id:'lb-center'});
  var titleEl    = el('span', {id:'lb-title'});
  var navCounter = el('span', {id:'lb-nav-counter'});
  append(center, titleEl, navCounter);
  var btnNext = el('button', {className:'lb-navbtn', id:'lb-next-btn'});
  btnNext.innerHTML = 'Next&ensp;&#8594;';
  append(navrow, btnPrev, center, btnNext);
  append(bottom, navrow);
  append(hero, imageCol, bottom);

  /* Description section */
  var descSection = el('div', {id:'lb-desc-section'});
  var descEl      = el('p',   {id:'lb-desc'});
  var btnBack     = el('button', {id:'lb-back-btn'});
  append(descSection, descEl, btnBack);

  append(overlay, topbar, hero, descSection);
  document.body.appendChild(overlay);

  /* ─────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────── */
  var images  = [];
  var current = 0;
  var scrollY = 0;

  /* ─────────────────────────────────────────────
     ABOUT DATA
     Key = exact data-title value.
     If a title has no entry here, placeholder shown.
  ───────────────────────────────────────────── */
  var aboutData = {
    'Portal': {
      description: 'At the threshold between worlds, a great bird returns from another realm.\nAround her, all beings gather, living in harmony.'
    },
    'Maternal Bond': {
      description: 'An exploration of my feelings toward motherhood.'
    }
  };

  /* ─────────────────────────────────────────────
     CATEGORY — derive from page <title>
  ───────────────────────────────────────────── */
  var categoryName = '';
  var categoryHref = '';
  (function () {
    var raw = (document.title || '').split('—')[0].trim();
    var fileMap = {
      'Illustrations':          'illustrations.html',
      'Stage Art & Production': 'stage-art-production.html',
      'My Partner':             'my-partner.html',
      "Children's Book":        'childrens-book.html',
      'Flow & Spirituality':    'flow-and-spirituality.html',
      'Traditional Mediums':    'traditional-mediums.html',
      'Graphic Design':         'graphic-design.html',
      'Jewelry':                'jewelry.html',
      'Meditation':             'meditation.html',
      'Apparel':                'apparel.html',
    };
    if (raw && fileMap[raw]) {
      categoryName = raw;
      categoryHref = fileMap[raw];
    }
  }());

  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function updateNav() {
    btnPrev.disabled = current <= 0;
    btnNext.disabled = current >= images.length - 1;
    navCounter.textContent = images.length > 1 ? (current + 1) + ' / ' + images.length : '';
  }

  function goTo(index) {
    current = index;
    var item = images[current];

    /* Image */
    img.classList.remove('is-landscape', 'is-portrait');
    img.onload = function () {
      img.classList.add(img.naturalWidth >= img.naturalHeight ? 'is-landscape' : 'is-portrait');
    };
    img.src = item.src;
    img.alt = item.name || '';

    /* Title — always from data-title */
    titleEl.textContent = item.name || '';

    /* Description — real text or placeholder */
    var d = aboutData[item.name] || {};
    if (d.description) {
      descEl.textContent = d.description;
      descEl.className   = 'has-content';
    } else {
      descEl.textContent = 'Description coming soon';
      descEl.className   = '';          /* lighter colour via CSS */
    }
    descEl.style.display = '';

    /* Back button */
    btnBack.textContent = categoryName ? 'Back to ' + categoryName : 'Back to Thumbnails';

    updateNav();
    overlay.scrollTop = 0;
  }

  function openLightbox(index) {
    scrollY = window.scrollY;
    goTo(index);
    overlay.classList.add('active');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    img.src = '';
    img.classList.remove('is-landscape', 'is-portrait');
    titleEl.textContent    = '';
    navCounter.textContent = '';
    descEl.textContent     = '';
    descEl.className       = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
  }

  /* ─────────────────────────────────────────────
     EVENTS
  ───────────────────────────────────────────── */
  imageCol.addEventListener('click', function (e) {
    if (e.target === imageCol) close();
  });

  btnClose.addEventListener('click', close);

  btnPrev.addEventListener('click', function () {
    if (current > 0) goTo(current - 1);
  });

  btnNext.addEventListener('click', function () {
    if (current < images.length - 1) goTo(current + 1);
  });

  btnBack.addEventListener('click', function () {
    if (categoryHref) {
      window.location.href = categoryHref;
    } else {
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft'  && current > 0)                 goTo(current - 1);
    if (e.key === 'ArrowRight' && current < images.length - 1) goTo(current + 1);
  });

  /* ── Touch swipe ── */
  var touchStartX = 0;
  var touchStartY = 0;
  overlay.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    if (!overlay.classList.contains('active')) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0 && current < images.length - 1) goTo(current + 1);
      if (dx > 0 && current > 0)                 goTo(current - 1);
    }
  }, { passive: true });

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  function attachLightbox() {
    var containers = document.querySelectorAll('.g, .cb-img');
    containers.forEach(function (container) {
      if (container.dataset.lbAttached) return;
      var imgEl = container.querySelector('img');
      if (!imgEl) return;
      /* Skip ghost/hidden images */
      if ((imgEl.getAttribute('style') || '').indexOf('visibility:hidden') !== -1) return;
      /* Skip video-only containers */
      if (container.querySelector('video') && !imgEl) return;

      container.dataset.lbAttached = '1';
      var name  = container.getAttribute('data-title') || '';
      var index = images.length;
      images.push({ src: imgEl.src, name: name });

      container.style.cursor = 'zoom-in';
      container.addEventListener('click', function (e) {
        e.stopPropagation();
        openLightbox(index);
      });
    });
  }

  window.csRefreshLightbox = attachLightbox;
  document.addEventListener('DOMContentLoaded', attachLightbox);

})();
