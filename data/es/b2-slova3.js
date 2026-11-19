/* Španělština B2 – slovíčka (3/3): abstraktní pojmy, slovesa a přídavná jména B2, obraty, krajina, text */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b2', {
    vocab: [
      { name: 'Abstraktní pojmy', words: T(`
        el enfoque|přístup; zaměření
        el ámbito|oblast; sféra
        el desafío|výzva
        la pauta|vodítko; vzorec
        el criterio|kritérium; úsudek
        el rasgo|rys
        la tendencia|trend; sklon
        el fenómeno|jev
        el impacto|dopad
        el auge|rozmach
        el equilibrio|rovnováha
        la incertidumbre|nejistota
        la amenaza|hrozba
        el alcance|dosah
        la carencia|nedostatek
        la coherencia|soudržnost
        la eficacia|účinnost
        la índole|povaha; druh
        el trasfondo|pozadí
        el vínculo afectivo|citové pouto
        la brecha|propast; mezera
        el desarrollo|rozvoj; vývoj
        la convivencia|soužití
        el bienestar|blahobyt; pohoda
      `) },
      { name: 'Slovesa B2', words: T(`
        abarcar|zahrnovat
        acarrear|způsobit; přinést s sebou
        agravar|zhoršit
        alentar|povzbudit
        aludir a|narážet na
        amenazar|hrozit
        aportar|přispět; přinést
        carecer de|postrádat
        conllevar|znamenat; mít za následek
        desencadenar|vyvolat; spustit
        destacar|vyniknout; zdůraznit
        disminuir|snížit se; ubývat
        fomentar|podporovat; rozvíjet
        impulsar|podnítit; pohánět
        involucrarse|zapojit se
        padecer|trpět (nemocí)
        plantearse|zvažovat; klást si (otázku)
        prevalecer|převládat
        promover|propagovat; prosazovat
        recurrir a|uchýlit se k
        resaltar|zdůraznit
        sobrellevar|snášet
        suscitar|vyvolat (zájem; debatu)
        tergiversar|překroutit
        vincular|propojit
        agradecer|děkovat; ocenit
        asumir|přijmout (odpovědnost)
        prescindir de|obejít se bez
        empeñarse en|trvat na; zarputile chtít
      `) },
      { name: 'Přídavná jména B2', words: T(`
        arriesgado/a|riskantní
        ajeno/a|cizí; nepatřící někomu
        cotidiano/a|každodenní
        escaso/a|vzácný; nedostatečný
        exhaustivo/a|vyčerpávající; důkladný
        hábil|šikovný
        idóneo/a|vhodný
        ineludible|nevyhnutelný
        inminente|bezprostřední
        leal|věrný; loajální
        minucioso/a|pečlivý; detailní
        novedoso/a|nový; inovativní
        obsoleto/a|zastaralý
        pésimo/a|mizerný
        precario/a|nejistý; chabý
        propenso/a a|náchylný k
        sutil|jemný; nenápadný
        tajante|rázný; kategorický
        vigente|platný
        vulnerable|zranitelný
        efímero/a|pomíjivý
        ambiguo/a|dvojznačný
        atrevido/a|odvážný; drzý
        ingenuo/a|naivní
      `) },
      { name: 'Příslovečné obraty', words: T(`
        a raíz de|v důsledku
        de antemano|předem
        de improviso|nečekaně
        a regañadientes|neochotně
        a ciegas|naslepo
        sin rodeos|bez okolků
        de sobra|víc než dost
        a duras penas|stěží
        a medias|napůl
        en vano|marně
        de inmediato|okamžitě
        cuanto antes|co nejdřív
        a la vez|zároveň
        en todo caso|v každém případě
        a lo largo de|během; podél
        a la vuelta de la esquina|za rohem; brzy
      `) },
      { name: 'Cestování pokročile', words: T(`
        la prórroga|prodloužení
        el contratiempo|nepříjemnost; komplikace
        la escala|mezipřistání
        el transbordo|přestup
        el itinerario|itinerář; plán cesty
        el mochilero / la mochilera|baťůžkář / baťůžkářka
        el albergue|ubytovna
        el equipaje de mano|příruční zavazadlo
        la tarjeta de embarque|palubní lístek
        extraviarse|ztratit se
        hacer dedo|stopovat
        el puesto fronterizo|hraniční přechod
        el pasaje|jízdenka; letenka (LatAm)
        la temporada alta|hlavní sezóna
        la temporada baja|mimosezóna
        trasnochar|ponocovat
      `) },
      { name: 'Hovorové obraty', words: T(`
        caer en la cuenta|dojít mi to
        hacer la vista gorda|přimhouřit oko
        no dar abasto|nestíhat
        pasarse de la raya|přestřelit; zajít příliš daleko
        poner a prueba|vyzkoušet; postavit na zkoušku
        salirse con la suya|prosadit si svou
        dar igual|být jedno
        echar en cara|vyčítat
        quedarse de piedra|zkamenět úžasem
        estar hasta la coronilla|mít toho plné zuby
        dar vueltas a algo|přemílat něco v hlavě
        tener buena pinta|vypadat dobře
        sacar adelante|dotáhnout; uživit
        andar con rodeos|chodit kolem horké kaše
        venir al caso|být k věci
        a la buena de Dios|nazdařbůh
      `) },
      { name: 'Pocity a reakce (slovesa)', words: T(`
        desilusionarse|zklamat se
        emocionarse|dojmout se; nadchnout se
        entusiasmarse|nadchnout se
        angustiarse|mít úzkost; trápit se
        conmoverse|být dojat
        resignarse|smířit se
        avergonzarse|stydět se
        indignarse|rozhořčit se
        ilusionarse|těšit se; dělat si naděje
        desanimarse|ztratit chuť
        lamentar|litovat
        envidiar|závidět
        añorar|stýskat se po
      `) },
      { name: 'Text a studium', words: T(`
        el párrafo|odstavec
        la bibliografía|bibliografie
        el borrador|koncept; návrh
        la tesis|diplomová práce; teze
        redactar|sepsat; formulovat
        subrayar|podtrhnout
        citar|citovat
        el índice|obsah; rejstřík
        la reseña|recenze
        el capítulo|kapitola
        el apartado|oddíl
        la fuente bibliográfica|literární zdroj
        el plagio|plagiát
        corregir|opravit
        la ortografía|pravopis
      `) },
      { name: 'Krajina Ameriky', words: T(`
        la cordillera|pohoří
        el altiplano|náhorní plošina
        la selva tropical|tropický prales
        el páramo|páramo (vysokohorská step)
        la quebrada|soutěska; potok
        la llanura|rovina
        el arrecife|korálový útes
        el manglar|mangrovy
        la pampa|pampa
        la laguna|laguna; jezírko
        el estrecho|průliv
        la desembocadura|ústí (řeky)
        el cráter|kráter
        la meseta|plošina
      `) },
    ],
  });
})();
