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
        '<a href="' + r.html_url + '" target="_blank" rel="noopener" class="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">' +
        '<span class="text-sm text-white/90 truncate">' + r.name + '</span>' +
        '<span class="text-sm text-yellow-400 shrink-0 ml-2">⭐ ' + (r.stargazers_count || 0) + '</span>' +
        '</a>'
      )
    }).join('')

    var totalStars = topRepos.reduce(function (s, r) { return s + (r.stargazers_count || 0) }, 0)
    var totalForks = topRepos.reduce(function (s, r) { return s + (r.forks_count || 0) }, 0)

    container.innerHTML =
      '<h2 class="text-xl font-bold text-fuchsia-700 mb-4">⭐ Proyecto destacado</h2>' +
      '<div class="background rounded-xl p-6">' +
      '<div class="flex items-center gap-4 mb-6">' +
      '<img src="' + org.avatar_url + '" alt="' + org.name + '" class="w-16 h-16 rounded-xl bg-white/10" loading="lazy" />' +
      '<div>' +
      '<h3 class="text-2xl font-bold text-white">' + org.name + '</h3>' +
      '<p class="text-sm text-white/60">' + (org.description || '') + '</p>' +
      '</div>' +
      '</div>' +
      '<div class="grid grid-cols-3 gap-4 mb-6 text-center">' +
      '<div class="background rounded-xl p-3"><div class="text-2xl font-bold text-white">' + org.public_repos + '</div><div class="text-xs text-white/60">Repositorios</div></div>' +
      '<div class="background rounded-xl p-3"><div class="text-2xl font-bold text-yellow-400">' + totalStars + '</div><div class="text-xs text-white/60">Estrellas</div></div>' +
      '<div class="background rounded-xl p-3"><div class="text-2xl font-bold text-white">' + totalForks + '</div><div class="text-xs text-white/60">Forks</div></div>' +
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
