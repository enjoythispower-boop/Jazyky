/* Ruština A1 – další slovíčka (přízvuk je vyznačen čárkou nad samohláskou) */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'a1', {
    vocab: [
      { name: 'Spojky a příslovce', words: T(`
        и|a (spojka)
        а|a (ale; kdežto)
        но|ale
        и́ли|nebo
        потому́ что|protože
        поэ́тому|proto
        е́сли|jestli; když
        то́же|také
        та́кже|také (navíc)
        уже́|už
        ещё|ještě
        всегда́|vždy
        никогда́|nikdy
        ча́сто|často
        иногда́|někdy; občas
        ре́дко|zřídka
        обы́чно|obvykle
        о́чень|velmi
        немно́го|trochu
        мно́го|hodně
        ма́ло|málo
        здесь|tady
        там|tam
        до́ма|doma
        домо́й|domů
        то́лько|jen; jenom
        ра́ньше|dříve
        тепе́рь|teď; nyní
        ско́ро|brzy
        пото́м|potom
        снача́ла|nejdřív
        ка́ждый день|každý den
        вме́сте|spolu
        наприме́р|například`) },

      { name: 'Dny a měsíce', words: T(`
        вто́рник|úterý
        среда́|středa
        четве́рг|čtvrtek
        суббо́та|sobota
        янва́рь|leden
        февра́ль|únor
        март|březen
        апре́ль|duben
        май|květen
        ию́нь|červen
        ию́ль|červenec
        а́вгуст|srpen
        сентя́брь|září
        октя́брь|říjen
        ноя́брь|listopad
        дека́брь|prosinec
        ме́сяц|měsíc
        год|rok
        день|den
        ночь|noc
        у́тро|ráno
        ве́чер|večer
        выходны́е|víkend
        послеза́втра|pozítří`) },

      { name: 'Čísla od 11', words: T(`
        оди́ннадцать|jedenáct
        двена́дцать|dvanáct
        трина́дцать|třináct
        четы́рнадцать|čtrnáct
        пятна́дцать|patnáct
        шестна́дцать|šestnáct
        семна́дцать|sedmnáct
        восемна́дцать|osmnáct
        девятна́дцать|devatenáct
        три́дцать|třicet
        со́рок|čtyřicet
        пятьдеся́т|padesát
        шестьдеся́т|šedesát
        се́мьдесят|sedmdesát
        во́семьдесят|osmdesát
        девяно́сто|devadesát
        две́сти|dvě stě
        три́ста|tři sta
        пятьсо́т|pět set
        ты́сяча|tisíc
        пе́рвый|první
        второ́й|druhý
        тре́тий|třetí
        полови́на|polovina`) },


      { name: 'Oblečení', words: T(`
        пальто́|kabát
        ку́ртка|bunda
        руба́шка|košile
        футбо́лка|tričko
        брю́ки|kalhoty
        джи́нсы|džíny
        пла́тье|šaty
        ю́бка|sukně
        сви́тер|svetr
        ша́пка|čepice
        шарф|šála
        перча́тки|rukavice
        боти́нки|boty (kotníkové)
        кроссо́вки|tenisky
        носки́|ponožky
        очки́|brýle
        часы́|hodinky; hodiny
        надева́ть|oblékat si; nasazovat
        снима́ть|svlékat; sundávat
        носи́ть|nosit`) },

      { name: 'Tělo a zdraví', words: T(`
        голова́|hlava
        глаз|oko
        у́хо|ucho
        нос|nos
        рот|ústa
        зуб|zub
        рука́|ruka; paže
        нога́|noha
        спина́|záda
        се́рдце|srdce
        у меня́ боли́т голова́|bolí mě hlava
        больно́й|nemocný
        здоро́вый|zdravý
        врач|lékař
        больни́ца|nemocnice
        лека́рство|lék
        температу́ра|teplota; horečka
        просту́да|nachlazení
        я уста́л / я уста́ла|jsem unavený / jsem unavená
        боле́ть|být nemocný
        чу́вствовать себя́|cítit se
        Будь здоро́в!|Na zdraví! (při kýchnutí)`) },

      { name: 'Počasí a roční období', words: T(`
        пого́да|počasí
        со́лнце|slunce
        дождь|déšť
        снег|sníh
        ве́тер|vítr
        о́блако|mrak
        тепло́|teplo
        жа́рко|horko
        хо́лодно|zima (je zima)
        тума́н|mlha
        идёт дождь|prší
        идёт снег|sněží
        зима́|zima (roční období)
        весна́|jaro
        ле́то|léto
        о́сень|podzim
        зимо́й|v zimě
        весно́й|na jaře
        ле́том|v létě
        о́сенью|na podzim
        гра́дус|stupeň
        моро́з|mráz`) },

      { name: 'Povolání a práce', words: T(`
        профе́ссия|povolání
        учи́тель / учи́тельница|učitel; učitelka
        студе́нт / студе́нтка|student; studentka
        инжене́р|inženýr
        программи́ст|programátor
        продаве́ц|prodavač
        официа́нт|číšník
        по́вар|kuchař
        води́тель|řidič
        медсестра́|zdravotní sestra
        журнали́ст|novinář
        музыка́нт|hudebník
        худо́жник|malíř; umělec
        бизнесме́н|podnikatel
        пенсионе́р|důchodce
        о́фис|kancelář
        фи́рма|firma
        колле́га|kolega
        нача́льник|šéf; vedoucí
        зарпла́та|plat
        рабо́тать кем?|pracovat jako kdo?`) },

      { name: 'Škola a učení', words: T(`
        уро́к|lekce; hodina (ve škole)
        упражне́ние|cvičení
        зада́ние|úkol
        дома́шнее зада́ние|domácí úkol
        тетра́дь|sešit
        ру́чка|propiska
        каранда́ш|tužka
        сло́во|slovo
        предложе́ние|věta; návrh
        пра́вило|pravidlo
        оши́бка|chyba
        экза́мен|zkouška
        университе́т|univerzita
        учени́к / учени́ца|žák; žačka
        преподава́тель|vyučující; lektor
        переводи́ть|překládat
        повторя́ть|opakovat
        запомина́ть|zapamatovávat si
        объясня́ть|vysvětlovat
        поня́тно|je to jasné; rozumím`) },

      { name: 'Volný čas', words: T(`
        свобо́дное вре́мя|volný čas
        хо́бби|koníček
        спорт|sport
        футбо́л|fotbal
        пла́вать|plavat
        бе́гать|běhat
        танцева́ть|tancovat
        петь|zpívat
        рисова́ть|kreslit
        фотографи́ровать|fotografovat
        игра́ть в ша́хматы|hrát šachy
        игра́ть на гита́ре|hrát na kytaru
        кино́|kino
        фильм|film
        конце́рт|koncert
        теа́тр|divadlo
        вы́ставка|výstava
        путеше́ствовать|cestovat
        встреча́ться с друзья́ми|scházet se s kamarády
        отдыха́ть|odpočívat
        интересова́ться|zajímat se
        скуча́ть|nudit se; stýskat se`) },

      { name: 'Byt a nábytek', words: T(`
        дива́н|pohovka
        кре́сло|křeslo
        шкаф|skříň
        по́лка|police
        холоди́льник|lednice
        плита́|sporák
        ва́нная|koupelna
        туале́т|záchod
        спа́льня|ložnice
        гости́ная|obývák
        коридо́р|chodba
        балко́н|balkon
        эта́ж|patro
        лифт|výtah
        ле́стница|schodiště
        стена́|stěna; zeď
        пол|podlaha
        потоло́к|strop
        ла́мпа|lampa
        зе́ркало|zrcadlo`) },

      { name: 'Nakupování a peníze', words: T(`
        ры́нок|trh
        суперма́ркет|supermarket
        ка́сса|pokladna
        цена́|cena
        ско́лько сто́ит?|kolik to stojí?
        рубль|rubl
        копе́йка|kopějka
        сда́ча|drobné (vrácené)
        ка́рта|karta; mapa
        нали́чные|hotovost
        плати́ть|platit
        купи́ть|koupit
        продава́ть|prodávat
        до́рого|draho
        дёшево|levně
        ски́дка|sleva
        паке́т|igelitka; balíček
        разме́р|velikost
        откры́то|otevřeno
        закры́то|zavřeno
        поку́пки|nákupy`) },

      { name: 'Doprava a cestování', words: T(`
        путеше́ствие|cesta; cestování
        пое́здка|jízda; výlet
        самолёт|letadlo
        трамва́й|tramvaj
        тролле́йбус|trolejbus
        метро́|metro
        такси́|taxi
        остано́вка|zastávka
        ста́нция|stanice
        переса́дка|přestup
        расписа́ние|jízdní řád
        чемода́н|kufr
        рюкза́к|batoh
        па́спорт|pas
        ви́за|vízum
        грани́ца|hranice
        тури́ст|turista
        экску́рсия|prohlídka; exkurze
        ка́рта го́рода|mapa města
        опа́здывать|chodit pozdě; mít zpoždění
        прие́хать|přijet
        уе́хать|odjet`) },

      { name: 'Slovesa každého dne', words: T(`
        открыва́ть|otevírat
        закрыва́ть|zavírat
        начина́ть|začínat
        зака́нчивать|končit; dokončovat
        отвеча́ть|odpovídat
        спра́шивать|ptát se
        по́мнить|pamatovat si
        забыва́ть|zapomínat
        ду́мать|myslet; přemýšlet
        игра́ть|hrát (si)
        стоя́ть|stát
        лежа́ть|ležet
        мыть|mýt
        гото́вить|vařit; připravovat
        встава́ть|vstávat
        ложи́ться спать|chodit spát
        приходи́ть|přicházet
        уходи́ть|odcházet
        помога́ть|pomáhat
        звони́ть|volat (telefonem)
        сове́товать|radit
        проси́ть|prosit; žádat
        брать|brát
        дава́ть|dávat
        ви́деть|vidět
        сиде́ть|sedět
        учи́ть|učit (se)
        обе́дать|obědvat
        у́жинать|večeřet
        нра́виться|líbit se
        смея́ться|smát se`) },

      { name: 'Jaký je? (přídavná jména)', words: T(`
        молодо́й|mladý
        высо́кий|vysoký
        ни́зкий|nízký
        дли́нный|dlouhý
        коро́ткий|krátký
        широ́кий|široký
        у́зкий|úzký
        чи́стый|čistý
        гря́зный|špinavý
        тяжёлый|těžký (váhou)
        вку́сный|chutný
        сла́дкий|sladký
        о́стрый|pálivý; ostrý
        свобо́дный|volný; svobodný
        за́нятый|zaneprázdněný; obsazený
        бога́тый|bohatý
        бе́дный|chudý
        счастли́вый|šťastný
        у́мный|chytrý
        глу́пый|hloupý
        до́брый|hodný; laskavý
        злой|zlý
        ну́жный|potřebný
        ва́жный|důležitý
        тёплый|teplý
        тёмный|tmavý
        све́тлый|světlý`) },

      { name: 'Jídlo na trhu a v kuchyni', words: T(`
        о́вощи|zelenina
        фру́кты|ovoce
        помидо́р|rajče
        огуре́ц|okurka
        лук|cibule
        морко́вь|mrkev
        капу́ста|zelí
        грибы́|houby
        ку́рица|kuře; slepice
        колбаса́|salám
        яйцо́|vejce
        ма́сло|máslo; olej
        са́хар|cukr
        соль|sůl
        рис|rýže
        макаро́ны|těstoviny
        ка́ша|kaše
        пиро́г|koláč
        пельме́ни|pelmeně (taštičky s masem)
        блины́|palačinky (bliny)
        моро́женое|zmrzlina
        вино́|víno`) },

      { name: 'Příroda a zvířata', words: T(`
        приро́да|příroda
        лес|les
        по́ле|pole
        гора́|hora
        река́|řeka
        о́зеро|jezero
        мо́ре|moře
        о́стров|ostrov
        бе́рег|břeh
        де́рево|strom
        цвето́к|květina
        трава́|tráva
        не́бо|obloha; nebe
        звезда́|hvězda
        луна́|měsíc (na obloze)
        соба́ка|pes
        ко́шка|kočka
        пти́ца|pták
        ло́шадь|kůň
        коро́ва|kráva
        медве́дь|medvěd
        волк|vlk`) },

      { name: 'Pocity a užitečné fráze', words: T(`
        ра́дость|radost
        рад / ра́да|rád / ráda
        сча́стье|štěstí
        грусть|smutek
        мне ску́чно|nudím se
        мне хо́лодно|je mi zima
        мне жа́рко|je mi horko
        мне нра́вится|líbí se mi
        я согла́сен / я согла́сна|souhlasím
        я не зна́ю|nevím
        пра́вда|pravda
        кста́ти|mimochodem
        мне ну́жно|potřebuji
        мо́жно|lze; smí se
        нельзя́|nesmí se; nelze
        я хочу́|chci
        я люблю́|miluji; mám rád
        стра́шно|je mi úzko; strašně
        Не за что.|Není zač.
        Пра́вда?|Opravdu?
        Поздравля́ю!|Gratuluju!
        С днём рожде́ния!|Všechno nejlepší k narozeninám!`) },

      { name: 'Lidé a místa', words: T(`
        роди́тели|rodiče
        дя́дя|strýc
        тётя|teta
        сосе́дка|sousedka
        лицо́|obličej
        во́лосы|vlasy
        рестора́н|restaurace
        банк|banka
        по́чта|pošta
        библиоте́ка|knihovna
        пляж|pláž
        любо́вь|láska
        компью́тер|počítač
        интерне́т|internet
        стадио́н|stadion
        те́ннис|tenis
        хокке́й|hokej`) },
    ],
  });
})();
