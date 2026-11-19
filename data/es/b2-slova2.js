/* Španělština B2 – slovíčka (2/2): příroda, zdraví, psychologie, umění, historie, město, idiomy, psaní */
(function () {
  const { T } = JZ;

  JZ.add('es', 'b2', {
    vocab: [
      { name: 'Klima a příroda', words: T(`
        el huracán|hurikán
        los recursos naturales|přírodní zdroje
        la energía renovable|obnovitelná energie
        agotar|vyčerpat
        derretirse|tát; roztát
      `) },
      { name: 'Zdraví a medicína', words: T(`
        el diagnóstico|diagnóza
        el tratamiento|léčba
        la cirugía|operace; chirurgie
        la urgencia|pohotovost
        el dolor crónico|chronická bolest
        la recuperación|zotavení
        recetar|předepsat
        curarse|uzdravit se
        empeorar|zhoršit se
        mejorar|zlepšit se
        torcerse el tobillo|vyvrtnout si kotník
        estar embarazada|být těhotná
        tener mal de altura|mít výškovou nemoc
        guardar reposo|zůstat v klidu na lůžku
      `) },
      { name: 'Psychologie a osobnost', words: T(`
        la autoestima|sebevědomí; sebeúcta
        el agotamiento|vyčerpání
        la empatía|empatie
        la paciencia|trpělivost
        la terquedad|tvrdohlavost
        la timidez|plachost
        la madurez|zralost
        el hábito|zvyk
        la meta|cíl
        exigente|náročný
        perfeccionista|perfekcionistický
        rencoroso/a|nesmiřitelný
        comprensivo/a|chápavý
        superar|překonat
        afrontar|čelit
        desahogarse|vypovídat se; ulevit si
        salir de la zona de confort|vystoupit z komfortní zóny
      `) },
      { name: 'Umění a literatura', words: T(`
        la obra|dílo
        el ensayo|esej
        el desenlace|rozuzlení
        el narrador|vypravěč
        el lienzo|plátno
        el escenario|jeviště
        el estreno|premiéra
        la banda sonora|soundtrack
        conmovedor/a|dojemný
        retratar|zobrazit; vylíčit
        interpretar|ztvárnit; vyložit
        inspirarse en|inspirovat se
        estar basado en|být založený na
      `) },
      { name: 'Historie a kultura Latinské Ameriky', words: T(`
        la conquista|dobytí
        la colonia|kolonie; koloniální období
        la dictadura|diktatura
        la revolución|revoluce
        el golpe de Estado|státní převrat
        los pueblos originarios|původní obyvatelé
        el mestizaje|míšení (kultur a ras)
        la herencia|dědictví
        el patrimonio|kulturní dědictví
        la memoria histórica|historická paměť
        la época|doba; období
        el antepasado|předek
        conquistar|dobýt
        rendir homenaje a|vzdát hold
        la Guerra Fría|studená válka
      `) },
      { name: 'Město a bydlení', words: T(`
        el casco antiguo|historické centrum
        el tráfico|doprava; provoz
        el embotellamiento|zácpa
        el arrendatario|nájemník
        el propietario|majitel
        el contrato de arrendamiento|nájemní smlouva
        el depósito|kauce
        los servicios|energie a služby
        el vecindario|sousedství
        la gentrificación|gentrifikace
        abarrotado/a|přeplněný
        quedar a mano|být po ruce
        estar mal comunicado|mít špatné spojení
      `) },
      { name: 'Když jde něco špatně', words: T(`
        la queja|stížnost
        la reclamación|reklamace
        la compensación|odškodnění
        el inconveniente|nepříjemnost; potíž
        la demora|zpoždění
        la cancelación|zrušení
        el responsable|odpovědná osoba
        reclamar|reklamovat; stěžovat si
        exigir una explicación|žádat vysvětlení
        hacerse cargo de|převzít odpovědnost za
        solucionar|vyřešit
        no hay derecho|to není fér
        me han cobrado de más|naúčtovali mi víc
        quisiera hablar con el encargado|rád bych mluvil s vedoucím
        según lo acordado|podle dohody
        a la mayor brevedad|co nejdříve
      `) },
      { name: 'Hovorová Latinská Amerika', words: T(`
        chévere|super (Kolumbie, Venezuela)
        bacán|super (Chile, Peru)
        padre|skvělý (Mexiko)
        la chamba|práce (Mexiko, Peru)
        la plata|peníze
        el chamo / la chama|kluk / holka (Venezuela)
        el pibe / la piba|kluk / holka (Argentina)
        el cuate|kamarád (Mexiko)
        el parce|kámoš (Kolumbie)
        ¡qué onda!|jak to jde? (Mexiko)
        ¿qué más?|jak se máš? (Kolumbie)
        ¡aguas!|pozor! (Mexiko)
        ahorita|hned; za chvíli
        al toque|hned (Peru, Argentina)
        de una|jasně; hned (Kolumbie)
        ¡qué pena!|to je mi trapné (Kolumbie); škoda
        vale|dobře; platí
        ni modo|nedá se nic dělat (Mexiko)
        estar crudo/a|mít kocovinu (Mexiko)
        ¡no manches!|to snad ne! (Mexiko)
      `) },
      { name: 'Idiomy', words: T(`
        tirar la toalla|vzdát to
        dar en el clavo|trefit hřebíček na hlavičku
        tener la sartén por el mango|mít navrch
        costar un riñón|stát majlant
        no pegar ojo|nezamhouřit oka
        a otro perro con ese hueso|tohle povídej jinému
        estar como pez en el agua|být jako ryba ve vodě
        hacerse el tonto|dělat hloupého
        más vale tarde que nunca|lepší pozdě než nikdy
        en un abrir y cerrar de ojos|v mžiku
      `) },
      { name: 'Psaní a formální jazyk', words: T(`
        en segundo lugar|zadruhé
        asimismo|rovněž
        con el fin de|za účelem
        en conclusión|na závěr
        Estimado señor / Estimada señora|Vážený pane / Vážená paní
        Le escribo para…|Píšu vám, abych…
        Quedo a la espera de su respuesta.|Těším se na vaši odpověď.
        Atentamente|S pozdravem
        el adjunto|příloha
      `) },
      { name: 'Popis a hodnocení', words: T(`
        impresionante|ohromující
        decepcionante|zklamávající
        sorprendente|překvapivý
        inolvidable|nezapomenutelný
        imprescindible|nepostradatelný
        prescindible|postradatelný
        llamativo/a|nápadný
        acogedor/a|útulný
        agotador/a|vyčerpávající
        gratificante|uspokojivý; obohacující
        polémico/a|kontroverzní
        sobrevalorado/a|přeceňovaný
        asequible|cenově dostupný
        desmesurado/a|přehnaný
        auténtico/a|autentický; pravý
        espantoso/a|příšerný
        encantador/a|okouzlující
        enriquecedor/a|obohacující
        de primera|prvotřídní
        del montón|obyčejný; průměrný
      `) },
    ],
  });
})();
