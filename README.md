# Politiska Alternativ

Ett politiskt neutralt webbverktyg för att formulera, strukturera och använda en personlig ideologisk AI‑instruktion.

## Innehåll

- [Om projektet](#om-projektet)
- [Sidor](#sidor)
- [Teknik och arkitektur](#teknik-och-arkitektur)
- [Kom igång lokalt](#kom-igång-lokalt)
- [NPM-skript](#npm-skript)
- [Projektstruktur](#projektstruktur)
- [Designprinciper](#designprinciper)
- [Fortsatt utveckling](#fortsatt-utveckling)

## Om projektet

Verktyget hjälper användare att:
1. Formulera sin politiska grundsyn i strukturerad form.
2. Skapa en jämförbar ideologisk AI‑instruktion.
3. Använda instruktionen för att analysera nyheter och politiska förslag.

## Sidor

| Sida | Fil | Beskrivning |
|------|-----|-------------|
| Startsida | `index.html` | Presentation och filosofisk introduktion |
| Verktyget | `verktyg.html` | Steg-för-steg-guide för att skapa instruktion |
| Bibliotek | `bibliotek.html` | Referensbibliotek med klassiska ideologier |
| Robots | `robots.txt` | Tillåter crawl och pekar ut sitemap |
| Sitemap | `sitemap.xml` | Lista över indexerbara sidor |
| LLM-index | `llms.txt` | Maskinläsbar översikt över sidstruktur och resurser |

## Teknik och arkitektur

- **Vanilla HTML/CSS/JS** – inga byggverktyg krävs.
- **ES Modules** – modulär JavaScript utan bundler.
- **Google Fonts** – Cormorant Garamond + DM Mono.
- **Node-baserad lokal server** via paketet `serve`.

## Kom igång lokalt

### Förutsättningar

- Node.js 18+ (rekommenderat).

### Starta projektet

```bash
npm install
npm run dev
```

Öppna sedan `http://localhost:8080` i webbläsaren.

> **Obs:** ES Modules kräver HTTP-server. Öppna inte filer via `file://`.

## NPM-skript

| Kommando | Beskrivning |
|----------|-------------|
| `npm run dev` | Startar lokal server på port `8080` |
| `npm start` | Startar lokal server med standardinställningar |

## Projektstruktur

```text
politiska-alternativ/
├── README.md
├── .gitignore
├── package.json
├── index.html
├── verktyg.html
├── bibliotek.html
├── robots.txt
├── sitemap.xml
├── llms.txt
├── src/
│   ├── app/
│   ├── components/
│   │   └── shell.js
│   ├── lib/
│   │   └── ideologies.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── index.css
│   │   ├── verktyg.css
│   │   └── bibliotek.css
│   └── types/
├── public/
└── docs/
    ├── README.md
    └── STRUCTURE.md
```

## Designprinciper

Estetiken är editorial/filosofisk med:
- Gammelpapper-palett (`#f5f0e8`)
- Seriftypografi (Cormorant Garamond)
- Monospace-detaljer (DM Mono)
- Dämpad röd accent (`#8b3a2a`)

## Fortsatt utveckling

- Jämförelseverktyg (visa två ideologier sida vid sida)
- Spara och exportera skapade instruktioner
- Fler ideologier i biblioteket
- Flerspråksstöd (engelska)
