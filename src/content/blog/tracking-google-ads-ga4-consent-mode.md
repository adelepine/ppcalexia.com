---
title: "Tracking e-commerce : Google Ads, GA4 et Consent Mode v2"
description: "Des conversions mal mesurées faussent toutes vos décisions. Voici comment vérifier que votre tracking Google Ads et GA4 est fiable et conforme."
date: 2025-12-10
categorie: "Tracking"
---

Les campagnes Google Ads modernes (Performance Max, enchères au ROAS cible) apprennent à partir de vos conversions. Si les conversions sont fausses, l'algorithme apprend de fausses informations. C'est pour ça que le tracking est toujours le premier point que je vérifie dans un [audit](/blog/audit-google-ads-ecommerce).

## Les trois briques

**1. La balise de conversion Google Ads.** Elle remonte chaque achat avec sa valeur dans Google Ads. C'est elle que les enchères utilisent.

**2. GA4.** Il mesure le comportement sur le site et l'ensemble de vos sources de trafic. Il est utile pour l'analyse, mais ses chiffres ne correspondront jamais exactement à ceux de Google Ads : les deux outils n'attribuent pas les ventes de la même façon.

**3. Google Tag Manager.** Il sert à installer et piloter toutes ces balises à un seul endroit, sans toucher au code du site à chaque modification.

## Les erreurs les plus fréquentes

### Des achats comptés deux fois

Une balise Google Ads et un achat importé depuis GA4, tous deux configurés comme conversion principale : chaque vente compte double. Le ROAS affiché est gonflé, et les enchères montent sans raison.

**À vérifier :** dans Google Ads, **Objectifs → Conversions**, une seule action d'achat doit être en « Principale ». Les autres peuvent rester en « Secondaire » pour l'observation.

### Une valeur de conversion fausse

Valeur fixe au lieu du montant réel du panier, montant TTC au lieu de HT, frais de livraison inclus ou non : ces écarts faussent le ROAS et le calcul de rentabilité. Voir [comment calculer son ROAS cible](/blog/calculer-roas-cible-rentabilite).

**À vérifier :** comparez le chiffre d'affaires remonté dans Google Ads sur une semaine avec les commandes réelles de votre back-office.

### Des achats qui se déclenchent au rechargement de la page

Si la balise se déclenche à chaque affichage de la page de confirmation, un client qui la recharge compte deux fois. Transmettre l'identifiant de commande (`transaction_id`) permet à Google de dédupliquer.

## Les conversions améliorées

Avec les restrictions de cookies des navigateurs, une partie des conversions n'est plus attribuée. Les conversions améliorées transmettent à Google une version chiffrée (hachée) de l'email du client au moment de l'achat, ce qui permet de rattacher des ventes qui seraient sinon perdues. Elles s'activent dans les paramètres de conversion de Google Ads et se configurent facilement via Tag Manager.

## Le Consent Mode v2

Depuis mars 2024, Google exige le Consent Mode v2 pour les annonceurs qui ciblent l'Espace économique européen. Sans lui, vous perdez une partie de vos données de conversion et vous ne pouvez plus alimenter correctement vos audiences de remarketing.

Concrètement, votre bannière cookies (CMP) doit transmettre à Google le choix de l'internaute. Quand le consentement est refusé, Google n'utilise pas de cookies mais peut modéliser une partie des conversions manquantes.

**À vérifier :**
- votre bannière cookies est compatible Consent Mode v2 (Axeptio, Didomi, Cookiebot et la plupart des solutions courantes le sont) ;
- les signaux de consentement remontent bien, ce que Google Ads affiche dans le diagnostic de vos conversions.

## La routine de contrôle

Une fois tout en place, un contrôle mensuel suffit : comparer les ventes Google Ads avec le back-office, vérifier le diagnostic des conversions dans Google Ads, et tester un achat après chaque mise à jour importante du site. Un tracking qui casse sans que personne ne s'en rende compte, c'est plusieurs semaines d'optimisation perdues.
