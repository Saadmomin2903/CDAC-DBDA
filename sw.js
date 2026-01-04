const CACHE_NAME = 'mcq-platform-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './auth-styles.css',
    './app.js',
    './auth-ui.js',
    './exam-logic.js',
    './leaderboard.js',
    './mistakes-logic.js',
    './parser.js',
    './supabase-client.js',
    './stats-ui.js',
    './favicon.png',
    './ml_mcqs_final_2000.md',
    './Java_MCQ_Bank_2000.md',
    './Advance_analytics.md',
    './DV.md',
    './Python_R_2000_MCQs.md',
    './dbms.txt',
    './linux_cloudComputing.md',
    './big_data_mcqs_2000.md'
];

// Install Event - Cache Static Assets
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all: app shell and content');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate Event - Cleanup Old Caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// Fetch Event - Network First, falling back to Cache
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests (like Supabase API)
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Ignore non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Clone the response
                const responseToCache = response.clone();

                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                return response;
            })
            .catch(() => {
                // If network fails, return from cache
                return caches.match(event.request);
            })
    );
});
