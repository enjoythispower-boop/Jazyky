// Síť má přednost, ale když neodpoví do pár sekund (slabý signál), použije se uložená verze
const CACHE = 'jazyky-v24';
const DATA = [
  'core', 'es', 'ru', 'es/a2-slova', 'es/b1-slova', 'es/b1-slova2', 'es/b1-vety', 'es/b1-vety2',
  'es/b1-texty', 'es/b1-texty2', 'es/b1-texty3', 'es/b1-gramatika', 'es/b1-gramatika2',
  'es/b1-dialogy', 'es/b1-fraze', 'es/b1p-slova', 'es/b1p-slova2', 'es/b1p-vety', 'es/b1p-vety2', 'es/b1p-texty',
  'es/b1p-texty2', 'es/b1p-gramatika', 'es/b1p-dialogy', 'es/b1p-dialogy2', 'es/b1p-fraze', 'ru/a0-slova',
  'ru/a0-vety', 'ru/a0-texty', 'ru/a1-slova', 'ru/a1-slova2', 'ru/a1-vety2', 'ru/a1-texty2',
  'ru/a1-gramatika', 'ru/a1-gramatika2', 'ru/a1-fraze', 'ru/a2-slova', 'ru/a2-slova2', 'ru/a2-vety', 'ru/a2-vety2',
  'ru/a2-texty', 'ru/a2-texty2', 'ru/a2-gramatika', 'ru/a2-dialogy', 'ru/a2-dialogy2', 'ru/a2-fraze',
];
const CORE = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'icon.svg', ...DATA.map(f => `data/${f}.js`)];
const TIMEOUT = 2500;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const ok = url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!ok) return;
  e.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    const network = fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    });
    // Bez uložené kopie se čeká na síť; s kopií jen chvíli, pak se vrátí kopie a síť ji na pozadí obnoví
    if (!cached) return network.catch(() => caches.match('index.html'));
    const late = new Promise(resolve => setTimeout(() => resolve(cached), TIMEOUT));
    e.waitUntil(network.catch(() => {}));
    return Promise.race([network.catch(() => cached), late]);
  })());
});
