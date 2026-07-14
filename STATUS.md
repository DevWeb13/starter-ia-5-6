# État du projet

**Dernière mise à jour :** 14 juillet 2026

## État officiel

- **Mission A — recentrage documentaire : terminée.**
- **PR fusionnée :** nº 12 — `docs: realign Starter IA around Codex-ready starters`.
- **Commit de fusion :** `2cc1f7ff090b5b7a8dcc76db2eba0349ba260420`.
- **Mission active :** B — starter manuel de référence.
- **Projet pilote retenu :** Social Autopilot.
- **Branche de préparation :** `work/10-social-autopilot-starter`.

L’état instantané des branches, pull requests et contrôles reste vérifié directement dans GitHub. Ce document décrit la direction et la mission active sans chercher à recopier chaque changement d’état temporaire.

## Produit actuellement livré

L’application Next.js en production reste inchangée :

- moteur local déterministe de six phases et 16 étapes ;
- stockage `localStorage` version 2 et migration conservatrice ;
- Dashboard et espace projet guidé ;
- missions copiables, statuts, preuves et validations humaines ;
- exports Markdown et JSON ;
- aucun appel automatique à ChatGPT, Codex ou un fournisseur IA.

Ce MVP reste utilisable et devient un mode secondaire. Il n’a pas été supprimé ni transformé pendant la Mission A.

## Direction produit enregistrée

Starter IA doit devenir principalement un générateur local et déterministe de dossiers de préparation prêts pour Codex.

Le résultat futur devra pouvoir contenir :

- le contexte du projet ;
- les règles de travail ;
- la configuration Codex ;
- des agents spécialisés utiles ;
- les critères qualité et sécurité ;
- une première mission copiable ;
- un manifeste et un téléchargement du dossier.

Le générateur, l’aperçu et le ZIP ne sont pas encore implémentés.

## Mission B — projet pilote Social Autopilot

Social Autopilot est un projet personnel de serveur MCP destiné à tester l’utilisation d’outils sociaux par ChatGPT. Le pilote commence sans connexion réelle à un réseau social et sans publication.

La Mission B comporte deux portes distinctes :

1. **Préparation manuelle du starter** : créer et relire les fichiers de contexte, de règles, de sécurité, de qualité, de configuration Codex et de première mission. Aucun code applicatif.
2. **Premier usage contrôlé** : après validation humaine du starter, demander à Codex une fondation TypeScript minimale avec un seul outil MCP de lecture sur données simulées.

Le projet de carrosserie n’est pas utilisé comme cobaye. Il reste un futur projet client à traiter séparément avec ses informations réelles.

## Limites obligatoires de la Mission B

- aucune modification fonctionnelle de l’application Starter IA ;
- aucun générateur ou ZIP ;
- aucun dépôt public ;
- aucune connexion à Bluesky, Threads ou X pendant la préparation ;
- aucun secret ou jeton commité ;
- aucun outil de publication ou de réponse réelle dans le premier test ;
- aucun service payant ;
- aucune promesse de fonctionnement autonome avant vérification réelle.

## Livrables attendus

- un brief pilote complet ;
- un starter Codex manuel dans un dépôt privé séparé ;
- une première mission Codex petite et vérifiable ;
- une grille d’évaluation des fichiers utiles, inutiles ou manquants ;
- un retour d’usage permettant de préparer la Mission C.

## Prochaine action

Finaliser et fusionner le cadrage de la Mission B, puis créer manuellement le starter de Social Autopilot dans un dépôt privé séparé. Aucun développement du générateur Starter IA ne commence avant ce retour d’usage.
