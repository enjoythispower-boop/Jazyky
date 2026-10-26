# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Jeden uživatel, autor stránky. Je Čech, učí se dva jazyky současně a jinou cílovou skupinu stránka nemá.

- **Španělština:** úroveň B1, míří k B1+ a B2. Cestuje po trase Cancún → Buenos Aires, proto má španělština latinskoamerický základ.
- **Ruština:** úroveň A1, míří k A2 a B1. Azbuku už čte.

Učí se zhruba stejně často na mobilu (krátké chvíle na cestách, často se slabým signálem nebo bez něj) a na počítači (delší soustředěné sezení s klávesnicí). Od listopadu 2026 je dlouhodobě na cestách.

## Product Purpose

Osobní studovna, kde lze procvičovat oba jazyky různými způsoby na jednom místě. Úspěch neznamená body ani odpracované minuty, ale skutečný posun:

- **Španělština:** plynulé rozhovory, tedy posun z B1 k B1+ a B2 (delší konverzace, vyjadřování názorů, vyprávění, reakce v dialogu).
- **Ruština:** systematický základ, tedy pevná gramatika a slovní zásoba pro dlouhodobé učení.

## Positioning

Na rozdíl od běžných aplikací (Duolingo a podobně) je stránka šitá na míru jednomu člověku. Obsah odpovídá jeho úrovni a jeho cestě, vysvětlení jsou česky a v aplikaci záměrně nejsou herní prvky, série dnů ani přehledy času. Je kompletně zdarma a nepoužívá AI.

## Operating Context

- Statická stránka na GitHub Pages: <https://enjoythispower-boop.github.io/Jazyky/>. Dá se nainstalovat jako PWA a funguje i offline.
- Na mobilu se píše dotykovou klávesnicí. Ruštinu lze psát vestavěnou azbukou nebo latinkou s převodem. Na počítači se ovládá fyzickou klávesnicí, včetně zkratek v cvičeních.
- Výslovnost obstarávají hlasy zabudované v systému (Web Speech API). Jejich dostupnost se liší podle zařízení.

## Capabilities and Constraints

- **Denní plán:** každý jazyk má vlastní plán na zhruba 45 minut ve třech blocích: slovní zásoba, stavba jazyka a jazyk v použití. Plán běží jako jeden souvislý tok bez rozhodování a dá se přerušit a dokončit později. O půlnoci se obnoví, vynechané dny se nepřenášejí. Úvodní obrazovka „Dnes“ ukazuje skutečný obsah dne.
- **Úrovně:** španělština B1, B1+ a B2, ruština A1, A2 a B1. Každá úroveň má vlastní slovíčka, věty, texty, gramatiku, slovesa a (od ES B1 a RU A2) dialogy. Když v úrovni dojdou nová slova, nabídne se postup dál. Starší látka se dál opakuje.
- **Režimy:** slovíčka (kartičky, výběr, psaní) s opakováním v intervalech, skládání vět, překlad vět i celých textů oběma směry, poslech (diktát), čtení se slovníčkem a otázkami, dialogy (výběr nebo psaní repliky), gramatika (doplňování přímo ve větě), časování (celé tabulky) a vlastní slovíčka.
- **Bez backendu, účtů, placených služeb a AI.** Kontrola odpovědí je deterministická. U volného překladu a psaných replik rozhoduje o správnosti uživatel sám podle porovnání se vzorem.
- **Stav:** `localStorage` daného prohlížeče. Volitelně se synchronizuje přes soukromý GitHub Gist, token zadá uživatel jednou na každém zařízení. Ruční záloha zůstává.
- **Obsah:** ručně psaný v `data/es/` a `data/ru/`, po úrovních. Ruština nese vyznačený přízvuk.
- **Rozhraní** je česky. Cílový jazyk se zobrazuje odlišně od rozhraní.

## Brand Commitments

- Název: **Jazyky**.
- Bez XP, bodů, sérií, žebříčků, odznaků a statistik času stráveného učením. Jediná povolená čísla jsou funkční údaje, například kolik slov čeká na opakování nebo kolik nových slov je v dnešním plánu.
- Kompletně zdarma a bez AI.
- Vzhled: editoriální. Velká patková typografie, plné barevné plochy podle jazyka a skutečný obsah místo dekorace, vše na klidném neutrálním podkladu. Žádný krémový papír ani hravé ilustrace.

## Evidence on Hand

- Obsah (říjen 2026):
  - ES A2 (základ, který už uživatel zná): 190 slov.
  - ES B1: 413 slov, 300 vět, 21 textů, 152 gramatických vět, 48 sloves, 6 dialogů.
  - ES B1+: 600 slov, 300 vět, 20 textů, 149 gramatických vět, 30 sloves, 16 dialogů.
  - RU Základy (už je umí): 204 slov, 42 vět, 5 textů.
  - RU A1: 399 slov, 260 vět, 16 textů, 154 gramatických vět, 57 sloves.
  - RU A2: 617 slov, 300 vět, 20 textů, 146 gramatických vět, 30 sloves, 15 dialogů.
  - ES B2 a RU B1 se doplní během cesty.
- Uživatelé ani reference neexistují a nemají se vymýšlet. Jde o soukromý nástroj.

## Product Principles

1. **Učení, ne hra.** Motivace má vycházet z obsahu a pocitu pokroku v jazyce, ne z odměn a čísel.
2. **Bez rozhodování.** Denní plán říká, co dělat; ruční režimy zůstávají pro chvíle, kdy si chce uživatel vybrat sám.
3. **Krátká chvíle i dlouhé sezení.** Každý blok jde udělat na telefonu za čtvrt hodiny i na počítači v delším bloku.
4. **Funguje kdekoli.** Žádná závislost na připojení, účtu ani placené službě.
5. **Poctivá zpětná vazba.** Ukázat, co přesně bylo špatně, a u nejednoznačných odpovědí nechat rozhodnout uživatele místo falešné jistoty.
6. **Dva jazyky, dvě strategie.** Španělština táhne ke konverzaci, ruština ke stavění systematického základu.
