'use strict';

/* ================= ZÁKLAD ================= */
const app = document.getElementById('app');
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const rnd = a => a[Math.random() * a.length | 0];
const plural = (n, a, b, c) => n === 1 ? a : (n >= 2 && n <= 4 ? b : c);
const isCyr = s => /[а-яё]/i.test(s);
const pad = n => String(n).padStart(2, '0');
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const DAY = 864e5;

// Klíče, které patří jen tomuto zařízení a nesynchronizují se
const LOCAL_KEYS = new Set(['session', 'sync', 'meta']);
const store = {
  get(k, d) { try { const v = localStorage.getItem('jz_' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) {
    try {
      localStorage.setItem('jz_' + k, JSON.stringify(v));
      if (LOCAL_KEYS.has(k)) return;
      // Čas změny každého klíče rozhoduje při synchronizaci, která verze je novější
      const m = this.get('meta', {});
      m[k] = Date.now();
      localStorage.setItem('jz_meta', JSON.stringify(m));
      sync.dirty = true;
    } catch { /* soukromé okno apod. */ }
  },
};

const settings = Object.assign({
  rate: 0.9, autoSpeak: true, esVoice: 'latam', vosotros: false,
  translit: false, kbd: false, cardDir: 'tc', trDir: 'ct', tenses: {},
  level: {}, dlgWrite: false,
}, store.get('settings', {}));
const saveSettings = () => store.set('settings', settings);

let L = null;       // data aktuálního jazyka
let onKey = null;   // klávesy pro aktuální obrazovku

// Dočasně přepne aktuální jazyk (opakování i plán čtou L)
function withLang(D, fn) {
  const prev = L;
  L = D;
  try { return fn(); } finally { L = prev; }
}

const I = {
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/></svg>',
  kbd: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2.5"/><path d="M7 10h.01M10.5 10h.01M14 10h.01M17 10h.01M8 14h8"/></svg>',
  swap: '<svg viewBox="0 0 24 24"><path d="M7 4L3.5 7.5 7 11M3.5 7.5H17M17 13l3.5 3.5L17 20M20.5 16.5H7"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  slow: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 1.5M10 3h4"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  almost: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5M12 16.2v.1"/></svg>',
  bksp: '<svg viewBox="0 0 24 24"><path d="M8.5 5.5H19a2 2 0 012 2v9a2 2 0 01-2 2H8.5L3 12z"/><path d="M11.5 9.5l5 5M16.5 9.5l-5 5"/></svg>',
  repeat: '<svg viewBox="0 0 24 24"><path d="M19.5 11A7.5 7.5 0 006 6.8M4.5 3.5v3.8h3.8M4.5 13A7.5 7.5 0 0018 17.2M19.5 20.5v-3.8h-3.8"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
  skip: '<svg viewBox="0 0 24 24"><path d="M5 6l8 6-8 6zM17 6v12"/></svg>',
  cloud: '<svg viewBox="0 0 24 24"><path d="M7 18.5h10.5a4 4 0 00.6-7.96A6 6 0 006.4 9.6 4.5 4.5 0 007 18.5z"/></svg>',
};

// Ikony režimů na rozcestníku jazyka
const MI = {
  slovicka: '<svg viewBox="0 0 24 24"><rect x="3.5" y="7" width="13" height="13" rx="2.5"/><path d="M8 3.5h9.5a3 3 0 013 3V16"/></svg>',
  vety: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="8" height="6" rx="1.8"/><rect x="13" y="5" width="8" height="6" rx="1.8"/><rect x="3" y="13" width="11" height="6" rx="1.8"/></svg>',
  preklad: '<svg viewBox="0 0 24 24"><path d="M3.5 5.5h9M8 3.5v2M10.5 5.5c-.6 3.6-2.8 6.4-6 7.8M6 8.5c1.2 2.2 3.2 3.9 5.5 4.8M13 20.5l3.8-9 3.7 9M14.3 17.5h5"/></svg>',
  poslech: '<svg viewBox="0 0 24 24"><path d="M4 15.5V12a8 8 0 0116 0v3.5"/><rect x="3.5" y="14" width="4.5" height="6.5" rx="1.8"/><rect x="16" y="14" width="4.5" height="6.5" rx="1.8"/></svg>',
  cteni: '<svg viewBox="0 0 24 24"><path d="M12 6.5C10 5 7 4.5 3.5 5v13.5c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5c-3.5-.5-6.5 0-8.5 1.5zM12 6.5V20"/></svg>',
  dialogy: '<svg viewBox="0 0 24 24"><path d="M4 5.5h10a2 2 0 012 2v5a2 2 0 01-2 2H9l-3.5 3v-3H4a2 2 0 01-2-2v-5a2 2 0 012-2z"/><path d="M18 9.5h2a2 2 0 012 2v5a2 2 0 01-2 2h-1v2.5L16 18.5h-4"/></svg>',
  gramatika: '<svg viewBox="0 0 24 24"><path d="M4.5 19.5h4l10.3-10.3a2.1 2.1 0 00-3-3L5.5 16.5zM14.5 7.5l3 3"/></svg>',
  casovani: '<svg viewBox="0 0 24 24"><rect x="3.5" y="4" width="17" height="16" rx="2.8"/><path d="M3.5 9.5h17M3.5 14.7h17M10 9.5V20"/></svg>',
  moje: '<svg viewBox="0 0 24 24"><path d="M7.5 3.5h9a1.5 1.5 0 011.5 1.5v15.5l-6-4.2-6 4.2V5a1.5 1.5 0 011.5-1.5z"/></svg>',
};

const MODES = [
  { id: 'slovicka', name: 'Slovíčka', desc: 'Kartičky, výběr a psaní podle témat' },
  { id: 'vety', name: 'Skládání vět', desc: 'Poskládej větu ze slov' },
  { id: 'preklad', name: 'Překlad', desc: 'Věty i celé texty, oběma směry' },
  { id: 'poslech', name: 'Poslech', desc: 'Poslechni si větu a napiš ji' },
  { id: 'cteni', name: 'Čtení', desc: 'Texty se slovníčkem a otázkami' },
  { id: 'dialogy', name: 'Dialogy', desc: 'Co v rozhovoru říct a jak' },
  { id: 'gramatika', name: 'Gramatika', desc: 'Doplňování podle pravidel' },
  { id: 'casovani', name: 'Časování', desc: 'Tvary sloves a tabulky' },
  { id: 'moje', name: 'Moje slovíčka', desc: 'Vlastní slova z cest a hovorů' },
];

/* ================= ÚROVNĚ ================= */
const lvOf = x => JZ.lv.get(x);
const curLevel = (D = L) => { const id = settings.level[D.code]; return D.levels.some(l => l.id === id) ? id : D.levels[0].id; };
const levelIdx = (id, D = L) => D.levels.findIndex(l => l.id === id);
const levelOf = (id, D = L) => D.levels.find(l => l.id === id) || D.levels[0];
const levelName = (id, D = L) => levelOf(id, D).name;
const atLevel = (list, id) => list.filter(x => lvOf(x) === id);
// Látka do dané úrovně včetně – starší se dál opakuje
const upToLevel = (list, id) => { const n = levelIdx(id); return list.filter(x => levelIdx(lvOf(x)) <= n); };

// Seznam rozdělený podle úrovní; aktuální úroveň je označená
function byLevel(list, row) {
  return L.levels.map(lv => {
    const items = list.map((x, i) => [x, i]).filter(([x]) => lvOf(x) === lv.id);
    if (!items.length) return '';
    return `<section class="lv-group">
      <h3 class="lv-head"><span class="lv-name">${lv.name}</span>${lv.id === curLevel() ? '<span class="lv-cur">tvoje úroveň</span>' : ''}</h3>
      <div class="list">${items.map(([x, i]) => row(x, i)).join('')}</div></section>`;
  }).join('');
}

/* ================= TEXT A KONTROLA ================= */
const plain = s => String(s).replace(/́/g, '');

function norm(s) {
  return String(s).normalize('NFC').toLowerCase().replace(/́/g, '').replace(/ё/g, 'е')
    .replace(/\([^)]*\)/g, ' ').replace(/[¿¡?!.,;:"'«»„“”‚‘’…—–\-]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
const loose = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');

// „el boleto / el billete“, „cansado/a“, „dobře; vpravo“, „soler + infinitivo“ → jednotlivé přijatelné odpovědi
function variants(ans) {
  const out = new Set();
  for (let p of String(ans).replace(/\([^)]*\)/g, ' ').split(/\s+\/\s+|\s*;\s*/)) {
    p = p.replace(/\s*\+.*$/, '').trim();
    if (!p) continue;
    if (/o\/a\b/.test(p)) { out.add(p.replace(/o\/a\b/, 'o')); out.add(p.replace(/o\/a\b/, 'a')); }
    else out.add(p);
  }
  return [...out];
}

const ART = /^(el|la|los|las|un|una) /;
function check(input, answers) {
  const n = norm(input), l = loose(input);
  if (!n) return { r: 'bad' };
  const vs = [].concat(answers).flatMap(variants);
  if (vs.some(v => norm(v) === n)) return { r: 'ok' };
  if (vs.some(v => loose(v) === l)) return { r: 'almost', why: 'Skoro – pozor na diakritiku.' };
  if (vs.some(v => ART.test(norm(v)) && norm(v).replace(ART, '') === n.replace(ART, ''))) return { r: 'almost', why: 'Skoro – pozor na člen.' };
  if (vs.some(v => ART.test(norm(v)) && loose(v).replace(ART, '') === l.replace(ART, ''))) return { r: 'almost', why: 'Skoro – pozor na člen a diakritiku.' };
  return { r: 'bad' };
}

// Rozdíl po slovech (nejdelší společná podposloupnost)
function diff(user, ref) {
  const a = user.trim().split(/\s+/).filter(Boolean), b = ref.trim().split(/\s+/);
  const na = a.map(loose), nb = b.map(loose);
  const L2 = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      L2[i][j] = na[i] === nb[j] ? L2[i + 1][j + 1] + 1 : Math.max(L2[i + 1][j], L2[i][j + 1]);
  const inA = new Set(), inB = new Set();
  for (let i = 0, j = 0; i < a.length && j < b.length;) {
    if (na[i] === nb[j]) { inA.add(i); inB.add(j); i++; j++; }
    else if (L2[i + 1][j] >= L2[i][j + 1]) i++; else j++;
  }
  return {
    user: a.map((w, k) => inA.has(k) ? esc(w) : `<del>${esc(w)}</del>`).join(' '),
    ref: b.map((w, k) => inB.has(k) ? esc(w) : `<mark>${esc(w)}</mark>`).join(' '),
  };
}

function diffBlock(user, ref, refIsTarget) {
  const d = diff(user, ref);
  return `<div class="diff">
    <div><small>Tvoje odpověď</small><p>${d.user || '—'}</p></div>
    <div><small>Správně</small><p class="${refIsTarget ? 'tl' : ''}">${d.ref}</p></div>
  </div>`;
}

/* ================= ŘEČ ================= */
const tts = {
  ok: 'speechSynthesis' in window,
  voices: [],
  load() { if (this.ok) this.voices = speechSynthesis.getVoices(); },
  voiceFor(code) {
    const want = code === 'ru' ? ['ru'] : settings.esVoice === 'es' ? ['es-es', 'es'] : ['es-mx', 'es-us', 'es-419', 'es-co', 'es-ar', 'es'];
    for (const w of want) {
      const v = this.voices.find(v => v.lang.replace('_', '-').toLowerCase().startsWith(w));
      if (v) return v;
    }
    return null;
  },
  say(text, opts = {}) {
    if (!this.ok || !L) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(plain(text).replace(/\([^)]*\)/g, '').replace(/\s+\/\s+/g, ', ').replace(/[…+]/g, ' '));
    const v = this.voiceFor(L.code);
    if (v) u.voice = v;
    u.lang = v ? v.lang : (L.code === 'ru' ? 'ru-RU' : 'es-MX');
    u.rate = settings.rate * (opts.slow ? 0.7 : 1);
    speechSynthesis.speak(u);
  },
};
if (tts.ok) { tts.load(); speechSynthesis.addEventListener?.('voiceschanged', () => tts.load()); }
const autoSay = t => { if (settings.autoSpeak) tts.say(t); };
const sayBtn = (t, cls = '') => tts.ok ? `<button type="button" class="ibtn say ${cls}" data-say="${esc(t)}" aria-label="Přehrát výslovnost">${I.sound}</button>` : '';

/* ================= OPAKOVÁNÍ (Leitner) ================= */
const SRS_DAYS = [0, 1, 3, 7, 16, 40];
const srs = {
  all: store.get('srs', {}),
  get(w) { return this.all[L.code + '|' + w]; },
  grade(w, good) {
    const c = this.get(w) || { b: 0 };
    const b = good ? Math.min(c.b + 1, SRS_DAYS.length - 1) : 0;
    this.all[L.code + '|' + w] = { b, d: Date.now() + SRS_DAYS[b] * DAY - 2 * 36e5, u: Date.now() };
    store.set('srs', this.all);
  },
  due(w) { const c = this.get(w); return !!c && c.d <= Date.now(); },
};

const mine = () => store.get('mine_' + L.code, []);
const mineWords = () => mine().map(m => ({ t: m.t, c: m.c, topic: 'moje' }));
function baseWords() {
  const w = [], seen = new Set();
  L.vocab.forEach((t, i) => t.words.forEach(([a, c]) => {
    if (seen.has(a)) return;
    seen.add(a);
    w.push({ t: a, c, topic: i, lv: lvOf(t) });
  }));
  return w;
}
const allWords = () => [...baseWords(), ...mineWords()];
const dueWords = () => allWords().filter(w => srs.due(w.t));

function topicWords(id) {
  if (id === 'vse') return baseWords();
  const t = L.vocab[+id];
  return t ? t.words.map(([a, c]) => ({ t: a, c, topic: +id })) : [];
}
const topicName = id => id === 'vse' ? 'Všechna témata' : (L.vocab[+id] || {}).name || 'Slovíčka';

// Nejdřív slova k opakování, pak nová, pak ta, která přijdou na řadu nejdřív
function pickWords(words, n = 15) {
  const now = Date.now();
  const due = shuffle(words.filter(w => srs.due(w.t)));
  const fresh = shuffle(words.filter(w => !srs.get(w.t)));
  const rest = words.filter(w => { const s = srs.get(w.t); return s && s.d > now; })
    .sort((a, b) => srs.get(a.t).d - srs.get(b.t).d);
  return [...due, ...fresh, ...rest].slice(0, n);
}

/* ================= OBMĚNA OBSAHU ================= */
// Věty, gramatika, slovesa, texty a dialogy se v denním plánu střídají: co šlo dobře, vrátí se později
const rot = {
  all: store.get('rot', {}),
  key: (kind, id) => `${L.code}|${kind}|${id}`,
  get(kind, id) { return this.all[this.key(kind, id)]; },
  mark(kind, id, days) {
    const c = this.get(kind, id) || { n: 0 };
    this.all[this.key(kind, id)] = { n: c.n + 1, d: Date.now() + days * DAY, u: Date.now() };
    store.set('rot', this.all);
  },
  // Nejdřív nové (v pořadí seznamu), pak ty, které už přišly na řadu, nakonec ostatní od nejdřív splatných
  pick(kind, list, idOf, n) {
    const now = Date.now(), fresh = [], due = [], rest = [];
    for (const x of list) { const c = this.get(kind, idOf(x)); (!c ? fresh : c.d <= now ? due : rest).push(x); }
    const by = (a, b) => this.get(kind, idOf(a)).d - this.get(kind, idOf(b)).d;
    return [...fresh, ...due.sort(by), ...rest.sort(by)].slice(0, n);
  },
};

/* ================= KOSTRA STRÁNKY ================= */
function page(title, back, body, cls = '') {
  app.innerHTML = `
    <header class="bar">
      ${back != null
        ? `<a class="ibtn" href="${back}" aria-label="Zpět">${I.back}</a>`
        : `<a class="logo" href="#/" aria-label="Domů">J</a>`}
      <h1 class="bar-title ${/class="(sec-head|lang-head|today-head)/.test(body) ? 'collapse' : ''}">${title || ''}</h1>
      ${L ? `<nav class="lang-switch" aria-label="Jazyk">${['es', 'ru'].map(c => c === L.code
        ? `<span class="on" aria-current="page">${c.toUpperCase()}</span>`
        : `<a href="#/${c}" title="Přepnout na ${esc(DATA[c].name.toLowerCase())}">${c.toUpperCase()}</a>`).join('')}</nav>` : ''}
      <button type="button" class="ibtn" data-act="settings" aria-label="Nastavení">${I.gear}</button>
    </header>
    <main class="main ${cls}">${body}</main>`;
  document.documentElement.classList.toggle('page-wide', cls === 'wide');
  window.scrollTo(0, 0);
}

// Výměna obsahu bez změny adresy (kroky denního plánu) s plynulým přechodem
function swap(fn, dir = 'fwd') {
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return fn();
  document.documentElement.dataset.nav = dir;
  document.startViewTransition(fn);
}

/* ================= VSTUP ODPOVĚDI ================= */
function inputParts(lang, { multi = false, name = 'a', placeholder = '', cls = '', style = '' } = {}) {
  const target = lang !== 'cz';
  const attrs = `class="answer ${target ? 'tl' : ''} ${cls}" name="${name}" lang="${lang === 'cz' ? 'cs' : lang}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(placeholder)}" ${style ? `style="${style}"` : ''} ${lang === 'ru' && settings.kbd ? 'inputmode="none"' : ''}`;
  const field = multi ? `<textarea ${attrs} rows="2"></textarea>` : `<input ${attrs}>`;
  let tools = '';
  if (lang === 'es') {
    tools = `<div class="chars">${L.chars.map(c => `<button type="button" class="chip key" data-ins="${c}">${c}</button>`).join('')}</div>`;
  } else if (lang === 'ru') {
    tools = `<div class="chars">
        <button type="button" class="chip ${settings.kbd ? 'on' : ''}" data-act="kbd">${I.kbd}<span>Klávesnice</span></button>
        <button type="button" class="chip ${settings.translit ? 'on' : ''}" data-act="translit"><span>Latinkou → азбука</span></button>
      </div>
      <p class="translit-help" ${settings.translit ? '' : 'hidden'}>Piš latinkou: <b>w</b>=ш, <b>wh</b>=щ, <b>ch</b>=ч, <b>zh</b>=ж, <b>q</b> / <b>ya</b>=я, <b>yu</b>=ю, <b>yo</b>=ё, <b>y</b>=ы, <b>e'</b>=э, <b>'</b>=ь, <b>"</b>=ъ, <b>x</b> / <b>h</b>=х, <b>c</b>=ц, <b>j</b>=й</p>
      <div class="vkbd" ${settings.kbd ? '' : 'hidden'}>
        ${L.keyboard.map(r => `<div class="vk-row">${[...r].map(ch => `<button type="button" class="vk" data-ins="${ch}">${ch}</button>`).join('')}</div>`).join('')}
        <div class="vk-row"><button type="button" class="vk wide" data-ins=" ">mezera</button><button type="button" class="vk wide" data-act="bksp" aria-label="Smazat">${I.bksp}</button></div>
      </div>`;
  }
  return { field, tools };
}

function inputHTML(lang, opts) {
  const { field, tools } = inputParts(lang, opts);
  return `<div class="answer-box" data-lang="${lang}">${field}${tools}</div>`;
}

// Znaky se vkládají do políčka, které mělo naposledy fokus (v tabulce časování jich je víc)
let lastField = null;
document.addEventListener('focusin', e => { if (e.target.classList && e.target.classList.contains('answer')) lastField = e.target; });

function insertChar(btn, ch) {
  const box = btn.closest('.answer-box');
  let el = box && lastField && box.contains(lastField) ? lastField : box ? $('.answer:not([readonly])', box) : document.activeElement;
  if (!el || !el.classList || !el.classList.contains('answer') || el.readOnly) return;
  const s = el.selectionStart ?? el.value.length, e = el.selectionEnd ?? s;
  if (ch == null) {
    const from = s === e ? Math.max(0, s - 1) : s;
    el.value = el.value.slice(0, from) + el.value.slice(e);
    el.setSelectionRange(from, from);
  } else {
    el.value = el.value.slice(0, s) + ch + el.value.slice(e);
    el.setSelectionRange(s + ch.length, s + ch.length);
  }
  el.focus();
}

const TR = { a: 'а', b: 'б', v: 'в', g: 'г', d: 'д', e: 'е', z: 'з', i: 'и', j: 'й', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', t: 'т', u: 'у', f: 'ф', h: 'х', x: 'х', c: 'ц', y: 'ы', w: 'ш', q: 'я', "'": 'ь', '"': 'ъ' };
const TR2 = [['цх', 'ч'], ['зх', 'ж'], ['шх', 'щ'], ['йу', 'ю'], ['йа', 'я'], ['йо', 'ё'], ['ыу', 'ю'], ['ыа', 'я'], ['ыо', 'ё'], ['еь', 'э']];
function translit(s) {
  let o = '';
  for (const ch of s) { const lo = ch.toLowerCase(), m = TR[lo]; o += m ? (ch !== lo ? m.toUpperCase() : m) : ch; }
  for (const [a, b] of TR2) o = o.split(a).join(b).split(a[0].toUpperCase() + a[1]).join(b.toUpperCase());
  return o;
}

// Formulář s odpovědí: první odeslání = kontrola, druhé = další úloha
function answerForm(form, onCheck) {
  let answered = false, next = null;
  const field = $('.answer', form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (answered) { next && next(); return; }
    if (!field.value.trim()) { field.focus(); return; }
    answered = true;
    field.readOnly = true;
    // Po odpovědi patří místo zpětné vazbě: klávesnici schovat, vazbu dát pod políčko a tlačítko až za ni
    $$('.chars, .vkbd, .translit-help', form).forEach(el => el.hidden = true);
    const btn = $('button[type=submit]', form);
    const after = form.nextElementSibling;
    if (btn && after && after.classList.contains('after')) form.insertBefore(after, btn);
    next = onCheck(field.value);
    const target = btn && !btn.hidden ? btn : after;
    if (btn) { btn.textContent = 'Další'; btn.focus({ preventScroll: true }); }
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'nearest', behavior: 'smooth' }));
  });
  if (field.tagName === 'TEXTAREA') field.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });
  if (matchMedia('(hover: hover)').matches) field.focus();
}

/* ================= SEZENÍ ================= */
// Obecná řada úloh s průběhem a závěrečným přehledem toho, co nevyšlo.
// Rozpracované sezení se ukládá po každé úloze, takže přežije zavření karty.
// key: vlastní klíč pro uložení (kroky plánu sdílejí jednu adresu), onEnd: místo závěrečné obrazovky
function session(cfg) {
  const { title, back, intro = '', step, summary } = cfg;
  const key = cfg.key || location.hash;
  const saved = cfg.resume === false ? null : store.get('session', null);
  const resumed = !!(saved && saved.hash === key && saved.i > 0 && saved.i < saved.queue.length);
  const queue = resumed ? saved.queue : cfg.items.map(x => ({ x, again: false }));
  const missed = resumed ? saved.missed : [];
  let i = resumed ? saved.i : 0;
  const save = () => store.set('session', { hash: key, queue, i, missed });
  const clear = () => store.set('session', null);
  if (!cfg.onEnd) store.set('last_' + L.code, { hash: location.hash, title });
  const single = queue.length === 1;

  page(title, back, `${intro}
    ${resumed ? `<p class="resume">Pokračuješ tam, kde jsi skončil. <button type="button" class="link" data-restart>Začít znovu</button></p>` : ''}
    <div class="progress-row" ${single ? 'hidden' : ''}>
      <div class="progress" role="progressbar" aria-label="Průběh" aria-valuemin="0"><span></span></div>
      <span class="count" aria-hidden="true"></span>
    </div>
    <div id="stage" class="stage"></div>`, cfg.cls || '');
  const stage = $('#stage'), pr = $('.progress'), bar = $('.progress span'), count = $('.count');
  const restart = $('[data-restart]');
  if (restart) restart.onclick = () => { clear(); route(); };

  const next = () => {
    onKey = null;
    bar.style.width = (i / queue.length * 100) + '%';
    pr.setAttribute('aria-valuemax', queue.length);
    pr.setAttribute('aria-valuenow', i);
    if (i >= queue.length) { clear(); return cfg.onEnd ? cfg.onEnd(missed, stage) : finish(); }
    count.textContent = `${i + 1} / ${queue.length}`;
    const cur = queue[i];
    stage.innerHTML = '';
    step(cur.x, stage, (ok, opts = {}) => {
      if (!ok) {
        const k = JSON.stringify(cur.x);
        if (!missed.some(m => JSON.stringify(m) === k)) missed.push(cur.x);
        if (opts.again && !cur.again) queue.push({ x: cur.x, again: true });
      }
      i++;
      save();
      next();
    });
  };

  const finish = () => {
    count.textContent = '';
    const n = missed.length;
    stage.innerHTML = `<div class="sess-end">
      <h2 class="display tl">Hotovo</h2>
      ${n ? missedList(missed, summary) : `<p class="muted">Všechno sedělo.</p>`}
      <div class="actions">
        ${n ? `<button type="button" class="btn primary" data-retry>Zopakovat tyhle</button>` : ''}
        <button type="button" class="btn ${n ? '' : 'primary'}" data-again>Nové kolo</button>
      </div>
      <a class="back-link" href="${back}">Zpět</a>
    </div>`;
    const again = () => route();
    const retry = () => session({ ...cfg, items: missed.slice(), resume: false });
    $('[data-again]', stage).onclick = again;
    if (n) $('[data-retry]', stage).onclick = retry;
    $('.sess-end .btn.primary', stage).focus({ preventScroll: true });
    onKey = e => { if (e.key === 'Enter') { e.preventDefault(); (n ? retry : again)(); } };
  };

  if (!queue.length) {
    stage.innerHTML = `<p class="empty">Tady zatím nic není.</p>`;
    return;
  }
  next();
}

function missedList(missed, summary) {
  const rows = [...new Set(missed.map(summary))];
  const n = rows.length;
  return `<p class="muted">${n === 1 ? 'Jedna věc chce' : `${n} ${plural(n, 'věc', 'věci', 'věcí')} chtějí`} ještě projít:</p>
    <ul class="missed">${rows.map(r => `<li>${r}</li>`).join('')}</ul>`;
}

function fb(r, html) {
  const head = { ok: 'Správně', almost: 'Skoro', bad: 'Ne tak docela' }[r];
  const icon = { ok: I.check, almost: I.almost, bad: I.x }[r];
  return `<div class="fb ${r}"><strong>${icon}${head}</strong>${html}</div>`;
}

const sentSummary = s => `<span class="tl">${esc(s[0])}</span><br><small>${esc(s[1])}</small>`;
const wordSummary = w => `<span class="tl">${esc(w.t)}</span> — ${esc(w.c)}`;

/* ================= DENNÍ PLÁN ================= */
const BLOCKS = [
  { name: 'Slovní zásoba', desc: 'opakování a nová slova' },
  { name: 'Stavba jazyka', desc: 'časování, gramatika, skládání vět' },
  { name: 'Jazyk v použití', desc: 'čtení, dialog, překlad, poslech' },
];
// Kolik čeho plán denně obsahuje: španělština víc používá jazyk, ruština staví základ
const RECIPE = {
  es: { review: 40, fresh: 15, verbs: 3, gram: 10, build: 5, tr: 8, trDlg: 5, listen: 5 },
  ru: { review: 40, fresh: 15, verbs: 3, gram: 15, build: 5, tr: 5, trDlg: 3, listen: 4 },
};
const STEP = {
  review: { name: 'Opakování', b: 0 },
  fresh: { name: 'Nová slova', b: 0 },
  conj: { name: 'Časování', b: 1 },
  gram: { name: 'Gramatika', b: 1 },
  build: { name: 'Skládání vět', b: 1 },
  read: { name: 'Čtení', b: 2 },
  dialog: { name: 'Dialog', b: 2 },
  tr: { name: 'Překlad', b: 2 },
  listen: { name: 'Poslech', b: 2 },
};

// Nová slova: nejdřív vlastní, pak z aktuální úrovně v pořadí témat, pak nedobraná ze starších
function freshWords(lv, n) {
  const unseen = w => !srs.get(w.t);
  const words = baseWords();
  return [
    ...mineWords().filter(unseen).slice(0, 5),
    ...words.filter(w => w.lv === lv && unseen(w)),
    ...words.filter(w => levelIdx(w.lv) < levelIdx(lv) && unseen(w)),
  ].slice(0, n);
}

const tenseOk = (v, t) => (!v.only || v.only.includes(t)) && !!L.conj.conjugate(v, t);
const irregular = v => !v.reg && Object.keys(v).some(k => !['inf', 'cz', 'only', 'asp', 'pair'].includes(k));

// Tři slovesa (aspoň jedno nepravidelné), každé ve dvou časech dané úrovně
function planConj(lv, n) {
  const tens = levelOf(lv).tenses;
  const okT = v => tens.filter(t => tenseOk(v, t));
  const usable = list => list.filter(v => okT(v).length);
  let pool = usable(atLevel(L.conj.verbs, lv));
  if (pool.length < n) pool = usable(upToLevel(L.conj.verbs, lv));
  const verbs = rot.pick('verb', shuffle(pool), v => v.inf, n);
  if (!verbs.some(irregular)) {
    const irr = rot.pick('verb', shuffle(pool.filter(v => irregular(v) && !verbs.includes(v))), v => v.inf, 1)[0];
    if (irr) verbs[verbs.length - 1] = irr;
  }
  return verbs.flatMap(v => sample(okT(v), 2).map(t => ({ inf: v.inf, t })));
}

// Gramatika: dvě až tři sady z aktuální úrovně, z každé pět vět, které nejdéle nepřišly na řadu
function planGrammar(lv, n) {
  let sets = atLevel(L.grammar, lv);
  if (!sets.length) sets = upToLevel(L.grammar, lv);
  const chosen = rot.pick('set', sets, s => s.id, Math.ceil(n / 5));
  chosen.forEach(s => rot.mark('set', s.id, 1));
  const per = Math.ceil(n / Math.max(chosen.length, 1));
  return chosen.flatMap(s => rot.pick('g', shuffle(s.items.map((_, i) => i)), i => s.id + '#' + i, per).map(i => ({ g: s.id, i }))).slice(0, n);
}

function makePlan(D) {
  return withLang(D, () => {
    const R = RECIPE[D.code], lv = curLevel(), steps = [];
    const add = (k, items) => { if (items.length) steps.push({ k, items }); };
    const strip = w => ({ t: w.t, c: w.c });

    add('review', shuffle(dueWords()).slice(0, R.review).map(strip));
    add('fresh', freshWords(lv, R.fresh).map(strip));

    add('conj', planConj(lv, R.verbs));
    add('gram', planGrammar(lv, R.gram));

    // Věty se v jednom dni neopakují mezi skládáním, překladem a poslechem
    let pool = atLevel(L.sentences, lv);
    if (pool.length < 30) pool = upToLevel(L.sentences, lv);
    const used = new Set(), words = s => s[0].split(/\s+/).length;
    const sents = (n, ok = () => true) => {
      const got = rot.pick('s', shuffle(pool.filter(s => !used.has(s[0]) && ok(s))), s => s[0], n);
      got.forEach(s => used.add(s[0]));
      return got;
    };
    add('build', sents(R.build, s => words(s) <= 10));

    const text = rot.pick('text', [...atLevel(L.texts, lv), ...upToLevel(L.texts, lv).filter(x => lvOf(x) !== lv)], x => x.title, 1)[0];
    if (text) add('read', [text.title]);
    const dlg = rot.pick('dlg', [...atLevel(L.dialogs, lv), ...upToLevel(L.dialogs, lv).filter(x => lvOf(x) !== lv)], x => x.id, 1)[0];
    if (dlg) add('dialog', [dlg.id]);
    // Dialog v bloku zabere čas, takže se ubere pár vět k překladu
    add('tr', sents(dlg ? R.trDlg : R.tr));
    add('listen', sents(R.listen, s => words(s) <= 12));

    return { date: dayKey(), lv, steps, at: 0, intro: -1 };
  });
}

function getPlan(D) {
  let p = store.get('plan_' + D.code, null);
  if (!p || p.date !== dayKey() || p.lv !== curLevel(D)) {
    p = makePlan(D);
    store.set('plan_' + D.code, p);
  }
  return p;
}
const savePlan = (code, p) => store.set('plan_' + code, p);
const planBlock = p => p.at < p.steps.length ? STEP[p.steps[p.at].k].b : BLOCKS.length;

// Další úroveň se nabídne, až v aktuální dojdou nová slova a další úroveň už má obsah
function nextLevel(D) {
  return withLang(D, () => {
    const lv = curLevel(), nx = D.levels[levelIdx(lv) + 1];
    if (!nx || !atLevel(L.vocab, nx.id).length) return null;
    return baseWords().some(w => w.lv === lv && !srs.get(w.t)) ? null : nx;
  });
}

/* ================= DNES ================= */
function viewToday() {
  const date = new Date().toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });
  page('Dnes', null, `
    <section class="today-head">
      <p class="today-date">${esc(date)}</p>
      <h2 class="today-title">Dnes</h2>
    </section>
    <div class="today-grid">${['es', 'ru'].map(c => todayPanel(DATA[c])).join('')}</div>`, 'wide');
  $$('[data-lvup]').forEach(b => b.onclick = () => {
    settings.level[b.dataset.lvup] = b.dataset.to;
    saveSettings();
    viewToday();
  });
}

function todayPanel(D) {
  return withLang(D, () => {
    const p = getPlan(D), cur = planBlock(p), lv = levelOf(curLevel());
    const of = k => p.steps.find(s => s.k === k);
    const started = p.at > 0 || p.intro >= 0;
    const tl = s => `<span class="tl" lang="${D.code}">${esc(s)}</span>`;

    const preview = b => {
      if (b === 0) {
        const f = of('fresh'), r = of('review');
        return {
          main: f ? tl(f.items.slice(0, 3).map(w => w.t).join(', ') + (f.items.length > 3 ? '…' : '')) : 'Jen opakování',
          meta: [f && `${f.items.length} ${plural(f.items.length, 'nové', 'nová', 'nových')}`, r && `${r.items.length} k opakování`].filter(Boolean).join(' · '),
        };
      }
      if (b === 1) {
        const c = of('conj'), g = of('gram');
        const set = g && L.grammar.find(s => s.id === g.items[0].g);
        return {
          main: c ? tl([...new Set(c.items.map(x => x.inf))].join(', ')) : 'Gramatika a věty',
          meta: ['časování', set && `gramatika: ${set.name}`, of('build') && 'skládání vět'].filter(Boolean).join(' · '),
        };
      }
      const r = of('read'), x = r && L.texts.find(t => t.title === r.items[0]);
      const first = x ? x.t.split(/(?<=[.!?])\s/)[0] : '';
      return {
        main: x ? `${tl(x.title)}<span class="t-quote tl" lang="${D.code}">${esc(first)}</span>` : 'Překlad a poslech',
        meta: ['čtení', of('dialog') && 'dialog', of('tr') && 'překlad', of('listen') && 'poslech'].filter(Boolean).join(' · '),
      };
    };

    const rows = BLOCKS.map((B, b) => {
      const has = p.steps.some(s => STEP[s.k].b === b);
      const state = !has || b < cur ? 'done' : b === cur ? 'cur' : 'todo';
      const pv = preview(b);
      return `<li class="tb ${state}">
        <span class="t-num" aria-hidden="true">${state === 'done' ? I.check : b + 1}</span>
        <div class="t-body">
          <span class="t-name">${B.name}</span>
          <span class="t-main">${has ? pv.main : 'Dnes nic'}</span>
          ${has && pv.meta ? `<span class="t-meta">${pv.meta}</span>` : ''}
        </div>
      </li>`;
    }).join('');

    const done = cur >= BLOCKS.length;
    const nx = nextLevel(D);
    return `<section class="today-panel" data-l="${D.code}">
      <header class="tp-head">
        <h3 class="tp-native" lang="${D.code}">${D.native}</h3>
        <p class="tp-meta">${D.name} · úroveň ${lv.name}</p>
      </header>
      <ol class="tbs">${rows}</ol>
      ${nx ? `<div class="lvup"><p>Nová slova úrovně ${lv.name} máš prošlá. Další je <b>${nx.name}</b> – ${esc(nx.about)}.</p>
        <button type="button" class="btn" data-lvup="${D.code}" data-to="${nx.id}">Přejít na ${nx.name}</button></div>` : ''}
      <div class="tp-actions">
        <a class="tp-go ${done ? 'calm' : ''}" href="#/${D.code}/dnes">${done ? 'Na dnešek hotovo' : started ? `Pokračovat · blok ${cur + 1}` : 'Začít'}${done ? '' : I.arrow}</a>
        <a class="tp-more" href="#/${D.code}">Všechna cvičení</a>
      </div>
    </section>`;
  });
}

/* ================= TOK DNEŠNÍHO PLÁNU ================= */
function viewFlow() {
  const p = getPlan(L);
  if (p.at >= p.steps.length) return flowDone(p);
  const st = p.steps[p.at], b = STEP[st.k].b;
  // Krok bez hlasu nejde udělat – přeskočí se
  if (st.k === 'listen' && !tts.ok) { p.at++; savePlan(L.code, p); return viewFlow(); }
  if (p.intro < b) return blockIntro(p, b);
  runStep(p, st);
}

function blockIntro(p, b) {
  const steps = p.steps.filter(s => STEP[s.k].b === b);
  const count = s => s.k === 'read' ? 'jeden text' : s.k === 'dialog' ? 'jeden rozhovor'
    : s.k === 'conj' ? (n => `${n} ${plural(n, 'sloveso', 'slovesa', 'sloves')}`)(new Set(s.items.map(x => x.inf)).size) : `${s.items.length}×`;
  page('Dnes', '#/', `
    <section class="block-intro">
      <span class="bi-num" aria-hidden="true">${b + 1}</span>
      <p class="bi-kicker">Blok ${b + 1} ze ${BLOCKS.length} · ${esc(L.name)}</p>
      <h2 class="bi-title">${BLOCKS[b].name}</h2>
      <ul class="bi-steps">${steps.map(s => `<li><span>${STEP[s.k].name}</span><small>${count(s)}</small></li>`).join('')}</ul>
      <button type="button" class="btn primary bi-go" data-go>Začít blok${I.arrow}</button>
      <p class="kbd-only kbd-hint">Enter</p>
    </section>`, 'flow');
  const go = () => { p.intro = b; savePlan(L.code, p); swap(viewFlow); };
  $('[data-go]').onclick = go;
  $('[data-go]').focus({ preventScroll: true });
  onKey = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
}

function flowHead(p) {
  const st = p.steps[p.at], b = STEP[st.k].b;
  const inBlock = p.steps.map((s, i) => [s, i]).filter(([s]) => STEP[s.k].b === b);
  return `<div class="flow-head">
    <div class="fh-top">
      <span class="fh-block">Blok ${b + 1} · ${BLOCKS[b].name}</span>
      <button type="button" class="link fh-skip" data-skip>Přeskočit krok</button>
    </div>
    <h2 class="fh-step">${STEP[st.k].name}</h2>
    <ol class="fh-steps" aria-label="Kroky bloku">${inBlock.map(([s, i]) => `<li class="${i < p.at ? 'done' : i === p.at ? 'cur' : ''}" title="${STEP[s.k].name}"></li>`).join('')}</ol>
  </div>`;
}

// Každý krok plánu je obyčejné sezení; po dokončení se plán posune dál
function runStep(p, st) {
  const key = `plan|${L.code}|${p.date}|${p.at}`;
  const advance = () => {
    p.at++;
    savePlan(L.code, p);
    sync.soon(3000);
    swap(viewFlow);
  };
  const cfg = flowStep(st);
  const run = more => {
    session({ ...cfg, key, title: `Dnes · ${L.name}`, back: '#/', cls: 'flow', intro: flowHead(p), ...more });
    $('[data-skip]').onclick = () => { store.set('session', null); advance(); };
  };
  run({
    onEnd: (missed, stage) => {
      if (!missed.length) return advance();
      stage.innerHTML = `<div class="sess-end step-end">
        ${missedList(missed, cfg.summary)}
        <div class="actions">
          <button type="button" class="btn" data-retry>Projít je znovu</button>
          <button type="button" class="btn primary" data-on>Pokračovat${I.arrow}</button>
        </div></div>`;
      $('[data-on]', stage).onclick = advance;
      $('[data-on]', stage).focus({ preventScroll: true });
      $('[data-retry]', stage).onclick = () => run({ key: key + '|znovu', items: missed.slice(), resume: false, onEnd: advance });
      onKey = e => { if (e.key === 'Enter') { e.preventDefault(); advance(); } };
    },
  });
}

// Co který krok plánu znamená: položky, jedna úloha a řádek v přehledu chyb
function flowStep(st) {
  const marked = (kind, idOf, good, bad, fn) => (x, stage, done) =>
    fn(x, stage, (ok, o) => { rot.mark(kind, idOf(x), ok ? good : bad); done(ok, o); });
  switch (st.k) {
    case 'review':
      return { items: st.items, step: (w, stage, done) => stepCard(w, stage, done), summary: wordSummary };
    case 'fresh': {
      // Každé nové slovo projde kartičkou, výběrem a psaním; o zařazení do opakování rozhoduje psaní
      const pool = baseWords().filter(w => w.lv === curLevel());
      const items = [
        ...st.items.map(w => ({ w, m: 'card' })),
        ...shuffle(st.items).map(w => ({ w, m: 'choice' })),
        ...shuffle(st.items).map(w => ({ w, m: 'write' })),
      ];
      return {
        items,
        step: ({ w, m }, stage, done) => m === 'card' ? stepCard(w, stage, done, false)
          : m === 'choice' ? stepChoice(w, pool.length >= 4 ? pool : allWords(), stage, done, false)
          : stepWrite(w, stage, done),
        summary: x => wordSummary(x.w),
      };
    }
    case 'conj':
      return { items: st.items, step: marked('verb', x => x.inf, 7, 2, stepConjGrid), summary: x => `<span class="tl">${esc(x.inf)}</span> · ${esc(tenseOf(x.t).name)}` };
    case 'gram': {
      const items = st.items.map(({ g, i }) => { const s = L.grammar.find(x => x.id === g); return s && s.items[i] ? { g, i, it: s.items[i] } : null; }).filter(Boolean);
      return { items, step: marked('g', x => x.g + '#' + x.i, 10, 2, (x, stage, done) => stepGrammar(x.it, stage, done)), summary: x => grammarSummary(x.it) };
    }
    case 'build':
      return { items: st.items, step: marked('s', s => s[0], 14, 3, stepBuild(L.sentences)), summary: sentSummary };
    case 'tr':
      return { items: st.items, step: marked('s', s => s[0], 14, 3, stepTranslate(true)), summary: sentSummary };
    case 'listen':
      return { items: st.items, step: marked('s', s => s[0], 14, 3, stepListen), summary: sentSummary };
    case 'read':
      return { items: st.items, step: (title, stage, done) => stepRead(title, stage, ok => { const c = rot.get('text', title); rot.mark('text', title, c && c.n >= 2 ? 45 : 7); done(ok); }), summary: t => `<span class="tl">${esc(t)}</span>` };
    case 'dialog':
      return { items: st.items, step: marked('dlg', id => id, 10, 3, stepDialog), summary: id => `<span class="tl">${esc((L.dialogs.find(d => d.id === id) || {}).title || id)}</span>` };
  }
  return { items: [], step: () => {}, summary: () => '' };
}

function flowDone(p) {
  const r = p.steps.find(s => s.k === 'read');
  const ti = r ? L.texts.findIndex(x => x.title === r.items[0]) : -1;
  page('Dnes', '#/', `
    <section class="day-done">
      <h2 class="display tl">Hotovo</h2>
      <p class="muted">${esc(L.name)} je na dnešek za tebou. Zítra ráno tu bude nový plán.</p>
      <div class="actions">
        ${ti >= 0 ? `<a class="btn" href="#/${L.code}/cteni/${ti}">Přečíst si dnešní text znovu</a>` : ''}
        <a class="btn primary" href="#/">Zpět na Dnes</a>
      </div>
      <a class="back-link" href="#/${L.code}">Všechna cvičení</a>
    </section>`, 'flow');
}

/* ================= JAZYK ================= */
// Španělština míří ke konverzaci, ruština k systematickému základu – podle toho jde pořadí režimů
const MODE_ORDER = {
  es: ['preklad', 'dialogy', 'cteni', 'poslech', 'vety', 'slovicka', 'gramatika', 'casovani', 'moje'],
  ru: ['gramatika', 'casovani', 'slovicka', 'vety', 'cteni', 'dialogy', 'poslech', 'preklad', 'moje'],
};

function viewLang() {
  const due = dueWords().length;
  const last = store.get('last_' + L.code, null);
  const p = getPlan(L), cur = planBlock(p);
  const modes = MODE_ORDER[L.code].map(id => MODES.find(m => m.id === id)).filter(m => m.id !== 'dialogy' || L.dialogs.length);
  page(L.name, '#/', `
    <section class="lang-head">
      <h2 class="lang-native" lang="${L.code}">${L.native}</h2>
      <p class="lang-sub">${L.name} · úroveň ${levelName(curLevel())}</p>
    </section>
    <a class="plan-card" href="#/${L.code}/dnes">
      <span class="pc-kicker">Dnešní plán</span>
      <span class="pc-main">${cur >= BLOCKS.length ? 'Na dnešek hotovo' : `Blok ${cur + 1} · ${BLOCKS[cur].name}`}</span>
      <span class="pc-bar" aria-hidden="true">${BLOCKS.map((_, b) => `<i class="${b < cur ? 'done' : b === cur ? 'cur' : ''}"></i>`).join('')}</span>
      ${I.arrow}
    </a>
    ${due ? `<a class="row review-row" href="#/${L.code}/opakovani">
      <span class="row-main">${I.repeat} Opakování</span><span class="row-sub">${due} ${plural(due, 'slovo čeká', 'slova čekají', 'slov čeká')} na zopakování</span>${I.arrow}</a>` : ''}
    ${last && !last.hash.endsWith('/opakovani') ? `<a class="row continue" href="${esc(last.hash)}">
      <span class="row-main">Pokračovat</span><span class="row-sub">${esc(last.title)} · naposledy</span>${I.arrow}</a>` : ''}
    <h3 class="sub">Cvičení</h3>
    <nav class="modes" aria-label="Režimy">
      ${modes.map(m => `<a class="mode" data-m="${m.id}" href="#/${L.code}/${m.id}">
        <span class="mode-icon">${MI[m.id]}</span>
        <span class="mode-word tl" lang="${L.code}">${L.modeWords[m.id]}</span>
        <span class="mode-name">${m.name}</span>
        <span class="mode-desc">${m.desc}</span>
      </a>`).join('')}
    </nav>`);
}

/* ================= SLOVÍČKA ================= */
function viewTopics() {
  const base = `#/${L.code}/slovicka`;
  page('Slovíčka', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display">Slovíčka</h2><p class="muted">${baseWords().length} slov ve ${L.vocab.length} tématech</p></section>
    <div class="list"><a class="row" href="${base}/vse"><span class="row-main">Všechna témata</span><span class="row-sub">mix ze všech slovíček</span>${I.arrow}</a></div>
    ${byLevel(L.vocab, (t, i) => `<a class="row" href="${base}/${i}">
        <span class="row-main">${esc(t.name)}</span>
        <span class="row-sub tl">${esc(t.words.slice(0, 3).map(w => w[0]).join(' · '))}</span>${I.arrow}</a>`)}`);
}

function exerciseButtons(base, n) {
  return `<div class="ex-buttons">
    <a class="ex" href="${base}/karticky"><b>Kartičky</b><small>Otoč a ohodnoť se</small></a>
    ${n >= 4 ? `<a class="ex" href="${base}/vyber"><b>Výběr</b><small>Vyber správný překlad</small></a>` : ''}
    <a class="ex" href="${base}/psani"><b>Psaní</b><small>Napiš slovo sám</small></a>
  </div>`;
}

function wordList(words, del = false) {
  return `<ul class="words">${words.map((w, k) => `<li>
      <span class="w-t tl">${esc(w.t)}</span><span class="w-c">${esc(w.c)}</span>
      ${sayBtn(w.t, 'sm')}
      ${del ? `<button type="button" class="ibtn sm" data-del="${k}" aria-label="Smazat">${I.x}</button>` : ''}
    </li>`).join('')}</ul>`;
}

function viewTopic(id) {
  const words = topicWords(id);
  const base = `#/${L.code}/slovicka/${id}`;
  page(topicName(id), `#/${L.code}/slovicka`, `
    <section class="sec-head"><h2 class="display sm">${esc(topicName(id))}</h2><p class="muted">${words.length} ${plural(words.length, 'slovo', 'slova', 'slov')}</p></section>
    ${exerciseButtons(base, words.length)}
    ${wordList(words)}`);
}

function vocabSession(words, mode, title, back) {
  const items = pickWords(words, 15);
  const pool = words.length >= 4 ? words : allWords();
  const steps = { karticky: stepCard, vyber: (w, stage, done) => stepChoice(w, pool, stage, done), psani: stepWrite };
  session({ title, back, items, step: steps[mode] || stepCard, summary: wordSummary });
}

// grade = false: slovo se jen představuje, do opakování ho zařadí až pozdější psaní
function stepCard(w, stage, done, grade = true) {
  const render = () => {
    const tc = settings.cardDir === 'tc';
    const front = tc ? w.t : w.c, back = tc ? w.c : w.t;
    stage.innerHTML = `
      <div class="card" role="button" tabindex="0" aria-label="Otočit kartičku">
        <div class="card-inner">
          <div class="face front"><span class="big ${tc ? 'tl' : ''}">${esc(front)}</span><small class="hint"><span class="touch-only">klepni pro otočení</span><span class="kbd-only">mezerník otočí · 1 / 2 ohodnotí</span></small></div>
          <div class="face back"><span class="big ${tc ? '' : 'tl'}">${esc(back)}</span><span class="other ${tc ? 'tl' : ''}">${esc(front)}</span></div>
        </div>
      </div>
      <div class="card-tools">
        ${sayBtn(w.t)}
        <button type="button" class="chip" data-dir>${I.swap}<span>${tc ? `${L.code.toUpperCase()} → CZ` : `CZ → ${L.code.toUpperCase()}`}</span></button>
      </div>
      <div class="grade" hidden>
        <button type="button" class="btn bad" data-g="0">Ještě ne</button>
        <button type="button" class="btn ok" data-g="1">Umím</button>
      </div>`;
    const card = $('.card', stage), gradeEl = $('.grade', stage);
    if (matchMedia('(hover: hover)').matches) card.focus({ preventScroll: true });
    const flip = () => {
      if (card.classList.contains('flipped')) return;
      card.classList.add('flipped');
      card.setAttribute('aria-label', `${front} – ${back}`);
      gradeEl.hidden = false;
      if (!tc) autoSay(w.t);
    };
    const answer = ok => { if (grade) srs.grade(w.t, ok); done(ok, { again: !ok }); };
    card.onclick = flip;
    $$('[data-g]', stage).forEach(b => b.onclick = () => answer(b.dataset.g === '1'));
    $('[data-dir]', stage).onclick = () => { settings.cardDir = tc ? 'ct' : 'tc'; saveSettings(); render(); };
    onKey = e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
      else if (card.classList.contains('flipped') && (e.key === 'ArrowLeft' || e.key === '1')) answer(false);
      else if (card.classList.contains('flipped') && (e.key === 'ArrowRight' || e.key === '2')) answer(true);
    };
    if (tc) autoSay(w.t);
  };
  render();
}

// Výběr ze čtyř možností; střídá směr
function stepChoice(w, pool, stage, done, grade = true) {
  const rev = Math.random() < 0.5;
  const others = sample(pool.filter(x => x.t !== w.t && x.c !== w.c), 3);
  const opts = shuffle([w, ...others]);
  stage.innerHTML = `
    <div class="prompt">
      <span class="big ${rev ? '' : 'tl'}">${esc(rev ? w.c : w.t)}</span>
      ${rev ? '' : sayBtn(w.t)}
    </div>
    <div class="opts">${opts.map((o, k) => `<button type="button" class="opt ${rev ? 'tl' : ''}" data-k="${k}"><kbd>${k + 1}</kbd>${esc(rev ? o.t : o.c)}</button>`).join('')}</div>
    <div class="after" role="status"></div>`;
  if (!rev) autoSay(w.t);
  let answered = false;
  const choose = k => {
    if (answered) return;
    answered = true;
    const ok = opts[k] === w;
    $$('.opt', stage).forEach((b, j) => { b.disabled = true; if (opts[j] === w) b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
    if (grade) srs.grade(w.t, ok);
    if (rev) autoSay(w.t);
    if (ok) { setTimeout(() => done(true), 850); onKey = null; return; }
    $('.after', stage).innerHTML = `<button type="button" class="btn primary wide" data-next>Další</button>`;
    const go = () => done(false, { again: true });
    $('[data-next]', stage).onclick = go;
    onKey = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
  };
  $$('.opt', stage).forEach(b => b.onclick = () => choose(+b.dataset.k));
  onKey = e => { const k = +e.key - 1; if (k >= 0 && k < opts.length) choose(k); };
}

function stepWrite(w, stage, done) {
  stage.innerHTML = `
    <div class="prompt"><span class="big">${esc(w.c)}</span><small class="hint">napiš ${L.code === 'es' ? 'španělsky' : 'rusky'}</small></div>
    <form class="answer-form">${inputHTML(L.code)}<button class="btn primary wide" type="submit">Zkontrolovat</button></form>
    <div class="after" role="status"></div>`;
  answerForm($('form', stage), val => {
    const res = check(val, w.t);
    const ok = res.r !== 'bad';
    srs.grade(w.t, ok);
    tts.say(w.t);
    $('.after', stage).innerHTML = fb(res.r, `
      ${res.why ? `<p>${res.why}</p>` : ''}
      <p class="answer-line"><span class="tl">${esc(w.t)}</span>${sayBtn(w.t, 'sm')}</p>`);
    return () => done(ok, { again: !ok });
  });
}

/* ================= SKLÁDÁNÍ VĚT ================= */
const tokenize = s => s.replace(/[¿¡?!.,;:«»"“”„…—–]/g, ' ').split(/\s+/).filter(Boolean);

// Sentences s mají mezi dlaždicemi i pár slov navíc z jiných vět
function stepBuild(all) {
  return ([t, cz], stage, done) => {
    const tokens = tokenize(t);
    const own = new Set(tokens.map(norm));
    const extra = [...new Set(sample(all, 40).filter(s => s[0] !== t).flatMap(s => tokenize(s[0])).filter(x => !own.has(norm(x))))];
    const tiles = shuffle([...tokens, ...sample(extra, L.code === 'es' ? 2 : 1)].map((w, id) => ({ w, id })));
    let chosen = [], answered = false;
    const end = /[?!]$/.test(t.trim()) ? t.trim().slice(-1) : '.';

    // focus: co dostane fokus po překreslení, aby klávesnice nepřišla o místo
    const render = focus => {
      stage.innerHTML = `
        <div class="prompt build-prompt"><span class="big2">${esc(cz)}</span></div>
        <div class="build tl">${chosen.map(id => `<button type="button" class="tile" data-c="${id}">${esc(tiles.find(x => x.id === id).w)}</button>`).join('')}${chosen.length ? `<span class="build-end">${end}</span>` : '<span class="build-ph">Ťukej na slova v pořadí věty</span>'}</div>
        <div class="bank tl">${tiles.map(x => `<button type="button" class="tile ${chosen.includes(x.id) ? 'used' : ''}" data-b="${x.id}" ${chosen.includes(x.id) ? 'tabindex="-1"' : ''}>${esc(x.w)}</button>`).join('')}</div>
        <div class="actions">
          <button type="button" class="btn" data-clear ${chosen.length ? '' : 'disabled'}>Vymazat</button>
          <button type="button" class="btn primary" data-check ${chosen.length ? '' : 'disabled'}>Zkontrolovat</button>
        </div>
        <p class="kbd-only kbd-hint">Enter zkontroluje · Backspace vrátí poslední slovo</p>
        <div class="after" role="status"></div>`;
      const free = from => {
        const bank = $$('.bank .tile', stage);
        return [...bank.slice(from), ...bank.slice(0, from)].find(b => !b.classList.contains('used')) || $('[data-check]', stage);
      };
      $$('[data-b]', stage).forEach((b, pos) => b.onclick = () => {
        if (chosen.includes(+b.dataset.b)) return;
        chosen.push(+b.dataset.b);
        render(() => free(pos));
      });
      $$('[data-c]', stage).forEach(b => b.onclick = () => {
        const id = +b.dataset.c;
        chosen = chosen.filter(x => x !== id);
        render(() => $(`[data-b="${id}"]`, stage));
      });
      $('[data-clear]', stage).onclick = () => { chosen = []; render(() => free(0)); };
      $('[data-check]', stage).onclick = checkIt;
      if (focus && document.activeElement === document.body) { const el = focus(); if (el) el.focus({ preventScroll: true }); }
    };

    const checkIt = () => {
      if (answered || !chosen.length) return;
      answered = true;
      const said = chosen.map(id => tiles.find(x => x.id === id).w).join(' ');
      const ok = norm(said) === norm(t);
      $$('.tile, [data-clear], [data-check]', stage).forEach(b => b.disabled = true);
      $('.build', stage).classList.add(ok ? 'ok' : 'bad');
      tts.say(t);
      $('.after', stage).innerHTML = fb(ok ? 'ok' : 'bad', `
        ${ok ? '' : diffBlock(said, t, true)}
        ${ok ? `<p class="answer-line"><span class="tl">${esc(t)}</span>${sayBtn(t, 'sm')}</p>` : ''}
      `) + `<button type="button" class="btn primary wide" data-next>Další</button>`;
      const go = () => done(ok, { again: !ok });
      $('[data-next]', stage).onclick = go;
      onKey = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
    };

    render();
    onKey = e => {
      if (answered) return;
      if (e.key === 'Enter' && chosen.length) { e.preventDefault(); checkIt(); }
      else if (e.key === 'Backspace' && chosen.length) { e.preventDefault(); chosen.pop(); render(); }
    };
  };
}

function viewBuild() {
  const pool = upToLevel(L.sentences, curLevel());
  session({
    title: 'Skládání vět', back: `#/${L.code}`,
    items: sample(pool.filter(s => s[0].split(/\s+/).length <= 12), 10),
    summary: sentSummary,
    step: stepBuild(pool),
  });
}

/* ================= PŘEKLAD ================= */
function trSwitch(active) {
  const lng = L.code === 'es' ? 'španělštiny' : 'ruštiny';
  const opt = (id, label, href) => `<a class="seg-btn ${active === id ? 'on' : ''}" href="${href}" data-tr="${id}" ${active === id ? 'aria-current="page"' : ''}>${label}</a>`;
  return `<nav class="seg" aria-label="Směr překladu">
    ${opt('ct', `Do ${lng}`, `#/${L.code}/preklad`)}
    ${opt('tc', 'Do češtiny', `#/${L.code}/preklad`)}
    ${opt('text', 'Celý text', `#/${L.code}/preklad/text`)}
  </nav>`;
}

function bindTrSwitch() {
  $$('[data-tr]').forEach(a => a.addEventListener('click', e => {
    const id = a.dataset.tr;
    if (id === 'text') return;
    e.preventDefault();
    settings.trDir = id; saveSettings();
    if (location.hash === a.getAttribute('href')) route(); else location.hash = a.getAttribute('href');
  }));
}

// toT: z češtiny do cílového jazyka
function stepTranslate(toT) {
  return ([t, cz], stage, done) => {
    const src = toT ? cz : t, ref = toT ? t : cz;
    stage.innerHTML = `
      <div class="prompt tr-prompt"><span class="tr-dir">${toT ? `Česky → ${L.code === 'es' ? 'španělsky' : 'rusky'}` : 'Do češtiny'}</span><span class="big2 ${toT ? '' : 'tl'}">${esc(src)}</span>${toT ? '' : sayBtn(t)}</div>
      <form class="answer-form">${inputHTML(toT ? L.code : 'cz', { multi: true, placeholder: toT ? 'Tvůj překlad…' : 'Tvůj překlad do češtiny…' })}
        <button class="btn primary wide" type="submit">Zkontrolovat</button></form>
      <div class="after" role="status"></div>`;
    answerForm($('form', stage), val => {
      const res = check(val, ref);
      if (toT) tts.say(t);
      if (res.r !== 'bad') {
        $('.after', stage).innerHTML = fb(res.r, `${res.why ? `<p>${res.why}</p>` : ''}<p class="answer-line"><span class="${toT ? 'tl' : ''}">${esc(ref)}</span></p>`);
        return () => done(true);
      }
      // Překlad má víc správných podob – rozhodnutí nechávám na tobě
      $('.after', stage).innerHTML = `<div class="fb neutral"><strong>Porovnej</strong>${diffBlock(val, ref, toT)}
        <div class="actions"><button type="button" class="btn ok" data-self="1">Bylo to dobře</button><button type="button" class="btn bad" data-self="0">Bylo to špatně</button></div></div>`;
      $$('[data-self]', stage).forEach(b => b.onclick = () => done(b.dataset.self === '1', { again: b.dataset.self !== '1' }));
      $('button[type=submit]', stage).hidden = true;
      return null;
    });
  };
}

function viewTranslate() {
  session({
    title: 'Překlad', back: `#/${L.code}`,
    intro: trSwitch(settings.trDir),
    items: sample(upToLevel(L.sentences, curLevel()), 10),
    summary: sentSummary,
    step: stepTranslate(settings.trDir === 'ct'),
  });
  bindTrSwitch();
}

function viewTextList() {
  page('Překlad textu', `#/${L.code}`, `
    ${trSwitch('text')}
    <p class="muted lead">Vyber text, přelož ho celý a pak porovnej se vzorovým překladem.</p>
    ${byLevel(L.texts, (x, i) => `<a class="row" href="#/${L.code}/preklad/text/${i}">
      <span class="row-main tl">${esc(x.title)}</span>${I.arrow}</a>`)}`);
  bindTrSwitch();
}

function viewTextTranslate(i) {
  const x = L.texts[i];
  if (!x) return viewTextList();
  const dir = store.get('textDir', 'tc');
  const src = dir === 'ct' ? x.cz : x.t, ref = dir === 'ct' ? x.t : x.cz;
  const draftKey = `draft_${L.code}_${i}_${dir}`;
  page('Překlad textu', `#/${L.code}/preklad/text`, `
    <section class="sec-head"><h2 class="display sm tl">${esc(x.title)}</h2><p class="muted">Úroveň ${levelName(lvOf(x))}</p></section>
    <div class="seg small" role="group" aria-label="Směr překladu">
      <button type="button" class="seg-btn ${dir === 'tc' ? 'on' : ''}" data-dir="tc" aria-pressed="${dir === 'tc'}">${L.code.toUpperCase()} → CZ</button>
      <button type="button" class="seg-btn ${dir === 'ct' ? 'on' : ''}" data-dir="ct" aria-pressed="${dir === 'ct'}">CZ → ${L.code.toUpperCase()}</button>
    </div>
    <div class="source ${dir === 'tc' ? 'tl' : ''}">${src.split('\n').map(p => `<p>${esc(p)}</p>`).join('')}</div>
    <form class="answer-form text-form">
      ${inputHTML(dir === 'ct' ? L.code : 'cz', { multi: true, placeholder: 'Piš svůj překlad…' })}
      <button class="btn primary wide" type="submit">Porovnat se vzorem</button>
      <p class="muted small">Rozepsaný překlad se průběžně ukládá.</p>
    </form>
    <div class="compare" hidden>
      <div><small>Tvůj překlad</small><div class="mine"></div></div>
      <div><small>Vzorový překlad</small><div class="${dir === 'ct' ? 'tl' : ''}">${ref.split('\n').map(p => `<p>${esc(p)}</p>`).join('')}</div></div>
    </div>`);
  const ta = $('textarea');
  ta.rows = 9;
  ta.value = store.get(draftKey, '');
  ta.addEventListener('input', () => store.set(draftKey, ta.value));
  $$('[data-dir]').forEach(b => b.onclick = () => { store.set('textDir', b.dataset.dir); route(); });
  $('form').addEventListener('submit', e => {
    e.preventDefault();
    const box = $('.compare');
    $('.mine', box).innerHTML = ta.value.trim() ? ta.value.trim().split('\n').map(p => `<p>${esc(p)}</p>`).join('') : '<p class="muted">—</p>';
    box.hidden = false;
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ================= POSLECH ================= */
function stepListen([t, cz], stage, done) {
  stage.innerHTML = `
    <div class="listen">
      <button type="button" class="play" data-play aria-label="Přehrát">${I.sound}<span class="ripple" aria-hidden="true"></span></button>
      <button type="button" class="chip" data-slow>${I.slow}<span>Pomaleji</span></button>
    </div>
    <form class="answer-form">${inputHTML(L.code, { multi: true, placeholder: 'Napiš, co slyšíš…' })}
      <button class="btn primary wide" type="submit">Zkontrolovat</button></form>
    <div class="after" role="status"></div>`;
  const play = $('[data-play]', stage);
  const say = slow => { play.classList.remove('on'); void play.offsetWidth; play.classList.add('on'); tts.say(t, { slow }); };
  play.onclick = () => say(false);
  $('[data-slow]', stage).onclick = () => say(true);
  setTimeout(() => say(false), 250);
  answerForm($('form', stage), val => {
    const res = check(val, t);
    const ok = res.r !== 'bad';
    $('.after', stage).innerHTML = fb(res.r, `
      ${res.why ? `<p>${res.why}</p>` : ''}
      ${ok ? `<p class="answer-line"><span class="tl">${esc(t)}</span></p>` : diffBlock(val, t, true)}
      <p class="cz-line">${esc(cz)}</p>`);
    return () => done(ok, { again: !ok });
  });
}

function viewListen() {
  if (!tts.ok) {
    page('Poslech', `#/${L.code}`, `<p class="empty">Tento prohlížeč neumí předčítat text. Zkus Chrome, Edge nebo Safari.</p>`);
    return;
  }
  const noVoice = !tts.voiceFor(L.code);
  session({
    title: 'Poslech', back: `#/${L.code}`,
    intro: noVoice ? `<p class="note">V zařízení jsem nenašel hlas pro ${L.code === 'es' ? 'španělštinu' : 'ruštinu'}. Přidej ho v nastavení systému (Řeč / Text na řeč), jinak bude výslovnost špatná.</p>` : '',
    items: sample(upToLevel(L.sentences, curLevel()).filter(s => s[0].split(/\s+/).length <= 14), 10),
    summary: sentSummary,
    step: stepListen,
  });
}

/* ================= ČTENÍ ================= */
function viewReadList() {
  page('Čtení', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display">Čtení</h2><p class="muted">${L.texts.length} ${plural(L.texts.length, 'text', 'texty', 'textů')}</p></section>
    ${byLevel(L.texts, (x, i) => { const r = rot.get('text', x.title); return `<a class="row" href="#/${L.code}/cteni/${i}">
      <span class="row-main tl">${esc(x.title)}</span><span class="row-sub">${r ? `přečteno ${r.n}× · ` : ''}${esc(x.t.slice(0, 60).replace(/\n/g, ' '))}…</span>${I.arrow}</a>`; })}`);
}

function glossify(text, gloss) {
  const keys = Object.keys(gloss).sort((a, b) => b.length - a.length);
  const hits = [];
  let s = text;
  for (const k of keys) {
    const re = new RegExp(`(?<![\\p{L}\\p{M}])${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{M}])`, 'giu');
    s = s.replace(re, m => { hits.push([m, k]); return `\u0001${hits.length - 1}\u0002`; });
  }
  return s.split('\n').map(p => `<p>${esc(p).replace(/\u0001(\d+)\u0002/g, (_, n) =>
    `<span class="g" role="button" tabindex="0" data-g="${esc(hits[n][1])}">${esc(hits[n][0])}</span>`)}</p>`).join('');
}

function readingHTML(x) {
  return `<article class="reading">
      <header class="read-head">
        <p class="read-kicker">${esc(L.name)} · úroveň ${levelName(lvOf(x))}</p>
        <h2 class="read-title tl" lang="${L.code}">${esc(x.title)}</h2>
        <div class="actions left">
          ${tts.ok ? `<button type="button" class="chip" data-read>${I.sound}<span>Přečíst nahlas</span></button>` : ''}
          <button type="button" class="chip" data-show>Zobrazit překlad</button>
        </div>
      </header>
      <div class="text tl" lang="${L.code}">${glossify(x.t, x.gloss)}</div>
      <p class="read-help">Podtržená slova ťukni pro význam.</p>
      <div class="translation" hidden><small>Překlad</small>${x.cz.split('\n').map(p => `<p>${esc(p)}</p>`).join('')}</div>
      <details class="glossary"><summary>Slovníček textu</summary>
        <dl>${Object.entries(x.gloss).map(([k, v]) => `<div><dt class="tl">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></details>
      <section class="questions">
        <h3>Porozuměl jsi?</h3>
        ${x.q.map(([q, o], qi) => `<div class="q"><p>${esc(q)}</p><div class="opts small">
          ${o.map((t, k) => `<button type="button" class="opt" data-q="${qi}" data-o="${k}">${esc(t)}</button>`).join('')}</div>
          <p class="q-res" role="status"></p></div>`).join('')}
      </section>
    </article>
    <div class="gloss-bar" hidden></div>`;
}

function bindReading(x, root) {
  const bar = $('.gloss-bar', root);
  $$('.g', root).forEach(b => b.onclick = () => {
    $$('.g.on', root).forEach(el => el.classList.remove('on'));
    b.classList.add('on');
    bar.innerHTML = `<span class="gl-w tl">${esc(b.textContent)}</span><span class="gl-m">${esc(x.gloss[b.dataset.g])}</span>
      ${sayBtn(b.textContent, 'sm')}<button type="button" class="ibtn sm" data-close aria-label="Zavřít">${I.x}</button>`;
    bar.hidden = false;
    $('[data-close]', bar).onclick = () => { bar.hidden = true; b.classList.remove('on'); };
    autoSay(b.textContent);
  });
  $$('.g', root).forEach(b => b.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); b.click(); } });
  const rd = $('[data-read]', root);
  if (rd) rd.onclick = () => tts.say(x.t.replace(/—/g, ''));
  $('[data-show]', root).onclick = e => {
    const tr = $('.translation', root);
    tr.hidden = !tr.hidden;
    e.currentTarget.lastChild.textContent = tr.hidden ? 'Zobrazit překlad' : 'Skrýt překlad';
  };
  $$('[data-q]', root).forEach(b => b.onclick = () => {
    const qi = +b.dataset.q, right = x.q[qi][2], ok = +b.dataset.o === right;
    $$(`[data-q="${qi}"]`, root).forEach(o => { o.disabled = true; if (+o.dataset.o === right) o.classList.add('ok'); else if (o === b) o.classList.add('bad'); });
    const res = b.closest('.q').querySelector('.q-res');
    res.className = 'q-res ' + (ok ? 'ok' : 'bad');
    res.textContent = ok ? 'Správně.' : `Ne – správně je: ${x.q[qi][1][right]}.`;
  });
}

function viewRead(i) {
  const x = L.texts[i];
  if (!x) return viewReadList();
  page('Čtení', `#/${L.code}/cteni`, readingHTML(x) + `<a class="btn wide" href="#/${L.code}/preklad/text/${i}">Přeložit tento text</a>`);
  bindReading(x, app);
}

function stepRead(title, stage, done) {
  const x = L.texts.find(t => t.title === title);
  if (!x) return done(true);
  stage.innerHTML = readingHTML(x) + `<button type="button" class="btn primary wide" data-next>Přečteno, pokračovat</button>`;
  bindReading(x, stage);
  $('[data-next]', stage).onclick = () => done(true);
}

/* ================= DIALOGY ================= */
// Řádek partnera: [věta, překlad]; můj tah: { ok: [věta, překlad], no: [[věta, proč ne], …] }
function stepDialog(id, stage, done) {
  const d = L.dialogs.find(x => x.id === id);
  if (!d) return done(true);
  const write = settings.dlgWrite;
  let k = 0, good = 0, turns = 0;
  stage.innerHTML = `
    <header class="dlg-head">
      <h3 class="dlg-title tl" lang="${L.code}">${esc(d.title)}</h3>
      <p class="dlg-scene">${esc(d.scene)}</p>
      <div class="seg small" role="group" aria-label="Způsob odpovědi">
        <button type="button" class="seg-btn ${write ? '' : 'on'}" data-mode="0" aria-pressed="${!write}">Vybírat repliky</button>
        <button type="button" class="seg-btn ${write ? 'on' : ''}" data-mode="1" aria-pressed="${write}">Psát sám</button>
      </div>
    </header>
    <div class="chat" aria-live="polite"></div>
    <div class="reply"></div>`;
  const chat = $('.chat', stage), reply = $('.reply', stage);
  $$('[data-mode]', stage).forEach(b => b.onclick = () => {
    if (+b.dataset.mode === +write) return;
    settings.dlgWrite = b.dataset.mode === '1'; saveSettings();
    stepDialog(id, stage, done);
  });

  const bubble = (side, t, cz) => {
    chat.insertAdjacentHTML('beforeend', `<div class="bub ${side}" role="button" tabindex="0">
      ${side === 'them' ? `<small class="who">${esc(d.who)}</small>` : ''}
      <p class="tl" lang="${L.code}">${esc(t)}</p><p class="bub-cz" hidden>${esc(cz)}</p></div>`);
    const el = chat.lastElementChild;
    el.onclick = () => { const c = $('.bub-cz', el); c.hidden = !c.hidden; };
    el.onkeydown = e => { if (e.key === 'Enter') el.click(); };
    requestAnimationFrame(() => el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }));
  };

  const finish = () => {
    onKey = null;
    $$('[data-mode]', stage).forEach(b => b.disabled = true);
    reply.innerHTML = `<div class="fb neutral"><strong>Konec rozhovoru</strong>
      <p>${good === turns ? 'Všechny tvoje repliky seděly.' : `Sedělo ${good} z ${turns} replik.`} Ťuknutím na repliku uvidíš překlad.</p></div>
      <button type="button" class="btn primary wide" data-next>Pokračovat</button>`;
    const go = () => done(good === turns);
    $('[data-next]', reply).onclick = go;
    $('[data-next]', reply).focus({ preventScroll: true });
    onKey = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
  };

  const answered = (line, ok) => {
    if (ok) good++;
    reply.innerHTML = '';
    bubble('me', line.ok[0], line.ok[1]);
    k++;
    setTimeout(turn, 450);
  };

  const choose = line => {
    const opts = shuffle([{ t: line.ok[0], ok: true }, ...line.no.map(([t, why]) => ({ t, why }))]);
    reply.innerHTML = `<p class="reply-label">Co odpovíš?</p>
      <div class="opts">${opts.map((o, j) => `<button type="button" class="opt tl" data-j="${j}"><kbd>${j + 1}</kbd>${esc(o.t)}</button>`).join('')}</div>
      <div class="after" role="status"></div>`;
    let done1 = false;
    const pick = j => {
      if (done1) return;
      done1 = true;
      const o = opts[j];
      $$('.opt', reply).forEach((b, x) => { b.disabled = true; if (opts[x].ok) b.classList.add('ok'); else if (x === j) b.classList.add('bad'); });
      if (o.ok) { onKey = null; setTimeout(() => answered(line, true), 600); return; }
      $('.after', reply).innerHTML = `<div class="fb bad"><strong>${I.x}Tohle by neznělo dobře</strong><p>${esc(o.why)}</p></div>
        <button type="button" class="btn primary wide" data-on>Pokračovat</button>`;
      const on = () => answered(line, false);
      $('[data-on]', reply).onclick = on;
      onKey = e => { if (e.key === 'Enter') { e.preventDefault(); on(); } };
    };
    $$('.opt', reply).forEach(b => b.onclick = () => pick(+b.dataset.j));
    onKey = e => { const j = +e.key - 1; if (j >= 0 && j < opts.length) pick(j); };
  };

  const writeIt = line => {
    reply.innerHTML = `<p class="reply-label">Řekni: <b>${esc(line.ok[1])}</b></p>
      <form class="answer-form">${inputHTML(L.code, { multi: true, placeholder: 'Tvoje replika…' })}
        <button class="btn primary wide" type="submit">Odpovědět</button></form>
      <div class="after" role="status"></div>`;
    answerForm($('form', reply), val => {
      const res = check(val, line.ok[0]);
      if (res.r !== 'bad') {
        $('.after', reply).innerHTML = fb(res.r, res.why ? `<p>${res.why}</p>` : '');
        return () => answered(line, true);
      }
      $('.after', reply).innerHTML = `<div class="fb neutral"><strong>Porovnej</strong>${diffBlock(val, line.ok[0], true)}
        <div class="actions"><button type="button" class="btn ok" data-self="1">Bylo to dobře</button><button type="button" class="btn bad" data-self="0">Bylo to špatně</button></div></div>`;
      $$('[data-self]', reply).forEach(b => b.onclick = () => answered(line, b.dataset.self === '1'));
      $('button[type=submit]', reply).hidden = true;
      return null;
    });
  };

  const turn = () => {
    // Po přepnutí způsobu odpovědi běží rozhovor znovu a starý se tiše ukončí
    if (!chat.isConnected) return;
    onKey = null;
    if (k >= d.lines.length) return finish();
    const line = d.lines[k];
    if (Array.isArray(line)) {
      bubble('them', line[0], line[1]);
      k++;
      // Další replika partnera počká, až dozní předchozí
      const nextIsMe = k < d.lines.length && !Array.isArray(d.lines[k]);
      autoSay(line[0]);
      setTimeout(turn, nextIsMe ? 350 : 1400);
      return;
    }
    turns++;
    (write ? writeIt : choose)(line);
  };
  turn();
}

function viewDialogList() {
  page('Dialogy', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display">Dialogy</h2><p class="muted">Rozhovory, ve kterých vybíráš nebo píšeš svoje repliky.</p></section>
    ${byLevel(L.dialogs, (x, i) => { const r = rot.get('dlg', x.id); return `<a class="row" href="#/${L.code}/dialogy/${i}">
      <span class="row-main tl">${esc(x.title)}</span><span class="row-sub">${r ? `prošlo ${r.n}× · ` : ''}${esc(x.scene)}</span>${I.arrow}</a>`; })}`);
}

function viewDialog(i) {
  const d = L.dialogs[i];
  if (!d) return viewDialogList();
  session({
    title: 'Dialog', back: `#/${L.code}/dialogy`,
    items: [d.id],
    summary: id => `<span class="tl">${esc(d.title)}</span>`,
    step: (id, stage, done) => stepDialog(id, stage, ok => { rot.mark('dlg', id, ok ? 10 : 3); done(ok); }),
    resume: false,
  });
}

/* ================= GRAMATIKA ================= */
function viewGrammarList() {
  page('Gramatika', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display">Gramatika</h2></section>
    ${byLevel(L.grammar, g => `<a class="row" href="#/${L.code}/gramatika/${g.id}">
      <span class="row-main ${isCyr(g.name) ? 'tl' : ''}">${esc(g.name)}</span><span class="row-sub">${g.items.length} vět</span>${I.arrow}</a>`)}`);
}

const grammarSummary = ([s, a, , cz]) => `<span class="tl">${s.includes('___') ? esc(s).replace('___', `<b>${esc(variants(a)[0])}</b>`) : `${esc(s)} – <b>${esc(a)}</b>`}</span><br><small>${esc(cz)}</small>`;

// Doplňování: s mezerou se píše přímo do věty, s možnostmi se vybírá
function stepGrammar([s, a, hint, cz, opts], stage, done) {
  const blank = s.includes('___');
  const full = blank ? s.replace('___', variants(a)[0]) : s;
  const [before, after] = blank ? s.split('___') : [s, ''];

  const reveal = (res, val) => {
    const ok = res.r !== 'bad';
    const slot = $('.blank, .gap', stage);
    if (slot) slot.outerHTML = `<b class="filled ${ok ? 'ok' : 'bad'}">${esc(variants(a)[0])}</b>`;
    tts.say(full);
    $('.after', stage).innerHTML = fb(res.r, `
      ${res.why ? `<p>${res.why}</p>` : ''}
      ${!ok && val ? `<p>Tvoje odpověď: <del>${esc(val)}</del></p>` : ''}
      <p class="answer-line"><span class="tl">${esc(full)}</span>${sayBtn(full, 'sm')}</p>
      <p class="cz-line">${esc(cz)}</p>`);
    return ok;
  };

  if (opts) {
    stage.innerHTML = `
      <div class="prompt gram-prompt">
        ${blank ? `<span class="gram-line tl">${esc(before)}<span class="blank">?</span>${esc(after)}</span>` : `<span class="big tl">${esc(s)}</span>`}
        <small class="hint">${esc(hint)}</small>
      </div>
      <div class="opts row-opts">${opts.map((o, k) => `<button type="button" class="opt ${isCyr(o) ? 'tl' : ''}" data-k="${k}"><kbd>${k + 1}</kbd>${esc(o)}</button>`).join('')}</div>
      <div class="after" role="status"></div>`;
    let answered = false;
    const choose = k => {
      if (answered) return;
      answered = true;
      const res = check(opts[k], a);
      $$('.opt', stage).forEach((b, j) => { b.disabled = true; if (check(opts[j], a).r === 'ok') b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
      const ok = reveal(res, null);
      $('.after', stage).insertAdjacentHTML('beforeend', `<button type="button" class="btn primary wide" data-next>Další</button>`);
      const go = () => done(ok, { again: !ok });
      $('[data-next]', stage).onclick = go;
      onKey = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
    };
    $$('.opt', stage).forEach(b => b.onclick = () => choose(+b.dataset.k));
    onKey = e => { const k = +e.key - 1; if (k >= 0 && k < opts.length) choose(k); };
    return;
  }

  const width = Math.max(4, ...variants(a).map(v => plain(v).length)) + 2;
  const { field, tools } = inputParts(L.code, { cls: 'gap', style: `width:${width}ch` });
  stage.innerHTML = `
    <form class="answer-form gram-form">
      <div class="prompt gram-prompt">
        <div class="answer-box" data-lang="${L.code}">
          ${blank ? `<p class="gram-line tl">${esc(before)}${field}${esc(after)}</p>` : `<span class="big tl">${esc(s)}</span>${field}`}
          <small class="hint">${esc(hint)}</small>
          ${tools}
        </div>
      </div>
      <button class="btn primary wide" type="submit">Zkontrolovat</button>
    </form>
    <div class="after" role="status"></div>`;
  answerForm($('form', stage), val => {
    const ok = reveal(check(val, a), val);
    return () => done(ok, { again: !ok });
  });
}

function viewGrammar(id) {
  const g = L.grammar.find(x => x.id === id);
  if (!g) return viewGrammarList();
  // Pravidlo je rozbalené jen napoprvé, pak by na mobilu zbytečně odsouvalo cvičení
  const seen = store.get('ruleSeen', {});
  const open = !seen[L.code + '|' + id];
  store.set('ruleSeen', { ...seen, [L.code + '|' + id]: 1 });
  session({
    title: g.name, back: `#/${L.code}/gramatika`,
    intro: `<details class="rule" ${open ? 'open' : ''}><summary>Pravidlo</summary><div>${g.rule}</div></details>`,
    items: sample(g.items, 10),
    summary: grammarSummary,
    step: stepGrammar,
  });
}

/* ================= ČASOVÁNÍ ================= */
const tensesOn = () => (settings.tenses[L.code] || L.conj.defaultTenses).filter(t => L.conj.tenses.some(x => x.id === t));
const tenseOf = id => L.conj.tenses.find(x => x.id === id);
const personsFor = t => (tenseOf(t) || {}).persons || L.conj.persons;
// vosotros se skrývá jen v šestitvarých časech, a to když není zapnuté
const rowVisible = (t, i, forms) => forms[i] !== '—' && (forms.length !== L.conj.persons.length || !L.conj.skip.includes(i) || settings.vosotros);

function viewConj() {
  const on = tensesOn();
  page('Časování', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display sm">Časování</h2><p class="muted">Vyber časy, které chceš procvičovat.</p></section>
    <div class="chips" role="group" aria-label="Časy k procvičení">${L.conj.tenses.map(t => `<button type="button" class="chip tense ${on.includes(t.id) ? 'on' : ''}" data-t="${t.id}" aria-pressed="${on.includes(t.id)}">
      <span>${t.name}</span><small class="tl">${t.sub}</small></button>`).join('')}</div>
    <a class="btn primary wide" href="#/${L.code}/casovani/cviceni">Procvičovat</a>
    <h3 class="sub">Tabulky sloves</h3>
    ${L.levels.map(lv => { const vs = atLevel(L.conj.verbs, lv.id); return vs.length ? `<h4 class="lv-head"><span class="lv-name">${lv.name}</span>${lv.id === curLevel() ? '<span class="lv-cur">tvoje úroveň</span>' : ''}</h4>
      <div class="verbs">${vs.map(v => `<a class="verb" href="#/${L.code}/casovani/${encodeURIComponent(v.inf)}">
      <span class="tl">${esc(v.inf)}</span><small>${esc(v.cz)}</small></a>`).join('')}</div>` : ''; }).join('')}`);
  $$('[data-t]').forEach(b => b.onclick = () => {
    let cur = tensesOn();
    cur = cur.includes(b.dataset.t) ? cur.filter(x => x !== b.dataset.t) : [...cur, b.dataset.t];
    if (!cur.length) return;
    settings.tenses[L.code] = cur; saveSettings();
    b.setAttribute('aria-pressed', b.classList.toggle('on'));
  });
}

function conjTable(v, t, hi = -1) {
  const forms = L.conj.conjugate(v, t), persons = personsFor(t);
  return `<table class="conj"><tbody>${forms.map((f, i) => rowVisible(t, i, forms) ? `<tr class="${i === hi ? 'hi' : ''}">
    <th>${esc(persons[i])}</th><td class="tl">${esc(f)}</td><td>${sayBtn(f, 'sm')}</td></tr>` : '').join('')}</tbody></table>`;
}

function viewVerb(inf) {
  const v = L.conj.verbs.find(x => x.inf === inf);
  if (!v) return viewConj();
  page(plain(v.inf), `#/${L.code}/casovani`, `
    <section class="sec-head"><h2 class="display sm tl">${esc(v.inf)} ${sayBtn(v.inf, 'sm')}</h2><p class="muted">${esc(v.cz)}</p></section>
    <div class="tables">${L.conj.tenses.filter(t => tenseOk(v, t.id)).map(t => `
      <section class="t-block"><h3>${t.name} <small class="tl">${t.sub}</small></h3>${conjTable(v, t.id)}</section>`).join('')}</div>`);
}

// Jeden tvar: osoba + infinitiv → napiš tvar
function stepConj(x, stage, done) {
  const T = tenseOf(x.t);
  stage.innerHTML = `
    <div class="prompt conj-prompt">
      <span class="tag">${T.name} · <span class="tl">${T.sub}</span></span>
      <span class="big tl">${esc(x.v.inf)}</span>
      <small class="hint">${esc(x.v.cz)}</small>
      <span class="person tl">${esc(personsFor(x.t)[x.p])} …</span>
    </div>
    <form class="answer-form">${inputHTML(L.code)}<button class="btn primary wide" type="submit">Zkontrolovat</button></form>
    <div class="after" role="status"></div>`;
  answerForm($('form', stage), val => {
    const res = check(val, x.form);
    const ok = res.r !== 'bad';
    tts.say(x.form);
    $('.after', stage).innerHTML = fb(res.r, `${res.why ? `<p>${res.why}</p>` : ''}
      ${ok ? '' : `<p>Správně: <b class="tl">${esc(x.form)}</b></p>`}${conjTable(x.v, x.t, x.p)}`);
    return () => done(ok, { again: !ok });
  });
}

// Celá tabulka jednoho času: vyplňuje se řádek po řádku, kontroluje se najednou
function stepConjGrid({ inf, t }, stage, done) {
  const v = L.conj.verbs.find(x => x.inf === inf), T = tenseOf(t);
  if (!v || !T || !tenseOk(v, t)) return done(true);
  const forms = L.conj.conjugate(v, t), persons = personsFor(t);
  const rows = forms.map((_, i) => i).filter(i => rowVisible(t, i, forms));
  const { tools } = inputParts(L.code);
  stage.innerHTML = `
    <div class="cg-head">
      <span class="tag">${T.name} · <span class="tl">${T.sub}</span></span>
      <span class="cg-inf tl" lang="${L.code}">${esc(v.inf)}</span>
      <small class="hint">${esc(v.cz)}</small>
    </div>
    <form class="cg-form" autocomplete="off">
      <div class="answer-box" data-lang="${L.code}">
        <div class="cgrid">${rows.map(i => `<label class="crow" data-i="${i}">
          <span class="cp tl">${esc(persons[i])}</span>
          <span class="cslot">${inputParts(L.code, { name: 'f' + i, cls: 'cin' }).field}</span>
        </label>`).join('')}</div>
        ${tools}
      </div>
      <button class="btn primary wide" type="submit">Zkontrolovat</button>
    </form>
    <div class="after" role="status"></div>`;
  const form = $('form', stage), inputs = $$('.cin', stage);
  inputs.forEach((el, n) => el.addEventListener('keydown', e => {
    if (e.key === 'Enter' && n < inputs.length - 1) { e.preventDefault(); inputs[n + 1].focus(); }
  }));
  if (matchMedia('(hover: hover)').matches) inputs[0].focus();
  let answered = false;
  const go = () => done(okAll, { again: false });
  let okAll = false;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (answered) return go();
    const empty = inputs.find(el => !el.value.trim());
    if (empty && inputs.every(el => !el.value.trim())) { empty.focus(); return; }
    answered = true;
    let bad = 0;
    rows.forEach((i, n) => {
      const el = inputs[n], res = check(el.value, forms[i]), row = el.closest('.crow');
      el.readOnly = true;
      row.classList.add(res.r);
      if (res.r === 'bad') bad++;
      if (res.r !== 'ok') row.insertAdjacentHTML('beforeend', `<span class="cfix tl">${esc(forms[i])}</span>`);
    });
    okAll = bad === 0;
    $$('.chars, .vkbd, .translit-help', form).forEach(el => el.hidden = true);
    tts.say(forms.filter((f, i) => rows.includes(i)).join(', '));
    $('.after', stage).innerHTML = fb(okAll ? 'ok' : 'bad', `<p>${okAll ? 'Celá tabulka sedí.' : `${bad} ${plural(bad, 'tvar chce', 'tvary chtějí', 'tvarů chce')} opravit – správný tvar je vedle.`}</p>`);
    const btn = $('button[type=submit]', form);
    btn.textContent = 'Další';
    form.insertBefore($('.after', stage), btn);
    btn.focus({ preventScroll: true });
    onKey = e2 => { if (e2.key === 'Enter') { e2.preventDefault(); go(); } };
  });
}

function viewConjDrill() {
  const C = L.conj, tens = tensesOn(), items = [];
  const verbs = upToLevel(C.verbs, curLevel());
  for (let guard = 0; items.length < 12 && guard < 600; guard++) {
    const v = rnd(verbs);
    const okT = tens.filter(t => tenseOk(v, t));
    if (!okT.length) continue;
    const t = rnd(okT), forms = C.conjugate(v, t);
    const idx = forms.map((_, i) => i).filter(i => rowVisible(t, i, forms));
    const p = rnd(idx);
    if (items.some(x => x.v === v && x.t === t && x.p === p)) continue;
    items.push({ v, t, p, form: forms[p] });
  }
  session({
    title: 'Časování', back: `#/${L.code}/casovani`,
    items,
    summary: x => `<span class="tl">${esc(personsFor(x.t)[x.p])} <b>${esc(x.form)}</b></span><br><small>${esc(x.v.inf)} · ${tenseOf(x.t).name}</small>`,
    step: stepConj,
  });
}

/* ================= MOJE SLOVÍČKA ================= */
let removed = null;   // naposledy smazané slovo, aby šlo smazání vrátit

function viewMine() {
  const words = mineWords();
  const base = `#/${L.code}/moje`;
  if (removed && removed.code !== L.code) removed = null;
  page('Moje slovíčka', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display sm">Moje slovíčka</h2><p class="muted">Slova, která potkáš na cestě nebo v hovoru. Nová se dostanou i do denního plánu.</p></section>
    <form class="add-form">
      <label><span>${L.native}</span>${inputHTML(L.code, { name: 't', placeholder: L.code === 'es' ? 'la mochila' : 'рюкза́к' })}</label>
      <label><span>Česky</span>${inputHTML('cz', { name: 'c', placeholder: 'batoh' })}</label>
      <button class="btn primary" type="submit">Přidat</button>
    </form>
    ${words.length ? exerciseButtons(base, words.length) : ''}
    ${removed ? `<p class="undo" role="status">Smazáno: <span class="tl">${esc(removed.w.t)}</span> <button type="button" class="link" data-undo>Vrátit</button></p>` : ''}
    ${words.length ? wordList(words, true) : `<p class="empty">Zatím tu nic není. Přidej první slovo, které potkáš.</p>`}`);
  const form = $('.add-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = form.t.value.trim(), c = form.c.value.trim();
    if (!t || !c) { (t ? form.c : form.t).focus(); return; }
    const list = mine();
    if (!list.some(m => norm(m.t) === norm(t))) list.unshift({ t, c });
    store.set('mine_' + L.code, list);
    removed = null;
    viewMine();
    $('.add-form').t.focus();
  });
  $$('[data-del]').forEach(b => b.onclick = () => {
    const list = mine();
    const k = +b.dataset.del;
    removed = { code: L.code, k, w: list[k] };
    list.splice(k, 1);
    store.set('mine_' + L.code, list);
    viewMine();
  });
  const undo = $('[data-undo]');
  if (undo) undo.onclick = () => {
    const list = mine();
    list.splice(Math.min(removed.k, list.length), 0, removed.w);
    store.set('mine_' + L.code, list);
    removed = null;
    viewMine();
  };
}

/* ================= SYNCHRONIZACE (GitHub Gist) ================= */
// Stav se ukládá do soukromého gistu. Každý klíč má čas poslední změny; opakování a obměna
// se slučují po jednotlivých slovech, plán podle toho, kde je víc hotovo, zbytek vyhrává novější.
const SYNC_FILE = 'jazyky-sync.json';
const sync = {
  cfg: store.get('sync', null),   // { token, id, at }
  dirty: false, busy: false, timer: 0, error: '',
  on() { return !!(this.cfg && this.cfg.token); },

  async api(path, opts = {}) {
    const r = await fetch('https://api.github.com' + path, {
      ...opts,
      headers: { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + this.cfg.token, ...(opts.body ? { 'Content-Type': 'application/json' } : {}) },
    });
    if (r.status === 401) throw new Error('GitHub token nepřijal – zkontroluj ho.');
    if (r.status === 403 || r.status === 404) throw new Error('Token nemá oprávnění ke gistům.');
    if (!r.ok) throw new Error(`GitHub odpověděl chybou ${r.status}.`);
    return r.json();
  },

  snapshot() {
    const meta = store.get('meta', {}), keys = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k.startsWith('jz_') || LOCAL_KEYS.has(k.slice(3))) continue;
      keys[k.slice(3)] = { v: localStorage.getItem(k), t: meta[k.slice(3)] || 0 };
    }
    return { v: 1, keys };
  },

  merge(remote) {
    const meta = store.get('meta', {});
    let changed = false;
    const entries = (a, b) => { const out = { ...a }; for (const k in b) if (!out[k] || (b[k].u || 0) > (out[k].u || 0)) out[k] = b[k]; return out; };
    const progress = p => p.at * 10 + p.intro + 1;
    for (const [k, r] of Object.entries(remote.keys || {})) {
      if (LOCAL_KEYS.has(k)) continue;
      const raw = localStorage.getItem('jz_' + k);
      let val = null;
      try {
        if (raw == null) val = r.v;
        else if (k === 'srs' || k === 'rot') val = JSON.stringify(entries(JSON.parse(raw), JSON.parse(r.v)));
        else if (k.startsWith('plan_')) {
          const a = JSON.parse(raw), b = JSON.parse(r.v);
          // Stejný den: vyhrává plán, kde je víc hotovo; nezačaté plány se sjednotí na jeden
          val = a.date !== b.date ? (a.date > b.date ? raw : r.v)
            : progress(a) !== progress(b) ? (progress(a) > progress(b) ? raw : r.v) : (raw < r.v ? raw : r.v);
        } else if (r.t > (meta[k] || 0)) val = r.v;
      } catch { continue; }
      if (val != null && val !== raw) { localStorage.setItem('jz_' + k, val); changed = true; }
      meta[k] = Math.max(meta[k] || 0, r.t || 0);
    }
    localStorage.setItem('jz_meta', JSON.stringify(meta));
    return changed;
  },

  async locate() {
    const list = await this.api('/gists?per_page=100');
    const found = list.find(g => g.files && g.files[SYNC_FILE]);
    if (found) return found.id;
    const made = await this.api('/gists', { method: 'POST', body: JSON.stringify({ description: 'Jazyky – synchronizace pokroku', public: false, files: { [SYNC_FILE]: { content: JSON.stringify(this.snapshot()) } } }) });
    return made.id;
  },

  async run() {
    if (!this.on() || this.busy || !navigator.onLine) return;
    this.busy = true;
    try {
      if (!this.cfg.id) { this.cfg.id = await this.locate(); store.set('sync', this.cfg); }
      const g = await this.api('/gists/' + this.cfg.id);
      const f = g.files && g.files[SYNC_FILE];
      if (f) {
        const text = f.truncated ? await (await fetch(f.raw_url)).text() : f.content;
        if (this.merge(JSON.parse(text))) reloadState();
      }
      const body = JSON.stringify(this.snapshot());
      if (!f || body !== (f.truncated ? '' : f.content)) {
        await this.api('/gists/' + this.cfg.id, { method: 'PATCH', body: JSON.stringify({ files: { [SYNC_FILE]: { content: body } } }) });
      }
      this.dirty = false;
      this.error = '';
      this.cfg.at = Date.now();
      store.set('sync', this.cfg);
    } catch (e) {
      this.error = e.message || 'Synchronizace se nepovedla.';
    } finally {
      this.busy = false;
      if ($('#settings').open) renderSync();
    }
  },

  soon(ms = 3000) {
    if (!this.on()) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.run(), ms);
  },
};

// Po stažení novějšího stavu z jiného zařízení načíst paměť znovu a obnovit přehledové obrazovky
function reloadState() {
  srs.all = store.get('srs', {});
  rot.all = store.get('rot', {});
  Object.assign(settings, store.get('settings', {}));
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts.length <= 1) route();
}

/* ================= NASTAVENÍ ================= */
function renderSync() {
  const box = $('#settings .sync');
  const on = sync.on();
  const when = sync.cfg && sync.cfg.at ? new Date(sync.cfg.at).toLocaleString('cs-CZ', { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
  box.innerHTML = on
    ? `<div class="field">
        <span class="field-label">${I.cloud} Synchronizace je zapnutá</span>
        <p class="sync-state ${sync.error ? 'bad' : ''}">${sync.busy ? 'Synchronizuji…' : sync.error ? esc(sync.error) : when ? `Naposledy ${esc(when)}` : 'Zatím neproběhla.'}</p>
        <div class="field-row">
          <button type="button" class="btn" data-sync-now ${sync.busy ? 'disabled' : ''}>Synchronizovat teď</button>
          <button type="button" class="btn" data-sync-off>Odpojit</button>
        </div>
      </div>`
    : `<div class="field">
        <label class="field-label" for="sync-token">Osobní token GitHubu</label>
        <input id="sync-token" class="text-in" type="password" autocomplete="off" spellcheck="false" placeholder="github_pat_…">
        <div class="field-row"><button type="button" class="btn" data-sync-on>Připojit</button></div>
      </div>`;
  const now = $('[data-sync-now]', box), off = $('[data-sync-off]', box), conn = $('[data-sync-on]', box);
  if (now) now.onclick = () => { sync.run(); renderSync(); };
  if (off) off.onclick = () => { if (!confirm('Odpojit synchronizaci? Pokrok v tomto zařízení zůstane, jen se přestane přenášet.')) return; sync.cfg = null; store.set('sync', null); renderSync(); };
  if (conn) conn.onclick = () => {
    const token = $('#sync-token').value.trim();
    if (!token) return $('#sync-token').focus();
    sync.cfg = { token };
    store.set('sync', sync.cfg);
    sync.run();
    renderSync();
  };
}

function openSettings() {
  const dlg = $('#settings');
  const f = $('form', dlg);
  f.rate.value = settings.rate;
  $('.rate-val', dlg).textContent = settings.rate.toFixed(2) + '×';
  f.autoSpeak.checked = settings.autoSpeak;
  f.vosotros.checked = settings.vosotros;
  f.esVoice.value = settings.esVoice;
  for (const c of ['es', 'ru']) {
    const sel = f['level_' + c], D = DATA[c];
    sel.innerHTML = D.levels.map(l => `<option value="${l.id}" ${atLevel(D.vocab, l.id).length ? '' : 'disabled'}>${l.name}${atLevel(D.vocab, l.id).length ? '' : ' (připravuje se)'}</option>`).join('');
    sel.value = curLevel(D);
  }
  const vName = c => { const v = tts.voiceFor(c); return v ? `${v.name} (${v.lang})` : 'nenalezen – přidej si hlas v nastavení systému'; };
  $('.voices', dlg).innerHTML = tts.ok
    ? `Hlas pro španělštinu: <b>${esc(vName('es'))}</b><br>Hlas pro ruštinu: <b>${esc(vName('ru'))}</b>`
    : 'Tento prohlížeč neumí předčítat text.';
  renderSync();
  dlg.showModal();
}

function bindSettings() {
  const dlg = $('#settings'), f = $('form', dlg);
  f.rate.oninput = () => { settings.rate = +f.rate.value; $('.rate-val', dlg).textContent = settings.rate.toFixed(2) + '×'; saveSettings(); };
  f.autoSpeak.onchange = () => { settings.autoSpeak = f.autoSpeak.checked; saveSettings(); };
  f.vosotros.onchange = () => { settings.vosotros = f.vosotros.checked; saveSettings(); };
  $$('[name=esVoice]', f).forEach(r => r.onchange = () => { settings.esVoice = f.esVoice.value; saveSettings(); openSettings(); });
  for (const c of ['es', 'ru']) f['level_' + c].onchange = e => {
    settings.level[c] = e.target.value;
    saveSettings();
  };
  dlg.addEventListener('close', () => { if (location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).length <= 1) route(); });
  $('[data-test]', dlg).onclick = () => withLang(L || DATA.es, () => tts.say(L.code === 'ru' ? 'Приве́т! Как дела́?' : '¡Hola! ¿Qué tal?'));
  $('[data-export]', dlg).onclick = () => {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('jz_') && k !== 'jz_sync') out[k] = localStorage.getItem(k); }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 1)], { type: 'application/json' }));
    a.download = `jazyky-zaloha-${dayKey()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  $('[data-import]', dlg).onchange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const keys = Object.keys(data).filter(k => k.startsWith('jz_') && k !== 'jz_sync');
      if (!keys.length) throw new Error('prázdné');
      if (!confirm('Nahrát zálohu? Současný pokrok a vlastní slovíčka se přepíšou.')) return;
      keys.forEach(k => localStorage.setItem(k, data[k]));
      location.reload();
    } catch { alert('Tohle nevypadá jako záloha z Jazyků.'); }
    e.target.value = '';
  };
}

/* ================= UDÁLOSTI ================= */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-say], [data-act], [data-ins]');
  if (!t) return;
  if (t.dataset.say != null) { e.stopPropagation(); tts.say(t.dataset.say); return; }
  if (t.dataset.ins != null) { insertChar(t, t.dataset.ins); return; }
  const act = t.dataset.act;
  if (act === 'settings') openSettings();
  else if (act === 'bksp') insertChar(t, null);
  else if (act === 'kbd' || act === 'translit') {
    settings[act] = !settings[act]; saveSettings();
    $$(`[data-act="${act}"]`).forEach(b => b.classList.toggle('on', settings[act]));
    if (act === 'kbd') {
      $$('.vkbd').forEach(k => k.hidden = !settings.kbd);
      $$('.answer-box[data-lang=ru] .answer').forEach(el => settings.kbd ? el.setAttribute('inputmode', 'none') : el.removeAttribute('inputmode'));
    } else $$('.translit-help').forEach(p => p.hidden = !settings.translit);
  }
});

// Tlačítka znaků nesmí brát fokus políčku
document.addEventListener('mousedown', e => { if (e.target.closest('[data-ins], [data-act=bksp]')) e.preventDefault(); });

document.addEventListener('input', e => {
  const el = e.target;
  if (!settings.translit || !el.classList || !el.classList.contains('answer')) return;
  if (el.closest('.answer-box')?.dataset.lang !== 'ru') return;
  const before = el.value, pos = el.selectionStart;
  const after = translit(before);
  if (after !== before) { el.value = after; const p = Math.max(0, pos - (before.length - after.length)); el.setSelectionRange(p, p); }
});

document.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || $('#settings').open) return;
  if (e.key === 'Escape') { const back = $('.bar a.ibtn'); if (back) { e.preventDefault(); back.click(); } return; }
  if (onKey) onKey(e);
});

/* ================= START ================= */
function route() {
  onKey = null;
  if (tts.ok) speechSynthesis.cancel();
  const [c, mode, a, b] = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  if (!c || !DATA[c]) { L = null; document.documentElement.dataset.lang = ''; return viewToday(); }
  L = DATA[c];
  document.documentElement.dataset.lang = c;
  const base = '#/' + c;
  switch (mode) {
    case undefined: return viewLang();
    case 'dnes': return viewFlow();
    case 'opakovani': return vocabSession(dueWords(), 'karticky', 'Opakování', base);
    case 'slovicka':
      if (a == null) return viewTopics();
      if (b == null) return viewTopic(a);
      return vocabSession(topicWords(a), b, topicName(a), `${base}/slovicka/${a}`);
    case 'moje': return a == null ? viewMine() : vocabSession(mineWords(), a, 'Moje slovíčka', `${base}/moje`);
    case 'vety': return viewBuild();
    case 'preklad': return a === 'text' ? (b == null ? viewTextList() : viewTextTranslate(+b)) : viewTranslate();
    case 'poslech': return viewListen();
    case 'cteni': return a == null ? viewReadList() : viewRead(+a);
    case 'dialogy': return a == null ? viewDialogList() : viewDialog(+a);
    case 'gramatika': return a == null ? viewGrammarList() : viewGrammar(a);
    case 'casovani': return a == null ? viewConj() : a === 'cviceni' ? viewConjDrill() : viewVerb(a);
  }
  viewLang();
}

// Přechod mezi obrazovkami: hlouběji se obrazovka nasune zprava, zpět se vrátí, mezi jazyky jen prolne
let depth = location.hash.split('/').filter(Boolean).length;
function navigate() {
  const d = location.hash.split('/').filter(Boolean).length;
  const dir = d > depth ? 'fwd' : d < depth ? 'back' : 'fade';
  depth = d;
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return route();
  document.documentElement.dataset.nav = dir;
  document.startViewTransition(route);
}

bindSettings();
window.addEventListener('hashchange', navigate);
addEventListener('scroll', () => { const h = document.documentElement; h.classList.toggle('scrolled', scrollY > 4); h.classList.toggle('past', scrollY > 48); }, { passive: true });
route();

// Synchronizace: při otevření, při návratu do aplikace, při odchodu a průběžně, když se něco změnilo
sync.run();
document.addEventListener('visibilitychange', () => sync.run());
addEventListener('online', () => sync.run());
setInterval(() => { if (sync.dirty) sync.run(); }, 60e3);

if (location.protocol === 'https:' && 'serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
