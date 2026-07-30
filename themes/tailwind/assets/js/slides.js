;(function () {
  var emblaNode = document.querySelector('.embla')
  if (!emblaNode) return
  var options = { loop: true }
  var plugins = [EmblaCarouselAutoplay()]
  var emblaApi = EmblaCarousel(emblaNode, options, plugins)

  emblaApi.slideNodes()
})()