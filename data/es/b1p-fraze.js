/* Španělština B1+ – fráze: diskuse, zdvořilé prosby, stížnosti a ustálená spojení */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b1p', {
    phrases: [
      { name: 'Diskuse a názor', items: T(`
        Yo lo veo de otra manera.|Já to vidím jinak.
        No es para tanto.|Není to tak hrozné.
        En eso tienes toda la razón.|V tom máš naprostou pravdu.
        Hasta cierto punto, sí.|Do jisté míry ano.
        Depende de cómo lo mires.|Záleží na tom, jak se na to díváš.
        No lo había pensado así.|Takhle jsem o tom nepřemýšlel.
        ¿Y eso qué tiene que ver?|A co to s tím má společného?
        A mí no me convence.|Mě to nepřesvědčuje.
        Eso no es lo que quise decir.|Tak jsem to nemyslel.
        Puede que tengas razón.|Možná máš pravdu.
        Ahí está el problema.|V tom je ten problém.
        Visto así, tiene sentido.|Když se to vezme takhle, dává to smysl.`) },

      { name: 'Zdvořilé prosby a návrhy', items: T(`
        ¿Te importaría ayudarme con esto?|Nevadilo by ti mi s tím pomoct?
        ¿Podría hacerme un favor?|Mohl byste mi udělat laskavost?
        ¿Qué tal si vamos mañana?|Co kdybychom šli zítra?
        ¿Y si lo dejamos para otro día?|A co to nechat na jindy?
        Sería mejor que saliéramos temprano.|Bylo by lepší, kdybychom vyrazili brzy.
        Te agradecería que me avisaras.|Byl bych ti vděčný, kdybys mi dal vědět.
        ¿Le molestaría bajar un poco la música?|Vadilo by vám trochu ztlumit hudbu?
        Si no es molestia, ¿me presta su pluma?|Jestli to nevadí, půjčíte mi pero?
        ¿Me harías el favor de cerrar la puerta?|Zavřel bys prosím dveře?
        Preferiría quedarme en casa.|Raději bych zůstal doma.
        ¿Te parece bien a las ocho?|Hodí se ti to v osm?
        Cuando puedas, me llamas.|Až budeš moct, zavolej mi.`) },

      { name: 'Stížnosti a reklamace', items: T(`
        Quisiera hacer una reclamación.|Chtěl bych podat reklamaci.
        Esto no es lo que pedí.|Tohle jsem si neobjednal.
        Creo que hay un error en la cuenta.|Myslím, že je v účtu chyba.
        Me cobraron dos veces.|Naúčtovali mi to dvakrát.
        Lo compré ayer y ya no funciona.|Koupil jsem to včera a už to nefunguje.
        ¿Me pueden devolver el dinero?|Můžete mi vrátit peníze?
        Quiero hablar con el encargado.|Chci mluvit s vedoucím.
        Llevo media hora esperando.|Čekám už půl hodiny.
        No es la primera vez que pasa.|Neděje se to poprvé.
        Esto no puede ser.|Tohle přece nejde.
        ¿Qué solución me ofrecen?|Jaké řešení mi nabízíte?
        Espero que lo resuelvan pronto.|Doufám, že to brzy vyřešíte.`) },

      { name: 'Podpora a soucit', items: T(`
        Lo siento mucho.|Moc mě to mrzí.
        Cuenta conmigo.|Počítej se mnou.
        Ya verás que todo sale bien.|Uvidíš, že všechno dobře dopadne.
        Me alegro mucho por ti.|Moc ti to přeju.
        No te lo tomes a mal.|Neber si to zle.
        ¿Quieres hablar de eso?|Chceš si o tom promluvit?
        Tranquilo, no pasa nada.|V klidu, nic se neděje.
        Te entiendo perfectamente.|Naprosto ti rozumím.
        ¡Qué mala suerte!|To je smůla!
        Estoy aquí para lo que necesites.|Jsem tu, kdybys cokoli potřeboval.
        Lo hiciste muy bien.|Zvládl jsi to skvěle.
        ¡Te lo mereces!|Zasloužíš si to!
        Mi más sentido pésame.|Upřímnou soustrast.`) },

      { name: 'V práci a na úřadě', items: T(`
        ¿Me podría decir qué documentos necesito?|Mohl byste mi říct, jaké dokumenty potřebuju?
        ¿Dónde tengo que firmar?|Kde to mám podepsat?
        ¿Cuánto tarda el trámite?|Jak dlouho vyřízení trvá?
        ¿Hay que pedir cita?|Musí se objednat?
        Vengo a recoger mi pasaporte.|Jdu si vyzvednout pas.
        Me falta un documento.|Chybí mi jeden dokument.
        ¿Lo puedo hacer por internet?|Dá se to vyřídit přes internet?
        Te escribo para confirmar la reunión.|Píšu ti, abych potvrdil schůzku.
        ¿Podemos cambiar la reunión al jueves?|Můžeme přesunout poradu na čtvrtek?
        Lo tendré listo para el viernes.|Do pátku to budu mít hotové.
        Estoy hasta arriba de trabajo.|Mám práce nad hlavu.
        ¿Me lo puede explicar otra vez?|Můžete mi to vysvětlit ještě jednou?
        Quedo a la espera de su respuesta.|Těším se na vaši odpověď. (v e-mailu)`) },

      { name: 'Bydlení a domácnost', items: T(`
        Busco un departamento amueblado.|Hledám zařízený byt.
        ¿Están incluidos los servicios?|Jsou v tom zahrnuté energie?
        ¿Cuánto hay que dejar de depósito?|Kolik se skládá kauce?
        El calentador no funciona.|Nefunguje ohřívač vody.
        Hay una fuga de agua en el baño.|V koupelně teče voda.
        ¿Me puede mandar a alguien para arreglarlo?|Můžete mi poslat někoho, kdo to opraví?
        Los vecinos hacen mucho ruido.|Sousedi dělají velký hluk.
        ¿Te toca sacar la basura?|Jsi na řadě s vynášením odpadků?
        Hoy me toca cocinar a mí.|Dneska je řada na mně s vařením.
        ¿Dónde se tira el reciclaje?|Kam se hází tříděný odpad?
        Se fue la luz.|Vypadl proud.
        Me mudo el mes que viene.|Příští měsíc se stěhuju.`) },

      { name: 'Slovní spojení se slovesy', items: T(`
        tener en cuenta|brát v úvahu
        echar un vistazo|mrknout se (na co)
        llevarse una sorpresa|být překvapený
        tomar en serio|brát vážně
        hacer el ridículo|udělat ze sebe hlupáka
        dar por hecho|brát jako samozřejmost
        echar a perder|zkazit
        quedarse con las ganas|nechat si zajít chuť
        sacar provecho|vytěžit (z čeho)
        poner en marcha|spustit; uvést do chodu
        cambiar de opinión|změnit názor
        hacer las maletas|sbalit si kufry
        dar las gracias|poděkovat
        llevar la contraria|odporovat (komu)
        romper el hielo|prolomit ledy`) },

      { name: 'Společenské situace', items: T(`
        ¡Cuánto tiempo sin verte!|Dlouho jsme se neviděli!
        ¿Qué ha sido de tu vida?|Co je u tebe nového?
        ¿Qué tal te va en el trabajo?|Jak se ti daří v práci?
        Pasa, estás en tu casa.|Pojď dál, chovej se jako doma.
        ¿Te sirvo algo de tomar?|Můžu ti nabídnout něco k pití?
        Gracias, estoy bien así.|Díky, nic nepotřebuju.
        ¡Buen provecho!|Dobrou chuť!
        Me tengo que ir, se me hace tarde.|Musím jít, už je pozdě.
        Saluda a tu familia de mi parte.|Pozdravuj ode mě rodinu.
        ¡Que te diviertas!|Užij si to!
        ¡Que te mejores!|Brzy se uzdrav!
        Tenemos que vernos más seguido.|Musíme se vídat častěji.`) },
    ],
  });
})();
