# État du projet

**Dernière mise à jour :** 13 juillet 2026
**Étape :** 7 — Réalignement définitif
**Branche active :** `work/07-definitive-product-realignment`
**Base réelle :** `06718299fa2cea6a8341d9e2d799305ca897739d`
**Statut réel :** nouvelle direction en formalisation, aucun nouveau MVP fonctionnel implémenté

## Point de départ vérifié

- la PR GitHub nº 8 a été fusionnée par squash dans `main` ;
- son commit est `06718299fa2cea6a8341d9e2d799305ca897739d` (`chore: close step 5 and refine local route indexing (#8)`) ;
- l’étape 7 part de ce commit sur la branche dédiée ;
- le dépôt distant est `DevWeb13/starter-ia-5-6`.

## Direction en formalisation

Starter IA devient un orchestrateur de projet complet. Il doit organiser six phases, les spécialistes, les missions ChatGPT et Codex, les livrables, les preuves, le marketing et les validations humaines selon le matériel de l’utilisateur.

ChatGPT + Codex devient le workflow principal. Work reste une option secondaire. Le parcours iPhone + Ubuntu avec Remote Control devient un workflow phare lorsque les fonctions nécessaires sont réellement disponibles.

## État réellement livré

- application Next.js publique et ressources documentaires ;
- démonstration locale déterministe en six sections ;
- dashboard et éditeur locaux ;
- modèle de projet versionné dans `localStorage` ;
- exports Markdown et JSON ;
- guides Chat, Work, Codex local, Codex Remote et Work + Codex ;
- tests, CI GitHub et intégration Vercel hérités des étapes précédentes.

L’application existante n’est pas le nouveau MVP. Elle ne comporte aucune intégration ChatGPT ou Codex, aucun fournisseur IA, appel payant, compte, base distante, paiement ou automatisation de publication.

## Mission actuelle

- réaligner uniquement les documents et la stratégie ;
- préserver l’application, ses routes, ses données, ses tests, ses dépendances et ses styles ;
- définir le contrat de l’étape 8 sans le construire ;
- ne pas attribuer de numéro à la PR avant sa création réelle.

## Contrôles de cette branche

- revue indépendante : aucun problème bloquant ou important après un cycle de correction ;
- `git diff --check` : réussi ;
- liens Markdown relatifs des 17 documents modifiés : vérifiés, aucune cible absente ;
- `npm run lint` : réussi ;
- `npm run typecheck` : réussi ;
- `npm test` : 2 fichiers et 8 tests réussis ;
- `npm run build` : premier essai bloqué par l’interdiction de port du sandbox, relance autorisée hors sandbox réussie ;
- `npm run test:e2e` : 11 scénarios Playwright réussis ;
- aucun fichier applicatif, test, dépendance, secret ou fichier `.env` modifié.

## Étape suivante

L’étape 8 construira le MVP local du projet complet uniquement après validation et fusion séparée de l’étape 7. Aucun travail d’implémentation de l’étape 8 n’est inclus dans cette branche.
