/* Ruština A2 – slovíčka (1/2): vid, pohyb, město, cesty, zdraví, lidé, práce, studium */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'a2', {
    vocab: [
      { name: 'Vidové dvojice I', words: T(`
        де́лать / сде́лать|dělat / udělat
        чита́ть / прочита́ть|číst / přečíst
        писа́ть / написа́ть|psát / napsat
        покупа́ть / купи́ть|kupovat / koupit
        говори́ть / сказа́ть|říkat / říct
        отвеча́ть / отве́тить|odpovídat / odpovědět
        спра́шивать / спроси́ть|ptát se / zeptat se
        брать / взять|brát / vzít
        дава́ть / дать|dávat / dát
        начина́ть / нача́ть|začínat / začít
        конча́ть / ко́нчить|končit / skončit
        открыва́ть / откры́ть|otevírat / otevřít
        закрыва́ть / закры́ть|zavírat / zavřít
        забыва́ть / забы́ть|zapomínat / zapomenout
        понима́ть / поня́ть|chápat / pochopit
        реша́ть / реши́ть|rozhodovat / rozhodnout
        звони́ть / позвони́ть|volat / zavolat
        гото́вить / пригото́вить|připravovat / připravit
        смотре́ть / посмотре́ть|dívat se / podívat se
        ви́деть / уви́деть|vidět / uvidět
        слы́шать / услы́шать|slyšet / uslyšet
        учи́ть / вы́учить|učit se / naučit se
        пить / вы́пить|pít / vypít
        есть / съесть|jíst / sníst`) },

      { name: 'Vidové dvojice II', words: T(`
        встава́ть / встать|vstávat / vstát
        ложи́ться / лечь|lehat si / lehnout si
        сади́ться / сесть|sedat si / sednout si
        помога́ть / помо́чь|pomáhat / pomoct
        приглаша́ть / пригласи́ть|zvát / pozvat
        встреча́ть / встре́тить|potkávat / potkat; vítat
        опа́здывать / опозда́ть|chodit pozdě / přijít pozdě
        обеща́ть / пообеща́ть|slibovat / slíbit
        возвраща́ться / верну́ться|vracet se / vrátit se
        мыть / помы́ть|mýt / umýt
        находи́ть / найти́|nacházet / najít
        теря́ть / потеря́ть|ztrácet / ztratit
        плати́ть / заплати́ть|platit / zaplatit
        ждать / подожда́ть|čekat / počkat
        пока́зывать / показа́ть|ukazovat / ukázat
        расска́зывать / рассказа́ть|vyprávět / povyprávět
        объясня́ть / объясни́ть|vysvětlovat / vysvětlit
        продава́ть / прода́ть|prodávat / prodat
        получа́ть / получи́ть|dostávat / dostat
        посыла́ть / посла́ть|posílat / poslat
        переводи́ть / перевести́|překládat / přeložit
        выбира́ть / вы́брать|vybírat / vybrat
        убира́ть / убра́ть|uklízet / uklidit`) },

      { name: 'Pohybová slovesa', words: T(`
        идти́ / ходи́ть|jít / chodit
        е́хать / е́здить|jet / jezdit
        бежа́ть / бе́гать|běžet / běhat
        лете́ть / лета́ть|letět / létat
        плыть / пла́вать|plout / plavat
        нести́ / носи́ть|nést / nosit
        вести́ / води́ть|vést / vodit
        везти́ / вози́ть|vézt / vozit
        прийти́|přijít
        уйти́|odejít
        вы́йти|vyjít; vystoupit
        войти́|vejít
        перейти́ у́лицу|přejít ulici
        пройти́|projít
        подойти́ к|přistoupit k
        зайти́ к дру́гу|zastavit se u kamaráda
        обойти́|obejít
        вы́ехать|vyjet
        перее́хать|přestěhovat se; přejet
        дое́хать до|dojet do
        сесть на авто́бус|nasednout do autobusu
        вы́йти из авто́буса|vystoupit z autobusu
        пешко́м|pěšky
        туда́ и обра́тно|tam a zpět
        на маши́не|autem`) },

      { name: 'Ve městě', words: T(`
        перекрёсток|křižovatka
        светофо́р|semafor
        пешехо́дный перехо́д|přechod pro chodce
        тротуа́р|chodník
        доро́га|cesta; silnice
        про́бка|zácpa; zátka
        центр го́рода|centrum města
        окра́ина|okraj města; předměstí
        райо́н|čtvrť; oblast
        проспе́кт|třída; bulvár
        переу́лок|ulička
        на́бережная|nábřeží
        па́мятник|pomník
        собо́р|chrám
        це́рковь|kostel
        поликли́ника|poliklinika
        полице́йский уча́сток|policejní stanice
        стоя́нка|parkoviště
        вход|vchod
        вы́ход|východ
        ря́дом с|vedle
        напро́тив|naproti
        за угло́м|za rohem
        недалеко́ от|nedaleko od`) },

      { name: 'Na cestách', words: T(`
        о́тпуск|dovolená
        о́тдых|odpočinek; rekreace
        пое́хать в о́тпуск|jet na dovolenou
        путёвка|zájezd (poukaz)
        тураге́нтство|cestovní kancelář
        брони́ровать|rezervovat
        заброни́ровать|zarezervovat
        ваго́н|vagon
        купе́|kupé
        плацка́рт|lehátkový vůz (otevřený)
        ме́сто|místo
        ве́рхняя по́лка|horní lehátko
        проводни́к|průvodčí (ve vlaku)
        поса́дка|nástup; přistání
        вы́лет|odlet
        прилёт|přílet
        рейс|let; spoj
        регистра́ция|odbavení; registrace
        бага́ж|zavazadla
        ручна́я кладь|příruční zavazadlo
        тамо́жня|celnice
        путеводи́тель|průvodce (kniha)
        достопримеча́тельность|pamětihodnost
        сувени́р|suvenýr
        загора́ть|opalovat se`) },

      { name: 'V hotelu', words: T(`
        но́мер|pokoj (v hotelu); číslo
        одноме́стный но́мер|jednolůžkový pokoj
        двухме́стный но́мер|dvoulůžkový pokoj
        администра́тор|recepční
        ресе́пшн|recepce
        заселя́ться|ubytovat se
        выселя́ться|odhlásit se (z hotelu)
        горя́чая вода́|teplá voda
        полоте́нце|ručník
        одея́ло|deka
        поду́шка|polštář
        простыня́|prostěradlo
        кондиционе́р|klimatizace
        вай-фа́й|wifi
        паро́ль|heslo
        за́втрак включён|snídaně v ceně
        сло́ман / сло́мана|rozbitý / rozbitá
        не рабо́тает|nefunguje
        убо́рка|úklid
        ти́хий|tichý
        шу́мный|hlučný
        вид на мо́ре|výhled na moře
        хо́стел|hostel
        сосе́д по ко́мнате|spolubydlící
        оста́вить ве́щи|nechat si věci`) },

      { name: 'Restaurace a vaření', words: T(`
        столо́вая|jídelna
        официа́нтка|servírka
        заказа́ть|objednat si
        зака́з|objednávka
        пе́рвое|první chod (polévka)
        второ́е|hlavní chod
        десе́рт|dezert
        заку́ска|předkrm
        напи́ток|nápoj
        чаевы́е|spropitné
        нож|nůž
        ви́лка|vidlička
        ло́жка|lžíce
        таре́лка|talíř
        ча́шка|šálek
        стака́н|sklenice
        вари́ть|vařit (ve vodě)
        жа́рить|smažit; opékat
        ре́зать|krájet
        про́бовать|ochutnávat
        сыт / сыта́|sytý / sytá
        голо́дный|hladový
        вегетариа́нец|vegetarián
        сла́дкое|sladké (dezert)`) },

      { name: 'U lékaře', words: T(`
        бо́лен / больна́|nemocný / nemocná
        просту́диться|nachladit se
        ка́шель|kašel
        на́сморк|rýma
        боли́т го́рло|bolí v krku
        боли́т живо́т|bolí břicho
        боли́т зуб|bolí zub
        чиха́ть|kýchat
        реце́пт|recept (od lékaře)
        табле́тка|tableta
        ка́пли|kapky
        у́кол|injekce
        ско́рая по́мощь|záchranka
        вы́звать врача́|zavolat lékaře
        записа́ться к врачу́|objednat se k lékaři
        осмотре́ть|vyšetřit
        ана́лиз|rozbor; test
        давле́ние|tlak (krevní)
        аллерги́я|alergie
        лечи́ться|léčit se
        вы́здороветь|uzdravit se
        зубно́й врач|zubař
        страхо́вка|pojištění
        пла́стырь|náplast
        бинт|obvaz`) },

      { name: 'Vzhled', words: T(`
        вне́шность|vzhled
        све́тлые во́лосы|světlé vlasy
        тёмные во́лосы|tmavé vlasy
        ры́жий|zrzavý
        борода́|vousy
        усы́|knír
        глаза́|oči
        высо́кого ро́ста|vysoké postavy
        невысо́кий|menší (postavou)
        худо́й|hubený
        по́лный|plnoštíhlý; plný
        стро́йный|štíhlý
        симпати́чный|pohledný; sympatický
        некраси́вый|nehezký
        похо́ж на|podobný (komu)
        вы́глядеть|vypadat
        носи́ть очки́|nosit brýle
        улы́бка|úsměv
        лет тридцати́|kolem třiceti let
        кра́сить во́лосы|barvit si vlasy
        мо́дный|módní
        элега́нтный|elegantní
        бле́дный|bledý
        пожило́й|starší (o člověku)`) },

      { name: 'Povaha', words: T(`
        хара́ктер|povaha
        ве́жливый|zdvořilý
        гру́бый|hrubý
        ще́дрый|štědrý
        жа́дный|lakomý
        че́стный|poctivý
        лени́вый|líný
        трудолюби́вый|pracovitý
        споко́йный|klidný
        не́рвный|nervózní
        серьёзный|vážný
        смешно́й|legrační
        скро́мный|skromný
        го́рдый|hrdý
        засте́нчивый|stydlivý
        общи́тельный|společenský
        откры́тый|otevřený
        упря́мый|tvrdohlavý
        терпели́вый|trpělivý
        надёжный|spolehlivý
        аккура́тный|pečlivý; pořádný
        небре́жный|nedbalý
        эгои́ст|sobec
        оптими́ст|optimista
        пессими́ст|pesimista`) },

      { name: 'Rodina a vztahy', words: T(`
        ро́дственники|příbuzní
        двою́родный брат|bratranec
        двою́родная сестра́|sestřenice
        племя́нник|synovec
        внук|vnuk
        вну́чка|vnučka
        сва́дьба|svatba
        жени́ться на|oženit se s
        вы́йти за́муж за|vdát se za
        пожени́ться|vzít se (o páru)
        развести́сь|rozvést se
        познако́миться с|seznámit se s
        дружи́ть|kamarádit se
        встреча́ться с|chodit s (kým); scházet se
        влюби́ться в|zamilovat se do
        поссо́риться|pohádat se
        помири́ться|usmířit se
        ревнова́ть|žárlit
        скуча́ть по|stýskat se po
        па́ра|pár
        доверя́ть|důvěřovat`) },

      { name: 'Práce a kancelář', words: T(`
        устро́иться на рабо́ту|najít si práci; nastoupit
        уво́литься|dát výpověď
        уво́лить|propustit
        собесе́дование|pracovní pohovor
        резюме́|životopis
        о́пыт рабо́ты|praxe
        до́лжность|pozice; funkce
        сотру́дник|zaměstnanec
        дире́ктор|ředitel
        ме́неджер|manažer
        клие́нт|klient
        перегово́ры|jednání
        совеща́ние|porada
        командиро́вка|služební cesta
        отчёт|zpráva (pracovní)
        догово́р|smlouva
        обе́денный переры́в|obědová pauza
        рабо́чий день|pracovní den
        выходно́й день|volný den
        зараба́тывать|vydělávat
        карье́ра|kariéra
        успе́х|úspěch
        компа́ния|firma; společnost
        предприя́тие|podnik
        сро́чно|naléhavě
        безрабо́тный|nezaměstnaný`) },

      { name: 'Studium', words: T(`
        факульте́т|fakulta
        специа́льность|obor
        курс|ročník; kurz
        ле́кция|přednáška
        семина́р|seminář
        сесси́я|zkouškové období
        сдать экза́мен|udělat zkoušku
        не сдать экза́мен|neudělat zkoušku
        оце́нка|známka
        отли́чно|výborně
        зачёт|zápočet
        дипло́м|diplom
        стипе́ндия|stipendium
        общежи́тие|kolej (ubytovna)
        уче́бник|učebnice
        изучи́ть|nastudovat
        поступи́ть в университе́т|dostat se na univerzitu
        око́нчить шко́лу|dokončit školu
        образова́ние|vzdělání
        иностра́нный язы́к|cizí jazyk
        грамма́тика|gramatika
        произноше́ние|výslovnost
        слова́рный запа́с|slovní zásoba
        перево́д|překlad`) },
    ],
  });
})();
