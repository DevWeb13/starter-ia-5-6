import type { Metadata } from "next";
import { Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fonctionnement",
  description: "Le cycle complet Starter IA en six phases et le workflow interne de chaque mission.",
};

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const steps = [
  {
    title: "Cadrer",
    text: "Clarifier le problème, le résultat recherché, les contraintes, les risques et les informations manquantes.",
  },
  {
    title: "Valider",
    text: "Confronter les hypothèses au marché, aux alternatives et à des critères qui permettent aussi de corriger ou d’arrêter.",
  },
  {
    title: "Concevoir",
    text: "Définir le plus petit parcours utile, ses contenus, son architecture et son plan de vérification.",
  },
  {
    title: "Construire",
    text: "Produire le résultat sur une branche avec un seul écrivain, des limites visibles et des checkpoints vérifiables.",
  },
  {
    title: "Vérifier",
    text: "Contrôler les tests, l’accessibilité, la sécurité, les preuves réelles et la revue indépendante.",
  },
  {
    title: "Lancer et améliorer",
    text: "Préparer un marketing factuel, obtenir les accords humains, publier seulement si autorisé et apprendre des retours.",
  },
];

const principles = [
  "Brief → analyses en lecture seule → plan → écrivain unique.",
  "Vérification sur la cible réelle → revue indépendante → correction → livraison.",
  "Les missions ChatGPT et Codex intègrent le contexte saisi et les frontières de sécurité.",
  "Une mission copiée n’est jamais considérée comme exécutée.",
  "Les preuves et statuts sont déclarés par l’utilisateur.",
  "Les actions sensibles exigent toujours une validation humaine explicite.",
];

export default function MethodPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fonctionnement"
        badge="Cycle complet"
        title="Six phases pour transformer une idée en projet lancé."
        description="Le cycle du projet organise le résultat de bout en bout. Chaque étape prépare une mission, des livrables, des preuves et les validations humaines nécessaires."
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
            <p className="eyebrow">Workflow interne</p>
            <h2 id="principles-title" className="section-title">Une mission préparée, exécutée puis vérifiée.</h2>
            <p className="text-muted-foreground">
              Ce workflow s’applique à chaque intervention sans être confondu avec les six phases du projet.
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
        <h2 id="sources-title" className="section-title">Lire les sources de vérité</h2>
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
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
            >
              {label}
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
