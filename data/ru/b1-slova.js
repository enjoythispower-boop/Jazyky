/* Ruština B1 – slovíčka (1/2): vid, slovesa s předponami, práce, vzdělání, společnost, média, příroda, zdraví, vztahy */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'b1', {
    vocab: [
      { name: 'Vidové dvojice III', words: T(`
        предлага́ть / предложи́ть|navrhovat / navrhnout; nabízet / nabídnout
        достига́ть / дости́гнуть|dosahovat / dosáhnout
        обсужда́ть / обсуди́ть|probírat / probrat
        сра́внивать / сравни́ть|srovnávat / srovnat
        принима́ть / приня́ть|přijímat / přijmout
        отка́зываться / отказа́ться|odmítat / odmítnout
        соглаша́ться / согласи́ться|souhlasit / svolit
        убежда́ть / убеди́ть|přesvědčovat / přesvědčit
        запомина́ть / запо́мнить|pamatovat si / zapamatovat si
        замеча́ть / заме́тить|všímat si / všimnout si
        исправля́ть / испра́вить|opravovat / opravit
        тра́тить / потра́тить|utrácet / utratit
        сове́товать / посове́товать|radit / poradit
        терпе́ть / потерпе́ть|snášet / vydržet
        боро́ться / поборо́ться|bojovat / zabojovat
        привыка́ть / привы́кнуть|zvykat si / zvyknout si
        скуча́ть / соску́читься|stýskat se / zastesknout se
        беспоко́иться / обеспоко́иться|znepokojovat se / znepokojit se
      `) },
      { name: 'Slovesa s předponami', words: T(`
        заходи́ть / зайти́|zaskočit / zajít
        проходи́ть / пройти́|procházet / projít
        переходи́ть / перейти́|přecházet / přejít
        обходи́ть / обойти́|obcházet / obejít
        доходи́ть / дойти́|docházet / dojít
        отходи́ть / отойти́|odcházet / odejít (kousek)
        подходи́ть / подойти́|přicházet blíž / přijít blíž; hodit se
        выезжа́ть / вы́ехать|vyjíždět / vyjet
        переезжа́ть / перее́хать|stěhovat se / přestěhovat se
        уезжа́ть / уе́хать|odjíždět / odjet
        приезжа́ть / прие́хать|přijíždět / přijet
        доезжа́ть / дое́хать|dojíždět / dojet
        заезжа́ть / зае́хать|zajíždět / zajet
        прилета́ть / прилете́ть|přilétat / přiletět
        улета́ть / улете́ть|odlétat / odletět
        приноси́ть / принести́|přinášet / přinést
        уноси́ть / унести́|odnášet / odnést
        привози́ть / привезти́|přivážet / přivézt
        отвози́ть / отвезти́|odvážet / odvézt
      `) },
      { name: 'Práce a kariéra', words: T(`
        работода́тель|zaměstnavatel
        руководи́тель|vedoucí
        увольне́ние|propuštění; výpověď
        повыше́ние|povýšení
        пе́нсия|důchod
        безрабо́тица|nezaměstnanost
        подава́ть заявле́ние|podávat žádost
        рабо́тать на себя́|pracovat na sebe
        уда́лённая рабо́та|práce na dálku
      `) },
      { name: 'Vzdělání a věda', words: T(`
        вы́сшее образова́ние|vysokoškolské vzdělání
        иссле́дование|výzkum
        учёный|vědec
        откры́тие|objev
        нау́ка|věda
        зна́ние|znalost
        поступа́ть / поступи́ть в университе́т|hlásit se / dostat se na univerzitu
        сдава́ть экза́мен|skládat zkoušku
        провали́ть экза́мен|neudělat zkoušku
        учи́ться на пятёрки|mít samé jedničky
      `) },
      { name: 'Společnost', words: T(`
        о́бщество|společnost
        госуда́рство|stát
        прави́тельство|vláda
        власть|moc
        вы́боры|volby
        зако́н|zákon
        пра́во|právo
        граждани́н|občan
        населе́ние|obyvatelstvo
        поколе́ние|generace
        бе́дность|chudoba
        нера́венство|nerovnost
        демогра́фия|demografie
        мигра́ция|migrace
        пробле́ма|problém
        реше́ние|rozhodnutí; řešení
        ме́стный|místní
        обще́ственный|veřejný; společenský
        голосова́ть|volit; hlasovat
        протестова́ть|protestovat
      `) },
      { name: 'Média a internet', words: T(`
        СМИ|média
        но́вости|zprávy
        статья́|článek
        заголо́вок|titulek
        переда́ча|pořad
        рекла́ма|reklama
        подпи́счик|odběratel; sledující
        соцсе́ти|sociální sítě
        вы́ложить фо́то|dát fotku na síť
        ска́чивать / скача́ть|stahovat / stáhnout
        подпи́сываться / подписа́ться|odebírat / začít odebírat
        лайк|lajk
        фейк|falešná zpráva
        бло́гер|bloger
        пря́мой эфи́р|přímý přenos
      `) },
      { name: 'Příroda a ekologie', words: T(`
        окружа́ющая среда́|životní prostředí
        загрязне́ние|znečištění
        му́сор|odpad; smetí
        перерабо́тка|recyklace
        потепле́ние|oteplování
        за́суха|sucho
        наводне́ние|povodeň
        пожа́р|požár
        живо́тное|zvíře
        бере́чь приро́ду|chránit přírodu
        выбра́сывать / вы́бросить|vyhazovat / vyhodit
      `) },
      { name: 'Zdraví a medicína', words: T(`
        здоро́вье|zdraví
        боле́знь|nemoc
        грипп|chřipka
        ана́лиз кро́ви|krevní test
        опера́ция|operace
        пла́тная кли́ника|soukromá klinika
        чу́вствовать себя́ пло́хо|cítit se špatně
        вызыва́ть врача́|volat lékaře
      `) },
      { name: 'Emoce a vztahy', words: T(`
        оби́да|křivda; ublížení
        злость|vztek
        наде́жда|naděje
        дове́рие|důvěra
        ре́вность|žárlivost
        дру́жба|přátelství
        отноше́ния|vztahy
        ссо́ра|hádka
        обижа́ться / оби́деться|urážet se / urazit se
        ссо́риться / поссо́риться|hádat se / pohádat se
        мири́ться / помири́ться|usmiřovat se / usmířit se
        влюби́ться|zamilovat se
        расста́ться|rozejít se
        скуча́ть по дру́гу|stýskat se po kamarádovi
      `) },
    ],
  });
})();
