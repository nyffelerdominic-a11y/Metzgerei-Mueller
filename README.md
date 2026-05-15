# Müller Metzgerei AG — Website

Moderne Multi-Page Website für die Müller Metzgerei zum Rössli in Brüttisellen.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Resend

## Lokal entwickeln

```bash
npm install
cp .env.local.example .env.local   # Resend-Keys ergänzen
npm run dev                        # http://localhost:3000
```

## Seiten

- `/` — Startseite mit Hero, Tradition, Sortiment-Bento, Partyservice-Teaser, Standort
- `/metzgerei` — 40 Jahre Geschichte und Werte
- `/sortiment` — Bento-Grid der Produktkategorien
- `/partyservice` — Komplettes Menü mit Preisen + Anfrageformular
- `/team` — Team und Kultur
- `/kontakt` — Kontakt, Öffnungszeiten, Google Maps

## Features

- Live-Öffnungsstatus (jetzt geöffnet / schliesst bald / geschlossen)
- Kontaktformular mit Resend-E-Mail (`/api/contact`)
- JSON-LD `ButcherShop` für lokale SEO
- Sitemap + robots.txt automatisch
- OG-Image generiert (`/opengraph-image`)
- Subtile Animationen via Framer Motion, respektiert `prefers-reduced-motion`
- Mobile-first, A11y-konform (Skip-Link, Focus-Ringe, semantische HTML)

## Environment Variables

| Name | Erforderlich | Zweck |
|---|---|---|
| `RESEND_API_KEY` | Production | Mailversand für Kontaktformular |
| `RESEND_FROM` | optional | Absender (verifizierte Domain); default `no-reply@resend.dev` |
| `RESEND_TO` | optional | Empfänger; default `metzgmue@bluewin.ch` |

Ohne `RESEND_API_KEY` läuft das Formular im Dev-Modus (Logs only, keine Mails).

## Deployment auf Vercel

1. Repo auf GitHub pushen
2. Auf [vercel.com/new](https://vercel.com/new) das Repo importieren
3. Framework wird automatisch erkannt (Next.js)
4. Environment Variables setzen (siehe oben)
5. Deploy

Nach erfolgreichem Deploy: Domain `mueller-metzgerei-zum-roessli.ch` zu Vercel zeigen lassen (CNAME / A-Record).

## Design-System

Brand-Farben in `app/globals.css` als CSS-Variablen:
- `--color-brand-red` `#c8202b` (Logo)
- `--color-brand-navy` `#1e3a6f` (Logo-Wappen)
- `--color-cream` / `--color-cream-light` (warmer Hintergrund)
- `--color-ink` (Text)
- `--color-gold` (Editorial-Akzent)

Fonts: **Fraunces** (Display, Serif) + **Geist** (Body, Sans) + **Geist Mono** (Numerik).
