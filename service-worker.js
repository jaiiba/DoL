// Listen for install event, set callback
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/DoL/index.html',
          '/DoL/main.js',
          '/DoL/service-worker.js',
          '/DoL/manifest.json',
          '/DoL/icon-192.png',
          '/DoL/icon-512.png',
          '/DoL/favicon.ico',
          '/DoL/DolSettingsExport.json',
          '/DoL/style.css'
        ]
      );
    })
  );
});

self.addEventListener('activate', function(event) {
  // Perform some task
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});