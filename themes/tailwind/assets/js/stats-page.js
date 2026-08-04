;(function () {
  var dash = document.getElementById('stats-dashboard')
  if (!dash) return

  function byId(id) { return document.getElementById(id) }

  function setVal(id, value) {
    var el = byId(id)
    if (el) el.textContent = typeof value === 'number' ? value.toLocaleString('es-AR') : value
  }

  var totalReach = 0
  var results = []

  function updateReach() {
    var sum = results.reduce(function (a, b) { return a + b }, 0)
    setVal('stat-total-reach', sum)
  }

  // ── Static JSON (server-side: YouTube, Facebook, and optional others) ──
  function hideCard(platform) {
    var card = dash.querySelector('[data-platform="' + platform + '"]')
    if (card) card.style.display = 'none'
  }

  var serverPlatforms = ['youtube', 'tiktok', 'instagram', 'facebook', 'x']

  var serverStats = fetch('https://statsapi.patojad.com.ar/stats.json')
    .then(function (r) {
      if (!r.ok) throw new Error('Not found')
      return r.json()
    })
    .then(function (data) {
      serverPlatforms.forEach(function (p) {
        if (!data[p]) hideCard(p)
      })
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

  // ── GitHub (public API, no token needed) ──
  var gh = fetch('https://api.github.com/users/JoaquinDecima')
    .then(function (r) { return r.json() })
    .then(function (data) {
      if (!data || data.message) return
      setVal('stat-gh-repos', data.public_repos)
      setVal('stat-gh-followers', data.followers)
      setVal('stat-gh-following', data.following)
      results.push(data.followers || 0)
    })

  var ghRepos = fetch('https://api.github.com/users/JoaquinDecima/repos?per_page=100&sort=updated')
    .then(function (r) { return r.json() })
    .then(function (repos) {
      if (!repos || !Array.isArray(repos)) return
      var stars = repos.reduce(function (sum, r) { return sum + (r.stargazers_count || 0) }, 0)
      setVal('stat-gh-stars', stars)
    })

  // ── GitHub Organizations (public repos aggregated) ──
  var ghOrgs = fetch('https://api.github.com/users/JoaquinDecima/orgs')
    .then(function (r) { return r.json() })
    .then(function (orgs) {
      if (!orgs || !Array.isArray(orgs) || !orgs.length) return
      return Promise.all(orgs.map(function (o) {
        return fetch(o.repos_url + '?per_page=100').then(function (r) { return r.json() })
      })).then(function (results) {
        var totalRepos = 0
        var totalStars = 0
        results.forEach(function (repos) {
          if (!Array.isArray(repos)) return
          totalRepos += repos.length
          repos.forEach(function (r) { totalStars += (r.stargazers_count || 0) })
        })
        // Sum into existing user totals
        var reposEl = byId('stat-gh-repos')
        var starsEl = byId('stat-gh-stars')
        if (reposEl) reposEl.textContent = (Number(reposEl.textContent.replace(/\./g, '')) + totalRepos).toLocaleString('es-AR')
        if (starsEl) starsEl.textContent = (Number(starsEl.textContent.replace(/\./g, '')) + totalStars).toLocaleString('es-AR')
        setVal('stat-gh-orgs', orgs.length)
      })
    })

  // ── Mastodon (public API, no token needed) ──
  var mastodon = fetch('https://mastodon.social/api/v1/accounts/lookup?acct=PatoJAD')
    .then(function (r) { return r.json() })
    .then(function (data) {
      if (!data || data.error) return
      setVal('stat-mastodon-followers', data.followers_count)
      setVal('stat-mastodon-following', data.following_count)
      setVal('stat-mastodon-posts', data.statuses_count)
      setVal('stat-mastodon-last', data.last_status_at ? new Date(data.last_status_at).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }) : '—')
      results.push(data.followers_count || 0)
    })

  Promise.all([serverStats, gh, ghRepos, ghOrgs, mastodon]).then(updateReach)
})()
