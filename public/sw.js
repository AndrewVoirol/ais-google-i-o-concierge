const CACHE_NAME = 'io-concierge-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  // Only cache http/https requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Cache the dynamically fetched response (Stale-While-Revalidate pattern)
        if (networkResponse.ok) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch((error) => {
        // Fetch failed (network offline), just resolve to cached response or error
        console.warn('Fetch failed, using cache if available. ', error);
      });

      return cachedResponse || fetchPromise;
    })
  );
});
