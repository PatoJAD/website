// lightbox.js — ampliar imágenes del artículo en un overlay (click / Escape).
;(function () {
  var content = document.getElementById('reading-content')
  if (!content) return
  var imgs = [].slice.call(content.querySelectorAll('img'))
  if (!imgs.length) return

  var overlay = document.createElement('div')
  overlay.className = 'pj-lightbox'
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-modal', 'true')
  overlay.setAttribute('aria-label', 'Imagen ampliada')
  var big = document.createElement('img')
  big.alt = ''
  overlay.appendChild(big)
  document.body.appendChild(overlay)

  function open(src, alt) {
    big.src = src
    big.alt = alt || ''
    overlay.classList.add('open')
    document.body.style.overflow = 'hidden'
  }
  function close() {
    overlay.classList.remove('open')
    document.body.style.overflow = ''
  }

  overlay.addEventListener('click', close)
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close() })

  imgs.forEach(function (img) {
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', function () { open(img.currentSrc || img.src, img.alt) })
  })
})()
