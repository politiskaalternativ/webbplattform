# Källdata

Analysen ska förankras i samma data som driver [politiskaalternativ.se](https://politiskaalternativ.se), hämtad live från huvudgrenen så att den alltid speglar sajtens senaste innehåll. Duplicera inte dessa data i skillen — hämta dem vid behov.

## `src/lib/ideologies.js`

URL: `https://raw.githubusercontent.com/politiskaalternativ/webbplattform/main/src/lib/ideologies.js`

12 ideologier, vardera med fälten:

- `id`, `label` — identifierare och visningsnamn
- `core` — kärnprincip i en mening
- `stateSyn` — synen på statens roll
- `ekonomi` — ekonomisk grundsyn
- `tänkare` — centrala tänkare/teoretiker
- `spänningar` — interna motsättningar inom ideologin
- `color` — sajtens färgkodning (kan användas för att koppla ihop analysen med sajtens visuella system, annars irrelevant för textanalys)

Använd detta fält för att namnge vilka ideologiers premisser som känns igen i den granskade texten, och för att beskriva deras interna spänningar när det är relevant.

## `src/lib/strategies.js`

URL: `https://raw.githubusercontent.com/politiskaalternativ/webbplattform/main/src/lib/strategies.js`

9 politiska strategier (populism, polarisering, klasspolitik, nationalism, identitetspolitik, teknokrati, triangulering, ledarpersonalisering, klientelism), vardera med fälten:

- `mål` — vad strategin försöker uppnå
- `mobilisering` — `{ retorik, kanaler, känslor }`: hur stöd byggs
- `makttaktik` — `{ metoder, hantering_av_opposition }`: hur makt vinns/behålls
- `effektkedjor` — `{ första, andra, tredje }`: avsedda och oavsedda konsekvenser i tre led
- `vägval` — `{ demokratisk_bana, auktoritär_bana, avgörande_villkor }`: vad som avgör vilken riktning strategin tar
- `varningssignaler` — konkreta tecken att se upp för
- `exempel`, `relaterade`, `color`

Detta är kärnan i att identifiera *metod* snarare än *åsikt* i en text: leta efter mönster i retorik/kanaler/känslor som matchar `mobilisering`, och maktspråk som matchar `makttaktik`. Använd `vägval` och `varningssignaler` för att vara försiktig — de flesta strategier har en fullt demokratisk variant.

## `src/lib/principles.json`

URL: `https://raw.githubusercontent.com/politiskaalternativ/webbplattform/main/src/lib/principles.json`

Det treaxliga ramverk sajten använder för att positionera ideologier:

- **Ekonomi**: Stat (−10) ↔ Marknad (+10)
- **Frihet**: Libertariansk (−10) ↔ Auktoritär (+10)
- **Kultur**: Progressiv (−10) ↔ Konservativ (+10)

Använd axlarna försiktigt och bara när texten ger tillräckligt underlag för en motiverad uppskattning — ange alltid en kort motivering, inte bara en siffra. Se [analysmall.md](analysmall.md) för hur positionen ska presenteras.

## Om nätverksåtkomst saknas

Fortsätt analysen med din egen kunskap om ideologier och politiska strategier, men flagga uttryckligen i output att analysen inte är förankrad i sajtens aktuella källdata och därför kan avvika i terminologi eller kategorisering.
