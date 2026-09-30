---
title: "Produits refusés dans Merchant Center : les causes et comment les corriger"
description: "Un produit refusé est un produit invisible sur Google Shopping. Voici les motifs de refus les plus fréquents et comment les régler."
date: 2026-03-18
categorie: "Merchant Center"
---

Chaque produit refusé dans Merchant Center est un produit qui n'apparaît nulle part : ni sur Shopping, ni dans Performance Max, ni dans les fiches gratuites. Sur certains comptes que j'audite, c'est une part non négligeable du catalogue qui est bloquée sans que personne ne l'ait remarqué.

## Où trouver les produits refusés

Dans Merchant Center, ouvrez la section **Produits**, puis filtrez sur les produits **non approuvés** ou **à corriger**. Google indique pour chaque produit le motif du refus et, souvent, l'attribut en cause. Commencez par les motifs qui touchent le plus de produits : une seule correction peut en débloquer des centaines.

## Les causes les plus fréquentes

### Prix ou disponibilité différents entre le flux et le site

C'est le motif numéro un. Google compare régulièrement votre flux avec vos pages produits. Si le prix ou le stock ne correspond pas, le produit est bloqué.

Les coupables habituels : un flux mis à jour une fois par jour alors que les prix changent plus souvent, une promotion affichée sur le site mais pas dans le flux, ou un prix affiché HT sur le site. En France, le prix du flux doit être TTC, comme sur la page.

**La solution :** augmenter la fréquence de mise à jour du flux, et vérifier que les balises de données structurées de vos pages produits affichent le bon prix et la bonne disponibilité.

### Images refusées

Google refuse les images avec du texte promotionnel, un logo ajouté, un filigrane, une bordure, ou une image générique de type « image non disponible ». Pour les vêtements, les images trop petites posent aussi problème.

**La solution :** une image principale sur fond neutre, sans texte ajouté. Les visuels d'ambiance vont dans l'attribut `additional_image_link`.

### Identifiants manquants ou invalides

Un GTIN (code-barres EAN) faux ou absent pour un produit de marque qui en possède un entraîne des limitations, voire un refus.

**La solution :** renseigner le vrai GTIN fourni par le fabricant. Pour vos propres créations sans code-barres, indiquez `identifier_exists` à `no`, ce qui est parfaitement accepté.

### Page de destination inaccessible

Un lien cassé, une page qui redirige vers l'accueil, une page protégée par mot de passe ou un site trop lent au moment du passage du robot de Google.

**La solution :** vérifier les URL du flux et s'assurer que le robot de Google peut accéder à vos pages (pas de blocage dans le fichier robots.txt ou par un pare-feu).

### Frais de livraison manquants

Sur plusieurs pays, dont la France, les frais de livraison sont obligatoires.

**La solution :** les configurer une fois pour toutes dans les paramètres de livraison de Merchant Center plutôt que produit par produit.

### Politiques Google

Certains produits sont restreints ou interdits : produits de santé, alcool, armes, contrefaçons, allégations trompeuses. Parfois, un simple mot dans le titre ou la description suffit à déclencher un refus automatique.

**La solution :** si vous pensez que le refus est une erreur, corrigez le texte en cause ou demandez un nouvel examen depuis Merchant Center.

## Les avertissements comptent aussi

Un produit avec un simple avertissement reste diffusé, mais souvent moins bien. Les attributs recommandés (couleur, taille, matière, catégorie) aident Google à afficher vos produits sur les bonnes recherches. Voir [comment optimiser son flux produit](/blog/optimiser-flux-produits-merchant-center).

## La routine à mettre en place

Un coup d'œil hebdomadaire aux diagnostics de Merchant Center suffit à éviter les mauvaises surprises. Les refus arrivent souvent après une mise à jour du site, un changement de prix massif ou l'ajout d'une nouvelle collection.
