# État du projet

**Dernière mise à jour :** 14 juillet 2026

**Mission :** A — recentrage documentaire

**Branche active :** `work/09-codex-starter-realignment`

**Base réelle de `main` :** `1615b8b95305b6b4b3242040d98e5d438c3802cf`

**Dernière PR fusionnée :** nº 11

**Pull request active :** nº 12 — brouillon, CI réussie

**Statut réel :** documentation en cours de réalignement ; aucune modification fonctionnelle

## Point de départ vérifié

- la PR nº 10 a livré le MVP local version 2 au commit `5ca3a6fdd510dc7d1a11382d086c0113c78975ee` ;
- la PR nº 11 a simplifié son expérience puis a été fusionnée dans `main` ;
- le dernier commit vérifié de `main` est `1615b8b95305b6b4b3242040d98e5d438c3802cf` (`fix: simplify the MVP language and workflow (#11)`) ;
- l’étape 8 est terminée ;
- aucune branche `work/08-*` n’est encore présentée comme active.

## Existant vérifié et conservé

- application Next.js locale ;
- modèle `Project` version 2, migration conservatrice et stockage `localStorage` ;
- moteur déterministe de six phases et 16 étapes ;
- recommandations selon l’environnement déclaré ;
- Dashboard, éditeur, reprise, conflits inter-onglets, statuts, preuves et validations humaines ;
- missions copiables, exports JSON/Markdown et rapport local ;
- aucune exécution automatique de ChatGPT, Codex ou d’un fournisseur IA ;
- tests et contrôles de l’étape 8 déjà enregistrés dans l’historique.

Ce MVP reste réellement utilisable. Il est conservé et devient secondaire dans la nouvelle direction ; son modèle, son stockage, ses routes et son interface ne changent pas pendant la Mission A.

## Direction en cours d’enregistrement

Starter IA se recentre sur un générateur local et déterministe de starters Codex. La cible future préparera un dossier versionnable contenant contexte, règles, configuration Codex, agents utiles, critères qualité et première mission, avec aperçu, manifeste et téléchargement.

Le générateur, le ZIP et le nouveau parcours ne sont pas implémentés. Le noyau de fichiers et les modules conditionnels restent des hypothèses à éprouver.

## Limites actuelles

- aucun générateur de starter ou ZIP disponible ;
- aucun nouveau formulaire, schéma, route ou composant ;
- aucun SDK IA, compte, synchronisation, base distante, paiement ou collaboration ;
- aucune publication, fusion ou production automatique ;
- les missions du MVP existant restent préparées et les preuves déclaratives.

## Contrôles de la Mission A

- `git diff --check` : réussi ;
- liens Markdown relatifs des 15 fichiers modifiés : aucune cible absente ;
- recherches des anciennes formulations contradictoires : aucune anomalie active ;
- `npm run lint` : réussi ;
- `npm run typecheck` : réussi ;
- `npm test` : 4 fichiers et 31 tests réussis ;
- `npm run build` : réussi hors sandbox après la limite de port interne Turbopack observée dans le sandbox ;
- deux cycles de revue indépendante : aucun problème bloquant ou important restant ;
- CI GitHub run 36 : job `quality` réussi, y compris les tests E2E ;
- aucun fichier fonctionnel modifié.

## Prochaine action

Après fusion de la Mission A : **Mission B — créer manuellement un starter de référence pour un vrai projet et l’utiliser avec Codex**.
