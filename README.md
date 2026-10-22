# Jazyky

Osobní studovna španělštiny (A2+ → B1) a ruštiny (A1+). Statická stránka bez serveru, účtu i placených služeb.

**Režimy:** slovíčka (kartičky, výběr, psaní) s opakováním v intervalech, skládání vět, překlad vět i celých textů oběma směry, poslech (diktát), čtení se slovníčkem a otázkami, gramatika (doplňování), časování sloves s tabulkami a vlastní slovíčka.

- Výslovnost zajišťuje hlas zabudovaný v prohlížeči (Web Speech API). Kdyby některý chyběl, přidej si ho v systému: ve Windows v Nastavení → Čas a jazyk → Řeč, na telefonu v nastavení převodu textu na řeč.
- Pokrok a vlastní slovíčka se ukládají jen v prohlížeči. Do jiného zařízení je přeneseš přes Nastavení → Stáhnout / Nahrát zálohu.
- Ruštinu lze psát vestavěnou klávesnicí nebo latinkou s automatickým převodem do azbuky.

## Spuštění u sebe

Stačí soubory poskytnout statickým serverem, například `npx serve` nebo `python -m http.server`, a otevřít `http://localhost:8000/`.

## Zveřejnění na GitHub Pages

1. Na <https://github.com/new> založ repozitář `Jazyky`. Musí být veřejný, jinak GitHub Pages nejsou zdarma.
2. `git push -u origin main`
3. V repozitáři otevři Settings → Pages → Build and deployment. Zvol *Deploy from a branch*, větev `main` a složku `/ (root)`.
4. Za chvíli bude stránka na `https://enjoythispower-boop.github.io/Jazyky/`.

Stránka má `noindex` a `robots.txt`, takže ji vyhledávače nezařadí. Adresa ale není tajná.

## Obsah

Veškerý obsah je v [data/es.js](data/es.js) a [data/ru.js](data/ru.js): slovíčka podle témat, věty, texty, gramatická cvičení a slovesa. Nové položky se přidávají přímo tam.
