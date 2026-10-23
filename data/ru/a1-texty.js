/* Ruština A1 – texty ke čtení */
(function () {
  JZ.add('ru', 'a1', {
    texts: [
      {
        title: 'Меня́ зову́т А́нна',
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
  });
})();
