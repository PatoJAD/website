;(function () {
  if (!navigator.clipboard) return

  function init() {
    document.querySelectorAll('.copy-code-button').forEach(function (button) {
      var highlight = button.closest('.highlight')
      if (!highlight) return

      var label = button.querySelector('span')

      button.addEventListener('click', function () {
        var code = highlight.querySelector('code[data-lang]')
        if (!code) code = highlight.querySelector('.chroma td:last-child code, .chroma > pre:last-child code, .chroma code')
        if (!code) return

        var text = typeof code.textContent === 'string' ? code.textContent : code.innerText

        navigator.clipboard.writeText(text).catch(function () {})

        button.classList.add('copied')
        if (label) label.textContent = '¡Copiado!'
        setTimeout(function () {
          button.classList.remove('copied')
          if (label) label.textContent = 'Copiar'
        }, 2000)
      })
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
