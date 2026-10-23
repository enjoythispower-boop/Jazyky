/* Španělština B1 – další slovíčka: bydlení, technika, lidé, volný čas, úřady a latinskoamerické výrazy */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b1', {
    vocab: [
      { name: 'Ubytování a hostel', words: T(`
        el dormitorio compartido|společný pokoj (v hostelu)
        la litera|palanda
        el casillero|skříňka (na zámek)
        el candado|visací zámek
        la sábana|prostěradlo
        la almohada|polštář
        la toalla|ručník
        la cobija (LatAm) / la manta|deka
        el ventilador|větrák
        el aire acondicionado|klimatizace
        el agua caliente|teplá voda
        el baño compartido|společná koupelna
        hacer el check-in|ubytovat se
        registrarse|zapsat se; registrovat se
        el huésped|host (v hotelu)
        la recepción|recepce
        el mosquitero|moskytiéra
        el desayuno incluido|snídaně v ceně
        la tarifa|sazba; cena
        cancelar|zrušit
        disponible|volný; k dispozici
        lleno/a|plný; obsazený
        ruidoso/a|hlučný
        tranquilo/a|klidný
        la estancia|pobyt`) },

      { name: 'Doma a v kuchyni', words: T(`
        la cocina|kuchyně; sporák
        el refrigerador / la heladera (AR)|lednice
        la estufa (MX)|sporák
        el horno|trouba
        la olla|hrnec
        la sartén|pánev
        el plato|talíř; jídlo (chod)
        el vaso|sklenice
        la taza|hrnek; šálek
        hervir|vařit (vodu); vřít
        freír|smažit
        cortar|krájet; řezat
        pelar|loupat
        mezclar|míchat (smíchat)
        lavar los platos|mýt nádobí
        el fregadero|dřez
        la basura|odpadky
        sacar la basura|vynést odpadky
        el piso|podlaha; patro; byt (ES)
        la pared|zeď
        el techo|strop; střecha
        el enchufe|zásuvka
        la luz|světlo; elektřina
        prender (LatAm) / encender|zapnout
        apagar|vypnout`) },

      { name: 'Telefon a internet', words: T(`
        el celular (LatAm) / el móvil|mobil
        el cargador|nabíječka
        la batería|baterie
        cargar el celular|nabít mobil
        la señal|signál
        la red|síť
        la contraseña|heslo
        conectarse|připojit se
        descargar|stáhnout
        subir una foto|nahrát fotku
        el mensaje|zpráva
        mandar un mensaje|poslat zprávu
        la llamada|hovor
        colgar|zavěsit
        la computadora (LatAm) / el ordenador|počítač
        la pantalla|obrazovka
        el chip / la tarjeta SIM|SIM karta
        recargar saldo|dobít kredit
        los datos|data (mobilní)
        la aplicación|aplikace
        funcionar|fungovat
        estar descompuesto/a (MX)|být rozbitý; nefungovat`) },

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

      { name: 'Povaha a vlastnosti', words: T(`
        simpático/a|sympatický; milý
        antipático/a|nesympatický
        trabajador/a|pracovitý
        perezoso/a / flojo/a (LatAm)|líný
        generoso/a|štědrý
        tacaño/a|lakomý
        tolerante|tolerantní
        terco/a|tvrdohlavý
        paciente|trpělivý
        impaciente|netrpělivý
        honesto/a|poctivý
        mentiroso/a|prolhaný
        educado/a|zdvořilý; slušně vychovaný
        grosero/a|hrubý; sprostý
        gracioso/a|vtipný
        serio/a|vážný
        valiente|statečný
        miedoso/a|bojácný
        tranquilo/a / relajado/a|klidný; v pohodě
        nervioso/a|nervózní
        celoso/a|žárlivý
        responsable|zodpovědný
        despistado/a|roztržitý
        curioso/a|zvědavý`) },

      { name: 'Čas a frekvence', words: T(`
        anoche|včera večer; včera v noci
        anteayer|předevčírem
        pasado mañana|pozítří
        la semana pasada|minulý týden
        el mes que viene|příští měsíc
        dentro de dos días|za dva dny
        hace una hora|před hodinou
        desde|od (časově)
        hasta|až do
        durante|během
        a tiempo|včas
        tarde|pozdě; odpoledne
        temprano|brzy
        pronto|brzy (za chvíli)
        ahorita (MX)|hned; za chvilku
        siempre|vždycky
        nunca|nikdy
        casi nunca|skoro nikdy
        a menudo|často
        de vez en cuando|občas
        cada día|každý den
        dos veces por semana|dvakrát týdně
        mientras tanto|mezitím
        al rato (MX)|za chvíli; později`) },

      { name: 'Volný čas a sport', words: T(`
        el tiempo libre|volný čas
        salir de fiesta / ir de carrete (CL)|jít pařit
        bailar|tancovat
        el partido|zápas
        el equipo|tým; vybavení
        el gol|gól
        perder|prohrát; ztratit
        empatar|remizovat
        nadar|plavat
        bucear|potápět se
        surfear|surfovat
        hacer senderismo|chodit na túry
        escalar|lézt; šplhat
        andar en bici|jezdit na kole
        el concierto|koncert
        la entrada|vstupenka; vstup
        la película|film
        el cine|kino
        la serie|seriál
        aburrido/a|nudný; znuděný
        divertirse|bavit se
        aburrirse|nudit se
        el pasatiempo|koníček
        la cancha|hřiště (sportovní)
        la carrera|závod; studium (obor)`) },

      { name: 'Kultura a památky', words: T(`
        las ruinas|ruiny; zříceniny
        el templo|chrám
        la pirámide|pyramida
        el sitio arqueológico|archeologické naleziště
        la catedral|katedrála
        el convento|klášter
        la época colonial|koloniální doba
        los indígenas / los pueblos originarios|domorodí obyvatelé
        el idioma|jazyk (řeč)
        la costumbre|zvyk
        la tradición|tradice
        la fiesta patronal|slavnost patrona (obce)
        el Día de Muertos|Den mrtvých (MX)
        la artesanía|řemeslné výrobky
        el tejido|tkanina; tkaní
        la exposición|výstava
        la obra de arte|umělecké dílo
        el pintor / la pintora|malíř; malířka
        el siglo|století
        la guerra|válka
        la independencia|nezávislost
        el guía / la guía|průvodce; průvodkyně
        la visita guiada|prohlídka s průvodcem
        construir|stavět`) },

      { name: 'Úřady, banka a bezpečnost', words: T(`
        el pasaporte|pas
        la visa|vízum
        el sello|razítko
        la migración|imigrační úřad; pasová kontrola
        el formulario|formulář
        llenar un formulario|vyplnit formulář
        firmar|podepsat
        la embajada|velvyslanectví
        la comisaría|policejní stanice
        la denuncia|trestní oznámení
        robar|ukrást; okrást
        el robo|krádež
        el ladrón / la ladrona|zloděj; zlodějka
        perder la cartera|ztratit peněženku
        el billetero / la cartera|peněženka
        la tarjeta de crédito|kreditní karta
        bloquear la tarjeta|zablokovat kartu
        retirar dinero|vybrat peníze
        la comisión|poplatek; provize
        cambiar dinero|směnit peníze
        la casa de cambio|směnárna
        ¡Cuidado!|Pozor!
        ¡Auxilio! / ¡Socorro!|Pomoc!
        peligroso/a|nebezpečný`) },

      { name: 'Zvířata a příroda', words: T(`
        el animal|zvíře
        el perro|pes
        el gato|kočka
        el pájaro|pták
        el mono|opice
        la tortuga|želva
        la ballena|velryba
        el delfín|delfín
        el tiburón|žralok
        la serpiente / la culebra|had
        el mosquito / el zancudo (LatAm)|komár
        la araña|pavouk
        el caballo|kůň
        la vaca|kráva
        la llama|lama
        el cóndor|kondor
        el loro|papoušek
        el árbol|strom
        la flor|květina
        la planta|rostlina
        la arena|písek
        la piedra|kámen
        el desierto|poušť
        el glaciar|ledovec`) },

      { name: 'Ve městě a na silnici', words: T(`
        el colectivo (AR) / la combi (MX)|městský autobus; dodávka
        el metro|metro
        la estación|stanice; nádraží
        el andén|nástupiště
        la línea|linka
        el boleto sencillo|jednosměrná jízdenka
        bajarse|vystoupit
        subirse|nastoupit
        el pasaje (LatAm)|jízdné; jízdenka
        el taxímetro|taxametr
        la gasolinera|benzínka
        la gasolina / la nafta (AR)|benzín
        el estacionamiento|parkoviště
        estacionar|zaparkovat
        el tráfico / el tránsito|doprava; provoz
        el atasco / el embotellamiento|zácpa
        el peatón|chodec
        la acera / la banqueta (MX) / la vereda (AR)|chodník
        la avenida|třída; bulvár
        la glorieta / la rotonda|kruhový objezd
        el semáforo en rojo|červená na semaforu
        la multa|pokuta`) },

      { name: 'Slovesa každodenního života', words: T(`
        abrir|otevřít
        cerrar|zavřít
        empezar / comenzar|začít
        terminar|skončit; dokončit
        esperar|čekat; doufat
        buscar|hledat
        encontrar|najít
        llevar|nést; mít na sobě; brát s sebou
        traer|přinést
        dejar|nechat; přestat
        poner|dát; položit
        sacar|vytáhnout; vyndat
        ayudar|pomoct
        necesitar|potřebovat
        intentar|zkusit
        lograr|dokázat; dosáhnout
        preguntar|ptát se
        responder / contestar|odpovědět
        explicar|vysvětlit
        entender|rozumět
        recordar|pamatovat si; připomenout
        decidir|rozhodnout se
        elegir|vybrat si
        cambiar|změnit; vyměnit
        quedarse|zůstat
        volver / regresar|vrátit se
        llegar tarde|přijít pozdě
        pasar|projít; stát se; strávit (čas)
        conseguir|sehnat; získat
        resolver|vyřešit`) },

      { name: 'Konverzační reakce', words: T(`
        ¿En serio?|Vážně?
        ¡No me digas!|Nepovídej!
        ¡Qué bien!|To je dobře!
        ¡Qué pena! / ¡Qué lástima!|To je škoda!
        ¡Qué suerte!|To je štěstí!
        ¡Qué horror!|To je hrůza!
        No pasa nada.|To nic. / Nevadí.
        No te preocupes.|Neboj se. / Nedělej si starosti.
        Claro que sí.|Jasně že ano.
        Por supuesto.|Samozřejmě.
        Depende.|Záleží na tom.
        Tienes razón.|Máš pravdu.
        No estoy de acuerdo.|Nesouhlasím.
        A mí también.|Mně taky.
        A mí tampoco.|Mně taky ne.
        ¿Qué tal te fue?|Jak to šlo? / Jak ses měl?
        ¿Cómo que no?|Jak to, že ne?
        Ya veo.|Aha. / Chápu.
        Mmm, a ver…|Hmm, uvidíme… / Ukaž…
        Bueno…|No… / Dobře…
        Oye, …|Hele, …
        Mira, …|Podívej, …
        ¡Buen viaje!|Šťastnou cestu!
        ¡Que te vaya bien!|Ať se ti daří!
        ¡Felicidades!|Gratuluju!
        ¡Salud!|Na zdraví!
        Con permiso.|S dovolením.
        Disculpa la molestia.|Promiň, že obtěžuju.
        Me da gusto (LatAm).|Těší mě. / Mám radost.
        ¡Ánimo!|Hlavu vzhůru!`) },

      { name: 'Latinskoamerické výrazy', words: T(`
        chévere (CO, VE) / bacán (CL, PE)|skvělý; super
        padre (MX) / copado (AR)|super; parádní
        la plata (LatAm)|peníze
        el carro (LatAm) / el auto|auto
        el departamento (LatAm)|byt
        el bondi (AR)|autobus (hovorově)
        tomar (LatAm)|vzít; pít; jet (autobusem)
        ¿Mande? (MX)|Prosím? (když jsem neslyšel)
        ¿Qué onda? (MX)|Jak to jde? / Co se děje?
        ¡Órale! (MX)|Jasně! / Páni!
        ¡Che! (AR)|Hele! / Hej!
        el chamo / la chama (VE)|kluk; holka
        el pibe / la piba (AR)|kluk; holka
        el cuate (MX)|kámoš
        la chamba (MX, PE)|práce (hovorově)
        estar crudo/a (MX)|mít kocovinu
        la guagua (CU, PR)|autobus
        la guagua (CL, BO)|miminko
        al toque (AR, PE)|hned; okamžitě
        ¡Qué rico!|To je dobrota!
        ¡Ya!|Jasně! / Hotovo! / Dost!
        ¿Cachai? (CL)|Chápeš?
        vos (AR, UY)|ty (argentinsky)
        el boliche (AR)|klub; diskotéka
        de una (CO)|jasně; hned`) },

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
    ],
  });
})();
