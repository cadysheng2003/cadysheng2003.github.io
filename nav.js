(function () {

  /* ─── FONTS ─── */
  if (!document.querySelector('link[href*="Inter"]')) {
    var fl = document.createElement('link');
    fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap';
    document.head.appendChild(fl);
  }
  if (!document.querySelector('link[href*="Noto+Serif+SC"]')) {
    var zf = document.createElement('link');
    zf.rel = 'stylesheet';
    zf.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500&family=Noto+Sans+SC:wght@300;400;500&display=swap';
    document.head.appendChild(zf);
  }

  /* ─── i18n DICTIONARY ─── */
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
      'cb.p3':   'We put planets together<br>\u201cHolding hands\u201d',
      'cb.p4':   'On this little planet, Earth gave life to a little girl.<br>She wandered through the forest.',
      'cb.p5':   'I see everyone! Everyone feels me too!',
      'cb.p6':   'A little girl shouts:',
      'cb.p8':   'She hears all the animals too, all at the same time from miles away; the crickets, a deer stepping into the crunchy leaves.',
      'cb.p9':   'A vibration, a melody made by nature all together.',
      'cb.p10a': 'Everyone dances back to me, waving their bodies and branches and leaves.',
      /* Multi-line cb paragraphs (contain <br>) — use innerHTML */
      'cb.p7_poem': '\u201cHi Everyone!<br>Hi Everyone!<br>Hi Everyone!<br>I see you<br>I love you!<br>I feel you!\u201d',
      'cb.p7_feel': 'She feels the fullness in everything.<br>She feels incredibly alive.',
      'cb.p10bc':   '\u201cNow I will never unsee you,\u201d says the little girl.<br>She hugs everyone.',
      'cb.p10de':   '! Bye Everyone !<br>Echoes in the woods.',

      /* ── Children's Book: Hi Everyone flip-book card ── */
      'cb.cta_byline': 'by Cady Sheng',
      'cb.cta_view':   'View it as a Book',
      'cb.close':      'Close',

      /* ── Stage Art intro ── */
      'sp.title':    'From the Mountains',
      'sp.role':     'Stage Art & Production Director',
      'sp.location': 'Shanghai, China · June 2024',
      'sp.b1': 'Served as Art Director for the 2024 cultural heritage event supporting ethnic education initiatives.',
      'sp.b2': 'Independently designed and executed all stage paintings and lighting design.',
      'sp.b3': 'Developed visual concepts reflecting the identity of participating ethnic communities.',
      'sp.b4': 'Collaborated with directors and cultural educators to ensure authenticity.',
      'sp.b5': 'Led and trained volunteer teams (ages 8–12).',
      'sp.b6': 'Produced and edited event documentation video.',

      /* ── Stage Art journal ── */
      /* ── Stage Art intro ── */
      'sp.title':    'From the Mountains',
      'sp.role':     'Stage Art & Production Director',
      'sp.location': 'Shanghai, China · June 2024',
      'sp.b1': 'Served as Art Director for the 2024 cultural heritage event supporting ethnic education initiatives.',
      'sp.b2': 'Independently designed and executed all stage paintings and lighting design.',
      'sp.b3': 'Developed visual concepts reflecting the identity of participating ethnic communities.',
      'sp.b4': 'Collaborated with directors and cultural educators to ensure authenticity.',
      'sp.b5': '带领并培训志愿者团队（年8–12岁）。',
      'sp.b6': '制作并剩辑活动记录视频。',

      /* ── Stage Art journal ── */
      /* ── Stage Art journal ── */
      'sp.journal.title': '\u201cFrom the Mountains\u201d Journal',
      'sp.journal.p1': 'Before coming, I had no idea what I would be doing. After arriving, I barely slept more than five hours a day. Working on stage design meant going day and night, often until around three in the morning. I had never slept so little or worked continuously for so long in my life. I had a fever, menstrual pain, heart pain, stomach pain, and a sore throat\u2014haha.',
      'sp.journal.p2': 'But the overflowing love carried me through everything and gave me more than enough strength to do my work beautifully.',
      'sp.journal.p3': 'Every day during the daytime, I saw the smiles of the children, the teachers, and the volunteers\u2014their soft little hands and cheeks. One heartfelt conversation after another moved the deepest parts of my soul. I found myself crying several times a day, whether from being touched by such pure hearts or from tears of happiness. Somehow my body no longer felt tired, and my energy was overflowing.',
      'sp.journal.p4': 'One time, while passing through the hotel hallway, I heard all of you loudly calling my name again and again from inside the rooms \U0001f602 It felt like I had become the Monkey King.',
      'sp.journal.p5': 'All I wanted was to be good to you, to see you smile every day\u2014to lift you up, spin you around, kiss your little cheeks, and give you delicious things to eat. After I hugged and kissed one of you, the rest would rush over, all competing: \u201cMe too, me too! I want one too!\u201d',
      'sp.journal.p6': 'That day in the dressing room before the stage performance, you all excitedly took colorful hair clips and pinned them into my hair as gifts. On the final day of camp, you ran after each other smearing cake cream on each other\'s faces\u2014and mine ended up covered with it too.',
      'sp.journal.p7': 'Shengkai jiejie loves you all.',
      'sp.journal.p8': 'I will miss you so much. I want to see you grow up surrounded by love and warmth.',
      'sp.journal.p9': 'And this is not really a goodbye\u2014I am always here. \u2764\ufe0f',

      /* ── Footer ── */
      'footer.inquiries':  'For commissions, collaborations, or general inquiries,',
      'footer.contact':    'please contact me at:',
      'footer.email':      'Email:',
      'footer.phone':      'Phone:',
      'footer.instagram':  'Instagram:',
      'footer.copyright':  '\u00a9 2026 Cady Sheng.',
      'footer.rights':     'All rights reserved.',
      'footer.getintouch': 'Get in Touch',
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
      'cb.p3':   '我们把星球拼凑在一起<br>\u201c手牵着手\u201d',
      'cb.p4':   '在这颗小小的星球上，地球孕育了一个小女孩。<br>她在森林中漫游。',
      'cb.p5':   '我看见了所有人！所有人也感受到我！',
      'cb.p6':   '一个小女孩喊道：',
      'cb.p8':   '她也同时听到了远处所有动物的声音——蟋蟀的鸣叫，一头鹿踩入落叶的声响。',
      'cb.p9':   '一种振动，一首由大自然共同演奏的旋律。',
      'cb.p10a': '万物向我舞动而来，摇曳着身躯、枝桠与叶片。',
      'cb.p7_poem': '\u201c大家好！<br>大家好！<br>大家好！<br>我看见你们<br>我爱你们！<br>我感受到你们！\u201d',
      'cb.p7_feel': '她感受到万物中饱满的存在。<br>她感到无比鲜活。',
      'cb.p10bc':   '\u201c现在我再也无法假装看不见你们了，\u201d小女孩说。<br>她拥抱了所有人。',
      'cb.p10de':   '！再见，大家！<br>声音在林间回响。',

      /* ── Children's Book: Hi Everyone flip-book card ── */
      'cb.cta_byline': '盛开 著',
      'cb.cta_view':   '以翻书方式阅读',
      'cb.close':      '关闭',

      /* ── Stage Art intro ── */
      'sp.title':    '来自大山',
      'sp.role':     '舞台艺术与制作总监',
      'sp.location': '中国上海 · 2024年6月',
      'sp.b1': '担任2024年民族文化遗产活动艺术总监，支持少数民族教育公益项目。',
      'sp.b2': '独立完成全部舞台绘画及灯光设计。',
      'sp.b3': '建立反映各参与民族群体文化身份认同的视觉概念。',
      'sp.b4': '与导演及文化教育者密切协作，确保呼应文化真实性。',
      'sp.b5': '带领并培训志愿者团队（年龄8—12岁）。',
      'sp.b6': '制作并剪辑活动记录视频。',

      /* ── Stage Art journal ── */
      'sp.journal.title': '《来自大山》',
      'sp.journal.p1': '来之前根本不知道干麻，来之后每天基本上睡不够五个小时。做舞美的工作没日没夜做到凌晨三点左右，这辈子没睡过这么少持续工作这么久。发烧，痛经，心脏疼，胃疼，嗓子疼哈哈哈哈哈哈。',
      'sp.journal.p2': '但是，溢出的爱全程超额支撑我出色的完成了工作！！！！',
      'sp.journal.p3': '白天也每一天看到孩子，老师，和志愿者的笑容，软软的小手和脸蛋。一个个热泪盈眶的谈话，触动着我心灵最深处。每天都会哭上那么几次，不管是来自纯净心灵的触动，还是幸福的眼泪。身体一点也不累了，能量也是溢满的。',
      'sp.journal.p4': '有次路过酒店的走廊，我听见房间里你们一次次大声呼喊我的名字😂哈哈哈有一种当了猴王的感觉。',
      'sp.journal.p5': '就想对你们好，就想天天看你们笑，把你们抱起来转圈，亲你们的小脸蛋，给你们喂好吃的。亲完，抱完一个，剩下的都争着抢着要亲亲抱抱"我也要我也要"。',
      'sp.journal.p6': '那天在舞台演出的化妆室，你们争着抢着把五颜六色发卡作为礼物别到我头上。结营那天追着跑着互相把奶油抹到脸上，脸被你们抹花了。',
      'sp.journal.p7': '盛开姐姐爱你们',
      'sp.journal.p8': '我是舍不得你们，我也想看到你们充满爱和温暖的长大',
      'sp.journal.p9': '这也不是分别，我一直都在❤️',

      /* ── Footer ── */
      'footer.inquiries':  '如有委托、合作或其他咨询，',
      'footer.contact':    '欢迎通过以下方式联系我：',
      'footer.email':      '邮箱：',
      'footer.phone':      '电话：',
      'footer.instagram':  'Instagram：',
      'footer.copyright':  '\u00a9 2026 Cady Sheng。',
      'footer.rights':     '版权所有。',
      'footer.getintouch': '联系我',
    }
  };

  /* ─── LANGUAGE STATE ─── */
  var LANG_KEY = 'cs-lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
  }

  /* ─── MOBILE DETECTION ─── */
  function isMobile() {
    return window.innerWidth <= 767;
  }

  /* ─── PAGE TITLE CHINESE MAP ─── */
  var zhTitles = {
    'Illustrations':          '插画',
    'Stage Art & Production': '舞台艺术与制作',
    'My Partner':             '我的伴侣',
    "Children's Book":       '儿童绘本',
    'Flow & Spirituality':    '流动与灵性',
    'Traditional Mediums':    '传统媒介',
    'Graphic Design':         '平面设计',
    'Jewelry':                '珠宝',
    'Meditation':             '冥想',
    'Apparel':                '服装',
  };

  /* ─── APPLY TRANSLATIONS ─── */
  function _doTranslate() {
    var isDesktop = window.innerWidth >= 768;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key];
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var skip = false; /* translate on both mobile and desktop */
      var key = el.getAttribute('data-i18n-html');
      var val = (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key];
      if (val) el.innerHTML = val;
    });
    /* page-nav Home — both mobile and desktop */
    document.querySelectorAll('.page-nav__home').forEach(function(el) {
      el.textContent = currentLang === 'zh' ? '主页' : 'Home';
      el.style.letterSpacing = currentLang === 'zh' ? '0px' : '';
      el.style.fontFamily = currentLang === 'zh' ? '"Noto Serif SC",serif' : '';
    });
    /* wordmark */
    var wm = document.querySelector('.mob-bar__wordmark');
    if (wm) wm.innerHTML = 'Cady Sheng <span class="mob-bar__zhname">\u76db\u5f00</span>';
    /* html lang + font class — mobile only to avoid font changes on desktop */
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.classList.toggle('lang-zh', currentLang === 'zh');
    /* page title subtitles — both desktop and mobile */
    if (true) {
      document.querySelectorAll('img[src*="-title."]').forEach(function(img) {
        var zh = zhTitles[img.getAttribute('alt') || ''];
        if (!zh) return;
        var sub = img.parentElement.querySelector('.zh-title-text');
        if (currentLang === 'zh') {
          if (!sub) {
            sub = document.createElement('p');
            sub.className = 'zh-title-text';
            sub.style.cssText = 'font-family:"Noto Serif SC",serif;font-size:13px;font-weight:300;letter-spacing:0.15em;color:#8a817a;text-align:center;margin:4px 0 0;line-height:1.4;display:none;';
            img.insertAdjacentElement('afterend', sub);
          }
          sub.textContent = zh;
          sub.style.display = 'block';
        } else {
          if (sub) sub.style.display = 'none';
        }
      });
    }
    /* lang button state — both mobile and desktop */
    var btn = document.getElementById('mob-lang-btn');
    if (btn) {
      btn.classList.toggle('is-zh', currentLang === 'zh');
      btn.classList.toggle('is-en', currentLang === 'en');
    }
    var deskBtn = document.getElementById('desk-lang-btn');
    if (deskBtn) {
      deskBtn.classList.toggle('is-zh', currentLang === 'zh');
      deskBtn.classList.toggle('is-en', currentLang === 'en');
    }
  }

  function applyTranslations() { _doTranslate(); }
  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    _doTranslate();
  }

  window.csApplyTranslations = applyTranslations;

  /* ─── STYLES ─── */
    var style = document.createElement('style');
  style.textContent = [

    /* ── Chinese overrides: mobile only ── */
    '@media(max-width:767px){',
      'html.lang-zh body{font-family:"Noto Serif SC",serif;}',
      'html.lang-zh .side-nav a,html.lang-zh #mob-menu a,html.lang-zh .page-nav__name,html.lang-zh .page-nav__home{font-family:"Noto Serif SC",serif !important;}',
      /* Keep wordmark in Cormorant even in zh mode; only zhname uses Noto */
      'html.lang-zh .mob-bar__zhname{font-family:"Noto Serif SC",serif !important;font-size:13px;letter-spacing:0.15em;font-weight:400;}',
      'html.lang-zh .side-nav .nav-home,html.lang-zh .side-nav .nav-contact,html.lang-zh .mob-menu__label,html.lang-zh .page-nav__label{font-family:"Noto Sans SC",sans-serif !important;}',
      'html.lang-zh .intro-text p,html.lang-zh .cb-text,html.lang-zh .sec-label,html.lang-zh .tagline,html.lang-zh footer p{font-family:"Noto Serif SC",serif !important;}',
      'html.lang-zh .tile__label, html.lang-zh .hero-tile .tile__label{',
        'font-family:"Noto Sans SC",sans-serif !important;',
        'font-size:14px !important;',
        'font-weight:500 !important;',
        'letter-spacing:0.06em !important;',
        'text-transform:none !important;',
      '}',
      'html.lang-zh .tile--small .tile__label{font-size:12px !important;}',
      'html.lang-zh .tagline{font-size:12.5px !important;}',
    '}',

    /* Bilingual show/hide — global */
    '.t-zh{display:none !important;}',
    'html.lang-zh .t-en{display:none !important;}',
    'html.lang-zh .t-zh{display:inline !important;}',

    /* Desktop lang button */
    '@media(min-width:768px){',
      '.desk-lang-btn{',
        'position:fixed;top:22px;right:32px;z-index:500;',
        'display:flex;align-items:center;gap:3px;',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:11px;font-weight:400;letter-spacing:0.5px;',
        'color:#8a817a;background:none;border:none;cursor:pointer;',
        'padding:0;transition:color 0.2s ease;',
        'outline:none;',
      '}',
      '.desk-lang-btn:hover{color:#3a332d;}',
      '.desk-lang-btn:focus{outline:none;}',
      '.desk-lang-btn .lang-sep{color:#ccc;margin:0 1px;}',
      '.desk-lang-btn .lang-zh{color:#2a2a2a;font-weight:500;}',
      '.desk-lang-btn .lang-en{color:#2a2a2a;font-weight:500;}',
      '.desk-lang-btn.is-zh .lang-zh{color:#2a2a2a;font-weight:500;}',
      '.desk-lang-btn.is-zh .lang-en{color:#bbb;font-weight:400;}',
      '.desk-lang-btn.is-en .lang-zh{color:#bbb;font-weight:400;}',
      '.desk-lang-btn.is-en .lang-en{color:#2a2a2a;font-weight:500;}',

      '.desk-wordmark{',
        'position:fixed;left:max(20px,calc(50vw - 570px));top:32px;',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:22px;font-weight:500;letter-spacing:0.15em;',
        'text-transform:uppercase;color:#2a2a2a;',
        'text-decoration:none;line-height:1.2;white-space:nowrap;',
        'z-index:200;',
      '}',
      '.desk-wordmark:hover{color:#000;}',
      '.desk-wordmark .nav-zhname{font-size:11px;letter-spacing:0.15em;text-transform:none;opacity:0.55;font-weight:400;vertical-align:middle;}',

      /* Desktop lang-zh font overrides */
      'html.lang-zh .side-nav a{font-family:"Noto Serif SC",serif !important;}',
      'html.lang-zh .side-nav .nav-home,html.lang-zh .side-nav .nav-contact{font-family:"Noto Sans SC",sans-serif !important;font-size:11px !important;}',
      'html.lang-zh .side-nav .nav-sub-item{font-family:"Noto Sans SC",sans-serif !important;font-size:12px !important;letter-spacing:0 !important;}',
      'html.lang-zh .intro-text p,html.lang-zh .cb-text,html.lang-zh .sec-label{font-family:"Noto Serif SC",serif !important;}',
      'html.lang-zh .page-nav__name,html.lang-zh .page-nav__home{font-family:"Noto Serif SC",serif !important;}',
      'html.lang-zh .page-nav__label{font-family:"Noto Sans SC",sans-serif !important;}',

    '}',

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
      'body{padding-left:260px;max-width:1220px;margin-left:auto;margin-right:auto;}',
      '.side-nav{',
        'display:flex;flex-direction:column;',
        'position:fixed;left:max(20px,calc(50vw - 570px));width:200px;top:213px;',
        'transform:none;z-index:200;gap:1px;',
      '}',
      '.side-nav .nav-wordmark{',
        'position:fixed;',
        'left:max(20px,calc(50vw - 570px));top:32px;',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:16px;font-weight:500;letter-spacing:0.22em;white-space:nowrap;',
        'text-transform:uppercase;color:#2a2a2a;',
        'text-decoration:none !important;line-height:1.2;border-bottom:none !important;',
        'display:block;z-index:201;',
        'opacity:0;pointer-events:none;transition:opacity 0.4s ease;',
      '}',
      '.side-nav .nav-wordmark.visible{opacity:1;pointer-events:auto;}',
      '.side-nav .nav-wordmark:visited,.side-nav .nav-wordmark:focus{text-decoration:none !important;border-bottom:none !important;outline:none;}',
      '.side-nav .nav-wordmark:hover{color:#000;text-decoration:none;opacity:0.7;}',
      '.side-nav .nav-wordmark:active{opacity:0.4;transition:opacity 0.08s ease;}',
      '.side-nav .nav-wordmark .nav-zhname{font-size:11px;letter-spacing:0.15em;text-transform:none;opacity:0.55;font-weight:400;vertical-align:middle;}',

      '.side-nav a{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:18px;font-weight:400;',
        'color:#2a2a2a;text-decoration:none;',
        'letter-spacing:0.3px;padding:5px 0;',
        'line-height:1.2;white-space:nowrap;',
        'display:block;transition:color 0.2s ease;',
      '}',
      '.side-nav a:not(.nav-wordmark) span:not(.t-en):not(.t-zh){display:inline;position:relative;}',
      '.side-nav a:not(.nav-wordmark) span:not(.t-en):not(.t-zh)::after{',
        'content:"";position:absolute;left:0;bottom:-1px;',
        'width:100%;height:1px;background:currentColor;',
        'transform:scaleX(0);transform-origin:left center;',
        'transition:transform 0.18s ease;',
      '}',
      '.side-nav a:hover{color:#000;}',
      '.side-nav a:not(.nav-wordmark):hover span:not(.t-en):not(.t-zh)::after{transform:scaleX(1);}',
      /* Underline for bilingual spans */
      '.side-nav a .t-en,.side-nav a .t-zh{position:relative;}',
      '.side-nav a .t-en::after,.side-nav a .t-zh::after{',
        'content:"";position:absolute;left:0;bottom:-1px;',
        'width:100%;height:1px;background:currentColor;',
        'transform:scaleX(0);transform-origin:left center;',
        'transition:transform 0.18s ease;',
      '}',
      '.side-nav a:hover .t-en::after,.side-nav a:hover .t-zh::after{transform:scaleX(1);}' +
      '.side-nav .nav-sub-group{max-height:0;overflow:hidden;transition:max-height 0.35s ease;}',
      '.side-nav .nav-sub-group.open{max-height:200px;}',
      '.side-nav .nav-sub-item{',
        'font-family:"Inter",system-ui,sans-serif;font-style:normal;',
        'font-size:14px;font-weight:400;letter-spacing:0.2px;',
        'color:#8a817a;padding:3px 0 3px 14px;line-height:1.3;display:block;',
      '}' +
      '.side-nav a.nav-sub-item:hover{color:#6b6158;}' +
      '.side-nav a.nav-sub-item:visited{color:#8a817a;}' +
      '.side-nav .nav-sub-item:last-of-type{margin-bottom:4px;}',
      '.side-nav .nav-zhname{font-size:11px;letter-spacing:0.15em;text-transform:none;opacity:0.55;font-weight:400;vertical-align:middle;}',

      '.side-nav .nav-home{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:13px;letter-spacing:1.4px;',
        'text-transform:uppercase;color:#8a817a;',
        'margin-bottom:0;background-image:none;transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-home::after{display:none;}',
      '.side-nav .nav-home:hover{color:#3a332d;}',
      '.side-nav .nav-divider{width:20px;height:1px;background:#e0dbd7;margin:5px 0;}',
      '.side-nav .nav-contact{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:13px;letter-spacing:1.4px;',
        'text-transform:uppercase;color:#8a817a;',
        'margin-top:0;background-image:none;transition:color 0.2s ease;',
      '}',
      '.side-nav .nav-contact::after{display:none;}',
      '.side-nav .nav-contact:hover{color:#3a332d;}',
      '.side-nav .nav-instagram{display:block;margin-top:10px;color:#a89f98;transition:color 0.2s ease;line-height:0;}',
      '.side-nav .nav-instagram:hover{color:#4f463f;}',
      '.side-nav .nav-side-lang{',
        'display:flex;align-items:center;gap:3px;margin-top:24px;',
        'font-family:"Inter",system-ui,sans-serif;font-size:10px;',
        'letter-spacing:0.5px;color:#a89f98;background:none;border:none;',
        'cursor:pointer;padding:0;transition:color 0.2s ease;outline:none;',
      '}',
      '.side-nav .nav-side-lang:hover{color:#4f463f;}',
      '.side-nav .nav-side-lang .lang-sep{color:#ccc;margin:0 1px;}',
      '.side-nav .nav-side-lang.is-zh .lang-en{color:#ccc;font-weight:400;}',
      '.side-nav .nav-side-lang.is-en .lang-zh{color:#ccc;font-weight:400;}',
    '}',

    /* ── Mobile nav ── */
    '@media(max-width:767px){',
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
      '.mob-bar__zhname{font-size:14px;letter-spacing:0.1em;}',

      /* Right: burger */
      '.mob-bar__burger{',
        'background:none;border:none;cursor:pointer;',
        'padding:8px;margin-right:-8px;',
        'display:flex;flex-direction:column;gap:5px;',
        'outline:none;-webkit-tap-highlight-color:transparent;',
      '}',
      '.mob-bar__burger:focus{outline:none;}',
      '.mob-bar__burger:focus-visible{outline:none;}',
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
        'overflow-y:auto;padding:56px 32px 40px;box-sizing:border-box;',
      '}',
      '#mob-menu.open{transform:translateY(0);visibility:visible;pointer-events:auto;transition:transform 0.38s cubic-bezier(0.4,0,0.2,1), visibility 0s linear 0s;}',

      '#mob-menu a{',
        'display:block;',
        'font-family:"Cormorant Garamond",Georgia,serif;',
        'font-size:24px;font-weight:400;',
        'color:#2a2a2a;text-decoration:none;',
        'letter-spacing:0.1px;line-height:1.3;',
        'padding:3px 0;border:none !important;transition:color 0.18s ease;',
      '}',
      '#mob-menu a:active{color:#aaa;}' +
      '#mob-menu .mob-sub-item{' +
        'padding-left:16px;font-size:17px;color:#bbb;' +
      '}',

      '#mob-menu .mob-menu__label{',
        'font-family:"Inter",system-ui,sans-serif;',
        'font-size:12px;letter-spacing:1.2px;text-transform:uppercase;',
        'color:#2a2a2a;opacity:0.45;display:block;',
        'padding-top:10px;margin:8px 0 4px;',
        'border-top:1px solid rgba(0,0,0,0.06);',
      '}',
      '#mob-menu .mob-menu__label:first-child{border-top:none;padding-top:0;margin-top:0;}',

      '#mob-menu .mob-menu__divider{height:1px;background:rgba(0,0,0,0.06);margin:16px 0 10px;}',
      '#mob-menu .mob-menu__divider ~ a{font-size:17px !important;color:#8a817a !important;letter-spacing:0.05px !important;}',
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

  /* ─── IMAGE PROTECTION ───
     Prevents long-press save on mobile and right-click save on desktop.
     A transparent overlay sits on top of every gallery image.
     contextmenu is suppressed on all img elements. */
  var protStyle = document.createElement('style');
  protStyle.textContent =
    '.img-prot-wrap{position:relative;display:block;line-height:0;}' +
    '.img-prot-wrap::after{' +
      'content:"";' +
      'position:absolute;inset:0;' +
      'z-index:10;' +
      '-webkit-touch-callout:none;' +
      'user-select:none;' +
      '-webkit-user-select:none;' +
    '}' +
    '.img-prot-wrap img{' +
      '-webkit-touch-callout:none;' +
      'user-select:none;' +
      '-webkit-user-select:none;' +
      'pointer-events:none;' +
    '}';
  document.head.appendChild(protStyle);

  function protectImages() {
    document.querySelectorAll('.gallery img, .g img').forEach(function(img) {
      /* Skip if already wrapped */
      if (img.parentElement.classList.contains('img-prot-wrap')) return;
      /* Skip spacer/hidden images */
      if ((img.getAttribute('style') || '').indexOf('visibility:hidden') !== -1) return;
      /* Wrap in protection div */
      var wrap = document.createElement('span');
      wrap.className = 'img-prot-wrap';
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    });
    /* Suppress context menu on all images sitewide */
    document.querySelectorAll('img').forEach(function(img) {
      img.addEventListener('contextmenu', function(e) { e.preventDefault(); });
      img.draggable = false;
    });
  }

  /* Run after DOM ready and also after any dynamic content loads */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectImages);
  } else {
    protectImages();
  }
  /* Re-run after footer injects (catches footer images if any) */
  window.addEventListener('load', protectImages);


    var nav = document.createElement('nav');
  nav.className = 'side-nav';
  nav.innerHTML =
        '<a href="index.html" class="nav-wordmark"><span>Cady Sheng</span><span class="nav-zhname"> 盛开</span></a>' +
        '<a href="index.html" class="nav-home"><span class="t-en">Home</span><span class="t-zh">主页</span></a>' +
    '<div class="nav-divider"></div>' +
    '<a href="illustrations.html" id="nav-illus-toggle" class="nav-illus-parent"><span class="t-en">Illustrations</span><span class="t-zh">插画</span></a>' +
    '<div class="nav-sub-group">' +
    '<a href="illustrations.html#my-partner" class="nav-sub-item"><span class="t-en">My Partner</span><span class="t-zh">我的伴侣</span></a>' +
    '<a href="illustrations.html#flow-and-spirituality" class="nav-sub-item"><span class="t-en">Flow &amp; Spirituality</span><span class="t-zh">流动与灵性</span></a>' +
    '<a href="illustrations.html#childrens-book" class="nav-sub-item"><span class="t-en">Children’s Book</span><span class="t-zh">儿童绘本</span></a>' +
    '</div>' +
    '<a href="stage-art-production.html"><span class="t-en">Stage Art &amp; Production</span><span class="t-zh">舞台艺术与制作</span></a>' +
    '<a href="traditional-mediums.html"><span class="t-en">Traditional Mediums</span><span class="t-zh">传统媒介</span></a>' +
    '<a href="graphic-design.html"><span class="t-en">Graphic Design</span><span class="t-zh">平面设计</span></a>' +
    '<a href="jewelry.html"><span class="t-en">Jewelry</span><span class="t-zh">珠宝</span></a>' +
    '<a href="meditation.html"><span class="t-en">Meditation</span><span class="t-zh">冥想</span></a>' +
    '<a href="apparel.html"><span class="t-en">Apparel</span><span class="t-zh">服装</span></a>' +
    '<div class="nav-divider"></div>' +
    '<a href="contact.html" class="nav-contact"><span class="t-en">Contact</span><span class="t-zh">联系我</span></a>' +
    '<a href="https://instagram.com/cadysheng" target="_blank" class="nav-instagram" aria-label="Instagram">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>' +
        '<circle cx="12" cy="12" r="4"/>' +
        '<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>' +
      '</svg>' +
    '</a>' +
    '<button id="side-lang-btn" class="nav-side-lang"><span class="lang-zh">中</span><span class="lang-sep">/</span><span class="lang-en">Eng</span></button>' +
    '</a>';

  /* Mobile top bar */
  var mobBar = document.createElement('div');
  mobBar.className = 'mob-bar';
  mobBar.innerHTML =
    '<a href="index.html" class="mob-bar__wordmark">Cady Sheng <span class="mob-bar__zhname">\u76db\u5f00</span></a>' +
    '<div style="flex:1"></div>' +
    '<button class="mob-bar__lang ' + (currentLang === 'zh' ? 'is-zh' : 'is-en') + '" id="mob-lang-btn" aria-label="Toggle language">' +
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
    '<a href="illustrations.html#my-partner" class="mob-sub-item" data-i18n="nav.partner">My Partner</a>' +
    '<a href="illustrations.html#flow-and-spirituality" class="mob-sub-item" data-i18n="nav.flow">Flow &amp; Spirituality</a>' +
    '<a href="illustrations.html#childrens-book" class="mob-sub-item" data-i18n="nav.childrens">Children\u2019s Book</a>' +
    '<a href="stage-art-production.html" data-i18n="nav.stage">Stage Art &amp; Production</a>' +
    '<a href="traditional-mediums.html" data-i18n="nav.traditional">Traditional Mediums</a>' +
    '<a href="graphic-design.html" data-i18n="nav.graphic">Graphic Design</a>' +
    '<a href="jewelry.html" data-i18n="nav.jewelry">Jewelry</a>' +
    '<a href="meditation.html" data-i18n="nav.meditation">Meditation</a>' +
    '<a href="apparel.html" data-i18n="nav.apparel">Apparel</a>' +
    '<div class="mob-menu__divider"></div>' +
    '<a href="contact.html" data-i18n="nav.contact">Contact</a>' +
    '<a href="https://instagram.com/cadysheng" target="_blank" data-i18n="nav.instagram">Instagram</a>';

  /* ─── INIT ─── */
  function init() {
    document.body.insertBefore(nav, document.body.firstChild);

    document.body.insertBefore(mobMenu, document.body.firstChild);
    document.body.insertBefore(mobBar, document.body.firstChild);

    var burger  = mobBar.querySelector('.mob-bar__burger');
    var langBtn = document.getElementById('mob-lang-btn');

    /* Burger toggle */
    burger.addEventListener('click', function() {
      var isOpen = mobMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      mobMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Lang button */
    langBtn.addEventListener('click', function() {
      setLang(currentLang === 'en' ? 'zh' : 'en');
    });

    /* Wordmark scroll behaviour */
    var heroLogo = document.querySelector('.logo-image');
    var wordmark = mobBar.querySelector('.mob-bar__wordmark');
    var navWordmark = nav.querySelector('.nav-wordmark');
    if (heroLogo) {
      document.body.classList.add('is-homepage');
      var observer = new IntersectionObserver(function(entries) {
        var past = !entries[0].isIntersecting;
        wordmark.classList.toggle('visible', past);
        langBtn.classList.toggle('hidden', past);
        if (navWordmark) navWordmark.classList.toggle('visible', past);
      }, { threshold: 0.1 });
      observer.observe(heroLogo);
    } else {
      wordmark.classList.add('visible');
      if (navWordmark) navWordmark.classList.add('visible');
      var ticking = false;
      window.addEventListener('scroll', function() {
        if (!ticking) {
          requestAnimationFrame(function() {
            langBtn.classList.toggle('hidden', window.scrollY > 20);
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }

    /* Desktop lang button */
    var deskLangBtn = document.getElementById('desk-lang-btn');
    if (deskLangBtn) {
      deskLangBtn.addEventListener('click', function() {
        setLang(currentLang === 'en' ? 'zh' : 'en');
      });
    }
    /* Side nav lang button */
    var sideLangBtnEl = document.getElementById('side-lang-btn');
    if (sideLangBtnEl) {
      sideLangBtnEl.addEventListener('click', function() {
        setLang(currentLang === 'en' ? 'zh' : 'en');
      });
    }

    /* Apply translations on load */
    applyTranslations();

    /* Highlight current page — match by filename, ignoring hash */
    var currentFile = window.location.pathname.split('/').pop() || 'index.html';
    [nav, mobMenu].forEach(function(container) {
      container.querySelectorAll('a[href]').forEach(function(link) {
        var href = link.getAttribute('href');
        /* Skip sub-items — scroll spy handles them */
        if (link.classList.contains('nav-sub-item') || link.classList.contains('mob-sub-item')) return;
        var hrefFile = href.split('#')[0].split('/').pop();
        if (hrefFile === currentFile) link.style.color = '#2a2a2a';
      });
    });

    /* Scroll-based highlight for sub-items on illustrations.html — desktop only */
    if (currentFile === 'illustrations.html' && window.innerWidth >= 768) {
      var sectionIds = ['my-partner', 'flow-and-spirituality', 'childrens-book'];
      function updateSubHighlight() {
        var trigger = window.innerHeight * 0.4;
        var active = null;
        var bestTop = -Infinity;
        sectionIds.forEach(function(id) {
          var el = document.getElementById(id);
          if (!el) return;
          var rect = el.getBoundingClientRect();
          if (rect.top <= trigger && rect.bottom > 0 && rect.top > bestTop) {
            bestTop = rect.top; active = id;
          }
        });
        nav.querySelectorAll('.nav-sub-item').forEach(function(el) {
          var href = el.getAttribute('href');
          el.style.color = (active && href === 'illustrations.html#' + active) ? '#2a2a2a' : '';
        });
      }
      window.addEventListener('scroll', updateSubHighlight, { passive: true });
      updateSubHighlight();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Collapsible sub-group (desktop only) ── */
  /* Sub-group: open on click, auto-open on illustrations pages, no close */
  if (window.innerWidth >= 768) {
    var subGroup = document.querySelector('.side-nav .nav-sub-group');
    var illusToggle = document.getElementById('nav-illus-toggle');
    if (subGroup) {
      var cp = (window.location.pathname.split('/').pop() || 'index.html');
      var illustsPages = ['illustrations.html','my-partner.html','flow-and-spirituality.html','childrens-book.html'];
      /* Auto-open on illustrations-related pages */
      if (illustsPages.indexOf(cp) !== -1) {
        subGroup.classList.add('open');
      }
      /* Click Illustrations to open (no close) */
      if (illusToggle) {
        illusToggle.addEventListener('click', function() {
          subGroup.classList.add('open');
        });
      }
    }
  }

  /* Handle bfcache restore — DOMContentLoaded does NOT fire on back/forward nav.
     pageshow fires every time, including bfcache restores (event.persisted === true). */
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      /* DOM restored from bfcache — re-apply correct language state */
      _doTranslate();
    }
  });

})();
