(function () {

  /* ─────────────────────────────────────────────
     STYLES
  ───────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [

    /* Overlay — scrollable column */
    '#lb-overlay{display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background:rgba(255,255,255,0.91);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);flex-direction:column;overflow-y:auto;}',
    '#lb-overlay.active{display:flex;}',
    '@media(min-width:768px){#lb-overlay{left:240px;width:calc(100vw - 240px);}}',

    /* Top bar */
    '#lb-topbar{display:flex;justify-content:flex-end;padding:20px 32px 0;flex-shrink:0;}',
    '#lb-close{font-family:"Inter",system-ui,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#bbb;background:none;border:none;cursor:pointer;padding:0;transition:color 0.18s ease;}',
    '#lb-close:hover{color:#1a1a1a;}',

    /* Hero: image + nav bar, exactly fills the viewport so desc peeks below */
    '#lb-hero{flex-shrink:0;height:calc(100vh - 40px);display:flex;flex-direction:column;box-sizing:border-box;}',

    /* Image area fills remaining hero height */
    '#lb-image-col{flex:1;display:flex;align-items:center;justify-content:center;padding:8px 48px 0;box-sizing:border-box;min-height:0;cursor:crosshair;}',
    '#lb-img{display:block;object-fit:contain;max-width:100%;}',
    '#lb-img.is-landscape{max-height:74vh;width:auto;height:auto;}',
    '#lb-img.is-portrait{max-height:80vh;width:auto;height:auto;}',

    /* Nav bar at bottom of hero */
    '#lb-bottom{flex-shrink:0;padding:14px 48px 20px;box-sizing:border-box;}',
    '#lb-navrow{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:0;}',
    '.lb-navbtn{font-family:"Inter",system-ui,sans-serif;font-size:11px;font-weight:400;letter-spacing:2px;text-transform:uppercase;color:#aaa;background:none;border:none;cursor:pointer;padding:0;line-height:1;transition:color 0.18s ease;display:flex;align-items:center;gap:5px;min-width:80px;}',
    '.lb-navbtn:hover{color:#1a1a1a;}',
    '.lb-navbtn:disabled{color:#ddd;cursor:default;}',
    '#lb-prev-btn{justify-content:flex-start;}',
    '#lb-next-btn{justify-content:flex-end;}',
    '#lb-center{text-align:center;flex:1;min-width:0;}',
    '#lb-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:16px;color:#555;letter-spacing:1px;font-weight:400;display:block;}',
    '#lb-counter{font-family:"Inter",system-ui,sans-serif;font-size:10px;letter-spacing:1.4px;color:#bbb;display:block;margin-top:4px;}',

    /* Description section — sits below the hero, naturally peeks */
    '#lb-desc-section{flex-shrink:0;padding:32px 48px 64px;box-sizing:border-box;max-width:600px;margin:0 auto;width:100%;text-align:center;}',
    '#lb-desc{font-family:"Lora",Georgia,serif;font-size:13.5px;font-style:italic;color:#999;line-height:1.9;margin-bottom:28px;}',
    '#lb-back-btn{display:inline-block;font-family:"Inter",system-ui,sans-serif;font-size:10px;letter-spacing:1.8px;text-transform:uppercase;color:#ccc;background:none;border:none;cursor:pointer;padding:0;transition:color 0.18s ease;}',
    '#lb-back-btn:hover{color:#555;}',

    /* Mobile */
    '@media(max-width:767px){',
    '#lb-topbar{padding:14px 20px 0;}',
    '#lb-hero{height:calc(100vh - 32px);}',
    '#lb-image-col{padding:6px 20px 0;}',
    '#lb-img.is-landscape{max-height:58vh;}',
    '#lb-img.is-portrait{max-height:68vh;}',
    '#lb-bottom{padding:12px 20px 16px;}',
    '.lb-navbtn{min-width:56px;}',
    '#lb-desc-section{padding:24px 24px 48px;}',
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

  /* Hero: image + nav bar (fills viewport so desc peeks below) */
  var hero     = el('div', {id:'lb-hero'});
  var imageCol = el('div', {id:'lb-image-col'});
  var img      = el('img', {id:'lb-img'});
  append(imageCol, img);

  var bottom  = el('div', {id:'lb-bottom'});
  var navrow  = el('div', {id:'lb-navrow'});
  var btnPrev = el('button', {className:'lb-navbtn', id:'lb-prev-btn'});
  btnPrev.innerHTML = '&#8592;&ensp;Prev';
  var center    = el('div',  {id:'lb-center'});
  var titleEl   = el('span', {id:'lb-title'});
  var counterEl = el('span', {id:'lb-counter'});
  append(center, titleEl, counterEl);
  var btnNext = el('button', {className:'lb-navbtn', id:'lb-next-btn'});
  btnNext.innerHTML = 'Next&ensp;&#8594;';
  append(navrow, btnPrev, center, btnNext);
  append(bottom, navrow);
  append(hero, imageCol, bottom);

  /* Description section — below hero, scrolled into view */
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
     ABOUT DATA — add descriptions here, e.g.:
       "Portal": { description: "Digital illustration, 2024." }
  ───────────────────────────────────────────── */
  var aboutData = {};

  /* ─────────────────────────────────────────────
     CATEGORY — derive name + href from page <title>
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
    counterEl.textContent = images.length > 1 ? (current + 1) + ' / ' + images.length : '';
  }

  function goTo(index) {
    current = index;
    var item = images[current];

    img.classList.remove('is-landscape', 'is-portrait');
    img.onload = function () {
      img.classList.add(img.naturalWidth >= img.naturalHeight ? 'is-landscape' : 'is-portrait');
    };
    img.src = item.src;

    titleEl.textContent = item.name || '';
    var d = aboutData[item.name] || {};
    descEl.textContent  = d.description || '';
    descEl.style.display = d.description ? '' : 'none';

    btnBack.textContent = categoryName ? 'Back to ' + categoryName : 'Back to Thumbnails';

    updateNav();
    /* Always return to top of overlay so image is first thing seen */
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
    titleEl.textContent   = '';
    counterEl.textContent = '';
    descEl.textContent    = '';
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

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll('.g img, .cb-img img');
    els.forEach(function (imgEl) {
      imgEl.style.cursor = 'zoom-in';
      var name = '';
      var parent = imgEl.closest('[data-title]');
      if (parent) name = parent.getAttribute('data-title');
      var index = images.length;
      images.push({ src: imgEl.src, name: name });
      imgEl.addEventListener('click', function (e) {
        e.stopPropagation();
        openLightbox(index);
      });
    });
  });

})();
