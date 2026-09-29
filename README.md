# Site ppcalexia.com

Site vitrine + blog de PPC_Alexia, construit avec [Astro](https://astro.build).

## Écrire un nouvel article

1. Va dans le dossier `src/content/blog/`.
2. Crée un fichier `mon-titre-d-article.md` (le nom du fichier devient l'adresse : `ppcalexia.com/blog/mon-titre-d-article`). Pas d'accents ni d'espaces dans le nom du fichier.
3. Commence le fichier par ce bloc, puis écris l'article en dessous :

```
---
title: "Le titre de l'article"
description: "Une ou deux phrases qui résument l'article (utilisées par Google)."
date: 2026-10-15
categorie: "Google Ads"
---

Ton texte ici.

## Un intertitre

Un paragraphe avec du **gras** et un [lien](https://exemple.com).

- une liste
- à puces
```

Pour préparer un article sans le publier, ajoute `brouillon: true` dans le bloc du haut.

Une fois le fichier ajouté sur GitHub, Vercel met le site à jour tout seul en 1 à 2 minutes.

## Structure du projet

- `src/content/blog/` : les articles
- `src/pages/` : les pages (accueil, liste du blog, page article)
- `src/fragments/` : le contenu HTML de l'accueil, de l'en-tête et du pied de page
- `public/` : images, polices et styles

## Commandes (pour un développeur)

```
npm install
npm run dev      # aperçu local sur http://localhost:4321
npm run build    # génère le site dans dist/
```
