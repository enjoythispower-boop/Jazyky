/* Společný základ dat: každý jazyk má úrovně a jednotlivé soubory do nich přidávají obsah */
window.DATA = {};

window.JZ = {
  // Úroveň, ze které položka pochází (téma, věta, text, sada, sloveso, dialog)
  lv: new WeakMap(),

  // „slovo|význam“ po řádcích → [[slovo, význam], …]
  T: s => s.split('\n').map(l => l.trim()).filter(Boolean).map(l => l.split('|')),

  // Obsah se přidává do společných seznamů jazyka; úroveň si pamatuje každá položka
  add(code, lv, part) {
    const L = DATA[code];
    for (const k of ['vocab', 'sentences', 'texts', 'grammar', 'dialogs'])
      for (const x of part[k] || []) { JZ.lv.set(x, lv); L[k].push(x); }
    for (const v of part.verbs || []) { JZ.lv.set(v, lv); L.conj.verbs.push(v); }
  },
};
