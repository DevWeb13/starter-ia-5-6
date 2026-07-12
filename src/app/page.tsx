import {
  ArrowRight,
  Blocks,
  Check,
  Compass,
  FlaskConical,
  Layers3,
  MessageSquareText,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";

import { DemoLauncher } from "@/components/demo-launcher";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Target,
    title: "Clarifier la valeur",
    text: "Passer d’une intuition à une promesse, une cible et un usage principal que l’on peut réellement tester.",
  },
  {
    icon: Layers3,
    title: "Réduire le premier MVP",
    text: "Séparer l’indispensable des idées séduisantes pour obtenir un périmètre construit autour d’un seul parcours.",
  },
  {
    icon: Route,
    title: "Décider de la suite",
    text: "Relier produit, technique et acquisition dans une liste d’actions ordonnée, sans masquer les hypothèses.",
  },
];

const steps = [
  ["01", "Décrivez le problème", "Expliquez la cible, la friction actuelle ou le résultat que vous voulez rendre possible."],
  ["02", "Obtenez une structure", "La démonstration répartit l’idée en six angles complémentaires, sans appel à une véritable IA."],
  ["03", "Validez les hypothèses", "Transformez le plan en entretiens, prototype et critères observables avant de construire davantage."],
];

const faqs = [
  {
    question: "Cette version utilise-t-elle vraiment une IA ?",
    answer:
      "Non. La démonstration produit localement un scénario déterministe à partir de votre texte. Aucun fournisseur IA n’est intégré ni prévu dans le périmètre actuel.",
  },
  {
    question: "Mon idée est-elle enregistrée ?",
    answer:
      "Non dans cette première version : le résultat vit uniquement dans l’état de la page et disparaît au rechargement. Aucun compte ni base de données n’est configuré.",
  },
  {
    question: "Starter IA propose-t-il une offre payante ?",
    answer:
      "Non. Le starter et ses ressources sont open source. Il n’existe ni inscription, ni paiement, ni souscription dans le périmètre actuel.",
  },
  {
    question: "Quel est le lien avec Starter IA 5.6 ?",
    answer:
      "Starter IA 5.6 est le starter open source. Cette application locale est un support démonstratif hérité des premières phases du dépôt.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden="true" className="subtle-grid absolute inset-0 -z-10" />
        <div className="page-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="space-y-7">
            <Badge className="w-fit border-primary/40 bg-primary/10 text-foreground">
              <Sparkles aria-hidden="true" className="mr-1 size-3.5 text-primary" />
              Démonstration locale historique
            </Badge>
            <div className="space-y-5">
              <h1 className="display-title text-balance">
                De l’idée au plan que votre équipe IA peut exécuter.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                AI Project Launcher aide les indépendants et petites équipes à clarifier une idée de
                produit, cadrer le MVP et ordonner les décisions techniques et commerciales.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/demo" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
                Essayer la démo locale
                <ArrowRight aria-hidden="true" className="size-5" />
              </Link>
              <a
                href="#fonctionnement"
                className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}
              >
                Voir comment ça marche
              </a>
            </div>
            <p className="flex max-w-xl gap-2 text-sm text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-success" />
              Cette version n’appelle aucune IA, ne crée aucun compte et ne demande aucun paiement.
            </p>
          </div>

          <Card className="relative overflow-hidden border-primary/40 bg-card">
            <div className="border-b border-border bg-muted/60 px-5 py-3 font-mono text-xs text-muted-foreground">
              APERÇU · PLAN DE LANCEMENT
            </div>
            <CardContent className="space-y-5 p-5 sm:p-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Idée structurée localement</p>
                <p className="text-xl font-semibold tracking-tight">
                  Aider un indépendant à transformer ses notes en offre claire.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Valeur & cible", "MVP priorisé", "Plan technique", "Premiers canaux"].map((item) => (
                  <div key={item} className="flex min-h-14 items-center gap-3 rounded-xl border border-border bg-background p-3 text-sm font-medium">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-success" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-warning bg-warning-surface p-3 text-sm">
                <p className="font-semibold text-warning">Hypothèses à valider</p>
                <p className="text-muted-foreground">Le plan structure la discussion ; il ne remplace pas les entretiens terrain.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="benefices-title">
        <div className="page-shell space-y-9">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Ce que vous obtenez</p>
            <h2 id="benefices-title" className="section-title text-balance">Un cadrage assez clair pour agir, assez honnête pour évoluer.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <CardHeader>
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="border-y border-border bg-muted/35 py-14 scroll-mt-24 sm:py-20" aria-labelledby="fonctionnement-title">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">Fonctionnement</p>
            <h2 id="fonctionnement-title" className="section-title">Trois étapes, aucune boîte noire dans cette démo.</h2>
            <p className="text-muted-foreground">Le starter documente désormais cinq configurations concrètes. Cette démonstration locale reste disponible comme exemple testable, sans service distant.</p>
          </div>
          <ol className="grid gap-4">
            {steps.map(([number, title, text]) => (
              <li key={number} className="grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                <span className="font-mono text-sm font-bold text-primary">{number}</span>
                <div><h3 className="font-semibold">{title}</h3><p className="text-muted-foreground">{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="preuve-title">
        <div className="page-shell space-y-9">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Preuve par le produit</p>
            <h2 id="preuve-title" className="section-title text-balance">Testez le parcours maintenant, sans compte et sans fausse promesse IA.</h2>
            <p className="text-muted-foreground">La sortie ci-dessous est locale et prédéfinie. Elle permet d’évaluer l’ergonomie et la structure sans appel externe.</p>
          </div>
          <DemoLauncher />
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-14 sm:py-20" aria-labelledby="offre-title">
        <div className="page-shell space-y-9">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Ressources open source</p>
            <h2 id="offre-title" className="section-title">Choisir une configuration, puis appliquer un workflow vérifiable.</h2>
            <p className="text-muted-foreground">Les guides et templates aident à passer de Chat à Work ou Codex sans mélanger leurs rôles.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Configurations", icon: Compass, text: "Pour choisir entre Chat, Work, Codex local, Codex Remote et le mode hybride.", items: ["Cinq guides courts", "Limites explicites", "Passages de relais"] },
              { name: "Workflow et templates", icon: Blocks, text: "Pour cadrer une mission, garder un seul écrivain et vérifier le résultat.", items: ["Brief réutilisable", "Checklist qualité", "Prompts et formation"] },
            ].map(({ name, icon: Icon, text, items }) => (
              <Card key={name} className={cn(name === "Workflow et templates" && "border-primary/50")}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3"><Icon aria-hidden="true" className="size-6 text-primary" /><Badge>Open source</Badge></div>
                  <CardTitle className="text-2xl">{name}</CardTitle>
                  <p className="text-muted-foreground">{text}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold">Sans offre payante intégrée</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {items.map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{item}</li>)}
                  </ul>
                  <Link href="/docs" className={buttonVariants({ variant: "secondary", className: "w-full" })}>Voir la documentation</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="faq-title">
        <div className="reading-shell space-y-8">
          <div className="space-y-3"><p className="eyebrow">Questions fréquentes</p><h2 id="faq-title" className="section-title">Ce que cette première version fait — et ne fait pas.</h2></div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card px-5 sm:px-6">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  {question}<MessageSquareText aria-hidden="true" className="size-5 shrink-0 text-primary" />
                </summary>
                <p className="pb-2 pr-6 pt-2 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="page-shell rounded-2xl border border-primary/40 bg-card p-5 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl space-y-3"><p className="eyebrow"><FlaskConical aria-hidden="true" className="size-4" /> Première fondation</p><h2 className="section-title">Une idée mérite mieux qu’une liste de fonctionnalités.</h2><p className="text-muted-foreground">Commencez par un plan clair, puis challengez chaque hypothèse avec de vraies personnes.</p></div>
          <Link href="/demo" className={buttonVariants({ size: "lg", className: "mt-6 w-full shrink-0 lg:mt-0 lg:w-auto" })}>Lancer la démo locale<ArrowRight aria-hidden="true" className="size-5" /></Link>
        </div>
      </section>
    </>
  );
}
