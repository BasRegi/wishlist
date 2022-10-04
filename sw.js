var cacheName = 'wishlist';
var assets = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      assets.map(function(url) {
        cache.add(url)
          .catch(function(error) {
            console.log("Unable to cache file: %s, error: %s", url, error);
          })
      })
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
