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

const store = {
  get(k, d) { try { const v = localStorage.getItem('jz_' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('jz_' + k, JSON.stringify(v)); } catch { /* soukromé okno apod. */ } },
};

const settings = Object.assign({
  rate: 0.9, autoSpeak: true, esVoice: 'latam', vosotros: false,
  translit: false, kbd: false, cardDir: 'tc', trDir: 'ct', tenses: {},
}, store.get('settings', {}));
const saveSettings = () => store.set('settings', settings);

let L = null;       // data aktuálního jazyka
let onKey = null;   // klávesy pro aktuální obrazovku

const I = {
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/></svg>',
  kbd: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2.5"/><path d="M7 10h.01M10.5 10h.01M14 10h.01M17 10h.01M8 14h8"/></svg>',
  swap: '<svg viewBox="0 0 24 24"><path d="M7 4L3.5 7.5 7 11M3.5 7.5H17M17 13l3.5 3.5L17 20M20.5 16.5H7"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  slow: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 1.5M10 3h4"/></svg>',
};

const MODES = [
  { id: 'slovicka', name: 'Slovíčka', desc: 'Kartičky, výběr a psaní podle témat' },
  { id: 'vety', name: 'Skládání vět', desc: 'Poskládej větu ze slov' },
  { id: 'preklad', name: 'Překlad', desc: 'Věty i celé texty, oběma směry' },
  { id: 'poslech', name: 'Poslech', desc: 'Poslechni si větu a napiš ji' },
  { id: 'cteni', name: 'Čtení', desc: 'Krátké texty se slovníčkem' },
  { id: 'gramatika', name: 'Gramatika', desc: 'Doplňování podle pravidel' },
  { id: 'casovani', name: 'Časování', desc: 'Tvary sloves a tabulky' },
  { id: 'moje', name: 'Moje slovíčka', desc: 'Vlastní slova z cest a hovorů' },
];

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
    this.all[L.code + '|' + w] = { b, d: Date.now() + SRS_DAYS[b] * 864e5 - 2 * 36e5 };
    store.set('srs', this.all);
  },
  due(w) { const c = this.get(w); return !!c && c.d <= Date.now(); },
};

const mine = () => store.get('mine_' + L.code, []);
const mineWords = () => mine().map(m => ({ t: m.t, c: m.c, topic: 'moje' }));
function baseWords() {
  const w = [];
  L.vocab.forEach((t, i) => t.words.forEach(([a, c]) => w.push({ t: a, c, topic: i })));
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

/* ================= KOSTRA STRÁNKY ================= */
function page(title, back, body) {
  const other = L && (L.code === 'es' ? 'ru' : 'es');
  app.innerHTML = `
    <header class="bar">
      ${back != null
        ? `<a class="ibtn" href="${back}" aria-label="Zpět">${I.back}</a>`
        : `<a class="logo" href="#/" aria-label="Domů">J</a>`}
      <h1 class="bar-title">${title || ''}</h1>
      ${L ? `<nav class="lang-switch" aria-label="Jazyk">
        <span class="on" aria-current="true">${L.code.toUpperCase()}</span>
        <a href="#/${other}" title="Přepnout na ${esc(DATA[other].name.toLowerCase())}">${other.toUpperCase()}</a>
      </nav>` : ''}
      <button type="button" class="ibtn" data-act="settings" aria-label="Nastavení">${I.gear}</button>
    </header>
    <main class="main">${body}</main>`;
  window.scrollTo(0, 0);
}

/* ================= VSTUP ODPOVĚDI ================= */
function inputHTML(lang, { multi = false, name = 'a', placeholder = '' } = {}) {
  const target = lang !== 'cz';
  const attrs = `class="answer ${target ? 'tl' : ''}" name="${name}" lang="${lang === 'cz' ? 'cs' : lang}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(placeholder)}" ${lang === 'ru' && settings.kbd ? 'inputmode="none"' : ''}`;
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
        <div class="vk-row"><button type="button" class="vk wide" data-ins=" ">mezera</button><button type="button" class="vk wide" data-act="bksp" aria-label="Smazat">⌫</button></div>
      </div>`;
  }
  return `<div class="answer-box" data-lang="${lang}">${field}${tools}</div>`;
}

function insertChar(btn, ch) {
  const box = btn.closest('.answer-box');
  const el = box ? $('.answer', box) : document.activeElement;
  if (!el || !el.classList || !el.classList.contains('answer')) return;
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
    next = onCheck(field.value);
    const btn = $('button[type=submit]', form);
    if (btn) { btn.textContent = 'Další'; btn.focus({ preventScroll: true }); }
  });
  if (field.tagName === 'TEXTAREA') field.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });
  if (matchMedia('(hover: hover)').matches) field.focus();
}

/* ================= SEZENÍ ================= */
// Obecná řada úloh s průběhem a závěrečným přehledem toho, co nevyšlo
function session({ title, back, intro = '', items, step, summary }) {
  const queue = items.slice();
  const missed = [];
  let i = 0;
  page(title, back, `${intro}<div class="progress" aria-hidden="true"><span></span></div><div id="stage" class="stage"></div>`);
  const stage = $('#stage'), bar = $('.progress span');

  const next = () => {
    onKey = null;
    bar.style.width = (i / queue.length * 100) + '%';
    if (i >= queue.length) return finish();
    const item = queue[i++];
    stage.innerHTML = '';
    step(item, stage, (ok, opts = {}) => {
      if (!ok) {
        if (!missed.includes(item.__orig || item)) missed.push(item.__orig || item);
        if (opts.again && !item.__orig) queue.push(Object.assign(Array.isArray(item) ? [...item] : { ...item }, { __orig: item }));
      }
      next();
    });
  };

  const finish = () => {
    stage.innerHTML = `<div class="done">
      <h2 class="display">Hotovo</h2>
      ${missed.length
        ? `<p class="muted">Tohle si ještě projdi:</p><ul class="missed">${missed.map(m => `<li>${summary(m)}</li>`).join('')}</ul>`
        : `<p class="muted">Všechno sedělo.</p>`}
      <div class="actions"><button type="button" class="btn primary" data-again>Ještě jednou</button><a class="btn" href="${back}">Zpět</a></div>
    </div>`;
    $('[data-again]', stage).onclick = () => route();
    onKey = e => { if (e.key === 'Enter') route(); };
  };

  if (!items.length) {
    stage.innerHTML = `<p class="empty">Tady zatím nic není.</p>`;
    return;
  }
  next();
}

function fb(r, html) {
  const head = { ok: 'Správně', almost: 'Skoro', bad: 'Ne tak docela' }[r];
  return `<div class="fb ${r}"><strong>${head}</strong>${html}</div>`;
}

/* ================= DOMŮ ================= */
function viewHome() {
  page('', null, `
    <section class="hero">
      <p class="eyebrow">Osobní studovna</p>
      <h2 class="hero-title">Jazyky</h2>
    </section>
    <div class="lang-cards">
      ${['es', 'ru'].map(c => { const D = DATA[c]; return `
        <a class="lang-card" data-l="${c}" href="#/${c}">
          <span class="lang-glyph" aria-hidden="true">${D.glyph}</span>
          <span class="lang-native">${D.native}</span>
          <span class="lang-name">${D.name} · ${D.level}</span>
        </a>`; }).join('')}
    </div>`);
}

function viewLang() {
  const due = dueWords().length;
  page(L.name, '#/', `
    <section class="lang-head">
      <p class="eyebrow">${L.name} · ${L.level}</p>
      <h2 class="display">${L.native}</h2>
    </section>
    ${due ? `<a class="review" href="#/${L.code}/opakovani">
      <span><b>Opakování</b><small>${due} ${plural(due, 'slovo čeká', 'slova čekají', 'slov čeká')} na zopakování</small></span>${I.arrow}</a>` : ''}
    <nav class="modes">
      ${MODES.map(m => `<a class="mode" href="#/${L.code}/${m.id}">
        <span class="mode-word">${L.modeWords[m.id]}</span>
        <span class="mode-name">${m.name}</span>
        <span class="mode-desc">${m.desc}</span>
      </a>`).join('')}
    </nav>`);
}

/* ================= SLOVÍČKA ================= */
function viewTopics() {
  const base = `#/${L.code}/slovicka`;
  page('Slovíčka', `#/${L.code}`, `
    <div class="list">
      <a class="row" href="${base}/vse"><span class="row-main">Všechna témata</span><span class="row-sub">mix ze všech slovíček</span>${I.arrow}</a>
      ${L.vocab.map((t, i) => `<a class="row" href="${base}/${i}">
        <span class="row-main">${esc(t.name)}</span>
        <span class="row-sub tl">${esc(t.words.slice(0, 3).map(w => w[0]).join(' · '))}</span>${I.arrow}</a>`).join('')}
    </div>`);
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
  session({
    title, back, items,
    step: steps[mode] || stepCard,
    summary: w => `<span class="tl">${esc(w.t)}</span> — ${esc(w.c)}`,
  });
}

function stepCard(w, stage, done) {
  const render = () => {
    const tc = settings.cardDir === 'tc';
    const front = tc ? w.t : w.c, back = tc ? w.c : w.t;
    stage.innerHTML = `
      <div class="card" role="button" tabindex="0" aria-label="Otočit kartičku">
        <div class="card-inner">
          <div class="face front"><span class="big ${tc ? 'tl' : ''}">${esc(front)}</span><small class="hint">klepni pro otočení</small></div>
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
    const card = $('.card', stage), grade = $('.grade', stage);
    const flip = () => {
      if (card.classList.contains('flipped')) return;
      card.classList.add('flipped');
      grade.hidden = false;
      if (!tc) autoSay(w.t);
    };
    const answer = ok => { srs.grade(w.t, ok); done(ok, { again: !ok }); };
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
function stepChoice(w, pool, stage, done) {
  const rev = Math.random() < 0.5;
  const others = sample(pool.filter(x => x.t !== w.t && x.c !== w.c), 3);
  const opts = shuffle([w, ...others]);
  stage.innerHTML = `
    <div class="prompt">
      <span class="big ${rev ? '' : 'tl'}">${esc(rev ? w.c : w.t)}</span>
      ${rev ? '' : sayBtn(w.t)}
    </div>
    <div class="opts">${opts.map((o, k) => `<button type="button" class="opt ${rev ? 'tl' : ''}" data-k="${k}"><kbd>${k + 1}</kbd>${esc(rev ? o.t : o.c)}</button>`).join('')}</div>
    <div class="after"></div>`;
  if (!rev) autoSay(w.t);
  let answered = false;
  const choose = k => {
    if (answered) return;
    answered = true;
    const ok = opts[k] === w;
    $$('.opt', stage).forEach((b, j) => { b.disabled = true; if (opts[j] === w) b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
    srs.grade(w.t, ok);
    if (rev) autoSay(w.t);
    if (ok) { setTimeout(() => done(true), 850); onKey = null; return; }
    $('.after', stage).innerHTML = `<button type="button" class="btn primary wide" data-next>Pokračovat</button>`;
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
    <div class="after"></div>`;
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

function viewBuild() {
  const all = L.sentences;
  session({
    title: 'Skládání vět', back: `#/${L.code}`,
    items: sample(all, 10),
    summary: s => `<span class="tl">${esc(s[0])}</span><br><small>${esc(s[1])}</small>`,
    step: ([t, cz], stage, done) => {
      const tokens = tokenize(t);
      const own = new Set(tokens.map(norm));
      const extra = [...new Set(all.filter(s => s[0] !== t).flatMap(s => tokenize(s[0])).filter(x => !own.has(norm(x))))];
      const tiles = shuffle([...tokens, ...sample(extra, L.code === 'es' ? 2 : 1)].map((w, id) => ({ w, id })));
      let chosen = [], answered = false;
      const end = /[?!]$/.test(t.trim()) ? t.trim().slice(-1) : '.';

      const render = () => {
        stage.innerHTML = `
          <div class="prompt"><span class="big2">${esc(cz)}</span></div>
          <div class="build tl">${chosen.map(id => `<button type="button" class="tile" data-c="${id}">${esc(tiles.find(x => x.id === id).w)}</button>`).join('')}${chosen.length ? `<span class="build-end">${end}</span>` : ''}</div>
          <div class="bank tl">${tiles.map(x => `<button type="button" class="tile ${chosen.includes(x.id) ? 'used' : ''}" data-b="${x.id}" ${chosen.includes(x.id) ? 'tabindex="-1"' : ''}>${esc(x.w)}</button>`).join('')}</div>
          <div class="actions">
            <button type="button" class="btn" data-clear ${chosen.length ? '' : 'disabled'}>Vymazat</button>
            <button type="button" class="btn primary" data-check ${chosen.length ? '' : 'disabled'}>Zkontrolovat</button>
          </div>
          <div class="after"></div>`;
        $$('[data-b]', stage).forEach(b => b.onclick = () => { if (!chosen.includes(+b.dataset.b)) { chosen.push(+b.dataset.b); render(); } });
        $$('[data-c]', stage).forEach(b => b.onclick = () => { chosen = chosen.filter(x => x !== +b.dataset.c); render(); });
        $('[data-clear]', stage).onclick = () => { chosen = []; render(); };
        $('[data-check]', stage).onclick = checkIt;
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
    },
  });
}

/* ================= PŘEKLAD ================= */
function trSwitch(active) {
  const lng = L.code === 'es' ? 'španělštiny' : 'ruštiny';
  const opt = (id, label, href) => `<a class="seg-btn ${active === id ? 'on' : ''}" href="${href}" data-tr="${id}">${label}</a>`;
  return `<div class="seg" role="tablist">
    ${opt('ct', `Do ${lng}`, `#/${L.code}/preklad`)}
    ${opt('tc', 'Do češtiny', `#/${L.code}/preklad`)}
    ${opt('text', 'Celý text', `#/${L.code}/preklad/text`)}
  </div>`;
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

function viewTranslate() {
  const toT = settings.trDir === 'ct';
  session({
    title: 'Překlad', back: `#/${L.code}`,
    intro: trSwitch(settings.trDir),
    items: sample(L.sentences, 10),
    summary: s => `<span class="tl">${esc(s[0])}</span><br><small>${esc(s[1])}</small>`,
    step: ([t, cz], stage, done) => {
      const src = toT ? cz : t, ref = toT ? t : cz;
      stage.innerHTML = `
        <div class="prompt"><span class="big2 ${toT ? '' : 'tl'}">${esc(src)}</span>${toT ? '' : sayBtn(t)}</div>
        <form class="answer-form">${inputHTML(toT ? L.code : 'cz', { multi: true, placeholder: toT ? 'Tvůj překlad…' : 'Tvůj překlad do češtiny…' })}
          <button class="btn primary wide" type="submit">Zkontrolovat</button></form>
        <div class="after"></div>`;
      answerForm($('form', stage), val => {
        const res = check(val, ref);
        if (toT) tts.say(t);
        if (res.r !== 'bad') {
          $('.after', stage).innerHTML = fb(res.r, `${res.why ? `<p>${res.why}</p>` : ''}<p class="answer-line"><span class="${toT ? 'tl' : ''}">${esc(ref)}</span></p>`);
          return () => done(true);
        }
        // Překlad má víc správných podob – rozhodnutí nechávám na tobě
        $('.after', stage).innerHTML = `<div class="fb neutral"><strong>Porovnej</strong>${diffBlock(val, ref, toT)}
          <div class="actions"><button type="button" class="btn ok" data-self="1">Měl jsem to dobře</button><button type="button" class="btn bad" data-self="0">Bylo to špatně</button></div></div>`;
        $$('[data-self]', stage).forEach(b => b.onclick = () => done(b.dataset.self === '1', { again: b.dataset.self !== '1' }));
        $('button[type=submit]', stage).hidden = true;
        return null;
      });
    },
  });
  bindTrSwitch();
}

function viewTextList() {
  page('Překlad textu', `#/${L.code}`, `
    ${trSwitch('text')}
    <p class="muted lead">Vyber text, přelož ho celý a pak porovnej se vzorovým překladem.</p>
    <div class="list">${L.texts.map((x, i) => `<a class="row" href="#/${L.code}/preklad/text/${i}">
      <span class="row-main tl">${esc(x.title)}</span><span class="row-sub">${x.level}</span>${I.arrow}</a>`).join('')}</div>`);
  bindTrSwitch();
}

function viewTextTranslate(i) {
  const x = L.texts[i];
  if (!x) return viewTextList();
  const dir = store.get('textDir', 'tc');
  const src = dir === 'ct' ? x.cz : x.t, ref = dir === 'ct' ? x.t : x.cz;
  const draftKey = `draft_${L.code}_${i}_${dir}`;
  page('Překlad textu', `#/${L.code}/preklad/text`, `
    <section class="sec-head"><p class="eyebrow">${x.level}</p><h2 class="display sm tl">${esc(x.title)}</h2></section>
    <div class="seg small">
      <button type="button" class="seg-btn ${dir === 'tc' ? 'on' : ''}" data-dir="tc">${L.code.toUpperCase()} → CZ</button>
      <button type="button" class="seg-btn ${dir === 'ct' ? 'on' : ''}" data-dir="ct">CZ → ${L.code.toUpperCase()}</button>
    </div>
    <div class="source ${dir === 'tc' ? 'tl' : ''}">${src.split('\n').map(p => `<p>${esc(p)}</p>`).join('')}</div>
    <form class="answer-form text-form">
      ${inputHTML(dir === 'ct' ? L.code : 'cz', { multi: true, placeholder: 'Piš svůj překlad…' })}
      <button class="btn primary wide" type="submit">Porovnat se vzorem</button>
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
function viewListen() {
  if (!tts.ok) {
    page('Poslech', `#/${L.code}`, `<p class="empty">Tento prohlížeč neumí předčítat text. Zkus Chrome, Edge nebo Safari.</p>`);
    return;
  }
  const noVoice = !tts.voiceFor(L.code);
  session({
    title: 'Poslech', back: `#/${L.code}`,
    intro: noVoice ? `<p class="note">V zařízení jsem nenašel hlas pro ${L.code === 'es' ? 'španělštinu' : 'ruštinu'}. Přidej ho v nastavení systému (Řeč / Text na řeč), jinak bude výslovnost špatná.</p>` : '',
    items: sample(L.sentences, 10),
    summary: s => `<span class="tl">${esc(s[0])}</span><br><small>${esc(s[1])}</small>`,
    step: ([t, cz], stage, done) => {
      stage.innerHTML = `
        <div class="listen">
          <button type="button" class="play" data-play aria-label="Přehrát">${I.sound}</button>
          <button type="button" class="chip" data-slow>${I.slow}<span>Pomaleji</span></button>
        </div>
        <form class="answer-form">${inputHTML(L.code, { multi: true, placeholder: 'Napiš, co slyšíš…' })}
          <button class="btn primary wide" type="submit">Zkontrolovat</button></form>
        <div class="after"></div>`;
      $('[data-play]', stage).onclick = () => tts.say(t);
      $('[data-slow]', stage).onclick = () => tts.say(t, { slow: true });
      setTimeout(() => tts.say(t), 250);
      answerForm($('form', stage), val => {
        const res = check(val, t);
        const ok = res.r !== 'bad';
        $('.after', stage).innerHTML = fb(res.r, `
          ${res.why ? `<p>${res.why}</p>` : ''}
          ${ok ? `<p class="answer-line"><span class="tl">${esc(t)}</span></p>` : diffBlock(val, t, true)}
          <p class="cz-line">${esc(cz)}</p>`);
        return () => done(ok, { again: !ok });
      });
    },
  });
}

/* ================= ČTENÍ ================= */
function viewReadList() {
  page('Čtení', `#/${L.code}`, `
    <div class="list">${L.texts.map((x, i) => `<a class="row" href="#/${L.code}/cteni/${i}">
      <span class="row-main tl">${esc(x.title)}</span><span class="row-sub">${x.level} · ${esc(x.t.slice(0, 60).replace(/\n/g, ' '))}…</span>${I.arrow}</a>`).join('')}</div>`);
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

function viewRead(i) {
  const x = L.texts[i];
  if (!x) return viewReadList();
  page('Čtení', `#/${L.code}/cteni`, `
    <article class="reading">
      <header class="sec-head">
        <p class="eyebrow">${x.level}</p>
        <h2 class="display sm tl">${esc(x.title)}</h2>
        <div class="actions left">
          ${tts.ok ? `<button type="button" class="chip" data-read>${I.sound}<span>Přečíst nahlas</span></button>` : ''}
          <button type="button" class="chip" data-show>Zobrazit překlad</button>
        </div>
      </header>
      <p class="muted small">Podtržená slova ťukni pro význam.</p>
      <div class="text tl">${glossify(x.t, x.gloss)}</div>
      <div class="translation" hidden>${x.cz.split('\n').map(p => `<p>${esc(p)}</p>`).join('')}</div>
      <section class="questions">
        <h3>Porozuměl jsi?</h3>
        ${x.q.map(([q, o], qi) => `<div class="q"><p>${esc(q)}</p><div class="opts small">
          ${o.map((t, k) => `<button type="button" class="opt" data-q="${qi}" data-o="${k}">${esc(t)}</button>`).join('')}</div></div>`).join('')}
      </section>
      <a class="btn wide" href="#/${L.code}/preklad/text/${i}">Přeložit tento text</a>
    </article>
    <div class="gloss-bar" hidden></div>`);

  const bar = $('.gloss-bar');
  $$('.g').forEach(b => b.onclick = () => {
    $$('.g.on').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    bar.innerHTML = `<span class="gl-w tl">${esc(b.textContent)}</span><span class="gl-m">${esc(x.gloss[b.dataset.g])}</span>
      ${sayBtn(b.textContent, 'sm')}<button type="button" class="ibtn sm" data-close aria-label="Zavřít">${I.x}</button>`;
    bar.hidden = false;
    $('[data-close]', bar).onclick = () => { bar.hidden = true; b.classList.remove('on'); };
    autoSay(b.textContent);
  });
  $$('.g').forEach(b => b.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); b.click(); } });
  const rd = $('[data-read]');
  if (rd) rd.onclick = () => tts.say(x.t.replace(/—/g, ''));
  $('[data-show]').onclick = e => {
    const tr = $('.translation');
    tr.hidden = !tr.hidden;
    e.currentTarget.lastChild.textContent = tr.hidden ? 'Zobrazit překlad' : 'Skrýt překlad';
  };
  $$('[data-q]').forEach(b => b.onclick = () => {
    const qi = +b.dataset.q, right = x.q[qi][2];
    $$(`[data-q="${qi}"]`).forEach(o => { o.disabled = true; if (+o.dataset.o === right) o.classList.add('ok'); else if (o === b) o.classList.add('bad'); });
  });
}

/* ================= GRAMATIKA ================= */
function viewGrammarList() {
  page('Gramatika', `#/${L.code}`, `
    <div class="list">${L.grammar.map(g => `<a class="row" href="#/${L.code}/gramatika/${g.id}">
      <span class="row-main">${esc(g.name)}</span><span class="row-sub">${g.items.length} vět</span>${I.arrow}</a>`).join('')}</div>`);
}

function viewGrammar(id) {
  const g = L.grammar.find(x => x.id === id);
  if (!g) return viewGrammarList();
  session({
    title: g.name, back: `#/${L.code}/gramatika`,
    intro: `<details class="rule" open><summary>Pravidlo</summary><div>${g.rule}</div></details>`,
    items: sample(g.items, 10),
    summary: ([s, a, , cz]) => `<span class="tl">${s.includes('___') ? esc(s).replace('___', `<b>${esc(variants(a)[0])}</b>`) : `${esc(s)} – <b>${esc(a)}</b>`}</span><br><small>${esc(cz)}</small>`,
    step: ([s, a, hint, cz, opts], stage, done) => {
      const blank = s.includes('___');
      const full = blank ? s.replace('___', variants(a)[0]) : s;
      stage.innerHTML = `
        <div class="prompt">
          ${blank ? `<span class="big2 tl">${esc(s).replace('___', '<span class="blank">?</span>')}</span>` : `<span class="big tl">${esc(s)}</span>`}
          <small class="hint">${esc(hint)}</small>
        </div>
        ${opts
          ? `<div class="opts row-opts">${opts.map((o, k) => `<button type="button" class="opt ${isCyr(o) ? 'tl' : ''}" data-k="${k}"><kbd>${k + 1}</kbd>${esc(o)}</button>`).join('')}</div>`
          : `<form class="answer-form">${inputHTML(L.code)}<button class="btn primary wide" type="submit">Zkontrolovat</button></form>`}
        <div class="after"></div>`;

      const reveal = (res, val) => {
        const ok = res.r !== 'bad';
        if (blank) $('.blank', stage).outerHTML = `<b class="filled ${ok ? 'ok' : 'bad'}">${esc(variants(a)[0])}</b>`;
        tts.say(full);
        $('.after', stage).innerHTML = fb(res.r, `
          ${res.why ? `<p>${res.why}</p>` : ''}
          ${!ok && val ? `<p>Tvoje odpověď: <del>${esc(val)}</del></p>` : ''}
          <p class="answer-line"><span class="tl">${esc(full)}</span>${sayBtn(full, 'sm')}</p>
          <p class="cz-line">${esc(cz)}</p>`);
        return ok;
      };

      if (opts) {
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
      } else {
        answerForm($('form', stage), val => {
          const ok = reveal(check(val, a), val);
          return () => done(ok, { again: !ok });
        });
      }
    },
  });
}

/* ================= ČASOVÁNÍ ================= */
const tensesOn = () => (settings.tenses[L.code] || L.conj.defaultTenses).filter(t => L.conj.tenses.some(x => x.id === t));
const tenseOf = id => L.conj.tenses.find(x => x.id === id);
const personsFor = t => t === 'past' ? L.conj.pastPersons : L.conj.persons;
const rowVisible = (t, i, forms) => forms[i] !== '—' && (t === 'past' || !L.conj.skip.includes(i) || settings.vosotros);

function viewConj() {
  const on = tensesOn();
  page('Časování', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display sm">Časování</h2><p class="muted">Vyber časy, které chceš procvičovat.</p></section>
    <div class="chips">${L.conj.tenses.map(t => `<button type="button" class="chip tense ${on.includes(t.id) ? 'on' : ''}" data-t="${t.id}">
      <span>${t.name}</span><small class="tl">${t.sub}</small></button>`).join('')}</div>
    <a class="btn primary wide" href="#/${L.code}/casovani/cviceni">Procvičovat</a>
    <h3 class="sub">Tabulky sloves</h3>
    <div class="verbs">${L.conj.verbs.map(v => `<a class="verb" href="#/${L.code}/casovani/${encodeURIComponent(v.inf)}">
      <span class="tl">${esc(v.inf)}</span><small>${esc(v.cz)}</small></a>`).join('')}</div>`);
  $$('[data-t]').forEach(b => b.onclick = () => {
    let cur = tensesOn();
    cur = cur.includes(b.dataset.t) ? cur.filter(x => x !== b.dataset.t) : [...cur, b.dataset.t];
    if (!cur.length) return;
    settings.tenses[L.code] = cur; saveSettings();
    b.classList.toggle('on');
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
    <div class="tables">${L.conj.tenses.filter(t => !v.only || v.only.includes(t.id)).map(t => `
      <section class="t-block"><h3>${t.name} <small class="tl">${t.sub}</small></h3>${conjTable(v, t.id)}</section>`).join('')}</div>`);
}

function viewConjDrill() {
  const C = L.conj, tens = tensesOn(), items = [];
  for (let guard = 0; items.length < 12 && guard < 600; guard++) {
    const v = rnd(C.verbs);
    const okT = tens.filter(t => !v.only || v.only.includes(t));
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
    step: (x, stage, done) => {
      const T = tenseOf(x.t);
      stage.innerHTML = `
        <div class="prompt conj-prompt">
          <span class="tag">${T.name} · <span class="tl">${T.sub}</span></span>
          <span class="big tl">${esc(x.v.inf)}</span>
          <small class="hint">${esc(x.v.cz)}</small>
          <span class="person tl">${esc(personsFor(x.t)[x.p])} …</span>
        </div>
        <form class="answer-form">${inputHTML(L.code)}<button class="btn primary wide" type="submit">Zkontrolovat</button></form>
        <div class="after"></div>`;
      answerForm($('form', stage), val => {
        const res = check(val, x.form);
        const ok = res.r !== 'bad';
        tts.say(x.form);
        $('.after', stage).innerHTML = fb(res.r, `${res.why ? `<p>${res.why}</p>` : ''}
          ${ok ? '' : `<p>Správně: <b class="tl">${esc(x.form)}</b></p>`}${conjTable(x.v, x.t, x.p)}`);
        return () => done(ok, { again: !ok });
      });
    },
  });
}

/* ================= MOJE SLOVÍČKA ================= */
function viewMine() {
  const words = mineWords();
  const base = `#/${L.code}/moje`;
  page('Moje slovíčka', `#/${L.code}`, `
    <section class="sec-head"><h2 class="display sm">Moje slovíčka</h2><p class="muted">Slova, která potkáš na cestě nebo v hovoru.</p></section>
    <form class="add-form">
      <label><span>${L.native}</span>${inputHTML(L.code, { name: 't', placeholder: L.code === 'es' ? 'la mochila' : 'рюкза́к' })}</label>
      <label><span>Česky</span>${inputHTML('cz', { name: 'c', placeholder: 'batoh' })}</label>
      <button class="btn primary" type="submit">Přidat</button>
    </form>
    ${words.length ? exerciseButtons(base, words.length) : ''}
    ${words.length ? wordList(words, true) : `<p class="empty">Zatím tu nic není.</p>`}`);
  const form = $('.add-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = form.t.value.trim(), c = form.c.value.trim();
    if (!t || !c) { (t ? form.c : form.t).focus(); return; }
    const list = mine();
    if (!list.some(m => norm(m.t) === norm(t))) list.unshift({ t, c });
    store.set('mine_' + L.code, list);
    viewMine();
    $('.add-form').t.focus();
  });
  $$('[data-del]').forEach(b => b.onclick = () => {
    const list = mine();
    list.splice(+b.dataset.del, 1);
    store.set('mine_' + L.code, list);
    viewMine();
  });
}

/* ================= NASTAVENÍ ================= */
function openSettings() {
  const dlg = $('#settings');
  const f = $('form', dlg);
  f.rate.value = settings.rate;
  $('.rate-val', dlg).textContent = settings.rate.toFixed(2) + '×';
  f.autoSpeak.checked = settings.autoSpeak;
  f.vosotros.checked = settings.vosotros;
  f.esVoice.value = settings.esVoice;
  const vName = c => { const v = tts.voiceFor(c); return v ? `${v.name} (${v.lang})` : 'nenalezen – přidej si hlas v nastavení systému'; };
  $('.voices', dlg).innerHTML = tts.ok
    ? `Hlas pro španělštinu: <b>${esc(vName('es'))}</b><br>Hlas pro ruštinu: <b>${esc(vName('ru'))}</b>`
    : 'Tento prohlížeč neumí předčítat text.';
  dlg.showModal();
}

function bindSettings() {
  const dlg = $('#settings'), f = $('form', dlg);
  f.rate.oninput = () => { settings.rate = +f.rate.value; $('.rate-val', dlg).textContent = settings.rate.toFixed(2) + '×'; saveSettings(); };
  f.autoSpeak.onchange = () => { settings.autoSpeak = f.autoSpeak.checked; saveSettings(); };
  f.vosotros.onchange = () => { settings.vosotros = f.vosotros.checked; saveSettings(); };
  $$('[name=esVoice]', f).forEach(r => r.onchange = () => { settings.esVoice = f.esVoice.value; saveSettings(); openSettings(); });
  $('[data-test]', dlg).onclick = () => {
    const prev = L;
    L = prev || DATA.es;
    tts.say(L.code === 'ru' ? 'Приве́т! Как дела́?' : '¡Hola! ¿Qué tal?');
    L = prev;
  };
  $('[data-export]', dlg).onclick = () => {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('jz_')) out[k] = localStorage.getItem(k); }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 1)], { type: 'application/json' }));
    a.download = `jazyky-zaloha-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  $('[data-import]', dlg).onchange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const keys = Object.keys(data).filter(k => k.startsWith('jz_'));
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
  if (!onKey || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || $('#settings').open) return;
  onKey(e);
});

/* ================= START ================= */
function route() {
  onKey = null;
  if (tts.ok) speechSynthesis.cancel();
  const [c, mode, a, b] = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  if (!c || !DATA[c]) { L = null; document.documentElement.dataset.lang = ''; return viewHome(); }
  L = DATA[c];
  document.documentElement.dataset.lang = c;
  const base = '#/' + c;
  switch (mode) {
    case undefined: return viewLang();
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
    case 'gramatika': return a == null ? viewGrammarList() : viewGrammar(a);
    case 'casovani': return a == null ? viewConj() : a === 'cviceni' ? viewConjDrill() : viewVerb(a);
  }
  viewLang();
}

bindSettings();
window.addEventListener('hashchange', route);
route();

if (location.protocol === 'https:' && 'serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
