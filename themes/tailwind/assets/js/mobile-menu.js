(function () {
  var openButton = document.getElementById('mobile-menu-button');
  var closeButton = document.getElementById('mobile-menu-close');
  var modal = document.getElementById('mobile-menu-modal');
  var overlay = document.getElementById('mobile-menu-overlay');
  var panel = document.getElementById('mobile-menu-panel');

  if (!openButton || !closeButton || !modal || !overlay || !panel) {
    return;
  }

  var closeDelayMs = 300;
  var closeTimer;
  var lastFocusedElement;
  var focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

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

    lastFocusedElement = document.activeElement;

    requestAnimationFrame(function () {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      panel.classList.remove('opacity-0', 'translate-y-4');
      panel.classList.add('opacity-100', 'translate-y-0');
    });

    setBodyScroll(true);

    var focusables = panel.querySelectorAll(focusableSelector);
    if (focusables.length) {
      focusables[0].focus();
    }
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

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
      lastFocusedElement = undefined;
    }
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
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    if (modal.classList.contains('invisible')) {
      return;
    }

    var focusables = panel.querySelectorAll(focusableSelector);
    if (!focusables.length) {
      return;
    }

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
      return;
    }
  });
})();
