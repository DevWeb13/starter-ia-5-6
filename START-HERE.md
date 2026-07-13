# Lancer un projet avec Starter IA

La question de départ est simple : **« Quel projet voulez-vous lancer ? »**

Décrivez le résultat recherché, les contraintes importantes, votre matériel et les outils réellement disponibles. Starter IA doit ensuite organiser le parcours, pas vous demander de choisir une architecture compliquée.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Les six phases

1. **Cadrer** l’idée, l’objectif, les contraintes et les risques.
2. **Valider** le marché, la cible, le problème et le positionnement avec des critères et des preuves.
3. **Concevoir** le produit, le MVP, l’expérience, les contenus et l’architecture.
4. **Construire** les fichiers, le code, le design, les contenus et la documentation.
5. **Vérifier** les tests, la sécurité, l’accessibilité, la qualité et les preuves réelles.
6. **Lancer et améliorer** après validation humaine, avec marketing, mesure, retours et maintenance.

## Qui fait quoi

- **ChatGPT** aide à cadrer, rechercher, comparer, décider, rédiger et piloter.
- **Codex** inspecte, modifie et vérifie les fichiers, Git et les contrôles autorisés.
- **L’orchestrateur** organise le projet et distribue les missions.
- **Les spécialistes** analysent un sujet précis en lecture seule.
- **L’exécutant** est le seul rôle qui écrit.
- **Le reviewer** contrôle indépendamment le résultat.
- **L’humain** approuve les actions sensibles ou irréversibles.

Le cycle du projet ne remplace pas le workflow interne d’une mission. Ce dernier reste : **Brief → analyses en lecture seule → plan → écrivain unique → vérification → revue → correction → livraison**. Voir [`WORKFLOW.md`](WORKFLOW.md).

## Comprendre cette étape

Le futur MVP affichera pour chaque étape un volet **« Comprendre cette étape »**. En quelques lignes, il expliquera pourquoi l’étape existe, qui intervient, ce que ChatGPT et Codex feront, le livrable attendu, la preuve à obtenir et ce que l’utilisateur devra approuver. Cette fonction enseignera progressivement le workflow sans devenir un cours technique.

## Parcours recommandé selon le matériel

Starter IA recommandera le chemin le plus simple compatible avec l’environnement réel :

- ChatGPT + Codex local sur Ubuntu/Linux ;
- ChatGPT + Codex sur Windows ;
- ChatGPT + Codex sur macOS ;
- ChatGPT sur iPhone + Codex Remote si la fonction est disponible ;
- parcours local sans Remote Control dans les autres cas.

La disponibilité dépend du compte, du client, du système, des versions et du déploiement progressif.

## Workflow phare : iPhone + Ubuntu

**ChatGPT sur iPhone → pilotage de la mission → Codex Remote Control → exécution sur Ubuntu → branche GitHub → contrôles → Preview Vercel automatique → validation humaine → squash merge → production.**

L’iPhone pilote seulement la session. Le dépôt, Git, Codex et les processus restent sur Ubuntu. La machine doit rester active, connectée et non suspendue. Une déconnexion ne prouve pas que les processus sont arrêtés et ne crée ni commit ni push. Vérifiez Git séparément. Ne transmettez jamais de secret, de code d’association ou de fichier `.env`.

Ce parcours est prioritaire, mais pas obligatoire. Utilisez le guide [Codex Remote](guides/configurations/codex-remote.md) uniquement si la fonction est réellement disponible.

## Limites actuelles

Le futur orchestrateur n’est pas encore construit. L’application actuelle est une démonstration locale déterministe avec édition, stockage navigateur et exports. Elle n’appelle ni ChatGPT ni Codex automatiquement et ne possède aucun service distant.

Les guides [Chat](guides/configurations/chat.md), [Work](guides/configurations/work.md), [Codex local](guides/configurations/codex-local.md), [Codex Remote](guides/configurations/codex-remote.md) et [Work + Codex](guides/configurations/hybrid-work-codex.md) restent disponibles comme références. Work est une option secondaire, pas la porte d’entrée principale.

Pour le contrat complet du prochain MVP, lisez [`PROJECT.md`](PROJECT.md).
