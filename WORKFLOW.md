# Workflow de référence

Ce document est la source de vérité du processus Starter IA 5.6.

## Comprendre qui fait quoi

- **Orchestrateur** : le chef de projet qui comprend l’objectif, organise les étapes et distribue le travail.
- **Sous-agent ou spécialiste** : un consultant ciblé qui analyse un sujet précis sans modifier le projet.
- **Écrivain ou exécutant** : le seul rôle autorisé à modifier les fichiers ou agir sur les systèmes.
- **Reviewer** : le contrôleur indépendant qui recherche les erreurs et vérifie la qualité.
- **Humain** : l’autorité finale qui approuve les décisions sensibles ou irréversibles.

## Workflow interne d’une mission

Le workflow de référence organise toute intervention précise :

**Brief → analyses en lecture seule → plan → écrivain unique → vérification → revue indépendante → correction → livraison**

Le MVP local version 2 propose aussi une méthode complète en six phases — Cadrer, Valider, Concevoir, Construire, Vérifier, Lancer et améliorer. Cette méthode reste disponible dans le produit actuel, mais elle n’est pas le parcours obligatoire du futur générateur de starters Codex.

Le contrat du starter et le parcours produit cible vivent dans [`PROJECT.md`](PROJECT.md). Ce document ne les duplique pas.

## La séquence

La suite de ce document détaille le workflow interne d’une mission.

## 1. Brief

Le brief décrit le résultat attendu, les éléments fournis, les contraintes, les livrables, les critères de réussite et les actions qui exigent un accord humain.

Sortie attendue : une mission assez précise pour agir sans inventer. Utilisez [`templates/BRIEF.md`](templates/BRIEF.md).

## 2. Sous-agents en lecture seule

L’orchestrateur peut lancer jusqu’à trois sous-agents en parallèle. Chacun reçoit un angle borné, par exemple architecture, clarté, faits, risques ou accessibilité.

Ils lisent et rendent un avis. Ils ne modifient ni fichiers, ni Git, ni GitHub, ni service externe. Cette séparation réduit les conflits et préserve une responsabilité claire.

Sortie attendue : des constats courts, priorisés et exploitables.

## 3. Plan

L’orchestrateur synthétise les avis, tranche les contradictions et définit les étapes, les contrôles et le périmètre des modifications.

Sortie attendue : un plan compréhensible, avec un seul écrivain désigné.

## 4. Agent écrivain

Un seul agent est autorisé à modifier les fichiers ou GitHub. Il applique le plan, préserve les changements hors périmètre et documente toute hypothèse qui influence le résultat.

Sortie attendue : les livrables réellement enregistrés sur la branche ou dans l’espace prévu.

## 5. Vérification

Vérifier signifie confirmer le résultat sur sa cible réelle, pas seulement relire une réponse :

- le fichier existe et s’ouvre ;
- le contenu enregistré correspond au brief ;
- les commandes ou tests pertinents réussissent ;
- les liens, branches, PR, issues ou publications annoncés existent réellement ;
- les limitations et échecs sont signalés.

Sortie attendue : des preuves suffisantes pour chaque réussite annoncée.

## 6. Revue indépendante

Un reviewer qui n’écrit pas recherche les erreurs, contradictions, risques, répétitions et complications inutiles. Il classe chaque point selon [`QUALITY.md`](QUALITY.md) : bloquant, important ou amélioration.

Sortie attendue : une liste priorisée, sans modification.

## 7. Correction

Un cycle complet est : **revue → correction par l’écrivain → nouvelle vérification**.

Deux cycles maximum sont autorisés. Après le second :

- s’il ne reste aucun problème bloquant ou important, la livraison peut continuer ;
- s’il en reste un, ne pas fusionner, ne pas déclarer la mission réussie et signaler le blocage ;
- une amélioration peut être reportée si elle ne compromet pas le résultat.

## 8. Livraison

La livraison contient les liens ou fichiers, les contrôles réellement effectués, les sous-agents réellement utilisés et les blocages restants. Elle emploie l’un de ces statuts : **fait et vérifié**, **partiel**, **bloqué** ou **non tenté**.

## Règles non négociables

### Un seul écrivain

Tous les changements passent par le même agent. Les sous-agents conseillent ou contrôlent en lecture seule.

### Trois sous-agents maximum

Ce plafond couvre les sous-agents ouverts en parallèle pour la mission. Ils doivent recevoir un objectif précis.

### Deux corrections maximum

Ce plafond évite une boucle sans fin. Il n’autorise pas à livrer avec un défaut bloquant ou important : dans ce cas, la mission s’arrête avec le statut **bloqué**.

### Approbation humaine

Une approbation explicite est requise avant une suppression, un paiement, un secret, une publication externe, un envoi, une fusion dans `main`, une production ou une action irréversible. Une autorisation claire déjà contenue dans le brief courant suffit pour les actions réversibles et le périmètre nommés, par exemple une branche, des commits, une PR et sa Preview automatique. Toute extension exige un nouvel accord.

### Aucune réussite non vérifiée

Ne jamais utiliser « créé », « publié », « envoyé », « fusionné », « testé » ou « réussi » sans avoir contrôlé le système ou le fichier concerné. En cas d’impossibilité de contrôle, utiliser **partiel**, **bloqué** ou **non tenté**.

## Exemple GitHub

1. Le brief autorise la création du dépôt, la branche et la PR ; la fusion reste soumise à l’accord demandé.
2. Deux sous-agents inspectent en lecture seule la structure et les risques.
3. L’écrivain crée les fichiers sur une branche dédiée.
4. Il relit les fichiers depuis GitHub et contrôle le diff.
5. Un reviewer indépendant classe les défauts.
6. L’écrivain corrige et vérifie, au plus deux fois.
7. La PR n’est fusionnée que sans bloquant ni important.
8. Le rapport final fournit les URL réellement contrôlées.
