;(function () {
  var container = document.getElementById('featured-github')
  if (!container) return

  var html = ''
  var orgData = null
  var topRepos = []
  var userStars = 0

  function setVal(id, val) {
    var el = document.getElementById(id)
    if (el) el.textContent = val
  }

  // Skeleton
  container.innerHTML =
    '<div class="text-center py-8 text-white/40">Cargando estadísticas de GitHub…</div>'

  // Nota: Tailwind purga clases que solo aparecen en JS (buildStats lee templates,
  // no strings de JS). Por eso lo visual crítico va en CSS propio (scoped) inyectado.
  function tile(value, label, color) {
    return '<div class="background card-glow rounded-xl p-3">' +
      '<div class="text-2xl font-bold ' + color + '">' + value + '</div>' +
      '<div class="text-xs text-white/60">' + label + '</div></div>'
  }

  function render() {
    if (!orgData) return

    var org = orgData
    var sorted = topRepos.slice().sort(function (a, b) {
      var stars = (b.stargazers_count || 0) - (a.stargazers_count || 0)
      if (stars !== 0) return stars
      return new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0)
    })
    var repoList = sorted.slice(0, 4).map(function (r) {
      return (
        '<a href="' + r.html_url + '" target="_blank" rel="noopener" class="gh-repo-row flex items-center justify-between p-3 rounded-xl">' +
        '<span class="text-sm text-white/90 truncate">' + r.name + '</span>' +
        '<span class="text-sm text-yellow-400 shrink-0 ml-2">⭐ ' + (r.stargazers_count || 0) + '</span>' +
        '</a>'
      )
    }).join('')

    var totalStars = topRepos.reduce(function (s, r) { return s + (r.stargazers_count || 0) }, 0)
    var totalForks = topRepos.reduce(function (s, r) { return s + (r.forks_count || 0) }, 0)

    container.innerHTML =
      '<style>' +
      '.gh-divider{flex:1;height:.25rem;border-radius:9999px;background:linear-gradient(90deg,#c026d3,rgba(217,70,239,.55) 45%,rgba(217,70,239,0))}' +
      '.gh-repo-row{transition:background-color .2s ease,transform .2s ease}' +
      '.gh-repo-row:hover{background:rgba(217,70,239,.1);transform:translateX(3px)}' +
      '.gh-ghlink{transition:color .2s ease,border-color .2s ease}' +
      '.gh-ghlink:hover{color:#e879f9;border-color:rgba(217,70,239,.5)}' +
      '</style>' +
      '<div class="flex items-center gap-3 mb-4">' +
      '<h2 class="text-2xl font-bold text-gradient">Proyecto destacado</h2>' +
      '<div class="gh-divider"></div>' +
      '</div>' +
      '<div class="background card-glow rounded-xl p-6">' +
      '<div class="flex items-center gap-4 mb-6">' +
      '<img src="' + org.avatar_url + '" alt="' + org.name + '" class="w-16 h-16 rounded-xl bg-white/10" loading="lazy" />' +
      '<div class="min-w-0">' +
      '<h3 class="text-2xl font-bold text-white truncate">' + org.name + '</h3>' +
      '<p class="text-sm text-white/60 line-clamp-2">' + (org.description || '') + '</p>' +
      '</div>' +
      '<a href="' + org.html_url + '" target="_blank" rel="noopener" class="gh-ghlink ml-auto shrink-0 border border-zinc-200/20 text-white/80 text-sm rounded-full px-4 py-2" style="border-width:1px;border-style:solid">GitHub →</a>' +
      '</div>' +
      '<div class="grid grid-cols-3 gap-4 mb-6 text-center">' +
      tile(org.public_repos, 'Repositorios', 'text-white') +
      tile(totalStars, 'Estrellas', 'text-yellow-400') +
      tile(totalForks, 'Forks', 'text-white') +
      '</div>' +
      '<h4 class="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wider">Repositorios activos</h4>' +
      '<div class="flex flex-col gap-1">' + repoList + '</div>' +
      '</div>'
  }

  fetch('https://api.github.com/orgs/Vasak-OS')
    .then(function (r) { return r.json() })
    .then(function (data) {
      if (!data || data.message) return
      orgData = data
      render()
    })

  fetch('https://api.github.com/orgs/Vasak-OS/repos?per_page=100')
    .then(function (r) { return r.json() })
    .then(function (repos) {
      if (!repos || !Array.isArray(repos)) return
      repos.sort(function (a, b) {
        return (b.stargazers_count || 0) - (a.stargazers_count || 0)
      })
      topRepos = repos
      render()
    })
})()
