# HubSpot Theme Changer – metergrid Edition

Lokal angepasste Kopie der Chrome-Extension [HubSpot Theme Changer](https://chromewebstore.google.com/detail/hubspot-theme-changer/pjndnibpagckfdcechcpbmoelmeenljc) (clientseitiger Code, daher frei einsehbar/anpassbar) mit einem eigenen **metergrid**-Theme.

## Warum eine eigene Kopie statt Stylus?

Die [Stylus-Variante](../metergrid-hubspot.user.css) dieses Projekts hatte über mehrere Runden Kontrast-/Uneinheitlichkeits-Probleme, die sich als Cascade-Timing-Probleme herausstellten (HubSpots dynamisch nachgeladenes Styled-Components-CSS gewann teilweise gegen das einmalig injizierte Stylus-Stylesheet). Diese Extension löst das bereits selbst über einen `MutationObserver`, der ihr `<style>`-Tag laufend ans Ende von `<head>` hängt — bei euch bestätigt zuverlässig funktionierend.

## Was wurde geändert?

1. **Zwei metergrid-Themes** (Tab **metergrid**, ganz links):
   - **metergrid** — helles Grundlayout wie die bestehenden `*_light`-Themes (weiße Sidebar/Topbar), Akzente (Buttons, Links, aktiver Nav-Eintrag, Fokus-Ränder) in metergrid-Navy/Blau (`#002c96` / `#005edf`).
   - **metergrid dark** — identisch, aber Topbar + Sidebar durchgehend Navy (`#002c96`), Content-Bereich bleibt hell. Nutzt denselben `navBg`-Mechanismus wie die eingebauten Dark-Themes (Cyberpunk, Dracula, …) der Extension, nur eben unabhängig vom (hellen) `surfaceBase` für den Content.
   - Bonus: **Psychedelic LSD** (Tab **🍄 Fun**) — Joke-Theme, keine Kontrast-/Nutzbarkeits-Ansprüche.
2. **Variablen-Lücke geschlossen** (`buildCssVariablesV2Extended`): Das Original kennt nur ca. 220 `--trellis-color-*`-Variablen. HubSpots aktuelles Redesign nutzt aber eine zweite, größere Familie `--trellis-color-fwc-*` ("Framework Web Components": Buttons, Links, Inputs, Tabellen) mit eigenen Werten. Per Live-DevTools-Export ermittelt, automatisiert klassifiziert und ergänzt — funktioniert für **jedes** Theme der Extension, nicht nur metergrid.
   - Tag/Badge/Ribbon-Farben, Breeze/Copilot-Submarke, Report-Chart-/Highlight-Farben, Status-Farben (Alert/Caution/Positive/Info) bleiben unangetastet.
   - Variablen mit ursprünglich transparentem Live-Wert (unsichtbare Link-Unterstriche, randlose Tabellen, ein Ghost-Icon) bleiben transparent statt in eine feste Farbe verwandelt zu werden.
3. **Bug behoben:** Ein Substring-Fehltreffer (`"button-fill"` enthält zufällig die Zeichenfolge `"on-fill"` am Ende von "butt**on**" + "-fill") hätte Primär-Buttons faelschlich auf Weiß statt auf die Akzentfarbe gesetzt — für alle Themes betroffen, jetzt korrigiert.
4. **Generische Badge/Tag/Alert-Umfärbung entfernt** (betraf alle Themes, nicht nur metergrid): Hätte auch rote Fehler-/Mahn-Badges auf die Theme-Akzentfarbe umgefärbt und damit Status-Semantik zerstört.
5. **Bug behoben:** Ein Selektor endete auf ein blankes `span` mit `!important` — überschrieb dadurch jeden Span auf der Seite, auch Badge-Zähler (Ticket-/Deal-Counts) und Tooltips mit bewusst hellem Text auf dunklem Hintergrund. Ergebnis: dunkler Text auf dunklem Grund, unlesbar. Betraf alle Themes der Original-Extension, nicht nur metergrid. Jetzt auf die eigentlich gemeinten, engeren Selektoren (`[data-location="global-toolbar"]`, `[data-location="vertical-nav"]`, `i18n-string`) beschränkt.
6. `themes.js` (ungenutzte Altlast, nicht im Manifest referenziert) entfernt, `manifest.json` bereinigt (kein `update_url`, da lokal geladen).

## Installation

1. `chrome://extensions` öffnen
2. Oben rechts **Entwicklermodus** aktivieren
3. **Entpackt laden** → diesen Ordner (`chrome-extension-metergrid-theme/`) auswählen
4. Extension-Icon in der Toolbar anklicken → Tab **metergrid** (ganz links) → Theme **metergrid** auswählen
5. HubSpot-Tab neu laden

## Falls HubSpot erneut umbaut

Siehe [`../metergrid-hubspot.user.css`](../metergrid-hubspot.user.css) — dort steht das DevTools-Export-Script, mit dem sich neue/geänderte `--trellis-*`-Variablen live ermitteln lassen. Ergebnis gegen `buildCssVariablesV2` / `buildCssVariablesV2Extended` in `themes_v2.js` diffen.
