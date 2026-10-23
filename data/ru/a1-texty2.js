/* Ruština A1 – další texty ke čtení (přízvuk je vyznačen čárkou nad samohláskou) */
(function () {
  JZ.add('ru', 'a1', {
    texts: [
      {
        title: 'Моя́ семья́',
        t: `Меня́ зову́т Ми́ша. Я живу́ в Новосиби́рске. У меня́ небольша́я семья́: па́па, ма́ма, сестра́ и я.
Мой па́па – инжене́р, он рабо́тает на заво́де. Моя́ ма́ма – учи́тельница, она́ рабо́тает в шко́ле. Мою́ сестру́ зову́т Ка́тя. Ей пятна́дцать лет, она́ ещё у́чится в шко́ле.
У нас есть соба́ка. Её зову́т Ба́рсик. Ве́чером мы всегда́ у́жинаем вме́сте и разгова́риваем. Я о́чень люблю́ мою́ семью́.`,
        cz: `Jmenuju se Míša. Bydlím v Novosibirsku. Mám malou rodinu: tátu, mámu, sestru a mě.
Můj táta je inženýr, pracuje v továrně. Moje máma je učitelka, pracuje ve škole. Moje sestra se jmenuje Káťa. Je jí patnáct let, ještě chodí do školy.
Máme psa. Jmenuje se Barsik. Večer vždycky večeříme spolu a povídáme si. Moji rodinu mám moc rád.`,
        gloss: {
          'небольша́я': 'nevelká; malá', 'на заво́де': 'v továrně', 'Ей пятна́дцать лет': 'je jí patnáct let', 'у́чится': 'učí se; chodí do školy',
          'Её зову́т': 'jmenuje se (ona)', 'вме́сте': 'spolu', 'разгова́риваем': 'povídáme si',
        },
        q: [
          ['Kde pracuje Míšův táta?', ['V továrně', 'Ve škole', 'V nemocnici'], 0],
          ['Kolik je Káťě?', ['Deset', 'Patnáct', 'Dvacet'], 1],
          ['Kdo je Barsik?', ['Bratr', 'Pes', 'Kočka'], 1],
        ],
      },
      {
        title: 'Моя́ кварти́ра',
        t: `Я живу́ в но́вом до́ме на пя́том этаже́. Моя́ кварти́ра небольша́я, но о́чень све́тлая. В ней две ко́мнаты, ку́хня, ва́нная и балко́н.
В большо́й ко́мнате стоя́т дива́н, стол и шкаф. Здесь я смотрю́ телеви́зор и рабо́таю. В спа́льне стои́т крова́ть, а на стене́ виси́т большо́е зе́ркало.
Ку́хня – моё люби́мое ме́сто. Там я гото́влю, пью чай и чита́ю. С балко́на ви́дно парк и ре́ку. Ле́том я ча́сто сижу́ на балко́не.`,
        cz: `Bydlím v novém domě v pátém patře. Můj byt je nevelký, ale velmi světlý. Jsou v něm dva pokoje, kuchyně, koupelna a balkon.
Ve velkém pokoji stojí pohovka, stůl a skříň. Tady se dívám na televizi a pracuju. V ložnici stojí postel a na stěně visí velké zrcadlo.
Kuchyně je moje oblíbené místo. Tam vařím, piju čaj a čtu. Z balkonu je vidět park a řeka. V létě často sedím na balkoně.`,
        gloss: {
          'на пя́том этаже́': 'v pátém patře', 'све́тлая': 'světlá', 'В ней': 'v něm (v bytě)', 'стоя́т': 'stojí (mn. č.)', 'виси́т': 'visí',
          'люби́мое ме́сто': 'oblíbené místo', 'ви́дно': 'je vidět', 'ре́ку': 'řeku', 'сижу́': 'sedím',
        },
        q: [
          ['V kterém patře je byt?', ['Ve druhém', 'V pátém', 'V prvním'], 1],
          ['Co visí na stěně v ložnici?', ['Obraz', 'Zrcadlo', 'Hodiny'], 1],
          ['Co je vidět z balkonu?', ['Moře', 'Park a řeka', 'Nádraží'], 1],
        ],
      },
      {
        title: 'На ры́нке',
        t: `— До́брый день! Ско́лько сто́ят помидо́ры?
— Две́сти рубле́й килогра́мм.
— А огурцы́?
— Сто пятьдеся́т. Они́ о́чень све́жие, сего́дня у́тром из дере́вни.
— Хорошо́. Да́йте, пожа́луйста, килогра́мм помидо́ров и полкило́ огурцо́в.
— Пожа́луйста. Что́-нибудь ещё?
— Да, ещё лук и пучо́к укро́па.
— Вот, пожа́луйста. Всего́ три́ста со́рок рубле́й.
— Вот четы́реста.
— Ва́ша сда́ча – шестьдеся́т рубле́й. Спаси́бо за поку́пку!`,
        cz: `— Dobrý den! Kolik stojí rajčata?
— Dvě stě rublů kilo.
— A okurky?
— Sto padesát. Jsou velmi čerstvé, dnes ráno z vesnice.
— Dobře. Dejte mi prosím kilo rajčat a půl kila okurek.
— Prosím. Ještě něco?
— Ano, ještě cibuli a svazek kopru.
— Tady, prosím. Celkem tři sta čtyřicet rublů.
— Tady je čtyři sta.
— Vaše drobné – šedesát rublů. Děkuju za nákup!`,
        gloss: {
          'помидо́ры': 'rajčata', 'килогра́мм': 'kilogram', 'огурцы́': 'okurky', 'све́жие': 'čerstvé', 'из дере́вни': 'z vesnice',
          'полкило́': 'půl kila', 'пучо́к укро́па': 'svazek kopru', 'Всего́': 'celkem', 'сда́ча': 'drobné (vrácené)', 'поку́пку': 'nákup',
        },
        q: [
          ['Kolik stojí kilo rajčat?', ['150 rublů', '200 rublů', '340 rublů'], 1],
          ['Odkud jsou okurky?', ['Z vesnice', 'Ze supermarketu', 'Ze zahraničí'], 0],
          ['Kolik drobných zákazník dostane?', ['60 rublů', '40 rublů', 'Nic'], 0],
        ],
      },
      {
        title: 'Мой го́род',
        t: `Я живу́ в Пра́ге. Пра́га – столи́ца Че́хии. Э́то большо́й, ста́рый и о́чень краси́вый го́род. Здесь живёт бо́льше миллио́на челове́к.
В це́нтре есть ста́рая пло́щадь, краси́вые це́ркви и знамени́тый Ка́рлов мост. Ка́ждый день там мно́го тури́стов. Над го́родом стоя́т Гра́дчаны – большо́й за́мок.
В Пра́ге хоро́шее метро́, трамва́и и авто́бусы. Я ча́сто е́зжу на трамва́е, потому́ что из окна́ ви́дно го́род. Я о́чень люблю́ мой го́род, осо́бенно ве́чером, когда́ на у́лицах горя́т фонари́.`,
        cz: `Bydlím v Praze. Praha je hlavní město Česka. Je to velké, staré a velmi krásné město. Žije tu víc než milion lidí.
V centru je staré náměstí, krásné kostely a slavný Karlův most. Každý den je tam hodně turistů. Nad městem stojí Hradčany – velký hrad.
V Praze je dobré metro, tramvaje a autobusy. Často jezdím tramvají, protože z okna je vidět město. Moje město mám moc rád, hlavně večer, když v ulicích svítí lampy.`,
        gloss: {
          'столи́ца': 'hlavní město', 'бо́льше миллио́на': 'víc než milion', 'це́ркви': 'kostely', 'знамени́тый': 'slavný', 'за́мок': 'hrad; zámek',
          'е́зжу': 'jezdím', 'из окна́': 'z okna', 'осо́бенно': 'hlavně; zvláště', 'горя́т фонари́': 'svítí lampy',
        },
        q: [
          ['Co je Praha?', ['Hlavní město Česka', 'Malá vesnice', 'Ruské město'], 0],
          ['Proč vypravěč jezdí tramvají?', ['Je levná', 'Z okna je vidět město', 'Metro nejezdí'], 1],
          ['Kdy má město nejradši?', ['Ráno', 'Večer', 'V zimě'], 1],
        ],
      },
      {
        title: 'В метро́',
        t: `— Извини́те, пожа́луйста, вы не зна́ете, как дое́хать до Кра́сной пло́щади?
— Зна́ю. Вам ну́жно е́хать до ста́нции «Охо́тный ряд». Э́то три остано́вки.
— А где мо́жно купи́ть биле́т?
— Вот ка́сса, сле́ва. И́ли мо́жно плати́ть ка́ртой пря́мо на вхо́де.
— Спаси́бо! А мне ну́жно де́лать переса́дку?
— Нет, переса́дка не нужна́. Э́то пряма́я ли́ния.
— Большо́е спаси́бо!
— Не́ за что. Хоро́шего дня!`,
        cz: `— Promiňte prosím, nevíte, jak se dostanu na Rudé náměstí?
— Vím. Musíte jet do stanice „Ochotnyj rjad“. Jsou to tři zastávky.
— A kde se dá koupit lístek?
— Tady je pokladna, vlevo. Nebo se dá platit kartou přímo u vstupu.
— Děkuju! A musím přestupovat?
— Ne, přestup není potřeba. Je to přímá linka.
— Moc děkuju!
— Není zač. Hezký den!`,
        gloss: {
          'дое́хать до': 'dojet do', 'Вам ну́жно': 'musíte; potřebujete', 'сле́ва': 'vlevo', 'на вхо́де': 'u vstupu',
          'переса́дку': 'přestup', 'не нужна́': 'není potřeba', 'пряма́я ли́ния': 'přímá linka', 'Не́ за что': 'není zač',
        },
        q: [
          ['Kam chce turista jet?', ['Na Rudé náměstí', 'Na nádraží', 'Do hotelu'], 0],
          ['Kolik je to zastávek?', ['Dvě', 'Tři', 'Pět'], 1],
          ['Musí přestupovat?', ['Ano', 'Ne'], 1],
        ],
      },
      {
        title: 'Выходны́е',
        t: `В суббо́ту у́тром я до́лго спал. Пото́м я поза́втракал и пошёл в магази́н. Я купи́л хлеб, сыр, молоко́ и фру́кты.
Днём мы с дру́гом игра́ли в футбо́л в па́рке. Бы́ло тепло́ и со́лнечно. Ве́чером мы пошли́ в кино́ и смотре́ли но́вый фильм. Фильм был интере́сный, но о́чень дли́нный.
В воскресе́нье я был до́ма. Я убира́л кварти́ру, чита́л кни́гу и звони́л ма́ме. Ве́чером я гото́вил у́жин и смотре́л телеви́зор. Э́то бы́ли хоро́шие выходны́е.`,
        cz: `V sobotu ráno jsem dlouho spal. Potom jsem se nasnídal a šel do obchodu. Koupil jsem chleba, sýr, mléko a ovoce.
Odpoledne jsme s kamarádem hráli fotbal v parku. Bylo teplo a slunečno. Večer jsme šli do kina a dívali se na nový film. Film byl zajímavý, ale moc dlouhý.
V neděli jsem byl doma. Uklízel jsem byt, četl knihu a volal mámě. Večer jsem vařil večeři a díval se na televizi. Byl to dobrý víkend.`,
        gloss: {
          'до́лго': 'dlouho', 'поза́втракал': 'nasnídal jsem se', 'пошёл': 'šel jsem', 'купи́л': 'koupil jsem', 'Днём': 'přes den; odpoledne',
          'мы с дру́гом': 'já a kamarád', 'дли́нный': 'dlouhý', 'убира́л': 'uklízel jsem',
        },
        q: [
          ['Co dělal v sobotu odpoledne?', ['Hrál fotbal', 'Uklízel', 'Spal'], 0],
          ['Jaký byl film?', ['Krátký a nudný', 'Zajímavý, ale dlouhý', 'Smutný'], 1],
          ['Komu volal v neděli?', ['Kamarádovi', 'Mámě', 'Šéfovi'], 1],
        ],
      },
      {
        title: 'Письмо́ дру́гу',
        t: `Приве́т, Анто́н!
Как дела́? Я уже́ две неде́ли в Москве́. Здесь всё о́чень интере́сно. Я живу́ в общежи́тии, у меня́ ма́ленькая ко́мната и два сосе́да. Оди́н из Кита́я, друго́й из Брази́лии.
Ка́ждый день у нас уро́ки ру́сского языка́. Преподава́тель о́чень хоро́ший, но говори́т бы́стро. Я понима́ю уже́ мно́го слов!
В суббо́ту мы бы́ли в Третьяко́вской галере́е. Там о́чень краси́вые карти́ны.
Пиши́, как у тебя́ дела́!
Твой Па́вел`,
        cz: `Ahoj, Antone!
Jak se máš? Jsem už dva týdny v Moskvě. Všechno je tu velmi zajímavé. Bydlím na koleji, mám malý pokoj a dva spolubydlící. Jeden je z Číny, druhý z Brazílie.
Každý den máme hodiny ruštiny. Vyučující je velmi dobrý, ale mluví rychle. Rozumím už hodně slovům!
V sobotu jsme byli v Treťjakovské galerii. Jsou tam moc krásné obrazy.
Napiš, jak se máš!
Tvůj Pavel`,
        gloss: {
          'общежи́тии': 'na koleji (studentská ubytovna)', 'сосе́да': 'sousedé; spolubydlící', 'Оди́н из': 'jeden z', 'друго́й': 'druhý; jiný',
          'бы́стро': 'rychle', 'мно́го слов': 'hodně slov', 'галере́е': 'galerii', 'карти́ны': 'obrazy', 'Пиши́': 'piš',
        },
        q: [
          ['Jak dlouho je Pavel v Moskvě?', ['Dva týdny', 'Dva měsíce', 'Rok'], 0],
          ['Odkud jsou jeho spolubydlící?', ['Z Česka a Polska', 'Z Číny a Brazílie', 'Z Ruska'], 1],
          ['Jaký je jeho vyučující?', ['Dobrý, ale mluví rychle', 'Přísný', 'Mluví pomalu'], 0],
        ],
      },
      {
        title: 'В апте́ке',
        t: `— Здра́вствуйте! Что вам?
— Здра́вствуйте. У меня́ боли́т го́рло и немно́го боли́т голова́.
— У вас есть температу́ра?
— Да, небольша́я. Три́дцать семь и пять.
— Вот э́ти табле́тки от головно́й бо́ли. И вот спрей для го́рла.
— Как их принима́ть?
— Табле́тки – два ра́за в день по́сле еды́. Спрей – три ра́за в день.
— Спаси́бо. Ско́лько с меня́?
— Пятьсо́т два́дцать рубле́й. Выздора́вливайте!`,
        cz: `— Dobrý den! Co si přejete?
— Dobrý den. Bolí mě v krku a trochu mě bolí hlava.
— Máte teplotu?
— Ano, malou. Třicet sedm a půl.
— Tady jsou tyhle tablety proti bolesti hlavy. A tady je sprej na krk.
— Jak je mám brát?
— Tablety dvakrát denně po jídle. Sprej třikrát denně.
— Děkuju. Kolik platím?
— Pět set dvacet rublů. Uzdravte se!`,
        gloss: {
          'го́рло': 'krk (hrdlo)', 'табле́тки': 'tablety', 'от головно́й бо́ли': 'proti bolesti hlavy', 'для го́рла': 'na krk',
          'принима́ть': 'brát (lék)', 'два ра́за в день': 'dvakrát denně', 'по́сле еды́': 'po jídle', 'Ско́лько с меня́': 'kolik platím',
          'Выздора́вливайте': 'uzdravte se',
        },
        q: [
          ['Co pacienta bolí?', ['Záda', 'Krk a hlava', 'Břicho'], 1],
          ['Jak často má brát tablety?', ['Dvakrát denně po jídle', 'Třikrát denně', 'Jednou ráno'], 0],
          ['Kolik zaplatí?', ['250 rublů', '520 rublů', '500 rublů'], 1],
        ],
      },
      {
        title: 'Зима́ в Росси́и',
        t: `Зима́ в Росси́и дли́нная и холо́дная. Она́ начина́ется в ноябре́ и конча́ется в ма́рте. В Москве́ зимо́й быва́ет ми́нус де́сять и́ли ми́нус пятна́дцать гра́дусов, а в Сиби́ри – да́же ми́нус со́рок!
Но ру́сские лю́бят зи́му. Зимо́й мо́жно ката́ться на лы́жах и на конька́х. Де́ти игра́ют в снежки́ и де́лают снегови́ка.
Са́мый люби́мый пра́здник – Но́вый год. Все покупа́ют ёлку и пода́рки. В нового́днюю ночь семья́ сиди́т за больши́м столо́м, ест сала́т «Оливье́» и смо́трит телеви́зор.`,
        cz: `Zima v Rusku je dlouhá a studená. Začíná v listopadu a končí v březnu. V Moskvě bývá v zimě minus deset nebo minus patnáct stupňů a na Sibiři dokonce minus čtyřicet!
Ale Rusové zimu mají rádi. V zimě se dá lyžovat a bruslit. Děti hrají koulovačku a stavějí sněhuláka.
Nejoblíbenější svátek je Nový rok. Všichni kupují stromeček a dárky. Na Silvestra sedí rodina u velkého stolu, jí salát Olivier a dívá se na televizi.`,
        gloss: {
          'начина́ется': 'začíná', 'конча́ется': 'končí', 'быва́ет': 'bývá', 'да́же': 'dokonce', 'ката́ться на лы́жах': 'lyžovat',
          'на конька́х': 'na bruslích', 'игра́ют в снежки́': 'koulují se', 'снегови́ка': 'sněhuláka', 'Са́мый люби́мый': 'nejoblíbenější',
          'ёлку': 'vánoční stromek', 'пода́рки': 'dárky',
        },
        q: [
          ['Kdy v Rusku začíná zima?', ['V prosinci', 'V listopadu', 'V lednu'], 1],
          ['Jaký je nejoblíbenější svátek?', ['Vánoce', 'Nový rok', 'Narozeniny'], 1],
          ['Co se jí na Silvestra?', ['Pelmeně', 'Salát Olivier', 'Bliny'], 1],
        ],
      },
      {
        title: 'Мой друг Ива́н',
        t: `Мой лу́чший друг – Ива́н. Мы зна́ем друг дру́га уже́ де́сять лет. Ива́н высо́кий, у него́ тёмные во́лосы и голубы́е глаза́. Он всегда́ улыба́ется.
Ива́н рабо́тает врачо́м в больни́це. Его́ рабо́та тру́дная, но он её о́чень лю́бит. В свобо́дное вре́мя он игра́ет на гита́ре и пла́вает.
Ива́н весёлый, до́брый и у́мный челове́к. Когда́ у меня́ пробле́мы, я всегда́ звоню́ ему́. Он всегда́ помога́ет. Я ра́д, что у меня́ есть тако́й друг.`,
        cz: `Můj nejlepší kamarád je Ivan. Známe se už deset let. Ivan je vysoký, má tmavé vlasy a modré oči. Pořád se usmívá.
Ivan pracuje jako lékař v nemocnici. Jeho práce je těžká, ale má ji moc rád. Ve volném čase hraje na kytaru a plave.
Ivan je veselý, hodný a chytrý člověk. Když mám problémy, vždycky mu volám. Vždycky pomůže. Jsem rád, že mám takového kamaráda.`,
        gloss: {
          'лу́чший': 'nejlepší', 'друг дру́га': 'navzájem; jeden druhého', 'тёмные во́лосы': 'tmavé vlasy', 'голубы́е глаза́': 'modré oči',
          'улыба́ется': 'usmívá se', 'врачо́м': 'jako lékař', 'её': 'ji', 'звоню́ ему́': 'volám mu', 'тако́й': 'takový',
        },
        q: [
          ['Jak dlouho se znají?', ['Rok', 'Deset let', 'Odmalička'], 1],
          ['Kde Ivan pracuje?', ['Ve škole', 'V nemocnici', 'V bance'], 1],
          ['Co dělá ve volném čase?', ['Hraje na kytaru a plave', 'Běhá', 'Maluje'], 0],
        ],
      },
      {
        title: 'Как я изуча́ю ру́сский язы́к',
        t: `Я изуча́ю ру́сский язы́к уже́ два ме́сяца. Снача́ла э́то бы́ло тру́дно: но́вые бу́квы, но́вые зву́ки и о́чень мно́го оконча́ний. Но тепе́рь я чита́ю бы́стро и понима́ю просты́е те́ксты.
Ка́ждый день я учу́ де́сять но́вых слов. Я пишу́ их на ка́рточки и повторя́ю в авто́бусе. Ве́чером я слу́шаю ру́сские пе́сни и смотрю́ мультфи́льмы.
Мой люби́мый мультфи́льм – «Ну, погоди́!». Там почти́ нет слов, но всё поня́тно. В сле́дующем году́ я хочу́ пое́хать в Росси́ю и говори́ть с людьми́.`,
        cz: `Ruštinu se učím už dva měsíce. Zpočátku to bylo těžké: nová písmena, nové zvuky a strašně moc koncovek. Ale teď čtu rychle a rozumím jednoduchým textům.
Každý den se učím deset nových slov. Píšu si je na kartičky a opakuju v autobuse. Večer poslouchám ruské písničky a dívám se na animáky.
Můj oblíbený animák je „Jen počkej!“. Skoro tam nejsou slova, ale všechno je jasné. Příští rok chci jet do Ruska a mluvit s lidmi.`,
        gloss: {
          'Снача́ла': 'zpočátku; nejdřív', 'бу́квы': 'písmena', 'зву́ки': 'zvuky', 'оконча́ний': 'koncovek', 'тепе́рь': 'teď',
          'просты́е': 'jednoduché', 'ка́рточки': 'kartičky', 'пе́сни': 'písně', 'мультфи́льмы': 'animované filmy', 'почти́': 'skoro',
          'В сле́дующем году́': 'příští rok', 'с людьми́': 's lidmi',
        },
        q: [
          ['Jak dlouho se vypravěč učí rusky?', ['Dva týdny', 'Dva měsíce', 'Dva roky'], 1],
          ['Kde opakuje slovíčka?', ['V autobuse', 'V posilovně', 'Ve škole'], 0],
          ['Co chce udělat příští rok?', ['Jet do Ruska', 'Začít se učit čínsky', 'Dát si pauzu'], 0],
        ],
      },
      {
        title: 'В рестора́не',
        t: `— До́брый ве́чер! Вот меню́. Что вы бу́дете зака́зывать?
— До́брый ве́чер. Я бу́ду борщ и пельме́ни.
— Пельме́ни со смета́ной?
— Да, со смета́ной, пожа́луйста.
— А что вы бу́дете пить?
— Чёрный чай с лимо́ном.
— Хорошо́. А на десе́рт?
— Блины́ с мёдом, пожа́луйста.
— Отли́чный вы́бор. Ваш зака́з бу́дет че́рез пятна́дцать мину́т.
— Спаси́бо. А мо́жно счёт пото́м, по́сле десе́рта?
— Коне́чно.`,
        cz: `— Dobrý večer! Tady je jídelní lístek. Co si objednáte?
— Dobrý večer. Dám si boršč a pelmeně.
— Pelmeně se zakysanou smetanou?
— Ano, se smetanou, prosím.
— A co si dáte k pití?
— Černý čaj s citronem.
— Dobře. A jako dezert?
— Bliny s medem, prosím.
— Výborná volba. Vaše objednávka bude za patnáct minut.
— Děkuju. A můžu dostat účet potom, po dezertu?
— Samozřejmě.`,
        gloss: {
          'зака́зывать': 'objednávat', 'борщ': 'boršč (polévka z červené řepy)', 'смета́ной': 'zakysanou smetanou', 'десе́рт': 'dezert',
          'с мёдом': 's medem', 'Отли́чный вы́бор': 'výborná volba', 'зака́з': 'objednávka', 'че́рез': 'za (časově)',
        },
        q: [
          ['Co si host objedná jako hlavní jídlo?', ['Boršč a pelmeně', 'Rybu', 'Salát'], 0],
          ['Co si dá k pití?', ['Kávu', 'Čaj s citronem', 'Pivo'], 1],
          ['Kdy bude objednávka hotová?', ['Za pět minut', 'Za patnáct minut', 'Za hodinu'], 1],
        ],
      },
      {
        title: 'Пое́здка в Петербу́рг',
        t: `В ма́е мы с подру́гой е́здили в Петербу́рг. Мы е́хали на по́езде «Сапса́н» из Москвы́. Пое́здка была́ бы́строй – то́лько четы́ре часа́.
В Петербу́рге мы жи́ли в ма́ленькой гости́нице в це́нтре. Ка́ждый день мы мно́го гуля́ли. Мы бы́ли в Эрмита́же, ви́дели Не́вский проспе́кт и Исаа́киевский собо́р.
Ве́чером мы смотре́ли, как разво́дят мосты́ над Нево́й. Э́то бы́ло о́чень краси́во! Пого́да была́ холо́дная, но мы бы́ли о́чень ра́ды. Петербу́рг – са́мый краси́вый го́род в Росси́и.`,
        cz: `V květnu jsme s kamarádkou jely do Petrohradu. Jely jsme vlakem Sapsan z Moskvy. Cesta byla rychlá – jen čtyři hodiny.
V Petrohradu jsme bydlely v malém hotelu v centru. Každý den jsme se hodně procházely. Byly jsme v Ermitáži, viděly jsme Něvský prospekt a Isaakijevský chrám.
Večer jsme se dívaly, jak zvedají mosty nad Něvou. Bylo to moc krásné! Počasí bylo studené, ale měly jsme velkou radost. Petrohrad je nejkrásnější město v Rusku.`,
        gloss: {
          'мы с подру́гой': 'já a kamarádka', 'е́здили': 'jeli jsme (tam a zpět)', 'бы́строй': 'rychlá', 'жи́ли': 'bydleli jsme',
          'Эрмита́же': 'v Ermitáži (muzeum)', 'собо́р': 'chrám; katedrála', 'разво́дят мосты́': 'zvedají mosty', 'над Нево́й': 'nad Něvou',
          'ра́ды': 'rádi; spokojení', 'са́мый краси́вый': 'nejkrásnější',
        },
        q: [
          ['Jak dlouho jel vlak z Moskvy?', ['Čtyři hodiny', 'Celou noc', 'Deset hodin'], 0],
          ['Kde bydleli?', ['U kamarádů', 'V malém hotelu v centru', 'Na koleji'], 1],
          ['Na co se dívali večer?', ['Na zvedání mostů', 'Na balet', 'Na ohňostroj'], 0],
        ],
      },
      {
        title: 'Моя́ рабо́та',
        t: `Меня́ зову́т Еле́на. Я рабо́таю медсестро́й в де́тской больни́це. Мой рабо́чий день начина́ется в во́семь часо́в утра́ и конча́ется в пять.
Снача́ла я разгова́риваю с врачо́м, пото́м даю́ де́тям лека́рства и измеря́ю температу́ру. Иногда́ де́ти пла́чут, и я чита́ю им ска́зки.
Моя́ рабо́та нелёгкая. Иногда́ я рабо́таю но́чью и в выходны́е. Но я люблю́ свою́ рабо́ту, потому́ что помога́ю лю́дям. Когда́ ребёнок выздора́вливает и идёт домо́й, я о́чень сча́стлива.`,
        cz: `Jmenuju se Jelena. Pracuju jako zdravotní sestra v dětské nemocnici. Můj pracovní den začíná v osm hodin ráno a končí v pět.
Nejdřív mluvím s lékařem, potom dávám dětem léky a měřím teplotu. Někdy děti pláčou a já jim čtu pohádky.
Moje práce není lehká. Někdy pracuju v noci a o víkendu. Ale svou práci mám ráda, protože pomáhám lidem. Když se dítě uzdraví a jde domů, jsem moc šťastná.`,
        gloss: {
          'медсестро́й': 'jako zdravotní sestra', 'де́тской': 'dětské', 'рабо́чий день': 'pracovní den', 'измеря́ю': 'měřím',
          'пла́чут': 'pláčou', 'ска́зки': 'pohádky', 'нелёгкая': 'není lehká', 'свою́': 'svou', 'выздора́вливает': 'uzdravuje se',
          'сча́стлива': 'šťastná',
        },
        q: [
          ['Kde Jelena pracuje?', ['V dětské nemocnici', 'Ve škole', 'V lékárně'], 0],
          ['Co dělá, když děti pláčou?', ['Volá rodiče', 'Čte jim pohádky', 'Zpívá'], 1],
          ['Proč má práci ráda?', ['Má dobrý plat', 'Pomáhá lidem', 'Je lehká'], 1],
        ],
      },
      {
        title: 'Вчера́',
        t: `Вчера́ был тру́дный день. Я просну́лся по́здно, потому́ что не слы́шал буди́льник. Я бы́стро оде́лся и побежа́л на остано́вку, но авто́бус уже́ уе́хал.
Я пошёл на рабо́ту пешко́м и опозда́л на полчаса́. Нача́льник был недово́лен. Пото́м я по́нял, что забы́л до́ма телефо́н и обе́д.
Ве́чером я пришёл домо́й о́чень уста́лым. Но там меня́ ждала́ сестра́. Она́ пригото́вила вку́сный у́жин и купи́ла торт. Мы пи́ли чай и смея́лись. В конце́ концо́в день был не так плох.`,
        cz: `Včera byl těžký den. Probudil jsem se pozdě, protože jsem neslyšel budík. Rychle jsem se oblékl a utíkal na zastávku, ale autobus už odjel.
Šel jsem do práce pěšky a přišel jsem o půl hodiny pozdě. Šéf byl nespokojený. Pak jsem zjistil, že jsem doma zapomněl telefon a oběd.
Večer jsem přišel domů hodně unavený. Ale doma na mě čekala sestra. Připravila dobrou večeři a koupila dort. Pili jsme čaj a smáli se. Nakonec ten den nebyl tak špatný.`,
        gloss: {
          'просну́лся': 'probudil jsem se', 'буди́льник': 'budík', 'оде́лся': 'oblékl jsem se', 'побежа́л': 'rozběhl jsem se',
          'опозда́л на полчаса́': 'přišel jsem o půl hodiny pozdě', 'недово́лен': 'nespokojený', 'по́нял': 'pochopil jsem; zjistil jsem',
          'уста́лым': 'unavený', 'ждала́': 'čekala', 'пригото́вила': 'připravila', 'смея́лись': 'smáli jsme se', 'В конце́ концо́в': 'nakonec',
        },
        q: [
          ['Proč se probudil pozdě?', ['Neslyšel budík', 'Byl nemocný', 'Dlouho četl'], 0],
          ['Co zapomněl doma?', ['Klíče', 'Telefon a oběd', 'Peněženku'], 1],
          ['Kdo na něj večer čekal?', ['Šéf', 'Sestra', 'Kamarád'], 1],
        ],
      },
      {
        title: 'Пого́да за́втра',
        t: `До́брый ве́чер! Вот прогно́з пого́ды на за́втра.
В Москве́ за́втра бу́дет о́блачно, днём пойдёт небольшо́й дождь. Температу́ра – плюс двена́дцать гра́дусов. Ве́чером бу́дет си́льный ве́тер, поэ́тому возьми́те ку́ртку.
В Петербу́рге бу́дет тума́н у́тром и дождь весь день. В Со́чи, на ю́ге, бу́дет тепло́ и со́лнечно – плюс два́дцать два. Мо́жно гуля́ть и загора́ть.
В Сиби́ри уже́ идёт снег. Там ми́нус пять.
Хоро́шего ве́чера!`,
        cz: `Dobrý večer! Tady je předpověď počasí na zítřek.
V Moskvě bude zítra zataženo, přes den přijde slabý déšť. Teplota plus dvanáct stupňů. Večer bude silný vítr, proto si vezměte bundu.
V Petrohradu bude ráno mlha a celý den déšť. V Soči na jihu bude teplo a slunečno – plus dvacet dva. Dá se procházet a opalovat.
Na Sibiři už sněží. Je tam minus pět.
Hezký večer!`,
        gloss: {
          'прогно́з': 'předpověď', 'пойдёт': 'přijde (o dešti)', 'небольшо́й': 'slabý; malý', 'си́льный ве́тер': 'silný vítr',
          'возьми́те': 'vezměte si', 'на ю́ге': 'na jihu', 'загора́ть': 'opalovat se', 'весь день': 'celý den',
        },
        q: [
          ['Jaká bude teplota v Moskvě?', ['Plus dvanáct', 'Minus pět', 'Plus dvacet dva'], 0],
          ['Kde bude teplo a slunečno?', ['V Petrohradu', 'V Soči', 'Na Sibiři'], 1],
          ['Proč si vzít bundu?', ['Bude sněžit', 'Večer bude silný vítr', 'Bude mráz'], 1],
        ],
      },
    ],
  });
})();
