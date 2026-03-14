(function () {

  /* ─────────────────────────────────────────────
     SHARED SIDE NAV
     Inject styles + HTML into every page.
     On homepage: wordmark fades in when hero logo scrolls out.
     On category pages: wordmark always visible.
  ───────────────────────────────────────────── */

  /* Google Fonts — Inter (if not already loaded) */
  if (!document.querySelector('link[href*="Inter"]')) {
    var fontLink = document.createElement('link');
    fontLink.rel  = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap';
    document.head.appendChild(fontLink);
  }

  /* ── STYLES ── */
  var style = document.createElement('style');
  style.textContent = [
    '.side-nav{display:none;}',
    '@media(min-width:768px){',
      'body{padding-left:240px;}',
      '.side-nav{',
        'display:flex;flex-direction:column;',
        'position:fixed;top:50%;left:20px;',
        'width:160px;transform:translateY(-50%);',
        'z-index:200;gap:0;',
      '}',

      /* All nav links */
      '.side-nav a{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:17px;font-weight:400;',
        'color:#555;text-decoration:none;',
        'letter-spacing:0.6px;padding:5px 0;',
        'line-height:1.2;white-space:nowrap;',
        'display:block;transition:color 0.2s ease;',
      '}',

      /* Underline on span */
      '.side-nav a span{display:inline;position:relative;}',
      '.side-nav a span::after{',
        'content:"";position:absolute;left:0;bottom:-1px;',
        'width:100%;height:1px;background:currentColor;',
        'transform:scaleX(0);transform-origin:left center;',
        'transition:transform 0.18s ease;',
      '}',
      '.side-nav a:hover{color:#2a2a2a;}',
      '.side-nav a:hover span::after{transform:scaleX(1);}',

      /* Wordmark */
      '.side-nav .nav-wordmark{',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:16px;font-weight:500;',
        'letter-spacing:0.22em;color:#2a2a2a;',
        'text-decoration:none;margin-bottom:28px;',
        'line-height:1.2;white-space:nowrap;',
        'text-transform:uppercase;',
        'transition:opacity 0.45s ease;',
      '}',
      /* On homepage: hidden until hero scrolls out */
      'body.is-homepage .side-nav .nav-wordmark{',
        'opacity:0;pointer-events:none;',
      '}',
      'body.is-homepage .side-nav .nav-wordmark.visible{',
        'opacity:1;pointer-events:auto;',
      '}',

      /* Home label */
      '.side-nav .nav-home{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:12px;letter-spacing:1.6px;',
        'text-transform:uppercase;color:#888;',
        'margin-bottom:0;background-image:none;',
        'transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-home::after{display:none;}',
      '.side-nav .nav-home:hover{color:#333;}',

      /* Divider */
      '.side-nav .nav-divider{',
        'width:20px;height:1px;',
        'background:#d8d4d0;margin:10px 0;',
      '}',

      /* Contact label */
      '.side-nav .nav-contact{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:12px;letter-spacing:1.6px;',
        'text-transform:uppercase;color:#888;',
        'margin-top:0;background-image:none;',
        'transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-contact::after{display:none;}',
      '.side-nav .nav-contact:hover{color:#333;}',

      /* Instagram icon */
      '.side-nav .nav-instagram{',
        'display:block;margin-top:14px;color:#aaa;',
        'transition:color 0.2s ease;line-height:0;',
      '}',
      '.side-nav .nav-instagram:hover{color:#2a2a2a;}',
    '}'
  ].join('');
  document.head.appendChild(style);

  /* ── HTML ── */
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

  /* Insert nav as first child of body */
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertBefore(nav, document.body.firstChild);

    /* Homepage: wordmark fades in when hero logo scrolls out */
    var heroLogo = document.querySelector('.logo-image');
    if (heroLogo) {
      document.body.classList.add('is-homepage');
      var wordmark = nav.querySelector('.nav-wordmark');
      var observer = new IntersectionObserver(function (entries) {
        wordmark.classList.toggle('visible', !entries[0].isIntersecting);
      }, { threshold: 0.1 });
      observer.observe(heroLogo);
    }

    /* Highlight current page link */
    var current = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a[href]').forEach(function (link) {
      if (link.getAttribute('href') === current) {
        link.style.color = '#2a2a2a';
      }
    });
  });

})();
