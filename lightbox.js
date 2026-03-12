(function () {
  var style = document.createElement('style');
  style.textContent = [
    '#lb-overlay{display:none;position:fixed;inset:0;z-index:9999;background:rgba(255,255,255,0.88);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;}',
    '#lb-overlay.active{display:flex;}',
    '#lb-img{max-width:88vw;max-height:82vh;object-fit:contain;display:block;cursor:default;pointer-events:none;}',
    '#lb-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:22px;color:#666;letter-spacing:1.5px;text-align:center;margin-top:20px;font-weight:400;pointer-events:none;}'
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.id = 'lb-overlay';

  var img = document.createElement('img');
  img.id = 'lb-img';

  var title = document.createElement('p');
  title.id = 'lb-title';

  overlay.appendChild(img);
  overlay.appendChild(title);
  document.body.appendChild(overlay);

  var scrollY = 0;

  function open(src, name) {
    scrollY = window.scrollY;
    img.src = src;
    title.textContent = name || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    img.src = '';
    title.textContent = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
  }

  // pointer-events:none on img and title means all clicks hit the overlay directly
  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.g img').forEach(function (el) {
      el.style.cursor = 'zoom-in';
      var name = '';
      var parent = el.closest('[data-title]');
      if (parent) name = parent.getAttribute('data-title');
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        open(el.src, name);
      });
    });
  });
})();
