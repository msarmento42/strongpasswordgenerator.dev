const CACHE_NAME = 'spg-v6'; // bump this value
const CORE = [
  '/', '/index.html', '/styles.css', '/script.js',
  '/passphrase.html', '/passphrase.js', '/wordlist.json',
  '/strength-checker.html', '/enable-2fa.html', '/breach-checklist.html',
  '/pm-comparison.html', '/guide-strong-passwords.html', '/faq.html',
  '/about.html', '/contact.html', '/404.html',
  '/manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-first for the word list (it updates via Actions)
  if (url.pathname === '/wordlist.json') {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for the rest
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
