/* Španělština A2 – základní slovní zásoba (jídlo, město, nakupování, oblečení, příroda) */
(function () {
  const { T } = JZ;

  JZ.add('es', 'a2', {
    vocab: [
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
        el cuchillo|nůž
        el bocadillo / el sándwich|sendvič`) },

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
        el metro|metro
        la estación|stanice; nádraží
        el pasaporte|pas
        la oficina de correos|pošta`) },

      { name: 'Příroda a počasí', words: T(`
        el clima|podnebí; počasí
        llover|pršet
        la lluvia|déšť
        nublado|zataženo
        hace calor|je horko
        hace frío|je zima
        la tormenta|bouřka
        la montaña|hora
        la playa|pláž
        el lago|jezero
        el río|řeka
        la ola|vlna
        la isla|ostrov
        el paisaje|krajina
        la naturaleza|příroda`) },

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
        el recibo|účtenka
        la tienda|obchod
        la bolsa|taška
        la moneda|mince; měna
        el billete|bankovka
        abierto/a|otevřený
        cerrado/a|zavřený
        la oferta|nabídka; akce`) },

      { name: 'Doma a v kuchyni', words: T(`
        la cocina|kuchyně; sporák
        el refrigerador / la heladera (AR)|lednice
        la estufa (MX)|sporák
        el horno|trouba
        el plato|talíř; jídlo (chod)
        el vaso|sklenice
        la taza|hrnek; šálek
        cortar|krájet; řezat
        mezclar|míchat (smíchat)
        lavar los platos|mýt nádobí
        la basura|odpadky
        sacar la basura|vynést odpadky
        el piso|podlaha; patro; byt (ES)
        la pared|zeď
        el techo|strop; střecha
        la luz|světlo; elektřina
        prender (LatAm) / encender|zapnout
        apagar|vypnout`) },

      { name: 'Oblečení a vzhled', words: T(`
        la camisa|košile
        la camiseta / la playera (MX) / la remera (AR)|tričko
        los pantalones|kalhoty
        los pantalones cortos|kraťasy
        la falda / la pollera (AR)|sukně
        el vestido|šaty
        la chamarra (MX) / la campera (AR)|bunda
        el suéter / el buzo (AR)|svetr; mikina
        los zapatos|boty
        los tenis / las zapatillas|tenisky
        las sandalias|sandály
        el traje de baño|plavky
        la gorra|kšiltovka
        el sombrero|klobouk
        los lentes (LatAm) / las gafas|brýle
        ponerse|obléct si; nasadit si
        quitarse|svléct si; sundat
        quedar bien|slušet; padnout
        el pelo|vlasy
        alto/a|vysoký
        bajo/a|malý (postavou); nízký
        delgado/a / flaco/a|hubený
        rubio/a / güero/a (MX)|blonďatý; světlovlasý
        moreno/a|snědý; tmavovlasý`) },

      { name: 'Zvířata a příroda', words: T(`
        el animal|zvíře
        el perro|pes
        el gato|kočka
        el pájaro|pták
        el mono|opice
        la tortuga|želva
        el delfín|delfín
        la serpiente / la culebra|had
        el mosquito / el zancudo (LatAm)|komár
        la araña|pavouk
        el caballo|kůň
        la vaca|kráva
        la llama|lama
        el árbol|strom
        la flor|květina
        la planta|rostlina
        la arena|písek
        la piedra|kámen
        el desierto|poušť`) },

      { name: 'Na trhu a při vaření', words: T(`
        el kilo|kilo
        medio kilo|půl kila
        un pedazo de|kousek (čeho)
        la docena|tucet
        maduro/a|zralý
        fresco/a|čerstvý
        la fruta|ovoce
        el plátano / la banana|banán
        la piña|ananas
        la sandía|meloun
        el limón|citron; limetka
        la naranja|pomeranč
        el jitomate (MX) / el tomate|rajče
        la cebolla|cibule
        el ajo|česnek
        el chile (MX) / el ají (SA)|chilli paprička
        el maíz / el choclo (SA)|kukuřice
        la tortilla|tortilla (placka)
        el queso|sýr
        el huevo|vejce
        la harina|mouka
        el azúcar|cukr
        la sal|sůl
        el aceite|olej
        cocinar|vařit (jídlo)`) },

      { name: 'Lidé a tělo', words: T(`
        el amigo / la amiga|kamarád; kamarádka
        los padres|rodiče
        los hermanos|sourozenci
        el novio / la novia|přítel; přítelkyně
        la gente|lidé
        el cumpleaños|narozeniny
        el vecino / la vecina|soused; sousedka
        la farmacia|lékárna
        la espalda|záda
        el brazo|paže
        la pierna|noha
        el diente|zub
        cansado/a|unavený
        el/la bebé|miminko
        nacer|narodit se
        morir|zemřít
        soltero/a|svobodný
        casado/a|ženatý; vdaná
        el amor|láska
        rico/a|bohatý; chutný
        pobre|chudý`) },

      { name: 'Každý den', words: T(`
        el trabajo|práce
        la ropa|oblečení
        despertarse|probudit se
        levantarse|vstát
        ducharse|osprchovat se
        la llave|klíč
        a veces|někdy
        casi|skoro
        siempre|vždycky
        nunca|nikdy
        cada día|každý den
        la semana pasada|minulý týden
        temprano|brzy
        tarde|pozdě; odpoledne
        el mensaje|zpráva
        la llamada|hovor`) },

      { name: 'Základní slovesa', words: T(`
        abrir|otevřít
        cerrar|zavřít
        empezar / comenzar|začít
        terminar|skončit; dokončit
        buscar|hledat
        encontrar|najít
        ayudar|pomoct
        necesitar|potřebovat
        preguntar|ptát se
        entender|rozumět
        volver / regresar|vrátit se
        poner|dát; položit
        traer|přinést
        esperar|čekat; doufat`) },

      { name: 'Volný čas a reakce', words: T(`
        me encanta|moc se mi líbí
        bailar|tancovat
        nadar|plavat
        la película|film
        el cine|kino
        el concierto|koncert
        ¡Qué bien!|To je dobře!
        A mí también.|Mně taky.
        A mí tampoco.|Mně taky ne.
        Claro que sí.|Jasně že ano.
        Por supuesto.|Samozřejmě.
        ¡Salud!|Na zdraví!
        la canción|píseň
        el/la cantante|zpěvák; zpěvačka
        el gimnasio|posilovna
        el correo electrónico|e-mail
        las noticias|zprávy
        el periódico|noviny
        la revista|časopis`) },
    ],
  });
})();
