# Mood Academy TCG — Sito statico (GitHub Pages)

Questo pacchetto è pronto per essere caricato su **GitHub Pages** e collegato al dominio **moodacademy.org**.

## Come pubblicare

1. Crea un repository su GitHub:
   - Opzione A (sito utente): `YOUR-USERNAME.github.io`
   - Opzione B (sito progetto): ad es. `mood-academy-site` (URL: `https://YOUR-USERNAME.github.io/mood-academy-site/`)

2. Carica questi file nella **root** del repository (incluso `CNAME`).

3. Vai su **Settings → Pages** e imposta:
   - Source: `Deploy from a branch`
   - Branch: `main` (root)
   - Custom domain: `moodacademy.org`
   - Spunta **Enforce HTTPS** quando disponibile.

## DNS su Namecheap (Advanced DNS)

- Aggiungi **4 A record** per il dominio root (`@`) verso GitHub:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Aggiungi un **CNAME** per `www` → `YOUR-USERNAME.github.io`
- Rimuovi record in conflitto (parking, AAAA, ecc.).

## Modifica contenuti
- **Home**: `index.html`
- **Immagini**: cartella `assets/` (ora contiene placeholder)
- **Errore 404**: `404.html`
- **No Jekyll**: `.nojekyll` evita il build Jekyll.
- **SEO**: `sitemap.xml`, `robots.txt`.

Buon divertimento! 🎴
