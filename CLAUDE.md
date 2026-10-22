# CLAUDE.md

Personal language-learning site for one user: Spanish (A2+ → B1, Latin American flavour) and Russian (A1+). It is a static PWA for GitHub Pages, with no backend, no build step, no package manager and no AI. The UI and code comments are in **Czech**, and commit messages are Czech too. The user explicitly does not want XP, streaks or time statistics, so don't add them.

## Files

- [index.html](index.html): shell plus the settings `<dialog>`. It loads the data files, then `app.js`.
- [app.js](app.js): the whole app, split into sections marked `/* ================= NAME ================= */`. Routing is hash-based (`#/es/slovicka/3/psani`) via `route()`. Every exercise runs through `session({ items, step, summary })`.
- [data/es.js](data/es.js), [data/ru.js](data/ru.js): all content (`vocab`, `sentences`, `texts`, `grammar`, `conj`). Russian text carries stress marks (U+0301). `norm()` strips them, and `ё` counts as `е`, when answers are checked.
- [styles.css](styles.css): design tokens on `:root`, light and dark via `prefers-color-scheme`. `data-lang` on `<html>` switches the accent (terracotta for Spanish, cobalt for Russian). Target-language text uses the `.tl` class (Literata serif); UI text uses Manrope.
- [sw.js](sw.js): network-first with a cache fallback. Bump `jazyky-vN` when the cached file list changes.

## Conventions

- Vocab meanings: separate alternatives with ` / ` or `;`, never with a comma. Commas are part of phrases. `o/a` endings (`cansado/a`) expand automatically.
- Grammar items are `[sentence with ___, answer, hint, czech, options?]`.
- Spanish conjugation is generated from rules in `es.js`. Irregular tenses are given in full on the verb (`pres`, `ind`, `imp`, `subj`), plus `fs` (future stem) and `pp` (participle).
- State lives only in `localStorage` under the `jz_` prefix (`settings`, `srs`, `mine_<lang>`, drafts).

Serve the folder statically to run it.
