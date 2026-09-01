# HubSpot styling blue

Stylus-Userstyle, das HubSpot im Corporate Design des metergrid Mieterstromportals einfärbt (Navy/Blau statt HubSpot-Standard Schwarz/Orange).

## Struktur (v2)

Zeilenweises Pixel-Sampling der metergrid-Sidebar ergab: nur das obere Logo/Such-Band ist Navy — die eigentliche Nav-Liste darunter ist **weiß**, mit grauem Text für inaktive Einträge und einer blauen Pille nur für den aktiven Eintrag. v1 hatte fälschlich die gesamte Sidebar navy + Linktext blau gesetzt, was (wo die Navy-Regel nicht griff) zu blauer Schrift auf HubSpots dunkelgrauem Standardhintergrund führte — schlechter Kontrast. v2 bildet die reale Struktur ab:

| HubSpot-Element | Wird zu |
|---|---|
| Top-Bar (volle Breite, oben) | Navy `#002c96`, weiße Schrift/Icons |
| Icon-Rail links (CRM/Sales/…) | Weiß `#fcfdfe`, grauer Text (`#5d7182`) für inaktive Einträge |
| Aktiver Nav-Eintrag | Blaue Pille `#005edf`, weißer Text |
| Primär-Buttons | `#005edf`, Hover `#264ca6` |
| Links im Content-Bereich | `#005edf` (nur `main`/`[role="main"]`, nicht Top-Bar/Rail) |
| Seiten-Hintergrund | `#f7f9fc` |
| Karten | `#fcfdfe` mit Rand `#e2e8f0` |
| Erfolg-Badges | `#e0faf2` (Mint) auf Navy-Text |

Rote/Warn-Badges (überfällige Zahlungen, Fehler) bleiben unverändert — analog zum metergrid-Portal, wo Statusfarben von der Markenfarbe getrennt sind.

## Installation

1. [Stylus](https://add0n.com/stylus.html)-Browser-Extension installieren.
2. Stylus-Icon → **Manage** → **Import** → `metergrid-hubspot.user.css` auswählen.
3. Prüfen, ob eure HubSpot-Instanz auf einer anderen Subdomain läuft (z.B. `app-eu1.hubspot.com`) — die Regex im `@-moz-document`-Block ggf. ergänzen.

## Hinweis

HubSpot rendert Teile der Navigation mit dynamisch gehashten Klassennamen. Die Selektoren setzen primär auf ARIA-Rollen/Landmarks (stabiler als Klassennamen) plus bekannte HubSpot-Klassen als Fallback. Einzelne Selektoren (v.a. aktiver Sidebar-Status, Primär-Button) ggf. per DevTools nachjustieren, falls sie im Live-Portal nicht greifen.
