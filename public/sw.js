var assets = [
    "/",
    "/index.html",
    "/js/chunk-vendors.js",
    "/js/app.js"
];

self.addEventListener("install", installEvent => installEvent.waitUntil(
    caches.open("coinages-cache").then(cache => cache.addAll(assets))
));