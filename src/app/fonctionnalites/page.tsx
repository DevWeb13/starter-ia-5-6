import type { Metadata } from "next";
import { Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";
import { createPublicPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPublicPageMetadata({
  path: "/fonctionnalites",
  title: "Méthode Starter IA",
  description: "Choisir le minimum d'outils nécessaire, travailler dans le bon environnement et vérifier le résultat réel.",
});

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";
const coreRoot = "https://github.com/DevWeb13/starter-ia-qwik";

const steps = [
  {
    title: "Comprendre le besoin et les capacités disponibles",
    text: "Décrivez le résultat attendu, les contraintes et les critères de réussite, puis vérifiez quels outils et connecteurs sont réellement disponibles avant d'imposer un workflow.",
    output: "Une mission claire et un environnement choisi pour une raison explicite.",
  },
  {
    title: "Travailler dans le bon environnement",
    text: "Utilisez ChatGPT, Work ou Codex selon le besoin. Pour un projet Qwik préparé pour Codex, le Starter IA Qwik Core fournit une fondation vérifiable et initialisable.",
    output: "Des livrables enregistrés dans la bonne cible avec un périmètre borné.",
  },
  {
    title: "Vérifier puis contrôler",
    text: "Relisez les fichiers, les tests, la CI, les limites et les affirmations. Corrigez les problèmes bloquants ou importants avant de présenter la mission comme réussie.",
    output: "Une décision claire : valide, à corriger ou bloqué.",
  },
];

const principles = [
  "Une réponse copiée n’est pas une action exécutée.",
  "Une capacité non vérifiée n'est pas présentée comme disponible.",
  "Le dépôt, ses règles et son état sont vérifiés avant une modification importante.",
  "Un seul écrivain modifie un même périmètre ; les reviewers restent indépendants.",
  "Les contrôles sont adaptés au changement et rapportés avec leur résultat réel.",
  "Fusion, production, suppression, paiement, secret ou publication exigent un accord explicite.",
  "La complexité Advanced n'est ajoutée que lorsqu'un besoin réel la justifie.",
];

export default function MethodPage() {
  return (
    <>
      <PageIntro
        eyebrow="Méthode"
        badge="Choisir · travailler · vérifier"
        title="Utiliser le minimum d'outils nécessaire, sans autonomie aveugle."
        description="Starter IA ne force plus une chaîne d'outils unique : le workflow dépend du besoin, de l'environnement et des capacités réellement disponibles."
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
            <p className="text-muted-foreground">Starter IA distingue toujours recommandation, exécution réelle, preuve et décision humaine.</p>
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

      <section className="reading-shell py-14 sm:py-20" aria-labelledby="core-title">
        <p className="eyebrow">Apprendre la méthode sur un vrai template</p>
        <h2 id="core-title" className="section-title">Starter IA Qwik Core est la référence technique.</h2>
        <p className="mt-3 text-muted-foreground">Le Core fournit les documents projet, l'initialisation, les permissions Codex, les critères qualité, les tests et la CI. La documentation de Starter IA explique pourquoi chaque pièce existe au lieu d'en maintenir une copie divergente.</p>
        <a href={coreRoot} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
          Ouvrir le dépôt Core
          <span className="sr-only"> (ouvre un nouvel onglet)</span>
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
      </section>

      <section className="border-t border-border py-14 sm:py-20" aria-labelledby="sources-title">
        <div className="reading-shell">
          <h2 id="sources-title" className="section-title">Continuer le parcours</h2>
          <p className="mt-3 text-muted-foreground">Commencez par l'architecture pédagogique, utilisez le modèle de brief si nécessaire, puis appuyez-vous sur la revue indépendante pour contrôler un résultat.</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {[
              ["Lire le parcours", "course/README.md"],
              ["Utiliser le brief", "templates/BRIEF.md"],
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
