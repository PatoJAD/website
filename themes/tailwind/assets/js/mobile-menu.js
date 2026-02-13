(function () {
  var openButton = document.getElementById('mobile-menu-button');
  var closeButton = document.getElementById('mobile-menu-close');
  var modal = document.getElementById('mobile-menu-modal');
  var overlay = document.getElementById('mobile-menu-overlay');
  var panel = document.getElementById('mobile-menu-panel');

  if (!openButton || !closeButton || !modal || !overlay || !panel) {
    return;
  }

  var closeDelayMs = 200;
  var closeTimer;

  var setBodyScroll = function (isLocked) {
    document.body.classList.toggle('overflow-hidden', isLocked);
  };

  var openMenu = function () {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = undefined;
    }

    modal.classList.remove('invisible', 'pointer-events-none', 'opacity-0');
    modal.classList.add('opacity-100');
    modal.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');

    requestAnimationFrame(function () {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      panel.classList.remove('opacity-0', 'translate-y-4');
      panel.classList.add('opacity-100', 'translate-y-0');
    });

    setBodyScroll(true);
  };

  var closeMenu = function () {
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    panel.classList.remove('opacity-100', 'translate-y-0');
    panel.classList.add('opacity-0', 'translate-y-4');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.setAttribute('aria-hidden', 'true');
    openButton.setAttribute('aria-expanded', 'false');

    closeTimer = window.setTimeout(function () {
      modal.classList.add('invisible', 'pointer-events-none');
    }, closeDelayMs);

    setBodyScroll(false);
  };

  openButton.addEventListener('click', function () {
    openMenu();
  });

  closeButton.addEventListener('click', function () {
    closeMenu();
  });

  overlay.addEventListener('click', function () {
    closeMenu();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
})();
