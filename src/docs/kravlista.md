# Questlog -- kravlista

Steg-för-steg-checklista för **Inlämning 2 -- Questlog**. Checklistan följer uppgiftens krav och är ordnad så att projektet byggs i en fungerande ordning. Målet är **VG**, vilket innebär samtliga G-krav plus VG-kraven.

> **Statusfilter:** All, Want to play, Playing, Completed, Dropped
> **API-bas:** `https://questlog-api.vercel.app/api/:handle`
> **Exempel:** `https://questlog-api.vercel.app/api/anna-k/games`

---

## 1. Förstå uppgiften och API

- [x] Läs igenom [Questlog API-dokumentationen](https://questlog-api.vercel.app/docs).
- [x] Prova API-anrop direkt i dokumentationen.
- [x] Bestäm ett eget handle som används för appens speldata.
- [x] Kontrollera hur ett spelobjekt ser ut i API-svaret.
- [x] Kontrollera vilka statusvärden API accepterar.
- [x] Kontrollera hur API svarar när ett spel inte finns (404).
- [x] Kontrollera hur API svarar vid felaktiga anrop.

## 2. Projektgrund och TypeScript

- [x] Kontrollera att projektet startar med `npm run dev`.
- [x] Kontrollera att `npm run typecheck` fungerar.
- [x] Kontrollera att `npm run build` fungerar.
- [x] Skapa en TypeScript-typ för ett spel (`Game`) utifrån API data.
- [x] Lägg typdefinitioner på en tydlig plats, exempelvis `src/types/`.
- [x] Bestäm en enkel och begriplig mappstruktur för pages, components, hooks och utils.

## 3. Routing och sidstruktur

- [x] Lägg upp React Router.
- [x] Skapa en gemensam layout för appens sidor.
- [x] Lägg till navigering mellan sidorna.
- [x] Skapa startsidan med listan över spel.
- [x] Skapa en detaljsida för ett enskilt spel: `/games/:id`.
- [x] Skapa en sida eller vy med formulär för att lägga till ett nytt spel.
- [x] Skapa en 404-sida för okända routes.
- [x] Kontrollera att navigeringen fungerar och att layouten visas på rätt sidor.

## 4. API och dataflöde -- VG-grund

Målet är att lägga fetch-logiken i egna hooks, inte direkt i sidkomponenterna.

- [x] Skapa `useGames(status)` för att hämta listan över spel, eventuellt filtrerad på status.
- [x] Skapa `useGame(id)` för att hämta ett enskilt spel.
- [x] Skapa separata hooks för att skapa, ändra och ta bort spel.
- [x] Samla gärna hooksen i `src/hooks/`, enligt uppgiftens exempel.
- [x] Se till att hooksen hanterar laddning och fel på ett tydligt sätt.
- [x] Se till att komponenterna använder hooksen i stället för att själva innehålla fetch-logik.

## 5. Spelöversikten och statusfilter

- [x] Hämta och visa alla spel.
- [x] Visa spelen i en tydlig lista eller motsvarande översikt.
- [x] Skapa filterknapparna All, Want to play, Playing, Completed och Dropped.
- [x] Låt varje filter visa endast spel med vald status.
- [x] Låt All visa alla spel.
- [x] Kontrollera att filtret fungerar när användaren byter mellan alternativen.
- [x] Visa en laddningsindikator medan listans data hämtas.
- [x] Visa ett begripligt felmeddelande om listan inte kan hämtas.

## 6. Detaljsida för ett spel

- [x] Hämta spelet med API `GET /games/:id`.
- [x] Visa spelets omslag (`coverUrl`).
- [x] Visa spelets titel.
- [x] Visa plattform (`platform`).
- [x] Visa betyg (`rating`).
- [x] Visa anteckningar (`notes`).
- [x] Visa en laddningsindikator medan spelet hämtas.
- [x] Hantera och visa fel om spelet inte kan hämtas.
- [x] Hantera ett spel som inte finns och visa 404 när API svarar med 404.

## 7. Skapa, ändra och ta bort spel (CRUD)

### Skapa spel

- [x] Skapa ett formulär för ett nytt spel.
- [x] Formuläret ska kunna skicka de obligatoriska fälten `title`, `platform` och `status`.
- [x] Skicka spelet med `POST /games`.
- [x] Hantera fel om skapandet misslyckas.
- [x] Ge användaren återkoppling efter att spelet har skapats.
- [x] Kontrollera att det nya spelet dyker upp i listan.

### Ändra spel

- [x] Gör det möjligt att ändra ett befintligt spel.
- [x] Gör det möjligt att ändra exempelvis status och betyg.
- [x] Skicka endast de fält som ska ändras med `PATCH /games/:id`.
- [x] Hantera fel om uppdateringen misslyckas.
- [x] Kontrollera att ändringarna visas på rätt sätt efteråt.

### Ta bort spel

- [x] Lägg till en funktion för att ta bort ett spel.
- [x] Skicka `DELETE /games/:id`.
- [x] Hantera fel om borttagningen misslyckas.
- [x] Kontrollera att spelet försvinner ur listan efter borttagning.

## 8. Komponentuppdelning och props

- [x] Dela upp appen i komponenter med tydliga ansvarsområden.
- [x] Flytta återanvändbara delar av gränssnittet till egna komponenter.
- [x] Skicka data till underkomponenter via props.
- [x] Skicka callbacks via props när en underkomponent behöver anropa en funktion.
- [x] Ge props och komponenter tydliga TypeScript-typer.
- [x] Undvik att samla all logik och allt gränssnitt i en enda komponent.

## 9. VG -- spara statusfiltret

- [x] Återanvänd eller skapa en `useLocalStorage`-hook.
- [x] Spara det valda statusfiltret i `localStorage`.
- [x] Läs in det sparade filtret när appen startar.
- [x] Se till att valt filter ligger kvar efter omladdning av sidan.
- [x] Kontrollera att rätt spel visas när appen öppnas med ett tidigare sparat filter.

## 10. Felhantering och sluttest

- [x] Kontrollera `response.ok` vid fetch-anrop där det är relevant.
- [x] Visa ett begripligt felmeddelande när ett API-anrop misslyckas.
- [x] Testa att listan laddas korrekt.
- [x] Testa samtliga statusfilter.
- [x] Testa att statusfiltret finns kvar efter omladdning.
- [x] Testa att öppna ett spel från listan.
- [x] Testa att öppna en speladress med ett ogiltigt ID.
- [x] Testa att skapa ett spel.
- [x] Testa att ändra ett spel.
- [x] Testa att ta bort ett spel.
- [x] Kontrollera laddningsindikatorer för både listan och detaljsidan.
- [x] Kontrollera felmeddelanden genom att testa relevanta felsituationer.
- [x] Kör `npm run typecheck`.
- [x] Kör `npm run build`.

## 11. Design och användarupplevelse

Design och extra funktioner väljer du själv. Projektet är byggt mobile first med 360 px som utgångspunkt.

### Mobil

- [x] Skapa en grunddesign anpassad för 360 px.
- [ ] Kontrollera att layouten fungerar även på större mobilskärmar.

### Surfplatta

- [ ] Anpassa spelöversikten för surfplattor.
- [ ] Kontrollera att kort, formulär och detaljsidor använder skärmutrymmet på ett bra sätt.
- [ ] Kontrollera att navigering och filter fungerar vid relevanta brytpunkter.

### Desktop och större skärmar

- [ ] Anpassa layouten för desktop.
- [ ] Se över maxbredder, marginaler och grid-layout.
- [ ] Kontrollera att detaljsidan och formulären inte blir onödigt breda.
- [ ] Kontrollera att gränssnittet fungerar på bredare skärmar.

### Övergripande användarupplevelse

- [ ] Skapa ett konsekvent och genomarbetat gränssnitt på samtliga skärmstorlekar.
- [ ] Se till att filter, formulär och navigering är tydliga att använda.
- [ ] Ge användaren återkoppling vid lyckade och misslyckade åtgärder.
- [ ] Gör en sista visuell kontroll på mobil, surfplatta och desktop.

## 12. Spelinnehåll och lokal Steam-data

### Speldata

- [ ] Lägg in de spel som ska finnas i Questlog via API.
- [ ] Kontrollera att titel, plattform, status, betyg och anteckningar stämmer.

### Omslagsbilder

- [ ] Hitta omslagsbilder via [LaunchBox Games Database](https://gamesdb.launchbox-app.com/).
- [ ] Använd i första hand **Box - 3D** när det finns.
- [ ] Använd **Box - Front** som alternativ när 3D saknas.
- [ ] Använd projektets placeholder när ingen lämplig bild finns.
- [ ] Kontrollera att bilderna visas korrekt i både översikt och detaljvy.

### Steam och speltid

- [x] Läsa in Steam-bibliotekets lokala data.
- [x] Matcha Steam-spel mot Questlogs spel.
- [x] Visa speltid när sådan information finns.
- [x] Hantera manuellt angiven speltid.
- [x] Spara manuella speltidsvärden lokalt.
- [x] Kontrollera Steam-matchning och speltid för de spel som läggs in.

## 13. Publicering och inlämning

- [ ] Publicera appen på Vercel.
- [ ] Kontrollera att den publicerade appen fungerar.
- [ ] Kontrollera att API-anropen fungerar även i den publicerade appen.
- [ ] Se till att GitHub-repot är publikt.
- [ ] Skapa eller uppdatera `README.md`.
- [ ] Beskriv kort vad Questlog är.
- [ ] Beskriv hur projektet installeras och körs lokalt.
- [ ] Ange ditt valda API-handle.
- [ ] Ange vilket betyg du siktar på.
- [ ] **VG:** Förklara kort hur dina custom hooks fungerar.
- [ ] **VG:** Förklara varför du har byggt upp lösningen på det sättet.
- [ ] Lägg till länken till GitHub-repot i inlämningen.
- [ ] Lägg till länken till den publicerade appen i inlämningen.

---

## Betygskontroll

### G -- samtliga krav ska vara uppfyllda

- [x] Sidor: lista med alla spel, en sida per spel (`/games/:id`), formulär för nytt spel och en 404-sida.
- [x] Routing: React Router med layout och navigering.
- [x] Filter: knappar för All, Want to play, Playing, Completed och Dropped.
- [x] CRUD: hämta, skapa, ändra och ta bort spel.
- [x] Komponenter: appen är uppdelad i komponenter som får data via props.
- [x] Laddning: indikator medan data hämtas, både för listan och detaljsidan.
- [x] Fel: kontroll av `response.ok` och meddelande när något går fel.
- [x] TypeScript: en typ för ett spel.
- [ ] Appen är deployad på Vercel och har en README.

### VG -- alla G-krav plus följande

- [x] All fetch-logik ligger i egna custom hooks, inte i komponenterna.
- [x] Det finns hooks motsvarande `useGames(status)`, `useGame(id)` och hooks för att spara, uppdatera och ta bort spel.
- [x] Det valda statusfiltret sparas med en `useLocalStorage`-hook.
- [ ] README förklarar kort hur hooksen fungerar och varför lösningen är uppbyggd så.

---

## API-snabbguide

Bas-URL: `https://questlog-api.vercel.app/api/:handle`

| Metod  | Endpoint                | Funktion                                              |
| ------ | ----------------------- | ----------------------------------------------------- |
| GET    | `/games?status=playing` | Hämta alla spel eller spel med en viss status         |
| GET    | `/games/:id`            | Hämta ett spel, eller få 404                          |
| POST   | `/games`                | Skapa spel med `{ title, platform, status }`          |
| PATCH  | `/games/:id`            | Ändra de fält som skickas, exempelvis `{ rating: 5 }` |
| DELETE | `/games/:id`            | Ta bort ett spel                                      |

Ett spelobjekt innehåller enligt uppgiftens exempel:

- `id`
- `title`
- `platform`
- `status`
- `rating`
- `coverUrl`
- `notes`

**Viktigt:** Läs API-dokumentationen för exakta fält, statusvärden och svar innan du implementerar anropen.
