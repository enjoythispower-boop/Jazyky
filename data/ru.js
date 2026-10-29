/* Ruština – úrovně a časování (přízvuk je vyznačen čárkou nad samohláskou); obsah je v data/ru/ */
(function () {
  // Pravidelná slovesa na -ать / -ять (1. časování): чита́ть → чита́ю, чита́ешь…
  JZ.at = function (inf, cz) {
    const s = inf.replace(/ть$/, '');
    return {
      inf, cz, reg: true,
      pres: [s + 'ю', s + 'ешь', s + 'ет', s + 'ем', s + 'ете', s + 'ют'].join(','),
      past: [s + 'л', s + 'ла', s + 'ли'].join(','),
    };
  };

  const BUDU = ['бу́ду', 'бу́дешь', 'бу́дет', 'бу́дем', 'бу́дете', 'бу́дут'];

  // Tvar chybí (null), když ho sloveso nemá: dokonavé nemá přítomný čas
  function conjugate(v, t) {
    if (v[t]) return v[t].split(',').map(s => s.trim());
    // Nedokonavá slovesa tvoří budoucí čas složeně: бу́ду чита́ть
    if (t === 'fut' && v.pres && v.asp !== 'pf') return BUDU.map(b => b + ' ' + v.inf);
    return null;
  }

  DATA.ru = {
    code: 'ru',
    name: 'Ruština',
    native: 'Русский',
    glyph: 'Ж',
    // Azbuku stačí číst: cvičení místo psaní nabízejí výběr, skládání nebo odpověď česky
    typing: false,
    keyboard: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'],
    modeWords: {
      slovicka: 'слова́', vety: 'фра́зы', preklad: 'перево́д', poslech: 'слу́шать', cteni: 'чита́ть',
      dialogy: 'разгово́р', gramatika: 'грамма́тика', casovani: 'глаго́лы', moje: 'мои́ слова́', fraze: 'выраже́ния',
    },
    levels: [
      { id: 'a0', name: 'Základy', about: 'pozdravy, rodina, čísla a první slova, která už umíš',
        tenses: ['pres'] },
      { id: 'a1', name: 'A1', about: 'běžná témata, rod, první pády, přítomný a minulý čas', start: true,
        tenses: ['pres', 'past'] },
      { id: 'a2', name: 'A2', about: 'všechny pády, vid sloves, pohybová slovesa, budoucí čas',
        tenses: ['pres', 'past', 'fut', 'impv'] },
      { id: 'b1', name: 'B1', about: 'delší texty, souvětí, příčestí a přechodníky',
        tenses: ['pres', 'past', 'fut', 'impv'] },
    ],
    vocab: [], phrases: [], sentences: [], texts: [], grammar: [], dialogs: [],

    conj: {
      persons: ['я', 'ты', 'он / она́', 'мы', 'вы', 'они́'],
      skip: [],
      tenses: [
        { id: 'pres', name: 'Přítomný čas', sub: 'настоя́щее вре́мя' },
        { id: 'past', name: 'Minulý čas', sub: 'проше́дшее вре́мя', persons: ['он (muž)', 'она́ (žena)', 'они́ (oni)'] },
        { id: 'fut', name: 'Budoucí čas', sub: 'бу́дущее вре́мя' },
        { id: 'impv', name: 'Rozkazovací způsob', sub: 'повели́тельное наклоне́ние', persons: ['ты', 'вы'] },
      ],
      defaultTenses: ['pres'],
      conjugate,
      verbs: [],
    },
  };
})();
