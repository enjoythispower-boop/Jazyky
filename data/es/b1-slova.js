/* Španělština B1 – slovíčka (cesta Latinskou Amerikou, každodenní život) */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b1', {
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
  });
})();
