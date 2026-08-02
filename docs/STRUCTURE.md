# Projektstruktur och designbeslut

## Arkitektur

Projektet är medvetet byggt utan bundler eller ramverk. Motivet:
- Inga byggsteg — öppna `index.html` direkt (med lokal server för ES Modules)
- Inga dependencies att underhålla (utöver `serve` för lokal körning)
- Enkel att förstå och modifiera

### ES Modules

JS är uppdelad i moduler (`shell.js`, `ideologies.js`, `strategies.js`) och laddas via `<script type="module">`.
Detta kräver att sidan serveras via HTTP — `file://` fungerar inte p.g.a. CORS.

### Gemensam shell

Nav och footer renderas centralt av `src/components/shell.js`. Varje sida anropar
`mountShell('<sida>.html')` i sin script-tag, vilket också markerar aktiv navlänk.

### Datadrivet innehåll

- `src/lib/ideologies.js` — ideologier för biblioteket.
- `src/lib/strategies.js` — strategier för strategisidan: mål, mobilisering,
  makttaktik, effektkedjor i tre led, vägval (demokratisk/auktoritär bana) och
  varningssignaler.
- `src/lib/principles.json` — treaxligt ramverk (Ekonomi, Frihet, Kultur), -10 till +10.
- `src/lib/problems.json` — problempositioner som driver problemkorten på startsidan.

### Agent Skills

`skills/<namn>/` — portabla AI-agent-skills enligt den öppna specen
[Agent Skills](https://agentskills.io/specification), en `SKILL.md` per mapp plus
valfria `references/`-filer. Varje skill hämtar sin metodikrelaterade data live från
`src/lib/` via `raw.githubusercontent.com` istället för att duplicera den, så att den
aldrig kan hamna i otakt med sajtens innehåll. Se `skills/politisk-analys/` för ett
exempel, och `verktyg.html` för hur en kopierbar startprompt till skillen visas för
användaren. Namnbyten (som `politisk-medieanalys` → `politisk-analys`) lämnar en kort
redirect-stub kvar på den gamla platsen istället för att raderas, eftersom gamla
länkar annars bryts.

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
| `--tone-positive-*` | grön ton | Styrkor / demokratisk bana i effektkedjor och vägvalsdiagram |
| `--tone-negative-*` | röd ton | Risker / auktoritär bana i effektkedjor och vägvalsdiagram |

### Animationer
- Fade-up vid sidladdning (staggered)
- Hover-transitions på kort och knappar
- Slide-in för detaljpanel i biblioteket och strategisidan

## Sidstruktur

### index.html
Hero → Demokratins filosofi (mörk) → Problemkort (datadrivet) → Hur det fungerar → Exempel → CTA

### bibliotek.html
Page hero + filter → Ideologigrid → Detaljpanel (slide-in) → Jämför-CTA

### strategier.html
Page hero + filter → Strategigrid → Detaljpanel (slide-in): mål, mobilisering,
makttaktik, effektkedjor i tre led, vägvalsdiagram (demokratisk/auktoritär bana
+ avgörande villkor), varningssignaler, historiska exempel, relaterade strategier
→ Nästa steg-CTA (till ekonomi.html)

### ekonomi.html
Visualisering och jämförelse av grundläggande ekonomiska filosofier

### ideologikarta.html
Ideologiska kartor: Politisk kompass, Nolan-diagram, GAL–TAN och kulturell karta

### verktyg.html
Page hero → Process (steg med kopierbar AI-instruktion) → AI-tjänster →
Agent Skill (kopierbar startprompt för AI-kodningsagenter) → FAQ (mörk)

## Utökningsguide

### Lägga till en ideologi
Redigera `src/lib/ideologies.js` och lägg till ett objekt enligt befintligt schema.
Lägg även till ID:t i `tagMap` i `bibliotek.html`.

### Lägga till en strategi
Redigera `src/lib/strategies.js` och lägg till ett objekt enligt befintligt schema
(mål, mobilisering, makttaktik, effektkedjor, vägval, varningssignaler, exempel,
relaterade, color). Lägg även till ID:t i `tagMap` i `strategier.html`.

### Lägga till en sida
1. Skapa `ny-sida.html` i roten
2. Skapa `src/styles/ny-sida.css`
3. Lägg till sidan i `pages`-arrayen i `src/components/shell.js`
4. Importera `mountShell('ny-sida.html')` i sidans script-tag
5. Uppdatera `sitemap.xml` och `llms.txt`
