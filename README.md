# Politiska Alternativ

Ett politiskt neutralt webbverktyg för att utforska, jämföra och förstå politiska ideologier — och för att formulera en personlig ideologisk AI‑instruktion.
https://politiskaalternativ.se/

## Innehåll

- [Om projektet](#om-projektet)
- [Sidor](#sidor)
- [Data och innehåll](#data-och-innehåll)
- [Teknik och arkitektur](#teknik-och-arkitektur)
- [Projektstruktur](#projektstruktur)
- [Designprinciper](#designprinciper)
- [Fortsatt utveckling](#fortsatt-utveckling)

## Om projektet

Plattformen hjälper användare att tänka mer strukturerat om politik genom att:

1. Förstå hur olika ideologier fungerar i praktiken — deras styrkor, svagheter och effektkedjor.
2. Jämföra ideologier mot varandra utifrån samma ramverk.
3. Formulera sin egen ideologiska grundsyn och omvandla den till en personlig AI‑instruktion för att analysera nyheter och politiska förslag.

Genomgående princip: politisk neutralitet, transparens och systemtänkande (analys i första, andra och tredje ordningens effekter).

## Sidor

Webbplatsen består av fem sidor med gemensam navigation (renderas av `src/components/shell.js`):

| Sida | Fil | Beskrivning |
|------|-----|-------------|
| Start | `index.html` | Introduktion, demokratifilosofi och interaktiva problemkort ("samma problem, olika svar") |
| Bibliotek | `bibliotek.html` | Referensbibliotek med klassiska ideologier i jämförbar struktur, filter och detaljpanel |
| Ekonomi | `ekonomi.html` | Visualisering och jämförelse av grundläggande ekonomiska filosofier |
| Kartor | `ideologikarta.html` | Ideologiska kartor: Politisk kompass, Nolan-diagram, GAL–TAN och kulturell karta |
| AI-analys | `verktyg.html` | Steg-för-steg-process för att skapa en personlig ideologisk AI‑instruktion |

Stödfiler för crawl och maskinläsning:

| Fil | Beskrivning |
|-----|-------------|
| `robots.txt` | Tillåter crawl och pekar ut sitemap |
| `sitemap.xml` | Lista över indexerbara sidor |
| `llms.txt` | Maskinläsbar översikt över sidstruktur, datakällor och LLM-policy |
| `CNAME` | Domänkoppling för GitHub Pages |

## Data och innehåll

Sidornas innehåll drivs av data- och innehållsfiler:

| Fil | Innehåll |
|-----|----------|
| `src/lib/ideologies.js` | Datakälla för biblioteket — ideologier med kärnprinciper, tänkare och spänningar |
| `src/lib/principles.json` | Treaxligt ramverk (Ekonomi, Frihet, Kultur) på en skala från -10 till +10 |
| `src/lib/problems.json` | Jämförande problempositioner för samhällsutmaningar (driver problemkorten på startsidan) |
| `docs/ai/verktyg-personlig-ideologisk-ai-instruktion.md` | Grundinstruktionen som används i AI-analysverktyget |

## Teknik och arkitektur

- **Vanilla HTML/CSS/JS** – inga byggverktyg eller ramverk krävs.
- **ES Modules** – modulär JavaScript utan bundler, laddas via `<script type="module">`.
- **Gemensam shell** – nav och footer renderas av `src/components/shell.js` via `mountShell()`.
- **Google Fonts** – Cormorant Garamond + DM Mono.
- **Hosting** – statisk publicering via GitHub Pages (egen domän via `CNAME`).

## Projektstruktur

```text
politiska-alternativ/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── CNAME
├── robots.txt
├── sitemap.xml
├── llms.txt
├── favicon.svg
├── index.html
├── bibliotek.html
├── ekonomi.html
├── ideologikarta.html
├── verktyg.html
├── src/
│   ├── components/
│   │   └── shell.js          # nav + footer
│   ├── lib/
│   │   ├── ideologies.js     # ideologidata (bibliotek)
│   │   ├── principles.json   # treaxligt ramverk
│   │   ├── problems.json     # problemkort
│   │   └── ai/
│   ├── styles/
│   │   ├── global.css
│   │   ├── index.css
│   │   ├── bibliotek.css
│   │   ├── ideologikarta.css
│   │   └── verktyg.css
│   ├── app/
│   └── types/
├── public/
└── docs/
    ├── README.md
    ├── STRUCTURE.md
    ├── vision.md
    ├── domain-model.md
    ├── roadmap.md
    ├── site-review.md
    └── ai/
        └── verktyg-personlig-ideologisk-ai-instruktion.md
```

## Designprinciper

Estetiken är editorial/filosofisk med:

- Gammelpapper-palett (`--paper #f5f0e8`)
- Mörk bläcktext (`--ink #1a1814`)
- Seriftypografi (Cormorant Garamond) för rubriker och brödtext
- Monospace-detaljer (DM Mono) för labels, taggar och knappar
- Dämpad röd accent (`--accent #8b3a2a`) och guldaccent (`--gold #c9973a`)
- Diskreta animationer: fade-up vid sidladdning, hover- och slide-in-effekter

Se `docs/STRUCTURE.md` för fullständiga design- och arkitekturbeslut.

## Fortsatt utveckling

- Jämförelseverktyg (visa två ideologier sida vid sida)
- Spara och exportera skapade AI-instruktioner
- Fler ideologier i biblioteket
- Flerspråksstöd (engelska)

Se `docs/roadmap.md` för aktuell planering.
