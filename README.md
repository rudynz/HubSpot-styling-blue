# HubSpot styling blue

Stylus-Userstyle, das HubSpot im Corporate Design des metergrid Mieterstromportals einfärbt (Navy/Blau statt HubSpot-Standard Schwarz/Orange).

## Struktur (v4)

**v1:** gesamte Sidebar navy + Linktext blau gesetzt → wo die Navy-Regel nicht griff, blieb HubSpots dunkelgrauer Standardhintergrund, kombiniert mit blauem Linktext = schlechter Kontrast.

**v2:** 1:1-Nachbau der metergrid-Website per Zeilen-Sampling ergab dort eine weiße Sidebar (nur das Logo-Band oben ist navy) — technisch korrekt gegenüber der Quelle, aber nicht der gewünschte Look.

**v3:** Referenz-Screenshots eines älteren, als angenehmer empfundenen HubSpot-Designs zeigen eine durchgehende weiche Blaugrau-Fläche (`#394651`) über Top-Bar *und* komplette linke Icon-Rail als ein Block. v3 übernimmt diese Struktur, ersetzt den Ton aber durch metergrid-Navy — und hält Schrift in der Rail konsequent hell/weiß statt blau.

**v4:** Live-Feedback zu v3 war, dass es wie der Graustufen-„Bedtime Mode“ eines Handys wirkt — nur die Rail trug Farbe, der komplette Content-Bereich (Überschriften, Tabellen, Rahmen, Formular-Akzente) blieb HubSpots neutrales Schwarz/Grau/Weiß. v4 zieht metergrid-Blau in den Content rein.

| HubSpot-Element | Wird zu |
|---|---|
| Top-Bar + Icon-Rail links (eine Fläche) | Navy `#002c96`, helle Schrift/Icons `#c9d4e8` (nie Blau) |
| Aktiver Nav-Eintrag | Blaue Pille `#005edf`, weißer Text |
| Primär-Buttons | `#005edf`, Hover `#264ca6` |
| Links im Content-Bereich | `#005edf` (nur `main`/`[role="main"]`, nicht Top-Bar/Rail) |
| Überschriften im Content | gedämpftes Navy `#1e2a4a` statt Schwarz |
| Seiten-Hintergrund | sichtbar blau getönt `#eef3fb` (vorher `#f7f9fc`) |
| Karten | `#fcfdfe` mit Rand `#cfdcf0` (sichtbar blau statt neutral grau) |
| Tabellen-Header/Rahmen | blau getönt statt neutralem Grau |
| Checkbox/Radio/Regler | Blau als Formular-Akzentfarbe statt HubSpot-Orange |
| Aktiver Tab/Filter | Blau statt Schwarz |
| Erfolg-Badges | `#e0faf2` (Mint) auf Navy-Text |

Rote/Warn-Badges (überfällige Zahlungen, Fehler) bleiben unverändert — analog zum metergrid-Portal, wo Statusfarben von der Markenfarbe getrennt sind.

## Installation

1. [Stylus](https://add0n.com/stylus.html)-Browser-Extension installieren.
2. Stylus-Icon → **Manage** → **Import** → `metergrid-hubspot.user.css` auswählen.
3. Prüfen, ob eure HubSpot-Instanz auf einer anderen Subdomain läuft (z.B. `app-eu1.hubspot.com`) — die Regex im `@-moz-document`-Block ggf. ergänzen.

## Hinweis

HubSpot rendert Teile der Navigation mit dynamisch gehashten Klassennamen. Die Selektoren setzen primär auf ARIA-Rollen/Landmarks (stabiler als Klassennamen) plus bekannte HubSpot-Klassen als Fallback. Einzelne Selektoren (v.a. aktiver Sidebar-Status, Primär-Button) ggf. per DevTools nachjustieren, falls sie im Live-Portal nicht greifen.
