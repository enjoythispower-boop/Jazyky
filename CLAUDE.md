# CLAUDE.md

Personal language-learning site for one user: Spanish (B1 → B1+ → B2, Latin American flavour) and Russian (A1 → A2 → B1). It is a static PWA for GitHub Pages, with no backend, no build step, no package manager and no AI. The UI and code comments are in **Czech**, and commit messages are Czech too. The user explicitly does not want XP, streaks or time statistics, so don't add them.

## Files

- [index.html](index.html): shell plus the settings `<dialog>`. It loads `data/core.js`, the language files, every content file, then `app.js`.
- [app.js](app.js): the whole app, split into sections marked `/* ================= NAME ================= */`. Routing is hash-based (`#/es/slovicka/3/psani`) via `route()`. Every exercise runs through `session({ items, step, summary })`.
  - **Daily plan** (`DENNÍ PLÁN`, `TOK DNEŠNÍHO PLÁNU`): `makePlan()` builds three blocks per language from `RECIPE` (words → structure → usage). It is stored as `jz_plan_<lang>` and regenerated when the date or level changes. The flow lives at `#/<lang>/dnes`, and each step is a `session` with its own `key` and `onEnd`.
  - **Rotation** (`OBMĚNA OBSAHU`): `rot` spaces sentences, grammar items, verbs, texts and dialogs (`jz_rot`); `srs` (Leitner) spaces words.
  - **Sync** (`SYNCHRONIZACE`): an optional private GitHub Gist. Keys are merged per entry (`srs`, `rot` by `u`), plans by progress, and the rest by newest timestamp in `jz_meta`. The token lives only in `jz_sync`.
- [data/core.js](data/core.js): `DATA`, `JZ.T` (lines `word|meaning`), `JZ.add(code, level, part)` and `JZ.lv` (the WeakMap from item to level).
- [data/es.js](data/es.js), [data/ru.js](data/ru.js): language meta, `levels` (id, name, about, tenses for the plan) and the conjugation engine. All content lives in `data/es/` and `data/ru/`, one file per level and kind (`b1-slova.js`, `b1p-dialogy2.js`, `a2-texty.js`…).
- [styles.css](styles.css): tokens on `:root`, light and dark via `prefers-color-scheme`. Editorial look: neutral grey ground, serif display and target language (`.tl`, Source Serif 4), full language-colour panels. `data-lang` on `<html>` switches `--accent`, `--accent-deep` and `--accent-soft`. [DESIGN.md](DESIGN.md) records the system.
- [sw.js](sw.js): network-first with a cache fallback. Its `DATA` list must match the data scripts in `index.html`; bump `jazyky-vN` whenever files change.

## Conventions

- Vocab meanings: separate alternatives with ` / ` or `;`, never with a comma. Commas are part of phrases. `o/a` endings (`cansado/a`) expand automatically. Russian aspect pairs are written `де́лать / сде́лать|dělat / udělat`.
- Russian text carries a stress mark (U+0301) on every word of two or more syllables; `ё` needs no mark. `norm()` strips stress, and `ё` counts as `е`, when answers are checked.
- Grammar items are `[sentence with ___, answer, hint, czech, options?]` (one `___` at most).
- Texts: `{ title, t, cz, gloss, q }`. `t` and `cz` have the same number of lines, and every `gloss` key must appear verbatim in `t`. `title` is the rotation key and must be unique.
- Dialogs: `{ id, title, who, scene, lines }`. A partner line is `[text, czech]`; my turn is `{ ok: [text, czech], no: [[text, why], …] }`, where every wrong option is clearly wrong and `why` explains it in Czech.
- Spanish conjugation is generated from rules in `es.js`. Irregular tenses are given in full on the verb (`pres`, `ind`, `imp`, `subj`, `impv`), plus `fs` (future stem), `pp` (participle) and `tu` (irregular tú imperative). Russian verbs give `pres`/`past` (`JZ.at()` for regular -ать), perfectives `asp: 'pf'` with `fut`, and optionally `impv` (`ты, вы`).
- Adding a level: add its content files with `JZ.add('<lang>', '<level id>', …)`, list them in `index.html` and `sw.js`, and the level becomes selectable once it has vocab.
- State lives only in `localStorage` under the `jz_` prefix (`settings`, `srs`, `rot`, `plan_<lang>`, `mine_<lang>`, `meta`, `sync`, drafts). `session`, `sync` and `meta` never sync.

Serve the folder statically to run it.
