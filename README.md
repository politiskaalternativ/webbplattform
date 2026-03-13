# Politiska Alternativ

Ett politiskt neutralt verktyg för att formulera, strukturera och använda en personlig ideologisk AI-instruktion.

## Syfte

Verktyget hjälper användare att:
1. Formulera sin politiska grundsyn i strukturerad form
2. Skapa en jämförbar ideologisk AI-instruktion
3. Använda instruktionen för att analysera nyheter och politiska förslag

## Sidor

| Sida | Fil | Beskrivning |
|------|-----|-------------|
| Startsida | `index.html` | Presentation och filosofisk introduktion |
| Verktyget | `verktyg.html` | Steg-för-steg-guide för att skapa instruktion |
| Bibliotek | `bibliotek.html` | Referensbibliotek med klassiska ideologier |

## Projektstruktur

```
politiska-alternativ/
├── README.md
├── .gitignore
├── package.json
├── index.html          # Startsida
├── verktyg.html        # Verktygssida
├── bibliotek.html      # Bibliotekssida
├── src/
│   ├── app/            # Sidor och routing (framtida utbyggnad)
│   ├── components/
│   │   └── shell.js    # Nav och footer
│   ├── lib/
│   │   └── ideologies.js  # Ideologidata
│   ├── styles/
│   │   ├── global.css  # Gemensam styling och design tokens
│   │   ├── index.css   # Startsida
│   │   ├── verktyg.css # Verktygssida
│   │   └── bibliotek.css # Bibliotekssida
│   └── types/          # Gemensamma typer (framtida utbyggnad)
├── public/             # Statiska filer
└── docs/               # Dokumentation
    └── STRUCTURE.md    # Projektstruktur och beslut
```

## Teknikval

- **Vanilla HTML/CSS/JS** — inga byggverktyg krävs
- **ES Modules** — modulär JS utan bundler
- **Google Fonts** — Cormorant Garamond + DM Mono
- Ingen extern JS-dependency utöver fonts

## Komma igång

```bash
# Servera lokalt (valfritt — kan öppnas direkt i webbläsare)
npx serve .
# eller
python3 -m http.server 8080
```

Öppna sedan `http://localhost:8080` i webbläsaren.

> **OBS:** ES Modules kräver att sidan serveras via HTTP — `file://` fungerar inte.

## Design

Estetiken är editorial/filosofisk med:
- Gammelpapper-palett (`#f5f0e8`)
- Serifftypografi (Cormorant Garamond)
- Monospace-detaljer (DM Mono)
- Dämpad röd accent (`#8b3a2a`)

## Utbyggnad

Nästa naturliga steg:
- Jämförelseverktyg (visa två ideologier sida vid sida)
- Spara och exportera skapade instruktioner
- Fler ideologier i biblioteket
- Flerspråksstöd (engelska)
