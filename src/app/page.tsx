import { ArrowRight, Check, Cloud, Code2, FileText, MessageSquareText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  absoluteSiteUrl,
  DEFAULT_OPEN_GRAPH_DESCRIPTION,
  DEFAULT_OPEN_GRAPH_TITLE,
} from "@/lib/site";

const homeDescription =
  "Guides, parcours pédagogique et templates pour mieux utiliser ChatGPT, Work et Codex.";
const homeUrl = absoluteSiteUrl("/");

export const metadata: Metadata = {
  description: homeDescription,
  openGraph: {
    title: DEFAULT_OPEN_GRAPH_TITLE,
    description: DEFAULT_OPEN_GRAPH_DESCRIPTION,
    type: "website",
    locale: "fr_FR",
  },
};

const roles = [
  {
    name: "ChatGPT",
    icon: MessageSquareText,
    description: "Réfléchir, cadrer, comparer, rédiger, auditer et contrôler avec les outils disponibles.",
    example: "Utile pour comprendre le problème, préparer une mission ou contrôler un résultat.",
  },
  {
    name: "Work",
    icon: Cloud,
    description: "Conduire une mission complète dans le cloud lorsque les fichiers et outils requis sont disponibles.",
    example: "Utile pour plusieurs livrables cloud ; toujours optionnel.",
  },
  {
    name: "Codex",
    icon: Code2,
    description: "Travailler directement dans un environnement de développement et un dépôt autorisé.",
    example: "Utile pour les fichiers, Git, les commandes, les tests et les boucles d'implémentation.",
  },
];

const workflow = [
  ["Comprendre le besoin", "Choisissez le minimum d'outils nécessaires et vérifiez les capacités réellement disponibles."],
  ["Travailler dans le bon environnement", "Utilisez ChatGPT, Work ou Codex selon la mission au lieu d'imposer un passage de relais par principe."],
  ["Contrôler le résultat réel", "Relisez les fichiers, preuves, tests, limites et décisions avant d'annoncer une réussite."],
];

const startingPoints = [
  ["Comprendre les fondamentaux", "Découvrez PROJECT.md, STATUS.md, AGENTS.md, la configuration Codex et le principe d'une mission vérifiable.", "/ressources", "Commencer simplement"],
  ["Utiliser Starter IA Qwik Core", "Partez du vrai template Qwik Core avec initialisation, qualité, configuration Codex et CI.", "/ressources", "Voir le Core"],
  ["Aller vers Advanced", "Comprenez ensuite agents, skills, hooks, permissions, gates et orchestration à partir du dépôt Advanced réel.", "/ressources", "Découvrir Advanced"],
];

export default function HomePage() {
  return (
    <>
      {/* Next 16 réduit les URL racine de Metadata à leur origin ; React place ces balises dans head. */}
      <link rel="canonical" href={homeUrl} />
      <meta property="og:url" content={homeUrl} />
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden="true" className="subtle-grid absolute inset-0 -z-10" />
        <div className="page-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="space-y-7">
            <Badge className="w-fit border-primary/40 bg-primary/10 text-foreground">Comprendre · Core · Advanced</Badge>
            <div className="space-y-5">
              <h1 className="display-title text-balance">Comprendre et structurer son workflow IA, du plus simple au plus avancé.</h1>
              <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Starter IA explique comment préparer un dépôt pour Codex, pourquoi chaque fichier existe et comment progresser ensuite vers les agents, skills, hooks et workflows Advanced.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/ressources" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
                Commencer le parcours
                <ArrowRight aria-hidden="true" className="size-5" />
              </Link>
              <Link href="/docs" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>
                Choisir mes outils
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Projet communautaire indépendant, non officiel et non affilié à OpenAI.</p>
          </div>

          <Card className="border-primary/40">
            <CardContent className="space-y-5 p-5 sm:p-6">
              <p className="eyebrow"><FileText aria-hidden="true" className="size-4" /> Progression</p>
              <h2 className="text-2xl font-semibold">Commencer simple, puis ajouter la complexité utile.</h2>
              <ul className="space-y-3">
                {["Fondamentaux — contexte, état, règles et permissions", "Core — Qwik, initialisation, qualité, tests et CI", "Advanced — agents, skills, hooks, gates et orchestration"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">Un seul template Core de référence est maintenu : DevWeb13/starter-ia-qwik.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="roles-title">
        <div className="page-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Qui fait quoi</p>
            <h2 id="roles-title" className="section-title">Trois environnements, des capacités qui peuvent se compléter.</h2>
            <p className="text-muted-foreground">Starter IA aide à choisir le minimum d'outils nécessaire et à vérifier ce qui est réellement disponible dans votre contexte.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {roles.map(({ name, icon: Icon, description, example }) => (
              <Card key={name}>
                <CardContent className="space-y-4 p-5 sm:p-6">
                  <Icon aria-hidden="true" className="size-6 text-primary" />
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p>{description}</p>
                  <p className="text-sm text-muted-foreground">{example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/35 py-14 sm:py-20" aria-labelledby="workflow-title">
        <div className="page-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Méthode</p>
            <h2 id="workflow-title" className="section-title">Choisir, exécuter, vérifier.</h2>
            <p className="text-muted-foreground">Le workflow dépend du besoin réel, pas d'une chaîne d'outils imposée.</p>
          </div>
          <ol className="grid gap-4 lg:grid-cols-3">
            {workflow.map(([title, description], index) => (
              <li key={title} className="rounded-2xl border bg-card p-5 sm:p-6">
                <p className="font-mono text-sm font-bold text-primary">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="start-title">
        <div className="page-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Par où commencer</p>
            <h2 id="start-title" className="section-title">Un parcours en trois niveaux.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {startingPoints.map(([title, description, href, label]) => (
              <Card key={title}>
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{description}</p>
                  <Link href={href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">
                    {label}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/35 py-14 sm:py-20" aria-labelledby="support-title">
        <div className="page-shell rounded-2xl border bg-card p-5 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Besoin d’un accompagnement</p>
            <h2 id="support-title" className="section-title">Adapter le workflow à votre projet.</h2>
            <p className="text-muted-foreground">
              Les ressources restent gratuites. Une installation personnalisée existe aussi au prix pilote de 390 € TTC, sans devenir la priorité du parcours pédagogique.
            </p>
          </div>
          <Link href="/accompagnement" className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-6 w-full shrink-0 lg:mt-0 lg:w-auto" })}>
            Découvrir l’accompagnement
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </section>

      <section className="border-y bg-muted/35 py-14 sm:py-20" aria-labelledby="history-title">
        <div className="page-shell rounded-2xl border bg-card p-5 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Démonstration historique conservée</p>
            <h2 id="history-title" className="section-title">Explorer un parcours local en six phases.</h2>
            <p className="text-muted-foreground">Cette démonstration déterministe reste disponible. Elle stocke les projets dans le navigateur et n’appelle automatiquement ni ChatGPT ni Codex.</p>
          </div>
          <Link href="/demo" className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-6 w-full shrink-0 lg:mt-0 lg:w-auto" })}>
            Ouvrir la démonstration
          </Link>
        </div>
      </section>

      <section className="py-10" aria-label="Code source">
        <div className="reading-shell text-sm text-muted-foreground">
          Les ressources sont versionnées publiquement. <a href="https://github.com/DevWeb13/starter-ia-5-6" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">Consulter le dépôt GitHub<span className="sr-only"> (ouvre un nouvel onglet)</span></a>.
        </div>
      </section>
    </>
  );
}
