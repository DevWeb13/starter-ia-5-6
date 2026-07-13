import type { Metadata } from "next";
import { Check, ExternalLink } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Méthode",
  description: "Le processus commun de Starter IA : cadrage, écrivain unique, vérification, revue et passage de relais.",
};

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";

const steps = [
  {
    title: "Choisir la configuration",
    text: "Partir de la mission : échange court, mission cloud, modification locale, pilotage depuis iPhone ou relais Work + Codex.",
  },
  {
    title: "Cadrer la mission",
    text: "Écrire le résultat attendu, les livrables, les contraintes, les preuves de réussite et les actions déjà autorisées.",
  },
  {
    title: "Préparer les ressources",
    text: "Rassembler les sources utiles, le brief, les prompts et les critères qualité sans transmettre de secret.",
  },
  {
    title: "Exécuter avec un seul écrivain",
    text: "Les sous-agents peuvent analyser ou revoir en lecture seule ; une seule personne ou un seul agent modifie le résultat.",
  },
  {
    title: "Vérifier le résultat",
    text: "Contrôler la cible réelle : fichiers, commandes, tests, liens et limites. Une relecture seule ne prouve pas le fonctionnement.",
  },
  {
    title: "Organiser le passage de relais",
    text: "Transmettre le résultat réel, les décisions, les sources, les contrôles et les blocages, puis revérifier dans le nouvel environnement.",
  },
];

const principles = [
  "Un brief vérifiable avant une mission complète.",
  "Au maximum trois sous-agents, tous en lecture seule.",
  "Un écrivain unique pour les fichiers, Git et les services externes.",
  "Deux cycles complets de revue, correction et nouvelle vérification au maximum.",
  "Aucune réussite annoncée sans contrôle sur la cible réelle.",
  "Les limites des outils, comptes et fonctions sont toujours explicites.",
];

export default function MethodPage() {
  return (
    <>
      <PageIntro
        eyebrow="Méthode"
        badge="Processus commun"
        title="Passer d’une mission cadrée à une livraison vérifiée."
        description="La méthode relie les cinq configurations sans recopier leurs procédures. Elle garde les responsabilités, les limites et les preuves visibles à chaque étape."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-labelledby="method-steps-title">
        <h2 id="method-steps-title" className="sr-only">Les six étapes de la méthode</h2>
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
            <p className="eyebrow">Principes stables</p>
            <h2 id="principles-title" className="section-title">Des responsabilités simples et vérifiables.</h2>
            <p className="text-muted-foreground">
              Ces principes restent valables dans Chat, Work, Codex local, Codex Remote et le mode hybride.
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
