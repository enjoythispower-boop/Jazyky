/* Španělština – úrovně a pravidla časování (s ohledem na Latinskou Ameriku); obsah je v data/es/ */
(function () {
  // Pravidelné koncovky; nepravidelné tvary jsou přímo u sloves
  const END = {
    pres: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    ind:  { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    imp:  { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    subj: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] },
  };
  // Složené časy: tvar slovesa haber + příčestí
  const HABER = {
    perf: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
    plusc: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
    subjperf: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
    condperf: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'],
  };
  const ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  const accentLast = s => s.replace(/[aeiou](?=[^aeiou]*$)/, m => ACC[m]);

  function conjugate(v, t) {
    if (v[t]) return v[t].split(',').map(s => s.trim());
    const inf = v.inf, end = inf.slice(-2), st = inf.slice(0, -2);
    if (t === 'fut') return ['é', 'ás', 'á', 'emos', 'éis', 'án'].map(e => (v.fs || inf) + e);
    if (t === 'cond') return ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'].map(e => (v.fs || inf) + e);
    if (HABER[t]) return HABER[t].map(h => h + ' ' + (v.pp || st + (end === 'ar' ? 'ado' : 'ido')));
    // Minulý konjunktiv vychází z 3. osoby množného čísla indefinida: hablaron → hablara
    if (t === 'subjimp') {
      const s = conjugate(v, 'ind')[5].replace(/ron$/, '');
      return ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'].map((e, i) => (i === 3 ? accentLast(s) : s) + e);
    }
    // Kladný rozkaz: tú = 3. osoba přítomného času (nebo nepravidelný tvar), ostatní z konjunktivu
    if (t === 'impv') {
      const pr = conjugate(v, 'pres'), sj = conjugate(v, 'subj');
      return ['—', v.tu || pr[2], sj[2], sj[3], inf.slice(0, -1) + 'd', sj[5]];
    }
    return END[t][end].map(e => st + e);
  }

  DATA.es = {
    code: 'es',
    name: 'Španělština',
    native: 'Español',
    glyph: 'ñ',
    chars: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
    modeWords: {
      slovicka: 'palabras', vety: 'frases', preklad: 'traducir', poslech: 'escuchar', cteni: 'leer',
      dialogy: 'conversar', gramatika: 'gramática', casovani: 'verbos', moje: 'mis palabras',
    },
    // Úrovně jdou po sobě; tenses = časy, které denní plán na dané úrovni procvičuje
    levels: [
      { id: 'b1', name: 'B1', about: 'cesta, každodenní život, minulé časy a první konjunktiv',
        tenses: ['pres', 'ind', 'imp', 'perf', 'fut', 'subj'] },
      { id: 'b1p', name: 'B1+', about: 'názory, vyprávění, reakce v rozhovoru',
        tenses: ['ind', 'imp', 'perf', 'fut', 'cond', 'subj', 'impv', 'plusc', 'subjimp'] },
      { id: 'b2', name: 'B2', about: 'plynulá konverzace, argumentace, podmínkové věty',
        tenses: ['ind', 'imp', 'cond', 'subj', 'impv', 'plusc', 'subjimp', 'subjperf', 'condperf'] },
    ],
    vocab: [], sentences: [], texts: [], grammar: [], dialogs: [],

    conj: {
      persons: ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ustedes'],
      skip: [4], // vosotros – jen když je zapnuté v nastavení
      tenses: [
        { id: 'pres', name: 'Přítomný čas', sub: 'presente' },
        { id: 'ind', name: 'Minulý – ukončený děj', sub: 'pretérito indefinido' },
        { id: 'imp', name: 'Minulý – popis, zvyk', sub: 'pretérito imperfecto' },
        { id: 'perf', name: 'Předpřítomný', sub: 'pretérito perfecto' },
        { id: 'fut', name: 'Budoucí čas', sub: 'futuro simple' },
        { id: 'cond', name: 'Podmiňovací způsob', sub: 'condicional' },
        { id: 'subj', name: 'Konjunktiv', sub: 'presente de subjuntivo' },
        { id: 'impv', name: 'Rozkazovací způsob', sub: 'imperativo afirmativo',
          persons: ['—', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'] },
        { id: 'plusc', name: 'Předminulý čas', sub: 'pretérito pluscuamperfecto' },
        { id: 'subjimp', name: 'Minulý konjunktiv', sub: 'imperfecto de subjuntivo' },
        { id: 'subjperf', name: 'Konjunktiv předpřítomný', sub: 'pretérito perfecto de subjuntivo' },
        { id: 'condperf', name: 'Podmiňovací minulý', sub: 'condicional compuesto' },
      ],
      defaultTenses: ['pres', 'ind', 'imp'],
      conjugate,
      verbs: [],
    },
  };
})();
