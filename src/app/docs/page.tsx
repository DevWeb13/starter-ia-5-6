import type { Metadata } from "next";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createPublicPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPublicPageMetadata({
  path: "/docs",
  title: "Choisir sa configuration",
  description: "Comparer ChatGPT, Work, Codex local, Codex Remote et les passages de relais selon son besoin réel.",
});

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const configurations = [
  {
    name: "ChatGPT",
    role: "Réfléchir, décider et produire un brouillon court.",
    choose: "Une question limitée, quelques options à comparer ou un texte court à améliorer.",
    steps: ["Donner le contexte et le résultat attendu.", "Préciser les contraintes et le format.", "Vérifier les hypothèses et le résultat."],
    resources: ["templates/BRIEF.md", "templates/starter-kit/README.md", "course/FORMATION-EXPRESS.md"],
    limit: "Pas d’environnement de travail complet garanti ; les fonctions dépendent du compte.",
    handoff: "Passer à Work pour une mission complète ou à Codex local pour intervenir sur un dépôt.",
    guide: "guides/configurations/chat.md",
  },
  {
    name: "Work",
    role: "Conduire une mission complète dans un environnement cloud.",
    choose: "Un brief en plusieurs étapes avec des fichiers, outils ou plugins réellement disponibles.",
    steps: ["Remplir le brief vérifiable.", "Adapter et lancer le prompt maître Work.", "Relire le livrable réel avec QUALITY.md."],
    resources: ["WORKFLOW.md", "prompts/MASTER-WORK.md", "prompts/REVIEW.md"],
    limit: "Les outils varient selon le compte ; Work ne charge pas automatiquement les règles Codex locales.",
    handoff: "Transmettre brief, sources, décisions et limites à Codex local pour modifier un dépôt.",
    guide: "guides/configurations/work.md",
  },
  {
    name: "Codex local",
    role: "Inspecter, modifier et vérifier un dépôt depuis la machine de développement.",
    choose: "Une mission de code qui exige Git, des fichiers locaux et des contrôles reproductibles.",
    steps: ["Ouvrir le dépôt et vérifier Git.", "Donner un brief borné.", "Autoriser les contrôles puis relire le diff."],
    resources: ["AGENTS.md", "WORKFLOW.md", ".codex/config.toml"],
    limit: "Les actions restent bornées par les permissions de la machine et les autorisations du brief.",
    handoff: "Piloter la même session avec Codex Remote ou préparer l’analyse avec Work + Codex.",
    guide: "guides/configurations/codex-local.md",
  },
  {
    name: "Codex Remote",
    role: "Piloter depuis iPhone une session Codex qui continue sur la machine locale.",
    choose: "Suivre ou diriger une mission locale lorsque la machine reste active et connectée.",
    steps: ["Préparer le dépôt, la branche et la session sur la machine.", "Consulter l’aide réellement installée.", "Suivre les instructions d’association affichées."],
    resources: ["guides/configurations/codex-remote.md", "AGENTS.md", ".codex/config.toml"],
    limit: "La disponibilité dépend du compte ; l’iPhone n’exécute ni le dépôt, ni Git, ni les processus.",
    handoff: "Revenir à Codex local si l’association est absente ou interrompue, puis contrôler Git et les processus.",
    guide: "guides/configurations/codex-remote.md",
  },
  {
    name: "Work + Codex",
    role: "Préparer ou analyser dans Work, puis implémenter et vérifier dans le dépôt avec Codex.",
    choose: "Une mission où la réflexion cloud et l’écriture locale doivent rester séparées et traçables.",
    steps: ["Produire le brief et les décisions dans Work.", "Transmettre un paquet de relais sans secret.", "Vérifier Git et les règles locales avant d’écrire."],
    resources: ["templates/BRIEF.md", "prompts/MASTER-WORK.md", "prompts/REVIEW.md"],
    limit: "Le passage de relais n’est pas automatique ; chaque environnement vérifie ses propres résultats.",
    handoff: "Revenir à Work pour l’analyse ou à Codex local pour poursuivre l’exécution dans le dépôt.",
    guide: "guides/configurations/hybrid-work-codex.md",
  },
];

export default function DocsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Configurations"
        badge="Choisir selon le besoin"
        title="ChatGPT, Work ou Codex : par où commencer ?"
        description="Comparez le rôle de chaque environnement, son cas d’usage et sa limite principale avant de préparer votre mission."
      />

      <div className="page-shell space-y-6 pb-14 sm:pb-20">
        {configurations.map((configuration, index) => (
          <Card key={configuration.name} className="overflow-hidden">
            <CardHeader className="border-b border-border bg-muted/35">
              <p className="font-mono text-sm font-bold text-primary">0{index + 1}</p>
              <h2 className="text-2xl font-semibold tracking-tight">{configuration.name}</h2>
              <p className="max-w-3xl text-muted-foreground">{configuration.role}</p>
            </CardHeader>
            <CardContent className="grid gap-7 p-5 sm:p-6 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">Quand la choisir</h3>
                  <p className="mt-1 text-muted-foreground">{configuration.choose}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Démarrage</h3>
                  <ol className="mt-2 space-y-2 text-muted-foreground">
                    {configuration.steps.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-mono text-sm font-bold text-primary">{stepIndex + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold">Ressources principales</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    {configuration.resources.map((resource) => (
                      <li key={resource} className="flex gap-2">
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                        <a
                          href={`${githubRoot}/${resource}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-words underline underline-offset-4"
                        >
                          {resource}
                          <span className="sr-only"> (ouvre un nouvel onglet)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6 lg:border-l lg:border-border lg:pl-7">
                <div>
                  <h3 className="font-semibold">Limite clé</h3>
                  <p className="mt-1 text-muted-foreground">{configuration.limit}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Passage de relais</h3>
                  <p className="mt-1 text-muted-foreground">{configuration.handoff}</p>
                </div>
                <a
                  href={`${githubRoot}/${configuration.guide}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
                >
                  Lire le guide complet
                  <span className="sr-only"> (ouvre un nouvel onglet)</span>
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}

        <aside className="rounded-2xl border border-border bg-muted/35 p-5 sm:p-6" aria-labelledby="starter-kit-title">
          <h2 id="starter-kit-title" className="text-xl font-semibold">Après avoir choisi : préparez le dépôt</h2>
          <p className="mt-2 text-muted-foreground">
            Le kit minimal fournit le contexte du projet, son état, les règles pour Codex et une première mission vérifiable. Les autres fichiers restent facultatifs.
          </p>
          <a
            href={`${githubRoot}/templates/starter-kit/README.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
          >
            Consulter le kit minimal
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </aside>
      </div>
    </>
  );
}
