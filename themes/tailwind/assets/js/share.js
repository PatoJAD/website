// share.js — compartir nativo (Web Share API) + copiar enlace.
;(function () {
  var url = location.href
  var title = document.title

  var nativeBtn = document.getElementById('share-native')
  if (nativeBtn) {
    if (navigator.share) {
      nativeBtn.addEventListener('click', function () {
        navigator.share({ title: title, url: url }).catch(function () {})
      })
    } else {
      nativeBtn.style.display = 'none'
    }
  }

  var copyBtn = document.getElementById('share-copy')
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var lbl = copyBtn.getAttribute('title')
      var done = function () {
        copyBtn.classList.add('copied')
        copyBtn.setAttribute('title', '¡Enlace copiado!')
        setTimeout(function () {
          copyBtn.classList.remove('copied')
          copyBtn.setAttribute('title', lbl || 'Copiar enlace')
        }, 1600)
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(done)
      } else { done() }
    })
  }
})()
