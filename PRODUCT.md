# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Jeden uživatel, autor stránky. Je Čech, učí se dva jazyky současně a jinou cílovou skupinu stránka nemá.

- **Španělština:** úroveň mezi A2+ a B1. Cestuje po trase Cancún → Buenos Aires, proto má španělština latinskoamerický základ.
- **Ruština:** úroveň A1+, učí se asi měsíc. Azbuku už čte.

Učí se zhruba stejně často na mobilu (krátké chvíle na cestách, často se slabým signálem nebo bez něj) a na počítači (delší soustředěné sezení s klávesnicí).

## Product Purpose

Osobní studovna, kde lze procvičovat oba jazyky různými způsoby na jednom místě. Úspěch neznamená body ani odpracované minuty, ale skutečný posun:

- **Španělština:** plynulé rozhovory, tedy posun z A2+/B1 k B1+ (delší konverzace, vyjadřování názorů, vyprávění).
- **Ruština:** systematický základ, tedy pevná gramatika a slovní zásoba pro dlouhodobé učení.

## Positioning

Na rozdíl od běžných aplikací (Duolingo a podobně) je stránka šitá na míru jednomu člověku. Obsah odpovídá jeho úrovni a jeho cestě, vysvětlení jsou česky a v aplikaci záměrně nejsou herní prvky, série dnů ani přehledy času. Je kompletně zdarma a nepoužívá AI.

## Operating Context

- Statická stránka na GitHub Pages: <https://enjoythispower-boop.github.io/Jazyky/>. Dá se nainstalovat jako PWA a funguje i offline.
- Na mobilu se píše dotykovou klávesnicí. Ruštinu lze psát vestavěnou azbukou nebo latinkou s převodem. Na počítači se ovládá fyzickou klávesnicí, včetně zkratek v cvičeních.
- Výslovnost obstarávají hlasy zabudované v systému (Web Speech API). Jejich dostupnost se liší podle zařízení.

## Capabilities and Constraints

- **Režimy:** slovíčka (kartičky, výběr, psaní) s opakováním v intervalech, skládání vět, překlad vět i celých textů oběma směry, poslech (diktát), čtení se slovníčkem a otázkami, gramatika (doplňování), časování s tabulkami a vlastní slovíčka.
- **Bez backendu, účtů, placených služeb a AI.** Kontrola odpovědí je deterministická. U volného překladu rozhoduje o správnosti uživatel sám podle porovnání se vzorem.
- **Stav:** jen v `localStorage` daného prohlížeče. Mezi zařízeními se přenáší ruční zálohou.
- **Obsah:** ručně psaný v `data/es.js` a `data/ru.js`. Ruština nese vyznačený přízvuk.
- **Rozhraní** je česky. Cílový jazyk se zobrazuje odlišně od rozhraní.
- **Otevřené rozhodnutí:** současný španělský obsah je laděný hlavně na cestovní situace. Cíl „plynulé rozhovory“ si časem žádá víc konverzačního obsahu (názory, vyprávění, reakce v dialogu). Rozsah a podoba zatím nejsou rozhodnuté.

## Brand Commitments

- Název: **Jazyky**.
- Bez XP, bodů, sérií, žebříčků, odznaků a statistik času stráveného učením. Jediné povolené číslo je funkční údaj, například kolik slov čeká na zopakování.
- Kompletně zdarma a bez AI.
- Vzhled: standard moderní aplikace, žádný vlastní tematický svět. Měřítkem řemesla jsou Apple (Poznámky, Fitness) a Things 3: klid, přesná typografie, jemné detaily.

## Evidence on Hand

- Reálný obsah: 230 španělských a 184 ruských slovíček, 50 a 42 vět, po 5 textech ke čtení, gramatické sady a 38 a 33 sloves.
- Uživatelé ani reference neexistují a nemají se vymýšlet. Jde o soukromý nástroj.

## Product Principles

1. **Učení, ne hra.** Motivace má vycházet z obsahu a pocitu pokroku v jazyce, ne z odměn a čísel.
2. **Krátká chvíle i dlouhé sezení.** Každé cvičení musí jít rozumně udělat na telefonu za pár minut i na počítači v delším bloku.
3. **Funguje kdekoli.** Žádná závislost na připojení, účtu ani placené službě.
4. **Poctivá zpětná vazba.** Ukázat, co přesně bylo špatně, a u nejednoznačných odpovědí nechat rozhodnout uživatele místo falešné jistoty.
5. **Dva jazyky, dvě strategie.** Španělština táhne ke konverzaci, ruština ke stavění systematického základu.
