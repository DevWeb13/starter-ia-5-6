# État du projet

**Dernière mise à jour :** 13 juillet 2026
**Étape :** 8 — MVP local du projet complet
**Branche active :** `work/08-complete-project-mvp`
**Base réelle :** `aeb1e9bfaf4f6b9da1d8daadf3726069a82296d3`
**Pull request :** nº 10 — prête pour révision
**Statut réel :** implémentation, revue, CI et Preview automatique vérifiées

## Point de départ

- l’étape 7 a été fusionnée par squash via la PR GitHub nº 9 ;
- son commit est `aeb1e9bfaf4f6b9da1d8daadf3726069a82296d3` (`docs: define the definitive agentic product direction (#9)`) ;
- la branche de l’étape 8 part exactement de ce commit ;
- le dépôt distant est `DevWeb13/starter-ia-5-6`.

## MVP réellement implémenté

- modèle `Project` version 2 avec brief, matériel déclaré, workflow, six phases et 16 étapes ;
- moteur local déterministe, sans fournisseur, SDK, appel réseau métier ou secret ;
- recommandations iPhone + Ubuntu + Remote Control, Remote Control alternatif, Codex local et absence de Codex ;
- lancement immédiat depuis `/demo`, sans faux délai ;
- espace projet à une phase principale avec missions, livrables, preuves, statuts et validations humaines ;
- « Comprendre cette étape », Dashboard, reprise, conflits inter-onglets, exports JSON/Markdown et rapport local ;
- interface publique recentrée sur le projet complet ; configurations conservées comme ressources secondaires ;
- Dashboard et éditeur `noindex` et absents du sitemap.

## Migration version 1

- clé active : `starter-ia.projects.v2` ;
- source historique : `ai-project-launcher.projects.v1` conservée intacte ;
- sauvegarde brute avant migration ;
- validation stricte des enveloppes, dates ISO et identifiants ;
- anciens champs conservés dans le contexte historique ;
- aucune progression, preuve ou approbation inventée ;
- donnée v1 ou v2 illisible laissée intacte avec récupération explicite.

## Contrôles observés

- `git diff --check` : réussi avant la revue finale ;
- `npm run lint` : réussi ;
- `npm run typecheck` : réussi ;
- `npm test` : 4 fichiers et 28 tests réussis ;
- `npm run build` : réussi hors sandbox après l’échec attendu du port interne Turbopack dans le sandbox ;
- `npm run test:e2e` : 17 scénarios Playwright réussis ;
- contrôle Chromium headless : aucun débordement (`scrollWidth = clientWidth = 320`) sur l’accueil et `/demo` ;
- contrôle Playwright à 320 px : création puis ouverture d’un espace projet avec un résultat continu de 600 caractères, sans débordement global ;
- liens Markdown : 27 fichiers vérifiés, aucune cible relative absente ;
- aucun fichier `.env`, appel réseau métier ou dépendance inattendue ;
- `agent-browser` : non installé ; vérification équivalente effectuée avec Playwright et Chromium headless.
- CI GitHub de la PR nº 10 : réussie ;
- Preview Vercel automatique : prête et vérifiée sur les pages principales, sans déploiement manuel ni production.

## Revue indépendante

- cycle 1 : un blocage documentaire et sept défauts importants identifiés ;
- corrections : mémoire, rôle reviewer, prérequis Remote Control/Preview, récupération brute, preuve obligatoire, responsive, promesse et contrôle des exports ;
- cycle 2 : compteur et formulations documentaires résiduelles identifiés puis corrigés ;
- vérification finale du cycle 2 : aucune anomalie de lint, TypeScript, Vitest, build, Playwright ou `git diff --check`.

## Limites

- aucun appel ChatGPT ou Codex automatique ;
- aucun compte, synchronisation, base distante, paiement ou collaboration ;
- aucune publication, fusion ou production automatique ;
- les missions sont préparées et les preuves restent déclaratives ;
- l’étape 9 d’exécution guidée reste future.

## Prochaine action

Revue humaine de la PR nº 10, sans fusion automatique ni création de production manuelle.
