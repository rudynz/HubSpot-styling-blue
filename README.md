# HubSpot styling blue

Stylus-Userstyle, das HubSpot im Corporate Design des metergrid Mieterstromportals einfärbt (Navy/Blau statt HubSpot-Standard Schwarz/Orange).

## Versionsverlauf

**v1:** gesamte Sidebar navy + Linktext blau gesetzt → wo die Navy-Regel nicht griff, blieb HubSpots dunkelgrauer Standardhintergrund, kombiniert mit blauem Linktext = schlechter Kontrast.

**v2:** 1:1-Nachbau der metergrid-Website per Zeilen-Sampling ergab dort eine weiße Sidebar (nur das Logo-Band oben ist navy) — technisch korrekt gegenüber der Quelle, aber nicht der gewünschte Look.

**v3:** Referenz-Screenshots eines älteren, als angenehmer empfundenen HubSpot-Designs zeigen eine durchgehende weiche Blaugrau-Fläche (`#394651`) über Top-Bar *und* komplette linke Icon-Rail als ein Block. v3 übernimmt diese Struktur, ersetzt den Ton aber durch metergrid-Navy.

**v4:** Live-Feedback zu v3 war, dass es wie der Graustufen-„Bedtime Mode“ eines Handys wirkt — nur die Rail trug Farbe, der Content blieb HubSpots neutrales Schwarz/Grau/Weiß. v4 zieht metergrid-Blau in den Content rein.

**v5: datengetrieben statt geraten.** v1-v4 haben Selektoren von Hand geraten — fehleranfällig. Für v5 wurde die im Chrome Web Store frei verfügbare Extension [HubSpot Theme Changer](https://chromewebstore.google.com/detail/hubspot-theme-changer/pjndnibpagckfdcechcpbmoelmeenljc) heruntergeladen und ihr (clientseitig ohnehin einsehbarer) Code analysiert. Das brachte zwei Dinge zutage:

1. HubSpot nutzt ein eigenes Design-Token-System namens **Trellis** mit CSS-Custom-Properties (`--trellis-color-*`) auf `:root`/`html[data-hubspot-theme]`. Diese zu setzen ist deutlich robuster als einzelne Komponenten-Klassen zu raten, weil HubSpots eigene Komponenten sie selbst konsumieren.
2. Als Ergänzung extrahiert die Extension reale, funktionierende Selektoren (`data-test-id`, `#hs-vertical-nav`, `#hs-global-toolbar`, Styled-Components-Klassenpräfixe) für Dutzende HubSpot-Bereiche.

Die metergrid-Palette wurde durch dieselbe Generator-Funktion der Extension gejagt statt von Hand übertragen. **Bewusst entfernt:** die generischen Badge/Tag/Alert-Overrides der Extension — die hätten ALLE Badges/Alerts (auch rote Fehler-/Mahn-Badges) pauschal auf metergrid-Blau umgefärbt und damit die Status-Semantik zerstört.

**v6: Lücke im Redesign geschlossen, mit echten Live-Daten statt Extension-Vermutung.** v5 warnte bereits vor einem Residualrisiko durch HubSpots Redesign — bestätigt: Per DevTools-Export (`getComputedStyle` auf `:root`, Anleitung siehe unten) hat der Nutzer die tatsächlich live gesetzten CSS-Variablen geliefert. Ergebnis: HubSpot nutzt inzwischen **~880 statt ~220** `--trellis-color-*`-Variablen — vor allem eine komplett neue Familie `--trellis-color-fwc-*` ("Framework Web Components": Buttons, Links, Inputs, Tabellen), die die v5-Extension noch nicht kannte. Dadurch blieben zentrale Elemente (v.a. Buttons) auf HubSpots eigenem Alt-Farbschema (dunkles Teal `#00494b`) hängen, während die Chrome drumherum schon metergrid-Blau zeigte → der gemeldete "Bedtime Mode"-Effekt/hässliche Farb-Mix.

v6 klassifiziert und mappt die ~660 neuen Variablen automatisiert per Skript (nicht von Hand), mit denselben Ausschlussregeln wie zuvor: Tag/Badge/Ribbon-Farben (nutzerwählbare Label-Farben), Breeze/Copilot-Submarke, Report-Chart-/Highlight-Farben bleiben unangetastet. **Zusätzlich neu entdeckt und gefixt:** mehrere Variablen mit ursprünglich transparentem Wert (`rgba(...,0)`/`transparent`) — z.B. unsichtbare Link-Unterstriche, randlose Tabellen, ein "Ghost"-Lesezeichen-Icon — wären durch reines Namens-Mapping fälschlich in solide Farben verwandelt worden. Diese werden jetzt anhand des tatsächlichen Live-Werts erkannt und übersprungen, nicht nur anhand des Variablennamens.

**v7 (aktuell): fleckiger Hintergrund behoben.** Screenshot-Feedback zeigte lauter kleine weiße Kachel-Panels (Deal-Karte, Kontakte-Karte, Companies-Karte, …) mit sichtbar bläulichen Lücken dazwischen — wirkte fleckig statt wie eine einheitliche Fläche. Ursache: v1-v6 haben konsequent **zwei** verschiedene helle Töne verwendet — Seiten-/Container-Hintergrund `#eef3fb` (sichtbar blau) vs. Karten-/Panel-Hintergrund `#fcfdfe` (fast weiß). HubSpots aktuelles Layout besteht aus sehr vielen kleinen, ineinander verschachtelten Containern — bei jedem Übergang zwischen den beiden Tönen entsteht eine sichtbare Kante. v7 vereinheitlicht alle Seiten-/Container-Hintergründe auf denselben Ton wie die Karten (`#fcfdfe`) — keine Kanten mehr. Hover-Zustände (vorher zufällig ebenfalls auf `#fcfdfe`, dadurch unsichtbar geworden) bekommen einen eigenen, leicht abgesetzten Zwischenton (`#f2f6fb`), damit Interaktions-Feedback erhalten bleibt.

⚠️ **Weiterhin denkbares Residualrisiko:** Sollte HubSpot künftig erneut Token-Namen ändern, hilft derselbe DevTools-Export erneut weiter.

## Was sich ändert

| Bereich | Wird zu |
|---|---|
| Top-Bar + Icon-Rail links | Navy `#002c96`, helle Schrift/Icons `#c9d4e8` |
| Aktiver Nav-Eintrag | Blaue Pille `#005edf`, weißer Text |
| Primär-Buttons | `#005edf`, Hover `#264ca6` |
| Links, Überschriften im Content | Blau/gedämpftes Navy statt Schwarz |
| Seiten-/Container-Hintergrund, Karten | einheitlich `#fcfdfe` (fast weiß, keine Kanten mehr) |
| Hover-Zustand (generische Flächen) | `#f2f6fb` |
| Karten, Tabellen, Inputs, Tabs, Menüs, Checkboxen, Tooltips, Charts, Scrollbars | durchgehend metergrid-Farbschema (siehe CSS-Datei, Abschnitt „V2 Data-Driven Theme Overrides“) |

Rote/Warn-Farben (überfällige Zahlungen, Fehler) bleiben unverändert — analog zum metergrid-Portal, wo Statusfarben von der Markenfarbe getrennt sind.

## Bei künftigen HubSpot-Redesigns: Live-Variablen exportieren

Falls das Theme nach einem HubSpot-Update wieder "falsch" aussieht: In der DevTools-Console (F12) auf einer HubSpot-Seite `allow pasting` eintippen (Chromes Self-XSS-Schutz), dann folgendes Script einfügen — kopiert alle aktuell live gesetzten `--trellis-*`-Variablen automatisch in die Zwischenablage:

```js
(() => {
  const props = new Set();
  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch (e) { continue; }
    for (const rule of rules || []) {
      if (rule.style) {
        for (let i = 0; i < rule.style.length; i++) {
          const p = rule.style[i];
          if (p.startsWith('--')) props.add(p);
        }
      }
    }
  }
  const cs = getComputedStyle(document.documentElement);
  const vars = {};
  [...props].sort().forEach(p => vars[p] = cs.getPropertyValue(p).trim());
  const out = JSON.stringify(vars, null, 2);
  console.log(out);
  copy(out);
})();
```

Das Ergebnis (JSON aller Variablen + aktueller Werte) gegen die `:root`-Sektion in `metergrid-hubspot.user.css` diffen, um neue/geänderte Variablenfamilien zu finden.

## Installation

1. [Stylus](https://add0n.com/stylus.html)-Browser-Extension installieren.
2. Stylus-Icon → **Manage** → **Import** → `metergrid-hubspot.user.css` auswählen.
3. Prüfen, ob eure HubSpot-Instanz auf einer anderen Subdomain läuft (z.B. `app-eu1.hubspot.com`) — die Regex im `@-moz-document`-Block ggf. ergänzen.
4. Live prüfen und Rückmeldung geben, welche Bereiche (falls vorhanden) nicht greifen — siehe Residualrisiko oben.
