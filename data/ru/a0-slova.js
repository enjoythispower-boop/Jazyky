/* Ruština – Základy: první slova, která už umíš (přízvuk je vyznačen) */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'a0', {
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

      { name: 'Otázky a zájmena', words: T(`
        кто?|kdo?
        что?|co?
        когда́?|kdy?
        почему́?|proč?
        заче́м?|proč? (za jakým účelem)
        как?|jak?
        ско́лько?|kolik?
        како́й?|jaký?
        кото́рый?|který?
        чей?|čí?
        отку́да?|odkud?
        я|já
        ты|ty
        он|on
        она́|ona
        мы|my
        вы|vy; Vy (zdvořile)
        они́|oni
        мой|můj
        твой|tvůj
        наш|náš
        ваш|váš`) },

      { name: 'Barvy', words: T(`
        цвет|barva
        како́го цве́та?|jaké barvy?
        кра́сный|červený
        си́ний|modrý (tmavě)
        голубо́й|světle modrý
        зелёный|zelený
        жёлтый|žlutý
        чёрный|černý
        бе́лый|bílý
        се́рый|šedý
        кори́чневый|hnědý
        ора́нжевый|oranžový
        ро́зовый|růžový
        фиоле́товый|fialový`) },
    ],
  });
})();
