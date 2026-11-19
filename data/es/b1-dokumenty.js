/* Španělština B1 – skutečné formáty: lístky, zprávy, cedule (doc: 'paper' nebo 'chat') */
(function () {
  JZ.add('es', 'b1', {
    texts: [
      {
        title: 'Comedor Doña Lupe', place: 'Oaxaca, México', doc: 'paper',
        t: `## Comedor Doña Lupe
~ cocina oaxaqueña · abierto de 1 a 6
# Menú del día · $85
~ incluye sopa, plato fuerte y agua del día
# Sopa
Sopa de fideo | incluida
Caldo de pollo | incluido
# Plato fuerte
Mole negro con pollo | incluido
Enchiladas de queso con frijoles | incluidas
Tlayuda con tasajo | incluida
Chiles rellenos de queso | incluidos
# Bebidas
Agua de jamaica | incluida
Refresco | $25
Café de olla | $20
~ No aceptamos tarjeta. Gracias por su visita.`,
        cz: `## Jídelna paní Lupe
~ oaxacká kuchyně · otevřeno od 1 do 6
# Denní menu · 85 pesos
~ zahrnuje polévku, hlavní jídlo a nápoj dne
# Polévka
Nudlová polévka | v ceně
Kuřecí vývar | v ceně
# Hlavní jídlo
Černé mole s kuřetem | v ceně
Sýrové enchiladas s fazolemi | v ceně
Tlayuda se sušeným hovězím | v ceně
Papriky plněné sýrem | v ceně
# Nápoje
Ibiškový nápoj | v ceně
Limonáda | 25 pesos
Káva z hrnce | 20 pesos
~ Kartu nebereme. Děkujeme za návštěvu.`,
        gloss: {
          'Comedor': 'jídelna; levná restaurace', 'cocina oaxaqueña': 'oaxacká kuchyně', 'Menú del día': 'denní menu', 'incluye': 'zahrnuje',
          'plato fuerte': 'hlavní jídlo', 'agua del día': 'nápoj dne (ovocná voda)', 'Caldo de pollo': 'kuřecí vývar', 'frijoles': 'fazole',
          'tasajo': 'sušené a grilované hovězí', 'Chiles rellenos': 'plněné papriky', 'Agua de jamaica': 'studený nápoj z ibišku',
          'Refresco': 'limonáda', 'No aceptamos tarjeta': 'kartu nebereme',
        },
        q: [
          ['Nejíš maso a chceš si k menu dát kávu. Kolik zaplatíš?', ['85 pesos', '105 pesos', '110 pesos'], 1],
          ['Které hlavní jídlo je bez masa?', ['Mole negro', 'Enchiladas de queso', 'Tlayuda con tasajo'], 1],
          ['Jak zaplatíš?', ['Kartou', 'Jen hotově', 'Převodem'], 1],
        ],
      },
      {
        title: 'Mensajes del hostal', place: 'Cusco, Perú', doc: 'chat', me: 'Yo',
        t: `Hoy
Hostal Inti: ¡Hola! Te escribimos del Hostal Inti. ¿A qué hora llegas mañana?
Yo: Hola, mi bus llega a las 6 de la mañana. ¿Puedo dejar la mochila antes del check-in?
Hostal Inti: Claro, puedes dejarla en la recepción. El check-in es a partir de la 1.
Hostal Inti: Si quieres, puedes desayunar con nosotros. Cuesta 15 soles.
Yo: Perfecto, gracias. ¿Cómo llego desde la terminal?
Hostal Inti: Toma un taxi oficial, no más de 10 soles. Dile al taxista que estamos en la calle Siete Cuartones, cerca de la Plaza de Armas.
Yo: ¡Muchas gracias! Nos vemos mañana.`,
        cz: `Dnes
Hostel Inti: Ahoj! Píšeme z hostelu Inti. V kolik zítra přijedeš?
Já: Ahoj, můj autobus přijede v 6 ráno. Můžu si nechat batoh ještě před ubytováním?
Hostel Inti: Jasně, můžeš ho nechat na recepci. Ubytování je od 1 odpoledne.
Hostel Inti: Jestli chceš, můžeš s námi posnídat. Stojí to 15 solů.
Já: Výborně, díky. Jak se dostanu z terminálu?
Hostel Inti: Vezmi si oficiální taxi, ne za víc než 10 solů. Řekni taxikáři, že jsme v ulici Siete Cuartones, blízko Plaza de Armas.
Já: Moc díky! Uvidíme se zítra.`,
        gloss: {
          'Te escribimos': 'píšeme ti', 'dejar la mochila': 'nechat si batoh', 'a partir de': 'od (času)', 'desayunar': 'snídat',
          '¿Cómo llego': 'jak se dostanu', 'la terminal': 'autobusový terminál', 'no más de': 'ne víc než', 'Dile al taxista': 'řekni taxikáři',
        },
        q: [
          ['Kdy se můžeš ubytovat?', ['V 6 ráno', 'Od 1 odpoledne', 'Večer'], 1],
          ['Kolik má stát taxi z terminálu?', ['Nejvýš 10 solů', '15 solů', '20 solů'], 0],
          ['Co můžeš udělat hned ráno?', ['Ubytovat se', 'Nechat batoh na recepci', 'Jít na výlet s hostelem'], 1],
        ],
      },
      {
        title: 'Horarios de buses', place: 'Antigua, Guatemala', doc: 'paper',
        t: `## Shuttle Antigua
~ salidas diarias desde el parque central
# Antigua → Lago de Atitlán
Salida 8:00 | llegada 11:00 · Q150
Salida 14:00 | llegada 17:00 · Q150
# Antigua → Aeropuerto de Guatemala
Salida 4:00 | llegada 5:00 · Q100
Salida cada 2 horas | de 6:00 a 18:00 · Q100
# Antigua → Chichicastenango
~ solo jueves y domingos, día de mercado
Salida 7:00 | regreso 15:00 · Q200 ida y vuelta
~ Reserve con un día de anticipación. Equipaje grande: Q20 extra.`,
        cz: `## Kyvadlová doprava Antigua
~ denní odjezdy z centrálního parku
# Antigua → jezero Atitlán
Odjezd 8:00 | příjezd 11:00 · 150 quetzalů
Odjezd 14:00 | příjezd 17:00 · 150 quetzalů
# Antigua → letiště Guatemala
Odjezd 4:00 | příjezd 5:00 · 100 quetzalů
Odjezd každé 2 hodiny | od 6:00 do 18:00 · 100 quetzalů
# Antigua → Chichicastenango
~ jen ve čtvrtek a v neděli, v den trhu
Odjezd 7:00 | návrat 15:00 · 200 quetzalů tam i zpět
~ Rezervujte den předem. Velké zavazadlo: o 20 quetzalů víc.`,
        gloss: {
          'salidas diarias': 'denní odjezdy', 'Salida': 'odjezd', 'llegada': 'příjezd', 'cada 2 horas': 'každé 2 hodiny',
          'regreso': 'návrat', 'ida y vuelta': 'tam i zpět', 'con un día de anticipación': 'den předem', 'Equipaje': 'zavazadlo',
        },
        q: [
          ['Chceš být u jezera Atitlán před polednem. Který spoj vezmeš?', ['V 8:00', 'Ve 14:00', 'Ve 4:00'], 0],
          ['Kdy se dá jet na trh do Chichicastenanga?', ['Každý den', 'Ve čtvrtek a v neděli', 'Jen v sobotu'], 1],
          ['Kolik zaplatíš na letiště s velkým kufrem?', ['100 quetzalů', '120 quetzalů', '150 quetzalů'], 1],
        ],
      },
      {
        title: 'Reglas de la casa', place: 'Medellín, Colombia', doc: 'paper',
        t: `## Bienvenidos a Casa Verde
~ por favor, lee estas reglas antes de subir a tu cuarto
# Horarios
Desayuno | de 7:30 a 10:00
Silencio | de 23:00 a 7:00
Salida de las habitaciones | antes de las 11:00
# Cocina
Puedes usar la cocina hasta las 22:00.
Lava tus platos después de usarlos.
Marca tu comida con tu nombre en el refrigerador.
# Importante
No se permite fumar dentro de la casa.
Las visitas solo pueden quedarse hasta las 21:00.
~ ¿Necesitas algo? Escríbenos a la recepción, estamos las 24 horas.`,
        cz: `## Vítejte v Casa Verde
~ přečti si prosím tato pravidla, než půjdeš na pokoj
# Časy
Snídaně | od 7:30 do 10:00
Klid | od 23:00 do 7:00
Odhlášení z pokojů | před 11:00
# Kuchyně
Kuchyni můžeš používat do 22:00.
Po použití si umyj nádobí.
Označ si jídlo v lednici svým jménem.
# Důležité
V domě se nesmí kouřit.
Návštěvy smějí zůstat jen do 21:00.
~ Potřebuješ něco? Napiš na recepci, jsme tu 24 hodin denně.`,
        gloss: {
          'Bienvenidos': 'vítejte', 'antes de subir': 'než půjdeš nahoru', 'Silencio': 'klid; ticho', 'Salida de las habitaciones': 'odhlášení z pokojů',
          'Lava tus platos': 'umyj si nádobí', 'Marca': 'označ', 'el refrigerador': 'lednice', 'No se permite fumar': 'kouřit se nesmí',
          'Las visitas': 'návštěvy', 'quedarse': 'zůstat',
        },
        q: [
          ['Do kolika můžeš vařit?', ['Do 21:00', 'Do 22:00', 'Do 23:00'], 1],
          ['Kamarád za tebou přijde v osm večer. Jak dlouho smí zůstat?', ['Do 21:00', 'Do 23:00', 'Přes noc'], 0],
          ['Co máš udělat s jídlem v lednici?', ['Nic', 'Napsat na něj jméno', 'Vyhodit ho večer'], 1],
        ],
      },
    ],
  });
})();
