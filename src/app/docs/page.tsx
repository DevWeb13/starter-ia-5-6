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
const coreRoot = "https://github.com/DevWeb13/starter-ia-qwik";

const configurations = [
  {
    name: "ChatGPT",
    role: "Réfléchir, décider, rédiger, auditer ou contrôler avec les outils disponibles.",
    choose: "Une mission où la réflexion, l'analyse ou les connecteurs disponibles suffisent sans environnement de développement local.",
    steps: ["Donner le contexte et le résultat attendu.", "Préciser les contraintes et le format.", "Vérifier les capacités disponibles et le résultat réel."],
    resources: ["templates/BRIEF.md", "course/README.md", "course/FORMATION-EXPRESS.md"],
    limit: "Les capacités dépendent de la session, du compte et des connecteurs réellement disponibles.",
    handoff: "Passer à Work ou Codex seulement lorsqu'un autre environnement apporte une capacité nécessaire.",
    guide: "guides/configurations/chat.md",
  },
  {
    name: "Work",
    role: "Conduire une mission complète dans un environnement cloud.",
    choose: "Un brief en plusieurs étapes avec des fichiers, outils ou plugins réellement disponibles.",
    steps: ["Remplir le brief vérifiable.", "Adapter et lancer le prompt maître Work.", "Relire le livrable réel avec QUALITY.md."],
    resources: ["WORKFLOW.md", "prompts/MASTER-WORK.md", "prompts/REVIEW.md"],
    limit: "Les outils varient selon le compte ; Work ne charge pas automatiquement les règles Codex locales.",
    handoff: "Transmettre brief, sources, décisions et limites à Codex local si la mission exige son environnement de développement.",
    guide: "guides/configurations/work.md",
  },
  {
    name: "Codex local",
    role: "Travailler directement dans un dépôt depuis l'environnement de développement.",
    choose: "Une mission qui exige le filesystem du projet, Git, les commandes, les tests ou le navigateur local.",
    steps: ["Ouvrir le dépôt et vérifier Git.", "Lire les règles et l'état du projet.", "Réaliser la mission puis exécuter les contrôles."],
    resources: ["course/README.md", "WORKFLOW.md", "QUALITY.md"],
    limit: "Les actions restent bornées par le sandbox, les permissions de la machine et les autorisations de la mission.",
    handoff: "Utiliser le Starter IA Qwik Core pour une fondation Qwik prête à initialiser.",
    guide: "guides/configurations/codex-local.md",
  },
  {
    name: "Codex Remote",
    role: "Piloter depuis un autre appareil une session Codex liée à l'environnement de développement.",
    choose: "Suivre ou diriger une mission locale lorsque la fonction est réellement disponible et la machine reste active.",
    steps: ["Préparer le dépôt, la branche et la session sur la machine.", "Consulter l’aide réellement installée.", "Suivre les instructions d’association affichées."],
    resources: ["guides/configurations/codex-remote.md", "course/README.md", "WORKFLOW.md"],
    limit: "La disponibilité dépend du compte, du client et des versions.",
    handoff: "Revenir à Codex local si l’association est absente ou interrompue, puis contrôler Git et les processus.",
    guide: "guides/configurations/codex-remote.md",
  },
  {
    name: "Work + Codex",
    role: "Préparer ou analyser dans Work, puis utiliser Codex lorsque le dépôt local est nécessaire.",
    choose: "Une mission où la réflexion cloud et l'écriture locale doivent rester séparées et traçables.",
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
        title="ChatGPT, Work ou Codex : de quoi avez-vous réellement besoin ?"
        description="Comparez le rôle de chaque environnement, son cas d’usage et sa limite principale avant d'ajouter un passage de relais inutile."
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
                        <a href={`${githubRoot}/${resource}`} target="_blank" rel="noopener noreferrer" className="break-words underline underline-offset-4">
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
                <a href={`${githubRoot}/${configuration.guide}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
                  Lire le guide complet
                  <span className="sr-only"> (ouvre un nouvel onglet)</span>
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}

        <aside className="rounded-2xl border border-border bg-muted/35 p-5 sm:p-6" aria-labelledby="core-title">
          <h2 id="core-title" className="text-xl font-semibold">Après les fondamentaux : utilisez le vrai Starter IA Qwik Core</h2>
          <p className="mt-2 text-muted-foreground">
            Le dépôt Core contient la fondation Qwik, les documents projet, `prompts/INITIALIZE.md`, la configuration Codex, les tests et GitHub Actions. Il est désormais l'unique source technique de référence du Core.
          </p>
          <a href={coreRoot} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
            Ouvrir Starter IA Qwik Core
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </aside>
      </div>
    </>
  );
}
