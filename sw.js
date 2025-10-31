const CACHE = 'spg-v2';
const CORE = [
  '/', '/index.html', '/styles.css', '/script.js',
  '/passphrase.html', '/passphrase.js', '/wordlist.json',
  '/faq.html', '/strength-checker.html', '/enable-2fa.html',
  '/breach-checklist.html', '/pm-comparison.html', '/guide-strong-passwords.html',
  '/about.html', '/contact.html',
  '/manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Network-first for wordlist (it updates via Actions), cache-first for the rest
  if (url.pathname === '/wordlist.json') {
    e.respondWith(fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
