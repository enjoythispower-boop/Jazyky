/* Ruština A2 – slovíčka (2/2): volný čas, kultura, příroda, technika, služby, pocity, čas, fráze */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'a2', {
    vocab: [
      { name: 'Sport a volný čas', words: T(`
        занима́ться спо́ртом|sportovat
        трениро́вка|trénink
        тре́нер|trenér
        кома́нда|tým
        матч|zápas
        вы́играть|vyhrát
        проигра́ть|prohrát
        счёт ма́тча|skóre zápasu
        боле́ть за|fandit (komu)
        боле́льщик|fanoušek
        бассе́йн|bazén
        спортза́л|posilovna
        лы́жи|lyže
        коньки́|brusle
        ката́ться на велосипе́де|jezdit na kole
        ходи́ть в похо́д|chodit na túry
        рыба́лка|rybaření
        соревнова́ние|závod; soutěž
        чемпиона́т|mistrovství
        йо́га|jóga
        заря́дка|ranní rozcvička
        увлече́ние|záliba; koníček`) },

      { name: 'Kultura a umění', words: T(`
        иску́сство|umění
        карти́на|obraz
        вы́ставка карти́н|výstava obrazů
        галере́я|galerie
        бале́т|balet
        о́пера|opera
        спекта́кль|představení
        актёр|herec
        актри́са|herečka
        режиссёр|režisér
        писа́тель|spisovatel
        поэ́т|básník
        стихи́|básně; verše
        рома́н|román
        расска́з|povídka
        ска́зка|pohádka
        пе́сня|píseň
        певе́ц|zpěvák
        певи́ца|zpěvačka
        гру́ппа|skupina; kapela
        сце́на|jeviště; scéna
        биле́т в теа́тр|lístek do divadla
        антра́кт|přestávka (v divadle)
        аплоди́ровать|tleskat`) },

      { name: 'Příroda a počasí', words: T(`
        кли́мат|podnebí
        прогно́з пого́ды|předpověď počasí
        со́лнечно|slunečno
        о́блачно|oblačno
        па́смурно|zataženo
        дождли́вый|deštivý
        гроза́|bouřka
        мо́лния|blesk
        гром|hrom
        ра́дуга|duha
        сугро́б|závěj
        лёд|led
        ве́тер ду́ет|fouká vítr
        поте́плело|oteplilo se
        похолода́ло|ochladilo se
        жара́|vedro
        вла́жный|vlhký
        сухо́й|suchý
        тайга́|tajga
        степь|step
        пусты́ня|poušť
        боло́то|bažina
        водопа́д|vodopád
        доли́на|údolí
        вулка́н|sopka`) },

      { name: 'Technika a internet', words: T(`
        ноутбу́к|notebook
        смартфо́н|chytrý telefon
        заря́дка для телефо́на|nabíječka
        батаре́йка|baterie
        сеть|síť
        сайт|webová stránka
        ссы́лка|odkaz
        электро́нная по́чта|e-mail
        сообще́ние|zpráva
        написа́ть в мессендже́ре|napsat přes messenger
        скача́ть|stáhnout
        загрузи́ть|nahrát
        удали́ть|smazat
        сохрани́ть|uložit
        нажа́ть|zmáčknout
        паро́ль от вай-фа́я|heslo k wifi
        аккау́нт|účet (na webu)
        приложе́ние|aplikace
        видеозвоно́к|videohovor
        экра́н|obrazovka
        клавиату́ра|klávesnice
        включи́ть|zapnout
        вы́ключить|vypnout`) },

      { name: 'Obchody a služby', words: T(`
        универма́г|obchodní dům
        торго́вый центр|nákupní centrum
        отде́л|oddělení
        приме́рочная|zkušební kabinka
        приме́рить|vyzkoušet si (oblečení)
        подойти́ по разме́ру|padnout (velikostí)
        поме́ньше|o něco menší
        побо́льше|o něco větší
        чек|účtenka
        гара́нтия|záruka
        верну́ть това́р|vrátit zboží
        обменя́ть|vyměnit
        беспла́тно|zdarma
        распрода́жа|výprodej
        парикма́херская|kadeřnictví
        постри́чься|nechat se ostříhat
        химчи́стка|čistírna
        ремо́нт|oprava; rekonstrukce
        почини́ть|opravit
        обме́н валю́ты|směnárna
        курс валю́ты|kurz měny
        снять де́ньги|vybrat peníze
        банкома́т|bankomat
        креди́тная ка́рта|kreditní karta
        о́чередь|fronta`) },

      { name: 'Pocity a emoce', words: T(`
        чу́вство|pocit
        настрое́ние|nálada
        хоро́шее настрое́ние|dobrá nálada
        удивля́ться|divit se
        удивлён / удивлена́|překvapený / překvapená
        обижа́ться|urážet se
        оби́жен / оби́жена|uražený / uražená
        волнова́ться|mít obavy; být nervózní
        беспоко́иться|dělat si starosti
        боя́ться|bát se
        серди́ться|zlobit se
        ра́доваться|radovat se
        стесня́ться|stydět se
        наде́яться|doufat
        уста́лость|únava
        одино́чество|samota
        споко́йствие|klid
        зави́довать|závidět
        жале́ть|litovat
        горди́ться|být hrdý
        интере́с|zájem
        ску́ка|nuda
        страх|strach
        не́нависть|nenávist`) },

      { name: 'Čas a frekvence', words: T(`
        неда́вно|nedávno
        давно́|dávno; dlouho
        сра́зу|hned
        наконе́ц|konečně
        зате́м|poté
        раз в неде́лю|jednou týdně
        два ра́за в ме́сяц|dvakrát měsíčně
        че́рез час|za hodinu
        час наза́д|před hodinou
        на про́шлой неде́ле|minulý týden
        на сле́дующей неде́ле|příští týden
        в про́шлом году́|loni
        в э́том году́|letos
        в бу́дущем году́|příští rok
        полчаса́|půl hodiny
        че́тверть часа́|čtvrt hodiny
        сего́дня у́тром|dnes ráno
        за́втра ве́чером|zítra večer
        в выходны́е|o víkendu`) },

      { name: 'Spojky a příslovce', words: T(`
        хотя́|i když
        так как|protože; jelikož
        что́бы|aby
        е́сли бы|kdyby
        когда́ (spojka)|když
        всё ещё|stále ještě
        пока́ не|dokud ne
        как то́лько|jakmile
        зато́|zato
        одна́ко|avšak
        кро́ме того́|kromě toho
        к сожале́нию|bohužel
        к сча́стью|naštěstí
        по-мо́ему|podle mě
        наве́рное|asi; pravděpodobně
        вообще́|vůbec; obecně
        совсе́м|úplně
        почти́|skoro
        вдруг|najednou
        сно́ва|znovu`) },

      { name: 'Užitečné fráze', words: T(`
        Как пройти́ к…?|Jak se dostanu k…?
        Не подска́жете…?|Neporadíte mi…?
        Мо́жно вас спроси́ть?|Můžu se vás zeptat?
        Всё в поря́дке.|Všechno je v pořádku.
        Ничего́ стра́шного.|To nic. / Nic se neděje.
        Бу́дьте добры́…|Buďte tak laskav…
        С удово́льствием!|S radostí!
        Договори́лись!|Dohodnuto!
        Жаль.|Škoda.
        Я не про́тив.|Nemám nic proti.
        Мне всё равно́.|Je mi to jedno.
        Как жаль!|To je škoda!
        Не мо́жет быть!|To není možné!
        Ну и что?|No a co?
        Как здо́рово!|To je skvělé!
        С Но́вым го́дом!|Šťastný nový rok!
        Счастли́вого пути́!|Šťastnou cestu!
        Уда́чи!|Hodně štěstí!
        Береги́ себя́!|Dávej na sebe pozor!
        Пока́, до за́втра!|Uvidíme se zítra!
        Переда́й приве́т…|Pozdravuj…`) },

      { name: 'Jaký je? (další přídavná jména)', words: T(`
        удо́бный|pohodlný
        неудо́бный|nepohodlný
        поле́зный|užitečný
        вре́дный|škodlivý
        опа́сный|nebezpečný
        безопа́сный|bezpečný
        изве́стный|známý; slavný
        знамени́тый|slavný
        обы́чный|obyčejný
        стра́нный|zvláštní; divný
        гро́мкий|hlasitý
        я́ркий|jasný; výrazný
        прохла́дный|chladný (příjemně)
        мя́гкий|měkký
        твёрдый|tvrdý
        све́жий|čerstvý
        по́здний|pozdní
        ра́нний|raný; časný
        бы́вший|bývalý
        сле́дующий|následující; příští`) },

      { name: 'Ruská realita', words: T(`
        да́ча|chata; dača
        ба́ня|lázeň (sauna)
        самова́р|samovar
        матрёшка|matrjoška
        пирожки́|pirožky
        квас|kvas
        щи|zelňačka (šči)
        борщ|boršč
        сала́т оливье́|salát Olivier
        гре́чка|pohanka
        сме́тана|zakysaná smetana
        тво́рог|tvaroh
        варе́нье|zavařenina
        ёлка|vánoční stromek
        Дед Моро́з|Děda Mráz
        Ма́сленица|Masopust
        электри́чка|příměstský vlak
        маршру́тка|maršrutka (minibus)
        коммуна́лка|společný byt
        хрущёвка|panelák (chruščovka)
        подъе́зд|vchod (do paneláku)
        ба́бушка на ла́вочке|babička na lavičce
        тост|přípitek
        За здоро́вье!|Na zdraví! (přípitek)`) },

      { name: 'Domácnost a den', words: T(`
        убира́ться|uklízet
        пылесо́сить|vysávat
        стира́ть|prát
        гла́дить|žehlit
        мыть посу́ду|mýt nádobí
        выноси́ть му́сор|vynášet odpadky
        ходи́ть за поку́пками|chodit nakupovat
        полива́ть цветы́|zalévat květiny
        гото́вить у́жин|vařit večeři
        накрыва́ть на стол|prostírat stůl
        стира́льная маши́на|pračka
        пылесо́с|vysavač
        у́тюг|žehlička
        посудомо́ечная маши́на|myčka
        розе́тка|zásuvka
        ла́мпочка|žárovka
        кран|kohoutek
        ключ от кварти́ры|klíč od bytu
        замо́к|zámek (na dveřích)
        сосе́ди све́рху|sousedé shora
        пла́та за кварти́ру|nájemné
        снима́ть кварти́ру|pronajímat si byt
        переезжа́ть|stěhovat se
        ремо́нт кварти́ры|rekonstrukce bytu
        ую́тный|útulný`) },

      { name: 'Zrádná slova II', words: T(`
        чёрствый|okoralý; bezcitný
        вонь|smrad
        позо́р|hanba; ostuda
        ла́вка|krámek; lavice
        пыта́ться|snažit se; pokoušet se
        на́глый|drzý
        прили́чный|slušný; pořádný
        ли́чный|osobní
        ведро́|kbelík
        заво́д|továrna
        я́года|bobule; lesní plod
        ла́ска|něha; laskavost`) },
    ],
  });
})();
