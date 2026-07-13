# Feuille de route

La feuille de route conserve l’historique livré et fixe les prochaines étapes sans ajouter de grande phase au-delà de l’étape 10. Les résultats vérifiés sont consignés dans [`STATUS.md`](STATUS.md).

## Historique livré

### Version 0.1 — Méthode documentaire

**Statut :** terminée le 11 juillet 2026.

Méthode iPhone-first, workflow, prompts, brief, formation, identité visuelle et première configuration Codex.

### Phase 1 — Fondation publiable

**Branche :** `work/01-foundation`
**Statut :** terminée, fusionnée dans `main` au commit `6819f79`.

Application Next.js accessible, démonstration locale déterministe, design system, tests, CI et déploiement historique.

### Phase 2 — Cœur produit local

**Branche :** `work/02-product-core`
**Statut :** terminée, fusionnée dans `main` au commit `1026f75`.

Modèle de projet versionné, dashboard et éditeur locaux, exports et persistance navigateur sans compte ni service distant.

### Étape 3 — Réalignement du starter

**Branche :** `work/03-product-realignment`
**Statut :** terminée, fusionnée via la PR GitHub nº 4 au commit `8ab9507`.

Résultat : mémoire réalignée autour de cinq configurations complémentaires, règles Codex permanentes, guides initiaux et corrections ciblées du cœur local, sans fondation fournisseur.

La configuration Codex sécurisée a ensuite été livrée via la PR GitHub nº 5 au commit `5f8149d`. Cette correction de workflow est terminée ; elle ne constitue pas une nouvelle phase produit. Cette ancienne direction est recentrée par l’étape 7.

### Étape 4 — Catalogue et templates

**Branche :** `work/04-catalog-templates`
**Statut :** terminée, fusionnée via la PR GitHub nº 6 au commit `32e917f`.

Résultat : les cinq guides sont reliés aux prompts, briefs, checklists, formation et configuration réellement disponibles, sans fonction applicative inventée.

Critère de sortie atteint : chaque configuration possède un chemin de démarrage court, des ressources réutilisables, des limites vérifiables et un passage de relais clair.

### Étape 5 — Interface alignée sur les ressources

**Branche :** `work/05-interface-resources`
**Statut :** terminée, fusionnée via la PR GitHub nº 7 au commit `54c7b44` et déployée en production le 13 juillet 2026.

Résultat : l’accueil, `/docs`, `/tarifs` et `/fonctionnalites` présentent respectivement la porte d’entrée, les configurations, les ressources et la méthode. La navigation privilégie ces ressources ; la démonstration, le dashboard et l’éditeur locaux restent accessibles comme support historique secondaire.

Critère de sortie atteint : l’interface respecte [`DESIGN.md`](DESIGN.md), les contrôles applicatifs et Playwright réussissent, la production répond, et aucun fournisseur, authentification, paiement ou stockage distant n’a été introduit.

### Étape 6 — Clôture post-fusion

**Branche :** `work/06-post-merge-closure`
**Statut :** terminée, fusionnée par squash via la PR GitHub nº 8 au commit `06718299fa2cea6a8341d9e2d799305ca897739d`.

La mémoire a été clôturée après l’étape 5. Le Dashboard et l’éditeur locaux ont été retirés de l’indexation publique sans modifier leur fonctionnement.

## Direction active

### Étape 7 — Réalignement définitif

**Branche :** `work/07-definitive-product-realignment`
**Statut :** en cours.

Fixer une direction unique : orchestrateur de projet complet, six phases, rôles d’agents compréhensibles, ChatGPT + Codex comme workflow principal, recommandation matérielle, sécurité, marketing intégré et contrat du prochain MVP. Cette étape est documentaire et ne construit aucune fonction applicative.

### Étape 8 — MVP du projet complet

**Statut :** prévue après validation et fusion séparée de l’étape 7.

- entrée projet et résultat recherché ;
- profil matériel et outils disponibles ;
- cycle en six phases ;
- création, modification, reprise et progression locale ;
- stockage local versionné ;
- exports Markdown et JSON ;
- génération de missions ChatGPT copiables ;
- génération de missions Codex copiables ou exportables ;
- volet « Comprendre cette étape » ;
- rapport final local.

Le moteur initial peut rester local et déterministe. Il ne doit simuler aucun appel à ChatGPT ou Codex.

### Étape 9 — Exécution guidée

**Statut :** prévue.

- exécution guidée des paquets ChatGPT et Codex générés à l’étape 8 ;
- suivi de progression, livrables et preuves ;
- validations humaines ;
- workflow iPhone + Ubuntu et parcours sans Remote Control.

### Étape 10 — Lancement démontré

**Statut :** prévue.

- premier projet réel construit avec Starter IA ;
- pack marketing fondé sur les faits ;
- étude de cas et démonstration publique ;
- publication stable après validation humaine ;
- retours utilisateurs et améliorations décidées à partir de preuves.

## Veille future

Une veille hebdomadaire OpenAI pourra être préparée dans une mission distincte. Séparée de l’audit technique du dépôt, elle consultera uniquement les sources officielles OpenAI, suivra les évolutions utiles de ChatGPT et Codex, évaluera leur impact réel et ignorera les annonces sans conséquence produit. Elle préparera un rapport ou une issue, ne modifiera jamais automatiquement le produit et exigera une validation humaine avant toute adaptation. Elle n’existe pas encore.
