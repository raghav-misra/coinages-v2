self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_URLS') {
        event.waitUntil(
            caches.open("coinages-cache")
                .then( (cache) => {
                    return cache.addAll(event.data.payload);
                })
        );
    }
});