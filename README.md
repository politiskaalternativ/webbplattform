# Politiska Alternativ

Ett politiskt neutralt webbverktyg för att utforska, jämföra och förstå politiska ideologier — och för att formulera en personlig ideologisk AI‑instruktion.

**https://politiskaalternativ.se/**

## Innehåll

- [Vad är det här?](#vad-är-det-här)
- [AI-analysen](#ai-analysen)
- [Agent Skill](#agent-skill)
- [Sidorna](#sidorna)
- [Varför politisk neutralitet](#varför-politisk-neutralitet)
- [Data och källor](#data-och-källor)
- [Teknik](#teknik)
- [Fortsatt utveckling](#fortsatt-utveckling)
- [Licens](#licens)

## Vad är det här?

I ett komplext samhälle räcker det inte att bara ha åsikter — det hjälper att förstå
*varför* man tycker som man gör, och vad ens ståndpunkter faktiskt leder till i praktiken.

Politiska Alternativ är byggt för att göra tre saker enklare:

1. **Förstå** hur olika ideologier fungerar i praktiken — deras kärnprinciper, styrkor,
   svagheter och effektkedjor — och hur de omsätts i mobilisering och makt genom olika
   politiska strategier.
2. **Jämföra** ideologier och strategier mot varandra utifrån samma ramverk, istället för
   lösryckta påståenden.
3. **Formulera** sin egen ideologiska grundsyn och omvandla den till en personlig
   AI‑instruktion, som sedan kan användas för att analysera nyheter, debattinlägg och
   politiska förslag.

Sajten är statisk — det finns ingen inloggning, inget konto och ingen AI inbyggd på
sajten själv. Istället är den ett *verktyg för att förbereda* en AI-analys: du bläddrar,
jämför och läser på sajten, och tar sedan med dig en färdig instruktion till en AI-tjänst
du redan använder (Claude, ChatGPT eller liknande) — eller en portabel skill till din
AI-kodningsagent.

## AI-analysen

Kärnan i verktyget är sidan [AI-analys](https://politiskaalternativ.se/verktyg.html). Du
kopierar en färdig, förskriven instruktion och klistrar in den som ditt första meddelande
i valfri AI-tjänst. Instruktionen talar sedan om för AI:n hur den ska svara varje gång du
anger en ideologi (t.ex. "liberalism" eller "konservatism").

Instruktionen ber AI:n leverera analysen i sex fasta delar:

1. **Sammanfattning** — en kort, neutral beskrivning av ideologins kärnvärden.
2. **Politisk position** — placering på tre axlar (Ekonomi: stat↔marknad, Frihet:
   libertariansk↔auktoritär, Kultur: progressiv↔konservativ) på en skala −10 till +10.
3. **Styrkor och svagheter** — analyserade som **effektkedjor i tre led**: första ordningens
   (direkta, avsedda), andra ordningens (indirekta följdeffekter) och tredje ordningens
   (långsiktiga, strukturella) konsekvenser.
4. **Kritik från fyra håll** — invändningar från vänster, höger, frihetligt och auktoritärt
   perspektiv, presenterade sakligt på sina egna villkor.
5. **Historiska och aktuella exempel** — minst fyra tillämpningar, både lyckade och
   misslyckade.
6. **Utforska vidare** — förslag på 3–5 relaterade ideologier att fortsätta med.

Genomgående gäller principerna i instruktionen: politisk neutralitet, effektkedjor
snarare än ytliga påståenden, tydlig skillnad mellan fakta och tolkning, och epistemisk
ärlighet om vad som är osäkert. Hela instruktionstexten finns i
[`docs/ai/verktyg-personlig-ideologisk-ai-instruktion.md`](docs/ai/verktyg-personlig-ideologisk-ai-instruktion.md).

## Agent Skill

Utöver den kopierbara AI-instruktionen ovan finns en portabel
[Agent Skill](https://agentskills.io/specification) — en öppen standard för att ge
AI-kodningsagenter (Claude Code, Codex, OpenCode m.fl.) nya färdigheter. Skillen
`politisk-analys` låter en sådan agent granska artiklar, ledarsidor, kultursidor,
politiska förslag, tal, partiprogram och inlägg på X/Twitter eller Bluesky med samma
metod som resten av sajten: ideologisk vinkling, politiska strategier, effektkedjor i
tre led och en ekonomisk jämförelse. Användaren klistrar oftast in en länk till det som
ska granskas, annars texten direkt.

Skillen duplicerar ingen data — den hämtar `ideologies.js`, `strategies.js` och
`principles.json` live från detta repo vid varje analys, så den kan aldrig hamna i
otakt med sajtens innehåll. Källan finns i
[`skills/politisk-analys/`](skills/politisk-analys/), och en kopierbar
startprompt finns längst ned på [AI-analys-sidan](https://politiskaalternativ.se/verktyg.html).

## Sidorna

| Sida | Beskrivning |
|------|-------------|
| [Start](https://politiskaalternativ.se/) | Introduktion till varför ideologi spelar roll för demokratiskt tänkande, samt interaktiva problemkort som visar "samma samhällsproblem, olika ideologiska svar" — med motargument mellan ideologierna. |
| [AI-analys](https://politiskaalternativ.se/verktyg.html) | Steg-för-steg-process för att kopiera in och använda den personliga ideologiska AI-instruktionen (se ovan), samt en kopierbar startprompt för Agent Skill-varianten som riktar sig mot AI-kodningsagenter. |
| [Bibliotek](https://politiskaalternativ.se/bibliotek.html) | Referensbibliotek med 12 klassiska ideologier i jämförbar struktur (kärnprinciper, tänkare, inre spänningar), filtrerbart på teman som frihet, jämlikhet, ordning och hållbarhet. |
| [Strategier](https://politiskaalternativ.se/strategier.html) | 9 politiska strategier (populism, polarisering, klasspolitik, nationalism, identitetspolitik, teknokrati, triangulering, ledarpersonalisering, klientelism) i jämförbar struktur — mål, mobilisering, makttaktik och effektkedjor — med ett vägvalsdiagram som visar hur samma strategi kan leda till demokratisk förnyelse eller demokratisk tillbakagång beroende på hur den praktiseras. |
| [Ekonomi](https://politiskaalternativ.se/ekonomi.html) | Visualisering och jämförelse av grundläggande ekonomiska filosofier, från planekonomi till fri marknad. |
| [Kartor](https://politiskaalternativ.se/ideologikarta.html) | Ideologier placerade på fyra etablerade politiska kompasser: Politisk kompass, Nolan-diagrammet, GAL–TAN och den kulturella kartan (Inglehart–Welzel). |

## Varför politisk neutralitet

Sajtens röda tråd är att presentera ideologier och strategier *på deras egna villkor* —
utan att ta ställning för eller emot någon av dem. Samma ramverk (samma axlar, samma
effektkedjeanalys, samma kritik-struktur) används genomgående, så att jämförelser blir
rättvisa istället för retoriska. Strategisidan är medvetet konstruerad så att ingen
strategi framställs som automatiskt auktoritär — istället visas de vägval och
institutionella villkor som avgör om en strategi stärker eller undergräver demokratin.
Tanken är att en tydligare förståelse för hur olika perspektiv och metoder hänger ihop
gör det lättare att delta i en demokratisk debatt på riktigt, snarare än att fastna i en
kamp om makt och tillhörighet.

## Data och källor

| Fil | Innehåll |
|-----|----------|
| `src/lib/ideologies.js` | Datakälla för biblioteket — 12 ideologier med kärnprinciper, tänkare och spänningar. |
| `src/lib/strategies.js` | Datakälla för strategisidan — 9 strategier med mål, mobilisering, makttaktik, effektkedjor i tre led och vägval mellan demokratisk och auktoritär tillämpning. |
| `src/lib/principles.json` | Det treaxliga ramverket (Ekonomi, Frihet, Kultur) på en skala från −10 till +10. |
| `src/lib/problems.json` | Jämförande problempositioner för samhällsutmaningar (driver problemkorten på startsidan). |
| `docs/ai/verktyg-personlig-ideologisk-ai-instruktion.md` | Grundinstruktionen som används i AI-analysverktyget. |
| `skills/politisk-analys/` | Portabel Agent Skill för att granska artiklar, förslag, tal och sociala medier-inlägg (länk eller inklistrad text); hämtar ideologies.js/strategies.js/principles.json live istället för att duplicera dem. |

Automatiserad läsning för indexering och sammanfattning (t.ex. av AI-crawlers) är
tillåten så länge innehållet återges sakligt och med källhänvisning — se
[`llms.txt`](llms.txt) för fullständig policy.

## Teknik

Sajten är byggd som **vanilla HTML/CSS/JS utan ramverk eller byggsteg** — inget att
installera för att läsa koden, inga beroenden att hålla uppdaterade. JavaScript är
uppdelat i ES-moduler som laddas direkt av webbläsaren, nav och footer renderas
gemensamt av `src/components/shell.js`, och sajten publiceras statiskt via GitHub Pages.
Estetiken är editorial/filosofisk: gammelpapper-palett, seriftypografi (Cormorant
Garamond) för brödtext och monospace (DM Mono) för detaljer.

Vill du köra sajten lokalt eller bidra med kod? Se [`docs/STRUCTURE.md`](docs/STRUCTURE.md)
för arkitekturbeslut och en guide till att lägga till ideologier, strategier eller sidor.

## Fortsatt utveckling

- Jämförelseverktyg (visa två ideologier eller strategier sida vid sida)
- Egen AI-instruktion för strategisk analys, kopplad till verktyg.html
- Spara och exportera skapade AI-instruktioner
- Fler ideologier i biblioteket
- Flerspråksstöd (engelska)

Se [`docs/roadmap.md`](docs/roadmap.md) för aktuell status och planering.

## Licens

MIT — se [`LICENSE`](LICENSE).
