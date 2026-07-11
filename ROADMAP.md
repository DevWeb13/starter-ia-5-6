# Feuille de route

Cette feuille de route en cinq phases est la séquence officielle du projet. Une phase n’est terminée que lorsque ses critères sont vérifiés et consignés dans [`STATUS.md`](STATUS.md).

## Phase 1 — Fondation publiable

**Branche :** `work/01-foundation`  
**Statut :** terminée — fusionnée dans `main` par la PR nº 2 (`6819f79`)

Objectif : transformer le dépôt documentaire en une application SaaS de démonstration moderne, accessible, testée et déployable.

Livrables :

- application Next.js App Router ;
- landing, fonctionnalités, tarifs, démo locale, dashboard, docs et 404 ;
- thème clair/sombre et navigation mobile ;
- Vitest, Playwright Chromium dans la CI GitHub Actions et déploiement Vercel de production pré-fusion ;
- mémoire officielle et dossier marketing.

Critère de sortie : tous les scripts et la CI complète réussissent, le build et les routes du déploiement de production pré-fusion sont contrôlés, aucun bloquant ou important n’est masqué. Avant la phase 2, Vercel doit être relié à GitHub pour générer une vraie preview de pull request.

## Phase 2 — Cœur produit

**Branche prévue :** `work/02-product-core`  
**Statut :** en revue

Objectif : remplacer le scénario unique par un parcours produit robuste et testable, toujours sans dépendre prématurément d’un fournisseur IA.

Livrables : modèle de projet typé et versionné, six sections éditables, dashboard local, export Markdown/JSON, persistance locale provisoire et résilience sans infrastructure supplémentaire.

Critère de sortie : un utilisateur peut créer, reprendre, modifier, exporter et supprimer un projet local sans incohérence ni perte silencieuse, et la preview/CI de la PR sont vertes.

## Phase 3 — Intelligence assistée

**Branche prévue :** `work/03-ai-integration`  
**Statut :** planifiée

Objectif : connecter une véritable génération IA avec sorties structurées, garde-fous, transparence des erreurs et maîtrise des coûts.

Livrables envisagés : abstraction fournisseur, schémas de sortie, streaming, retries bornés, évaluations, quotas de démonstration et politique de données.

Critère de sortie : les sorties IA sont traçables, validées, interrompables et clairement distinguées des données utilisateur.

## Phase 4 — Comptes et données

**Branche prévue :** `work/04-accounts-data`  
**Statut :** planifiée

Objectif : ajouter authentification, espaces privés, base de données, historique et collaboration avec un modèle d’autorisation vérifié.

Livrables envisagés : comptes, projets persistants, migrations, contrôle d’accès, suppression/export des données, audit de sécurité et sauvegarde.

Critère de sortie : aucun utilisateur ne peut lire ou modifier les données d’un autre, et les opérations sensibles sont testées de bout en bout.

## Phase 5 — Monétisation et maturité

**Branche prévue :** `work/05-monetization`  
**Statut :** planifiée

Objectif : valider puis commercialiser une offre Free/Pro sans compromettre la fiabilité, l’accessibilité ou la transparence.

Livrables envisagés : limites d’offre validées, paiement, gestion d’abonnement, observabilité, budgets de performance, support et documentation légale adaptée.

Critère de sortie : prix et promesses reposent sur des données validées, le paiement est testé, les erreurs sont observables et la valeur Pro est démontrée.
