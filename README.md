# Jazyky

Osobní studovna španělštiny (B1 → B1+ → B2) a ruštiny (A1 → A2 → B1). Statická stránka bez serveru, účtu i placených služeb.

**Denní plán:** každý den čeká na každý jazyk plán zhruba na 45 minut ve třech blocích:
1. **Slovní zásoba:** opakování a nová slova.
2. **Stavba jazyka:** časování, gramatika a skládání vět.
3. **Jazyk v použití:** čtení, dialog, překlad a poslech.

Plán běží jako jeden tok, dá se přerušit a o půlnoci se obnoví.

**Režimy:** slovíčka (kartičky, výběr, psaní) s opakováním v intervalech, skládání vět, překlad vět i celých textů oběma směry, poslech (diktát), čtení se slovníčkem a otázkami, dialogy, gramatika, časování sloves a vlastní slovíčka.

- Úroveň se mění v Nastavení. Když v aktuální úrovni dojdou nová slova, aplikace sama nabídne postup dál.
- Výslovnost zajišťuje hlas zabudovaný v prohlížeči (Web Speech API). Kdyby některý chyběl, přidej si ho v systému: ve Windows v Nastavení → Čas a jazyk → Řeč, na telefonu v nastavení převodu textu na řeč.
- Ruštinu lze psát vestavěnou klávesnicí nebo latinkou s automatickým převodem do azbuky.

## Synchronizace mezi zařízeními

Pokrok se dá synchronizovat přes soukromý gist na GitHubu.

1. Na github.com otevři Settings → Developer settings → Personal access tokens.
2. Vytvoř token, a to buď *Fine-grained* s oprávněním **Gists: Read and write**, nebo *classic* se zaškrtnutým **gist**.
3. V aplikaci otevři Nastavení → Synchronizace, vlož token a klepni na Připojit. Na druhém zařízení zadej stejný token. Aplikace si gist najde sama.

Synchronizuje se při otevření, při návratu do aplikace, po každém kroku plánu a jednou za minutu, když se něco změnilo. Token zůstává jen v prohlížeči. Bez synchronizace jde pokrok přenést ručně přes Nastavení → Stáhnout / Nahrát zálohu.

## Spuštění u sebe

Stačí soubory poskytnout statickým serverem, například `npx serve` nebo `python -m http.server`, a otevřít `http://localhost:8000/`.

## Zveřejnění na GitHub Pages

1. Na <https://github.com/new> založ repozitář `Jazyky`. Musí být veřejný, jinak GitHub Pages nejsou zdarma.
2. `git push -u origin main`
3. V repozitáři otevři Settings → Pages → Build and deployment. Zvol *Deploy from a branch*, větev `main` a složku `/ (root)`.
4. Za chvíli bude stránka na `https://enjoythispower-boop.github.io/Jazyky/`.

Stránka má `noindex` a `robots.txt`, takže ji vyhledávače nezařadí. Adresa ale není tajná.

## Obsah

Veškerý obsah je ve složkách [data/es/](data/es/) a [data/ru/](data/ru/), jeden soubor na úroveň a druh obsahu: slovíčka, věty, texty, gramatika a slovesa, dialogy. Novou úroveň přidáš tak, že vytvoříš soubory s `JZ.add('<jazyk>', '<úroveň>', …)` a zapíšeš je do [index.html](index.html) a [sw.js](sw.js).
