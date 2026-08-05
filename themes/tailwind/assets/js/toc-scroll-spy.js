// toc-scroll-spy.js — resalta en el Índice la sección que estás leyendo.
;(function () {
  var toc = document.getElementById('TableOfContents')
  if (!toc) return
  var links = [].slice.call(toc.querySelectorAll('a[href^="#"]'))
  if (!links.length || !('IntersectionObserver' in window)) return

  var map = {}
  var targets = []
  links.forEach(function (l) {
    var id
    try { id = decodeURIComponent(l.getAttribute('href').slice(1)) } catch (e) { id = l.getAttribute('href').slice(1) }
    var el = document.getElementById(id)
    if (el) { map[id] = l; targets.push(el) }
  })
  if (!targets.length) return

  function setActive(id) {
    links.forEach(function (l) { l.classList.remove('toc-active') })
    if (map[id]) map[id].classList.add('toc-active')
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) setActive(e.target.id)
    })
  }, { rootMargin: '0px 0px -75% 0px', threshold: 0 })

  targets.forEach(function (t) { io.observe(t) })
})()
