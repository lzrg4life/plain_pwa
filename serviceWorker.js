const staticPWA = "pwa-test-v1";

const assets = [
    "/",
    "/js/app.js",
    "/js/route.js",
    "/js/router.js",
    "/views/about.html",
    "/views/home.html",
    "/images/icons/icon-512x512.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-96x96.png",
    "/images/icons/icon-72x72.png",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPWA).then(cache => cache.addAll(assets))
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});
