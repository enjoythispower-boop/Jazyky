/* Španělština B1 – fráze: hotové věty a slovní spojení z běžných situací */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b1', {
    phrases: [
      { name: 'Seznámení a první hovor', items: T(`
        ¿De dónde eres?|Odkud jsi?
        Soy de la República Checa.|Jsem z České republiky.
        Mucho gusto, ¿cómo te llamas?|Těší mě, jak se jmenuješ?
        ¿A qué te dedicas?|Čím se živíš?
        ¿Cuánto tiempo llevas aquí?|Jak dlouho už tu jsi?
        Llevo dos semanas viajando.|Cestuju už dva týdny.
        ¿Es tu primera vez en México?|Jsi v Mexiku poprvé?
        Hablo un poco de español.|Mluvím trochu španělsky.
        ¿Hace mucho que vives aquí?|Bydlíš tu už dlouho?
        ¿Qué me recomiendas visitar por aquí?|Co mi tady doporučíš navštívit?
        Me está encantando el viaje.|Cesta mě moc baví.
        ¿Nos tomamos una foto?|Vyfotíme se spolu?
        Fue un placer conocerte.|Rád jsem tě poznal.
        Nos vemos por ahí.|Tak se někde uvidíme.`) },

      { name: 'V restauraci a kavárně', items: T(`
        Una mesa para dos, por favor.|Stůl pro dva, prosím.
        ¿Nos trae la carta, por favor?|Přinesete nám jídelní lístek, prosím?
        ¿Qué me recomienda?|Co byste mi doporučil?
        Para mí, el menú del día.|Pro mě denní menu.
        ¿Qué lleva este plato?|Co je v tomhle jídle?
        Sin picante, por favor.|Nepálivé, prosím.
        No como carne, ¿qué me puede ofrecer?|Nejím maso, co mi můžete nabídnout?
        ¿Me puede traer un vaso de agua?|Můžete mi přinést sklenici vody?
        Está riquísimo.|Je to výborné.
        La cuenta, por favor.|Účet, prosím.
        ¿Puedo pagar con tarjeta?|Můžu platit kartou?
        ¿Está incluida la propina?|Je v tom zahrnuté spropitné?
        ¿Me lo puede empacar para llevar?|Můžete mi to zabalit s sebou?
        Todo estuvo muy rico, gracias.|Všechno bylo moc dobré, díky.`) },

      { name: 'V obchodě a na trhu', items: T(`
        ¿Cuánto cuesta esto?|Kolik tohle stojí?
        ¿Cuánto es en total?|Kolik to dělá celkem?
        Solo estoy mirando, gracias.|Jen se dívám, díky.
        ¿Lo tiene en otra talla?|Máte to v jiné velikosti?
        ¿Me lo puedo probar?|Můžu si to vyzkoušet?
        Me queda grande.|Je mi to velké.
        Me lo llevo.|Vezmu si to.
        ¿Me hace un descuento?|Dáte mi slevu?
        Está un poco caro para mí.|Je to na mě trochu drahé.
        ¿Me da medio kilo de tomates?|Dáte mi půl kila rajčat?
        ¿Tiene cambio de quinientos?|Rozměníte mi pětistovku?
        No tengo efectivo.|Nemám hotovost.
        ¿Me da una bolsa, por favor?|Dáte mi tašku, prosím?
        ¿A qué hora cierran?|V kolik zavíráte?`) },

      { name: 'Na cestě a v dopravě', items: T(`
        ¿Cómo llego al centro?|Jak se dostanu do centra?
        ¿Está lejos de aquí?|Je to odsud daleko?
        ¿Se puede ir caminando?|Dá se tam dojít pěšky?
        Siga derecho dos cuadras.|Jděte dva bloky rovně.
        Está a la vuelta de la esquina.|Je to hned za rohem.
        ¿Qué autobús va al aeropuerto?|Který autobus jede na letiště?
        ¿Dónde compro el boleto?|Kde si koupím jízdenku?
        ¿Este autobús pasa por el centro?|Jede tenhle autobus přes centrum?
        ¿Me avisa cuando lleguemos?|Řeknete mi, až tam budeme?
        Me bajo en la próxima.|Vystupuju na příští.
        ¿Cuánto cuesta el pasaje?|Kolik stojí jízdné?
        ¿Cuánto me cobra hasta el centro?|Kolik si řeknete do centra? (taxi)
        ¿A qué hora sale el último autobús?|V kolik jede poslední autobus?
        Me perdí, ¿me puede ayudar?|Zabloudil jsem, můžete mi pomoct?`) },

      { name: 'Ubytování', items: T(`
        Tengo una reservación para esta noche.|Mám rezervaci na dnešní noc.
        ¿Tienen habitaciones libres?|Máte volné pokoje?
        ¿Cuánto cuesta la noche?|Kolik stojí jedna noc?
        ¿El desayuno está incluido?|Je v tom snídaně?
        ¿A qué hora hay que dejar la habitación?|Do kolika musím uvolnit pokoj?
        ¿Cuál es la contraseña del wifi?|Jaké je heslo k wifi?
        ¿Puedo dejar la mochila aquí?|Můžu si tu nechat batoh?
        No hay agua caliente.|Neteče teplá voda.
        El aire acondicionado no funciona.|Nefunguje klimatizace.
        ¿Me puede dar otra toalla?|Můžete mi dát další ručník?
        Quisiera quedarme una noche más.|Rád bych zůstal ještě jednu noc.
        ¿Me puede pedir un taxi?|Můžete mi zavolat taxi?`) },

      { name: 'U lékaře a v lékárně', items: T(`
        No me siento bien.|Necítím se dobře.
        Me duele el estómago.|Bolí mě břicho.
        Tengo fiebre desde ayer.|Mám horečku od včerejška.
        Necesito ver a un médico.|Potřebuju k lékaři.
        ¿Dónde está la farmacia más cercana?|Kde je nejbližší lékárna?
        ¿Tiene algo para la tos?|Máte něco na kašel?
        Soy alérgico a la penicilina.|Jsem alergický na penicilin.
        ¿Necesito receta?|Potřebuju na to recept?
        ¿Cada cuánto lo tomo?|Jak často to mám brát?
        Me picó un mosquito.|Štípl mě komár.
        Me torcí el tobillo.|Vyvrtl jsem si kotník.
        ¿Me da un comprobante para el seguro?|Dáte mi potvrzení pro pojišťovnu?
        Llame a una ambulancia, por favor.|Zavolejte prosím sanitku.`) },

      { name: 'Když nerozumím', items: T(`
        ¿Puede repetirlo, por favor?|Můžete to zopakovat, prosím?
        Más despacio, por favor.|Pomaleji, prosím.
        No entendí bien.|Moc jsem nerozuměl.
        ¿Qué significa esta palabra?|Co znamená tohle slovo?
        ¿Cómo se dice esto en español?|Jak se tohle řekne španělsky?
        ¿Cómo se escribe?|Jak se to píše?
        ¿Me lo puede escribir?|Můžete mi to napsat?
        Perdón, ¿qué dijiste?|Promiň, cos říkal?
        Todavía estoy aprendiendo español.|Španělštinu se ještě učím.
        ¿Habla inglés?|Mluvíte anglicky?
        ¿Lo dije bien?|Řekl jsem to správně?
        ¿A qué te refieres?|Co tím myslíš?`) },

      { name: 'Domluva a plány', items: T(`
        ¿Qué vas a hacer hoy?|Co dneska děláš?
        ¿Tienes planes para el fin de semana?|Máš plány na víkend?
        ¿Te gustaría ir a la playa?|Chtěl bys jít na pláž?
        ¿Vamos por un café?|Půjdeme na kafe?
        ¿A qué hora nos vemos?|V kolik se sejdeme?
        ¿Dónde quedamos?|Kde se sejdeme?
        Nos vemos en la plaza a las siete.|Sejdeme se na náměstí v sedm.
        Me parece bien.|To zní dobře.
        Hoy no puedo, ¿qué tal mañana?|Dneska nemůžu, co zítra?
        Voy a llegar un poco tarde.|Přijdu trochu pozdě.
        Ya voy en camino.|Už jsem na cestě.
        Avísame cuando llegues.|Dej mi vědět, až dorazíš.
        Te espero aquí.|Počkám tu na tebe.`) },

      { name: 'Prosby, díky a omluvy', items: T(`
        ¿Me puede ayudar, por favor?|Můžete mi prosím pomoct?
        ¿Me hace un favor?|Uděláte mi laskavost?
        ¿Le molesta si abro la ventana?|Vadí vám, když otevřu okno?
        Muchas gracias por todo.|Moc děkuju za všechno.
        Muy amable.|To je od vás moc milé.
        No hay de qué.|Není zač.
        Perdón por la tardanza.|Promiňte, že jdu pozdě.
        Lo siento, fue sin querer.|Promiň, nebylo to schválně.
        Disculpe, ¿está ocupado este asiento?|Promiňte, je tohle místo obsazené?
        Con permiso, me bajo aquí.|S dovolením, tady vystupuju.
        No se preocupe.|Nedělejte si starosti.
        Gracias por la invitación.|Díky za pozvání.
        Te debo una.|Mám to u tebe.`) },

      { name: 'Problémy a nouze', items: T(`
        ¡Ayúdeme, por favor!|Pomozte mi, prosím!
        Me robaron la cartera.|Ukradli mi peněženku.
        Perdí mi pasaporte.|Ztratil jsem pas.
        ¿Dónde está la policía?|Kde je policie?
        Quiero poner una denuncia.|Chci podat trestní oznámení.
        Mi celular no tiene batería.|Mám vybitý mobil.
        ¿Puedo cargar el celular aquí?|Můžu si tu nabít mobil?
        El cajero se tragó mi tarjeta.|Bankomat mi spolkl kartu.
        Necesito bloquear mi tarjeta.|Potřebuju si zablokovat kartu.
        Perdí el autobús.|Ujel mi autobus.
        Me cancelaron el vuelo.|Zrušili mi let.
        ¿Hay alguien que hable inglés?|Je tu někdo, kdo mluví anglicky?
        Es una emergencia.|Je to naléhavé.`) },

      { name: 'Telefon a zprávy', items: T(`
        ¿Me pasas tu número?|Dáš mi svoje číslo?
        Te mando un mensaje.|Pošlu ti zprávu.
        ¿Tienes WhatsApp?|Máš WhatsApp?
        No tengo señal aquí.|Nemám tu signál.
        Se cortó la llamada.|Hovor se přerušil.
        Te marco más tarde.|Zavolám ti později.
        ¿Me escuchas?|Slyšíš mě?
        No te escucho bien.|Špatně tě slyším.
        ¿Hay wifi aquí?|Je tu wifi?
        Se me acabaron los datos.|Došla mi data.
        ¿Dónde puedo comprar un chip?|Kde si můžu koupit SIM kartu?
        Te mando la ubicación.|Pošlu ti polohu.`) },

      { name: 'Častá slovní spojení', items: T(`
        hacer una pregunta|položit otázku
        tomar una decisión|rozhodnout se
        tener prisa|spěchat
        darse prisa|pospíšit si
        dar un paseo|jít se projít
        tomar algo|dát si něco (k pití)
        pasarla bien|užít si to; mít se dobře
        hacer caso|poslechnout (koho); dbát (na co)
        perder el tiempo|ztrácet čas
        cumplir años|mít narozeniny
        hacer falta|být potřeba
        poner atención|dávat pozor
        pedir un favor|požádat o laskavost
        sacar una foto|vyfotit (něco)`) },
    ],
  });
})();
