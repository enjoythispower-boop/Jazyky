/* Ruština A1 – další gramatika (3) (přízvuk je vyznačen čárkou nad samohláskou) */
(function () {
  JZ.add('ru', 'a1', {
    grammar: [
      {
        id: 'kogda', name: 'Kdy? Dny, měsíce, hodiny',
        rule: `<b>Dny v týdnu:</b> в + 4. pád – <i>в понеде́льник, во вто́рник, в сре́ду, в пя́тницу, в суббо́ту, в воскресе́нье</i>.<br><b>Měsíce:</b> в + 6. pád – <i>в ма́е, в ию́не, в декабре́</i>.<br><b>Denní doby a roční období:</b> 5. pád bez předložky – <i>у́тром, днём, ве́чером, но́чью; весно́й, ле́том, о́сенью, зимо́й</i>.<br><b>Hodiny:</b> <i>в час</i>, po 2, 3, 4 <b>часа́</b> (<i>в два часа́</i>), od 5 <b>часо́в</b> (<i>в пять часо́в</i>).`,
        items: [
          ['Я рабо́таю до́ма в ___.', 'понеде́льник', 'понеде́льник – kdy?', 'V pondělí pracuju z domu.'],
          ['Мы встреча́емся в ___.', 'сре́ду', 'среда́ – kdy?', 'Scházíme se ve středu.'],
          ['В ___ я отдыха́ю.', 'суббо́ту', 'суббо́та – kdy?', 'V sobotu odpočívám.'],
          ['Ба́бушка звони́т нам в ___.', 'пя́тницу', 'пя́тница – kdy?', 'Babička nám volá v pátek.'],
          ['В ___ мы е́здим на да́чу.', 'воскресе́нье', 'воскресе́нье – kdy?', 'V neděli jezdíme na chatu.'],
          ['Уро́к начина́ется в два ___.', 'часа́', 'час – po 2, 3, 4', 'Hodina začíná ve dvě.'],
          ['Я встаю́ в шесть ___.', 'часо́в', 'час – od 5', 'Vstávám v šest.'],
          ['Фильм начина́ется в три ___.', 'часа́', 'час – po 2, 3, 4', 'Film začíná ve tři.'],
          ['Магази́н закрыва́ется в де́сять ___.', 'часо́в', 'час – od 5', 'Obchod zavírá v deset.'],
          ['___ я пью ко́фе.', 'У́тром', 'у́тро – kdy?', 'Ráno piju kávu.'],
          ['___ мы гуля́ем в па́рке.', 'Ве́чером', 'ве́чер – kdy?', 'Večer chodíme na procházku do parku.'],
          ['___ здесь о́чень жа́рко.', 'Ле́том', 'ле́то – kdy?', 'V létě je tu velké horko.'],
          ['___ мы ката́емся на лы́жах.', 'Зимо́й', 'зима́ – kdy?', 'V zimě jezdíme na lyžích.'],
          ['Я родила́сь в ___.', 'ма́е', 'май – v kterém měsíci?', 'Narodila jsem se v květnu.'],
          ['Мы бы́ли в Москве́ в ___.', 'декабре́', 'дека́брь – v kterém měsíci?', 'V Moskvě jsme byli v prosinci.'],
        ],
      },
      {
        id: 'zajmena-akuz', name: 'Меня́, тебя́, его́… – koho?',
        rule: `Osobní zájmena ve 4. pádě (koho? co?): <b>я → меня́, ты → тебя́, он / оно́ → его́, она́ → её, мы → нас, вы → вас, они́ → их</b>.<br>Stejné tvary jsou ve spojení <i>меня́ зову́т</i> (jmenuju se – doslova „mě volají“): <i>Как тебя́ зову́т? Его́ зову́т Ива́н.</i><br>V <b>его́</b> se г čte jako <b>в</b> [jivó].`,
        items: [
          ['Ты ___ лю́бишь?', 'меня́', 'я – koho?', 'Máš mě rád?'],
          ['Я ___ не понима́ю, говори́ ме́дленнее.', 'тебя́', 'ты – koho?', 'Nerozumím ti, mluv pomaleji.'],
          ['Э́то мой брат. ___ зову́т Ива́н.', 'Его́', 'он – koho?', 'To je můj bratr. Jmenuje se Ivan.'],
          ['Э́то моя́ сестра́. ___ зову́т Ка́тя.', 'Её', 'она́ – koho?', 'To je moje sestra. Jmenuje se Káťa.'],
          ['Мы ___ ждём уже́ час.', 'вас', 'вы – koho?', 'Čekáme na vás už hodinu.'],
          ['Роди́тели ___ о́чень лю́бят.', 'нас', 'мы – koho?', 'Rodiče nás mají moc rádi.'],
          ['Где мои́ ключи́? Я ___ не ви́жу.', 'их', 'они́ – koho? co?', 'Kde jsou moje klíče? Nevidím je.'],
          ['Как ___ зову́т?', 'тебя́', 'ты – koho?', 'Jak se jmenuješ?'],
          ['Я ча́сто ___ ви́жу в магази́не.', 'её', 'она́ – koho?', 'Často ji vídám v obchodě.'],
          ['Где Ива́н? Я ___ жду.', 'его́', 'он – koho?', 'Kde je Ivan? Čekám na něj.'],
          ['Извини́те, я ___ не по́нял.', 'вас', 'вы – koho?', 'Promiňte, nerozuměl jsem vám.'],
          ['Ты ___ слы́шишь?', 'меня́', 'я – koho?', 'Slyšíš mě?'],
          ['Мои́ друзья́ живу́т в Москве́. Я ___ ре́дко ви́жу.', 'их', 'они́ – koho?', 'Moji kamarádi bydlí v Moskvě. Vídám je zřídka.'],
          ['Мы ___ давно́ зна́ем.', 'его́', 'он – koho?', 'Známe ho dlouho.'],
        ],
      },
    ],
  });
})();
