/**
 * lib/strategies.js
 * Data for the strategies page — hur idéer omsätts i mobilisering och makt.
 *
 * Varje strategi är ideologiskt neutral i sig: den kan drivas av vänster,
 * höger, gröna eller nationalister. Fältet `vägval` beskriver medvetet två
 * banor (demokratisk / auktoritär) utan att hävda att en strategi
 * automatiskt leder till den ena eller andra — utfallet beror på vägval,
 * institutionell motståndskraft och hur strategin praktiseras över tid.
 */

export const strategies = [
  {
    id: 'populism',
    label: 'Populism',
    tagline: 'Folkets vilja mot en avlägsen elit.',
    kort: [
      'Vi mot en avlägsen elit',
      'Karismatiskt, direktkommunicerande ledarskap',
      'Snabb omvandling av löften till synliga resultat',
    ],
    mål: 'Ge röst åt grupper som upplever sig förbisedda av etablerade institutioner, och korrigera en upplevd klyfta mellan folkviljan och de som styr.',
    mobilisering: {
      retorik: 'Enkel vi/de-uppdelning mellan "folket" och "eliten".',
      kanaler: 'Direktkommunikation som kringgår traditionella partier och medier — tal, sociala medier, folkmöten.',
      känslor: ['Att bli sedd och hörd', 'Frustration över uteblivna svar', 'Tillhörighet'],
    },
    makttaktik: {
      metoder: [
        'Direktdemokratiska grepp (folkomröstningar, utropad "sann" folkvilja)',
        'Karismatiskt, personcentrerat ledarskap',
        'Snabb mandatomvandling — löften omsätts synligt och fort',
      ],
      hantering_av_opposition: 'Varierar starkt — från saklig debatt om sakfrågor till att måla motståndare som del av "eliten" snarare än legitima meningsmotståndare.',
    },
    effektkedjor: {
      första: {
        styrka: 'Ökat valdeltagande och engagemang hos grupper som tidigare stod utanför.',
        risk: 'Förenklad problemanalys — komplexa frågor reduceras till vi/de.',
      },
      andra: {
        styrka: 'Etablerade partier tvingas lyssna på förbisedda väljargrupper och sakfrågor.',
        risk: 'Institutioner (domstolar, media, expertmyndigheter) framställs som hindrande snarare än skyddande.',
      },
      tredje: {
        styrka: 'Demokratisk förnyelse — institutioner reformeras och blir mer lyhörda.',
        risk: 'Om institutionerna hela tiden framställs som motståndare snarare än skiljedomare, urholkas de kontrollmekanismer som skyddar mot majoritetstyranni.',
      },
    },
    vägval: {
      demokratisk_bana: 'Populism verkar inom existerande institutioner, accepterar valresultat och rättsliga avgöranden även vid förlust, och används som tryck för reform snarare än ersättning av systemet.',
      auktoritär_bana: 'Populism blir ett permanent mobiliseringsverktyg mot "fienden inom" — domstolar, press och valmyndigheter delegitimeras systematiskt, och ledaren framställs som den enda legitima uttolkaren av folkviljan.',
      avgörande_villkor: [
        'Accepteras valförluster som legitima?',
        'Behåller domstolar och press sin oberoende funktion?',
        'Definieras politiska motståndare som fel — eller som fiender?',
      ],
    },
    varningssignaler: [
      'Motståndare kallas förrädare eller landsförrädare snarare än meningsmotståndare',
      'Valresultat ifrågasätts endast vid egen förlust',
      'Domstolar eller press angrips som institution, inte enskilda avgöranden',
      '"Endast jag/vi representerar det sanna folket"-retorik',
    ],
    exempel: [
      { rörelse: 'Den amerikanska Populist Party', period: '1890-talet', riktning: 'demokratisk', utfall: 'Drev igenom reformer (bl.a. direktval av senatorer) som senare togs upp av etablerade partier.' },
      { rörelse: 'Peronismen, Argentina', period: '1940–70-talet', riktning: 'blandad', utfall: 'Breddade fackligt och socialt inflytande, men även perioder av maktkoncentration och tryck på oberoende institutioner.' },
    ],
    relaterade: ['polarisering', 'ledarpersonalisering', 'nationalism'],
    color: '#8b3a2a',
  },

  {
    id: 'polarisering',
    label: 'Polarisering',
    tagline: 'Skärpta skiljelinjer för tydliga val.',
    kort: [
      'Skarpa vi/dem-linjer kring identitet',
      'Hög mobilisering genom existentiella vägval',
      'Kompromiss görs kostsam för den egna sidan',
    ],
    mål: 'Skärpa politiska skiljelinjer för att tvinga fram tydliga ställningstaganden och hög mobilisering kring dem.',
    mobilisering: {
      retorik: 'Förstärker vi/dem-linjer via identitet och moral, inte bara sakfrågor.',
      kanaler: 'Sociala medier och nischade nyhetskanaler som förstärker gruppidentitet.',
      känslor: ['Indignation', 'Grupplojalitet', 'Upplevt hot mot den egna sidan'],
    },
    makttaktik: {
      metoder: [
        'Konsolidering av den egna basen genom att göra kompromiss kostsam',
        'Framställning av valet som existentiellt snarare än politiskt',
        'Mobilisering via gemensamma fiendebilder',
      ],
      hantering_av_opposition: 'Motståndarsidan behandlas som ett hot mot gruppens identitet snarare än en meningsmotståndare med giltiga intressen.',
    },
    effektkedjor: {
      första: {
        styrka: 'Högre engagemang och tydligare politiska alternativ för väljarna.',
        risk: 'Minskad förståelse och samtal mellan grupper.',
      },
      andra: {
        styrka: 'Starkare partilojalitet och organisationsgrad.',
        risk: 'Krympande gemensam faktagrund — grupper litar bara på egna källor.',
      },
      tredje: {
        styrka: 'Tydlig uppdelning i sakfrågor kan förnya den politiska debatten och tvinga fram genuina val.',
        risk: 'Affektiv polarisering (motparten ogillas som person, inte bara i sak) gör maktskiften och samarbete efter val svåra att acceptera.',
      },
    },
    vägval: {
      demokratisk_bana: 'Polarisering hålls till sakfrågor — man är oense om politik men accepterar motståndarens rätt att styra vid valvinst.',
      auktoritär_bana: 'Polarisering glider in i identitetsbaserad fiendskap där motståndarens seger uppfattas som ett existentiellt hot, vilket rättfärdigar extraordinära medel för att förhindra den.',
      avgörande_villkor: [
        'Beskrivs motståndaren som fel i sak eller som ett hot mot gruppens existens?',
        'Finns det kvar gemensamma institutioner och källor båda sidor litar på?',
        'Accepteras maktskifte vid valförlust?',
      ],
    },
    varningssignaler: [
      'Motståndarens valseger beskrivs som en katastrof som måste förhindras "till varje pris"',
      'Gemensamma institutioner (domstolar, valmyndigheter) misstänkliggörs olika beroende på vem de gynnar',
      'Personliga relationer och samarbete över blockgränser bestraffas socialt',
    ],
    exempel: [
      { rörelse: 'Ökande affektiv polarisering i amerikansk politik', period: '1990-talet–', riktning: 'auktoritär tendens', utfall: 'Forskning visar sjunkande tillit mellan partianhängare och ökad acceptans för att bryta demokratiska normer för att "vinna".' },
      { rörelse: 'Brexit-folkomröstningen, Storbritannien', period: '2016', riktning: 'blandad', utfall: 'Tydliggjorde ett verkligt vägval för väljarna, men lämnade efter sig djupa och varaktiga samhällsklyftor.' },
    ],
    relaterade: ['populism', 'ledarpersonalisering', 'identitetspolitik'],
    color: '#7a1f2a',
  },

  {
    id: 'klasspolitik',
    label: 'Klasspolitik',
    tagline: 'Ekonomisk position som politikens grund.',
    kort: [
      'Politik organiserad kring ekonomisk position',
      'Kollektiv organisering — fack, kooperativ, rörelse',
      'Omfördelning som konkret maktmedel',
    ],
    mål: 'Organisera politik kring ekonomisk position och intressemotsättningar mellan samhällsgrupper (arbete, kapital, förmögenhet).',
    mobilisering: {
      retorik: 'Kollektiv identitet kring arbete/kapital eller "vanligt folk mot toppen".',
      kanaler: 'Fackligt och organisatoriskt engagemang, arbetsplatsnätverk, rörelsepress.',
      känslor: ['Solidaritet', 'Upplevd orättvisa', 'Gemensamt intresse'],
    },
    makttaktik: {
      metoder: [
        'Breda koalitioner via ekonomiskt intresse snarare än identitet eller region',
        'Omfördelning och regleringsanspråk som konkret maktmedel',
        'Organisationsbyggande (fack, kooperativ, rörelsepartier)',
      ],
      hantering_av_opposition: 'Motstånd beskrivs vanligen som en intressemotsättning (kapital mot arbete) snarare än personlig fiendskap, men kan i mer retorisk form beskriva motparten som strukturellt illegitim.',
    },
    effektkedjor: {
      första: {
        styrka: 'Synliggör materiella orättvisor och ojämlik maktfördelning.',
        risk: 'Andra skiljelinjer (kultur, region, identitet) kan osynliggöras eller nedprioriteras.',
      },
      andra: {
        styrka: 'Stärkt organisationsgrad och förhandlingsstyrka för grupper med lite individuell makt.',
        risk: 'Blockpolitik längs klasslinjer kan göra tvärpolitisk kompromiss svårare.',
      },
      tredje: {
        styrka: 'Varaktig omfördelning och breddat ekonomiskt medborgarskap genom brett institutionellt stöd.',
        risk: 'Om klass görs till den enda giltiga konfliktlinjen kan legitima icke-ekonomiska intressen avfärdas som falskt medvetande, vilket underminerar pluralism.',
      },
    },
    vägval: {
      demokratisk_bana: 'Klasspolitik verkar genom öppna, konkurrerande organisationer (fack, partier) inom en pluralistisk ram, och accepterar andra legitima politiska skiljelinjer vid sidan av sin egen.',
      auktoritär_bana: 'Klasspolitik blir den enda giltiga tolkningsramen, där andra intressen avfärdas som falskt medvetande och en enskild organisation tillskrivs ensam rätt att tolka klassens intresse.',
      avgörande_villkor: [
        'Tillåts konkurrerande organisationer inom samma klassintresse?',
        'Erkänns andra legitima politiska skiljelinjer vid sidan av klass?',
        'Är ledningen ansvarig inför medlemmarna, eller ovanför dem?',
      ],
    },
    varningssignaler: [
      'Endast en organisation tillåts representera "klassens sanna intresse"',
      'Interna oliktänkande stämplas som förrädare mot klassen snarare än meningsmotståndare',
      'Andra politiska skiljelinjer avfärdas kategoriskt som distraktion',
    ],
    exempel: [
      { rörelse: 'Den svenska fackföreningsrörelsen och Saltsjöbadsavtalet', period: '1930-talet–', riktning: 'demokratisk', utfall: 'Institutionaliserad förhandling mellan arbete och kapital inom en pluralistisk ram.' },
      { rörelse: 'Enpartistaten i Sovjetunionen, motiverad med arbetarklassens intresse', period: '1920–1980-talet', riktning: 'auktoritär', utfall: 'Klassretorik användes för att motivera att all organiserad opposition förbjöds.' },
    ],
    relaterade: ['identitetspolitik', 'triangulering', 'populism'],
    color: '#9f1239',
  },

  {
    id: 'nationalism',
    label: 'Nationalism',
    tagline: 'Sammanhållning kring nationell identitet.',
    kort: [
      'Sammanhållning kring nationell identitet',
      'Symboler, historia och gemensamt öde',
      'Enande retorik över klass- och partigränser',
    ],
    mål: 'Skapa sammanhållning och mobilisering kring nationell identitet och gemenskap, ofta för att överbrygga andra samhällsklyftor.',
    mobilisering: {
      retorik: 'Symboler, historia och "vi tillhör samma folk/nation".',
      kanaler: 'Nationella högtider, medier, utbildning, gemensamma berättelser om ursprung och öde.',
      känslor: ['Tillhörighet', 'Stolthet', 'Oro för det egna kollektivets framtid'],
    },
    makttaktik: {
      metoder: [
        'Enande retorik som söker överbrygga klass- och partigränser',
        'Prioritering av nationellt "vi" i politiska avvägningar',
        'Användning av nationella symboler och berättelser för att legitimera beslut',
      ],
      hantering_av_opposition: 'Varierar från att behandla oliktänkande som en del av den nationella debatten till att beskriva dem som illojala mot nationen.',
    },
    effektkedjor: {
      första: {
        styrka: 'Stärkt social sammanhållning och kollektiv handlingsförmåga, särskilt i kris.',
        risk: 'Legitima interna skiljelinjer (klass, region, åsikt) kan tystas i enhetens namn.',
      },
      andra: {
        styrka: 'Högre tillit och samarbetsvilja inom gruppen.',
        risk: 'Misstänksamhet kan riktas mot minoriteter eller grupper som uppfattas stå utanför gemenskapen.',
      },
      tredje: {
        styrka: 'Stabil nationell identitet kan fungera som bas för ett långsiktigt samhällskontrakt och välfärdsstat.',
        risk: 'En exkluderande definition av vem som "verkligen" hör till nationen kan permanent utestänga medborgare från fullt politiskt medlemskap.',
      },
    },
    vägval: {
      demokratisk_bana: 'Medborgerlig nationalism — öppen för alla som delar medborgarskap och lojalitet mot de gemensamma institutionerna, oavsett bakgrund.',
      auktoritär_bana: 'Härkomstbaserad eller exkluderande nationalism där tillhörighet definieras genom etnicitet, religion eller ursprung, och avvikare eller minoriteter behandlas som mindre legitima medlemmar av samhället.',
      avgörande_villkor: [
        'Definieras tillhörighet genom medborgarskap/lojalitet, eller genom härkomst?',
        'Har nationella minoriteter samma rättigheter och representation?',
        'Tolereras kritik av nationen som legitim politisk debatt?',
      ],
    },
    varningssignaler: [
      'Medborgarskap eller lojalitet ifrågasätts utifrån härkomst snarare än handling',
      'Kritik av nationen eller dess ledning likställs med förräderi',
      'Minoriteters rättigheter beskrivs som eftergifter snarare än grundläggande rättigheter',
    ],
    exempel: [
      { rörelse: 'Efterkrigstidens nationsbygge i flera europeiska demokratier', period: '1945–1970-talet', riktning: 'demokratisk', utfall: 'Nationell sammanhållning användes för att bygga breda välfärdsstater över klassgränser.' },
      { rörelse: 'Etnisk nationalism i f.d. Jugoslavien', period: '1990-talet', riktning: 'auktoritär', utfall: 'Exkluderande definition av tillhörighet bidrog till väpnad konflikt och etnisk rensning.' },
    ],
    relaterade: ['populism', 'identitetspolitik', 'ledarpersonalisering'],
    color: '#7a5a3a',
  },

  {
    id: 'identitetspolitik',
    label: 'Identitetspolitik',
    tagline: 'Representation för grupper som osynliggjorts.',
    kort: [
      'Synliggör erfarenheter knutna till grupptillhörighet',
      'Community-organisering och representation',
      'Normkritik som politiskt verktyg',
    ],
    mål: 'Synliggöra och organisera kring erfarenheter knutna till grupptillhörighet (t.ex. kön, etnicitet, sexualitet, funktionsvariation) som riskerar osynliggöras i en formellt "neutral" politik.',
    mobilisering: {
      retorik: 'Gemenskap kring delad erfarenhet och representation — "vår röst måste höras".',
      kanaler: 'Community-organisering, sociala rörelser, kulturell och medial representation.',
      känslor: ['Erkännande', 'Tillhörighet', 'Frustration över osynliggörande'],
    },
    makttaktik: {
      metoder: [
        'Koalitionsbyggande mellan grupper med delvis gemensamma intressen',
        'Påverkan via representation i institutioner, medier och partier',
        'Normkritik som verktyg för att synliggöra strukturer',
      ],
      hantering_av_opposition: 'Sträcker sig från saklig debatt om representation till att beskriva kritiker som per definition ovilliga att se strukturell orättvisa.',
    },
    effektkedjor: {
      första: {
        styrka: 'Ger röst och representation åt grupper som tidigare marginaliserats i politiken.',
        risk: 'Kan bidra till fragmentering av bredare politiska koalitioner.',
      },
      andra: {
        styrka: 'Ökad representation i beslutsfattande institutioner.',
        risk: 'Politik kan organiseras kring grupptillhörighet snarare än delade samhällsmål, vilket försvårar tvärgruppers samarbete.',
      },
      tredje: {
        styrka: 'Bredare och mer rättvis representation över tid, som stärker hela systemets legitimitet.',
        risk: 'Om grupptillhörighet blir viktigare än gemensamt medborgarskap kan det försvåra brett samförstånd och göda motreaktioner som i sig polariserar ytterligare.',
      },
    },
    vägval: {
      demokratisk_bana: 'Identitetspolitik fungerar som komplement till en bredare, gemensam politik — representation stärker deltagande utan att ersätta gemensamma spelregler och institutioner.',
      auktoritär_bana: 'Grupptillhörighet blir den enda giltiga utgångspunkten för politisk legitimitet, oliktänkande inom gruppen tystas, och institutioner som inte speglar gruppindelningen delegitimeras helt.',
      avgörande_villkor: [
        'Tillåts oliktänkande inom samma grupp komma till tals?',
        'Behandlas representation som ett tillägg till, eller ersättning för, gemensamma demokratiska spelregler?',
        'Byggs koalitioner tvärs grupper, eller isoleras grupper från varandra?',
      ],
    },
    varningssignaler: [
      'Oliktänkande inom gruppen avfärdas som förrädare mot gruppen',
      'Argument bedöms enbart utifrån vem som för dem fram, inte innehållet',
      'Gemensamma institutioner anses per definition ogiltiga om de inte proportionerligt speglar gruppindelningen',
    ],
    exempel: [
      { rörelse: 'Medborgarrättsrörelsen i USA', period: '1950–60-talet', riktning: 'demokratisk', utfall: 'Breddade medborgerliga och politiska rättigheter genom organisering och lagstiftning, inom en pluralistisk ram.' },
      { rörelse: 'Interna uppgörelser om representation inom identitetsbaserade rörelser', period: '2000-talet–', riktning: 'blandad', utfall: 'Har i vissa fall lett till intern fragmentering och minskad politisk genomslagskraft.' },
    ],
    relaterade: ['klasspolitik', 'polarisering', 'nationalism'],
    color: '#5a3f9f',
  },

  {
    id: 'teknokrati',
    label: 'Teknokrati',
    tagline: 'Expertis som grund för beslut.',
    kort: [
      'Beslut baserade på expertis snarare än opinion',
      'Legitimitet genom kompetens och resultat',
      'Frågor avpolitiseras till tekniska spörsmål',
    ],
    mål: 'Basera beslut på expertis och sakkunskap snarare än politisk förhandling eller folklig opinion.',
    mobilisering: {
      retorik: '"Detta är inte en politisk fråga, det är en fråga om vad som fungerar" — legitimitet genom kompetens och resultat.',
      kanaler: 'Expertutlåtanden, oberoende myndigheter, forskningsrapporter — svag i traditionell folklig mobilisering.',
      känslor: ['Trygghet i kompetens', 'Frustration hos dem som upplever sig sakna inflytande'],
    },
    makttaktik: {
      metoder: [
        'Flytta beslut till oberoende myndigheter eller expertorgan',
        'Avpolitisera frågor genom att rama in dem som tekniska snarare än värdemässiga',
        'Långsiktiga regelverk som är svåra för folkvalda att snabbt ändra',
      ],
      hantering_av_opposition: 'Politiskt motstånd riskerar att beskrivas som okunskap snarare än legitim värderingsskillnad.',
    },
    effektkedjor: {
      första: {
        styrka: 'Högre teknisk kvalitet och konsekvens i komplexa beslut.',
        risk: 'Svagare direkt demokratisk förankring för besluten.',
      },
      andra: {
        styrka: 'Förutsägbarhet och stabilitet i politiken över tid.',
        risk: 'Medborgare kan uppleva sig sakna reellt inflytande över frågor som faktiskt påverkar deras liv.',
      },
      tredje: {
        styrka: 'Stabila, evidensbaserade institutioner som klarar kortsiktiga opinionssvängningar.',
        risk: 'Avgörande värdefrågor — som rimligen är politiska, inte enbart tekniska — hanteras som om de vore neutrala expertfrågor, vilket urholkar demokratiskt ansvarsutkrävande.',
      },
    },
    vägval: {
      demokratisk_bana: 'Expertis fungerar som stöd åt folkvalda beslut — experter informerar, politiker och medborgare avgör värdefrågor och kan hållas ansvariga.',
      auktoritär_bana: 'Expertis ersätter folkvalt beslutsfattande på allt fler områden, medborgarnas möjlighet att pröva eller ändra besluten försvinner, och kritik avfärdas som okunskap snarare än legitim oenighet.',
      avgörande_villkor: [
        'Kan folkvalda faktiskt ändra expertorganens beslut om de vill?',
        'Är det tydligt vilka frågor som är tekniska och vilka som är värdemässiga?',
        'Går det att hållas ansvarig för att ha fel, eller är expertisen skyddad från konsekvens?',
      ],
    },
    varningssignaler: [
      'Värdefrågor ramas konsekvent in som rent tekniska för att undvika debatt',
      'Folkvalda församlingars möjlighet att ändra expertorganens beslut minskar över tid',
      'Kritik av expertbeslut bemöts med att kritikern saknar rätt att ha en åsikt snarare än med sakargument',
    ],
    exempel: [
      { rörelse: 'Oberoende centralbanker med tydligt demokratiskt mandat', period: '1990-talet–', riktning: 'demokratisk', utfall: 'Ökad trovärdighet i penningpolitiken inom en ram beslutad av folkvalda.' },
      { rörelse: 'Teknokratiska övergångsregeringar utan brett förankrat mandat', period: '2010-talet, flera länder', riktning: 'blandad', utfall: 'Kunde hantera akuta kriser men väckte frågor om demokratisk legitimitet.' },
    ],
    relaterade: ['triangulering', 'ledarpersonalisering'],
    color: '#3f6f8f',
  },

  {
    id: 'triangulering',
    label: 'Triangulering',
    tagline: 'Neutralisera motståndarens starkaste frågor.',
    kort: [
      'Positioner som neutraliserar motståndarens starkaste frågor',
      'Bred mittenmobilisering snarare än kärnväljare',
      'Pragmatism och resultatfokus framför ideologisk profil',
    ],
    mål: 'Bredda det egna stödet genom att inta positioner som neutraliserar motståndarens starkaste frågor.',
    mobilisering: {
      retorik: 'Pragmatisk, resultatorienterad retorik riktad mot mitten snarare än den egna kärnväljargruppen.',
      kanaler: 'Bred medial exponering, breda kampanjer snarare än rörelseorganisering.',
      känslor: ['Trygghet i kompetent styre', 'Lättnad hos väljare som är trötta på blockpolitik'],
    },
    makttaktik: {
      metoder: [
        'Flexibel positionering som lånar populära frågor tvärs över block',
        'Bygga regeringsdugliga koalitioner i mitten',
        'Undvika tydlig ideologisk profil till förmån för resultatfokus',
      ],
      hantering_av_opposition: 'Både de mest ideologiska inom det egna lägret och traditionella motståndare kan behandlas som mindre relevanta för det faktiska styret.',
    },
    effektkedjor: {
      första: {
        styrka: 'Bredare valframgång och regeringsstabilitet genom stöd från mitten.',
        risk: 'Otydlig politisk identitet — väljare kan ha svårt att veta vad partiet egentligen står för.',
      },
      andra: {
        styrka: 'Kan dämpa polarisering genom att neutralisera skarpa motsättningar.',
        risk: 'Kärnväljare kan uppleva sig övergivna eller otillräckligt representerade.',
      },
      tredje: {
        styrka: 'Pragmatiskt, brett stöd över tid för genomförbar politik snarare än ideologisk låsning.',
        risk: 'Om väljare upplever att inga reella alternativ längre finns kan det, paradoxalt, göda mer polariserande alternativ som lovar tydlig skillnad.',
      },
    },
    vägval: {
      demokratisk_bana: 'Triangulering fungerar som pragmatisk breddning inom ett system med flera tydliga alternativ kvar att välja mellan.',
      auktoritär_bana: 'Triangulering tömmer den politiska debatten på reella alternativ till den grad att missnöje inte längre kan kanaliseras genom etablerade partier, vilket stärker rörelser som lovar ett radikalt brott med "alla är ändå likadana".',
      avgörande_villkor: [
        'Finns det kvar tydliga, trovärdiga alternativ i systemet?',
        'Kan missnöje kanaliseras genom befintliga partier, eller bara utanför dem?',
        'Är den pragmatiska positioneringen ärlig, eller uppfattas den som ett svek mot väljarna?',
      ],
    },
    varningssignaler: [
      'Valdeltagandet sjunker stadigt eftersom väljare uppfattar alla alternativ som identiska',
      'Missnöje kanaliseras allt oftare till partier utanför det etablerade systemet',
      'Den egna kärnväljarbasen krymper snabbare än mittenväljarna växer',
    ],
    exempel: [
      { rörelse: '"Tredje vägen"-politik i Storbritannien och USA', period: '1990-talet', riktning: 'demokratisk', utfall: 'Breddade valframgångar genom pragmatisk mittenpositionering, men kritiserades senare för otydlig profil.' },
      { rörelse: 'Etablerade partiers programmatiska konvergens i flera europeiska demokratier', period: '2000–2010-talet', riktning: 'blandad', utfall: 'Sammanföll i flera fall med framväxten av nya populistiska utmanare som mobiliserade missnöjet.' },
    ],
    relaterade: ['teknokrati', 'populism'],
    color: '#2f7b7b',
  },

  {
    id: 'ledarpersonalisering',
    label: 'Ledarpersonalisering',
    tagline: 'Legitimitet koncentrerad till en person.',
    kort: [
      'Legitimitet koncentrerad till en person',
      'Personifierad kommunikation framför partiprogram',
      'Ledarens ord väger tyngre än formella processer',
    ],
    mål: 'Koncentrera politisk kommunikation och legitimitet till en enskild ledargestalt för att skapa tydlighet, igenkänning och handlingskraft.',
    mobilisering: {
      retorik: 'Personifierad kommunikation — ledarens berättelse, karaktär och löften står i centrum snarare än partiprogram.',
      kanaler: 'Personliga sociala medier-konton, porträttbaserad kampanjföring, direktsänd kommunikation.',
      känslor: ['Igenkänning', 'Förtroende för en person', 'Lojalitet'],
    },
    makttaktik: {
      metoder: [
        'Centraliserat beslutsfattande kring ledaren',
        'Ledarens ord väger tyngre i praktiken än formella partiprocesser',
        'Intern kritik av ledaren behandlas som illojalitet mot rörelsen',
      ],
      hantering_av_opposition: 'Extern opposition kan hanteras sakligt, men intern oliktänkande riskerar att tystas för att inte underminera ledarens auktoritet.',
    },
    effektkedjor: {
      första: {
        styrka: 'Snabbt och tydligt beslutsfattande, stark igenkänning hos väljarna.',
        risk: 'Svagare kollektiv kontroll av besluten — färre kan i praktiken säga emot.',
      },
      andra: {
        styrka: 'Effektiv kriskommunikation genom en tydlig, enad röst.',
        risk: 'Partiets eller rörelsens egna institutioner (styrelser, kongresser, valberedningar) förlorar reellt inflytande.',
      },
      tredje: {
        styrka: 'Starkt, enande ledarskap kan vara värdefullt under en avgränsad period av kris eller uppbyggnad.',
        risk: 'Makt blir svår att pröva, ompröva eller ordnat överföra till en efterträdare, vilket kan underminera institutionell kontinuitet och göra hela rörelsen sårbar när ledaren försvinner.',
      },
    },
    vägval: {
      demokratisk_bana: 'Stark, synlig ledare inom ramen för partidemokrati och maktdelning — ledaren kan bytas ut genom ordnade, förutsägbara processer och underkastas granskning.',
      auktoritär_bana: 'Ledaren blir överordnad institutionerna snarare än ansvarig inför dem — partiets regelverk anpassas efter ledaren snarare än tvärtom, och kritik av ledaren likställs med illojalitet mot saken.',
      avgörande_villkor: [
        'Kan ledaren röstas bort eller bytas ut genom ordinarie, förutsägbara processer?',
        'Överlever rörelsens institutioner (styrelse, kongress, stadgar) ledarens eventuella avgång intakta?',
        'Tolereras intern kritik av ledaren utan repressalier?',
      ],
    },
    varningssignaler: [
      'Partistadgar eller institutionella regler ändras för att gynna en sittande ledares fortsatta makt',
      'Intern kritik av ledaren bestraffas hårdare än kritik i sakfrågor',
      'Det finns ingen tydlig, etablerad ordning för ledarskifte',
    ],
    exempel: [
      { rörelse: 'Ordnade ledarskiften inom etablerade partier med tydliga stadgar', period: 'Återkommande i parlamentariska demokratier', riktning: 'demokratisk', utfall: 'Ledare byts ut utan att partiets eller landets institutioner destabiliseras.' },
      { rörelse: 'Personkult kring enskilda ledare i flera 1900-talsregimer', period: '1900-talet', riktning: 'auktoritär', utfall: 'Institutioner underordnades en enskild persons auktoritet, vilket gjorde maktöverföring instabil och konfliktfylld.' },
    ],
    relaterade: ['populism', 'teknokrati', 'nationalism'],
    color: '#6b4c2a',
  },

  {
    id: 'klientelism',
    label: 'Klientelism',
    tagline: 'Lojalitet genom konkreta motprestationer.',
    kort: [
      'Lojalitet byggs genom direkta tjänster och resurser',
      'Personliga nätverk mellan patron och klient',
      'Statliga resurser som belöningssystem',
    ],
    mål: 'Bygga och behålla stöd genom konkreta, personliga motprestationer (jobb, kontrakt, tjänster, bidrag) snarare än genom delade idéer eller ideologi.',
    mobilisering: {
      retorik: 'Mindre offentlig retorik om idéer, mer direkta löften om vad specifika grupper eller individer får i utbyte mot stöd.',
      kanaler: 'Personliga nätverk, lokala mellanhänder ("patroner"), föreningar och organisationer med nära band till makthavare.',
      känslor: ['Personlig lojalitet', 'Tacksamhetsskuld', 'Trygghet genom relation snarare än princip'],
    },
    makttaktik: {
      metoder: [
        'Fördelning av offentliga tjänster, kontrakt och bidrag till lojala nätverk',
        'Mellanhänder ("patroner") som förmedlar resurser mot röster och stöd',
        'Villkorad tillgång — stöd kan dras tillbaka om lojaliteten sviktar',
      ],
      hantering_av_opposition: 'Opposition bekämpas sällan öppet ideologiskt — snarare utestängs oliktänkande grupper från resursfördelningen, vilket gör lojalitet till en ekonomisk fråga snarare än en åsiktsfråga.',
    },
    effektkedjor: {
      första: {
        styrka: 'Snabb, konkret hjälp till grupper med akuta materiella behov som formella system annars missar.',
        risk: 'Resurser fördelas efter lojalitet snarare än efter behov eller rättvisa kriterier.',
      },
      andra: {
        styrka: 'Starka lokala nätverk som kan mobilisera snabbt och hålla samman i kris.',
        risk: 'Offentliga institutioner omvandlas gradvis till belöningssystem, vilket undergräver deras opartiskhet.',
      },
      tredje: {
        styrka: 'Kan fungera som en pragmatisk väg in i politiken för grupper utan formellt inflytande, som senare kan övergå till mer programmatisk politik.',
        risk: 'Om klientelism blir det dominerande sättet att organisera makt permanent, ersätter lojalitetsband medborgerliga rättigheter — tillgång till statens resurser blir beroende av vem man känner snarare än vem man är.',
      },
    },
    vägval: {
      demokratisk_bana: 'Klientelistiska nätverk existerar vid sidan av, och är underordnade, opartiska institutioner och rättsstatsprincipen — offentliga resurser kan inte helt undandras granskning och lagstiftning.',
      auktoritär_bana: 'Tillgång till statens resurser görs helt beroende av politisk lojalitet, oberoende institutioner (upphandling, rekrytering, rättsväsen) kapas för att tjäna nätverket, och medborgare utan rätt kontakter utestängs systematiskt.',
      avgörande_villkor: [
        'Finns oberoende granskning av hur offentliga resurser fördelas?',
        'Kan medborgare få tillgång till grundläggande tjänster utan politiska kontakter?',
        'Är rekrytering till statliga tjänster meritbaserad eller lojalitetsbaserad?',
      ],
    },
    varningssignaler: [
      'Offentliga tjänster och kontrakt går systematiskt till politiskt lojala snarare än mest kvalificerade',
      'Tillgång till välfärd eller myndighetsservice villkoras informellt av politiskt stöd',
      'Oberoende kontrollmyndigheter bemannas efter lojalitet snarare än kompetens',
    ],
    exempel: [
      { rörelse: 'Amerikanska "political machines" i storstäder', period: 'Sent 1800-tal–tidigt 1900-tal', riktning: 'blandad', utfall: 'Gav nyanlända invandrargrupper jobb och socialt skyddsnät som formella institutioner saknade, men byggde samtidigt på utbredd korruption.' },
      { rörelse: 'Patronagesystem i enpartistater under 1900-talet', period: '1900-talet', riktning: 'auktoritär', utfall: 'Statliga resurser blev ett verktyg för att belöna lojalitet och straffa oliktänkande, vilket bidrog till att permanenta enpartistyre.' },
    ],
    relaterade: ['triangulering', 'ledarpersonalisering', 'klasspolitik'],
    color: '#8a6d1f',
  },
];
