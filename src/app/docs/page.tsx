import type { Metadata } from "next";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Configurations techniques",
  description: "Ressources secondaires pour configurer ChatGPT, Work, Codex local, Codex Remote et les passages de relais.",
};

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const configurations = [
  {
    name: "Chat",
    role: "Réfléchir, décider et produire un brouillon court.",
    choose: "Une question limitée, quelques options à comparer ou un texte court à améliorer.",
    steps: ["Donner le contexte et le résultat attendu.", "Préciser les contraintes et le format.", "Vérifier les hypothèses et le résultat."],
    resources: ["templates/BRIEF.md", "course/FORMATION-EXPRESS.md", "QUALITY.md"],
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
        eyebrow="Ressources techniques"
        badge="Configurations secondaires"
        title="Configurer l’environnement recommandé pour votre projet."
        description="Le produit commence par le projet et son matériel. Ces guides détaillent ensuite les environnements disponibles, leurs limites et leurs passages de relais."
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
                        <a href={`${githubRoot}/${resource}`} className="break-words underline underline-offset-4">
                          {resource}
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
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
                >
                  Lire le guide complet
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}

        <aside className="rounded-2xl border border-border bg-muted/35 p-5 sm:p-6" aria-labelledby="local-app-title">
          <h2 id="local-app-title" className="text-xl font-semibold">Démarrage technique du MVP local</h2>
          <p className="mt-2 text-muted-foreground">
            L’application Next.js exécute uniquement le moteur déterministe et le stockage navigateur. Ses prérequis, commandes et limites sont documentés dans le README du dépôt.
          </p>
          <a
            href={`${githubRoot}/README.md`}
            className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
          >
            Lire le README
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </aside>
      </div>
    </>
  );
}
