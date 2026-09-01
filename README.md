# HubSpot styling blue

Stylus-Userstyle, das HubSpot im Corporate Design des metergrid Mieterstromportals einfärbt (Navy/Blau statt HubSpot-Standard Schwarz/Orange).

## Farb-Mapping

Werte per Pixel-Sampling aus Screenshots des metergrid-Portals und des HubSpot-Ist-Zustands extrahiert.

| Element | HubSpot-Standard | metergrid CI/CD |
|---|---|---|
| Topbar / Sidebar | `#333333` | `#002c96` |
| Primär-Buttons / Links | `#fb4f20` / `#1d70de` | `#005edf` |
| Hover / sekundäre Flächen | – | `#264ca6` |
| Seiten-Hintergrund | `#ffffff` / `#f0f0f0` | `#f7f9fc` |
| Erfolg-Badges | HubSpot-Grün | `#e0faf2` (Mint) auf Navy-Text |

Rote/Warn-Badges (überfällige Zahlungen, Fehler) bleiben unverändert — analog zum metergrid-Portal, wo Statusfarben von der Markenfarbe getrennt sind.

## Installation

1. [Stylus](https://add0n.com/stylus.html)-Browser-Extension installieren.
2. Stylus-Icon → **Manage** → **Import** → `metergrid-hubspot.user.css` auswählen.
3. Prüfen, ob eure HubSpot-Instanz auf einer anderen Subdomain läuft (z.B. `app-eu1.hubspot.com`) — die Regex im `@-moz-document`-Block ggf. ergänzen.

## Hinweis

HubSpot rendert Teile der Navigation mit dynamisch gehashten Klassennamen. Die Selektoren setzen primär auf ARIA-Rollen/Landmarks (stabiler als Klassennamen) plus bekannte HubSpot-Klassen als Fallback. Einzelne Selektoren (v.a. aktiver Sidebar-Status, Primär-Button) ggf. per DevTools nachjustieren, falls sie im Live-Portal nicht greifen.
