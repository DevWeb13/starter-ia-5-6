import {
  ArrowRight,
  BookOpen,
  Check,
  Cloud,
  FileCheck2,
  FlaskConical,
  GitMerge,
  Laptop,
  MessageSquareText,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const configurations = [
  { icon: MessageSquareText, name: "Chat", use: "Réfléchir, décider ou produire un brouillon court." },
  { icon: Cloud, name: "Work", use: "Conduire une mission complète dans un environnement cloud." },
  { icon: Laptop, name: "Codex local", use: "Inspecter, modifier et vérifier un dépôt depuis VS Code." },
  { icon: Smartphone, name: "Codex Remote", use: "Piloter depuis iPhone une session restée sur la machine locale." },
  { icon: GitMerge, name: "Work + Codex", use: "Préparer dans Work, puis implémenter et vérifier dans le dépôt." },
];

const workflow = [
  "Brief",
  "Analyse en lecture seule",
  "Plan",
  "Écrivain unique",
  "Vérification",
  "Revue",
  "Correction",
  "Livraison",
];

const resources = [
  ["Guides", "Choisir une configuration, connaître ses limites et préparer un relais."],
  ["Workflow et qualité", "Exécuter une mission avec des critères de livraison vérifiables."],
  ["Prompts et briefs", "Cadrer le résultat, la revue et les actions autorisées."],
  ["Formation et configuration Codex", "Apprendre le parcours et appliquer les règles locales du dépôt."],
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden="true" className="subtle-grid absolute inset-0 -z-10" />
        <div className="page-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="space-y-7">
            <Badge className="w-fit border-primary/40 bg-primary/10 text-foreground">
              Starter open source
            </Badge>
            <div className="space-y-5">
              <h1 className="display-title text-balance">Starter IA pour Chat, Work et Codex.</h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Cinq configurations et des ressources concrètes pour choisir le bon environnement
                selon la mission, puis obtenir un résultat vérifiable.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/docs" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
                Choisir une configuration
                <ArrowRight aria-hidden="true" className="size-5" />
              </Link>
              <Link
                href="/tarifs"
                className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}
              >
                Parcourir les ressources
              </Link>
            </div>
          </div>

          <Card className="border-primary/40 bg-card">
            <CardContent className="space-y-5 p-5 sm:p-6">
              <div className="space-y-2">
                <p className="eyebrow">Point de départ</p>
                <h2 className="text-2xl font-semibold tracking-tight">La mission détermine l’environnement.</h2>
                <p className="text-muted-foreground">
                  Réflexion courte, exécution cloud, dépôt local, pilotage mobile ou relais hybride :
                  commencez par le contexte le plus simple qui couvre le besoin.
                </p>
              </div>
              <ul className="space-y-3">
                {configurations.map(({ name, use }) => (
                  <li key={name} className="flex gap-3 border-t border-border pt-3 first:border-0 first:pt-0">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    <span><strong>{name}</strong> — {use}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="configurations-title">
        <div className="page-shell grid gap-9 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">Cinq configurations</p>
            <h2 id="configurations-title" className="section-title">Un rôle clair pour chaque environnement.</h2>
            <p className="text-muted-foreground">
              Le catalogue précise quand choisir chaque configuration, comment démarrer, ses ressources,
              sa limite principale et son passage de relais.
            </p>
            <Link href="/docs" className={buttonVariants({ variant: "secondary" })}>
              Ouvrir le catalogue
            </Link>
          </div>
          <ol className="divide-y divide-border rounded-2xl border border-border bg-card px-5 sm:px-6">
            {configurations.map(({ icon: Icon, name, use }, index) => (
              <li key={name} className="grid gap-3 py-5 sm:grid-cols-[auto_1fr]">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-mono text-xs font-bold text-primary">0{index + 1}</p>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-muted-foreground">{use}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-14 sm:py-20" aria-labelledby="workflow-title">
        <div className="page-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Workflow commun</p>
            <h2 id="workflow-title" className="section-title">Une séquence courte, quel que soit l’environnement.</h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <li key={step} className="flex min-h-20 gap-3 rounded-xl border border-border bg-card p-4">
                <span className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{step}</span>
              </li>
            ))}
          </ol>
          <Link href="/fonctionnalites" className={buttonVariants({ variant: "secondary" })}>
            Comprendre la méthode
          </Link>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="resources-title">
        <div className="page-shell space-y-9">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow"><BookOpen aria-hidden="true" className="size-4" /> Ressources principales</p>
            <h2 id="resources-title" className="section-title">Des fichiers à utiliser, pas une promesse abstraite.</h2>
          </div>
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {resources.map(([name, description]) => (
              <div key={name} className="border-t border-border pt-5">
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-1 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <Link href="/tarifs" className={buttonVariants({ variant: "secondary" })}>
            Voir l’index des ressources
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-14 sm:py-20" aria-labelledby="limits-title">
        <div className="reading-shell space-y-6">
          <div className="space-y-3">
            <p className="eyebrow"><FileCheck2 aria-hidden="true" className="size-4" /> Limites réelles</p>
            <h2 id="limits-title" className="section-title">Les outils disponibles dépendent du contexte.</h2>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Les fonctions de Chat, Work, Codex et Remote Control peuvent varier selon le compte et l’environnement.",
              "Work ne charge pas automatiquement AGENTS.md ni .codex/config.toml.",
              "Le dépôt n’intègre aucun fournisseur IA, compte, paiement ou stockage distant.",
              "Une action n’est considérée comme réussie qu’après vérification sur sa cible réelle.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="demo-title">
        <div className="page-shell rounded-2xl border border-border bg-card p-5 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow"><FlaskConical aria-hidden="true" className="size-4" /> Support secondaire</p>
            <h2 id="demo-title" className="section-title">Démonstration locale historique</h2>
            <p className="text-muted-foreground">
              Le parcours Next.js des premières phases reste disponible pour créer, modifier et exporter
              un projet déterministe dans ce navigateur. Ce n’est pas une véritable IA.
            </p>
          </div>
          <Link
            href="/demo"
            className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-6 w-full shrink-0 lg:mt-0 lg:w-auto" })}
          >
            Accéder à la démo locale
          </Link>
        </div>
      </section>
    </>
  );
}
