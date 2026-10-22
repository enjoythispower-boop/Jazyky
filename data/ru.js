/* Ruština – obsah pro úroveň A1+ (přízvuk je vyznačen čárkou nad samohláskou) */
window.DATA = window.DATA || {};

(function () {
  // Pravidelná slovesa na -ать / -ять (1. časování): чита́ть → чита́ю, чита́ешь…
  function at(inf, cz) {
    const s = inf.replace(/ть$/, '');
    return {
      inf, cz,
      pres: [s + 'ю', s + 'ешь', s + 'ет', s + 'ем', s + 'ете', s + 'ют'].join(','),
      past: [s + 'л', s + 'ла', s + 'ли'].join(','),
    };
  }

  function conjugate(v, t) {
    return v[t].split(',').map(s => s.trim());
  }

  const T = (s) => s.split('\n').map(l => l.trim()).filter(Boolean).map(l => l.split('|'));
  const ROD = ['mužský', 'ženský', 'střední'];
  const MOJ = ['мой', 'моя́', 'моё', 'мои́'];

  DATA.ru = {
    code: 'ru',
    name: 'Ruština',
    native: 'Русский',
    level: 'A1+',
    glyph: 'Ж',
    keyboard: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'],
    modeWords: {
      slovicka: 'слова́', vety: 'фра́зы', preklad: 'перево́д', poslech: 'слу́шать',
      cteni: 'чита́ть', gramatika: 'грамма́тика', casovani: 'глаго́лы', moje: 'мои́ слова́',
    },

    /* ---------- Slovíčka ---------- */
    vocab: [
      { name: 'Pozdravy a fráze', words: T(`
        приве́т|ahoj
        здра́вствуйте|dobrý den
        до свида́ния|na shledanou
        пока́|ahoj (při loučení)
        спаси́бо|děkuji
        пожа́луйста|prosím; není zač
        извини́те|promiňte
        да|ano
        нет|ne
        хорошо́|dobře
        пло́хо|špatně
        как дела́?|jak se máš?
        меня́ зову́т…|jmenuji se…
        о́чень прия́тно|těší mě
        я не понима́ю|nerozumím
        повтори́те, пожа́луйста|zopakujte to, prosím
        до́брое у́тро|dobré ráno
        до́брый ве́чер|dobrý večer
        споко́йной но́чи|dobrou noc
        коне́чно|samozřejmě
        мо́жет быть|možná
        ничего́|nic; to nevadí`) },

      { name: 'Rodina a lidé', words: T(`
        семья́|rodina
        мать / ма́ма|matka; máma
        оте́ц / па́па|otec; táta
        брат|bratr
        сестра́|sestra
        сын|syn
        дочь|dcera
        муж|manžel
        жена́|manželka
        ба́бушка|babička
        де́душка|dědeček
        друг|kamarád; přítel
        подру́га|kamarádka
        ребёнок|dítě
        де́ти|děti
        челове́к|člověk
        лю́ди|lidé
        сосе́д|soused
        мужчи́на|muž
        же́нщина|žena`) },

      { name: 'Čísla a čas', words: T(`
        оди́н|jeden
        два|dva
        три|tři
        четы́ре|čtyři
        пять|pět
        шесть|šest
        семь|sedm
        во́семь|osm
        де́вять|devět
        де́сять|deset
        два́дцать|dvacet
        сто|sto
        сего́дня|dnes
        за́втра|zítra
        вчера́|včera
        сейча́с|teď
        у́тром|ráno
        ве́чером|večer
        неде́ля|týden
        час|hodina
        мину́та|minuta
        понеде́льник|pondělí
        пя́тница|pátek
        воскресе́нье|neděle`) },

      { name: 'Jídlo a pití', words: T(`
        вода́|voda
        хлеб|chléb
        молоко́|mléko
        ко́фе|káva
        чай|čaj
        сок|džus
        мя́со|maso
        ры́ба|ryba
        сыр|sýr
        я́блоко|jablko
        суп|polévka
        карто́шка|brambory
        сала́т|salát
        пи́во|pivo
        вку́сно|chutná to; chutně
        за́втрак|snídaně
        обе́д|oběd
        у́жин|večeře
        есть|jíst
        пить|pít
        счёт|účet
        меню́|jídelní lístek`) },

      { name: 'Město a cesta', words: T(`
        го́род|město
        у́лица|ulice
        дом|dům
        кварти́ра|byt
        гости́ница|hotel
        вокза́л|nádraží
        аэропо́рт|letiště
        авто́бус|autobus
        по́езд|vlak
        биле́т|jízdenka; lístek
        маши́на|auto
        мост|most
        пло́щадь|náměstí
        музе́й|muzeum
        апте́ка|lékárna
        магази́н|obchod
        бли́зко|blízko
        далеко́|daleko
        нале́во|doleva; vlevo
        напра́во|doprava; vpravo
        пря́мо|rovně
        где?|kde?
        куда́?|kam?`) },

      { name: 'Přídavná jména', words: T(`
        большо́й|velký
        ма́ленький|malý
        хоро́ший|dobrý
        плохо́й|špatný
        но́вый|nový
        ста́рый|starý
        краси́вый|krásný; hezký
        интере́сный|zajímavý
        дорого́й|drahý
        дешёвый|levný
        горя́чий|horký
        холо́дный|studený
        бы́стрый|rychlý
        ме́дленный|pomalý
        весёлый|veselý
        гру́стный|smutný
        тру́дный|těžký; obtížný
        лёгкий|lehký; snadný`) },

      { name: 'Slovesa', words: T(`
        быть|být
        жить|žít; bydlet
        рабо́тать|pracovat
        говори́ть|mluvit; říkat
        понима́ть|rozumět
        знать|vědět; znát
        чита́ть|číst
        писа́ть|psát
        хоте́ть|chtít
        мочь|moci
        люби́ть|milovat; mít rád
        де́лать|dělat
        идти́|jít
        е́хать|jet
        смотре́ть|dívat se
        слу́шать|poslouchat
        спать|spát
        изуча́ть|učit se (něco); studovat
        покупа́ть|kupovat
        ждать|čekat`) },

      { name: 'Doma a věci', words: T(`
        ко́мната|pokoj; místnost
        ку́хня|kuchyně
        окно́|okno
        дверь|dveře
        стол|stůl
        крова́ть|postel
        кни́га|kniha
        телефо́н|telefon
        ключ|klíč
        су́мка|taška
        оде́жда|oblečení
        де́ньги|peníze
        вре́мя|čas
        рабо́та|práce
        шко́ла|škola
        слова́рь|slovník
        вопро́с|otázka
        отве́т|odpověď
        язы́к|jazyk`) },

      { name: 'Zrádná slova', words: T(`
        живо́т|břicho
        у́жас|hrůza
        позо́р|hanba; ostuda
        неде́ля|týden
        за́пах|vůně; pach
        чёрствый|okoralý; bezcitný
        го́род|město
        гора́здо|mnohem
        ла́вка|krámek; lavice
        пра́здник|svátek
        стул|židle
        вонь|smrad
        ро́дина|vlast
        ды́ня|cukrový meloun
        ты́ква|dýně
        кани́кулы|prázdniny`) },
    ],

    /* ---------- Věty ---------- */
    sentences: [
      ['Как вас зову́т?', 'Jak se jmenujete?'],
      ['Я из Че́хии.', 'Jsem z Česka.'],
      ['Я немно́го говорю́ по-ру́сски.', 'Mluvím trochu rusky.'],
      ['Я изуча́ю ру́сский язы́к.', 'Učím se ruštinu.'],
      ['Где нахо́дится метро́?', 'Kde je metro?'],
      ['Ско́лько э́то сто́ит?', 'Kolik to stojí?'],
      ['Я не понима́ю. Повтори́те, пожа́луйста.', 'Nerozumím. Zopakujte to, prosím.'],
      ['У меня́ есть брат и сестра́.', 'Mám bratra a sestru.'],
      ['Мой брат живёт в Пра́ге.', 'Můj bratr bydlí v Praze.'],
      ['Сего́дня хоро́шая пого́да.', 'Dnes je hezké počasí.'],
      ['Я хочу́ пить.', 'Mám žízeň.'],
      ['Мы идём в парк.', 'Jdeme do parku.'],
      ['Вчера́ я был в музе́е.', 'Včera jsem byl v muzeu.'],
      ['Она́ рабо́тает в больни́це.', 'Pracuje v nemocnici.'],
      ['Что ты де́лаешь?', 'Co děláš?'],
      ['Я чита́ю интере́сную кни́гу.', 'Čtu zajímavou knihu.'],
      ['Где здесь апте́ка?', 'Kde je tady lékárna?'],
      ['Э́то моя́ ма́ма.', 'To je moje máma.'],
      ['У нас нет вре́мени.', 'Nemáme čas.'],
      ['Я люблю́ чёрный ко́фе.', 'Mám rád černou kávu.'],
      ['Ты зна́ешь, где вокза́л?', 'Víš, kde je nádraží?'],
      ['Мы живём в большо́м го́роде.', 'Bydlíme ve velkém městě.'],
      ['Ка́ждое у́тро я пью чай.', 'Každé ráno piju čaj.'],
      ['За́втра мы е́дем на мо́ре.', 'Zítra jedeme k moři.'],
      ['Мо́жно меню́, пожа́луйста?', 'Můžu dostat jídelní lístek, prosím?'],
      ['Счёт, пожа́луйста.', 'Účet, prosím.'],
      ['Он не мо́жет прийти́ сего́дня.', 'Dnes nemůže přijít.'],
      ['Я до́лго ждал авто́бус.', 'Dlouho jsem čekal na autobus.'],
      ['Мне нра́вится э́тот го́род.', 'Líbí se mi tohle město.'],
      ['Как э́то по-ру́сски?', 'Jak se to řekne rusky?'],
      ['Мой друг хорошо́ говори́т по-испа́нски.', 'Můj kamarád mluví dobře španělsky.'],
      ['Де́ти смо́трят телеви́зор.', 'Děti se dívají na televizi.'],
      ['Магази́н рабо́тает до девяти́.', 'Obchod má otevřeno do devíti.'],
      ['Я живу́ в кварти́ре на тре́тьем этаже́.', 'Bydlím v bytě ve třetím patře.'],
      ['Она́ пи́шет письмо́ подру́ге.', 'Píše dopis kamarádce.'],
      ['Мне ну́жно купи́ть биле́т.', 'Potřebuju koupit lístek.'],
      ['Сего́дня о́чень хо́лодно.', 'Dnes je velká zima.'],
      ['Ты хо́чешь пойти́ в кино́?', 'Chceš jít do kina?'],
      ['Где ты был вчера́ ве́чером?', 'Kde jsi byl včera večer?'],
      ['Я не зна́ю, что сказа́ть.', 'Nevím, co říct.'],
      ['Извини́те, где здесь туале́т?', 'Promiňte, kde je tady záchod?'],
      ['Я хочу́ заказа́ть ко́фе и бутербро́д.', 'Chci si objednat kávu a chlebíček.'],
    ],

    /* ---------- Texty ke čtení ---------- */
    texts: [
      {
        title: 'Меня́ зову́т А́нна',
        level: 'A1',
        t: `Приве́т! Меня́ зову́т А́нна. Мне два́дцать пять лет. Я живу́ в Каза́ни. Э́то большо́й и краси́вый го́род на Во́лге.
Я рабо́таю в шко́ле, я учи́тельница. У меня́ есть брат. Его́ зову́т Макси́м. Он студе́нт и живёт в Москве́.
Ве́чером я люблю́ чита́ть и гуля́ть в па́рке. А ты? Где ты живёшь?`,
        cz: `Ahoj! Jmenuji se Anna. Je mi dvacet pět let. Bydlím v Kazani. Je to velké a krásné město na Volze.
Pracuji ve škole, jsem učitelka. Mám bratra. Jmenuje se Maxim. Je student a bydlí v Moskvě.
Večer ráda čtu a chodím na procházky do parku. A ty? Kde bydlíš ty?`,
        gloss: {
          'Мне два́дцать пять лет': 'je mi 25 let', 'Каза́ни': 'v Kazani (město)', 'на Во́лге': 'na Volze',
          'учи́тельница': 'učitelka', 'Его́ зову́т': 'jmenuje se', 'студе́нт': 'student', 'гуля́ть': 'procházet se',
        },
        q: [
          ['Kde bydlí Anna?', ['V Kazani', 'V Moskvě', 'V Praze'], 0],
          ['Co Anna dělá?', ['Je učitelka', 'Je studentka', 'Pracuje v obchodě'], 0],
          ['Kdo je Maxim?', ['Její bratr', 'Její manžel', 'Její kamarád'], 0],
        ],
      },
      {
        title: 'В кафе́',
        level: 'A1',
        t: `— Здра́вствуйте! Что вы хоти́те?
— Здра́вствуйте. Чёрный ко́фе и бутербро́д с сы́ром, пожа́луйста.
— Ко́фе с са́харом?
— Нет, без са́хара. И ещё стака́н воды́.
— Хорошо́. Что́-нибудь ещё?
— Нет, спаси́бо. Ско́лько с меня́?
— Три́ста рубле́й.
— Вот, пожа́луйста.
— Спаси́бо! Прия́тного аппети́та!`,
        cz: `— Dobrý den! Co si dáte?
— Dobrý den. Černou kávu a chlebíček se sýrem, prosím.
— Kávu s cukrem?
— Ne, bez cukru. A ještě sklenici vody.
— Dobře. Ještě něco?
— Ne, děkuji. Kolik platím?
— Tři sta rublů.
— Tady, prosím.
— Děkuji! Dobrou chuť!`,
        gloss: {
          'бутербро́д': 'chlebíček', 'с сы́ром': 'se sýrem', 'с са́харом': 's cukrem', 'без са́хара': 'bez cukru',
          'ещё': 'ještě', 'стака́н воды́': 'sklenice vody', 'Что́-нибудь': 'něco', 'Ско́лько с меня́': 'kolik platím',
          'рубле́й': 'rublů', 'Прия́тного аппети́та': 'dobrou chuť',
        },
        q: [
          ['Co si host objedná?', ['Kávu a chlebíček se sýrem', 'Čaj a polévku', 'Pivo'], 0],
          ['Chce kávu s cukrem?', ['Ano', 'Ne'], 1],
          ['Kolik zaplatí?', ['300 rublů', '30 rublů', '3000 rublů'], 0],
        ],
      },
      {
        title: 'Мой день',
        level: 'A1+',
        t: `Ка́ждый день я встаю́ в семь часо́в. Снача́ла я принима́ю душ, пото́м за́втракаю. На за́втрак я обы́чно ем ка́шу и пью чай.
В во́семь часо́в я иду́ на рабо́ту. Я рабо́таю в о́фисе в це́нтре го́рода. Обе́д у меня́ в час. По́сле рабо́ты я хожу́ в магази́н и́ли в спортза́л.
Ве́чером я гото́влю у́жин, смотрю́ фильм и́ли учу́ ру́сский язы́к. Спать я ложу́сь в оди́ннадцать.`,
        cz: `Každý den vstávám v sedm hodin. Nejdřív se osprchuju, pak snídám. K snídani obvykle jím kaši a piju čaj.
V osm hodin jdu do práce. Pracuji v kanceláři v centru města. Oběd mám v jednu. Po práci chodím do obchodu nebo do posilovny.
Večer vařím večeři, dívám se na film nebo se učím rusky. Spát chodím v jedenáct.`,
        gloss: {
          'встаю́': 'vstávám', 'Снача́ла': 'nejdřív', 'принима́ю душ': 'sprchuju se', 'пото́м': 'potom',
          'за́втракаю': 'snídám', 'обы́чно': 'obvykle', 'ка́шу': 'kaši', 'о́фисе': 'kanceláři', 'По́сле': 'po',
          'хожу́': 'chodím', 'спортза́л': 'posilovna', 'гото́влю': 'vařím; připravuji', 'ложу́сь': 'uléhám',
        },
        q: [
          ['V kolik vstává?', ['V sedm', 'V osm', 'V jedenáct'], 0],
          ['Co snídá?', ['Kaši a čaj', 'Chleba a kávu', 'Nic'], 0],
          ['Kam chodí po práci?', ['Do obchodu nebo do posilovny', 'Do kina', 'Do školy'], 0],
        ],
      },
      {
        title: 'Пого́да',
        level: 'A1+',
        t: `Сего́дня суббо́та. На у́лице тепло́ и све́тит со́лнце. Мы с дру́гом хоти́м пое́хать за́ город. Там есть о́зеро и большо́й лес. Мы возьмём с собо́й бутербро́ды, во́ду и фру́кты.
Вчера́ бы́ло хо́лодно и шёл дождь, поэ́тому мы сиде́ли до́ма и игра́ли в ша́хматы. Но сего́дня пого́да отли́чная!`,
        cz: `Dnes je sobota. Venku je teplo a svítí slunce. S kamarádem chceme jet za město. Je tam jezero a velký les. Vezmeme si s sebou chlebíčky, vodu a ovoce.
Včera byla zima a pršelo, a tak jsme seděli doma a hráli šachy. Ale dnes je počasí skvělé!`,
        gloss: {
          'суббо́та': 'sobota', 'На у́лице': 'venku', 'тепло́': 'teplo', 'све́тит со́лнце': 'svítí slunce',
          'Мы с дру́гом': 'já a kamarád', 'за́ город': 'za město', 'о́зеро': 'jezero', 'лес': 'les',
          'возьмём с собо́й': 'vezmeme si s sebou', 'фру́кты': 'ovoce', 'шёл дождь': 'pršelo', 'поэ́тому': 'proto',
          'ша́хматы': 'šachy', 'отли́чная': 'skvělá',
        },
        q: [
          ['Jaké je dnes počasí?', ['Teplo a slunečno', 'Zima a prší', 'Sněží'], 0],
          ['Kam chtějí jet?', ['Za město k jezeru', 'Do muzea', 'K moři'], 0],
          ['Co dělali včera?', ['Hráli doma šachy', 'Byli u jezera', 'Pracovali'], 0],
        ],
      },
      {
        title: 'В гости́нице',
        level: 'A1+',
        t: `— До́брый день! У вас есть свобо́дный но́мер?
— Да, есть. На ско́лько ноче́й?
— На две но́чи. Ско́лько сто́ит?
— Три ты́сячи рубле́й за ночь. За́втрак включён.
— Хорошо́. А где мо́жно оста́вить чемода́н?
— Здесь, в ка́мере хране́ния. Вот ваш ключ. Ваш но́мер на второ́м этаже́.
— Спаси́бо! А во ско́лько за́втрак?
— С семи́ до десяти́ утра́.`,
        cz: `— Dobrý den! Máte volný pokoj?
— Ano, máme. Na kolik nocí?
— Na dvě noci. Kolik to stojí?
— Tři tisíce rublů za noc. Snídaně je v ceně.
— Dobře. A kde si můžu nechat kufr?
— Tady, v úschovně zavazadel. Tady je váš klíč. Váš pokoj je ve druhém patře.
— Děkuji! A v kolik je snídaně?
— Od sedmi do deseti ráno.`,
        gloss: {
          'свобо́дный но́мер': 'volný pokoj (v hotelu)', 'ноче́й': 'nocí', 'ты́сячи': 'tisíce', 'включён': 'v ceně; zahrnutý',
          'оста́вить': 'nechat', 'чемода́н': 'kufr', 'ка́мере хране́ния': 'úschovna zavazadel', 'этаже́': 'patře',
          'во ско́лько': 'v kolik', 'утра́': 'ráno',
        },
        q: [
          ['Na kolik nocí chce pokoj?', ['Na dvě', 'Na tři', 'Na jednu'], 0],
          ['Je snídaně v ceně?', ['Ano', 'Ne'], 0],
          ['Kde nechá kufr?', ['V úschovně zavazadel', 'V pokoji', 'V autě'], 0],
        ],
      },
    ],

    /* ---------- Gramatika ---------- */
    grammar: [
      {
        id: 'rod', name: 'Rod podstatných jmen',
        rule: `<b>Mužský</b>: souhláska nebo -й (стол, музе́й). <b>Ženský</b>: -а, -я (кни́га, неде́ля). <b>Střední</b>: -о, -е (окно́, мо́ре).<br>Na <b>-ь</b> může být mužský i ženský (слова́рь m., дверь ž.) – nutno se naučit. Pozor: па́па a де́душка jsou mužské, ко́фе je mužského rodu, вре́мя a и́мя jsou střední.`,
        items: [
          ['кни́га', 'ženský', 'rod', 'kniha', ROD],
          ['стол', 'mužský', 'rod', 'stůl', ROD],
          ['окно́', 'střední', 'rod', 'okno', ROD],
          ['дверь', 'ženský', 'rod', 'dveře', ROD],
          ['вре́мя', 'střední', 'rod', 'čas', ROD],
          ['па́па', 'mužský', 'rod', 'táta', ROD],
          ['слова́рь', 'mužský', 'rod', 'slovník', ROD],
          ['мо́ре', 'střední', 'rod', 'moře', ROD],
          ['ночь', 'ženský', 'rod', 'noc', ROD],
          ['музе́й', 'mužský', 'rod', 'muzeum', ROD],
          ['пло́щадь', 'ženský', 'rod', 'náměstí', ROD],
          ['ко́фе', 'mužský', 'rod', 'káva', ROD],
          ['де́душка', 'mužský', 'rod', 'dědeček', ROD],
          ['и́мя', 'střední', 'rod', 'jméno', ROD],
        ],
      },
      {
        id: 'moj', name: 'Мой, моя́, моё, мои́',
        rule: `Přivlastňovací zájmeno se řídí rodem a číslem: <b>мой</b> (m.), <b>моя́</b> (ž.), <b>моё</b> (stř.), <b>мои́</b> (mn. č.). Stejně <i>твой, твоя́, твоё, твои́</i>.`,
        items: [
          ['Э́то ___ кни́га.', 'моя́', 'мой / моя́ / моё / мои́', 'To je moje kniha.', MOJ],
          ['___ брат живёт в Пра́ге.', 'Мой', 'мой / моя́ / моё / мои́', 'Můj bratr bydlí v Praze.', MOJ],
          ['Где ___ окно́?', 'моё', 'мой / моя́ / моё / мои́', 'Kde je moje okno?', MOJ],
          ['Где ___ ключи́?', 'мои́', 'мой / моя́ / моё / мои́', 'Kde jsou moje klíče?', MOJ],
          ['Э́то ___ дом.', 'мой', 'мой / моя́ / моё / мои́', 'To je můj dům.', MOJ],
          ['___ ма́ма – врач.', 'Моя́', 'мой / моя́ / моё / мои́', 'Moje máma je lékařka.', MOJ],
          ['Э́то ___ письмо́.', 'моё', 'мой / моя́ / моё / мои́', 'To je můj dopis.', MOJ],
          ['Где ___ телефо́н?', 'мой', 'мой / моя́ / моё / мои́', 'Kde je můj telefon?', MOJ],
          ['___ де́ти в шко́ле.', 'Мои́', 'мой / моя́ / моё / мои́', 'Moje děti jsou ve škole.', MOJ],
          ['Э́то ___ ко́фе.', 'мой', 'мой / моя́ / моё / мои́', 'To je moje káva.', MOJ],
          ['___ вре́мя – де́ньги.', 'Моё', 'мой / моя́ / моё / мои́', 'Můj čas jsou peníze.', MOJ],
          ['Где ___ су́мка?', 'моя́', 'мой / моя́ / моё / мои́', 'Kde je moje taška?', MOJ],
        ],
      },
      {
        id: 'predlozkovy', name: 'Kde? – předložkový pád',
        rule: `Odpovídá na <b>где?</b> (kde) a <b>о ком? о чём?</b> (o kom, o čem), po předložkách <b>в, на, о</b>.<br>Většina slov dostane <b>-е</b>: парк → в па́рке, шко́ла → в шко́ле. Ženská na <b>-ь</b> a slova na <b>-ия</b> dostanou <b>-и</b>: пло́щадь → на пло́щади, Росси́я → в Росси́и. Nesklonná slova (кафе́, метро́) se nemění.`,
        items: [
          ['Я живу́ в ___.', 'Москве́', 'Москва́', 'Bydlím v Moskvě.'],
          ['Мы гуля́ем в ___.', 'па́рке', 'парк', 'Procházíme se v parku.'],
          ['Он рабо́тает в ___.', 'шко́ле', 'шко́ла', 'Pracuje ve škole.'],
          ['Кни́га на ___.', 'столе́', 'стол', 'Kniha je na stole.'],
          ['Вчера́ я был в ___.', 'музе́е', 'музе́й', 'Včera jsem byl v muzeu.'],
          ['Мы говори́м о ___.', 'рабо́те', 'рабо́та', 'Mluvíme o práci.'],
          ['Она́ живёт в ___.', 'Пра́ге', 'Пра́га', 'Bydlí v Praze.'],
          ['Ко́шка спит на ___.', 'крова́ти', 'крова́ть', 'Kočka spí na posteli.'],
          ['Мы обе́даем в ___.', 'кафе́', 'кафе́', 'Obědváme v kavárně.'],
          ['Де́ти игра́ют на ___.', 'у́лице', 'у́лица', 'Děti si hrají venku (na ulici).'],
          ['Я живу́ в большо́м ___.', 'го́роде', 'го́род', 'Bydlím ve velkém městě.'],
          ['Де́ньги в ___.', 'су́мке', 'су́мка', 'Peníze jsou v tašce.'],
          ['Он живёт в ___.', 'Росси́и', 'Росси́я', 'Žije v Rusku.'],
          ['Мы встре́тимся на ___.', 'пло́щади', 'пло́щадь', 'Sejdeme se na náměstí.'],
        ],
      },
      {
        id: 'akuzativ', name: 'Koho? Co? Kam? – 4. pád',
        rule: `Odpovídá na <b>кого́? что?</b> a na <b>куда́?</b> (kam) po <b>в, на</b>.<br>Ženský rod: <b>-а → -у</b>, <b>-я → -ю</b> (кни́га → кни́гу). Mužský neživotný se nemění (фильм → фильм), mužský životný dostane <b>-а</b> (брат → бра́та). Střední rod se nemění.`,
        items: [
          ['Я ви́жу ___.', 'ма́му', 'ма́ма', 'Vidím mámu.'],
          ['Я чита́ю ___.', 'кни́гу', 'кни́га', 'Čtu knihu.'],
          ['Он пьёт ___.', 'во́ду', 'вода́', 'Pije vodu.'],
          ['Мы лю́бим ___.', 'му́зыку', 'му́зыка', 'Máme rádi hudbu.'],
          ['Я жду ___.', 'авто́бус', 'авто́бус', 'Čekám na autobus.'],
          ['Ты зна́ешь ___?', 'Ива́на', 'Ива́н', 'Znáš Ivana?'],
          ['Я покупа́ю ___.', 'газе́ту', 'газе́та', 'Kupuju noviny.'],
          ['Она́ о́чень лю́бит ___.', 'бра́та', 'брат', 'Má moc ráda bratra.'],
          ['Я хочу́ ___.', 'ры́бу', 'ры́ба', 'Chci rybu.'],
          ['Мы смо́трим ___.', 'фильм', 'фильм', 'Díváme se na film.'],
          ['Я иду́ в ___.', 'шко́лу', 'шко́ла', 'Jdu do školy.'],
          ['Па́па е́дет на ___.', 'рабо́ту', 'рабо́та', 'Táta jede do práce.'],
        ],
      },
      {
        id: 'genitiv', name: 'Нет, без… – 2. pád',
        rule: `Po <b>нет</b> (nemám, není), <b>без</b> (bez), <b>у</b> a u množství (стака́н воды́ – sklenice vody).<br>Mužský a střední rod: <b>-а / -я</b> (брат → бра́та, чай → ча́я). Ženský rod: <b>-ы / -и</b> (маши́на → маши́ны, неде́ля → неде́ли). Po г, к, х, ж, ш, ч, щ se píše <b>-и</b> (кни́га → кни́ги).`,
        items: [
          ['У меня́ нет ___.', 'бра́та', 'брат', 'Nemám bratra.'],
          ['У нас нет ___.', 'вре́мени', 'вре́мя', 'Nemáme čas.'],
          ['У него́ нет ___.', 'маши́ны', 'маши́на', 'Nemá auto.'],
          ['Здесь нет ___.', 'метро́', 'метро́', 'Není tu metro.'],
          ['У меня́ нет ___.', 'биле́та', 'биле́т', 'Nemám lístek.'],
          ['У неё нет ___.', 'сестры́', 'сестра́', 'Nemá sestru.'],
          ['Ко́фе без ___, пожа́луйста.', 'са́хара', 'са́хар', 'Kávu bez cukru, prosím.'],
          ['Стака́н ___, пожа́луйста.', 'воды́', 'вода́', 'Sklenici vody, prosím.'],
          ['У тебя́ нет ___?', 'ключа́', 'ключ', 'Nemáš klíč?'],
          ['Ча́шка ___.', 'ча́я / ча́ю', 'чай', 'Šálek čaje.'],
          ['У меня́ нет ___.', 'кни́ги', 'кни́га', 'Nemám knihu.'],
          ['Я живу́ без ___.', 'телефо́на', 'телефо́н', 'Žiju bez telefonu.'],
        ],
      },
    ],

    /* ---------- Časování ---------- */
    conj: {
      persons: ['я', 'ты', 'он / она́', 'мы', 'вы', 'они́'],
      pastPersons: ['он (muž)', 'она́ (žena)', 'они́ (oni)'],
      skip: [],
      tenses: [
        { id: 'pres', name: 'Přítomný čas', sub: 'настоя́щее вре́мя' },
        { id: 'past', name: 'Minulý čas', sub: 'проше́дшее вре́мя' },
      ],
      defaultTenses: ['pres'],
      conjugate,
      verbs: [
        at('чита́ть', 'číst'),
        at('знать', 'vědět; znát'),
        at('де́лать', 'dělat'),
        at('рабо́тать', 'pracovat'),
        at('понима́ть', 'rozumět'),
        at('изуча́ть', 'učit se (něco)'),
        at('покупа́ть', 'kupovat'),
        at('гуля́ть', 'procházet se'),
        at('слу́шать', 'poslouchat'),
        at('отдыха́ть', 'odpočívat'),
        at('за́втракать', 'snídat'),
        { inf: 'говори́ть', cz: 'mluvit', pres: 'говорю́, говори́шь, говори́т, говори́м, говори́те, говоря́т', past: 'говори́л, говори́ла, говори́ли' },
        { inf: 'жить', cz: 'žít; bydlet', pres: 'живу́, живёшь, живёт, живём, живёте, живу́т', past: 'жил, жила́, жи́ли' },
        { inf: 'идти́', cz: 'jít', pres: 'иду́, идёшь, идёт, идём, идёте, иду́т', past: 'шёл, шла, шли' },
        { inf: 'е́хать', cz: 'jet', pres: 'е́ду, е́дешь, е́дет, е́дем, е́дете, е́дут', past: 'е́хал, е́хала, е́хали' },
        { inf: 'хоте́ть', cz: 'chtít', pres: 'хочу́, хо́чешь, хо́чет, хоти́м, хоти́те, хотя́т', past: 'хоте́л, хоте́ла, хоте́ли' },
        { inf: 'мочь', cz: 'moci', pres: 'могу́, мо́жешь, мо́жет, мо́жем, мо́жете, мо́гут', past: 'мог, могла́, могли́' },
        { inf: 'люби́ть', cz: 'milovat; mít rád', pres: 'люблю́, лю́бишь, лю́бит, лю́бим, лю́бите, лю́бят', past: 'люби́л, люби́ла, люби́ли' },
        { inf: 'писа́ть', cz: 'psát', pres: 'пишу́, пи́шешь, пи́шет, пи́шем, пи́шете, пи́шут', past: 'писа́л, писа́ла, писа́ли' },
        { inf: 'есть', cz: 'jíst', pres: 'ем, ешь, ест, еди́м, еди́те, едя́т', past: 'ел, е́ла, е́ли' },
        { inf: 'пить', cz: 'pít', pres: 'пью, пьёшь, пьёт, пьём, пьёте, пьют', past: 'пил, пила́, пи́ли' },
        { inf: 'смотре́ть', cz: 'dívat se', pres: 'смотрю́, смо́тришь, смо́трит, смо́трим, смо́трите, смо́трят', past: 'смотре́л, смотре́ла, смотре́ли' },
        { inf: 'ви́деть', cz: 'vidět', pres: 'ви́жу, ви́дишь, ви́дит, ви́дим, ви́дите, ви́дят', past: 'ви́дел, ви́дела, ви́дели' },
        { inf: 'спать', cz: 'spát', pres: 'сплю, спишь, спит, спим, спи́те, спят', past: 'спал, спала́, спа́ли' },
        { inf: 'учи́ть', cz: 'učit (se)', pres: 'учу́, у́чишь, у́чит, у́чим, у́чите, у́чат', past: 'учи́л, учи́ла, учи́ли' },
        { inf: 'брать', cz: 'brát', pres: 'беру́, берёшь, берёт, берём, берёте, беру́т', past: 'брал, брала́, бра́ли' },
        { inf: 'дава́ть', cz: 'dávat', pres: 'даю́, даёшь, даёт, даём, даёте, даю́т', past: 'дава́л, дава́ла, дава́ли' },
        { inf: 'звони́ть', cz: 'volat (telefonem)', pres: 'звоню́, звони́шь, звони́т, звони́м, звони́те, звоня́т', past: 'звони́л, звони́ла, звони́ли' },
        { inf: 'ходи́ть', cz: 'chodit', pres: 'хожу́, хо́дишь, хо́дит, хо́дим, хо́дите, хо́дят', past: 'ходи́л, ходи́ла, ходи́ли' },
        { inf: 'сиде́ть', cz: 'sedět', pres: 'сижу́, сиди́шь, сиди́т, сиди́м, сиди́те, сидя́т', past: 'сиде́л, сиде́ла, сиде́ли' },
        { inf: 'ждать', cz: 'čekat', pres: 'жду, ждёшь, ждёт, ждём, ждёте, ждут', past: 'ждал, ждала́, жда́ли' },
        { inf: 'гото́вить', cz: 'vařit; připravovat', pres: 'гото́влю, гото́вишь, гото́вит, гото́вим, гото́вите, гото́вят', past: 'гото́вил, гото́вила, гото́вили' },
        { inf: 'быть', cz: 'být', pres: '—, —, есть, —, —, —', past: 'был, была́, бы́ли', only: ['past'] },
      ],
    },
  };
})();
