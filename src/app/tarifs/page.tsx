import type { Metadata } from "next";
import { ExternalLink, FileText } from "lucide-react";

import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Guides, workflows, prompts, briefs et critères qualité complémentaires au MVP local Starter IA.",
};

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const resources = [
  {
    path: "WORKFLOW.md",
    purpose: "Définit le processus de référence, du brief à la livraison vérifiée.",
    context: "À suivre pour toute mission structurée, quel que soit l’environnement.",
  },
  {
    path: "QUALITY.md",
    purpose: "Classe les défauts et fixe la décision de livraison.",
    context: "À utiliser pendant la vérification, la revue et après chaque correction.",
  },
  {
    path: "templates/BRIEF.md",
    purpose: "Transforme une demande en résultat, contraintes et critères observables.",
    context: "À remplir avant une mission complète ou un passage de relais.",
  },
  {
    path: "prompts/MASTER-WORK.md",
    purpose: "Cadre l’orchestration d’une mission complète dans Work.",
    context: "À adapter lorsque Work dispose des fichiers et outils requis.",
  },
  {
    path: "prompts/REVIEW.md",
    purpose: "Demande une revue indépendante, priorisée et strictement en lecture seule.",
    context: "À lancer après vérification du livrable réel.",
  },
  {
    path: "prompts/AUTOMATION.md",
    purpose: "Décrit un audit GitHub hebdomadaire prudent et sans bruit.",
    context: "À utiliser seulement si GitHub et l’automatisation sont réellement disponibles.",
  },
  {
    path: "course/FORMATION-EXPRESS.md",
    purpose: "Propose un parcours de 30 minutes pour choisir l’environnement et livrer proprement.",
    context: "À suivre pour découvrir Chat, Work, Codex, les briefs et la boucle qualité.",
  },
  {
    path: "AGENTS.md",
    purpose: "Fixe les règles permanentes des agents dans ce dépôt.",
    context: "À lire avec Codex dans le dépôt ; Work ne le charge pas automatiquement.",
  },
  {
    path: ".codex/config.toml",
    purpose: "Enregistre le modèle, le sandbox et les limites des agents Codex.",
    context: "À appliquer dans l’environnement local compatible, sans y placer de secret.",
  },
  {
    path: "guides/configurations/README.md",
    purpose: "Compare Chat, Work, Codex local, Codex Remote et Work + Codex.",
    context: "À ouvrir en premier pour choisir une configuration et son passage de relais.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ressources"
        badge="Fichiers du dépôt"
        title="Les ressources techniques de Starter IA."
        description="Le MVP local est la porte d’entrée produit. Ces fichiers complètent son parcours avec les règles, guides, prompts et critères réellement présents dans le dépôt."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-labelledby="resources-title">
        <h2 id="resources-title" className="sr-only">Ressources disponibles</h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <ul className="divide-y divide-border">
            {resources.map((resource) => (
              <li key={resource.path} className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(12rem,0.65fr)_1.35fr_auto] lg:items-start">
                <div className="flex min-w-0 gap-3">
                  <FileText aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <code className="break-all font-mono text-sm font-semibold text-foreground">{resource.path}</code>
                </div>
                <div className="space-y-1">
                  <p>{resource.purpose}</p>
                  <p className="text-sm text-muted-foreground">Contexte : {resource.context}</p>
                </div>
                <a
                  href={`${githubRoot}/${resource.path}`}
                  className="inline-flex min-h-11 items-center gap-2 self-center font-semibold text-primary underline underline-offset-4 lg:justify-self-end"
                >
                  Ouvrir
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
