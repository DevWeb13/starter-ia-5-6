import type { Metadata } from "next";
import { Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fonctionnement",
  description: "Les six phases de Starter IA et la façon simple de préparer, réaliser puis vérifier chaque action.",
};

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const steps = [
  {
    title: "Cadrer",
    text: "Décrire le problème, le résultat souhaité, les limites et les informations manquantes.",
  },
  {
    title: "Valider",
    text: "Vérifier le besoin auprès des personnes concernées et regarder les solutions qu’elles utilisent déjà.",
  },
  {
    title: "Concevoir",
    text: "Choisir une première version simple, ses textes et la façon de la construire.",
  },
  {
    title: "Construire",
    text: "Construire le résultat sur une branche séparée. Un seul agent modifie les fichiers.",
  },
  {
    title: "Vérifier",
    text: "Tester le résultat, l’accessibilité et la sécurité, puis demander une relecture indépendante.",
  },
  {
    title: "Lancer et améliorer",
    text: "Préparer le lancement avec des faits, demander les accords nécessaires et apprendre des retours.",
  },
];

const principles = [
  "Décrire le besoin → préparer l’action → la réaliser.",
  "Vérifier le résultat réel → faire relire → corriger.",
  "Les missions ChatGPT et Codex reprennent les informations de votre projet et ses limites.",
  "Copier une mission ne l’exécute pas.",
  "Vous indiquez l’avancement et les résultats observés.",
  "Les actions importantes exigent toujours votre accord clair.",
];

export default function MethodPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fonctionnement"
        badge="Cycle complet"
        title="Six phases pour guider une idée jusqu’au lancement."
        description="Chaque étape vous indique quoi faire, ce que vous devez obtenir et comment vérifier le résultat."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-labelledby="method-steps-title">
        <h2 id="method-steps-title" className="sr-only">Les six phases du projet</h2>
        <ol className="grid gap-4 lg:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[auto_1fr] sm:p-6">
              <span className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-muted/35 py-14 sm:py-20" aria-labelledby="principles-title">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow">Pour chaque action</p>
            <h2 id="principles-title" className="section-title">Une mission préparée, exécutée puis vérifiée.</h2>
            <p className="text-muted-foreground">
              Cette méthode simple s’applique à chaque action des six phases.
            </p>
          </div>
          <Card>
            <CardContent className="p-5 sm:p-6">
              <ul className="space-y-4">
                {principles.map((principle) => (
                  <li key={principle} className="flex gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    {principle}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="reading-shell py-14 sm:py-20" aria-labelledby="sources-title">
        <h2 id="sources-title" className="section-title">Lire les documents de référence</h2>
        <p className="mt-3 text-muted-foreground">
          WORKFLOW.md décrit le processus complet. QUALITY.md définit les défauts bloquants ou importants et la décision de livraison.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {[
            ["Lire WORKFLOW.md", "WORKFLOW.md"],
            ["Lire QUALITY.md", "QUALITY.md"],
          ].map(([label, path]) => (
            <a
              key={path}
              href={`${githubRoot}/${path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
            >
              {label}
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
