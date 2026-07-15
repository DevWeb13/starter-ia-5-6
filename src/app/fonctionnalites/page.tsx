import type { Metadata } from "next";
import { Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";
import { createPublicPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPublicPageMetadata({
  path: "/fonctionnalites",
  title: "Méthode ChatGPT et Codex",
  description: "Une méthode simple pour cadrer dans ChatGPT, exécuter dans Codex et contrôler le résultat dans ChatGPT.",
});

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const steps = [
  {
    title: "Réfléchir et cadrer dans ChatGPT",
    text: "Décrivez le besoin, le résultat attendu, les contraintes et les critères de réussite. Enregistrez les décisions utiles dans les fichiers du projet.",
    output: "Un brief court et vérifiable.",
  },
  {
    title: "Exécuter dans Codex",
    text: "Ouvrez le dépôt, vérifiez les règles et l’état Git, puis réalisez une modification ciblée sur une branche dédiée avec les contrôles pertinents.",
    output: "Un diff limité et des preuves de vérification.",
  },
  {
    title: "Contrôler dans ChatGPT",
    text: "Relisez le résultat réel, les tests, les limites et les affirmations. Corrigez les problèmes bloquants ou importants avant la livraison.",
    output: "Une décision claire : valide, à corriger ou bloqué.",
  },
];

const principles = [
  "Une réponse copiée n’est pas une action exécutée.",
  "Le dépôt, ses règles et son état sont vérifiés avant d’écrire.",
  "Un seul agent modifie les fichiers ; les reviewers restent en lecture seule.",
  "Les contrôles sont adaptés au changement et rapportés avec leur résultat réel.",
  "Fusion, production, suppression, paiement, secret ou publication exigent un accord explicite.",
  "Work peut compléter le parcours, mais le passage de relais reste manuel.",
];

export default function MethodPage() {
  return (
    <>
      <PageIntro
        eyebrow="Méthode"
        badge="Trois temps"
        title="Cadrer, exécuter, contrôler."
        description="Un parcours simple pour utiliser ChatGPT et Codex ensemble sans leur attribuer des actions qu’ils n’ont pas réalisées."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-labelledby="method-steps-title">
        <h2 id="method-steps-title" className="sr-only">Les trois temps de la méthode</h2>
        <ol className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <span className="font-mono text-sm font-bold text-primary">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.text}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm"><strong>Résultat :</strong> {step.output}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-muted/35 py-14 sm:py-20" aria-labelledby="principles-title">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow">Garde-fous</p>
            <h2 id="principles-title" className="section-title">Savoir ce qui a vraiment été fait.</h2>
            <p className="text-muted-foreground">Starter IA prépare des passages de relais explicites. Il n’exécute ni ChatGPT, ni Work, ni Codex.</p>
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

      <section className="reading-shell py-14 sm:py-20" aria-labelledby="work-title">
        <p className="eyebrow">Et Work ?</p>
        <h2 id="work-title" className="section-title">Une option pour les missions cloud complètes.</h2>
        <p className="mt-3 text-muted-foreground">Work peut préparer plusieurs livrables, coordonner des outils disponibles ou effectuer le contrôle final. Il ne charge pas automatiquement les règles locales du dépôt : transmettez le brief, les décisions et les limites à Codex.</p>
      </section>

      <section className="border-t border-border py-14 sm:py-20" aria-labelledby="sources-title">
        <div className="reading-shell">
          <h2 id="sources-title" className="section-title">Copier la méthode</h2>
          <p className="mt-3 text-muted-foreground">Le kit fournit une première mission. WORKFLOW.md décrit le processus interne complet et REVIEW.md cadre la revue indépendante.</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {[
              ["Ouvrir FIRST-MISSION.md", "templates/starter-kit/prompts/FIRST-MISSION.md"],
              ["Lire WORKFLOW.md", "WORKFLOW.md"],
              ["Lire REVIEW.md", "prompts/REVIEW.md"],
            ].map(([label, path]) => (
              <a key={path} href={`${githubRoot}/${path}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
                {label}
                <span className="sr-only"> (ouvre un nouvel onglet)</span>
                <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
