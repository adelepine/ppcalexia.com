---
title: "Audit Google Ads e-commerce : la checklist en 15 points"
description: "Les 15 points que je vérifie en premier quand j'audite un compte Google Ads e-commerce, du tracking à la structure des campagnes."
date: 2026-09-30
categorie: "Audit"
---

Un audit Google Ads n'a pas besoin de durer trois semaines pour être utile. Sur un compte e-commerce, les problèmes qui coûtent le plus cher se trouvent presque toujours aux mêmes endroits. Voici l'ordre dans lequel je les vérifie.

## Mesure : est-ce que les chiffres sont justes ?

Tout le reste dépend de cette partie. Si les conversions sont fausses, l'algorithme optimise sur de mauvaises données, et vous prenez des décisions sur des chiffres qui ne reflètent pas la réalité.

1. **Une seule conversion principale pour l'achat.** Si l'achat est compté deux fois (balise Google Ads et import GA4, par exemple), le ROAS affiché est gonflé et les enchères montent pour rien.
2. **La valeur de conversion correspond au chiffre d'affaires réel.** Comparez sur un mois le CA attribué à Google Ads avec celui de votre back-office. Un écart important signale un problème de balise ou de TVA.
3. **Les conversions améliorées sont actives.** Elles récupèrent une partie des conversions perdues avec les restrictions de cookies.
4. **Le Consent Mode v2 est en place.** Sans lui, en Europe, une partie de vos données et de vos audiences disparaît. J'en parle en détail dans [cet article sur le tracking](/blog/tracking-google-ads-ga4-consent-mode).

## Flux et Merchant Center

5. **Le taux de produits refusés.** Chaque produit refusé est un produit invisible sur Shopping. Voir [comment corriger les produits refusés](/blog/merchant-center-produits-refuses).
6. **La qualité des titres.** C'est l'attribut qui pèse le plus sur vos impressions. Voir [les 5 règles pour les titres produits](/blog/titres-produits-google-shopping).
7. **La présence des GTIN, marques et catégories.** Sans identifiants, Google a du mal à rapprocher vos produits des recherches.

## Structure des campagnes

8. **Le découpage des campagnes suit votre business.** Une seule campagne Performance Max pour tout le catalogue mélange des produits à marges très différentes. Voir [comment structurer Performance Max](/blog/structurer-performance-max-ecommerce).
9. **Les campagnes ne se cannibalisent pas.** Shopping standard et Performance Max sur les mêmes produits, sans logique claire, se font concurrence.
10. **La marque est isolée.** Les recherches sur votre nom de marque convertissent très bien et gonflent le ROAS global. Mélangées au reste, elles masquent la performance réelle de l'acquisition.

## Enchères et budgets

11. **Les objectifs de ROAS sont calculés à partir de la marge.** Un ROAS cible choisi « au feeling » est la cause la plus fréquente de campagnes rentables sur le papier et déficitaires en réalité. Voir [comment calculer son ROAS cible](/blog/calculer-roas-cible-rentabilite).
12. **Les campagnes rentables ne sont pas limitées par le budget.** Si une campagne atteint son objectif mais plafonne chaque jour, c'est de la croissance laissée sur la table.

## Requêtes et exclusions

13. **Le rapport des termes de recherche est consulté régulièrement.** Il montre les requêtes qui dépensent sans convertir.
14. **Les mots-clés négatifs sont à jour**, y compris sur Performance Max, qui accepte désormais les exclusions au niveau de la campagne.

## Pages de destination

15. **Les pages produits sont rapides et cohérentes avec l'annonce.** Un prix différent entre le flux et la page, une rupture de stock ou une page lente sur mobile font chuter le taux de conversion, quelle que soit la qualité des campagnes.

## Par où commencer

Si vous ne deviez vérifier que trois points, ce seraient le 1, le 2 et le 11. Des conversions justes et un objectif de ROAS basé sur la marge règlent à eux seuls une bonne partie des problèmes de rentabilité que je rencontre.
