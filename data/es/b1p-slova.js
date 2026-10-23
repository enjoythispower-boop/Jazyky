/* Španělština B1+ – slovíčka (1/2): názory, vyprávění, vztahy, práce, studium, peníze */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b1p', {
    vocab: [
      { name: 'Vyjádřit názor', words: T(`
        en mi opinión|podle mého názoru
        desde mi punto de vista|z mého pohledu
        a mi parecer|podle mě
        opinar|mít názor; myslet si
        estar a favor de|být pro
        estar en contra de|být proti
        convencer|přesvědčit
        la ventaja|výhoda
        la desventaja|nevýhoda
        el argumento|argument
        la postura|postoj
        suponer|předpokládat
        dudar|pochybovat
        negar|popřít
        afirmar|tvrdit
        admitir|připustit
        reconocer|uznat; poznat
        sin duda|bezpochyby
        en realidad|ve skutečnosti
        por un lado|na jednu stranu
        por otro lado|na druhou stranu
        Es evidente que…|Je zřejmé, že…
        No me cabe duda de que…|Nepochybuju, že…
        Lo que pasa es que…|Jde o to, že…
        ¿Tú qué opinas?|Co si o tom myslíš ty?`) },

      { name: 'Vyprávění příběhu', words: T(`
        de pronto|najednou
        de golpe|naráz; zčistajasna
        en aquel momento|v tu chvíli
        aquel día|ten den
        al día siguiente|druhý den
        unos días después|o pár dní později
        poco después|krátce nato
        a partir de entonces|od té doby
        justo cuando|zrovna když
        al final|nakonec
        finalmente|nakonec; konečně
        entonces|tehdy; pak
        más tarde|později
        resulta que…|ukázalo se, že…
        total, que…|zkrátka…; no a tak…
        la anécdota|historka
        el recuerdo|vzpomínka
        ocurrir / suceder|stát se; přihodit se
        darse cuenta de|uvědomit si
        contar una historia|vyprávět příběh
        Érase una vez…|Byl jednou jeden…
        ¿Y qué pasó?|A co se stalo?
        ¿Y luego?|A pak?
        ¡No te lo vas a creer!|Nebudeš tomu věřit!
        Fue increíble.|Bylo to neuvěřitelné.`) },

      { name: 'Láska a přátelství', words: T(`
        enamorarse de|zamilovat se do
        estar enamorado/a|být zamilovaný
        el amor|láska
        la amistad|přátelství
        salir con alguien|chodit s někým
        romper con alguien|rozejít se s někým
        echar de menos|stýskat se (po)
        tener celos|žárlit
        la cita (romántica)|rande
        el compromiso|závazek; zasnoubení
        comprometerse|zasnoubit se; zavázat se
        casarse con|vzít si (koho)
        divorciarse|rozvést se
        el/la ex|ex (bývalý partner)
        perdonar|odpustit
        pedir perdón|omluvit se; poprosit o odpuštění
        la pelea|hádka; rvačka
        pelearse|pohádat se
        hacer las paces|usmířit se
        apoyar|podporovat
        el apoyo|podpora
        fiel|věrný
        el/la confidente|důvěrník
        llevarse mal|nevycházet spolu
        caerle bien a alguien|být někomu sympatický`) },

      { name: 'Práce a kariéra', words: T(`
        el puesto de trabajo|pracovní místo
        la entrevista de trabajo|pracovní pohovor
        el currículum|životopis
        solicitar un puesto|ucházet se o místo
        contratar|zaměstnat; najmout
        despedir|propustit
        renunciar|dát výpověď; vzdát se
        el contrato|smlouva
        el horario laboral|pracovní doba
        tiempo completo|plný úvazek
        medio tiempo|poloviční úvazek
        las prácticas|praxe; stáž
        el aumento de sueldo|zvýšení platu
        ascender|povýšit; být povýšen
        la experiencia|zkušenost; praxe
        el desempleo|nezaměstnanost
        estar en paro (ES) / estar desempleado/a|být nezaměstnaný
        el/la autónomo/a|osoba samostatně výdělečně činná
        trabajar desde casa|pracovat z domova
        el/la cliente/a|zákazník; klient
        la empresa emergente|startup
        el plazo|termín; lhůta
        estar estresado/a|být ve stresu
        tomarse unas vacaciones|vzít si dovolenou
        conciliar trabajo y familia|skloubit práci a rodinu`) },

      { name: 'Studium a vzdělání', words: T(`
        la facultad|fakulta
        estudiar una carrera|studovat vysokou školu
        la licenciatura|bakalářské studium
        la maestría (LatAm) / el máster|magisterské studium
        la beca|stipendium
        aprobar|udělat (zkoušku)
        reprobar (LatAm) / suspender|propadnout (u zkoušky)
        el examen final|závěrečná zkouška
        la nota / la calificación|známka
        la materia / la asignatura|předmět
        el/la profesor/a universitario/a|vysokoškolský učitel
        la tarea (LatAm) / los deberes|domácí úkol
        investigar|zkoumat; bádat
        la investigación|výzkum
        el título|titul; diplom
        graduarse|absolvovat
        la escuela primaria|základní škola
        la secundaria / la prepa (MX)|střední škola
        aprender de memoria|naučit se nazpaměť
        el idioma extranjero|cizí jazyk
        dominar un idioma|ovládat jazyk
        el nivel|úroveň
        repasar|zopakovat si (látku)
        el apunte|poznámka (ze studia)
        matricularse / inscribirse|zapsat se`) },

      { name: 'Peníze a ekonomika', words: T(`
        la economía|ekonomika
        la crisis|krize
        la inflación|inflace
        subir los precios|zvyšovat ceny
        bajar|klesat; snížit
        el impuesto|daň
        la deuda|dluh
        deber dinero|dlužit peníze
        el préstamo|půjčka
        la hipoteca|hypotéka
        invertir|investovat
        la inversión|investice
        los ahorros|úspory
        el presupuesto|rozpočet
        ganarse la vida|vydělávat si na živobytí
        llegar a fin de mes|vyjít s penězi do konce měsíce
        costar un ojo de la cara|stát majlant
        ser una ganga|být výhodná koupě
        el gasto|výdaj
        la factura|faktura; účet (za služby)
        el salario mínimo|minimální mzda
        rico/a|bohatý; chutný
        pobre|chudý
        la pobreza|chudoba
        la desigualdad|nerovnost`) },

      { name: 'Média a internet', words: T(`
        las noticias|zprávy
        el periódico|noviny
        la revista|časopis
        el/la periodista|novinář
        el titular|titulek
        la entrevista|rozhovor (v médiích)
        las redes sociales|sociální sítě
        publicar|zveřejnit
        compartir|sdílet
        el seguidor / la seguidora|sledující; fanoušek
        dar «me gusta»|dát like
        el comentario|komentář
        la noticia falsa|falešná zpráva
        informarse|informovat se
        estar al día|být v obraze
        el anuncio|reklama; inzerát
        la publicidad|reklama (obecně)
        el pódcast|podcast
        transmitir en vivo|vysílat živě
        la privacidad|soukromí
        el algoritmo|algoritmus
        viral|virální
        el/la influencer|influencer
        desconectarse|odpojit se
        hacerse viral|stát se virálním`) },

      { name: 'Životní prostředí', words: T(`
        el medio ambiente|životní prostředí
        el cambio climático|klimatická změna
        la contaminación|znečištění
        contaminar|znečišťovat
        reciclar|recyklovat
        el reciclaje|recyklace
        los residuos|odpad
        el plástico|plast
        ahorrar energía|šetřit energií
        la energía solar|solární energie
        renovable|obnovitelný
        la sequía|sucho
        la inundación|povodeň
        el incendio forestal|lesní požár
        la deforestación|odlesňování
        proteger|chránit
        la especie en peligro de extinción|ohrožený druh
        el ecosistema|ekosystém
        sostenible|udržitelný
        la huella de carbono|uhlíková stopa
        el calentamiento global|globální oteplování
        desperdiciar|plýtvat
        la bolsa reutilizable|taška na více použití
        el transporte público|veřejná doprava
        la naturaleza|příroda`) },

      { name: 'Společnost a politika', words: T(`
        la sociedad|společnost
        el gobierno|vláda
        el presidente / la presidenta|prezident; prezidentka
        las elecciones|volby
        votar|volit; hlasovat
        el partido político|politická strana
        la ley|zákon
        el derecho|právo
        los derechos humanos|lidská práva
        la manifestación|demonstrace
        protestar|protestovat
        la huelga|stávka
        la corrupción|korupce
        la seguridad|bezpečnost
        la delincuencia|kriminalita
        la igualdad|rovnost
        la libertad|svoboda
        el/la ciudadano/a|občan; občanka
        el/la inmigrante|přistěhovalec
        emigrar|emigrovat; vystěhovat se
        la frontera abierta|otevřená hranice
        la mayoría|většina
        la minoría|menšina
        el debate|debata
        la encuesta|průzkum (veřejného mínění)`) },

      { name: 'Zdraví a životní styl', words: T(`
        llevar una vida sana|žít zdravě
        hacer ejercicio|cvičit; sportovat
        ponerse en forma|dostat se do formy
        la dieta equilibrada|vyvážená strava
        adelgazar / bajar de peso|zhubnout
        engordar / subir de peso|ztloustnout
        dejar de fumar|přestat kouřit
        el estrés|stres
        relajarse|uvolnit se; odpočinout si
        dormir la siesta|dát si siestu
        el insomnio|nespavost
        la salud mental|duševní zdraví
        la ansiedad|úzkost
        la depresión|deprese
        el/la psicólogo/a|psycholog; psycholožka
        la meditación|meditace
        la alergia|alergie
        la vacuna|očkování; vakcína
        la radiografía|rentgen
        la operación|operace
        recuperarse|zotavit se
        el síntoma|příznak
        sentirse fatal|cítit se hrozně
        estar de baja|být na nemocenské
        la urgencia / las urgencias|pohotovost`) },

      { name: 'Charakter a chování', words: T(`
        egoísta|sobecký
        vanidoso/a|ješitný; marnivý
        humilde|skromný
        ambicioso/a|ambiciózní
        creativo/a|kreativní
        optimista|optimistický
        pesimista|pesimistický
        sensible|citlivý
        sensato/a|rozumný
        responsable de sus actos|zodpovědný za své činy
        inmaduro/a|nevyzrálý
        cariñoso/a|něžný; láskyplný
        frío/a|chladný
        sincero/a|upřímný
        hipócrita|pokrytecký
        puntual|dochvilný
        impuntual|nedochvilný
        tener buen carácter|mít dobrou povahu
        tener mal genio|mít špatnou povahu; být vznětlivý
        ser buena onda (MX, AR)|být fajn člověk
        ser pesado/a|být otravný
        ser un pan de Dios|být dobrák od kosti
        el defecto|chyba; vada
        la virtud|ctnost
        comportarse|chovat se`) },

      { name: 'Slovesa s předložkou', words: T(`
        depender de|záviset na
        tratar de|snažit se; jednat o
        soñar con|snít o
        pensar en|myslet na
        contar con|počítat s; spoléhat na
        despedirse de|rozloučit se s
        preocuparse por|dělat si starosti o
        acostumbrarse a|zvyknout si na
        atreverse a|odvážit se
        negarse a|odmítnout (něco udělat)
        insistir en|trvat na
        arrepentirse de|litovat (čeho)
        fijarse en|všimnout si; dávat pozor na
        reírse de|smát se (komu, čemu)
        burlarse de|posmívat se
        aprovechar|využít
        alegrarse de|mít radost z
        olvidarse de|zapomenout na
        enterarse de|dozvědět se o
        ocuparse de|starat se o; zabývat se
        dedicarse a|věnovat se; živit se
        parecerse a|podobat se
        disfrutar de|užívat si
        tardar en|trvat (než se něco stane)
        quedar en|domluvit se na`) },
    ],
  });
})();
