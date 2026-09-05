# Fliesen Andris – Website

Moderne, mobile-optimierte Visitenkarten-Website für den Fliesenfachbetrieb
**Fliesen Andris** (Schopfheim-Fahrnau), gegründet 1952, geführt in 4.
Generation von Jörg-Frieder Andris.

Die Seite ist bewusst als reines HTML/CSS/JS-Projekt umgesetzt – kein
Build-Prozess, kein Framework, keine Abhängigkeiten. Sie kann direkt auf
jedem Webspace, GitHub Pages, Netlify o. Ä. gehostet werden.

## Struktur

```
index.html          Startseite (One-Pager: Hero, Über uns, Leistungen,
                     Ablauf, Galerie, Referenzen, Kontakt)
impressum.html       Impressum
datenschutz.html     Datenschutzerklärung
assets/css/style.css Gesamtes Styling (mobile-first, responsive)
assets/js/main.js    Menü, Scroll-Effekte, Kontaktformular (mailto)
```

## Inhalte & Platzhalter

Die Texte, Leistungen und Kontaktdaten basieren auf öffentlich verfügbaren
Informationen zu Fliesen Andris (Adresse, Telefon, E-Mail, Öffnungszeiten,
Leistungsspektrum). Folgende Punkte sind bewusst als Platzhalter markiert
und sollten vor dem Live-Gang ersetzt werden:

- **Bilder**: Alle Foto-Flächen (Hero, Über uns, Galerie) sind gekennzeichnete
  Platzhalter. Einfach `<div class="... ph">…</div>` durch `<img>`-Tags mit
  echten Projektfotos ersetzen.
- **Kundenstimmen**: Die drei Testimonials im Bereich „Referenzen“ sind
  Platzhaltertexte – bitte durch echte Kundenzitate (z. B. von
  ProvenExpert/Google) ersetzen.
- **Impressum**: Die Umsatzsteuer-ID ist als Platzhalter markiert; bitte
  ergänzen bzw. mit einem Impressumsgenerator/Rechtsberater final prüfen.
- **Datenschutzerklärung**: Allgemeine Musererklärung – vor Veröffentlichung
  rechtlich prüfen und an tatsächlich eingesetzte Dienste anpassen.

## Lokale Vorschau

Da die Seite komplett statisch ist, reicht ein einfacher lokaler Server:

```bash
python3 -m http.server 8080
# dann im Browser: http://localhost:8080
```

## Deployment

Die Seite kann 1:1 hochgeladen werden auf:
- klassisches Webhosting (FTP/SFTP) – einfach alle Dateien in den Webspace
  legen
- GitHub Pages – Repository-Settings → Pages → Branch auswählen
- Netlify/Vercel – Ordner ohne Build-Command deployen
