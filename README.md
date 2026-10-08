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
RESEND_FROM_EMAIL=Chalet Jaïa <onboarding@resend.dev>
```

Lancer le serveur de développement :

```bash
npm run dev
```

Tant que le domaine du chalet n'est pas acheté et vérifié dans Resend, utilisez l'adresse de test `onboarding@resend.dev` pour `RESEND_FROM_EMAIL`. Resend limite alors les envois aux adresses autorisées sur le compte. Une fois le domaine acheté, ajoutez-le et vérifiez-le dans Resend, configurez ses DNS, puis définissez une adresse d'expédition sur ce domaine. `CONTACT_EMAIL` doit être une adresse existante du propriétaire.

## Déploiement (Netlify)

1. Pusher sur GitHub
2. Importer le projet sur [netlify.com](https://www.netlify.com/)
3. Ajouter les variables d'environnement dans la configuration du projet :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM_EMAIL`
4. Redéployer

## Mettre à jour le contenu

### Textes
Chaque page est dans `src/app/[page]/page.tsx`. Les données (tarifs, distances, FAQ…) sont définies en haut de chaque fichier sous forme de tableaux — facile à modifier sans toucher au HTML.

### Photos
Remplacer les images dans `public/images/chalet/`. Idéalement en **WebP**, compressées à moins de 200 KB par image.

### Domaine
Quand le domaine est finalisé, mettre à jour :
- `metadataBase` dans `src/app/layout.tsx`
- L'URL dans `src/app/robots.ts`
- Vérifier le domaine dans Resend, configurer ses enregistrements DNS et mettre à jour `RESEND_FROM_EMAIL` dans les variables d'environnement

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


## Demo

[Voir le site en live](https://chalet-jaia-preview.vercel.app/)

<img width="1903" height="933" alt="DemoChaletJaia" src="https://github.com/user-attachments/assets/a1694840-c8b8-4468-ace5-f636885a37c2" />
<img width="1900" height="950" alt="DemoChaletJaia2" src="https://github.com/user-attachments/assets/57958b77-d620-4e3c-bbb3-b4721812af72" />
