(function () {
  var bar = document.getElementById('scroll-progress-bar');
  if (!bar) {
    return;
  }

  var ticking = false;
  var maxScroll = 0;

  var updateMaxScroll = function () {
    var doc = document.documentElement;
    maxScroll = Math.max(doc.scrollHeight - doc.clientHeight, 0);
  };

  var update = function () {
    ticking = false;
    var doc = document.documentElement;
    var scrollTop = window.pageYOffset || doc.scrollTop || 0;
    var progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    bar.style.width = progress.toFixed(2) + '%';
  };

  var requestUpdate = function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', function () {
    updateMaxScroll();
    requestUpdate();
  });
  window.addEventListener('load', function () {
    updateMaxScroll();
    requestUpdate();
  });
  updateMaxScroll();
  update();
})();
