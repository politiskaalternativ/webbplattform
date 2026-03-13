# Projektstruktur och designbeslut

## Arkitektur

Projektet är medvetet byggt utan bundler eller ramverk. Motivet:
- Inga byggsteg — öppna `index.html` direkt (med lokal server för ES Modules)
- Inga dependencies att underhålla
- Enkel att förstå och modifiera

### ES Modules

JS är uppdelad i moduler (`shell.js`, `ideologies.js`) och laddas via `<script type="module">`.
Detta kräver att sidan serveras via HTTP — `file://` fungerar inte p.g.a. CORS.

## Designbeslut

### Typografi
- **Cormorant Garamond** — Display/brödtext. Serifftypsnitt med stark editorial karaktär.
- **DM Mono** — Labels, taggar, knappar. Skapar kontrast mot serifferna.

### Färgpalett
| Token | Värde | Användning |
|-------|-------|------------|
| `--ink` | `#1a1814` | Primär text, mörka bakgrunder |
| `--paper` | `#f5f0e8` | Primär bakgrund |
| `--accent` | `#8b3a2a` | Primär accent, CTA |
| `--gold` | `#c9973a` | Sekundär accent (mörka bakgrunder) |
| `--muted` | `#7a7060` | Sekundär text |

### Animationer
- Fade-up vid sidladdning (staggered)
- Hover-transitions på kort och knappar
- Slide-in för detaljpanel i biblioteket

## Sidstruktur

### index.html
Hero → Demokratins filosofi (mörk) → Hur det fungerar → Exempel → CTA

### verktyg.html
Page hero → Process (5 steg med kopierbar AI-instruktion) → AI-tjänster → FAQ (mörk)

### bibliotek.html
Page hero + filter → Ideologigrid → Detaljpanel (slide-in) → Jämför-CTA

## Utökningsguide

### Lägga till en ideologi
Redigera `src/lib/ideologies.js` och lägg till ett objekt enligt befintligt schema.
Lägg även till ID:t i `tagMap` i `bibliotek.html`.

### Lägga till en sida
1. Skapa `ny-sida.html` i roten
2. Skapa `src/styles/ny-sida.css`
3. Lägg till sidan i `pages`-arrayen i `src/components/shell.js`
4. Importera `mountShell('ny-sida.html')` i sidans script-tag
