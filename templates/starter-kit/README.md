# Kit minimal pour démarrer avec Codex

Copiez ce dossier dans un projet nouveau ou existant, puis supprimez les sections inutiles. Le kit est volontairement statique : il ne contient aucun secret, générateur, manifeste automatique ou ZIP.

## Noyau minimal

| Fichier | Utilité | À garder si… |
|---|---|---|
| [`PROJECT.md`](PROJECT.md) | décrit le but, le public, le résultat et les limites durables | toujours |
| [`STATUS.md`](STATUS.md) | indique l’état réel et la prochaine action | toujours |
| [`AGENTS.md`](AGENTS.md) | fixe les règles que Codex doit respecter dans ce dépôt | toujours |
| [`prompts/FIRST-MISSION.md`](prompts/FIRST-MISSION.md) | fournit une première mission petite et vérifiable | toujours au démarrage |

## Fichiers facultatifs

| Fichier | Ajoutez-le lorsque… |
|---|---|
| [`DECISIONS.md`](DECISIONS.md) | plusieurs décisions durables doivent être comprises plus tard |
| [`QUALITY.md`](QUALITY.md) | les contrôles communs dépassent les critères d’une seule mission |
| [`.codex/config.toml`](.codex/config.toml) | l’équipe veut partager des permissions Codex locales prudentes |

Un petit projet n’a pas besoin d’architecture, de design, de roadmap, d’agents spécialisés ou de CI par principe. Ajoutez un document seulement lorsqu’il évite une ambiguïté réelle.

## Utilisation

1. Remplissez `PROJECT.md` avec les faits durables.
2. Notez dans `STATUS.md` ce qui existe déjà et la prochaine action.
3. Adaptez `AGENTS.md` aux commandes et limites du dépôt.
4. Copiez `prompts/FIRST-MISSION.md` dans ChatGPT pour le cadrage, puis transmettez la mission validée à Codex.
5. Après l’exécution, demandez à Codex les contrôles et relisez le résultat dans ChatGPT.

Ne collez jamais de token, clé, fichier `.env` ou donnée sensible dans ces modèles.
