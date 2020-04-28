const assets = [
    "/",
    "/index.html",
    "/js/chunk-vendors.js",
    "/js/app.js",
    "/css/app.css"
];

self.addEventListener("install", installEvent => installEvent.waitUntil(
    caches.open("coinages-cache").then(cache => cache.addAll(assets))
));