# Architecture

Ce document distingue l’architecture réellement livrée de la cible future. Il ne spécifie pas encore l’implémentation du générateur.

## Architecture actuelle vérifiée

```text
Brief + profil matériel déclarés
        ↓
moteur TypeScript pur et déterministe
        ↓
Project schéma 2 : workflow + 6 phases + 16 étapes
        ↓
stockage local version 2 dans localStorage
        ↓
Dashboard ↔ éditeur ↔ exports Markdown/JSON ↔ rapport local
```

### Application et stack

- Next.js `16.2.10`, App Router ;
- React / React DOM `19.2.7` ;
- TypeScript `5.9.3` strict ;
- Tailwind CSS `4.3.2`, composants UI locaux et next-themes ;
- Vitest `4.1.10` et Playwright `1.61.1` ;
- Server Components par défaut, avec limites client pour le thème, la navigation, les formulaires et `localStorage`.

### Moteur et modèle locaux

`src/lib/project-engine.ts` transforme les déclarations de l’utilisateur en six phases et 16 étapes. Il recommande un workflow selon le système, Codex local ou distant et la disponibilité déclarée de GitHub ou Vercel. Il n’effectue aucun appel réseau, ChatGPT, Codex, OpenAI ou autre fournisseur.

`src/lib/project.ts` définit le modèle version 2. Les statuts internes sont `not-started`, `partial`, `blocked` et `done-verified`. Une étape sensible ne peut pas être validée sans accord humain.

### Stockage, interface et exports

- clé active : `starter-ia.projects.v2` ;
- migration de `ai-project-launcher.projects.v1` après validation, conservation de la source et sauvegarde brute ;
- donnée illisible jamais écrasée automatiquement ;
- `/demo` crée un projet local ;
- `/dashboard` liste, reprend et exporte les projets ;
- `/dashboard/[id]` affiche l’espace guidé ;
- exports Markdown et JSON, plus rapport dérivé de l’état enregistré ;
- Dashboard et éditeur `noindex` et absents du sitemap.

Ce système est conservé comme mode secondaire. La Mission A ne modifie ni son modèle, ni son stockage, ni ses routes, ni son interface.

## Architecture cible non implémentée

```text
Entrées du projet
→ recommandation d’environnement
→ sélection des modules
→ manifeste des fichiers
→ génération déterministe du contenu
→ aperçu
→ ZIP et première mission sous forme de prompt copiable
```

La cible produira un starter Codex, c’est-à-dire un dossier de préparation du travail et non une application développée. Les mêmes entrées devront produire le même résultat, sous réserve d’une version explicite des règles et contenus.

La Mission B doit d’abord valider manuellement le noyau, les modules et l’usage réel. La Mission C décidera ensuite les champs, règles, schéma, manifeste, erreurs, format ZIP et tests.

Aucune bibliothèque ZIP, aucun nouveau schéma TypeScript, aucune organisation de composants et aucune migration ne sont choisis dans ce document.

## Sécurité commune

Aucun secret ne doit être demandé, généré ou commité. Un seul agent écrit ; spécialistes et reviewers restent en lecture seule. Fusion, production, suppression, paiement, publication, message et action irréversible exigent une autorisation humaine explicite.
