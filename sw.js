var cacheName = 'wishlist';
var assets = [
  '/',
  '/index.html',
  '/css/style.css'
  'js/main.js'
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(response => {
      return response || fetch(fetchEvent.request)
    })
  )
})
