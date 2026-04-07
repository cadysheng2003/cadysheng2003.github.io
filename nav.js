(function () {

  /* ─────────────────────────────────────────────
     SHARED NAV
     Desktop: fixed side nav (unchanged)
     Mobile:  hamburger → full-screen slide-in menu
  ───────────────────────────────────────────── */

  if (!document.querySelector('link[href*="Inter"]')) {
    var fontLink = document.createElement('link');
    fontLink.rel  = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap';
    document.head.appendChild(fontLink);
  }

  /* ── STYLES ── */
  var style = document.createElement('style');
  style.textContent = [

    /* ── Global defaults: mobile elements always hidden unless mobile query activates ── */
    '.mob-bar{display:none !important;}',
    '#mob-menu{',
      'display:block;',
      'position:fixed;top:0;left:0;right:0;bottom:0;',
      'visibility:hidden;',
      'z-index:800;',
      'pointer-events:none;',
    '}',

    /* ── Desktop side nav (≥ 768px) ── */
    '.side-nav{display:none;}',
    '@media(min-width:768px){',
      'body{padding-left:240px;}',
      '.side-nav{',
        'display:flex;flex-direction:column;',
        'position:fixed;',
        'left:64px;',
        'width:160px;',
        'top:120px;',
        'transform:none;',
        'z-index:200;gap:0;',
      '}',
      '.side-nav a{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:17px;font-weight:400;',
        'color:#555;text-decoration:none;',
        'letter-spacing:0.6px;padding:5px 0;',
        'line-height:1.2;white-space:nowrap;',
        'display:block;transition:color 0.2s ease;',
      '}',
      '.side-nav a span{display:inline;position:relative;}',
      '.side-nav a span::after{',
        'content:"";position:absolute;left:0;bottom:-1px;',
        'width:100%;height:1px;background:currentColor;',
        'transform:scaleX(0);transform-origin:left center;',
        'transition:transform 0.18s ease;',
      '}',
      '.side-nav a:hover{color:#2a2a2a;}',
      '.side-nav a:hover span::after{transform:scaleX(1);}',
      '.side-nav .nav-wordmark{',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:16px;font-weight:500;',
        'letter-spacing:0.22em;color:#2a2a2a;',
        'text-decoration:none;margin-bottom:28px;',
        'line-height:1.2;white-space:nowrap;',
        'text-transform:uppercase;',
        'transition:opacity 0.45s ease;',
      '}',
      'body.is-homepage .side-nav .nav-wordmark{opacity:0;pointer-events:none;}',
      'body.is-homepage .side-nav .nav-wordmark.visible{opacity:1;pointer-events:auto;}',
      '.side-nav .nav-home{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:12px;letter-spacing:1.6px;',
        'text-transform:uppercase;color:#888;',
        'margin-bottom:0;background-image:none;transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-home::after{display:none;}',
      '.side-nav .nav-home:hover{color:#333;}',
      '.side-nav .nav-divider{width:20px;height:1px;background:#d8d4d0;margin:10px 0;}',
      '.side-nav .nav-contact{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:12px;letter-spacing:1.6px;',
        'text-transform:uppercase;color:#888;',
        'margin-top:0;background-image:none;transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-contact::after{display:none;}',
      '.side-nav .nav-contact:hover{color:#333;}',
      '.side-nav .nav-instagram{display:block;margin-top:14px;color:#aaa;transition:color 0.2s ease;line-height:0;}',
      '.side-nav .nav-instagram:hover{color:#2a2a2a;}',
    '}',

    /* ── Mobile nav (< 768px) ── */
    '@media(max-width:767px) and (pointer:coarse){',
      /* Hide desktop side nav entirely */
      '.side-nav{display:none !important;}',

      /* Fixed top bar */
      '.mob-bar{',
        'display:flex !important;',
        'position:fixed;top:0;left:0;right:0;',
        'height:52px;',
        'align-items:center;justify-content:space-between;',
        'padding:0 20px;',
        'background:rgba(255,255,255,0.95);',
        'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);',
        'z-index:900;',
        'border-bottom:1px solid rgba(0,0,0,0.04);',
      '}',
      '.mob-bar__wordmark{',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:15px;font-weight:500;letter-spacing:0.2em;',
        'text-transform:uppercase;color:#3A3633;',
        'text-decoration:none;opacity:0;transition:opacity 0.4s ease;',
        'pointer-events:none;',
      '}',
      '.mob-bar__wordmark.visible{opacity:1;pointer-events:auto;}',
      '.mob-bar__burger{',
        'background:none;border:none;cursor:pointer;',
        'padding:8px;margin-right:-8px;',
        'display:flex;flex-direction:column;gap:5px;',
      '}',
      '.mob-bar__burger span{',
        'display:block;width:22px;height:1.5px;',
        'background:#3A3633;',
        'border-radius:2px;',
        'transition:transform 0.3s ease, opacity 0.3s ease;',
        'transform-origin:center;',
      '}',
      /* Burger → X animation */
      '.mob-bar__burger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}',
      '.mob-bar__burger.open span:nth-child(2){opacity:0;}',
      '.mob-bar__burger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}',

      /* Full-screen slide-in menu — activated on mobile */
      '#mob-menu{',
        'background:#fff;',
        'z-index:800;',
        'transform:translateY(-100%);',
        'visibility:hidden;',
        'pointer-events:none;',
        'transition:transform 0.38s cubic-bezier(0.4,0,0.2,1), visibility 0s linear 0.38s;',
        'overflow-y:auto;',
        'padding:68px 32px 40px;',
        'box-sizing:border-box;',
      '}',
      '#mob-menu.open{transform:translateY(0);visibility:visible;pointer-events:auto;transition:transform 0.38s cubic-bezier(0.4,0,0.2,1), visibility 0s linear 0s;}',

      /* All links: refined, lighter */
      '#mob-menu a{',
        'display:block;',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:20px;font-weight:400;',
        'color:#2a2a2a;text-decoration:none;',
        'letter-spacing:0.1px;',
        'line-height:1.65;',
        'padding:4px 0;',                                /* tighter per-item */
        'border:none !important;',
        'transition:color 0.18s ease;',
      '}',
      '#mob-menu a:active{color:#aaa;}',

      /* Group labels: quieter, only appear between groups */
      '#mob-menu .mob-menu__label{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:11px;letter-spacing:1.2px;',
        'text-transform:uppercase;',
        'color:#2a2a2a;opacity:0.45;',                  /* softer */
        'display:block;',
        'padding-top:14px;',
        'margin:12px 0 6px;',
        'border-top:1px solid rgba(0,0,0,0.06);',       /* very subtle divider */
      '}',
      '#mob-menu .mob-menu__label:first-child{',
        'border-top:none;padding-top:0;margin-top:0;',
      '}',

      /* Connect links: same weight, slightly muted, sentence case */
      '#mob-menu .mob-menu__contact{',
        'font-family:"Cormorant Garamond",Georgia,serif !important;',
        'font-size:15px !important;font-weight:400;',
        'letter-spacing:0.1px;line-height:1.4;',
        'color:#999 !important;',
        'text-transform:none !important;',
        'border:none !important;',
      '}',

      /* Push body down so content isn't under fixed bar */
      'body{padding-top:52px;}',
    '}'

  ].join('');
  document.head.appendChild(style);

  /* ── Desktop side nav HTML ── */
  var nav = document.createElement('nav');
  nav.className = 'side-nav';
  nav.innerHTML = [
    '<a href="index.html" class="nav-wordmark">Cady Sheng</a>',
    '<a href="index.html" class="nav-home">Home</a>',
    '<div class="nav-divider"></div>',
    '<a href="illustrations.html"><span>Illustrations</span></a>',
    '<a href="stage-art-production.html"><span>Stage Art &amp; Production</span></a>',
    '<a href="my-partner.html"><span>My Partner</span></a>',
    '<a href="childrens-book.html"><span>Children&#8217;s Book</span></a>',
    '<a href="flow-and-spirituality.html"><span>Flow &amp; Spirituality</span></a>',
    '<a href="traditional-mediums.html"><span>Traditional Mediums</span></a>',
    '<a href="graphic-design.html"><span>Graphic Design</span></a>',
    '<a href="jewelry.html"><span>Jewelry</span></a>',
    '<a href="meditation.html"><span>Meditation</span></a>',
    '<a href="apparel.html"><span>Apparel</span></a>',
    '<div class="nav-divider"></div>',
    '<a href="#footer" class="nav-contact">Contact</a>',
    '<a href="https://instagram.com/cadysheng" target="_blank" class="nav-instagram" aria-label="Instagram">',
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">',
        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>',
        '<circle cx="12" cy="12" r="4"/>',
        '<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>',
      '</svg>',
    '</a>'
  ].join('');

  /* ── Mobile top bar ── */
  var mobBar = document.createElement('div');
  mobBar.className = 'mob-bar';
  mobBar.innerHTML =
    '<a href="index.html" class="mob-bar__wordmark">Cady Sheng</a>' +
    '<button class="mob-bar__burger" aria-label="Menu" aria-expanded="false">' +
      '<span></span><span></span><span></span>' +
    '</button>';

  /* ── Mobile menu ── */
  var mobMenu = document.createElement('div');
  mobMenu.id = 'mob-menu';
  mobMenu.setAttribute('aria-hidden', 'true');
  mobMenu.innerHTML =
    '<a href="index.html">Home</a>' +
    '<span class="mob-menu__label">Works</span>' +
    '<a href="illustrations.html">Illustrations</a>' +
    '<a href="stage-art-production.html">Stage Art &amp; Production</a>' +
    '<a href="my-partner.html">My Partner</a>' +
    '<a href="childrens-book.html">Children&#8217;s Book</a>' +
    '<a href="flow-and-spirituality.html">Flow &amp; Spirituality</a>' +
    '<a href="traditional-mediums.html">Traditional Mediums</a>' +
    '<a href="graphic-design.html">Graphic Design</a>' +
    '<a href="jewelry.html">Jewelry</a>' +
    '<a href="meditation.html">Meditation</a>' +
    '<a href="apparel.html">Apparel</a>' +
    '<span class="mob-menu__label">Connect</span>' +
    '<a href="#footer" class="mob-menu__contact">Contact</a>' +
    '<a href="https://instagram.com/cadysheng" target="_blank" class="mob-menu__contact">Instagram</a>';

  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertBefore(nav, document.body.firstChild);
    document.body.insertBefore(mobMenu, document.body.firstChild);
    document.body.insertBefore(mobBar, document.body.firstChild);

    var burger = mobBar.querySelector('.mob-bar__burger');
    var wordmark = mobBar.querySelector('.mob-bar__wordmark');

    /* Burger toggle */
    burger.addEventListener('click', function () {
      var isOpen = mobMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      mobMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close menu when a link is clicked */
    mobMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Desktop: wordmark fades in when hero logo scrolls out */
    var heroLogo = document.querySelector('.logo-image');
    if (heroLogo) {
      document.body.classList.add('is-homepage');
      var desktopWordmark = nav.querySelector('.nav-wordmark');
      var observer = new IntersectionObserver(function (entries) {
        var visible = !entries[0].isIntersecting;
        desktopWordmark.classList.toggle('visible', visible);
        wordmark.classList.toggle('visible', visible);
      }, { threshold: 0.1 });
      observer.observe(heroLogo);
    } else {
      /* On category pages, always show mobile wordmark */
      wordmark.classList.add('visible');
    }

    /* Highlight current page */
    var current = window.location.pathname.split('/').pop() || 'index.html';
    [nav, mobMenu].forEach(function (el) {
      el.querySelectorAll('a[href]').forEach(function (link) {
        if (link.getAttribute('href') === current) {
          link.style.color = '#2a2a2a';
        }
      });
    });
  });

})();
