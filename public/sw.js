/* eslint-disable no-restricted-globals */
const CACHE_NAME = "folio-cache";

self.addEventListener("install", function (event) {
  console.log("Installing Service Worker ...");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache
        .addAll([
          "/",
          "/index.html",
          "/css/main.css",
          "/js/main.js",
          "/js/manifest.json",
          "/images/logo192.png",
          "/images/logo512.png",
          "static/js/bundle.js"
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("Activating Service Worker ...");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  console.log("Fetching:", event.request.url);
  if (navigator.onLine) {
    var fetchRequest = event.request.clone();
    return fetch(fetchRequest).then(function (response) {
      if (!response || response.status !== 200 || response.type !== "basic") {
        return response;
      }
      var responseToCache = response.clone();
      caches.open(CACHE_NAME).then(function (cache) {
        cache.put(event.request, responseToCache);
      });
      return response;
    });
  } else {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});
