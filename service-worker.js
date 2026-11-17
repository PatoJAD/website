// PatoJAD Service Worker
// Cache-first for static assets, network-first for HTML

const CACHE_VERSION = 'v1';
const CACHE_STATIC = `patojad-static-${CACHE_VERSION}`;
const CACHE_PAGES = `patojad-pages-${CACHE_VERSION}`;
const CACHE_IMAGES = `patojad-images-${CACHE_VERSION}`;

// Assets to precache on install
const PRECACHE_URLS = [
  '/',
  '/offline.html'
];

// Install: precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches and notify clients of update
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => {
            return name.startsWith('patojad-') &&
              name !== CACHE_STATIC &&
              name !== CACHE_PAGES &&
              name !== CACHE_IMAGES;
          })
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      // Notify all clients that a new version is available
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_UPDATED' });
        });
      });
      return self.clients.claim();
    })
  );
});

// Fetch: apply different strategies based on request type
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // HTML pages: network-first with cache fallback
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstHTML(request));
    return;
  }

  // Images: cache-first with network fallback
  if (request.destination === 'image') {
    event.respondWith(cacheFirstImages(request));
    return;
  }

  // Static assets (CSS, JS, fonts): cache-first
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirstStatic(request));
    return;
  }
});

// Network-first strategy for HTML pages
async function networkFirstHTML(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_PAGES);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    // Fallback to offline page
    return caches.match('/offline.html');
  }
}

// Cache-first strategy for images
async function cacheFirstImages(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) return cachedResponse;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_IMAGES);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a transparent 1x1 pixel as fallback for images
    return new Response(
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
}

// Cache-first strategy for static assets
async function cacheFirstStatic(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) return cachedResponse;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response('', { status: 503, statusText: 'Service Unavailable' });
  }
}

// Check if a path is a static asset
function isStaticAsset(pathname) {
  return /\.(css|js|woff2?|ttf|otf|eot|svg|ico)(\?.*)?$/.test(pathname);
}
