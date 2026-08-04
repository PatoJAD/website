// viewport-animations.js — sistema compartido de animaciones al hacer scroll.
//
// Uso declarativo por atributos (sin acoplar JS a cada template):
//   data-reveal[="up|down|left|right|scale|fade"]  → aparece al entrar en viewport
//   data-reveal-delay="120"                        → retraso en ms (para escalonar)
//   data-reveal-group [data-reveal-stagger="80"]   → escalona sus hijos [data-reveal]
//   data-count-to="1234" [data-count-suffix="+"]   → cuenta de 0 al valor al entrar
//                        [data-count-prefix] [data-count-duration="900"]
//
// Respeta prefers-reduced-motion y degrada sin IntersectionObserver.
;(function () {
  window.__pjReveal = true // señala al failsafe del <head> que el sistema cargó
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var hasIO = 'IntersectionObserver' in window
  var hasRAF = 'requestAnimationFrame' in window

  function fmt(n) { return n.toLocaleString('es-AR') }

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count-to')) || 0
    var prefix = el.getAttribute('data-count-prefix') || ''
    var suffix = el.getAttribute('data-count-suffix') || ''
    var dur = parseInt(el.getAttribute('data-count-duration'), 10) || 900
    if (reduce || !hasRAF || target <= 0) { el.textContent = prefix + fmt(target) + suffix; return }
    var startTs = null
    function step(ts) {
      if (startTs === null) startTs = ts
      var p = Math.min((ts - startTs) / dur, 1)
      var eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      el.textContent = prefix + fmt(Math.round(target * eased)) + suffix
      if (p < 1) requestAnimationFrame(step)
      else el.textContent = prefix + fmt(target) + suffix
    }
    requestAnimationFrame(step)
  }

  function reveal(el) { el.classList.add('reveal-in') }

  var reveals = [].slice.call(document.querySelectorAll('[data-reveal]'))
  var counters = [].slice.call(document.querySelectorAll('[data-count-to]'))

  // Escalonado automático: hijos [data-reveal] de un [data-reveal-group]
  ;[].slice.call(document.querySelectorAll('[data-reveal-group]')).forEach(function (group) {
    var stepMs = parseInt(group.getAttribute('data-reveal-stagger'), 10) || 80
    ;[].slice.call(group.querySelectorAll('[data-reveal]')).forEach(function (k, i) {
      if (!k.hasAttribute('data-reveal-delay')) k.setAttribute('data-reveal-delay', i * stepMs)
    })
  })

  // Count-up arranca en 0 (para animar); si no hay animación, valor final directo
  if (!reduce && hasRAF) counters.forEach(function (el) { el.textContent = fmt(0) })
  else counters.forEach(countUp)

  if (!hasIO) {
    // Sin IntersectionObserver: mostrar todo y contar directo
    reveals.forEach(reveal)
    if (!reduce) counters.forEach(countUp)
    return
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return
      var el = e.target
      io.unobserve(el)
      if (el.hasAttribute('data-reveal')) {
        var delay = parseInt(el.getAttribute('data-reveal-delay'), 10) || 0
        if (delay > 0) setTimeout(function () { reveal(el) }, delay)
        else reveal(el)
      }
      if (el.hasAttribute('data-count-to')) countUp(el)
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })

  reveals.forEach(function (el) { io.observe(el) })
  counters.forEach(function (el) { io.observe(el) })
})()
