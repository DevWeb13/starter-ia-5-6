import type { Metadata } from "next";
import { Check, ExternalLink, FileText } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Card, CardContent } from "@/components/ui/card";
import { createPublicPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPublicPageMetadata({
  path: "/ressources",
  title: "Parcours, templates et ressources",
  description: "Comprendre les fondamentaux, utiliser le Starter IA Qwik Core puis progresser vers Advanced.",
});

const githubRoot = "https://github.com/DevWeb13/starter-ia-5-6/blob/main";
const coreRoot = "https://github.com/DevWeb13/starter-ia-qwik";
const advancedRoot = "https://github.com/DevWeb13/starter-ia-qwik-advanced";

const fundamentals = [
  ["PROJECT.md", "Le but durable du projet et ses limites."],
  ["STATUS.md", "L'état réel, les problèmes connus et la prochaine action."],
  ["AGENTS.md", "Les règles permanentes que Codex doit respecter dans le dépôt."],
  [".codex/config.toml", "Les permissions et le sandbox partagés au niveau du projet."],
];

const coreFiles = [
  ["AGENTS.md", "Règles permanentes et ordre de lecture du dépôt."],
  ["PROJECT.md", "Modèle d'identité, problème, utilisateurs, résultat et contraintes."],
  ["STATUS.md", "État vérifié et prochaine action unique."],
  ["QUALITY.md", "Définition de fini, commandes obligatoires, accessibilité et sécurité."],
  ["prompts/INITIALIZE.md", "Point d'entrée qui transforme le template générique en projet précis."],
  [".codex/config.toml", "Permissions prudentes et réseau désactivé par défaut."],
  [".github/workflows/ci.yml", "Contrôle indépendant avec formatage, lint, TypeScript, tests, build et Playwright."],
];

const resources = [
  ["course/README.md", "Architecture du parcours Fondamentaux → Core → Advanced."],
  ["course/FORMATION-EXPRESS.md", "Introduction rapide avant le cours Core détaillé."],
  ["guides/configurations/README.md", "Comparer ChatGPT, Work, Codex local, Codex Remote et Work + Codex."],
  ["templates/BRIEF.md", "Transformer une demande en livrables, contraintes et critères observables."],
  ["prompts/REVIEW.md", "Demander une revue indépendante, priorisée et en lecture seule."],
  ["WORKFLOW.md", "Suivre le processus interne du brief à la livraison vérifiée."],
];

function ExternalResource({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <li className="grid gap-3 p-5 sm:p-6 lg:grid-cols-[minmax(15rem,0.8fr)_1.2fr_auto] lg:items-start">
      <div className="flex min-w-0 gap-3">
        <FileText aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
        <code className="break-all font-mono text-sm font-semibold text-foreground">{label}</code>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <a
        href={href}
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
        eyebrow="Apprendre et utiliser"
        badge="Fondamentaux · Core · Advanced"
        title="Commencer simplement, puis comprendre ce que vous ajoutez."
        description="Starter IA sépare l'apprentissage du template technique : le site explique, starter-ia-qwik fournit le Core réel et starter-ia-qwik-advanced fournit la variante Advanced."
      />

      <section className="page-shell space-y-12 pb-14 sm:pb-20">
        <div className="space-y-5" aria-labelledby="fundamentals-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Niveau 1</p>
            <h2 id="fundamentals-title" className="section-title">Comprendre quatre fichiers avant de tout copier.</h2>
            <p className="text-muted-foreground">Ces fondamentaux sont un niveau pédagogique, pas un second template. Ils expliquent le contexte, l'état, les règles et les permissions avant le Core complet.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {fundamentals.map(([path, description]) => (
              <Card key={path}>
                <CardContent className="p-5 sm:p-6">
                  <Check aria-hidden="true" className="size-5 text-success" />
                  <code className="mt-4 block break-all font-mono text-sm font-semibold">{path}</code>
                  <p className="mt-3 text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <a href={`${githubRoot}/course/README.md`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
            Voir l'architecture du parcours
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="space-y-5" aria-labelledby="core-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Niveau 2</p>
            <h2 id="core-title" className="section-title">Starter IA Qwik Core : le vrai template de référence.</h2>
            <p className="text-muted-foreground">Le Core ajoute l'initialisation, la qualité, la CI, les tests et la fondation Qwik. Le site n'en maintient plus une copie concurrente.</p>
          </div>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {coreFiles.map(([path, description]) => (
              <ExternalResource key={path} href={`${coreRoot}/blob/main/${path}`} label={path} description={description} />
            ))}
          </ul>
          <a href={coreRoot} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
            Ouvrir le dépôt Core complet
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="space-y-5" aria-labelledby="advanced-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Niveau 3</p>
            <h2 id="advanced-title" className="section-title">Advanced : comprendre avant d'orchestrer.</h2>
            <p className="text-muted-foreground">La variante Advanced ajoute agents, skills, hooks, permissions, gates humains et artefacts. Sa documentation détaillée sera publiée après le parcours Core.</p>
          </div>
          <Card>
            <CardContent className="p-5 sm:p-6">
              <p>Le dépôt Advanced est déjà la source technique de vérité. Le chantier pédagogique expliquera d'abord les concepts, puis les 14 agents, les 14 skills et leurs interactions.</p>
              <a href={advancedRoot} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
                Ouvrir Starter IA Qwik Advanced
                <span className="sr-only"> (ouvre un nouvel onglet)</span>
                <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5" aria-labelledby="resources-title">
          <div className="max-w-3xl space-y-2">
            <p className="eyebrow">Ressources complémentaires</p>
            <h2 id="resources-title" className="section-title">Guides, prompts et méthode.</h2>
          </div>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {resources.map(([path, description]) => (
              <ExternalResource key={path} href={`${githubRoot}/${path}`} label={path} description={description} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
