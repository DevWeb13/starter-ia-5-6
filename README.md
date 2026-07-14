# Starter IA 5.6

**Starter IA prépare un environnement de travail prêt pour Codex à partir d’un projet, de l’environnement réel de l’utilisateur et des modules utiles.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Nouvelle direction

La cible est un générateur local et déterministe de starters Codex. Le résultat futur sera un dossier téléchargeable et versionnable contenant le contexte, les règles de travail, la configuration Codex, les agents utiles, les critères qualité et une première mission directement exploitable.

Ce générateur, son aperçu et son ZIP **ne sont pas encore construits**. Le noyau de fichiers reste une hypothèse à valider par un usage manuel réel.

## Ce qui fonctionne aujourd’hui

Le MVP local version 2 est réellement implémenté et conservé :

- moteur TypeScript déterministe de six phases et 16 étapes ;
- recommandations selon l’environnement déclaré ;
- Dashboard et espace projet ;
- stockage local versionné et migration conservatrice ;
- missions copiables, statuts, preuves et validations humaines ;
- exports Markdown et JSON.

Il n’appelle ni ChatGPT ni Codex automatiquement. Il reste utile comme parcours complet, mais devient secondaire afin que la priorité future soit l’obtention rapide d’un starter Codex.

## Prochaine expérimentation

La Mission B créera manuellement un starter complet pour un vrai projet et l’utilisera avec Codex. Ce test déterminera quels fichiers sont utiles, inutiles ou manquants avant toute spécification ou automatisation.

## Démarrage de l’application actuelle

Prérequis : Node.js 24 et npm.

```sh
npm ci
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Aucune variable d’environnement n’est nécessaire.

## Contrôles

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Playwright utilise Chromium. Avant un premier lancement local, exécutez si nécessaire `npx playwright install chromium`.

## Ressources

- orientation rapide : [`START-HERE.md`](START-HERE.md) ;
- direction et contrat cible : [`PROJECT.md`](PROJECT.md) ;
- état réel : [`STATUS.md`](STATUS.md) ;
- feuille de route : [`ROADMAP.md`](ROADMAP.md) ;
- workflow interne : [`WORKFLOW.md`](WORKFLOW.md) ;
- architectures actuelle et cible : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- configurations techniques : [`guides/configurations/README.md`](guides/configurations/README.md).

## Limites

Aucun générateur de starter, ZIP, SDK IA, secret, fichier `.env`, compte, base distante, paiement, publication automatique, fusion automatique ou production automatique n’est inclus.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
