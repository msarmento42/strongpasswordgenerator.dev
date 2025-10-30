const CACHE='spg-v1';
const CORE=['/','/index.html','/styles.css','/script.js','/passphrase.html','/passphrase.js','/manifest.webmanifest','/robots.txt','/sitemap.xml'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',e=>{
  const req=e.request; const url=new URL(req.url);
  if(req.method!=='GET'){return;}
  if(url.origin===location.origin){
    if(url.pathname.endsWith('.html')||url.pathname==='/'){
      e.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));return r;}).catch(()=>caches.match(req)));
      return;
    }
    e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));return r;})));
  }else{
    e.respondWith(fetch(req).catch(()=>caches.match(req)));
  }
});