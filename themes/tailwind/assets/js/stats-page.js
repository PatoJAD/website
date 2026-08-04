;(function () {
  var dash = document.getElementById('stats-dashboard')
  if (!dash) return

  function byId(id) { return document.getElementById(id) }

  function setVal(id, value) {
    var el = byId(id)
    if (el) el.textContent = typeof value === 'number' ? value.toLocaleString('es-AR') : value
  }

  var results = []

  function updateReach() {
    var sum = results.reduce(function (a, b) { return a + b }, 0)
    setVal('stat-total-reach', sum)
  }

  function hideCard(platform) {
    var card = dash.querySelector('[data-platform="' + platform + '"]')
    if (card) card.style.display = 'none'
  }

  // Todas las plataformas se sirven desde stats.json (server-side).
  var serverPlatforms = ['github', 'mastodon', 'youtube', 'tiktok', 'instagram', 'facebook', 'x']

  fetch('https://statsapi.patojad.com.ar/stats.json')
    .then(function (r) {
      if (!r.ok) throw new Error('Not found')
      return r.json()
    })
    .then(function (data) {
      serverPlatforms.forEach(function (p) {
        if (!data[p]) hideCard(p)
      })

      if (data.github) {
        setVal('stat-gh-repos', data.github.repos)
        setVal('stat-gh-stars', data.github.stars)
        setVal('stat-gh-followers', data.github.followers)
        setVal('stat-gh-following', data.github.following)
        setVal('stat-gh-orgs', data.github.orgs ? data.github.orgs.toLocaleString('es-AR') + ' organizaciones' : '')
        results.push(data.github.followers || 0)
      }
      if (data.mastodon) {
        setVal('stat-mastodon-followers', data.mastodon.followers)
        setVal('stat-mastodon-following', data.mastodon.following)
        setVal('stat-mastodon-posts', data.mastodon.posts)
        setVal('stat-mastodon-last', data.mastodon.lastStatusAt
          ? new Date(data.mastodon.lastStatusAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })
          : '—')
        results.push(data.mastodon.followers || 0)
      }
      if (data.youtube) {
        setVal('stat-yt-subs', data.youtube.subscribers)
        setVal('stat-yt-views', data.youtube.views)
        setVal('stat-yt-videos', data.youtube.videos)
        results.push(data.youtube.subscribers || 0)
      }
      if (data.tiktok) {
        setVal('stat-tt-followers', data.tiktok.followers)
        setVal('stat-tt-following', data.tiktok.following)
        setVal('stat-tt-likes', data.tiktok.likes)
        results.push(data.tiktok.followers || 0)
      }
      if (data.instagram) {
        setVal('stat-ig-followers', data.instagram.followers)
        // Muestra las 4 métricas con más valor (0 se oculta)
        var pool = [
          { label: 'Alcance 30d', value: data.instagram.reach },
          { label: 'Impresiones 30d', value: data.instagram.impressions },
          { label: 'Perfil 30d', value: data.instagram.profileViews },
          { label: 'Cuentas 30d', value: data.instagram.accountsEngaged },
          { label: 'Publicaciones', value: data.instagram.posts || data.instagram.media }
        ]
        pool.sort(function (a, b) { return (b.value || 0) - (a.value || 0) })
        for (var di = 1; di <= 4; di++) {
          var cell = byId('stat-ig-d' + di)
          if (!cell) continue
          var item = pool[di - 1]
          if (item && item.value > 0) {
            setVal('stat-ig-d' + di + '-val', item.value)
            var lbl = byId('stat-ig-d' + di + '-label')
            if (lbl) lbl.textContent = item.label
            cell.style.display = ''
          } else {
            cell.style.display = 'none'
          }
        }
        results.push(data.instagram.followers || 0)
      }
      if (data.facebook) {
        setVal('stat-fb-followers', data.facebook.followers)
        setVal('stat-fb-engagements', data.facebook.engagements)
        setVal('stat-fb-reactions', data.facebook.reactions)
        setVal('stat-fb-posts', data.facebook.posts)
        results.push(data.facebook.followers || 0)
      }
      if (data.x) {
        setVal('stat-x-followers', data.x.followers)
        setVal('stat-x-following', data.x.following)
        setVal('stat-x-posts', data.x.posts)
        results.push(data.x.followers || 0)
      }
    })
    .catch(function () {
      // JSON no disponible: ocultar todas las cards del servidor
      serverPlatforms.forEach(hideCard)
    })
    .then(updateReach)
})()
