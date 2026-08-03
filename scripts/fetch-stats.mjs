#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const YT_API_KEY = process.env.YT_API_KEY || process.argv[2]
const YT_CHANNEL = 'UCta4Iy4TzMx8Xo0pwpkbWgg'
const FB_PAGE = 'PatoJAD'
const FB_TOKEN = process.env.FB_ACCESS_TOKEN
const OUT_FILE = process.env.OUT_FILE || '/www/wwwroot/statsapi.patojad.com.ar/stats.json'

const data = { fetchedAt: new Date().toISOString() }

async function get(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  })
  if (!res.ok) console.warn(`[${res.status}] ${url.slice(0, 80)}`)
  return res.text()
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

// ── Facebook Pages (Graph API, needs FB_ACCESS_TOKEN) ──
if (FB_TOKEN) {
  try {
    const body = await get(
      `https://graph.facebook.com/v22.0/${FB_PAGE}?fields=followers_count,fan_count&access_token=${FB_TOKEN}`
    )
    const j = JSON.parse(body)
    if (j && !j.error) {
      data.facebook = { followers: j.fan_count ?? j.followers_count ?? 0 }
      console.log(`Facebook OK: ${data.facebook.followers} followers`)
    } else {
      console.warn(`Facebook API error: ${j?.error?.message}`)
    }
  } catch (e) {
    console.error('Facebook fetch failed:', e.message)
  }
} else {
  console.warn('FB_ACCESS_TOKEN not set — skipping Facebook')
}

// ── Write ──
mkdirSync(dirname(OUT_FILE), { recursive: true })
writeFileSync(OUT_FILE, JSON.stringify(data, null, 2))
console.log('Wrote', OUT_FILE)
