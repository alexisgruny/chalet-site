# Chalet Jaïa — Site vitrine

Site vitrine pour la location du Chalet Jaïa à Gérardmer (Vosges). Construit avec Next.js 16, Tailwind CSS 4 et déployé sur Vercel.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Resend** — envoi des emails du formulaire de contact
- **Lucide React** — icônes

## Pages

| Route | Description |
|---|---|
| `/` | Accueil |
| `/chalet` | Présentation du chalet |
| `/galerie` | Galerie photos |
| `/tarifs` | Tarifs par saison |
| `/localisation` | Accès et carte |
| `/contact` | Formulaire de contact |

## Installation

```bash
npm install
```

Créer un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
CONTACT_EMAIL=email-du-proprietaire@example.com
```

Lancer le serveur de développement :

```bash
npm run dev
```

## Déploiement (Vercel)

1. Pusher sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Ajouter les variables d'environnement dans **Settings → Environment Variables** :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Redéployer

## Mettre à jour le contenu

### Textes
Chaque page est dans `src/app/[page]/page.tsx`. Les données (tarifs, distances, FAQ…) sont définies en haut de chaque fichier sous forme de tableaux — facile à modifier sans toucher au HTML.

### Photos
Remplacer les images dans `public/images/chalet/`. Idéalement en **WebP**, compressées à moins de 200 KB par image.

### Domaine
Quand le domaine est finalisé, mettre à jour :
- `metadataBase` dans `src/app/layout.tsx`
- `BASE_URL` dans `src/app/sitemap.ts`
- L'URL dans `src/app/robots.ts`
- Le champ `from` dans `src/app/api/contact/route.ts` (après vérification du domaine sur Resend)

## Structure

```
src/
├── app/                  # Pages et API routes
│   ├── api/contact/      # Endpoint formulaire de contact
│   ├── chalet/
│   ├── contact/
│   ├── galerie/
│   ├── localisation/
│   ├── tarifs/
│   ├── layout.tsx        # Layout global + métadonnées
│   ├── loading.tsx       # Page de chargement
│   ├── not-found.tsx     # Page 404
│   └── error.tsx         # Page d'erreur
├── components/
│   ├── layout/           # Navbar, Footer
│   └── section/          # Composants de sections
├── lib/
│   └── routes.ts         # Liens de navigation
└── styles/
    └── globals.css       # Classes utilitaires Tailwind
```
