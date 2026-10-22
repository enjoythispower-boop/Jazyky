/* Španělština – obsah pro úroveň A2+ → B1 (s ohledem na Latinskou Ameriku) */
window.DATA = window.DATA || {};

(function () {
  // Pravidelné koncovky; nepravidelné tvary jsou přímo u sloves
  const END = {
    pres: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    ind:  { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    imp:  { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    subj: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] },
  };

  function conjugate(v, t) {
    if (v[t]) return v[t].split(',').map(s => s.trim());
    const inf = v.inf, end = inf.slice(-2), st = inf.slice(0, -2);
    if (t === 'fut') return ['é', 'ás', 'á', 'emos', 'éis', 'án'].map(e => (v.fs || inf) + e);
    if (t === 'cond') return ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'].map(e => (v.fs || inf) + e);
    if (t === 'perf') {
      const pp = v.pp || st + (end === 'ar' ? 'ado' : 'ido');
      return ['he', 'has', 'ha', 'hemos', 'habéis', 'han'].map(h => h + ' ' + pp);
    }
    return END[t][end].map(e => st + e);
  }

  const T = (s) => s.split('\n').map(l => l.trim()).filter(Boolean).map(l => l.split('|'));

  DATA.es = {
    code: 'es',
    name: 'Španělština',
    native: 'Español',
    level: 'A2+ → B1',
    glyph: 'ñ',
    chars: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
    modeWords: {
      slovicka: 'palabras', vety: 'frases', preklad: 'traducir', poslech: 'escuchar',
      cteni: 'leer', gramatika: 'gramática', casovani: 'verbos', moje: 'mis palabras',
    },

    /* ---------- Slovíčka ---------- */
    vocab: [
      { name: 'Cestování a doprava', words: T(`
        el boleto / el billete|jízdenka
        la parada de autobús|autobusová zastávka
        la terminal de autobuses|autobusové nádraží
        el equipaje|zavazadla
        la maleta|kufr
        la mochila|batoh
        el horario|jízdní řád; rozvrh
        la salida|odjezd; východ
        la llegada|příjezd
        el asiento|sedadlo
        perder el autobús|zmeškat autobus
        el retraso|zpoždění
        la frontera|hranice
        la aduana|celnice
        el vuelo|let
        hacer escala|přestupovat (při letu)
        el alojamiento|ubytování
        la reserva|rezervace
        el albergue / el hostal|hostel
        la habitación doble|dvoulůžkový pokoj
        alquilar|pronajmout si
        la carretera|silnice
        manejar (LatAm) / conducir|řídit (auto)
        de ida y vuelta|zpáteční
        el camión (MX)|autobus (v Mexiku)`) },

      { name: 'Jídlo a restaurace', words: T(`
        la cuenta|účet
        la propina|spropitné
        el menú del día|denní menu
        pedir|objednat si; požádat
        la bebida|nápoj
        el agua sin gas|neperlivá voda
        picante|pálivý
        el pollo|kuře
        la carne de res|hovězí maso
        el cerdo|vepřové; prase
        los mariscos|mořské plody
        el pescado|ryba (jídlo)
        las verduras|zelenina
        el arroz|rýže
        los frijoles|fazole
        el aguacate / la palta|avokádo
        el desayuno|snídaně
        el almuerzo|oběd
        la cena|večeře
        probar|ochutnat; vyzkoušet
        tener hambre|mít hlad
        tener sed|mít žízeň
        el mesero / el camarero|číšník
        la cuchara|lžíce
        el tenedor|vidlička
        el cuchillo|nůž`) },

      { name: 'Zdraví a tělo', words: T(`
        me duele la cabeza|bolí mě hlava
        el dolor de estómago|bolest břicha
        la farmacia|lékárna
        la receta|recept (od lékaře)
        el medicamento|lék
        la fiebre|horečka
        resfriado/a|nachlazený
        mareado/a|točí se mi hlava; nevolno
        la picadura|štípnutí
        el protector solar|opalovací krém
        el seguro médico|zdravotní pojištění
        la cita|termín (u lékaře); schůzka
        herido/a|zraněný
        la sangre|krev
        la espalda|záda
        la garganta|krk; hrdlo
        el tobillo|kotník
        la rodilla|koleno
        el brazo|paže
        la pierna|noha
        el diente|zub
        cansado/a|unavený
        sano/a|zdravý
        mejorarse|uzdravit se`) },

      { name: 'Město a cesta', words: T(`
        a la derecha|doprava; vpravo
        a la izquierda|doleva; vlevo
        todo recto / derecho|rovně
        la cuadra (LatAm)|blok (domů)
        la esquina|roh (ulice)
        cerca de|blízko
        lejos de|daleko od
        el barrio|čtvrť
        el mercado|trh
        la plaza|náměstí
        el puente|most
        el cajero automático|bankomat
        el banco|banka; lavička
        la iglesia|kostel
        el semáforo|semafor
        cruzar|přejít
        doblar / girar|zahnout
        seguir|pokračovat; následovat
        perderse|zabloudit
        la calle|ulice
        el edificio|budova
        la orilla|břeh`) },

      { name: 'Příroda a počasí', words: T(`
        el clima|podnebí; počasí
        llover|pršet
        la lluvia|déšť
        nublado|zataženo
        hace calor|je horko
        hace frío|je zima
        húmedo|vlhký
        la tormenta|bouřka
        el terremoto|zemětřesení
        el volcán|sopka
        la selva|džungle; prales
        la montaña|hora
        el cerro|kopec
        la playa|pláž
        el lago|jezero
        el río|řeka
        la ola|vlna
        el amanecer|svítání
        el atardecer|západ slunce
        la temporada de lluvias|období dešťů
        la isla|ostrov
        el sendero|stezka
        el paisaje|krajina
        la cascada|vodopád`) },

      { name: 'Lidé a vztahy', words: T(`
        conocer a alguien|poznat někoho
        llevarse bien|dobře spolu vycházet
        el amigo / la amiga|kamarád; kamarádka
        la pareja|partner; pár
        los padres|rodiče
        los hermanos|sourozenci
        el novio / la novia|přítel; přítelkyně
        divertido/a|zábavný
        amable|milý; laskavý
        tímido/a|stydlivý
        contar|vyprávět; počítat
        charlar|povídat si
        quedar con alguien|sejít se s někým
        la confianza|důvěra
        enojarse / enfadarse|rozzlobit se
        extrañar|stýskat se (po)
        acordarse de|vzpomenout si na
        mudarse|přestěhovat se
        la boda|svatba
        el vecino / la vecina|soused; sousedka
        la gente|lidé
        el cumpleaños|narozeniny`) },

      { name: 'Každodenní život a práce', words: T(`
        el trabajo|práce
        el sueldo|plat
        la empresa|firma
        el jefe / la jefa|šéf; šéfová
        la reunión|porada; schůzka
        ganar|vydělávat; vyhrát
        ahorrar|šetřit
        gastar|utrácet
        pedir prestado|půjčit si
        devolver|vrátit
        despertarse|probudit se
        levantarse|vstát
        ducharse|osprchovat se
        la ropa|oblečení
        la lavandería|prádelna
        limpiar|uklízet
        el alquiler|nájem
        la llave|klíč
        olvidar|zapomenout
        tardar|trvat (o čase)
        soler + infinitivo|mít ve zvyku
        acabar de + infinitivo|právě něco udělat`) },

      { name: 'Pocity a názory', words: T(`
        estar de acuerdo|souhlasit
        creo que…|myslím, že…
        me parece que…|zdá se mi, že…
        no estoy seguro|nejsem si jistý
        preocuparse|dělat si starosti
        tener miedo|bát se
        la esperanza|naděje
        orgulloso/a|hrdý
        decepcionado/a|zklamaný
        emocionado/a|nadšený
        agradecido/a|vděčný
        molestar|obtěžovat; vadit
        me encanta|moc se mi líbí
        me da igual|je mi to jedno
        tener ganas de|mít chuť na
        sentirse|cítit se
        la sorpresa|překvapení
        soportar|snést; vydržet
        confiar en|důvěřovat (komu)
        quejarse|stěžovat si
        valer la pena|stát za to
        dar miedo|nahánět strach`) },

      { name: 'Spojky a užitečné výrazy', words: T(`
        sin embargo|nicméně
        aunque|i když; ačkoli
        por eso|proto
        además|navíc
        en cambio|naproti tomu
        mientras|zatímco
        de repente|najednou
        todavía|ještě; stále
        ya no|už ne
        apenas|sotva
        a pesar de|navzdory
        en cuanto|jakmile
        hasta que|dokud (ne)
        antes de que|dřív než
        para que|aby
        por lo menos|aspoň
        a lo mejor|možná
        casi|skoro
        a veces|někdy
        de hecho|ve skutečnosti
        o sea|tedy; jinými slovy
        enseguida|hned
        por fin|konečně`) },

      { name: 'Peníze a nakupování', words: T(`
        el precio|cena
        caro/a|drahý
        barato/a|levný
        el cambio|drobné; směna
        la tarjeta|karta
        en efectivo|v hotovosti
        el descuento|sleva
        la talla|velikost (oblečení)
        probarse|vyzkoušet si (oblečení)
        ¿Cuánto cuesta?|Kolik to stojí?
        regatear|smlouvat
        el recibo|účtenka
        la tienda|obchod
        la bolsa|taška
        la moneda|mince; měna
        el billete|bankovka
        cobrar|účtovat; inkasovat
        abierto/a|otevřený
        cerrado/a|zavřený
        la oferta|nabídka; akce`) },
    ],

    /* ---------- Věty (skládání, překlad, poslech) ---------- */
    sentences: [
      ['¿Dónde está la parada del autobús?', 'Kde je autobusová zastávka?'],
      ['Quisiera un boleto de ida y vuelta a Oaxaca.', 'Chtěl bych zpáteční jízdenku do Oaxacy.'],
      ['El autobús sale a las ocho de la mañana.', 'Autobus odjíždí v osm ráno.'],
      ['Perdimos el último autobús y tuvimos que tomar un taxi.', 'Zmeškali jsme poslední autobus a museli jsme vzít taxi.'],
      ['¿Me puede traer la cuenta, por favor?', 'Můžete mi přinést účet, prosím?'],
      ['No me gusta la comida muy picante.', 'Nemám rád moc pálivé jídlo.'],
      ['Ayer fuimos a la playa porque hacía mucho calor.', 'Včera jsme šli na pláž, protože bylo velké horko.'],
      ['Cuando era niño, vivía en un pueblo pequeño.', 'Když jsem byl malý, žil jsem v malé vesnici.'],
      ['Llevo tres semanas viajando por Centroamérica.', 'Už tři týdny cestuji po Střední Americe.'],
      ['Hace dos años que estudio español.', 'Učím se španělsky dva roky.'],
      ['Si tengo tiempo, visitaré el volcán mañana.', 'Jestli budu mít čas, zítra navštívím sopku.'],
      ['Espero que no llueva durante la excursión.', 'Doufám, že během výletu nebude pršet.'],
      ['Es importante que lleves protector solar.', 'Je důležité, abys měl s sebou opalovací krém.'],
      ['Me duele la cabeza desde esta mañana.', 'Od rána mě bolí hlava.'],
      ['¿Sabes si hay un cajero automático cerca de aquí?', 'Nevíš, jestli je tady poblíž bankomat?'],
      ['Todavía no he visto las ruinas mayas.', 'Ještě jsem neviděl mayské ruiny.'],
      ['Ya he probado los tacos al pastor.', 'Už jsem ochutnal tacos al pastor.'],
      ['Tienes que doblar a la izquierda en la esquina.', 'Na rohu musíš zahnout doleva.'],
      ['Cuando llegué al hotel, la recepción ya estaba cerrada.', 'Když jsem dorazil do hotelu, recepce už byla zavřená.'],
      ['Mientras caminábamos por el mercado, empezó a llover.', 'Zatímco jsme procházeli trhem, začalo pršet.'],
      ['Mi hermana me dijo que vendría en diciembre.', 'Sestra mi řekla, že přijede v prosinci.'],
      ['Aunque estoy cansado, quiero salir esta noche.', 'I když jsem unavený, chci dnes večer jít ven.'],
      ['Te llamo en cuanto llegue a Lima.', 'Zavolám ti, jakmile dorazím do Limy.'],
      ['No creo que el museo esté abierto los lunes.', 'Nemyslím si, že je muzeum v pondělí otevřené.'],
      ['¿Podrías hablar un poco más despacio?', 'Mohl bys mluvit trochu pomaleji?'],
      ['Me encantaría volver a este país algún día.', 'Moc rád bych se do téhle země jednou vrátil.'],
      ['Acabo de llegar y todavía no conozco la ciudad.', 'Právě jsem přijel a ještě neznám město.'],
      ['Suelo desayunar fruta y café.', 'Obvykle snídám ovoce a kávu.'],
      ['Vale la pena ver el atardecer desde el cerro.', 'Stojí za to vidět západ slunce z kopce.'],
      ['Estoy buscando una habitación que tenga baño privado.', 'Hledám pokoj, který má vlastní koupelnu.'],
      ['El viaje en barco duró casi cuatro horas.', 'Cesta lodí trvala skoro čtyři hodiny.'],
      ['Se me olvidó el cargador en el hostal.', 'Zapomněl jsem nabíječku v hostelu.'],
      ['¿Cuánto tiempo se tarda en llegar a la frontera?', 'Jak dlouho trvá cesta na hranici?'],
      ['Prefiero viajar de día porque es más seguro.', 'Raději cestuji ve dne, protože je to bezpečnější.'],
      ['La gente aquí es muy amable con los turistas.', 'Lidé jsou tady k turistům moc milí.'],
      ['Si fuera rico, viajaría por todo el mundo.', 'Kdybych byl bohatý, cestoval bych po celém světě.'],
      ['Mañana tenemos que levantarnos muy temprano.', 'Zítra musíme vstávat hodně brzy.'],
      ['Le pedí al mesero una mesa junto a la ventana.', 'Požádal jsem číšníka o stůl u okna.'],
      ['Nunca había visto un paisaje tan bonito.', 'Nikdy předtím jsem neviděl tak krásnou krajinu.'],
      ['Por favor, avísame cuando estemos cerca.', 'Prosím, dej mi vědět, až budeme blízko.'],
      ['Hay que pagar en efectivo, no aceptan tarjeta.', 'Musí se platit hotově, kartu neberou.'],
      ['El guía nos explicó la historia de la ciudad.', 'Průvodce nám vysvětlil historii města.'],
      ['Me alegro de que te guste el viaje.', 'Jsem rád, že se ti cesta líbí.'],
      ['Estaba lloviendo cuando salimos del museo.', 'Pršelo, když jsme vycházeli z muzea.'],
      ['¿Has estado alguna vez en Guatemala?', 'Byl jsi někdy v Guatemale?'],
      ['Primero vamos a desayunar y después buscamos un taxi.', 'Nejdřív se nasnídáme a pak si najdeme taxi.'],
      ['No pude dormir porque los vecinos hacían mucho ruido.', 'Nemohl jsem spát, protože sousedi dělali velký hluk.'],
      ['Ojalá podamos ver ballenas mañana.', 'Kéž bychom zítra mohli vidět velryby.'],
      ['Te recomiendo que pruebes el ceviche.', 'Doporučuju ti, abys ochutnal ceviche.'],
      ['¿A qué hora cierra la farmacia?', 'V kolik zavírá lékárna?'],
    ],

    /* ---------- Texty ke čtení ---------- */
    texts: [
      {
        title: 'Un día en Antigua',
        level: 'A2+',
        t: `Llegamos a Antigua Guatemala un martes por la tarde, después de un viaje largo en un autobús lleno de gente. La ciudad nos sorprendió desde el primer momento: calles empedradas, casas de colores y tres volcanes alrededor.
Como estábamos cansados, buscamos un hostal barato cerca del parque central y dormimos casi diez horas. Al día siguiente, nos levantamos temprano para subir al volcán Pacaya. El guía nos contó que el volcán todavía está activo y que, a veces, se puede ver lava. No vimos lava, pero el paisaje valió la pena.
Por la noche, cenamos en un pequeño comedor donde una señora preparaba pepián, un plato típico con carne y una salsa espesa. Fue uno de los mejores días del viaje.`,
        cz: `Do Antiguy v Guatemale jsme dorazili v úterý odpoledne po dlouhé cestě autobusem plným lidí. Město nás překvapilo od první chvíle: dlážděné ulice, barevné domy a kolem tři sopky.
Protože jsme byli unavení, našli jsme si levný hostel blízko centrálního parku a spali jsme skoro deset hodin. Druhý den jsme vstali brzy, abychom vylezli na sopku Pacaya. Průvodce nám vyprávěl, že sopka je stále aktivní a že je někdy vidět láva. Lávu jsme neviděli, ale krajina za to stála.
Večer jsme povečeřeli v malé jídelně, kde jedna paní připravovala pepián, typické jídlo s masem a hustou omáčkou. Byl to jeden z nejlepších dnů cesty.`,
        gloss: {
          'lleno de gente': 'plný lidí', 'sorprendió': 'překvapil(a)', 'empedradas': 'dlážděné', 'alrededor': 'kolem',
          'Como': 'protože (na začátku věty)', 'Al día siguiente': 'druhý den', 'subir': 'vystoupat', 'contó': 'vyprávěl',
          'todavía': 'stále', 'valió la pena': 'stálo to za to', 'comedor': 'jídelna; levná restaurace', 'espesa': 'hustá',
        },
        q: [
          ['Jak se dostali do Antiguy?', ['Autobusem plným lidí', 'Letadlem', 'Taxíkem'], 0],
          ['Co viděli na sopce Pacaya?', ['Lávu', 'Nic, byla mlha', 'Krásnou krajinu, ale ne lávu'], 2],
          ['Co je pepián?', ['Typické jídlo s masem a omáčkou', 'Místní autobus', 'Jméno průvodce'], 0],
        ],
      },
      {
        title: 'En el mercado',
        level: 'A2+',
        t: `— Buenos días, señora. ¿A cuánto están los mangos?
— Buenos días, joven. Están a veinte pesos el kilo. Son de Veracruz, muy dulces.
— ¿Me puede dar dos kilos? Y también quisiera unos aguacates.
— Claro. ¿Los quiere maduros, para comerlos hoy, o para la semana?
— Para hoy, por favor. Vamos a preparar guacamole esta noche.
— Entonces le doy estos tres, que ya están listos. ¿Algo más?
— No, eso es todo. ¿Cuánto le debo?
— Son sesenta y cinco pesos.
— Aquí tiene cien. Disculpe, no tengo cambio.
— No se preocupe. Le doy treinta y cinco de vuelta. ¡Que disfrute el guacamole!`,
        cz: `— Dobrý den, paní. Za kolik jsou manga?
— Dobrý den, mladíku. Jsou za dvacet pesos kilo. Jsou z Veracruzu, moc sladká.
— Můžete mi dát dvě kila? A taky bych si vzal pár avokád.
— Jasně. Chcete je zralá, na dnešek, nebo na příští týden?
— Na dnešek, prosím. Dnes večer budeme dělat guacamole.
— Tak vám dám tyhle tři, ty už jsou hotové. Ještě něco?
— Ne, to je všechno. Kolik vám dlužím?
— Je to šedesát pět pesos.
— Tady máte sto. Promiňte, nemám drobné.
— Nedělejte si starosti. Dám vám třicet pět zpátky. Ať vám guacamole chutná!`,
        gloss: {
          '¿A cuánto están': 'za kolik jsou', 'joven': 'mladík; mladý', 'dulces': 'sladké', 'quisiera': 'chtěl bych (zdvořile)',
          'maduros': 'zralé', 'listos': 'hotové; připravené', '¿Cuánto le debo?': 'Kolik vám dlužím?', 'cambio': 'drobné',
          'de vuelta': 'zpátky (peníze)', 'Que disfrute': 'ať si užijete',
        },
        q: [
          ['Kolik stojí kilo mang?', ['20 pesos', '65 pesos', '35 pesos'], 0],
          ['Proč chce zralá avokáda?', ['Bude je jíst až příští týden', 'Večer dělá guacamole', 'Jsou levnější'], 1],
          ['Kolik dostane zpátky?', ['35 pesos', '65 pesos', 'Nic, platí přesně'], 0],
        ],
      },
      {
        title: 'Mi primer trabajo',
        level: 'B1',
        t: `Cuando tenía diecisiete años, encontré mi primer trabajo en una heladería. Trabajaba los fines de semana, desde las diez de la mañana hasta las seis de la tarde.
Al principio no me gustaba nada: los clientes tenían prisa, el jefe era muy estricto y yo siempre me equivocaba con el cambio. Sin embargo, poco a poco aprendí a hacerlo todo más rápido.
Un día, una clienta mayor me dijo que yo era el chico más amable de la heladería y me dejó una propina enorme. Ese día entendí que un trabajo sencillo también puede ser bonito. Ahorré casi todo el dinero que gané ese verano y, en septiembre, me compré mi primera bicicleta.`,
        cz: `Když mi bylo sedmnáct, našel jsem si první práci ve zmrzlinárně. Pracoval jsem o víkendech od deseti ráno do šesti večer.
Ze začátku se mi to vůbec nelíbilo: zákazníci spěchali, šéf byl hodně přísný a já se pořád pletl při vracení drobných. Postupně jsem se ale naučil dělat všechno rychleji.
Jednoho dne mi starší zákaznice řekla, že jsem ten nejmilejší kluk ve zmrzlinárně, a nechala mi obrovské spropitné. Ten den jsem pochopil, že i jednoduchá práce může být hezká. Skoro všechny peníze, které jsem to léto vydělal, jsem ušetřil a v září jsem si koupil své první kolo.`,
        gloss: {
          'heladería': 'zmrzlinárna', 'Al principio': 'zpočátku', 'tenían prisa': 'spěchali', 'estricto': 'přísný',
          'me equivocaba': 'pletl jsem se', 'Sin embargo': 'nicméně', 'poco a poco': 'postupně', 'mayor': 'starší',
          'me dejó': 'nechala mi', 'propina': 'spropitné', 'sencillo': 'jednoduchý', 'Ahorré': 'ušetřil jsem', 'gané': 'vydělal jsem',
        },
        q: [
          ['Kdy pracoval?', ['O víkendech', 'Každý den', 'Jen večer'], 0],
          ['Proč se mu práce zpočátku nelíbila?', ['Byla daleko od domu', 'Šéf byl přísný a pletl se s drobnými', 'Málo platili'], 1],
          ['Co si za vydělané peníze koupil?', ['Kolo', 'Telefon', 'Letenku'], 0],
        ],
      },
      {
        title: 'Consejos para viajar en autobús',
        level: 'B1',
        t: `Si vas a recorrer América Latina en autobús, hay algunas cosas que debes saber. Primero, compra el boleto con anticipación, sobre todo en temporada alta, porque los autobuses se llenan rápido.
Segundo, lleva siempre una chaqueta: aunque afuera haga calor, el aire acondicionado suele estar muy fuerte. Tercero, no pongas las cosas de valor en el equipaje grande; es mejor que las lleves contigo en una mochila pequeña.
Para los viajes nocturnos, te recomiendo que elijas un asiento cama, que es más caro pero mucho más cómodo. Y, por último, ten paciencia: los retrasos son normales y casi nunca se sabe exactamente a qué hora vas a llegar.`,
        cz: `Pokud se chystáš procestovat Latinskou Ameriku autobusem, je pár věcí, které bys měl vědět. Zaprvé kupuj jízdenku předem, hlavně v hlavní sezóně, protože se autobusy rychle zaplní.
Zadruhé měj vždycky s sebou bundu: i když je venku horko, klimatizace bývá hodně silná. Zatřetí nedávej cenné věci do velkého zavazadla; je lepší, když je budeš mít u sebe v malém batohu.
Na noční cesty ti doporučuju vybrat si sedadlo, které se dá sklopit do lehu. Je dražší, ale mnohem pohodlnější. A nakonec měj trpělivost: zpoždění jsou normální a skoro nikdy se neví, v kolik přesně dorazíš.`,
        gloss: {
          'recorrer': 'procestovat', 'con anticipación': 'předem', 'temporada alta': 'hlavní sezóna', 'se llenan': 'se zaplní',
          'afuera': 'venku', 'haga calor': 'je horko (konjunktiv)', 'suele estar': 'bývá', 'de valor': 'cenné', 'contigo': 's sebou; s tebou',
          'nocturnos': 'noční', 'elijas': 'vybral sis (konjunktiv od elegir)', 'asiento cama': 'sklopné sedadlo do lehu',
          'por último': 'nakonec', 'ten paciencia': 'měj trpělivost', 'retrasos': 'zpoždění',
        },
        q: [
          ['Proč mít v autobuse bundu?', ['Kvůli silné klimatizaci', 'V noci prší', 'Je to povinné'], 0],
          ['Kam dát cenné věci?', ['Do velkého zavazadla', 'Do malého batohu u sebe', 'Nechat je v hostelu'], 1],
          ['Co text říká o zpožděních?', ['Jsou výjimečná', 'Jsou běžná', 'Za zpoždění se vrací peníze'], 1],
        ],
      },
      {
        title: 'Un año en Buenos Aires',
        level: 'B1',
        t: `El próximo año voy a terminar mi viaje en Buenos Aires y, si encuentro trabajo, me quedaré allí unos meses. Me han dicho que la ciudad es enorme y que tiene una vida cultural increíble: teatros, librerías abiertas hasta la medianoche y cafés antiguos donde la gente pasa horas charlando.
Me gustaría alquilar un departamento pequeño en un barrio tranquilo, quizás en Palermo o en San Telmo. También tendré que acostumbrarme al acento porteño, porque allí no dicen «tú tienes», sino «vos tenés».
Al principio seguro que no entenderé nada, pero creo que con el tiempo lo aprenderé. Lo que más me preocupa es la inflación: dicen que los precios cambian cada mes.`,
        cz: `Příští rok zakončím cestu v Buenos Aires, a pokud najdu práci, zůstanu tam pár měsíců. Říkali mi, že město je obrovské a má neuvěřitelný kulturní život: divadla, knihkupectví otevřená do půlnoci a staré kavárny, kde lidé tráví hodiny povídáním.
Rád bych si pronajal malý byt v klidné čtvrti, možná v Palermu nebo v San Telmu. Taky si budu muset zvyknout na místní přízvuk, protože tam neříkají „tú tienes“, ale „vos tenés“.
Ze začátku určitě nebudu rozumět ničemu, ale myslím, že se to časem naučím. Nejvíc mi dělá starosti inflace: prý se ceny mění každý měsíc.`,
        gloss: {
          'me quedaré': 'zůstanu', 'Me han dicho': 'říkali mi', 'librerías': 'knihkupectví', 'medianoche': 'půlnoc',
          'charlando': 'povídáním; povídajíc si', 'departamento': 'byt (v LatAm)', 'quizás': 'možná', 'acostumbrarme': 'zvyknout si',
          'porteño': 'z Buenos Aires', 'vos tenés': 'ty máš (argentinsky)', 'con el tiempo': 'časem', 'me preocupa': 'dělá mi starosti',
        },
        q: [
          ['Co udělá, když najde práci?', ['Zůstane tam pár měsíců', 'Vrátí se domů', 'Pojede do Chile'], 0],
          ['Jak se v Buenos Aires řekne „tú tienes“?', ['vos tenés', 'usted tiene', 'vosotros tenéis'], 0],
          ['Co mu dělá největší starosti?', ['Přízvuk', 'Inflace', 'Bydlení'], 1],
        ],
      },
    ],

    /* ---------- Gramatika ---------- */
    grammar: [
      {
        id: 'ser-estar', name: 'Ser, nebo estar?',
        rule: `<b>SER</b> – kdo nebo co něco <i>je</i>: identita, povolání, původ, vlastnosti, čas a datum, kde se koná událost.<br><b>ESTAR</b> – <i>jak</i> nebo <i>kde</i> něco je: poloha, stav, nálada, výsledek děje, průběh (estar + gerundio).`,
        items: [
          ['Mi hermano ___ médico.', 'es', 'ser / estar', 'Můj bratr je lékař.'],
          ['La sopa ___ fría, no me gusta así.', 'está', 'ser / estar', 'Polévka je studená, takhle mi nechutná.'],
          ['¿Dónde ___ el baño?', 'está', 'ser / estar', 'Kde je záchod?'],
          ['Hoy ___ martes.', 'es', 'ser / estar', 'Dnes je úterý.'],
          ['Nosotros ___ muy cansados después del viaje.', 'estamos', 'ser / estar', 'Po cestě jsme hodně unavení.'],
          ['La fiesta ___ en casa de Ana.', 'es', 'ser / estar – událost', 'Večírek je u Any doma.'],
          ['Esta ciudad ___ muy bonita.', 'es', 'ser / estar', 'Tohle město je moc hezké.'],
          ['¿___ listo para salir?', 'Estás', 'ser / estar, tú', 'Jsi připravený vyrazit?'],
          ['El museo ___ cerrado los lunes.', 'está', 'ser / estar', 'Muzeum je v pondělí zavřené.'],
          ['Las ruinas ___ de la época maya.', 'son', 'ser / estar', 'Ruiny jsou z mayské doby.'],
          ['___ las tres de la tarde.', 'Son', 'ser / estar – čas', 'Jsou tři odpoledne.'],
          ['Mi madre ___ de Brno.', 'es', 'ser / estar', 'Moje máma je z Brna.'],
          ['¡Qué rico ___ este pan!', 'está', 'ser / estar – chuť', 'Ten chleba je ale dobrý!'],
          ['Los niños ___ jugando en el parque.', 'están', 'ser / estar – průběh', 'Děti si hrají v parku.'],
        ],
      },
      {
        id: 'ind-imp', name: 'Indefinido, nebo imperfecto?',
        rule: `<b>Indefinido</b> – ukončený, jednorázový děj (ayer, el año pasado, de repente, en 2019).<br><b>Imperfecto</b> – popis, okolnosti, zvyk, děj v průběhu (cuando era niño, siempre, mientras, todos los días).<br>Typicky: <i>Mientras dormía</i> (pozadí) <i>sonó el teléfono</i> (událost).`,
        items: [
          ['Cuando ___ niño, jugaba al fútbol todos los días.', 'era', 'ser, yo', 'Když jsem byl malý, hrál jsem každý den fotbal.'],
          ['Ayer ___ a las siete de la mañana.', 'me levanté', 'levantarse, yo', 'Včera jsem vstal v sedm ráno.'],
          ['Mientras yo dormía, ___ el teléfono.', 'sonó', 'sonar', 'Zatímco jsem spal, zazvonil telefon.'],
          ['El año pasado ___ a Perú por primera vez.', 'viajamos', 'viajar, nosotros', 'Loni jsme poprvé cestovali do Peru.'],
          ['Antes ___ mucho, pero ahora no fumo.', 'fumaba', 'fumar, yo', 'Dřív jsem hodně kouřil, ale teď nekouřím.'],
          ['___ las diez cuando llegamos al hotel.', 'Eran', 'ser', 'Bylo deset, když jsme dorazili do hotelu.'],
          ['De repente, ___ a llover.', 'empezó', 'empezar', 'Najednou začalo pršet.'],
          ['La casa ___ grande y tenía un jardín precioso.', 'era', 'ser', 'Dům byl velký a měl nádhernou zahradu.'],
          ['¿Qué ___ el fin de semana pasado?', 'hiciste', 'hacer, tú', 'Co jsi dělal minulý víkend?'],
          ['Cuando vivía en México, siempre ___ tacos los domingos.', 'comía', 'comer, yo', 'Když jsem žil v Mexiku, vždycky jsem v neděli jedl tacos.'],
          ['Ayer no ___ ir a la fiesta porque estaba enfermo.', 'pude', 'poder, yo', 'Včera jsem nemohl jít na večírek, protože jsem byl nemocný.'],
          ['Mi abuela siempre nos ___ historias antes de dormir.', 'contaba', 'contar', 'Babička nám vždycky před spaním vyprávěla příběhy.'],
          ['En 2019 ___ en Madrid durante seis meses.', 'viví', 'vivir, yo', 'V roce 2019 jsem půl roku žil v Madridu.'],
          ['Hacía sol y los niños ___ en la playa.', 'jugaban', 'jugar, ellos', 'Svítilo slunce a děti si hrály na pláži.'],
        ],
      },
      {
        id: 'por-para', name: 'Por, nebo para?',
        rule: `<b>PARA</b> – cíl, účel (aby), příjemce, termín, směr cesty, názor (para mí).<br><b>POR</b> – příčina (kvůli, díky), cena a výměna, pohyb skrz / po, přibližný čas (por la mañana), prostředek (por teléfono).`,
        items: [
          ['Gracias ___ tu ayuda.', 'por', 'por / para', 'Díky za tvou pomoc.'],
          ['Este regalo es ___ ti.', 'para', 'por / para', 'Tenhle dárek je pro tebe.'],
          ['Caminamos ___ el centro toda la tarde.', 'por', 'por / para', 'Celé odpoledne jsme chodili po centru.'],
          ['Mañana salgo ___ Bogotá.', 'para', 'por / para', 'Zítra odjíždím do Bogoty.'],
          ['Estudio español ___ poder hablar con la gente.', 'para', 'por / para', 'Učím se španělsky, abych mohl mluvit s lidmi.'],
          ['Pagué veinte dólares ___ la habitación.', 'por', 'por / para', 'Za pokoj jsem zaplatil dvacet dolarů.'],
          ['Tengo que terminar el trabajo ___ el viernes.', 'para', 'por / para', 'Musím dokončit práci do pátku.'],
          ['Te llamo ___ la noche.', 'por', 'por / para', 'Zavolám ti večer.'],
          ['___ mí, este es el mejor café de la ciudad.', 'Para', 'por / para', 'Podle mě je tohle nejlepší kavárna ve městě.'],
          ['El autobús pasa ___ Cusco antes de llegar a Puno.', 'por', 'por / para', 'Autobus projíždí Cuscem, než dorazí do Puna.'],
          ['Lo hice ___ ti, porque me lo pediste.', 'por', 'por / para', 'Udělal jsem to kvůli tobě, protože jsi mě o to požádal.'],
          ['Hablé con ella ___ teléfono.', 'por', 'por / para', 'Mluvil jsem s ní po telefonu.'],
          ['___ ser extranjero, hablas muy bien.', 'Para', 'por / para', 'Na cizince mluvíš moc dobře.'],
          ['Necesito un adaptador ___ el cargador.', 'para', 'por / para', 'Potřebuju adaptér na nabíječku.'],
        ],
      },
      {
        id: 'subjuntivo', name: 'Konjunktiv (subjuntivo)',
        rule: `Po výrazech přání, emocí, pochybnosti a hodnocení: <i>espero que, quiero que, es importante que, no creo que, me alegro de que, ojalá</i>. Dále po <i>para que, antes de que</i> a po <i>cuando</i>, když jde o budoucnost.<br>Tvoření: z tvaru „yo“ v přítomném čase vyměň samohlásku: -ar → <b>-e</b>, -er/-ir → <b>-a</b> (hablo → hable, tengo → tenga).`,
        items: [
          ['Espero que mañana ___ buen tiempo.', 'haga', 'hacer', 'Doufám, že zítra bude hezky.'],
          ['Quiero que me ___ la verdad.', 'digas', 'decir, tú', 'Chci, abys mi řekl pravdu.'],
          ['Es posible que el autobús ___ tarde.', 'llegue', 'llegar', 'Je možné, že autobus přijede pozdě.'],
          ['No creo que el banco ___ abierto a esta hora.', 'esté', 'estar', 'Nemyslím si, že je banka v tuhle dobu otevřená.'],
          ['Cuando ___ a Buenos Aires, te escribiré.', 'llegue', 'llegar, yo', 'Až dorazím do Buenos Aires, napíšu ti.'],
          ['Te doy mi número para que me ___.', 'llames', 'llamar, tú', 'Dám ti své číslo, abys mi zavolal.'],
          ['Ojalá ___ ver el volcán sin nubes.', 'podamos', 'poder, nosotros', 'Kéž bychom viděli sopku bez mraků.'],
          ['Busco un hostal que ___ cocina.', 'tenga', 'tener', 'Hledám hostel, který má kuchyň.'],
          ['Me alegro de que ___ aquí.', 'estés', 'estar, tú', 'Jsem rád, že jsi tady.'],
          ['Es necesario que ustedes ___ el pasaporte.', 'lleven', 'llevar, ustedes', 'Je nutné, abyste měli s sebou pas.'],
          ['Vamos a salir antes de que ___.', 'llueva', 'llover', 'Vyrazíme dřív, než začne pršet.'],
          ['Dudo que él ___ la respuesta.', 'sepa', 'saber', 'Pochybuju, že zná odpověď.'],
          ['Le pido que ___ más despacio, por favor.', 'hable', 'hablar, usted', 'Prosím vás, abyste mluvil pomaleji.'],
          ['No me gusta que la gente ___ basura en la playa.', 'tire', 'tirar', 'Nelíbí se mi, když lidé hází odpadky na pláži.'],
        ],
      },
      {
        id: 'perfecto', name: 'Předpřítomný čas (he hecho)',
        rule: `<b>haber</b> (he, has, ha, hemos, habéis, han) + příčestí (-ado, -ido). Pro děje s dosahem do přítomnosti: <i>hoy, este año, ya, todavía no, alguna vez, nunca</i>.<br>V Latinské Americe se místo něj často říká indefinido. Nepravidelná příčestí: <i>hecho, dicho, visto, puesto, vuelto, escrito, abierto, roto</i>.`,
        items: [
          ['Este año ___ mucho.', 'he viajado', 'viajar, yo', 'Letos jsem hodně cestoval.'],
          ['¿___ alguna vez en Cuba?', 'Has estado', 'estar, tú', 'Byl jsi někdy na Kubě?'],
          ['Todavía no ___ la cena.', 'hemos preparado', 'preparar, nosotros', 'Ještě jsme nepřipravili večeři.'],
          ['Hoy ___ un mensaje de mi madre.', 'he recibido', 'recibir, yo', 'Dnes jsem dostal zprávu od mámy.'],
          ['¿Quién ___ la ventana?', 'ha abierto', 'abrir', 'Kdo otevřel okno?'],
          ['Nunca ___ un libro entero en español.', 'he leído', 'leer, yo', 'Nikdy jsem nečetl celou knihu ve španělštině.'],
          ['Ellos ya ___ del viaje.', 'han vuelto', 'volver', 'Už se vrátili z cesty.'],
          ['¿Qué ___ hoy?', 'has hecho', 'hacer, tú', 'Cos dnes dělal?'],
          ['No ___ nada en todo el día.', 'he comido', 'comer, yo', 'Celý den jsem nic nejedl.'],
          ['Esta semana ___ mucho.', 'ha llovido', 'llover', 'Tento týden hodně pršelo.'],
          ['¿Ya ___ las noticias?', 'han visto', 'ver, ustedes', 'Už jste viděli zprávy?'],
          ['Mi hermano me ___ que viene en mayo.', 'ha dicho', 'decir', 'Bratr mi řekl, že přijede v květnu.'],
        ],
      },
      {
        id: 'zajmena', name: 'Zájmena lo, la, le, se lo',
        rule: `Přímý předmět (koho, co): <b>lo, la, los, las</b>. Nepřímý (komu): <b>le, les</b>.<br>Když jdou dvě zájmena za sebou, nepřímé je první a <b>le/les se mění na se</b>: <i>se lo doy</i> (dám mu to). Další dvojice: <i>me lo, te la, nos los</i>.`,
        items: [
          ['¿Tienes las llaves? — Sí, ___ tengo.', 'las', 'zájmeno', 'Máš klíče? — Ano, mám je.'],
          ['¿Compraste el pan? — Sí, ___ compré esta mañana.', 'lo', 'zájmeno', 'Koupil jsi chleba? — Ano, koupil jsem ho dnes ráno.'],
          ['¿Le diste el libro a Juan? — Sí, ___ di ayer.', 'se lo', 'dvě zájmena', 'Dal jsi Juanovi knihu? — Ano, dal jsem mu ji včera.'],
          ['¿Me prestas tu cargador? — Claro, ___ presto.', 'te lo', 'dvě zájmena', 'Půjčíš mi nabíječku? — Jasně, půjčím ti ji.'],
          ['A mi madre ___ encantan las flores.', 'le', 'zájmeno', 'Moje máma miluje květiny.'],
          ['¿Conoces a Marta? — No, no ___ conozco.', 'la', 'zájmeno', 'Znáš Martu? — Ne, neznám ji.'],
          ['¿Nos trae la cuenta, por favor? — Ahora mismo ___ traigo.', 'se la', 'dvě zájmena', 'Přinesete nám účet? — Hned vám ho přinesu.'],
          ['A nosotros no ___ gusta el frío.', 'nos', 'zájmeno', 'Nám se zima nelíbí.'],
          ['¿Dónde están mis gafas? No ___ encuentro.', 'las', 'zájmeno', 'Kde jsou moje brýle? Nemůžu je najít.'],
          ['A ellos ___ duele la cabeza.', 'les', 'zájmeno', 'Bolí je hlava.'],
          ['¿Escribiste a tus padres? — Sí, ___ escribí ayer.', 'les', 'zájmeno', 'Napsal jsi rodičům? — Ano, napsal jsem jim včera.'],
          ['Las fotos son preciosas. ¿___ mandas?', 'Me las', 'dvě zájmena', 'Fotky jsou nádherné. Pošleš mi je?'],
        ],
      },
    ],

    /* ---------- Časování ---------- */
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
      ],
      defaultTenses: ['pres', 'ind', 'imp'],
      conjugate,
      verbs: [
        { inf: 'hablar', cz: 'mluvit' },
        { inf: 'trabajar', cz: 'pracovat' },
        { inf: 'viajar', cz: 'cestovat' },
        { inf: 'comprar', cz: 'kupovat' },
        { inf: 'tomar', cz: 'vzít; pít' },
        { inf: 'comer', cz: 'jíst' },
        { inf: 'beber', cz: 'pít' },
        { inf: 'aprender', cz: 'učit se' },
        { inf: 'vivir', cz: 'žít; bydlet' },
        { inf: 'escribir', cz: 'psát', pp: 'escrito' },
        { inf: 'abrir', cz: 'otevřít', pp: 'abierto' },
        { inf: 'ser', cz: 'být (trvale)',
          pres: 'soy, eres, es, somos, sois, son', ind: 'fui, fuiste, fue, fuimos, fuisteis, fueron',
          imp: 'era, eras, era, éramos, erais, eran', subj: 'sea, seas, sea, seamos, seáis, sean' },
        { inf: 'estar', cz: 'být (stav, místo)',
          pres: 'estoy, estás, está, estamos, estáis, están', ind: 'estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron',
          subj: 'esté, estés, esté, estemos, estéis, estén' },
        { inf: 'ir', cz: 'jít; jet',
          pres: 'voy, vas, va, vamos, vais, van', ind: 'fui, fuiste, fue, fuimos, fuisteis, fueron',
          imp: 'iba, ibas, iba, íbamos, ibais, iban', subj: 'vaya, vayas, vaya, vayamos, vayáis, vayan' },
        { inf: 'tener', cz: 'mít', fs: 'tendr',
          pres: 'tengo, tienes, tiene, tenemos, tenéis, tienen', ind: 'tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron',
          subj: 'tenga, tengas, tenga, tengamos, tengáis, tengan' },
        { inf: 'hacer', cz: 'dělat', fs: 'har', pp: 'hecho',
          pres: 'hago, haces, hace, hacemos, hacéis, hacen', ind: 'hice, hiciste, hizo, hicimos, hicisteis, hicieron',
          subj: 'haga, hagas, haga, hagamos, hagáis, hagan' },
        { inf: 'poder', cz: 'moci', fs: 'podr',
          pres: 'puedo, puedes, puede, podemos, podéis, pueden', ind: 'pude, pudiste, pudo, pudimos, pudisteis, pudieron',
          subj: 'pueda, puedas, pueda, podamos, podáis, puedan' },
        { inf: 'querer', cz: 'chtít; mít rád', fs: 'querr',
          pres: 'quiero, quieres, quiere, queremos, queréis, quieren', ind: 'quise, quisiste, quiso, quisimos, quisisteis, quisieron',
          subj: 'quiera, quieras, quiera, queramos, queráis, quieran' },
        { inf: 'decir', cz: 'říct', fs: 'dir', pp: 'dicho',
          pres: 'digo, dices, dice, decimos, decís, dicen', ind: 'dije, dijiste, dijo, dijimos, dijisteis, dijeron',
          subj: 'diga, digas, diga, digamos, digáis, digan' },
        { inf: 'venir', cz: 'přijít', fs: 'vendr',
          pres: 'vengo, vienes, viene, venimos, venís, vienen', ind: 'vine, viniste, vino, vinimos, vinisteis, vinieron',
          subj: 'venga, vengas, venga, vengamos, vengáis, vengan' },
        { inf: 'poner', cz: 'dát; položit', fs: 'pondr', pp: 'puesto',
          pres: 'pongo, pones, pone, ponemos, ponéis, ponen', ind: 'puse, pusiste, puso, pusimos, pusisteis, pusieron',
          subj: 'ponga, pongas, ponga, pongamos, pongáis, pongan' },
        { inf: 'saber', cz: 'vědět; umět', fs: 'sabr',
          pres: 'sé, sabes, sabe, sabemos, sabéis, saben', ind: 'supe, supiste, supo, supimos, supisteis, supieron',
          subj: 'sepa, sepas, sepa, sepamos, sepáis, sepan' },
        { inf: 'salir', cz: 'odejít; vyjít', fs: 'saldr',
          pres: 'salgo, sales, sale, salimos, salís, salen', subj: 'salga, salgas, salga, salgamos, salgáis, salgan' },
        { inf: 'ver', cz: 'vidět', pp: 'visto',
          pres: 'veo, ves, ve, vemos, veis, ven', ind: 'vi, viste, vio, vimos, visteis, vieron',
          imp: 'veía, veías, veía, veíamos, veíais, veían', subj: 'vea, veas, vea, veamos, veáis, vean' },
        { inf: 'dar', cz: 'dát',
          pres: 'doy, das, da, damos, dais, dan', ind: 'di, diste, dio, dimos, disteis, dieron',
          subj: 'dé, des, dé, demos, deis, den' },
        { inf: 'conocer', cz: 'znát; poznat',
          pres: 'conozco, conoces, conoce, conocemos, conocéis, conocen', subj: 'conozca, conozcas, conozca, conozcamos, conozcáis, conozcan' },
        { inf: 'traer', cz: 'přinést', pp: 'traído',
          pres: 'traigo, traes, trae, traemos, traéis, traen', ind: 'traje, trajiste, trajo, trajimos, trajisteis, trajeron',
          subj: 'traiga, traigas, traiga, traigamos, traigáis, traigan' },
        { inf: 'pedir', cz: 'objednat; požádat',
          pres: 'pido, pides, pide, pedimos, pedís, piden', ind: 'pedí, pediste, pidió, pedimos, pedisteis, pidieron',
          subj: 'pida, pidas, pida, pidamos, pidáis, pidan' },
        { inf: 'dormir', cz: 'spát',
          pres: 'duermo, duermes, duerme, dormimos, dormís, duermen', ind: 'dormí, dormiste, durmió, dormimos, dormisteis, durmieron',
          subj: 'duerma, duermas, duerma, durmamos, durmáis, duerman' },
        { inf: 'volver', cz: 'vrátit se', pp: 'vuelto',
          pres: 'vuelvo, vuelves, vuelve, volvemos, volvéis, vuelven', subj: 'vuelva, vuelvas, vuelva, volvamos, volváis, vuelvan' },
        { inf: 'pensar', cz: 'myslet',
          pres: 'pienso, piensas, piensa, pensamos, pensáis, piensan', subj: 'piense, pienses, piense, pensemos, penséis, piensen' },
        { inf: 'empezar', cz: 'začít',
          pres: 'empiezo, empiezas, empieza, empezamos, empezáis, empiezan', ind: 'empecé, empezaste, empezó, empezamos, empezasteis, empezaron',
          subj: 'empiece, empieces, empiece, empecemos, empecéis, empiecen' },
        { inf: 'encontrar', cz: 'najít',
          pres: 'encuentro, encuentras, encuentra, encontramos, encontráis, encuentran', subj: 'encuentre, encuentres, encuentre, encontremos, encontréis, encuentren' },
        { inf: 'jugar', cz: 'hrát (si)',
          pres: 'juego, juegas, juega, jugamos, jugáis, juegan', ind: 'jugué, jugaste, jugó, jugamos, jugasteis, jugaron',
          subj: 'juegue, juegues, juegue, juguemos, juguéis, jueguen' },
        { inf: 'leer', cz: 'číst', pp: 'leído',
          ind: 'leí, leíste, leyó, leímos, leísteis, leyeron' },
        { inf: 'llegar', cz: 'dorazit; přijet',
          ind: 'llegué, llegaste, llegó, llegamos, llegasteis, llegaron', subj: 'llegue, llegues, llegue, lleguemos, lleguéis, lleguen' },
        { inf: 'buscar', cz: 'hledat',
          ind: 'busqué, buscaste, buscó, buscamos, buscasteis, buscaron', subj: 'busque, busques, busque, busquemos, busquéis, busquen' },
        { inf: 'pagar', cz: 'platit',
          ind: 'pagué, pagaste, pagó, pagamos, pagasteis, pagaron', subj: 'pague, pagues, pague, paguemos, paguéis, paguen' },
      ],
    },
  };
})();
