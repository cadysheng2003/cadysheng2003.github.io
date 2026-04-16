(function () {

  /* ─────────────────────────────────────────────
     STYLES
  ───────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [

    /* ── Overlay ── */
    '#lb-overlay{',
      'display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;',
      'z-index:9999;background:rgba(255,255,255,0.96);',
      'backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);',
      'flex-direction:column;overflow-y:auto;-webkit-overflow-scrolling:touch;',
    '}',
    '#lb-overlay.active{display:flex;}',

    /* Desktop: offset for side nav */
    '@media(min-width:768px){',
      '#lb-overlay{left:240px;width:calc(100vw - 240px);}',
    '}',

    /* ── Top bar ── */
    '#lb-topbar{',
      'display:flex;justify-content:flex-end;',
      'padding:16px 32px 0;flex-shrink:0;',
    '}',
    '#lb-close{',
      'font-family:"Inter",system-ui,sans-serif;font-size:11px;',
      'letter-spacing:2px;text-transform:uppercase;color:#bbb;',
      'background:none;border:none;cursor:pointer;padding:4px 0;',
      'transition:color 0.18s ease;',
    '}',
    '#lb-close:hover{color:#1a1a1a;}',

    /* ── Image area ── */
    '#lb-image-wrap{',
      'flex-shrink:0;',
      'display:flex;align-items:center;justify-content:center;',
      'padding:8px 40px 0;box-sizing:border-box;',
    '}',
    '#lb-img{',
      'display:block;object-fit:contain;',
      'max-width:100%;',
      'transition:opacity 0.2s ease;',
    '}',
    '#lb-img.is-landscape{max-height:58vh;width:auto;height:auto;}',
    '#lb-img.is-portrait{max-height:70vh;width:auto;height:auto;}',

    /* ── Info block: title + desc directly below image ── */
    '#lb-info{',
      'flex-shrink:0;',
      'padding:16px 40px 0;',
      'text-align:center;',
      'max-width:620px;',
      'margin:0 auto;',
      'width:100%;box-sizing:border-box;',
    '}',
    '#lb-title{',
      'font-family:"Cormorant Garamond",Georgia,serif;',
      'font-size:18px;font-weight:400;color:#444;',
      'letter-spacing:0.6px;display:block;',
      'margin-bottom:8px;',
    '}',
    '#lb-desc{',
      'font-family:"Lora",Georgia,serif;',
      'font-size:13.5px;font-style:italic;color:#999;',
      'line-height:1.85;white-space:pre-line;margin:0;',
    '}',
    '#lb-desc.is-placeholder{color:#ccc;}',

    /* ── Nav row ── */
    '#lb-navrow{',
      'flex-shrink:0;',
      'display:flex;align-items:center;justify-content:space-between;',
      'padding:18px 40px 28px;',
      'max-width:620px;margin:0 auto;width:100%;box-sizing:border-box;',
    '}',
    '.lb-navbtn{',
      'font-family:"Inter",system-ui,sans-serif;font-size:11px;font-weight:400;',
      'letter-spacing:2px;text-transform:uppercase;color:#aaa;',
      'background:none;border:none;cursor:pointer;padding:0;',
      'transition:color 0.18s ease;display:flex;align-items:center;gap:5px;min-width:60px;',
    '}',
    '.lb-navbtn:hover{color:#1a1a1a;}',
    '.lb-navbtn:disabled{color:#e0e0e0;cursor:default;}',
    '#lb-prev-btn{justify-content:flex-start;}',
    '#lb-next-btn{justify-content:flex-end;}',
    '#lb-counter{',
      'font-family:"Inter",system-ui,sans-serif;font-size:10px;',
      'letter-spacing:1.4px;color:#ccc;flex:1;text-align:center;',
    '}',

    /* ── Desktop: single-screen, image fills available height ── */
    '@media(min-width:768px){',
      '#lb-overlay{overflow-y:hidden;flex-direction:column;}',
      '#lb-topbar{padding:20px 48px 0;}',
      '#lb-image-wrap{flex:1;min-height:0;padding:8px 56px 0;}',
      '#lb-img.is-landscape{max-height:100%;width:auto;height:auto;}',
      '#lb-img.is-portrait{max-height:100%;width:auto;height:auto;}',
      '#lb-info{padding:12px 56px 0;}',
      '#lb-title{font-size:17px;margin-bottom:6px;}',
      '#lb-desc{font-size:14px;}',
      '#lb-navrow{padding:14px 56px 22px;}',
    '}',

    /* ── Mobile: scrollable column, image + info both visible ── */
    '@media(max-width:767px){',
      '#lb-overlay{overflow-y:auto;}',
      '#lb-topbar{padding:14px 20px 0;}',
      '#lb-image-wrap{padding:8px 20px 0;}',
      '#lb-img.is-landscape{max-height:45vh;width:auto;height:auto;}',
      '#lb-img.is-portrait{max-height:58vh;width:auto;height:auto;}',
      '#lb-info{padding:14px 24px 0;}',
      '#lb-title{font-size:17px;}',
      '#lb-desc{font-size:13px;}',
      '#lb-navrow{padding:14px 24px 36px;}',
      '#lb-prev-btn,#lb-next-btn{display:none;}',
    '}'

  ].join('');
  document.head.appendChild(style);

  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function mk(tag, id) {
    var node = document.createElement(tag);
    if (id) node.id = id;
    return node;
  }

  /* ─────────────────────────────────────────────
     BUILD DOM
  ───────────────────────────────────────────── */
  var overlay   = mk('div',    'lb-overlay');
  var topbar    = mk('div',    'lb-topbar');
  var btnClose  = mk('button', 'lb-close');
  btnClose.textContent = 'Close';
  topbar.appendChild(btnClose);

  var imageWrap = mk('div', 'lb-image-wrap');
  var img       = mk('img', 'lb-img');
  imageWrap.appendChild(img);

  var info    = mk('div',  'lb-info');
  var titleEl = mk('span', 'lb-title');
  var descEl  = mk('p',    'lb-desc');
  info.appendChild(titleEl);
  info.appendChild(descEl);

  var navrow  = mk('div',    'lb-navrow');
  var btnPrev = mk('button', 'lb-prev-btn');
  btnPrev.className = 'lb-navbtn';
  btnPrev.innerHTML = '&#8592;&ensp;Prev';
  var counter = mk('span', 'lb-counter');
  var btnNext = mk('button', 'lb-next-btn');
  btnNext.className = 'lb-navbtn';
  btnNext.innerHTML = 'Next&ensp;&#8594;';
  navrow.appendChild(btnPrev);
  navrow.appendChild(counter);
  navrow.appendChild(btnNext);

  overlay.appendChild(topbar);
  overlay.appendChild(imageWrap);
  overlay.appendChild(info);
  overlay.appendChild(navrow);
  document.body.appendChild(overlay);

  /* ─────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────── */
  var images  = [];
  var current = 0;
  var scrollY = 0;

  /* ─────────────────────────────────────────────
     ABOUT DATA
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
     CORE FUNCTIONS
  ───────────────────────────────────────────── */
  function goTo(index) {
    current = index;
    var item = images[current];
    var d    = aboutData[item.name] || {};

    /* Image: fade in after load */
    img.style.opacity = '0';
    img.classList.remove('is-landscape', 'is-portrait');
    img.onload = function () {
      img.classList.add(img.naturalWidth >= img.naturalHeight ? 'is-landscape' : 'is-portrait');
      img.style.opacity = '1';
    };
    img.src = item.src;
    img.alt = item.name || '';

    /* Title */
    titleEl.textContent = item.name || '';

    /* Description or placeholder */
    if (d.description) {
      descEl.textContent = d.description;
      descEl.className = 'lb-desc';
    } else {
      descEl.textContent = 'Description coming soon';
      descEl.className = 'lb-desc is-placeholder';
    }

    /* Counter + nav */
    counter.textContent = images.length > 1 ? (current + 1) + ' / ' + images.length : '';
    btnPrev.disabled = current <= 0;
    btnNext.disabled = current >= images.length - 1;

    overlay.scrollTop = 0;
  }

  function openLightbox(index) {
    scrollY = window.scrollY;
    goTo(index);
    overlay.classList.add('active');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    img.src = '';
    img.classList.remove('is-landscape', 'is-portrait');
    titleEl.textContent = '';
    descEl.textContent  = '';
    counter.textContent = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
  }

  /* ─────────────────────────────────────────────
     EVENTS
  ───────────────────────────────────────────── */
  btnClose.addEventListener('click', closeLightbox);

  imageWrap.addEventListener('click', function (e) {
    if (e.target === imageWrap) closeLightbox();
  });

  btnPrev.addEventListener('click', function () {
    if (current > 0) goTo(current - 1);
  });
  btnNext.addEventListener('click', function () {
    if (current < images.length - 1) goTo(current + 1);
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft'  && current > 0)                 goTo(current - 1);
    if (e.key === 'ArrowRight' && current < images.length - 1) goTo(current + 1);
  });

  /* Touch swipe */
  var txStart = 0, tyStart = 0;
  overlay.addEventListener('touchstart', function (e) {
    txStart = e.changedTouches[0].clientX;
    tyStart = e.changedTouches[0].clientY;
  }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    if (!overlay.classList.contains('active')) return;
    var dx = e.changedTouches[0].clientX - txStart;
    var dy = e.changedTouches[0].clientY - tyStart;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0 && current < images.length - 1) goTo(current + 1);
      if (dx > 0 && current > 0)                 goTo(current - 1);
    }
  }, { passive: true });

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  function attachLightbox() {
    document.querySelectorAll('.g, .cb-img').forEach(function (container) {
      if (container.dataset.lbAttached) return;
      var imgEl = container.querySelector('img');
      if (!imgEl) return;
      if ((imgEl.getAttribute('style') || '').indexOf('visibility:hidden') !== -1) return;

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
