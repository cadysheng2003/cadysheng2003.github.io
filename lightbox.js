(function () {

  /* ─────────────────────────────────────────────
     STYLES
  ───────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [

    /* Overlay */
    '#lb-overlay{display:none;position:fixed;inset:0;z-index:9999;background:rgba(255,255,255,0.93);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);cursor:crosshair;}',
    '#lb-overlay.active{display:flex;flex-direction:row;}',

    /* Left: image area — pointer-events:none so clicks pass through to overlay backdrop */
    '#lb-image-col{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 40px 80px 48px;box-sizing:border-box;min-width:0;pointer-events:none;}',
    '#lb-img{max-width:100%;max-height:calc(100vh - 160px);object-fit:contain;display:block;pointer-events:none;}',
    '#lb-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:17px;color:#666;letter-spacing:1.2px;text-align:center;font-weight:400;margin-top:16px;pointer-events:none;}',
    '#lb-counter{font-family:"Inter",system-ui,sans-serif;font-size:10px;letter-spacing:1.4px;color:#ccc;text-align:center;margin-top:6px;pointer-events:none;}',

    /* Right: sidebar — pointer-events:auto so controls work */
    '#lb-sidebar{width:220px;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;padding:28px 32px 40px 0;box-sizing:border-box;pointer-events:auto;}',

    /* Close — top of sidebar */
    '#lb-close{font-family:"Inter",system-ui,sans-serif;font-size:11px;font-weight:400;letter-spacing:2px;text-transform:uppercase;color:#aaa;background:none;border:none;cursor:pointer;padding:0;text-align:left;transition:color 0.18s ease;align-self:flex-end;}',
    '#lb-close:hover{color:#1a1a1a;}',

    /* Controls — bottom of sidebar */
    '#lb-controls{display:flex;flex-direction:column;align-items:flex-start;gap:16px;}',

    /* Nav row */
    '#lb-nav{display:flex;align-items:center;gap:6px;}',

    /* Buttons */
    '.lb-btn{font-family:"Inter",system-ui,sans-serif;font-size:12px;font-weight:400;letter-spacing:2px;text-transform:uppercase;color:#555;background:none;border:none;cursor:pointer;padding:0;line-height:1;transition:color 0.18s ease;text-align:left;}',
    '.lb-btn:hover{color:#1a1a1a;}',
    '.lb-btn:disabled{color:#ccc;cursor:default;}',
    '.lb-sep{font-family:"Inter",system-ui,sans-serif;font-size:12px;color:#ccc;letter-spacing:0;line-height:1;}',

    /* About panel — expands inside sidebar above controls */
    '#lb-about-panel{display:none;border-top:none;padding-top:0;margin-bottom:4px;}',
    '#lb-about-panel.open{display:block;}',
    '.ab-row{display:flex;gap:10px;margin-bottom:5px;}',
    '.ab-label{font-family:"Inter",system-ui,sans-serif;font-size:10px;letter-spacing:1.3px;text-transform:uppercase;color:#bbb;min-width:54px;padding-top:2px;flex-shrink:0;}',
    '.ab-value{font-family:"Lora",Georgia,serif;font-size:13px;color:#666;line-height:1.65;}',
    '.ab-desc{font-family:"Lora",Georgia,serif;font-size:13px;font-style:italic;color:#999;line-height:1.8;margin-top:10px;}',

    /* Mobile: stack vertically */
    '@media(max-width:700px){',
    '#lb-overlay.active{flex-direction:column;}',
    '#lb-image-col{padding:44px 20px 16px;flex:none;height:55vh;}',
    '#lb-img{max-height:100%;}',
    '#lb-sidebar{width:100%;flex-direction:row;align-items:flex-end;border-left:none;border-top:1px solid #f0f0f0;padding:16px 20px 20px;}',
    '#lb-controls{flex-direction:row;gap:20px;flex-wrap:wrap;}',
    '#lb-about-panel{position:absolute;bottom:80px;left:20px;right:20px;background:#fff;padding:16px;border:1px solid #ebebeb;border-radius:2px;}',
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

  /* Left column */
  var imageCol = el('div', {id:'lb-image-col'});
  var img      = el('img', {id:'lb-img'});
  var title    = el('p',   {id:'lb-title'});
  var counter  = el('p',   {id:'lb-counter'});
  append(imageCol, img, title, counter);

  /* Right sidebar */
  var sidebar  = el('div', {id:'lb-sidebar'});
  var btnClose = el('button', {id:'lb-close', textContent:'Close'});

  /* About panel — sits between close and controls */
  var aboutPanel = el('div', {id:'lb-about-panel'});
  var aboutInner = el('div', {id:'lb-about-inner'});
  aboutPanel.appendChild(aboutInner);

  /* Controls */
  var controls  = el('div', {id:'lb-controls'});
  var nav       = el('div', {id:'lb-nav'});
  var btnPrev   = el('button', {className:'lb-btn', id:'lb-prev',      textContent:'Prev'});
  var navSep    = el('span',   {className:'lb-sep', textContent:'/'});
  var btnNext   = el('button', {className:'lb-btn', id:'lb-next',      textContent:'Next'});
  append(nav, btnPrev, navSep, btnNext);

  var btnAbout  = el('button', {className:'lb-btn', id:'lb-about-btn', textContent:'About This Work'});
  var btnBack   = el('button', {className:'lb-btn', id:'lb-back-btn',  textContent:'Back to Thumbnails'});
  append(controls, nav, btnAbout, btnBack);

  append(sidebar, btnClose, aboutPanel, controls);
  append(overlay, imageCol, sidebar);
  document.body.appendChild(overlay);

  /* ─────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────── */
  var images  = [];
  var current = 0;
  var scrollY = 0;

  /* ─────────────────────────────────────────────
     ABOUT DATA
     Add real data like:
       "Photoshoot Look 1": {
         year: "2023",
         medium: "Photography",
         description: "Shot in collaboration with Toread X..."
       }
  ───────────────────────────────────────────── */
  var aboutData = {};

  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function updateNav() {
    btnPrev.disabled = current <= 0;
    btnNext.disabled = current >= images.length - 1;
    counter.textContent = images.length > 1 ? (current + 1) + ' / ' + images.length : '';
  }

  function row(label, value) {
    return '<div class="ab-row"><span class="ab-label">' + label + '</span><span class="ab-value">' + value + '</span></div>';
  }

  function renderAbout(name) {
    var d = aboutData[name] || {};
    aboutInner.innerHTML =
      row('Title', name || '\u2014') +
      '<hr style="border:none;border-top:1px solid #ebebeb;margin:12px 0;">' +
      '<p class="ab-desc">' + (d.description || 'Description coming soon.') + '</p>';
  }

  function goTo(index) {
    current = index;
    var item = images[current];
    img.src = item.src;
    title.textContent = item.name || '';
    renderAbout(item.name);
    updateNav();
  }

  function openLightbox(index) {
    scrollY = window.scrollY;
    aboutPanel.classList.remove('open');
    btnAbout.textContent = 'About This Work';
    goTo(index);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    img.src = '';
    title.textContent = '';
    aboutPanel.classList.remove('open');
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
  }

  /* ─────────────────────────────────────────────
     EVENTS
  ───────────────────────────────────────────── */

  // Backdrop close: imageCol has pointer-events:none so all clicks on the
  // left side pass straight through to the overlay. Sidebar has
  // pointer-events:auto so controls work. Result: clicking any empty
  // area always hits the overlay and triggers close.
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  // Sidebar stops propagation so clicks inside never reach overlay
  sidebar.addEventListener('click', function (e) { e.stopPropagation(); });

  btnClose.addEventListener('click', close);

  btnPrev.addEventListener('click', function () {
    if (current > 0) goTo(current - 1);
  });

  btnNext.addEventListener('click', function () {
    if (current < images.length - 1) goTo(current + 1);
  });

  btnAbout.addEventListener('click', function () {
    var opening = !aboutPanel.classList.contains('open');
    aboutPanel.classList.toggle('open', opening);
    btnAbout.textContent = opening ? 'Hide Info' : 'About This Work';
  });

  btnBack.addEventListener('click', function () {
    close();
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
