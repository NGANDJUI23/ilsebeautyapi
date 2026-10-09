# ILSEBEAUTY — API (Node.js / Express)

API du site ILSEBEAUTY : menu, horaires, créneaux disponibles et demandes de réservation.
Le site Next.js qui l'utilise est dans un repo séparé.

## Lancer en local

```bash
cp .env.example .env
npm install
npm run dev
```

L'API écoute sur http://localhost:4000.

## Routes

| Méthode | Route | Rôle |
|---|---|---|
| GET | `/api/health` | Vérifie que l'API répond |
| GET | `/api/catalog` | Services, horaires, devise, lien Fresha |
| GET | `/api/services`, `/api/services/:id` | Le menu |
| GET | `/api/hours` | Horaires (dimanche → samedi) |
| GET | `/api/availability?date=YYYY-MM-DD&mins=135` | Créneaux de départ possibles |
| POST | `/api/bookings` | Enregistre une demande de réservation (validée côté serveur) |
| GET | `/api/bookings` | Liste des demandes, avec `Authorization: Bearer <ADMIN_TOKEN>` |

La réservation reste confirmée par Fresha. Les demandes sont stockées :
- en local, dans `data/bookings.json` (jamais envoyé sur GitHub) ;
- sur Netlify, dans Netlify Blobs, car le disque des fonctions n'est pas conservé.

## Déployer sur Netlify

Add new project → Import from GitHub → ce repo. Base directory : vide (la racine). Le reste est lu dans `netlify.toml`.
L'API Express tourne dans une Netlify Function (`netlify/functions/api.js`).

Variables d'environnement : `FRESHA_URL` (ton lien de réservation), `ADMIN_TOKEN` (pour lister les demandes), `CURRENCY` (facultatif, `€` par défaut).

Vérifie ensuite `https://<site-backend>.netlify.app/api/health`, qui doit répondre `{"ok":true}`.

## Où modifier quoi

- Menu, prix, horaires : `src/data/catalog.js`
- Lien Fresha, devise, port : `.env` en local, variables d'environnement sur Netlify
