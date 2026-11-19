/* Ruština B1 – fráze: názor, souhlas a nesouhlas, prosby, reakce, problémy (přízvuk je vyznačen čárkou) */
(function () {
  const { T } = JZ;

  JZ.add('ru', 'b1', {
    phrases: [
      { name: 'Názor', items: T(`
        Мне ка́жется, ты прав.|Myslím, že máš pravdu.
        Я счита́ю, что э́то непра́вильно.|Myslím si, že to není správné.
        С мое́й то́чки зре́ния, всё ина́че.|Z mého pohledu je to jinak.
        Я не уве́рен, что э́то так.|Nejsem si jistý, že je to tak.
        Пре́жде всего́ на́до поду́мать.|Především je třeba se zamyslet.
        Де́ло не в деньга́х.|Nejde o peníze.
      `) },
      { name: 'Souhlas a nesouhlas', items: T(`
        Я с ва́ми не совсе́м согла́сен.|Nesouhlasím s vámi úplně.
        Не могу́ с э́тим согласи́ться.|S tím nemůžu souhlasit.
        Мо́жет быть, но я сомнева́юсь.|Možná, ale pochybuju.
        Ни в ко́ем слу́чае!|V žádném případě!
        Ла́дно, пусть бу́дет так.|Dobře, ať je to tak.
      `) },
      { name: 'Zdvořilé prosby', items: T(`
        Не могли́ бы вы мне помо́чь?|Mohl byste mi pomoct?
        Бу́дьте добры́, да́йте счёт.|Buďte tak laskav, dejte mi účet.
        Вы не подска́жете, где вокза́л?|Neporadíte mi, kde je nádraží?
        Извини́те за беспоко́йство.|Promiňte, že obtěžuju.
        Е́сли вам не тру́дно, закро́йте окно́.|Jestli vám to nevadí, zavřete okno.
        Мо́жно вас на мину́тку?|Můžu vás na chvilku?
        Зара́нее спаси́бо.|Předem děkuju.
      `) },
      { name: 'Reakce v rozhovoru', items: T(`
        Да ты что!|Ale jdi!
        Не мо́жет быть!|To není možné!
        Вот э́то да!|No teda!
        Ну и что?|No a co?
        Ещё бы!|To se ví!
        Как жаль!|To je škoda!
        Сла́ва бо́гу!|Díky bohu!
        Поня́тия не име́ю.|Nemám tušení.
        Тем лу́чше.|Tím líp.
      `) },
      { name: 'Když je problém', items: T(`
        У меня́ пробле́ма с но́мером.|Mám problém s pokojem.
        Э́то не то, что я зака́зывал.|Tohle není to, co jsem objednal.
        Я хоте́л бы поговори́ть с администра́тором.|Chtěl bych mluvit s vedoucím.
        Мне ну́жно поменя́ть биле́т.|Potřebuju vyměnit lístek.
        Меня́ обсчита́ли.|Ošidili mě při placení.
        Что мне тепе́рь де́лать?|Co mám teď dělat?
      `) },
      { name: 'Pocity a podpora', items: T(`
        Не расстра́ивайся, всё бу́дет хорошо́.|Nesmutni, všechno bude dobré.
        Я так рад тебя́ ви́деть!|Tak rád tě vidím!
        Мне о́чень жаль, что так получи́лось.|Moc mě mrzí, že to tak dopadlo.
        Ты молоде́ц!|Jsi šikula!
        Держи́сь!|Drž se!
        Я по тебе́ соску́чился.|Stýskalo se mi po tobě.
        Не обраща́й внима́ния.|Nevšímej si toho.
      `) },
    ],
  });
})();
