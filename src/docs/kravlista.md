# Questlog -- kravlista

Steg-för-steg-checklista för **Inlämning 2 -- Questlog**. Checklistan
följer uppgiftens krav och är ordnad så att projektet byggs i en
fungerande ordning. Målet är **VG**, vilket innebär samtliga G-krav plus
VG-kraven.

> **Statusfilter:** All, Want to play, Playing, Completed, Dropped\
> **API-bas:** `https://questlog-api.vercel.app/api/:handle`\
> **Exempel:** `https://questlog-api.vercel.app/api/anna-k/games`

------------------------------------------------------------------------

## 1. Förstå uppgiften och API:t

-   [X] Läs igenom [Questlog
    API-dokumentationen](https://questlog-api.vercel.app/docs).
-   [X] Prova API-anrop direkt i dokumentationen.
-   [X] Bestäm ett eget handle som används för appens speldata.
-   [X] Kontrollera hur ett spelobjekt ser ut i API-svaret.
-   [X] Kontrollera vilka statusvärden API:t accepterar.
-   [X] Kontrollera hur API:t svarar när ett spel inte finns (404).
-   [X] Kontrollera hur API:t svarar vid felaktiga anrop.

## 2. Projektgrund och TypeScript

-   [X] Kontrollera att projektet startar med `npm run dev`.
-   [X] Kontrollera att `npm run typecheck` fungerar.
-   [X] Kontrollera att `npm run build` fungerar.
-   [X] Skapa en TypeScript-typ för ett spel (`Game`) utifrån API:ts
    data.
-   [X] Lägg typdefinitioner på en tydlig plats, exempelvis
    `src/types/`.
-   [X] Bestäm en enkel och begriplig mappstruktur för pages,
    components, hooks och utils.

## 3. Routing och sidstruktur

-   [X] Lägg upp React Router.
-   [X] Skapa en gemensam layout för appens sidor.
-   [X] Lägg till navigering mellan sidorna.
-   [*] Skapa startsidan med listan över spel.
-   [ ] Skapa en detaljsida för ett enskilt spel: `/games/:id`.
-   [ ] Skapa en sida eller vy med formulär för att lägga till ett nytt
    spel.
-   [ ] Skapa en 404-sida för okända routes.
-   [ ] Kontrollera att navigeringen fungerar och att layouten visas på
    rätt sidor.

## 4. API och dataflöde -- VG-grund

Målet är att lägga fetch-logiken i egna hooks, inte direkt i
sidkomponenterna.

-   [ ] Skapa `useGames(status)` för att hämta listan över spel,
    eventuellt filtrerad på status.
-   [ ] Skapa `useGame(id)` för att hämta ett enskilt spel.
-   [ ] Skapa `useSaveGame()` för att skapa, ändra och ta bort spel.
-   [ ] Samla gärna hooksen i `src/hooks/useGames.ts`, enligt uppgiftens
    exempel.
-   [ ] Se till att hooksen hanterar laddning och fel på ett tydligt
    sätt.
-   [ ] Se till att komponenterna använder hooksen i stället för att
    själva innehålla fetch-logik.

## 5. Spelöversikten och statusfilter

-   [ ] Hämta och visa alla spel.
-   [ ] Visa spelen i en tydlig lista eller motsvarande översikt.
-   [ ] Skapa filterknapparna All, Want to play, Playing, Completed och
    Dropped.
-   [ ] Låt varje filter visa endast spel med vald status.
-   [ ] Låt All visa alla spel.
-   [ ] Kontrollera att filtret fungerar när användaren byter mellan
    alternativen.
-   [ ] Visa en laddningsindikator medan listans data hämtas.
-   [ ] Visa ett begripligt felmeddelande om listan inte kan hämtas.

## 6. Detaljsida för ett spel

-   [ ] Hämta spelet med API:ts `GET /games/:id`.
-   [ ] Visa spelets omslag (`coverUrl`).
-   [ ] Visa spelets titel.
-   [ ] Visa plattform (`platform`).
-   [ ] Visa betyg (`rating`).
-   [ ] Visa anteckningar (`notes`).
-   [ ] Visa en laddningsindikator medan spelet hämtas.
-   [ ] Hantera och visa fel om spelet inte kan hämtas.
-   [ ] Hantera ett spel som inte finns och visa 404 när API:t svarar
    med 404.

## 7. Skapa, ändra och ta bort spel (CRUD)

### Skapa spel

-   [ ] Skapa ett formulär för ett nytt spel.
-   [ ] Formuläret ska kunna skicka de obligatoriska fälten `title`,
    `platform` och `status`.
-   [ ] Skicka spelet med `POST /games`.
-   [ ] Hantera fel om skapandet misslyckas.
-   [ ] Ge användaren återkoppling efter att spelet har skapats.
-   [ ] Kontrollera att det nya spelet dyker upp i listan.

### Ändra spel

-   [ ] Gör det möjligt att ändra ett befintligt spel.
-   [ ] Gör det möjligt att ändra exempelvis status och betyg.
-   [ ] Skicka endast de fält som ska ändras med `PATCH /games/:id`.
-   [ ] Hantera fel om uppdateringen misslyckas.
-   [ ] Kontrollera att ändringarna visas på rätt sätt efteråt.

### Ta bort spel

-   [ ] Lägg till en funktion för att ta bort ett spel.
-   [ ] Skicka `DELETE /games/:id`.
-   [ ] Hantera fel om borttagningen misslyckas.
-   [ ] Kontrollera att spelet försvinner ur listan efter borttagning.

## 8. Komponentuppdelning och props

-   [ ] Dela upp appen i komponenter med tydliga ansvarsområden.
-   [ ] Flytta återanvändbara delar av gränssnittet till egna
    komponenter.
-   [ ] Skicka data till underkomponenter via props.
-   [ ] Skicka callbacks via props när en underkomponent behöver anropa
    en funktion.
-   [ ] Ge props och komponenter tydliga TypeScript-typer.
-   [ ] Undvik att samla all logik och allt gränssnitt i en enda
    komponent.

## 9. VG -- spara statusfiltret

-   [ ] Återanvänd eller skapa en `useLocalStorage`-hook.
-   [ ] Spara det valda statusfiltret i `localStorage`.
-   [ ] Läs in det sparade filtret när appen startar.
-   [ ] Se till att valt filter ligger kvar efter omladdning av sidan.
-   [ ] Kontrollera att rätt spel visas när appen öppnas med ett
    tidigare sparat filter.

## 10. Felhantering och sluttest

-   [ ] Kontrollera `response.ok` vid fetch-anrop där det är relevant.
-   [ ] Visa ett begripligt felmeddelande när ett API-anrop misslyckas.
-   [ ] Testa att listan laddas korrekt.
-   [ ] Testa samtliga statusfilter.
-   [ ] Testa att statusfiltret finns kvar efter omladdning.
-   [ ] Testa att öppna ett spel från listan.
-   [ ] Testa att öppna en speladress med ett ogiltigt ID.
-   [ ] Testa att skapa ett spel.
-   [ ] Testa att ändra ett spel.
-   [ ] Testa att ta bort ett spel.
-   [ ] Kontrollera laddningsindikatorer för både listan och
    detaljsidan.
-   [ ] Kontrollera felmeddelanden genom att testa relevanta
    felsituationer.
-   [ ] Kör `npm run typecheck`.
-   [ ] Kör `npm run build`.

## 11. Design och användarupplevelse

Design och extra funktioner väljer du själv.

-   [ ] Skapa ett konsekvent och genomarbetat gränssnitt.
-   [ ] Kontrollera att appen fungerar på relevanta skärmstorlekar.
-   [ ] Se till att filter, formulär och navigering är tydliga att
    använda.
-   [ ] Ge användaren återkoppling vid lyckade och misslyckade åtgärder.

## 12. Publicering och inlämning

-   [ ] Publicera appen på Vercel.
-   [ ] Kontrollera att den publicerade appen fungerar.
-   [ ] Kontrollera att API-anropen fungerar även i den publicerade
    appen.
-   [ ] Se till att GitHub-repot är publikt.
-   [ ] Skapa eller uppdatera `README.md`.
-   [ ] Beskriv kort vad Questlog är.
-   [ ] Beskriv hur projektet installeras och körs lokalt.
-   [ ] Ange ditt valda API-handle.
-   [ ] Ange vilket betyg du siktar på.
-   [ ] **VG:** Förklara kort hur dina custom hooks fungerar.
-   [ ] **VG:** Förklara varför du har byggt upp lösningen på det
    sättet.
-   [ ] Lägg till länken till GitHub-repot i inlämningen.
-   [ ] Lägg till länken till den publicerade appen i inlämningen.

------------------------------------------------------------------------

## Betygskontroll

### G -- samtliga krav ska vara uppfyllda

-   [ ] Sidor: lista med alla spel, en sida per spel (`/games/:id`),
    formulär för nytt spel och en 404-sida.
-   [ ] Routing: React Router med layout och navigering.
-   [ ] Filter: knappar för All, Want to play, Playing, Completed och
    Dropped.
-   [ ] CRUD: hämta, skapa, ändra och ta bort spel.
-   [ ] Komponenter: appen är uppdelad i komponenter som får data via
    props.
-   [ ] Laddning: indikator medan data hämtas, både för listan och
    detaljsidan.
-   [ ] Fel: kontroll av `response.ok` och meddelande när något går fel.
-   [ ] TypeScript: en typ för ett spel.
-   [ ] Appen är deployad på Vercel och har en README.

### VG -- alla G-krav plus följande

-   [ ] All fetch-logik ligger i egna custom hooks, inte i
    komponenterna.
-   [ ] Det finns hooks motsvarande `useGames(status)`, `useGame(id)`
    och `useSaveGame()`.
-   [ ] Det valda statusfiltret sparas med en `useLocalStorage`-hook.
-   [ ] README förklarar kort hur hooksen fungerar och varför lösningen
    är uppbyggd så.

------------------------------------------------------------------------

## API-snabbguide

Bas-URL: `https://questlog-api.vercel.app/api/:handle`

  ---------------------------------------------------------------------------------
  Metod                   Endpoint                  Funktion
  ----------------------- ------------------------- -------------------------------
  GET                     `/games?status=playing`   Hämta alla spel eller spel med
                                                    en viss status

  GET                     `/games/:id`              Hämta ett spel, eller få 404

  POST                    `/games`                  Skapa spel med
                                                    `{ title, platform, status }`

  PATCH                   `/games/:id`              Ändra de fält som skickas,
                                                    exempelvis `{ rating: 5 }`

  DELETE                  `/games/:id`              Ta bort ett spel
  ---------------------------------------------------------------------------------

Ett spelobjekt innehåller enligt uppgiftens exempel:

-   `id`
-   `title`
-   `platform`
-   `status`
-   `rating`
-   `coverUrl`
-   `notes`

**Viktigt:** Läs API-dokumentationen för exakta fält, statusvärden och
svar innan du implementerar anropen.
