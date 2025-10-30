const CACHE_NAME = 'spg-v1';
const CORE = [
  '/', '/index.html', '/styles.css', '/script.js',
  '/passphrase.html', '/strength-checker.html',
  '/guide-strong-passwords.html', '/pm-comparison.html',
  '/enable-2fa.html', '/breach-checklist.html',
  '/privacy.html', '/terms.html', '/about.html', '/contact.html',
  '/favicon.svg', '/manifest.webmanifest', '/offline.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))).then(self.clients.claim()));
});

function isWordList(url) {
  return url.includes('/assets/words-70k.json') || url.includes('/assets/words-50k.json') || url.includes('/assets/eff_large_wordlist.txt');
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (isWordList(url.pathname)) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      if (req.method === 'GET' && res.ok) {
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match('/offline.html')))
  );
});
