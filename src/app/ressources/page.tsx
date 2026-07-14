import type { Metadata } from "next";
import { Check, ExternalLink, FileText } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ressources, kit, templates et prompts",
  description: "Un kit minimal pour Codex, ses fichiers facultatifs, des prompts et des guides prêts à consulter et copier.",
};

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const coreFiles = [
  ["templates/starter-kit/PROJECT.md", "But, utilisateurs, résultat et limites durables du projet."],
  ["templates/starter-kit/STATUS.md", "État réellement disponible, limites et prochaine action."],
  ["templates/starter-kit/AGENTS.md", "Règles prudentes que Codex doit respecter dans le dépôt."],
  ["templates/starter-kit/prompts/FIRST-MISSION.md", "Première modification petite, bornée et vérifiable."],
];

const optionalFiles = [
  ["templates/starter-kit/DECISIONS.md", "Quand plusieurs choix durables doivent rester compréhensibles."],
  ["templates/starter-kit/QUALITY.md", "Quand les critères communs dépassent ceux d’une seule mission."],
  ["templates/starter-kit/.codex/config.toml", "Quand une configuration locale prudente doit être partagée."],
];

const resources = [
  ["guides/configurations/README.md", "Comparer ChatGPT, Work, Codex local, Codex Remote et Work + Codex."],
  ["templates/BRIEF.md", "Transformer une demande en livrables, contraintes et critères observables."],
  ["prompts/MASTER-WORK.md", "Cadrer une mission complète dans Work lorsque cet environnement convient."],
  ["prompts/REVIEW.md", "Demander une revue indépendante, priorisée et en lecture seule."],
  ["course/FORMATION-EXPRESS.md", "Apprendre en 30 minutes à choisir, préparer, exécuter et contrôler."],
  ["WORKFLOW.md", "Suivre le processus interne du brief à la livraison vérifiée."],
];

function FileLink({ path, description }: { path: string; description: string }) {
  return (
    <li className="grid gap-3 p-5 sm:p-6 lg:grid-cols-[minmax(15rem,0.8fr)_1.2fr_auto] lg:items-start">
      <div className="flex min-w-0 gap-3">
        <FileText aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
        <code className="break-all font-mono text-sm font-semibold text-foreground">{path}</code>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <a
        href={`${githubRoot}/${path}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4 lg:justify-self-end"
      >
        Ouvrir
        <span className="sr-only"> (ouvre un nouvel onglet)</span>
        <ExternalLink aria-hidden="true" className="size-4" />
      </a>
    </li>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ressources gratuites"
        badge="Prêts à copier"
        title="Préparer un projet pour Codex, sans dossier inutile."
        description="Commencez avec quatre fichiers. Ajoutez une option seulement lorsqu’elle répond à un besoin réel, puis utilisez les guides et prompts selon votre environnement."
      />

      <section className="page-shell space-y-10 pb-14 sm:pb-20">
        <div className="space-y-5" aria-labelledby="core-kit-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Noyau minimal</p>
            <h2 id="core-kit-title" className="section-title">Quatre fichiers pour commencer.</h2>
            <p className="text-muted-foreground">Ils donnent à Codex le contexte durable, l’état réel, les règles et la première action. Aucun générateur ni ZIP n’est nécessaire.</p>
          </div>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {coreFiles.map(([path, description]) => <FileLink key={path} path={path} description={description} />)}
          </ul>
        </div>

        <div className="space-y-5" aria-labelledby="optional-kit-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Selon le projet</p>
            <h2 id="optional-kit-title" className="section-title">Trois options, jamais obligatoires par principe.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {optionalFiles.map(([path, description]) => (
              <Card key={path}>
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <Check aria-hidden="true" className="size-5 text-success" />
                  <code className="mt-4 break-all font-mono text-sm font-semibold">{path}</code>
                  <p className="mt-3 flex-1 text-muted-foreground">{description}</p>
                  <a href={`${githubRoot}/${path}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
                    Ouvrir le modèle
                    <span className="sr-only"> (ouvre un nouvel onglet)</span>
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-5" aria-labelledby="resources-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Pour aller plus loin</p>
            <h2 id="resources-title" className="section-title">Guides, prompts et méthode.</h2>
          </div>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {resources.map(([path, description]) => <FileLink key={path} path={path} description={description} />)}
          </ul>
        </div>
      </section>
    </>
  );
}
