/* Ruština A1 – fráze: hotové věty z běžných situací (přízvuk je vyznačen) */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'a1', {
    phrases: [
      { name: 'Seznámení', items: T(`
        Как вас зову́т?|Jak se jmenujete?
        Отку́да вы?|Odkud jste?
        Я из Че́хии.|Jsem z Česka.
        Чем вы занима́етесь?|Co děláte? (čím se zabýváte)
        Вы говори́те по-англи́йски?|Mluvíte anglicky?
        Я немно́го говорю́ по-ру́сски.|Mluvím trochu rusky.
        Ско́лько вам лет?|Kolik je vám let?
        Мне три́дцать лет.|Je mi třicet let.
        Э́то мой друг.|Tohle je můj kamarád.
        Я здесь в пе́рвый раз.|Jsem tu poprvé.
        Рад познако́миться!|Rád vás poznávám!
        Дава́й на «ты»?|Budeme si tykat?`) },

      { name: 'V kavárně a restauraci', items: T(`
        Мо́жно меню́?|Můžu dostat jídelní lístek?
        Что вы посове́туете?|Co byste doporučil?
        Я бу́ду суп и сала́т.|Dám si polévku a salát.
        Мне, пожа́луйста, ко́фе с молоко́м.|Pro mě kávu s mlékem, prosím.
        Чай без са́хара.|Čaj bez cukru.
        Э́то о́строе?|Je to pálivé?
        Я не ем мя́со.|Nejím maso.
        Ещё воды́, пожа́луйста.|Ještě vodu, prosím.
        О́чень вку́сно, спаси́бо!|Moc dobré, děkuju!
        Счёт, пожа́луйста.|Účet, prosím.
        Мо́жно ка́ртой?|Můžu platit kartou?
        Здесь свобо́дно?|Je tu volno?
        Сда́чи не на́до.|Drobné si nechte.`) },

      { name: 'V obchodě', items: T(`
        Ско́лько э́то сто́ит?|Kolik to stojí?
        Да́йте, пожа́луйста, э́то.|Dejte mi tohle, prosím.
        Покажи́те, пожа́луйста.|Ukažte mi to, prosím.
        У вас есть вода́?|Máte vodu?
        Э́то сли́шком до́рого.|To je moc drahé.
        Мо́жно приме́рить?|Můžu si to vyzkoušet?
        Есть разме́р побо́льше?|Máte o číslo větší?
        Я возьму́ э́то.|Vezmu si to.
        Где ка́сса?|Kde je pokladna?
        Паке́т ну́жен?|Potřebujete tašku?
        Нет, спаси́бо, я про́сто смотрю́.|Ne, díky, jen se dívám.
        Во ско́лько вы закрыва́етесь?|V kolik zavíráte?`) },

      { name: 'Cesta a doprava', items: T(`
        Как пройти́ к ста́нции метро́?|Jak se dostanu ke stanici metra?
        Где остано́вка авто́буса?|Kde je autobusová zastávka?
        Э́то далеко́?|Je to daleko?
        Иди́те пря́мо, пото́м напра́во.|Jděte rovně, pak doprava.
        Э́то ря́дом.|To je kousek odsud.
        Како́й авто́бус идёт в центр?|Který autobus jede do centra?
        Где купи́ть биле́т?|Kde si koupím jízdenku?
        Оди́н биле́т до Москвы́, пожа́луйста.|Jednu jízdenku do Moskvy, prosím.
        Когда́ отхо́дит по́езд?|Kdy odjíždí vlak?
        Вы сейча́с выхо́дите?|Vystupujete teď?
        Я заблуди́лся.|Zabloudil jsem.
        Остано́вите здесь, пожа́луйста.|Zastavte tady, prosím.`) },

      { name: 'V hotelu', items: T(`
        У меня́ бронь.|Mám rezervaci.
        У вас есть свобо́дные номера́?|Máte volné pokoje?
        Ско́лько сто́ит но́мер на одну́ ночь?|Kolik stojí pokoj na jednu noc?
        За́втрак включён?|Je snídaně v ceně?
        Во ско́лько за́втрак?|V kolik je snídaně?
        Како́й паро́ль от вай-фа́я?|Jaké je heslo na wifi?
        В но́мере нет горя́чей воды́.|V pokoji neteče teplá voda.
        Не рабо́тает кондиционе́р.|Nefunguje klimatizace.
        Мо́жно оста́вить ве́щи?|Můžu si tu nechat věci?
        Мо́жно ещё одно́ полоте́нце?|Můžu dostat ještě jeden ručník?
        Вы́зовите, пожа́луйста, такси́.|Zavolejte mi prosím taxi.
        Я уезжа́ю за́втра у́тром.|Odjíždím zítra ráno.`) },

      { name: 'Když nerozumím', items: T(`
        Говори́те, пожа́луйста, ме́дленнее.|Mluvte prosím pomaleji.
        Я не по́нял.|Nerozuměl jsem.
        Что э́то зна́чит?|Co to znamená?
        Как э́то по-ру́сски?|Jak se to řekne rusky?
        Как э́то пи́шется?|Jak se to píše?
        Напиши́те, пожа́луйста.|Napište mi to, prosím.
        Я пло́хо говорю́ по-ру́сски.|Mluvím špatně rusky.
        Я учу́ ру́сский язы́к.|Učím se rusky.
        Вы меня́ понима́ете?|Rozumíte mi?
        Как вы сказа́ли?|Jak jste to říkal?
        Извини́те, я не расслы́шал.|Promiňte, přeslechl jsem to.
        Что вы име́ете в виду́?|Co tím myslíte?`) },

      { name: 'Prosby, díky a omluvy', items: T(`
        Помоги́те, пожа́луйста!|Pomozte mi, prosím!
        Мо́жно вас попроси́ть?|Můžu vás o něco poprosit?
        Вы не могли́ бы мне помо́чь?|Nemohl byste mi pomoct?
        Большо́е спаси́бо!|Děkuju moc!
        Спаси́бо за по́мощь.|Děkuju za pomoc.
        Спаси́бо, вы о́чень любе́зны.|Děkuju, jste moc laskav.
        Извини́те за опозда́ние.|Promiňte, že jdu pozdě.
        Прости́, я не хоте́л.|Promiň, nechtěl jsem.
        Ничего́, всё норма́льно.|To nic, všechno v pohodě.
        Бу́дьте добры́, да́йте соль.|Buďte tak laskav, podejte sůl.
        Здесь за́нято?|Je tu obsazeno?
        Разреши́те пройти́.|Dovolte, abych prošel.`) },

      { name: 'Schůzky a plány', items: T(`
        Что ты де́лаешь ве́чером?|Co děláš večer?
        Дава́й встре́тимся за́втра.|Sejdeme se zítra.
        Где встре́тимся?|Kde se sejdeme?
        Дава́й в семь у метро́.|Tak v sedm u metra.
        Хорошо́, договори́лись.|Dobře, platí.
        Пойдём в кино́?|Půjdeme do kina?
        Сего́дня не могу́.|Dneska nemůžu.
        Извини́, я опа́здываю.|Promiň, mám zpoždění.
        Я уже́ иду́.|Už jdu.
        Я на ме́сте.|Už jsem na místě.
        Позвони́ мне по́сле рабо́ты.|Zavolej mi po práci.
        Мне пора́.|Musím jít.`) },

      { name: 'Každý den', items: T(`
        Я встаю́ в семь часо́в.|Vstávám v sedm hodin.
        Я иду́ на рабо́ту.|Jdu do práce.
        Я уже́ до́ма.|Už jsem doma.
        Я о́чень уста́л.|Jsem hrozně unavený.
        Я хочу́ есть.|Mám hlad.
        Я хочу́ пить.|Mám žízeň.
        Како́й сего́дня день?|Jaký je dnes den?
        Ско́лько сейча́с вре́мени?|Kolik je hodin?
        Сего́дня хоро́шая пого́да.|Dnes je hezky.
        На у́лице хо́лодно.|Venku je zima.
        У меня́ нет вре́мени.|Nemám čas.
        Мне ну́жно в магази́н.|Musím do obchodu.`) },
    ],
  });
})();
