(function () {

  /* ─────────────────────────────────────────────
     STYLES
  ───────────────────────────────────────────── */
  var css = document.createElement('style');
  css.textContent =
    /* Thumbnail cursors */
    '.g img, .cb-img img { cursor: zoom-in !important; }' +

    /* ── Hero section ── */
    /* Hidden by default; shown when a work is opened */
    '#vw-hero {' +
      'display: none;' +
      'width: 100%;' +
      'margin-bottom: 56px;' +
    '}' +
    '#vw-hero.active { display: block; }' +

    /* Inner wrapper mirrors main content alignment */
    '#vw-inner {' +
      'max-width: 960px;' +
      'margin: 0 auto;' +
      'padding: 0 40px;' +
      'box-sizing: border-box;' +
    '}' +

    /* Image area: tall, centered, contain */
    '#vw-image-wrap {' +
      'height: 86vh;' +
      'display: flex;' +
      'align-items: center;' +
      'justify-content: center;' +
      'padding-top: 20px;' +
      'box-sizing: border-box;' +
    '}' +
    '#vw-img {' +
      'display: block;' +
      'object-fit: contain;' +
      'max-width: 100%;' +
      'transition: opacity 0.25s ease;' +
    '}' +
    '#vw-img.is-landscape { max-height: 78vh; width: auto; height: auto; }' +
    '#vw-img.is-portrait  { max-height: 86vh; width: auto; height: auto; }' +

    /* Nav bar: ← Prev | title · counter | Next → */
    '#vw-navbar {' +
      'padding: 14px 0 0;' +
      'display: flex;' +
      'align-items: center;' +
      'justify-content: space-between;' +
      'gap: 16px;' +
    '}' +
    '.vw-btn {' +
      'font-family: "Inter", system-ui, sans-serif;' +
      'font-size: 11px;' +
      'letter-spacing: 2px;' +
      'text-transform: uppercase;' +
      'color: #aaa;' +
      'background: none;' +
      'border: none;' +
      'cursor: pointer;' +
      'padding: 0;' +
      'transition: color 0.18s;' +
      'display: flex;' +
      'align-items: center;' +
      'gap: 5px;' +
      'min-width: 70px;' +
    '}' +
    '.vw-btn:hover { color: #1a1a1a; }' +
    '.vw-btn:disabled { color: #e0e0e0; cursor: default; }' +
    '#vw-prev { justify-content: flex-start; }' +
    '#vw-next { justify-content: flex-end; }' +

    '#vw-center { text-align: center; flex: 1; min-width: 0; }' +
    '#vw-title {' +
      'font-family: "Cormorant Garamond", Georgia, serif;' +
      'font-size: 16px;' +
      'font-weight: 400;' +
      'color: #555;' +
      'letter-spacing: 1px;' +
      'display: block;' +
    '}' +
    '#vw-counter {' +
      'font-family: "Inter", system-ui, sans-serif;' +
      'font-size: 10px;' +
      'letter-spacing: 1.4px;' +
      'color: #ccc;' +
      'display: block;' +
      'margin-top: 4px;' +
    '}' +

    /* Description: narrow, centered, below image */
    '#vw-desc {' +
      'max-width: 560px;' +
      'margin: 0 auto;' +
      'padding: 40px 0 64px;' +
      'text-align: center;' +
    '}' +
    '#vw-desc-title {' +
      'font-family: "Cormorant Garamond", Georgia, serif;' +
      'font-size: 20px;' +
      'font-weight: 400;' +
      'color: #2a2a2a;' +
      'letter-spacing: 0.5px;' +
      'margin-bottom: 12px;' +
    '}' +
    '#vw-desc-text {' +
      'font-family: "Lora", Georgia, serif;' +
      'font-size: 14px;' +
      'font-style: italic;' +
      'color: #999;' +
      'line-height: 2;' +
    '}' +

    /* Divider between hero and grid */
    '#vw-divider {' +
      'border: none;' +
      'border-top: 1px solid #efefef;' +
      'margin: 0 0 48px;' +
    '}' +

    /* Mobile */
    '@media (max-width: 767px) {' +
      '#vw-inner { padding: 0 18px; }' +
      '#vw-image-wrap { height: auto; min-height: 55vw; padding-top: 12px; }' +
      '#vw-img.is-landscape { max-height: 50vh; }' +
      '#vw-img.is-portrait  { max-height: 68vh; }' +
      '#vw-navbar { padding: 12px 0 0; }' +
      '.vw-btn { min-width: 52px; }' +
      '#vw-desc { padding: 28px 0 48px; }' +
    '}';
  document.head.appendChild(css);

  /* ─────────────────────────────────────────────
     ABOUT DATA
     "Work title": { description: "..." }
  ───────────────────────────────────────────── */
  var aboutData = {};

  /* ─────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────── */
  var images  = [];
  var current = -1;

  /* ─────────────────────────────────────────────
     BUILD HERO DOM (once, lives above the grid)
  ───────────────────────────────────────────── */
  var hero      = mk('div'); hero.id = 'vw-hero';
  var inner     = mk('div'); inner.id = 'vw-inner';

  var imageWrap = mk('div'); imageWrap.id = 'vw-image-wrap';
  var img       = mk('img'); img.id = 'vw-img';
  imageWrap.appendChild(img);

  var navbar = mk('div'); navbar.id = 'vw-navbar';
  var btnPrev = mkBtn('&#8592;&ensp;Prev', 'vw-btn'); btnPrev.id = 'vw-prev';
  var center  = mk('div'); center.id = 'vw-center';
  var titleEl = mk('span'); titleEl.id = 'vw-title';
  var countEl = mk('span'); countEl.id = 'vw-counter';
  center.appendChild(titleEl); center.appendChild(countEl);
  var btnNext = mkBtn('Next&ensp;&#8594;', 'vw-btn'); btnNext.id = 'vw-next';
  navbar.appendChild(btnPrev); navbar.appendChild(center); navbar.appendChild(btnNext);

  var desc      = mk('div');  desc.id = 'vw-desc';
  var descTitle = mk('p');    descTitle.id = 'vw-desc-title';
  var descText  = mk('p');    descText.id  = 'vw-desc-text';
  desc.appendChild(descTitle); desc.appendChild(descText);

  var divider = mk('hr'); divider.id = 'vw-divider';

  inner.appendChild(imageWrap);
  inner.appendChild(navbar);
  inner.appendChild(desc);
  hero.appendChild(inner);
  hero.appendChild(divider);

  btnPrev.addEventListener('click', function () {
    if (current > 0) show(current - 1, true);
  });
  btnNext.addEventListener('click', function () {
    if (current < images.length - 1) show(current + 1, true);
  });

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  function init() {
    /* Collect images */
    document.querySelectorAll('.g, .cb-img').forEach(function (thumb) {
      var imgEl = thumb.querySelector('img');
      if (!imgEl) return;
      var idx = images.length;
      images.push({ src: imgEl.src, name: thumb.getAttribute('data-title') || '', thumbEl: thumb });

      thumb.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation(); show(idx);
      });
      imgEl.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation(); show(idx);
      });
    });

    if (!images.length) return;

    /* Insert hero before .page-header or .gallery, after side-nav */
    var anchor = document.querySelector('.page-header') || document.querySelector('.gallery');
    if (anchor) {
      anchor.parentNode.insertBefore(hero, anchor);
    } else {
      document.body.insertBefore(hero, document.body.firstChild);
    }

    /* Keyboard */
    document.addEventListener('keydown', function (e) {
      if (current < 0) return;
      if (e.key === 'Escape')      { hero.classList.remove('active'); current = -1; }
      if (e.key === 'ArrowLeft'  && current > 0)               show(current - 1, true);
      if (e.key === 'ArrowRight' && current < images.length-1) show(current + 1, true);
    });

    /* Hash on load */
    var m = (window.location.hash || '').match(/^#work-(\d+)$/);
    if (m && images[+m[1]]) show(+m[1]);
  }

  /* ─────────────────────────────────────────────
     SHOW WORK
  ───────────────────────────────────────────── */
  function show(idx, stayInHero) {
    current = idx;
    var item = images[idx];
    var d    = aboutData[item.name] || {};

    /* Image */
    img.style.opacity = '0';
    img.classList.remove('is-landscape', 'is-portrait');
    img.onload = function () {
      img.classList.add(img.naturalWidth >= img.naturalHeight ? 'is-landscape' : 'is-portrait');
      img.style.opacity = '1';
    };
    img.src = item.src;
    img.alt = item.name;

    /* Text */
    titleEl.textContent = item.name;
    countEl.textContent = images.length > 1 ? (idx + 1) + ' / ' + images.length : '';
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === images.length - 1;
    descTitle.textContent = item.name;
    descTitle.style.display = item.name ? '' : 'none';
    descText.textContent  = d.description || '';
    descText.style.display = d.description ? '' : 'none';

    /* Show hero */
    hero.classList.add('active');
    history.replaceState(null, '', '#work-' + idx);

    /* Scroll to hero top unless navigating prev/next */
    if (!stayInHero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ─────────────────────────────────────────────
     UTILS
  ───────────────────────────────────────────── */
  function mk(tag) { return document.createElement(tag); }
  function mkBtn(html, cls) {
    var b = document.createElement('button');
    b.className = cls; b.innerHTML = html; return b;
  }

  /* Boot */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
