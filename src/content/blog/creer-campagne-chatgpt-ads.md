---
title: "Créer sa première campagne ChatGPT Ads : le pas-à-pas"
description: "Compte, structure campagne / groupe d'annonces / annonce, context hints, enchères, validation : comment lancer votre première campagne dans l'Ads Manager de ChatGPT."
date: 2026-11-13T17:00:00
categorie: "ChatGPT Ads"
---

L'Ads Manager de ChatGPT est volontairement simple. Si vous avez déjà monté une campagne Google Ads ou Meta Ads, vous serez en terrain connu. Mais quelques choix faits à la création sont définitifs, et la logique de ciblage n'a rien à voir avec les mots-clés.

## Étape 1 : créer le compte annonceur

Rendez-vous sur **ads.openai.com**. L'inscription prend une dizaine de minutes :

- informations sur l'entreprise et vérification ;
- moyen de paiement et profil de facturation ;
- logo de la marque (le favicon affiché dans vos annonces, au moins 256 × 256 px) ;
- invitation des utilisateurs : administrateur, membre ou lecture seule.

**Le piège à éviter** : la devise et le fuseau horaire du compte sont fixés à la création et **ne peuvent plus être modifiés**. Choisissez l'euro et le fuseau de Paris si votre activité est française, sinon vos rapports ne colleront jamais avec votre back-office.

Autre point : l'entité qui paie doit être établie dans un pays où l'Ads Manager est disponible. Un nouveau compte peut aussi être limité à son pays d'origine tant que la vérification d'identité et un premier seuil de dépense ne sont pas atteints.

## Étape 2 : installer le pixel avant de lancer

Ne lancez rien sans tracking. Le pixel se récupère dans l'onglet **Conversions** de l'Ads Manager. Installez-le, configurez le consentement et vérifiez que vos commandes remontent.

Une campagne optimisée pour les conversions a besoin d'**un seul événement standard actif** comme objectif (par exemple « order_created »). Les événements personnalisés ne peuvent pas servir d'objectif d'optimisation.

Le détail technique est dans [mon guide tracking ChatGPT Ads](/blog/tracking-pixel-chatgpt-ads).

## Étape 3 : comprendre la structure

La structure tient en trois niveaux, comme ailleurs :

| Niveau | Ce que vous y réglez |
|---|---|
| **Campagne** | Objectif, budget, dates, pays |
| **Groupe d'annonces** | Context hints, enchère |
| **Annonce** | Titre, description, image, page de destination |

Vous pouvez tout créer dans l'interface guidée, ou importer un modèle en masse si vous avez beaucoup de groupes à monter.

## Étape 4 : paramétrer la campagne

**L'objectif.** Trois choix : impressions, clics ou conversions. Pour un e-commerce avec un pixel qui fonctionne, je recommande les conversions. Si vous n'avez pas encore de données, commencer par les clics est une option raisonnable pour alimenter le pixel.

**Le budget.** Quotidien ou sur la durée de la campagne. Attention : le budget sur la durée n'est disponible qu'avec une enchère fixe. Et comme sur Google Ads, le budget quotidien est une moyenne : certains jours peuvent dépasser le montant fixé.

**La géographie.** Pays, puis régions, villes ou codes postaux quand c'est disponible. Pour un e-commerce qui livre toute la France, restez au niveau pays.

## Étape 5 : créer vos groupes d'annonces

C'est ici que tout se joue. Sans mots-clés, vous guidez la diffusion avec des **context hints** : des thèmes ou des situations dans lesquels votre produit est une bonne réponse.

Ma règle : **un groupe d'annonces = une intention**. Pour une marque de cosmétiques, par exemple :

- un groupe « routine peau sèche en hiver » ;
- un groupe « cadeau beauté naturelle » ;
- un groupe « alternative aux cosmétiques conventionnels ».

Chaque groupe aura des annonces et une page de destination adaptées à cette intention. C'est la même logique que la [structure de compte Meta Ads](/blog/structure-compte-meta-ads-ecommerce) : on organise par besoin client, pas par catalogue.

**L'enchère.** Enchère fixe (vous définissez un plafond) ou « Maximiser les résultats » (l'algorithme ajuste, il faut alors un budget quotidien). L'Ads Manager indique si votre enchère est compétitive. Au démarrage, je préfère une enchère fixe pour garder la main sur le coût par clic.

## Étape 6 : rédiger les annonces

Les limites techniques documentées par OpenAI :

- **titre** : 3 à 50 caractères ;
- **description** : 100 caractères maximum ;
- **image** : JPEG, PNG ou WebP, au moins 640 × 640 px ;
- **URL** : 2 048 caractères maximum.

Faites court, même si la limite le permet. L'annonce apparaît sous une réponse détaillée : elle doit se comprendre en une seconde. Je donne ma méthode dans [rédiger une annonce ChatGPT qui convertit](/blog/rediger-annonce-chatgpt-ads).

**La page de destination** : jamais la page d'accueil. Une page produit ou une page catégorie qui correspond exactement à l'intention du groupe. Ajoutez des paramètres UTM pour suivre le trafic dans GA4.

Et vérifiez que votre site ne bloque pas les robots d'OpenAI (**OAI-SearchBot** et **OAI-AdsBot**) dans votre robots.txt ou votre pare-feu : ils servent notamment à évaluer la pertinence de vos pages.

## Étape 7 : la validation

Une fois soumise, la campagne passe en relecture. Si une annonce n'est pas diffusée, la raison s'affiche au survol de son statut. Dans la plupart des cas, vous pouvez la corriger et la soumettre à nouveau.

## Le réglage à vérifier : les améliorations créatives

Depuis fin octobre 2026, les améliorations créatives sont activées par défaut sur les campagnes en libre-service. OpenAI peut alors réécrire vos titres et descriptions, les traduire, recadrer vos images et ajuster l'URL.

Si votre marque a un ton précis ou des mentions obligatoires, désactivez-les et testez-les plus tard dans un groupe séparé.

## Par où commencer

1. Compte créé en euros, fuseau de Paris.
2. Pixel installé et testé, consentement géré.
3. Une campagne, deux ou trois groupes d'annonces, une intention par groupe.
4. Enchère fixe, budget de test défini à l'avance.
5. Améliorations créatives vérifiées.
