(function () {
  var html = [
    '<footer style="max-width:960px;margin:52px auto 0;padding:32px 40px 48px;border-top:1px solid #e8e8e8;display:flex;justify-content:space-between;align-items:flex-start;gap:40px;" id="footer">',
    '  <div>',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">For commissions, collaborations, or general inquiries,</p>',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">please contact me at:</p>',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">Email: <a href="mailto:cadysheng2003@gmail.com" style="color:#888;text-decoration:none;border-bottom:1px solid #ddd">cadysheng2003@gmail.com</a></p>',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">Phone: <a href="tel:6464044950" style="color:#888;text-decoration:none">646-404-4950</a></p>',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">Instagram: <a href="https://instagram.com/cady_sheng" target="_blank" style="color:#888;text-decoration:none">@cady_sheng</a></p>',
    '  </div>',
    '  <div style="text-align:right">',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">&copy; 2026 Cady Sheng.</p>',
    '    <p style="font-family:\'Lora\',serif;font-size:14px;line-height:2;color:#888">All rights reserved.</p>',
    '  </div>',
    '</footer>'
  ].join('\n');

  document.addEventListener('DOMContentLoaded', function () {
    var existing = document.getElementById('footer');
    if (existing) {
      existing.outerHTML = html;
    } else {
      document.body.insertAdjacentHTML('beforeend', html);
    }
  });
})();
