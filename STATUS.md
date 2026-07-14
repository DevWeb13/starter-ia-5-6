# État du projet

**Dernière mise à jour :** 14 juillet 2026
**Étape :** 8 — simplification de l’expérience du MVP local
**Branche active :** `work/08-human-first-ux`
**Base réelle :** `5ca3a6fdd510dc7d1a11382d086c0113c78975ee`
**Pull request :** nº 11 — prête pour révision
**Statut réel :** implémentation, deux cycles de revue, contrôles locaux, CI initiale et Preview automatique vérifiés

## Point de départ

- le MVP local de l’étape 8 a été fusionné dans `main` au commit `5ca3a6fdd510dc7d1a11382d086c0113c78975ee` ;
- la branche `work/08-human-first-ux` part exactement de ce commit ;
- le dépôt distant reste `DevWeb13/starter-ia-5-6`.

## MVP réellement implémenté

- modèle `Project` version 2 avec brief, matériel déclaré, workflow, six phases et 16 étapes ;
- moteur local déterministe, sans fournisseur, SDK, appel réseau métier ou secret ;
- recommandations iPhone + Ubuntu + Remote Control, Remote Control alternatif, Codex local et absence de Codex ;
- lancement immédiat depuis `/demo`, sans faux délai ;
- espace projet à une phase principale avec missions, livrables, preuves, statuts et validations humaines ;
- « Comprendre cette étape », Dashboard, reprise, conflits inter-onglets, exports JSON/Markdown et rapport local ;
- interface publique recentrée sur le projet complet ; configurations conservées comme ressources secondaires ;
- Dashboard et éditeur `noindex` et absents du sitemap.

## Simplification en cours de livraison

- les six phases et les 16 étapes conservent leurs identifiants, leur ordre et leurs règles, avec des textes en français courant ;
- chaque carte montre d’abord le titre, l’action à faire, l’état, la prochaine action et un seul bouton principal ;
- les explications, résultats attendus, critères, notes, accords et missions complémentaires restent disponibles dans « Comprendre cette étape », fermé par défaut ;
- le formulaire, les statuts, le Dashboard, le rapport et l’export Markdown utilisent les mêmes libellés simplifiés ;
- les boutons affichent les curseurs actif et désactivé attendus ;
- les liens externes de l’interface ouvrent un nouvel onglet avec une indication accessible.

Le moteur n’a pas été reconstruit : le schéma 2, le stockage, la migration, les conflits, la progression, les statuts internes et les exports JSON restent inchangés. Aucune intégration distante n’a été ajoutée.

## Migration version 1

- clé active : `starter-ia.projects.v2` ;
- source historique : `ai-project-launcher.projects.v1` conservée intacte ;
- sauvegarde brute avant migration ;
- validation stricte des enveloppes, dates ISO et identifiants ;
- anciens champs conservés dans le contexte historique ;
- aucune progression, preuve ou approbation inventée ;
- donnée v1 ou v2 illisible laissée intacte avec récupération explicite.

## Contrôles observés sur cette branche

- Vitest ciblé : 2 fichiers et 16 tests réussis ;
- ESLint ciblé sur les fichiers modifiés : réussi ;
- Playwright ciblé : 8 scénarios initiaux réussis ; les 3 scénarios concernés par la revue puis le test de curseur isolé ont aussi réussi après correction ;
- les contrôles ciblés couvrent les 16 étapes, les projets version 2, les garde-fous, la carte repliée, la copie, les curseurs, les liens externes, le clavier et 320 px ;
- `agent-browser` reste non installé ; la vérification navigateur utilise Chromium avec Playwright ;
- `git diff --check`, `npm run lint` et `npm run typecheck` : réussis ;
- `npm test` : 4 fichiers et 31 tests réussis ;
- `npm run build` : réussi hors sandbox avec Next.js 16.2.10 ;
- `npm run test:e2e` : premier passage avec 18 réussites et 4 attentes obsolètes sur la méthode repliée, puis second passage avec 22 scénarios réussis ;
- CI GitHub de la PR nº 11 sur `44d4069` : quality, GitGuardian, Vercel et Vercel Preview Comments réussis ;
- Preview Vercel automatique `dpl_9VN5FosBFLK4oYEHBo4DNPJSDKgP` : état `READY`, source Git, branche `work/08-human-first-ux`, PR nº 11 et `target: null` ; aucune production ni commande de déploiement manuel ;
- logs Vercel : build Next.js, TypeScript, 10 routes et déploiement terminés sans erreur ; l’accès HTTP direct reste protégé par l’authentification Vercel, donc aucune vérification visuelle distante n’est revendiquée ;
- threads de revue GitHub : aucun lors du contrôle.

## Revue indépendante

- cycle 1 en lecture seule : aucun bloquant, quatre défauts importants et une amélioration ;
- corrections : méthode technique déplacée après les actions, accord humain prioritaire au lancement, messages de garde-fou harmonisés, fichier Next généré restauré et hover désactivé neutralisé ;
- cycle 2 en lecture seule : deux défauts importants résiduels, aucun autre défaut bloquant ou important ;
- corrections finales du cycle 2 : `next-env.d.ts` restauré après sa régénération par Next et « Parcours déterministe » remplacé par « Votre parcours » ;
- aucun troisième passage ne sera lancé ; les corrections finales sont contrôlées directement avant livraison.

## Limites

- aucun appel ChatGPT ou Codex automatique ;
- aucun compte, synchronisation, base distante, paiement ou collaboration ;
- aucune publication, fusion ou production automatique ;
- les missions sont préparées et les preuves restent déclaratives ;
- l’étape 9 d’exécution guidée reste future.

## Prochaine action

Revue humaine de la PR nº 11, sans fusion automatique ni production manuelle.
