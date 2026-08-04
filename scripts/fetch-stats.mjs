#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const YT_API_KEY = process.env.YT_API_KEY || process.argv[2]
const YT_CHANNEL = 'UCta4Iy4TzMx8Xo0pwpkbWgg'
const FB_PAGE = 'PatoJAD'
const FB_TOKEN = process.env.FB_ACCESS_TOKEN
const THREADS_TOKEN = process.env.THREADS_ACCESS_TOKEN
const GITHUB_TOKEN = process.env.GITHUB_TOKEN // opcional: sube el límite de rate de la API pública
const GH_USER = 'JoaquinDecima'
const MASTODON_ACCT = 'PatoJAD'
const OUT_FILE = process.env.OUT_FILE || '/www/wwwroot/statsapi.patojad.com.ar/stats.json'

const DAY = 86400
const since30 = Math.floor(Date.now() / 1000) - 30 * DAY
const until = Math.floor(Date.now() / 1000)

const data = { fetchedAt: new Date().toISOString() }

async function get(url, extraHeaders) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      ...(extraHeaders || {}),
    },
  })
  if (!res.ok) console.warn(`[${res.status}] ${url.slice(0, 80)}`)
  return res.text()
}

// Suma los valores de una serie diaria de insights de IG (period=day)
function sumSeries(ins, metric) {
  const block = ins?.data?.find((d) => d.name === metric)
  if (!block?.values?.length) return 0
  return Math.round(block.values.reduce((acc, v) => acc + (Number(v.value) || 0), 0))
}

// Extrae el total de una métrica "total_value" de Threads insights
function totalValue(ins, metric) {
  const block = ins?.data?.find((d) => d.name === metric)
  return Number(block?.total_value?.value) || 0
}

// ── YouTube ──
if (YT_API_KEY) {
  try {
    const body = await get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${YT_CHANNEL}&key=${YT_API_KEY}`
    )
    const j = JSON.parse(body)
    if (j.error) {
      console.warn(`YouTube API error: ${j.error.code} ${j.error.message}`)
    } else if (j.items && j.items[0]) {
      const ch = j.items[0]
      data.youtube = {
        name: ch.snippet?.title,
        subscribers: Number(ch.statistics?.subscriberCount) || 0,
        views: Number(ch.statistics?.viewCount) || 0,
        videos: Number(ch.statistics?.videoCount) || 0,
      }
      console.log(`YouTube OK: ${data.youtube.subscribers} subs`)
    } else {
      console.warn('YouTube: channel not found')
    }
  } catch (e) {
    console.error('YouTube fetch failed:', e.message)
  }
} else {
  console.warn('YT_API_KEY not set — skipping YouTube')
}

// ── Facebook + Instagram (Graph API con FB_ACCESS_TOKEN) ──
if (FB_TOKEN) {
  try {
    // Buscar la página en /me/accounts (funciona con token de usuario o de System User)
    const accounts = JSON.parse(
      await get(`https://graph.facebook.com/v22.0/me/accounts?fields=id,name,username,access_token&limit=100&access_token=${FB_TOKEN}`)
    )
    const accs = accounts?.data || []
    if (accounts?.error || !accs.length) {
      console.warn(`Facebook API error: ${accounts?.error?.message || 'el token no tiene páginas (falta pages_read_engagement / pages_show_list?)'}`)
    } else {
      const match = accs.find((a) => a.name === FB_PAGE || a.username === FB_PAGE || a.id === FB_PAGE)
      const page = match || accs[0]
      const pageToken = page.access_token || FB_TOKEN
      console.log(`Facebook: página "${page.name}" (${page.id})`)

      // ── Facebook: seguidores (campo del nodo, NO insights) ──
      const fb = JSON.parse(
        await get(`https://graph.facebook.com/v22.0/${page.id}?fields=followers_count,fan_count&access_token=${pageToken}`)
      )
      if (fb?.error) console.warn(`Facebook seguidores error: ${fb.error.message}`)
      const followers = Number(fb?.followers_count ?? fb?.fan_count) || 0

      // ── Facebook: engagement calculado desde los posts del periodo ──
      // Las métricas de Page Insights (page_impressions, page_engaged_users,
      // page_positive_feedback, page_fan_adds) fueron discontinuadas por Meta
      // (jun/nov 2025) y devuelven error #100. Se calculan a partir de los
      // posts —reactions/comments/shares por post— que es estable y solo
      // requiere el permiso pages_read_engagement que ya tenemos.
      let reactions = 0, comments = 0, shares = 0, postCount = 0
      const posts = JSON.parse(
        await get(
          `https://graph.facebook.com/v22.0/${page.id}/posts?fields=shares,reactions.summary(true).limit(0),comments.summary(true).limit(0)&limit=100&since=${since30}&until=${until}&access_token=${pageToken}`
        )
      )
      if (posts?.error) {
        console.warn(`Facebook posts error: ${posts.error.message}`)
      } else {
        const list = posts?.data || []
        postCount = list.length
        for (const p of list) {
          reactions += Number(p?.reactions?.summary?.total_count) || 0
          comments += Number(p?.comments?.summary?.total_count) || 0
          shares += Number(p?.shares?.count) || 0
        }
      }

      if (!fb?.error || !posts?.error) {
        data.facebook = {
          followers,
          engagements: reactions + comments + shares,
          reactions,
          comments,
          shares,
          posts: postCount,
          period: { start: new Date(since30 * 1000).toISOString().slice(0, 10), end: new Date(until * 1000).toISOString().slice(0, 10) },
        }
        console.log(`Facebook OK: ${followers} followers, ${data.facebook.engagements} engagements (${postCount} posts)`)
      }

      // ── Instagram: cuenta Business conectada a la página ──
      const igPage = JSON.parse(
        await get(`https://graph.facebook.com/v22.0/${page.id}?fields=instagram_business_account&access_token=${pageToken}`)
      )
      const igId = igPage?.instagram_business_account?.id
      if (!igId) {
        console.warn('Instagram: la página no tiene una cuenta de Instagram Business conectada')
      } else {
        const prof = JSON.parse(
          await get(
            `https://graph.facebook.com/v22.0/${igId}?fields=followers_count,media_count&access_token=${pageToken}`
          )
        )
        const ins = JSON.parse(
          await get(
            `https://graph.facebook.com/v22.0/${igId}/insights?metric=reach,impressions,profile_views,accounts_engaged&period=day&since=${since30}&until=${until}&access_token=${pageToken}`
          )
        )
        if (prof?.error || ins?.error) {
          console.warn(`Instagram API error: ${prof?.error?.message || ins?.error?.message}`)
        } else {
          data.instagram = {
            followers: Number(prof.followers_count) || 0,
            media: Number(prof.media_count) || 0,
            reach: sumSeries(ins, 'reach'),
            impressions: sumSeries(ins, 'impressions'),
            profileViews: sumSeries(ins, 'profile_views'),
            accountsEngaged: sumSeries(ins, 'accounts_engaged'),
            period: { start: new Date(since30 * 1000).toISOString().slice(0, 10), end: new Date(until * 1000).toISOString().slice(0, 10) },
          }
          console.log(`Instagram OK: ${data.instagram.followers} followers, ${data.instagram.reach} reach`)
        }
      }
    }
  } catch (e) {
    console.error('Facebook/Instagram fetch failed:', e.message)
  }
} else {
  console.warn('FB_ACCESS_TOKEN not set — skipping Facebook/Instagram')
}

// ── Threads (API propia, THREADS_ACCESS_TOKEN) ──
if (THREADS_TOKEN) {
  try {
    const me = JSON.parse(
      await get(`https://graph.threads.net/v1.0/me?fields=id,username&access_token=${THREADS_TOKEN}`)
    )
    if (!me?.id) {
      console.warn(`Threads API error: ${me?.error?.message || 'no se pudo obtener el usuario'}`)
    } else {
      const followers = JSON.parse(
        await get(
          `https://graph.threads.net/v1.0/${me.id}/threads_insights?metric=followers_count&access_token=${THREADS_TOKEN}`
        )
      )
      const eng = JSON.parse(
        await get(
          `https://graph.threads.net/v1.0/${me.id}/threads_insights?metric=views,likes,replies,reposts,quotes,clicks&since=${since30}&until=${until}&access_token=${THREADS_TOKEN}`
        )
      )
      if (followers?.error || eng?.error) {
        console.warn(`Threads API error: ${followers?.error?.message || eng?.error?.message}`)
      } else {
        data.threads = {
          followers: totalValue(followers, 'followers_count'),
          views: sumSeries(eng, 'views'),
          likes: totalValue(eng, 'likes'),
          replies: totalValue(eng, 'replies'),
          reposts: totalValue(eng, 'reposts'),
          quotes: totalValue(eng, 'quotes'),
          clicks: totalValue(eng, 'clicks'),
          period: { start: new Date(since30 * 1000).toISOString().slice(0, 10), end: new Date(until * 1000).toISOString().slice(0, 10) },
        }
        console.log(`Threads OK: ${data.threads.followers} followers, ${data.threads.likes} likes`)
      }
    }
  } catch (e) {
    console.error('Threads fetch failed:', e.message)
  }
} else {
  console.warn('THREADS_ACCESS_TOKEN not set — skipping Threads')
}

// ── GitHub (API pública; GITHUB_TOKEN opcional para más límite de rate) ──
try {
  const ghHeaders = { Accept: 'application/vnd.github+json' }
  if (GITHUB_TOKEN) ghHeaders.Authorization = `Bearer ${GITHUB_TOKEN}`

  const user = JSON.parse(await get(`https://api.github.com/users/${GH_USER}`, ghHeaders))
  if (!user?.login) {
    console.warn(`GitHub API error: ${user?.message || 'usuario no encontrado'}`)
  } else {
    let repos = Number(user.public_repos) || 0
    let stars = 0

    // Estrellas de los repos propios
    const userRepos = JSON.parse(await get(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`, ghHeaders))
    if (Array.isArray(userRepos)) {
      for (const r of userRepos) stars += Number(r.stargazers_count) || 0
    }

    // Organizaciones: sumar repos y estrellas públicas
    let orgCount = 0
    const orgs = JSON.parse(await get(`https://api.github.com/users/${GH_USER}/orgs`, ghHeaders))
    if (Array.isArray(orgs)) {
      orgCount = orgs.length
      for (const o of orgs) {
        const orgRepos = JSON.parse(await get(`${o.repos_url}?per_page=100`, ghHeaders))
        if (Array.isArray(orgRepos)) {
          repos += orgRepos.length
          for (const r of orgRepos) stars += Number(r.stargazers_count) || 0
        }
      }
    }

    data.github = {
      user: GH_USER,
      repos,
      stars,
      followers: Number(user.followers) || 0,
      following: Number(user.following) || 0,
      orgs: orgCount,
    }
    console.log(`GitHub OK: ${data.github.followers} followers, ${repos} repos, ${stars} stars`)
  }
} catch (e) {
  console.error('GitHub fetch failed:', e.message)
}

// ── Mastodon (API pública) ──
try {
  const m = JSON.parse(
    await get(`https://mastodon.social/api/v1/accounts/lookup?acct=${MASTODON_ACCT}`)
  )
  if (m?.error || !m?.id) {
    console.warn(`Mastodon API error: ${m?.error || 'cuenta no encontrada'}`)
  } else {
    data.mastodon = {
      followers: Number(m.followers_count) || 0,
      following: Number(m.following_count) || 0,
      posts: Number(m.statuses_count) || 0,
      lastStatusAt: m.last_status_at || null,
    }
    console.log(`Mastodon OK: ${data.mastodon.followers} followers`)
  }
} catch (e) {
  console.error('Mastodon fetch failed:', e.message)
}

// ── Write ──
mkdirSync(dirname(OUT_FILE), { recursive: true })
writeFileSync(OUT_FILE, JSON.stringify(data, null, 2))
console.log('Wrote', OUT_FILE)
