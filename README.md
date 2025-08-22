# Zhaox — Site Streamer (React + Tailwind + Vite)

Ce projet est prêt pour **déploiement automatique sur GitHub Pages** via **GitHub Actions**.

## Utilisation rapide

1. **Télécharge et extrais** le ZIP.
2. **Crée un dépôt GitHub** (nom conseillé : `zhaox-site`).
3. Dans le dossier, exécute :

```bash
npm install
npm run dev
```

4. Si tout est ok en local, initialise git et pousse :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<ton-utilisateur>/<ton-repo>.git
git push -u origin main
```

5. Sur GitHub, va dans **Settings → Pages** et mets **Source: GitHub Actions** (si ce n'est pas déjà actif).
6. Attends la fin du workflow **Deploy to GitHub Pages** (onglet **Actions**). Ton site sera en ligne à :
`https://<ton-utilisateur>.github.io/<ton-repo>/`

> Astuce : Pas besoin de modifier `vite.config.js` ; l'action passe automatiquement `--base=/<repo>/` lors du build.

## Modifier les liens
Dans `src/ZhaoxSite.jsx`, remplace les `href="#"` par tes vrais liens (Twitch, Discord, YouTube...).

## Personnalisation
- **Couleurs** : modifie les classes Tailwind directement dans `src/ZhaoxSite.jsx`.
- **Planning** : modifie le tableau dans la section *Schedule*.
- **Clips** : remplace les images placeholder par des thumbnails réels.

## Développement
```bash
npm run dev      # lance le serveur local (Vite)
npm run build    # build de production (sortie dans dist/)
npm run preview  # prévisualiser le build localement
```

---

Fait pour être simple, rapide, et adapté à l'univers du streaming.
