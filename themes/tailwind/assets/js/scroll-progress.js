(function () {
  var bar = document.getElementById('scroll-progress-bar');
  if (!bar) {
    return;
  }

  var ticking = false;

  var update = function () {
    ticking = false;
    var doc = document.documentElement;
    var scrollTop = window.pageYOffset || doc.scrollTop || 0;
    var scrollHeight = doc.scrollHeight - doc.clientHeight;
    var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = progress.toFixed(2) + '%';
  };

  var requestUpdate = function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
