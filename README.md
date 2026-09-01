# HubSpot styling blue

Stylus-Userstyle, das HubSpot im Corporate Design des metergrid Mieterstromportals einfärbt (Navy/Blau statt HubSpot-Standard Schwarz/Orange).

## Versionsverlauf

**v1:** gesamte Sidebar navy + Linktext blau gesetzt → wo die Navy-Regel nicht griff, blieb HubSpots dunkelgrauer Standardhintergrund, kombiniert mit blauem Linktext = schlechter Kontrast.

**v2:** 1:1-Nachbau der metergrid-Website per Zeilen-Sampling ergab dort eine weiße Sidebar (nur das Logo-Band oben ist navy) — technisch korrekt gegenüber der Quelle, aber nicht der gewünschte Look.

**v3:** Referenz-Screenshots eines älteren, als angenehmer empfundenen HubSpot-Designs zeigen eine durchgehende weiche Blaugrau-Fläche (`#394651`) über Top-Bar *und* komplette linke Icon-Rail als ein Block. v3 übernimmt diese Struktur, ersetzt den Ton aber durch metergrid-Navy.

**v4:** Live-Feedback zu v3 war, dass es wie der Graustufen-„Bedtime Mode“ eines Handys wirkt — nur die Rail trug Farbe, der Content blieb HubSpots neutrales Schwarz/Grau/Weiß. v4 zieht metergrid-Blau in den Content rein.

**v5 (aktuell): datengetrieben statt geraten.** v1-v4 haben Selektoren von Hand geraten — fehleranfällig. Für v5 wurde die im Chrome Web Store frei verfügbare Extension [HubSpot Theme Changer](https://chromewebstore.google.com/detail/hubspot-theme-changer/pjndnibpagckfdcechcpbmoelmeenljc) heruntergeladen und ihr (clientseitig ohnehin einsehbarer) Code analysiert. Das brachte zwei Dinge zutage:

1. HubSpot nutzt ein eigenes Design-Token-System namens **Trellis** mit ca. 220 CSS-Custom-Properties (`--trellis-color-*`) auf `:root`/`html[data-hubspot-theme]`. Diese zu setzen ist deutlich robuster als einzelne Komponenten-Klassen zu raten, weil HubSpots eigene Komponenten sie selbst konsumieren.
2. Als Ergänzung extrahiert die Extension reale, funktionierende Selektoren (`data-test-id`, `#hs-vertical-nav`, `#hs-global-toolbar`, Styled-Components-Klassenpräfixe) für Dutzende HubSpot-Bereiche — CRM-Tabellen, Dashboards, Help Desk, Academy, Report-Charts (Highcharts), Datenmodell-Diagramme (React Flow) und mehr.

Die metergrid-Palette wurde durch dieselbe Generator-Funktion der Extension gejagt statt von Hand übertragen (schließt Fehler bei ~220 Variablen aus). **Bewusst entfernt:** die generischen Badge/Tag/Alert-Overrides der Extension — die hätten ALLE Badges/Alerts (auch rote Fehler-/Mahn-Badges) pauschal auf metergrid-Blau umgefärbt und damit die Status-Semantik zerstört.

⚠️ **Residualrisiko:** HubSpot hat kürzlich ein Redesign durchgeführt; die Extension könnte an manchen Stellen nicht ganz aktuell sein. Sie referenziert bereits Copilot/Breeze-Selektoren (HubSpots aktuelle KI-Features) — das spricht für einen einigermaßen aktuellen Stand, ist aber keine Garantie. Die CSS-Variablen sind das robustere Fundament (wirken unabhängig von Klassennamen); falls einzelne `[class*="..."]`-Regeln im Live-Portal nicht greifen, per DevTools den aktuellen Klassennamen/`data-test-id` ablesen und ergänzen.

## Was sich ändert

| Bereich | Wird zu |
|---|---|
| Top-Bar + Icon-Rail links | Navy `#002c96`, helle Schrift/Icons `#c9d4e8` |
| Aktiver Nav-Eintrag | Blaue Pille `#005edf`, weißer Text |
| Primär-Buttons | `#005edf`, Hover `#264ca6` |
| Links, Überschriften im Content | Blau/gedämpftes Navy statt Schwarz |
| Seiten-Hintergrund | sichtbar blau getönt `#eef3fb` |
| Karten, Tabellen, Inputs, Tabs, Menüs, Checkboxen, Tooltips, Charts, Scrollbars | durchgehend metergrid-Farbschema (siehe CSS-Datei, Abschnitt „V2 Data-Driven Theme Overrides“) |

Rote/Warn-Farben (überfällige Zahlungen, Fehler) bleiben unverändert — analog zum metergrid-Portal, wo Statusfarben von der Markenfarbe getrennt sind.

## Installation

1. [Stylus](https://add0n.com/stylus.html)-Browser-Extension installieren.
2. Stylus-Icon → **Manage** → **Import** → `metergrid-hubspot.user.css` auswählen.
3. Prüfen, ob eure HubSpot-Instanz auf einer anderen Subdomain läuft (z.B. `app-eu1.hubspot.com`) — die Regex im `@-moz-document`-Block ggf. ergänzen.
4. Live prüfen und Rückmeldung geben, welche Bereiche (falls vorhanden) nicht greifen — siehe Residualrisiko oben.
