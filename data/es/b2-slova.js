/* Španělština B2 – slovíčka (1/2): debata, nuance, vztahy, práce, peníze, společnost, média, věda */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b2', {
    vocab: [
      { name: 'Debata a argumentace', words: T(`
        plantear|nastolit (otázku); navrhnout
        sostener|tvrdit; zastávat (názor)
        refutar|vyvrátit
        matizar|upřesnit; zjemnit (tvrzení)
        cuestionar|zpochybnit
        respaldar|podpořit
        el planteamiento|přístup; pojetí
        la premisa|předpoklad; premisa
        la falacia|klam; chybný argument
        el matiz|odstín; nuance
        el razonamiento|úvaha; uvažování
        la contradicción|rozpor
        coherente|soudržný; logický
        contundente|přesvědčivý; jasný
        discutible|sporný
        a fin de cuentas|nakonec; koneckonců
        por consiguiente|v důsledku toho
        dicho de otro modo|jinými slovy
        cabe destacar que…|je třeba zdůraznit, že…
        partir de la base de que…|vycházet z toho, že…
      `) },
      { name: 'Míra a opatrnost', words: T(`
        quizá|snad; možná
        tal vez|možná
        probablemente|pravděpodobně
        al parecer|zřejmě; jak se zdá
        en cierta medida|do jisté míry
        más bien|spíš
        de algún modo|nějakým způsobem
        hasta cierto punto|do jisté míry
        en principio|v zásadě
        prácticamente|prakticky
        aproximadamente|přibližně
        con toda seguridad|zcela jistě
        a primera vista|na první pohled
        me da la impresión de que…|mám dojem, že…
        no descarto que…|nevylučuju, že…
        es probable que…|je pravděpodobné, že…
        dudo mucho que…|velmi pochybuju, že…
        que yo sepa|pokud vím
      `) },
      { name: 'Nuance pocitů', words: T(`
        agobiado/a|zavalený; ve stresu
        desanimado/a|sklíčený
        ilusionado/a|plný očekávání; nadšený
        resentido/a|zahořklý; ukřivděný
        avergonzado/a|zahanbený
        conmovido/a|dojatý
        aliviado/a|ulevený
        harto/a|otrávený; mající dost
        indignado/a|rozhořčený
        la nostalgia|stesk; nostalgie
        la añoranza|stesk (po někom nebo něčem)
        el desconcierto|zmatení
        la frustración|frustrace
        la culpa|vina
        el rencor|zášť
        sentirse fuera de lugar|cítit se nepatřičně
        tener los nervios de punta|mít nervy na pochodu
        hacerse ilusiones|dělat si naděje
      `) },
      { name: 'Vztahy a konflikty', words: T(`
        el vínculo|pouto
        la complicidad|souhra; porozumění
        el malentendido|nedorozumění
        la discusión|hádka; diskuse
        la reconciliación|usmíření
        reprochar|vyčítat
        ceder|ustoupit
        traicionar|zradit
        llevarse bien con|dobře vycházet s
        caer bien|být sympatický
        caer mal|být nesympatický
        echarle la culpa a alguien|svalit vinu na někoho
        dar el brazo a torcer|ustoupit; povolit
        ponerse en el lugar de otro|vžít se do druhého
      `) },
      { name: 'Práce a pohovor', words: T(`
        la hoja de vida|životopis (LatAm)
        la vacante|volné místo
        el puesto|pracovní místo; pozice
        la jornada laboral|pracovní doba
        las prestaciones|benefity; zaměstnanecké výhody
        el ascenso|povýšení
        el despido|propuštění
        la renuncia|výpověď (ze strany zaměstnance)
        el compañero de trabajo|kolega
        postularse|ucházet se (o místo)
        negociar|vyjednávat
        delegar|delegovat
        cumplir con un plazo|dodržet termín
        estar a cargo de|mít na starosti
        trabajar por cuenta propia|pracovat na volné noze
      `) },
      { name: 'Peníze a podnikání', words: T(`
        el ingreso|příjem
        el ahorro|úspora
        la ganancia|zisk
        la pérdida|ztráta
        el emprendimiento|podnikání; start-up
        el emprendedor / la emprendedora|podnikatel / podnikatelka
        el cliente|zákazník
        rentable|výnosný
        endeudarse|zadlužit se
      `) },
      { name: 'Společnost a politika', words: T(`
        la ciudadanía|občanství; občané
        el voto|hlas (ve volbách)
        la protesta|protest
        la inmigración|přistěhovalectví
        exigir|požadovat
        reivindicar|domáhat se
        aprobar una ley|schválit zákon
        a favor de|ve prospěch; pro
        la clase media|střední třída
      `) },
      { name: 'Média a zprávy', words: T(`
        la noticia|zpráva; novinka
        el periodista / la periodista|novinář / novinářka
        la prensa|tisk
        la fuente|zdroj
        el rumor|fáma
        las noticias falsas|falešné zprávy
        la cobertura|zpravodajství; pokrytí
        el reportaje|reportáž
        la opinión pública|veřejné mínění
        la publicación|příspěvek; publikace
        difundir|šířit
        informar|informovat
        verificar|ověřit
        desmentir|popřít; vyvrátit
        según fuentes oficiales|podle oficiálních zdrojů
        estar al tanto de|být v obraze
      `) },
      { name: 'Věda a technologie', words: T(`
        el investigador / la investigadora|výzkumník / výzkumnice
        el descubrimiento|objev
        el avance|pokrok
        el experimento|pokus
        la hipótesis|hypotéza
        la herramienta|nástroj
        desarrollar|vyvinout
        comprobar|ověřit
        sustituir|nahradit
        estar conectado/a|být online
      `) },
      { name: 'Slovesa s nuancí', words: T(`
        soler|mívat ve zvyku
        acabar de|právě (něco udělat)
        dejar de|přestat
        volver a|znovu (udělat)
        llegar a|dospět k; dokonce (udělat)
        ponerse a|dát se do
        echar a perder|zkazit
        hacer caso a|poslechnout
        llevar a cabo|uskutečnit
        tener en cuenta|vzít v úvahu
        dar por hecho|brát jako samozřejmost
        quedarse con|nechat si
        pasarlo bien|užít si
        sacar provecho de|vytěžit z
        tomarse a mal|vzít si osobně
      `) },
    ],
  });
})();
