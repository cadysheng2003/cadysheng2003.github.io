(function () {
  // Add footer responsive styles
  var mobileStyle = document.createElement('style');
  mobileStyle.textContent = [
    '@media (max-width:600px) {',
    '  #footer { padding:28px 18px 40px !important; flex-direction:column !important; gap:16px !important; }',
    '  #footer > div:last-child { text-align:left !important; }',
    '}'
  ].join('');
  document.head.appendChild(mobileStyle);

  var s = "font-family:'Lora',serif;font-size:14px;line-height:2;color:#888";

  var html = [
    '<footer style="max-width:960px;margin:52px auto 0;padding:32px 40px 48px;border-top:1px solid #e8e8e8;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:24px;" id="footer">',
    '  <div>',
    '    <p style="' + s + '"><span data-i18n="footer.inquiries">For commissions, collaborations, or general inquiries,</span></p>',
    '    <p style="' + s + '"><span data-i18n="footer.contact">please contact me at:</span></p>',
    '    <p style="' + s + '"><span data-i18n="footer.email">Email:</span> <a href="mailto:cadysheng2003@gmail.com" style="color:#888;text-decoration:none;border-bottom:1px solid #ddd">cadysheng2003@gmail.com</a></p>',
    '    <p style="' + s + '"><span data-i18n="footer.phone">Phone:</span> <a href="tel:6464044950" style="color:#888;text-decoration:none">646-404-4950</a></p>',
    '    <p style="' + s + '"><span data-i18n="footer.instagram">Instagram:</span> <a href="https://instagram.com/cady_sheng" target="_blank" style="color:#888;text-decoration:none">@cady_sheng</a></p>',
    '  </div>',
    '  <div style="text-align:right">',
    '    <p style="' + s + '" data-i18n="footer.copyright">\u00a9 2026 Cady Sheng.</p>',
    '    <p style="' + s + '" data-i18n="footer.rights">All rights reserved.</p>',
    '    <a href="contact.html"'+' style="display:inline-block;margin-top:20px;padding:10px 28px;'+'font-size:15px;letter-spacing:1.2px;color:#2a2a2a;'+'text-decoration:none;border:1px solid #c8bfb8;border-radius:2px;'+'transition:background 0.2s,color 0.2s;"'+' onmouseover="this.style.background=\'#2a2a2a\';this.style.color=\'#fff\'"'+' onmouseout="this.style.background=\'\';this.style.color=\'#2a2a2a\'"'+' data-i18n="footer.getintouch">Get in Touch</a>',
    '  </div>',
    '</footer>'
  ].join('\n');

  function injectFooter() {
    var existing = document.getElementById('footer');
    if (existing) {
      existing.outerHTML = html;
    } else {
      document.body.insertAdjacentHTML('beforeend', html);
    }
    /* Apply translations immediately after injection */
    if (window.csApplyTranslations) window.csApplyTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();
