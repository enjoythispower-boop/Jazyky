/* Ruština A2 – fráze: lékař, vlak, telefon, návštěva, problémy a ustálená spojení (přízvuk je vyznačen) */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'a2', {
    phrases: [
      { name: 'U lékaře a v lékárně', items: T(`
        Мне пло́хо.|Je mi zle.
        У меня́ высо́кая температу́ра.|Mám vysokou horečku.
        У меня́ си́льно боли́т голова́.|Hrozně mě bolí hlava.
        Мне ну́жен врач.|Potřebuju lékaře.
        Вы́зовите ско́рую!|Zavolejte záchranku!
        Где ближа́йшая апте́ка?|Kde je nejbližší lékárna?
        У вас есть что́-нибудь от ка́шля?|Máte něco na kašel?
        Э́то лека́рство без реце́пта?|Je ten lék bez receptu?
        Как принима́ть э́то лека́рство?|Jak se ten lék užívá?
        По одно́й табле́тке три ра́за в день.|Jednu tabletu třikrát denně.
        У меня́ аллерги́я на оре́хи.|Mám alergii na ořechy.
        Я простуди́лся.|Nachladil jsem se.
        Что у вас боли́т?|Co vás bolí?`) },

      { name: 'Na nádraží a ve vlaku', items: T(`
        С како́й платфо́рмы отхо́дит по́езд?|Z kterého nástupiště odjíždí vlak?
        По́езд опа́здывает?|Má vlak zpoždění?
        Где мой ваго́н?|Kde je můj vagon?
        Э́то моё ме́сто.|Tohle je moje místo.
        Мо́жно поменя́ться места́ми?|Můžeme si vyměnit místa?
        Принеси́те, пожа́луйста, чай.|Přineste mi prosím čaj.
        Ско́лько стоя́ть на э́той ста́нции?|Jak dlouho na téhle stanici stojíme?
        Я сойду́ на сле́дующей.|Vystupuju na příští.
        Где ка́мера хране́ния?|Kde je úschovna zavazadel?
        Я опозда́л на по́езд.|Ujel mi vlak.
        Оди́н биле́т туда́ и обра́тно.|Jednu zpáteční jízdenku.
        Когда́ мы прибыва́ем?|Kdy přijedeme?`) },

      { name: 'Telefon a zprávy', items: T(`
        Алло́, я вас слу́шаю.|Haló, poslouchám.
        Мо́жно Ива́на?|Můžu mluvit s Ivanem?
        Вас пло́хо слы́шно.|Špatně vás slyším.
        Я перезвоню́ попо́зже.|Zavolám později.
        Ска́жите ему́, что я звони́л.|Řekněte mu, že jsem volal.
        Напиши́ мне, когда́ прие́дешь.|Napiš mi, až přijedeš.
        Дай мне свой но́мер.|Dej mi svoje číslo.
        У меня́ сел телефо́н.|Vybil se mi telefon.
        Здесь нет свя́зи.|Není tu signál.
        Я не могу́ дозвони́ться.|Nemůžu se dovolat.
        Скинь мне а́дрес.|Pošli mi adresu.
        Вы не туда́ попа́ли.|Máte špatné číslo.`) },

      { name: 'Návštěva a pozvání', items: T(`
        Приходи́ к нам в го́сти!|Přijď k nám na návštěvu!
        Проходи́те, раздева́йтесь.|Pojďte dál, odložte si.
        Чу́вствуйте себя́ как до́ма.|Buďte tu jako doma.
        Угоща́йтесь!|Poslužte si!
        Хоти́те ча́ю?|Dáte si čaj?
        Всё о́чень вку́сно.|Všechno je moc dobré.
        Спаси́бо за приглаше́ние.|Děkuju za pozvání.
        Мо́жно ещё кусо́чек?|Můžu si dát ještě kousek?
        Я бо́льше не могу́, спаси́бо.|Už nemůžu, děkuju.
        Нам пора́ домо́й.|Musíme už domů.
        Спаси́бо, всё бы́ло замеча́тельно.|Díky, všechno bylo skvělé.
        Приезжа́йте к нам ещё!|Přijeďte zas!`) },

      { name: 'Problémy a pomoc', items: T(`
        У меня́ укра́ли кошелёк.|Ukradli mi peněženku.
        Я потеря́л па́спорт.|Ztratil jsem pas.
        Где ближа́йшее отделе́ние поли́ции?|Kde je nejbližší policejní služebna?
        Помоги́те, пожа́луйста, э́то сро́чно.|Pomozte prosím, je to naléhavé.
        Банкома́т съел мою́ ка́рту.|Bankomat mi spolkl kartu.
        Мне ну́жно заблоки́ровать ка́рту.|Potřebuju zablokovat kartu.
        Я опозда́л на самолёт.|Zmeškal jsem letadlo.
        Мой бага́ж не прилете́л.|Nepřiletělo mi zavazadlo.
        Тут кто́-нибудь говори́т по-англи́йски?|Mluví tu někdo anglicky?
        Что случи́лось?|Co se stalo?
        Не волну́йтесь, мы вам помо́жем.|Nebojte se, pomůžeme vám.
        Всё бу́дет хорошо́.|Všechno bude dobré.`) },

      { name: 'Názor a reakce', items: T(`
        По-мо́ему, э́то хоро́шая иде́я.|Podle mě je to dobrý nápad.
        Я ду́маю, что ты прав.|Myslím, že máš pravdu.
        Я с тобо́й согла́сен.|Souhlasím s tebou.
        Я не уве́рен.|Nejsem si jistý.
        Ты абсолю́тно прав.|Máš naprostou pravdu.
        Како́е твоё мне́ние?|Jaký je tvůj názor?
        Всё зави́сит от пого́ды.|Všechno záleží na počasí.
        Мне э́то не нра́вится.|To se mi nelíbí.
        Ну, я не зна́ю.|No, já nevím.
        Ты шу́тишь?|Děláš si legraci?
        Да ла́дно!|Ale jdi! / Fakt?
        Ничего́ себе́!|No teda!
        Како́й у́жас!|To je hrůza!`) },

      { name: 'Obchody a služby', items: T(`
        Я хочу́ верну́ть э́ту вещь.|Chci vrátit tuhle věc.
        Мо́жно обменя́ть на друго́й разме́р?|Můžu to vyměnit za jinou velikost?
        Вот чек.|Tady je účtenka.
        Э́то на гара́нтии?|Je to v záruce?
        Где здесь мо́жно поменя́ть де́ньги?|Kde si tu můžu vyměnit peníze?
        Како́й сего́дня курс?|Jaký je dnes kurz?
        Мне ну́жно постри́чься.|Potřebuju se ostříhat.
        Покоро́че, пожа́луйста.|Kratší, prosím.
        Мне ну́жно отпра́вить посы́лку.|Potřebuju poslat balík.
        Ско́лько э́то займёт вре́мени?|Jak dlouho to bude trvat?
        Когда́ бу́дет гото́во?|Kdy to bude hotové?
        Кто после́дний?|Kdo je poslední? (ve frontě)`) },

      { name: 'Častá slovní spojení', items: T(`
        принима́ть душ|sprchovat se
        принима́ть реше́ние|rozhodovat se
        де́лать оши́бку|dělat chybu
        задава́ть вопро́с|klást otázku
        обраща́ть внима́ние|všímat si; věnovat pozornost
        име́ть в виду́|mít na mysli
        проводи́ть вре́мя|trávit čas
        теря́ть вре́мя|ztrácet čas
        брать такси́|brát si taxi
        игра́ть роль|hrát roli
        держа́ть сло́во|dodržet slovo
        находи́ть о́бщий язы́к|nacházet společnou řeč`) },
    ],
  });
})();
