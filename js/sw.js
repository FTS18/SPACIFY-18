const cacheName = 'cache-v2';

const resourcesToPrecache = [

    ];

self.addEventListener('install', event => {

    console.log('Service worker install event!');

    event.waitUntil(

        caches.open(cacheName)

        .then(cache => {

            return cache.addAll(resourcesToPrecache);

        })

    );

});

self.addEventListener('fetch', event => {

    event.respondWith(caches.match(event.request)

        .then(cachedResponse => {

            return cachedResponse || fetch(event.request);

        })

    );

});
