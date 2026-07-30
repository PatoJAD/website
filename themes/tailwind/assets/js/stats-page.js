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

  Promise.all([gh, ghRepos, mastodon]).then(updateReach)
})()
