// 外部サイトへのリンクは新しいタブで開く（マニュアルから離脱させないため）。
// nav の外部リンク（例: AIに使い方を聞く）や本文中の外部リンクに一律で適用する。
document.addEventListener("DOMContentLoaded", function () {
  var here = location.hostname;
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    try {
      if (new URL(a.href).hostname !== here) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
    } catch (e) {
      /* 不正な URL は無視 */
    }
  });
});
