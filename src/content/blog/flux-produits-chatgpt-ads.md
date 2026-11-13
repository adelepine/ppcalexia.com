---
title: "Flux produits ChatGPT Ads : préparer son catalogue pour le carrousel shopping"
description: "Format CSV, SFTP, champs, mise à jour des prix : comment préparer votre flux produits pour le carrousel shopping de ChatGPT Ads, et pourquoi ce n'est pas un simple export Merchant Center."
date: 2026-11-13T14:00:00
categorie: "ChatGPT Ads"
---

Le carrousel shopping est le format le plus prometteur de ChatGPT Ads pour un e-commerce. Il affiche vos produits avec leur prix et leur disponibilité, directement sous la réponse. Mais pour qu'il fonctionne, il faut un flux produits au format d'OpenAI. Et non, on ne branche pas son Merchant Center en deux clics.

## Comment fonctionne le flux

Le fonctionnement documenté par OpenAI :

- le flux est un **fichier CSV encodé en UTF-8** ;
- il est déposé **par SFTP**, à la racine du serveur (pas de sous-dossiers) ;
- il suit le **schéma produit d'OpenAI**, le même que celui utilisé pour le commerce dans ChatGPT ;
- les **prix et la disponibilité** peuvent être mis à jour en continu via une API dédiée, sans renvoyer tout le fichier.

L'accès aux campagnes basées sur un flux peut aussi nécessiter une validation par l'équipe d'OpenAI. Anticipez ce délai.

## Les champs principaux

Parmi les colonnes du schéma, on retrouve celles que vous connaissez déjà :

| Champ | Équivalent Merchant Center |
|---|---|
| item_id | id |
| title | title |
| description | description |
| url | link |
| brand | brand |
| image_url | image_link |
| price | price |
| availability | availability |
| is_ads_eligible | (pas d'équivalent direct) |

Le champ **is_ads_eligible** est intéressant : il vous permet de choisir quels produits peuvent apparaître en publicité. C'est votre premier levier de rentabilité.

Le schéma complet évolue : vérifiez toujours la documentation d'OpenAI avant de construire votre export.

## Pourquoi ne pas copier votre flux Google

Techniquement, la plupart de vos données Merchant Center peuvent être réutilisées. C'est même la base logique. Mais trois différences méritent du travail :

**1. Le contexte de lecture.** Sur Google Shopping, l'utilisateur compare des vignettes. Sur ChatGPT, vos produits apparaissent sous une réponse rédigée, qui parle souvent de besoins et d'usages. Un titre bourré d'attributs (« Robe Femme Lin Bleu Taille 38 Été Midi ») est fait pour l'algorithme de Google. Pour ChatGPT, un titre clair et naturel se lit mieux.

**2. La description compte davantage.** Elle sert à évaluer la pertinence de votre produit par rapport à la conversation, et elle peut s'afficher dans l'annonce. Une description qui explique pour qui est le produit et quel problème il résout a plus de chances d'être associée aux bonnes conversations.

**3. L'éligibilité.** Votre flux Google contient peut-être des produits qui ne sont pas autorisés sur ChatGPT (santé, compléments). Excluez-les avec is_ads_eligible plutôt que de risquer des refus.

## Les 5 règles que j'applique

**1. Commencez par un sous-ensemble.** Pas tout le catalogue. Vos 50 à 200 meilleures ventes, avec une marge confortable et du stock. Vous élargirez une fois le format validé.

**2. Retravaillez les titres des produits testés.** Produit + bénéfice ou usage + attribut clé. Les principes de [mes 5 règles pour les titres Google Shopping](/blog/titres-produits-google-shopping) restent valables, avec un ton plus naturel.

**3. Soignez la première phrase de la description.** C'est celle qui sera lue, par l'utilisateur et par le système de pertinence.

**4. Synchronisez prix et stock.** Un produit affiché en stock à 49 € qui est en rupture ou à 59 € sur votre site, c'est un clic perdu et un mauvais signal de qualité. Utilisez la mise à jour par API si vos prix bougent souvent (soldes, promotions).

**5. Images propres.** Fond neutre, produit centré, pas de texte incrusté. Exactement comme sur Google.

## Les contraintes à connaître

- Les campagnes basées sur un flux ne se ciblent **qu'au niveau pays**.
- Le **flux et l'objectif** d'une campagne ne peuvent plus être changés après création. Si vous voulez tester un autre objectif, il faudra une nouvelle campagne.
- Chaque groupe d'annonces utilise **un seul modèle d'annonce**, qui reprend automatiquement titre, description, prix et marque.

Ce dernier point veut dire une chose : vos groupes d'annonces doivent être construits par **ensemble de produits cohérent**. Un groupe « robes d'été », un groupe « accessoires », plutôt qu'un seul groupe pour tout le catalogue.

## Qui fait le travail ?

Selon votre stack :

- **Shopify, WooCommerce, PrestaShop** : un outil de gestion de flux (de type feed manager) peut généralement générer un CSV au bon format et le déposer en SFTP automatiquement.
- **Catalogue maison** : un export programmé par votre développeur, à partir du flux Google existant.

Dans les deux cas, le travail de fond (titres, descriptions, exclusions) reste le même que pour Google. Si votre flux Merchant Center est déjà optimisé, vous avez fait 80 % du chemin. S'il ne l'est pas, c'est le moment : vous gagnerez sur les deux canaux. Pour les produits refusés côté Google, voyez [les causes de refus Merchant Center](/blog/merchant-center-produits-refuses).
