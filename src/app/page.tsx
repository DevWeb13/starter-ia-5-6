import { ArrowRight, Check, Cloud, Code2, FileText, MessageSquareText } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    name: "ChatGPT",
    icon: MessageSquareText,
    description: "Réfléchir, cadrer, comparer, rédiger et contrôler un résultat.",
    example: "Commencez ici pour transformer une idée en mission claire.",
  },
  {
    name: "Work",
    icon: Cloud,
    description: "Conduire une mission complète dans le cloud lorsque les fichiers et outils requis sont disponibles.",
    example: "Utile pour plusieurs livrables ; facultatif pour un projet de code local.",
  },
  {
    name: "Codex",
    icon: Code2,
    description: "Inspecter, modifier et vérifier un dépôt dans le périmètre autorisé.",
    example: "Utilisez-le pour agir sur les fichiers, Git et les tests.",
  },
];

const workflow = [
  ["Cadrer dans ChatGPT", "Précisez le besoin, le résultat, les limites et les critères de réussite."],
  ["Exécuter dans Codex", "Travaillez sur une branche dédiée avec le contexte et les règles du dépôt."],
  ["Contrôler dans ChatGPT", "Relisez le résultat réel, les preuves, les limites et les décisions restantes."],
];

const startingPoints = [
  ["Choisir une configuration", "Comparez ChatGPT, Work, Codex local, Codex Remote et le mode hybride.", "/docs", "Comparer les configurations"],
  ["Préparer un dépôt", "Copiez quatre fichiers minimaux, puis ajoutez seulement les options utiles.", "/ressources", "Voir le kit de démarrage"],
  ["Appliquer la méthode", "Suivez un passage de relais simple, sans automatisation ni promesse cachée.", "/fonctionnalites", "Lire la méthode"],
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden="true" className="subtle-grid absolute inset-0 -z-10" />
        <div className="page-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="space-y-7">
            <Badge className="w-fit border-primary/40 bg-primary/10 text-foreground">Guides · kit · prompts</Badge>
            <div className="space-y-5">
              <h1 className="display-title text-balance">Mieux utiliser ChatGPT, Work et Codex, sans complexité inutile.</h1>
              <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Starter IA rassemble des explications accessibles, des configurations conseillées et un petit kit de fichiers prêts à copier pour vos projets.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/docs" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
                Choisir ma configuration
                <ArrowRight aria-hidden="true" className="size-5" />
              </Link>
              <Link href="/ressources" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>
                Voir le kit et les prompts
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Aucun compte, service IA, paiement ou stockage distant n’est intégré.</p>
          </div>

          <Card className="border-primary/40">
            <CardContent className="space-y-5 p-5 sm:p-6">
              <p className="eyebrow"><FileText aria-hidden="true" className="size-4" /> Commencer petit</p>
              <h2 className="text-2xl font-semibold">Quatre fichiers suffisent pour démarrer.</h2>
              <ul className="space-y-3">
                {["PROJECT.md — le but et les limites", "STATUS.md — l’état réel", "AGENTS.md — les règles pour Codex", "FIRST-MISSION.md — la première action vérifiable"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">Décisions, critères qualité et configuration Codex restent facultatifs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="roles-title">
        <div className="page-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Qui fait quoi</p>
            <h2 id="roles-title" className="section-title">Trois outils, trois rôles simples.</h2>
            <p className="text-muted-foreground">Starter IA vous aide à les choisir et à préparer le passage de relais. Il ne les pilote pas automatiquement.</p>
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
            <p className="eyebrow">Méthode conseillée</p>
            <h2 id="workflow-title" className="section-title">Réfléchir, exécuter, contrôler.</h2>
            <p className="text-muted-foreground">Work peut compléter le cadrage ou le contrôle lorsque la mission cloud le justifie.</p>
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
            <h2 id="start-title" className="section-title">Choisissez votre besoin immédiat.</h2>
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
            <h2 id="support-title" className="section-title">Installer le workflow avec votre projet.</h2>
            <p className="text-muted-foreground">
              Les guides et le kit restent gratuits. Si vous préférez être accompagné, une installation personnalisée est proposée au prix pilote de 390 € TTC.
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
