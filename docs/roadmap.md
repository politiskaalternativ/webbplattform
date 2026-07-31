# Roadmap

## Klart

Grundplattformen är byggd och publicerad på https://politiskaalternativ.se/:

- Sex sidor: start, AI-analys, bibliotek, strategier, ekonomi, ideologikarta.
- Ideologibibliotek med 13 ideologier i jämförbar struktur (`src/lib/ideologies.js`).
- Strategisida med 8 politiska strategier (populism, polarisering, klasspolitik,
  nationalism, identitetspolitik, teknokrati, triangulering, ledarpersonalisering)
  i jämförbar struktur — mål, mobilisering, makttaktik och effektkedjor i tre led
  (`src/lib/strategies.js`), med ett vägvalsdiagram som visar hur samma strategi
  kan röra sig mot en demokratisk eller auktoritär bana beroende på hur den
  praktiseras, samt konkreta varningssignaler.
- Treaxligt ramverk (Ekonomi, Frihet, Kultur) och interaktiva problemkort på startsidan.
- Fyra ideologiska kompasser (Politisk kompass, Nolan, GAL–TAN, kulturell karta).
- Färdig AI-instruktion för personlig ideologianalys
  (`docs/ai/verktyg-personlig-ideologisk-ai-instruktion.md`).
- SEO/crawl-stöd: `robots.txt`, `sitemap.xml`, `llms.txt`.

## Nästa steg

- Jämförelseverktyg — visa två ideologier (eller strategier) sida vid sida.
- Egen AI-instruktion för strategisk analys, kopplad till verktyg.html.
- Koppling mellan ideologibiblioteket och strategisidan (vilka strategier
  förknippas ofta med vilka ideologier).
- Spara och exportera skapade AI-instruktioner.
- Fler ideologier i biblioteket.
- Flerspråksstöd (engelska).

Se [`README.md`](../README.md) för en fullständig beskrivning av vad som redan finns.
