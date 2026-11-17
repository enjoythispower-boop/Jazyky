/* Španělština B1 – další gramatika (3) */
(function () {
  JZ.add('es', 'b1', {
    grammar: [
      {
        id: 'ind-irr', name: 'Indefinido: nepravidelná slovesa',
        rule: `Nejčastější nepravidelná slovesa mají v indefinidu <b>vlastní kmen</b> a koncovky <b>-e, -iste, -o, -imos, -isteis, -ieron</b> (bez přízvuku!):<br><i>tener → tuv-, estar → estuv-, poder → pud-, poner → pus-, saber → sup-, venir → vin-, querer → quis-, hacer → hic- (hizo)</i>.<br>Kmen na <b>-j</b> má ve 3. os. mn. č. <b>-eron</b>: <i>decir → dije, dijeron; traer → traje, trajeron; conducir → conduje</i>.<br><b>Ser</b> a <b>ir</b> mají stejné tvary: <i>fui, fuiste, fue, fuimos, fueron</i>. <b>Dar</b>: <i>di, diste, dio</i>.`,
        items: [
          ['Ayer no ___ tiempo de llamarte.', 'tuve', 'tener, yo', 'Včera jsem neměl čas ti zavolat.'],
          ['¿Dónde ___ ustedes el fin de semana?', 'estuvieron', 'estar, ustedes', 'Kde jste byli o víkendu?'],
          ['No ___ dormir por el ruido.', 'pude', 'poder, yo', 'Nemohl jsem spát kvůli hluku.'],
          ['¿Qué ___ tú anoche?', 'hiciste', 'hacer, tú', 'Co jsi dělal včera večer?'],
          ['Mi hermana ___ la mesa para la cena.', 'puso', 'poner, ella', 'Sestra prostřela stůl k večeři.'],
          ['Cuando ___ la noticia, me puse muy contento.', 'supe', 'saber, yo – „dozvěděl jsem se“', 'Když jsem se dozvěděl tu novinu, moc jsem se zaradoval.'],
          ['Mis amigos ___ a visitarme en mayo.', 'vinieron', 'venir, ellos', 'Kamarádi mě přijeli navštívit v květnu.'],
          ['Ella me ___ que no podía venir.', 'dijo', 'decir, ella', 'Řekla mi, že nemůže přijít.'],
          ['Los turistas ___ muchos regalos.', 'trajeron', 'traer, ellos', 'Turisté přivezli hodně dárků.'],
          ['El año pasado ___ a Cuba de vacaciones.', 'fuimos', 'ir, nosotros', 'Loni jsme jeli na dovolenou na Kubu.'],
          ['La fiesta ___ increíble.', 'fue', 'ser', 'Večírek byl neuvěřitelný.'],
          ['Le ___ un regalo a mi madre.', 'di', 'dar, yo', 'Dal jsem mámě dárek.'],
          ['No ___ ir al cine con nosotros.', 'quiso', 'querer, él – „nechtěl“', 'Nechtěl jít s námi do kina.'],
          ['¿Quién ___ el coche hasta la playa?', 'condujo', 'conducir, él', 'Kdo řídil auto až na pláž?'],
          ['___ que esperar dos horas en el aeropuerto.', 'Tuvimos', 'tener, nosotros', 'Museli jsme čekat dvě hodiny na letišti.'],
        ],
      },
      {
        id: 'tiempo-hace', name: 'Hace, desde, desde hace, durante',
        rule: `<b>hace + doba</b> = před (dobou), s minulým časem: <i>Llegué hace dos días.</i> (Přijel jsem před dvěma dny.)<br><b>desde hace + doba</b> = už (dobu), s přítomným časem: <i>Vivo aquí desde hace un año.</i> Totéž: <b>hace + doba + que</b>: <i>Hace un año que vivo aquí.</i><br><b>desde + okamžik</b> = od: <i>desde enero, desde ayer</i>. <b>durante</b> = během, po dobu: <i>durante el viaje</i>. <b>dentro de</b> = za (dobu) v budoucnosti: <i>dentro de una hora</i>.`,
        items: [
          ['Llegué a México ___ tres semanas.', 'hace', 'před třemi týdny', 'Přijel jsem do Mexika před třemi týdny.'],
          ['Estudio español ___ hace dos años.', 'desde', 'už dva roky', 'Učím se španělsky už dva roky.'],
          ['No como carne ___ enero.', 'desde', 'od ledna', 'Od ledna nejím maso.'],
          ['___ mucho tiempo que no te veo.', 'Hace', 'už dlouho…', 'Už dlouho jsem tě neviděl.'],
          ['Dormí ___ todo el viaje.', 'durante', 'po celou dobu cesty', 'Celou cestu jsem prospal.'],
          ['El tren sale ___ de diez minutos.', 'dentro', 'za deset minut', 'Vlak odjíždí za deset minut.'],
          ['La conocí ___ cinco años en una fiesta.', 'hace', 'před pěti lety', 'Poznal jsem ji před pěti lety na večírku.'],
          ['Trabajo en este hotel ___ el año pasado.', 'desde', 'od loňska', 'V tomhle hotelu pracuju od loňska.'],
          ['¿___ cuándo vives en Lima?', 'Desde', 'odkdy?', 'Odkdy bydlíš v Limě?'],
          ['Hace dos horas ___ te estoy esperando.', 'que', 'hace… que', 'Už dvě hodiny na tebe čekám.'],
          ['Llovió mucho ___ la noche.', 'durante', 'během noci', 'V noci hodně pršelo.'],
          ['Te llamo ___ de una hora.', 'dentro', 'za hodinu', 'Zavolám ti za hodinu.'],
          ['Vivimos juntos desde ___ seis meses.', 'hace', 'už šest měsíců', 'Bydlíme spolu už šest měsíců.'],
          ['El museo está cerrado ___ el lunes.', 'desde', 'od pondělí', 'Muzeum je zavřené od pondělí.'],
        ],
      },
    ],
  });
})();
