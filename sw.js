const CACHE_NAME = 'coco-eye-v2';
const FILES = ['./', './index.html', './manifest.json', './coco-eye-calendar.ics'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
