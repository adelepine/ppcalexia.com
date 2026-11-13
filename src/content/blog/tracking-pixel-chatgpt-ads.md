---
title: "Tracking ChatGPT Ads : pixel OpenAI, Conversions API et consentement"
description: "Pixel, événements standards, Conversions API, déduplication et consentement RGPD : comment mesurer correctement vos campagnes ChatGPT Ads sur un site e-commerce."
date: 2026-11-13T13:00:00
categorie: "ChatGPT Ads"
---

Sur un nouveau canal, la tentation est grande de « juste tester » sans prendre le temps de configurer la mesure. C'est la pire erreur possible : vous ne saurez jamais si le test a marché, et l'algorithme d'optimisation n'aura rien pour apprendre.

## Les deux outils de mesure

OpenAI propose deux briques, qui fonctionnent ensemble :

1. **Le pixel**, un script à installer sur votre site. Il suit les actions des visiteurs dans le navigateur.
2. **La Conversions API**, pour envoyer les événements depuis votre serveur. Elle compense les pertes liées aux bloqueurs, aux navigateurs restrictifs et aux refus de cookies.

C'est exactement la même logique que le pixel Meta et sa Conversions API. Si vous les avez déjà configurés, vous savez faire.

Le pixel se récupère dans l'onglet **Conversions** de l'Ads Manager. Vous ne pouvez pas en créer un vous-même : c'est OpenAI qui le fournit.

## Les événements à suivre pour un e-commerce

Les événements standards proposés couvrent tout le tunnel :

| Étape | Événement |
|---|---|
| Arrivée sur le site | page_viewed |
| Fiche produit | contents_viewed |
| Ajout au panier | items_added |
| Début de commande | checkout_started |
| Commande | order_created |
| Création de compte | registration_completed |
| Abonnement | subscription_created |

Pour une campagne optimisée sur les conversions, il faut **un seul événement standard actif** comme objectif. Pour un e-commerce, c'est **order_created**. Les événements personnalisés peuvent être suivis, mais pas servir d'objectif d'optimisation.

Envoyez aussi la **valeur de la commande** avec l'événement. Même si les enchères à la valeur ne sont pas encore disponibles, vous en aurez besoin pour calculer votre ROAS.

## Le réglage consentement : attention

C'est le point qui m'a le plus surprise dans la documentation : **par défaut, le pixel considère que l'utilisateur a donné son consentement**.

En France, ce n'est pas acceptable. Le pixel dépose des cookies (un premier qui dure 30 jours, un second 365 jours) qui servent à attribuer les conversions aux publicités. Il doit donc respecter le choix de l'utilisateur sur votre bandeau cookies.

La bonne configuration :

1. appeler la fonction de consentement avec la valeur « refusé » **avant** l'initialisation du pixel ;
2. passer le consentement à « accepté » **uniquement** quand l'utilisateur accepte les cookies publicitaires sur votre bandeau.

Concrètement, votre développeur ou votre CMP (outil de gestion du consentement) doit gérer ce passage, comme pour le Consent Mode de Google. Si vous avez déjà travaillé ce sujet pour [Google Ads, GA4 et le Consent Mode v2](/blog/tracking-google-ads-ga4-consent-mode), le principe est le même.

## La déduplication

Si vous utilisez le pixel **et** la Conversions API (ce que je recommande), une même commande peut être envoyée deux fois. Pour éviter de la compter en double, envoyez le **même identifiant d'événement** (event_id) depuis le navigateur et depuis le serveur.

L'identifiant de commande de votre boutique fait un très bon event_id.

Autre règle : n'appelez jamais la Conversions API depuis le code de vos pages. Elle doit être appelée depuis votre serveur, avec votre clé gardée secrète.

## Clics et vues : deux types de conversions

L'Ads Manager distingue :

- les **conversions après clic** : l'utilisateur a cliqué sur votre annonce, puis a acheté ;
- les **conversions après vue** (fenêtre de 1 jour) : l'utilisateur a vu l'annonce sans cliquer, puis a acheté.

Les deux sont rapportées séparément. Pour juger la rentabilité d'un test, je regarde d'abord les conversions après clic. Les conversions après vue sont un indicateur intéressant, mais elles surestiment souvent l'impact réel.

## Ne pas se fier qu'à l'Ads Manager

Le reporting de ChatGPT Ads est encore jeune : pas de connecteur CRM natif, attribution imparfaite. Je recommande trois sources croisées :

1. **L'Ads Manager** : conversions, CPC, taux de clic.
2. **GA4** : ajoutez des paramètres UTM à toutes vos URL (par exemple utm_source=chatgpt et utm_medium=cpc) pour suivre le trafic et les ventes indépendamment d'OpenAI.
3. **Vos ventes globales et vos recherches de marque** : un nouveau canal de découverte génère aussi des ventes indirectes, invisibles dans l'attribution au clic.

## Checklist avant de lancer

- [ ] Pixel installé sur toutes les pages
- [ ] Consentement par défaut sur « refusé », branché sur votre bandeau cookies
- [ ] Événements contents_viewed, items_added, checkout_started et order_created testés
- [ ] Valeur de commande transmise
- [ ] Conversions API en place avec déduplication par event_id
- [ ] UTM sur toutes les URL de destination
