(function () {

  /* ═══════════════════════════════════════════════
     i18n — BILINGUAL DICTIONARY
     All translatable strings keyed by id.
     To edit a translation: find the key, change zh value.
  ═══════════════════════════════════════════════ */
  var i18n = {
    en: {
      /* ── Index page ── */
      'index.tagline': 'Truth, Love, Flow, Oneness',

      /* ── Nav / menu ── */
      'nav.home':               'Home',
      'nav.works':              'Works',
      'nav.connect':            'Connect',
      'nav.contact':            'Contact',
      'nav.instagram':          'Instagram',
      'nav.illustrations':      'Illustrations',
      'nav.stage':              'Stage Art & Production',
      'nav.partner':            'My Partner',
      'nav.childrens':          'Children\u2019s Book',
      'nav.flow':               'Flow & Spirituality',
      'nav.traditional':        'Traditional Mediums',
      'nav.graphic':            'Graphic Design',
      'nav.jewelry':            'Jewelry',
      'nav.meditation':         'Meditation',
      'nav.apparel':            'Apparel',

      /* ── Page nav prev/next labels ── */
      'pnav.prev':              'Previous',
      'pnav.next':              'Next',

      /* ── Page nav prev/next names (per page) ── */
      'pnav.illustrations':     'Illustrations',
      'pnav.stage':             'Stage Art',
      'pnav.partner':           'My Partner',
      'pnav.childrens':         'Children',
      'pnav.flow':              'Flow',
      'pnav.traditional':       'Traditional',
      'pnav.graphic':           'Graphic',
      'pnav.jewelry':           'Jewelry',
      'pnav.meditation':        'Meditation',
      'pnav.apparel':           'Apparel',

      /* ── Graphic design section labels ── */
      'sec.bakery':             'Bakery',
      'sec.typeface':           'Typeface Design & Business Card',

      /* ── Jewelry intro ── */
      'jewelry.intro1':         'When the stones are taken away from the mountains and rivers of their homeland, can we still feel their souls? My work explores a sense of sacred balance through color, texture, form, and rhythm.',
      'jewelry.intro2':         'Turquoise, jade, Southern red agate, Alxa sugar-heart agate, moss agate, silver, raw stones, carving, and weaving become the language of this exploration.',
      'jewelry.intro3':         'Some of my pieces are inspired by Buddhist elements.',

      /* ── Meditation intro ── */
      'meditation.intro1':      'Returning to consciousness through meditation is a daily practice in my life.',
      'meditation.intro2':      'I initiated RISD Presence, a student-led mindfulness community where I organize group meditation sessions that invite people to slow down and reconnect.',

      /* ── Apparel subtitle ── */
      'apparel.subtitle':       'Achieved the Season\u2019s Top Sales in Collaboration with Toread X',

      /* ── Children's Book text ── */
      'cb.p1':   'I remember when Earth was created,',
      'cb.p2':   'Earth was just a little asteroid.',
      'cb.p3':   'We put planets together',
      'cb.p4':   '\u201cHolding hands\u201d',
      'cb.p5':   'I see everyone! Everyone feels me too!',
      'cb.p6':   'A little girl shouts:',
      'cb.p7a':  '\u201cHi Everyone!',
      'cb.p7b':  'Hi Everyone!',
      'cb.p7c':  'Hi Everyone!',
      'cb.p7d':  'I see you',
      'cb.p7e':  'I love you!',
      'cb.p7f':  'I feel you!\u201d',
      'cb.p7g':  'She feels the fullness in everything.',
      'cb.p7h':  'She feels incredibly alive.',
      'cb.p8':   'She hears all the animals too, all at the same time from miles away; the crickets, a deer stepping into the crunchy leaves.',
      'cb.p9':   'A vibration, a melody made by nature all together.',
      'cb.p10a': 'Everyone dances back to me, waving their bodies and branches and leaves.',
      'cb.p10b': '\u201cNow I will never unsee you,\u201d says the little girl.',
      'cb.p10c': 'She hugs everyone.',
      'cb.p10d': '! Bye Everyone !',
      'cb.p10e': 'Echoes in the woods.',

      /* ── Footer ── */
      'footer.inquiries':  'For commissions, collaborations, or general inquiries,',
      'footer.contact':    'please contact me at:',
      'footer.email':      'Email:',
      'footer.phone':      'Phone:',
      'footer.instagram':  'Instagram:',
      'footer.copyright':  '\u00a9 2026 Cady Sheng.',
      'footer.rights':     'All rights reserved.',
    },

    zh: {
      /* ── Index page ── */
      'index.tagline': '真理、爱、流动、合一',

      /* ── Nav / menu ── */
      'nav.home':               '主页',
      'nav.works':              '作品',
      'nav.connect':            '联系',
      'nav.contact':            '联系我',
      'nav.instagram':          'Instagram',
      'nav.illustrations':      '插画',
      'nav.stage':              '舞台艺术与制作',
      'nav.partner':            '我的伴侣',
      'nav.childrens':          '儿童绘本',
      'nav.flow':               '流动与灵性',
      'nav.traditional':        '传统媒介',
      'nav.graphic':            '平面设计',
      'nav.jewelry':            '珠宝',
      'nav.meditation':         '冥想',
      'nav.apparel':            '服装',

      /* ── Page nav prev/next labels ── */
      'pnav.prev':              '上一页',
      'pnav.next':              '下一页',

      /* ── Page nav prev/next names ── */
      'pnav.illustrations':     '插画',
      'pnav.stage':             '舞台艺术',
      'pnav.partner':           '我的伴侣',
      'pnav.childrens':         '儿童绘本',
      'pnav.flow':              '流动',
      'pnav.traditional':       '传统媒介',
      'pnav.graphic':           '平面设计',
      'pnav.jewelry':           '珠宝',
      'pnav.meditation':        '冥想',
      'pnav.apparel':           '服装',

      /* ── Graphic design section labels ── */
      'sec.bakery':             '面包店',
      'sec.typeface':           '字体设计与名片',

      /* ── Jewelry intro ── */
      'jewelry.intro1':         '当石头从故乡的山川中被取走，我们还能感受到它们的灵魂吗？我的作品通过色彩、质感、形态与节奏，探寻一种神圣的平衡感。',
      'jewelry.intro2':         '绿松石、玉石、南红玛瑙、阿拉善糖心玛瑙、苔藓玛瑙、银、原石、雕刻与编织，成为这场探索的语言。',
      'jewelry.intro3':         '部分作品灵感来源于佛教元素。',

      /* ── Meditation intro ── */
      'meditation.intro1':      '回归意识是我日常生活中的修行。',
      'meditation.intro2':      '我创立了 RISD Presence——一个由学生自发组织的正念社群，定期举办冥想活动，邀请大家放慢脚步，重新与自我连接。',

      /* ── Apparel subtitle ── */
      'apparel.subtitle':       '与 Toread X 合作，荣获当季销售冠军',

      /* ── Children's Book text ── */
      'cb.p1':   '我记得地球刚被创造出来的时候，',
      'cb.p2':   '地球只是一颗小小的陨石。',
      'cb.p3':   '我们把星球拼凑在一起',
      'cb.p4':   '"手牵着手"',
      'cb.p5':   '我看见了所有人！所有人也感受到我！',
      'cb.p6':   '一个小女孩喊道：',
      'cb.p7a':  '"大家好！',
      'cb.p7b':  '大家好！',
      'cb.p7c':  '大家好！',
      'cb.p7d':  '我看见你们',
      'cb.p7e':  '我爱你们！',
      'cb.p7f':  '我感受到你们！"',
      'cb.p7g':  '她感受到万物中饱满的存在。',
      'cb.p7h':  '她感到无比鲜活。',
      'cb.p8':   '她也同时听到了远处所有动物的声音——蟋蟀的鸣叫，一头鹿踩入落叶的声响。',
      'cb.p9':   '一种振动，一首由大自然共同演奏的旋律。',
      'cb.p10a': '万物向我舞动而来，摇曳着身躯、枝桠与叶片。',
      'cb.p10b': '"现在我再也无法假装看不见你们了，"小女孩说。',
      'cb.p10c': '她拥抱了所有人。',
      'cb.p10d': '！再见，大家！',
      'cb.p10e': '声音在林间回响。',

      /* ── Footer ── */
      'footer.inquiries':  '如有委托、合作或其他咨询，',
      'footer.contact':    '欢迎通过以下方式联系我：',
      'footer.email':      '邮箱：',
      'footer.phone':      '电话：',
      'footer.instagram':  'Instagram：',
      'footer.copyright':  '\u00a9 2026 Cady Sheng。',
      'footer.rights':     '版权所有。',
    }
  };

  /* ═══════════════════════════════════════════════
     LANGUAGE STATE
     Always default to English on fresh load.
     Only remember preference after user explicitly switches.
  ═══════════════════════════════════════════════ */
  var LANG_KEY = 'cs-lang';
  var currentLang = 'en'; /* always start English */

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    updateLangBtn();
    applyFontClass();
  }

  /* Apply zh font class to <html> */
  function applyFontClass() {
    document.documentElement.classList.toggle('lang-zh', currentLang === 'zh');
  }

  /* ═══════════════════════════════════════════════
     APPLY TRANSLATIONS — walk all [data-i18n] nodes
  ═══════════════════════════════════════════════ */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val) el.textContent = val;
    });
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  }
  /* Expose globally so page scripts can call after DOM changes */
  window.csApplyTranslations = applyTranslations;

  /* ═══════════════════════════════════════════════
     STYLES
  ═══════════════════════════════════════════════ */
  if (!document.querySelector('link[href*="Inter"]')) {
    var fontLink = document.createElement('link');
    fontLink.rel  = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap';
    document.head.appendChild(fontLink);
  }

  /* Load Chinese fonts (Noto Serif SC for body/nav, Noto Sans SC for UI) */
  if (!document.querySelector('link[href*="Noto+Serif+SC"]')) {
    var zhFont = document.createElement('link');
    zhFont.rel  = 'stylesheet';
    zhFont.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500&family=Noto+Sans+SC:wght@300;400;500&display=swap';
    document.head.appendChild(zhFont);
  }

  var style = document.createElement('style');
  style.textContent = [

    /* ── Chinese font overrides ── */
    'html.lang-zh body{font-family:"Noto Serif SC",serif;}',
    'html.lang-zh .side-nav a,html.lang-zh #mob-menu a,html.lang-zh .mob-bar__wordmark,html.lang-zh .page-nav__name,html.lang-zh .page-nav__home{font-family:"Noto Serif SC",serif !important;}',
    'html.lang-zh .side-nav .nav-home,html.lang-zh .side-nav .nav-contact,html.lang-zh .mob-menu__label,html.lang-zh .page-nav__label{font-family:"Noto Sans SC",sans-serif !important;}',
    'html.lang-zh .intro-text p,html.lang-zh .cb-text,html.lang-zh .sec-label,html.lang-zh .tagline,html.lang-zh footer p{font-family:"Noto Serif SC",serif !important;}',

    '.mob-bar{display:none !important;}',
    '#mob-menu{',
      'display:block;',
      'position:fixed;top:0;left:0;right:0;bottom:0;',
      'visibility:hidden;',
      'z-index:800;',
      'pointer-events:none;',
    '}',

    /* ── Desktop side nav ── */
    '.side-nav{display:none;}',
    '@media(min-width:768px){',
      'body{padding-left:240px;}',
      '.side-nav{',
        'display:flex;flex-direction:column;',
        'position:fixed;left:64px;width:160px;top:120px;',
        'transform:none;z-index:200;gap:0;',
      '}',
      '.side-nav a{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:17px;font-weight:400;',
        'color:#4f463f;text-decoration:none;',
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
      '.side-nav a:hover{color:#3a332d;}',
      '.side-nav a:hover span::after{transform:scaleX(1);}',
      '.side-nav .nav-wordmark{',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:16px;font-weight:500;',
        'letter-spacing:0.22em;color:#4f463f;',
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
        'text-transform:uppercase;color:#8a817a;',
        'margin-bottom:0;background-image:none;transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-home::after{display:none;}',
      '.side-nav .nav-home:hover{color:#3a332d;}',
      '.side-nav .nav-divider{width:20px;height:1px;background:#d8d4d0;margin:10px 0;}',
      '.side-nav .nav-contact{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:12px;letter-spacing:1.6px;',
        'text-transform:uppercase;color:#8a817a;',
        'margin-top:0;background-image:none;transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-contact::after{display:none;}',
      '.side-nav .nav-contact:hover{color:#3a332d;}',
      '.side-nav .nav-instagram{display:block;margin-top:14px;color:#a89f98;transition:color 0.2s ease;line-height:0;}',
      '.side-nav .nav-instagram:hover{color:#4f463f;}',
    '}',

    /* ── Mobile nav ── */
    '@media(max-width:767px) and (pointer:coarse){',
      '.side-nav{display:none !important;}',

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

      /* Lang toggle: 中/Eng style */
      '.mob-bar__lang{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:11px;font-weight:400;letter-spacing:0.5px;',
        'color:#8a817a;',
        'background:none;border:none;cursor:pointer;',
        'padding:0;transition:opacity 0.35s ease;',
        'opacity:1;pointer-events:auto;white-space:nowrap;',
      '}',
      '.mob-bar__lang.hidden{opacity:0;pointer-events:none;}',
      '.mob-bar__lang .lang-zh{color:#2a2a2a;font-weight:500;}',
      '.mob-bar__lang .lang-sep{color:#ccc;margin:0 2px;}',
      '.mob-bar__lang .lang-en{color:#2a2a2a;font-weight:500;}',
      '.mob-bar__lang.is-zh .lang-zh{color:#2a2a2a;font-weight:500;}',
      '.mob-bar__lang.is-zh .lang-en{color:#bbb;font-weight:400;}',
      '.mob-bar__lang.is-en .lang-zh{color:#bbb;font-weight:400;}',
      '.mob-bar__lang.is-en .lang-en{color:#2a2a2a;font-weight:500;}',

      /* Centre: wordmark (always left, fades in on scroll) */
      '.mob-bar__wordmark{',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:15px;font-weight:500;letter-spacing:0.2em;',
        'text-transform:uppercase;color:#3A3633;',
        'text-decoration:none;opacity:0;transition:opacity 0.4s ease;',
        'pointer-events:none;',
      '}',
      '.mob-bar__wordmark.visible{opacity:1;pointer-events:auto;}',

      /* Right: burger */
      '.mob-bar__burger{',
        'background:none;border:none;cursor:pointer;',
        'padding:8px;margin-right:-8px;',
        'display:flex;flex-direction:column;gap:5px;',
      '}',
      '.mob-bar__burger span{',
        'display:block;width:22px;height:1.5px;',
        'background:#3A3633;border-radius:2px;',
        'transition:transform 0.3s ease, opacity 0.3s ease;',
        'transform-origin:center;',
      '}',
      '.mob-bar__burger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}',
      '.mob-bar__burger.open span:nth-child(2){opacity:0;}',
      '.mob-bar__burger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}',

      /* Full-screen menu */
      '#mob-menu{',
        'background:#fff;z-index:800;',
        'transform:translateY(-100%);visibility:hidden;pointer-events:none;',
        'transition:transform 0.38s cubic-bezier(0.4,0,0.2,1), visibility 0s linear 0.38s;',
        'overflow-y:auto;padding:68px 32px 40px;box-sizing:border-box;',
      '}',
      '#mob-menu.open{transform:translateY(0);visibility:visible;pointer-events:auto;transition:transform 0.38s cubic-bezier(0.4,0,0.2,1), visibility 0s linear 0s;}',

      '#mob-menu a{',
        'display:block;',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:20px;font-weight:400;',
        'color:#2a2a2a;text-decoration:none;',
        'letter-spacing:0.1px;line-height:1.65;',
        'padding:4px 0;border:none !important;transition:color 0.18s ease;',
      '}',
      '#mob-menu a:active{color:#aaa;}',

      '#mob-menu .mob-menu__label{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:11px;letter-spacing:1.2px;text-transform:uppercase;',
        'color:#2a2a2a;opacity:0.45;display:block;',
        'padding-top:14px;margin:12px 0 6px;',
        'border-top:1px solid rgba(0,0,0,0.06);',
      '}',
      '#mob-menu .mob-menu__label:first-child{border-top:none;padding-top:0;margin-top:0;}',

      '#mob-menu .mob-menu__contact{',
        'font-family:"Cormorant Garamond",Georgia,serif !important;',
        'font-size:15px !important;font-weight:400;',
        'letter-spacing:0.1px;line-height:1.4;',
        'color:#999 !important;text-transform:none !important;border:none !important;',
      '}',

      'body{padding-top:52px;}',
    '}'

  ].join('');
  document.head.appendChild(style);

  /* ═══════════════════════════════════════════════
     BUILD NAV HTML
  ═══════════════════════════════════════════════ */

  /* Desktop side nav */
  var nav = document.createElement('nav');
  nav.className = 'side-nav';
  nav.innerHTML =
    '<a href="index.html" class="nav-wordmark">Cady Sheng</a>' +
    '<a href="index.html" class="nav-home"><span data-i18n="nav.home">Home</span></a>' +
    '<div class="nav-divider"></div>' +
    '<a href="illustrations.html"><span data-i18n="nav.illustrations">Illustrations</span></a>' +
    '<a href="stage-art-production.html"><span data-i18n="nav.stage">Stage Art &amp; Production</span></a>' +
    '<a href="my-partner.html"><span data-i18n="nav.partner">My Partner</span></a>' +
    '<a href="childrens-book.html"><span data-i18n="nav.childrens">Children\u2019s Book</span></a>' +
    '<a href="flow-and-spirituality.html"><span data-i18n="nav.flow">Flow &amp; Spirituality</span></a>' +
    '<a href="traditional-mediums.html"><span data-i18n="nav.traditional">Traditional Mediums</span></a>' +
    '<a href="graphic-design.html"><span data-i18n="nav.graphic">Graphic Design</span></a>' +
    '<a href="jewelry.html"><span data-i18n="nav.jewelry">Jewelry</span></a>' +
    '<a href="meditation.html"><span data-i18n="nav.meditation">Meditation</span></a>' +
    '<a href="apparel.html"><span data-i18n="nav.apparel">Apparel</span></a>' +
    '<div class="nav-divider"></div>' +
    '<a href="#footer" class="nav-contact"><span data-i18n="nav.contact">Contact</span></a>' +
    '<a href="https://instagram.com/cadysheng" target="_blank" class="nav-instagram" aria-label="Instagram">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>' +
        '<circle cx="12" cy="12" r="4"/>' +
        '<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>' +
      '</svg>' +
    '</a>';

  /* Mobile top bar */
  var mobBar = document.createElement('div');
  mobBar.className = 'mob-bar';
  mobBar.innerHTML =
    '<a href="index.html" class="mob-bar__wordmark">Cady Sheng</a>' +
    '<div style="flex:1"></div>' +
    '<button class="mob-bar__lang is-en" id="mob-lang-btn" aria-label="Toggle language">' +
      '<span class="lang-zh">中</span>' +
      '<span class="lang-sep">/</span>' +
      '<span class="lang-en">Eng</span>' +
    '</button>' +
    '<button class="mob-bar__burger" aria-label="Menu" aria-expanded="false" style="margin-left:12px">' +
      '<span></span><span></span><span></span>' +
    '</button>';

  /* Mobile menu */
  var mobMenu = document.createElement('div');
  mobMenu.id = 'mob-menu';
  mobMenu.setAttribute('aria-hidden', 'true');
  mobMenu.innerHTML =
    '<a href="index.html" data-i18n="nav.home">Home</a>' +
    '<span class="mob-menu__label" data-i18n="nav.works">Works</span>' +
    '<a href="illustrations.html" data-i18n="nav.illustrations">Illustrations</a>' +
    '<a href="stage-art-production.html" data-i18n="nav.stage">Stage Art &amp; Production</a>' +
    '<a href="my-partner.html" data-i18n="nav.partner">My Partner</a>' +
    '<a href="childrens-book.html" data-i18n="nav.childrens">Children\u2019s Book</a>' +
    '<a href="flow-and-spirituality.html" data-i18n="nav.flow">Flow &amp; Spirituality</a>' +
    '<a href="traditional-mediums.html" data-i18n="nav.traditional">Traditional Mediums</a>' +
    '<a href="graphic-design.html" data-i18n="nav.graphic">Graphic Design</a>' +
    '<a href="jewelry.html" data-i18n="nav.jewelry">Jewelry</a>' +
    '<a href="meditation.html" data-i18n="nav.meditation">Meditation</a>' +
    '<a href="apparel.html" data-i18n="nav.apparel">Apparel</a>' +
    '<span class="mob-menu__label" data-i18n="nav.connect">Connect</span>' +
    '<a href="#footer" class="mob-menu__contact" data-i18n="nav.contact">Contact</a>' +
    '<a href="https://instagram.com/cadysheng" target="_blank" class="mob-menu__contact" data-i18n="nav.instagram">Instagram</a>';

  /* ═══════════════════════════════════════════════
     LANG BUTTON DISPLAY
  ═══════════════════════════════════════════════ */
  function updateLangBtn() {
    var btn = document.getElementById('mob-lang-btn');
    if (!btn) return;
    btn.classList.toggle('is-zh', currentLang === 'zh');
    btn.classList.toggle('is-en', currentLang === 'en');
  }

  /* ═══════════════════════════════════════════════
     INIT
  ═══════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertBefore(nav, document.body.firstChild);
    document.body.insertBefore(mobMenu, document.body.firstChild);
    document.body.insertBefore(mobBar, document.body.firstChild);

    var burger   = mobBar.querySelector('.mob-bar__burger');
    var wordmark = mobBar.querySelector('.mob-bar__wordmark');
    var langBtn  = document.getElementById('mob-lang-btn');

    /* ── Burger toggle ── */
    burger.addEventListener('click', function () {
      var isOpen = mobMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      mobMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* ── Lang button ── */
    updateLangBtn();
    langBtn.addEventListener('click', function () {
      setLang(currentLang === 'en' ? 'zh' : 'en');
    });

    /* ── Wordmark / lang btn scroll behaviour ──
       Homepage: watch hero logo intersection.
       Other pages: wordmark always visible, lang btn always hidden after scroll. */
    var heroLogo = document.querySelector('.logo-image');
    if (heroLogo) {
      document.body.classList.add('is-homepage');
      var desktopWordmark = nav.querySelector('.nav-wordmark');
      var observer = new IntersectionObserver(function (entries) {
        var scrolledPast = !entries[0].isIntersecting;
        desktopWordmark.classList.toggle('visible', scrolledPast);
        wordmark.classList.toggle('visible', scrolledPast);
        langBtn.classList.toggle('hidden', scrolledPast);
      }, { threshold: 0.1 });
      observer.observe(heroLogo);
    } else {
      /* Category pages: wordmark always shown */
      wordmark.classList.add('visible');
      /* Lang btn: hide once user scrolls past 20px */
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            langBtn.classList.toggle('hidden', window.scrollY > 20);
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }

    /* ── Apply translations on load ── */
    applyTranslations();
    applyFontClass();

    /* ── Highlight current page ── */
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
