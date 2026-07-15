import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createPublicPageMetadata } from "@/lib/site";

const contactUrl = "https://www.lareponsedev.fr/?besoin=starter-ia#contact";

const metadataTitle = "Accompagnement Starter IA à 390 € TTC";
const metadataDescription =
  "Une intervention humaine pour structurer votre usage de ChatGPT, Work et Codex, adapter le kit Starter IA et préparer une première mission vérifiable.";

export const metadata: Metadata = {
  ...createPublicPageMetadata({
    path: "/accompagnement",
    title: metadataTitle,
    description: metadataDescription,
    openGraphTitle: metadataTitle,
    openGraphDescription: metadataDescription,
  }),
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const problems = [
  "Le contexte utile reste dispersé dans plusieurs conversations.",
  "Les missions confiées à Codex sont trop grandes ou trop vagues.",
  "Les décisions importantes sont oubliées entre deux sessions.",
  "Les vérifications sont incomplètes avant une livraison ou une fusion.",
  "Reprendre le projet plus tard demande de reconstruire tout le raisonnement.",
];

const included = [
  "Analyser le projet, le dépôt et les outils réellement disponibles.",
  "Choisir une configuration réaliste entre ChatGPT, Work et Codex.",
  "Installer et adapter le kit Starter IA au contexte du projet.",
  "Créer ou adapter les fichiers de contexte réellement utiles.",
  "Préparer une première mission Codex petite et vérifiable.",
  "Définir les contrôles à effectuer avant une livraison ou une fusion.",
  "Expliquer comment poursuivre sans accompagnement.",
];

const audiences = [
  "Développeurs indépendants",
  "Freelances",
  "Petites agences",
  "Petites équipes",
  "Personnes qui commencent avec Codex",
  "Personnes dont le workflow IA est devenu confus",
];

const prerequisites = [
  "Un projet ou une idée suffisamment définie pour expliquer le résultat recherché.",
  "Idéalement un dépôt Git existant, ou un projet qu’il faut préparer.",
  "L’accès à vos propres outils et abonnements nécessaires.",
  "Votre disponibilité pour présenter l’objectif et valider les choix proposés.",
  "Aucun secret transmis directement dans les documents du dépôt.",
];

const steps = [
  "Lecture du projet et de l’existant",
  "Clarification du résultat attendu et des limites",
  "Choix du workflow adapté",
  "Installation ou adaptation des fichiers Starter IA",
  "Préparation d’une première mission",
  "Exécution des vérifications convenues lorsqu’elles entrent dans le périmètre",
  "Passage de relais avec les prochaines actions",
];

const deliverables = [
  "PROJECT.md",
  "STATUS.md",
  "AGENTS.md",
  "DECISIONS.md lorsqu’il est utile",
  "QUALITY.md lorsqu’il est utile",
  "Une configuration Codex locale prudente lorsqu’elle est utile",
  "Un prompt de première mission",
  "Une liste de contrôles",
  "Une synthèse des limites et des prochaines étapes",
];

const excluded = [
  "Le développement complet de votre produit.",
  "Un abonnement ChatGPT, GitHub, Vercel ou autre.",
  "Une disponibilité ou un support illimité.",
  "La gestion ou la conservation de secrets.",
  "Une fusion ou une mise en production automatique.",
  "Une garantie de revenu, de gain ou de productivité.",
  "Une affiliation ou un support officiel d’OpenAI.",
];

const retained = [
  "Votre dépôt et tous les fichiers qui y sont ajoutés.",
  "Les décisions prises et les limites documentées.",
  "Le workflow choisi pour votre environnement réel.",
  "La possibilité de poursuivre seul, sans dépendance artificielle à Starter IA ou à LaReponseDev.",
];

const faqs = [
  {
    question: "Starter IA est-il un logiciel qui exécute Codex automatiquement ?",
    answer:
      "Non. Starter IA fournit des ressources et un kit de fichiers. L’accompagnement est une intervention humaine ; vous gardez la maîtrise de vos outils et des actions exécutées dans votre dépôt.",
  },
  {
    question: "Dois-je utiliser tous les fichiers du kit ?",
    answer:
      "Non. Le noyau reste volontairement minimal et les fichiers facultatifs ne sont ajoutés que lorsqu’ils répondent à un besoin réel du projet.",
  },
  {
    question: "L’abonnement ChatGPT ou Codex est-il inclus ?",
    answer:
      "Non. Vous utilisez vos propres comptes, outils et abonnements. Le prix couvre uniquement l’intervention humaine décrite sur cette page.",
  },
  {
    question: "Est-ce que vous développez tout mon projet pour 390 € ?",
    answer:
      "Non. L’offre installe un cadre de travail, adapte les fichiers utiles et prépare une première mission. Le développement complet du produit n’est pas inclus.",
  },
  {
    question: "Pouvez-vous garantir un gain de temps ou de revenu ?",
    answer:
      "Non. L’intervention vise un workflow plus clair et vérifiable, mais aucun gain de temps, de productivité, de revenu ou résultat commercial ne peut être garanti.",
  },
  {
    question: "Starter IA est-il affilié à OpenAI ?",
    answer:
      "Non. Starter IA est un projet indépendant, non officiel et non affilié à OpenAI.",
  },
  {
    question: "Que se passe-t-il après l’accompagnement ?",
    answer:
      "Vous repartez avec votre dépôt, vos fichiers, vos décisions, votre workflow et une liste de prochaines actions. L’objectif est que vous puissiez continuer seul.",
  },
];

function ContactLink({ className }: { className?: string }) {
  return (
    <a
      href={contactUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ size: "lg", className })}
    >
      Demander l’accompagnement Starter IA
      <span className="sr-only"> sur le site LaReponseDev (ouvre un nouvel onglet)</span>
      <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
    </a>
  );
}

export default function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="Accompagnement facultatif"
        badge="Offre pilote"
        title="Installer un cadre durable pour travailler avec ChatGPT et Codex."
        description="Une intervention humaine et bornée pour clarifier votre workflow, adapter le kit Starter IA à votre dépôt et préparer une première mission vérifiable."
      />

      <div className="page-shell space-y-14 pb-14 sm:space-y-20 sm:pb-20">
        <Card className="border-primary/40">
          <CardContent className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl space-y-4">
              <p className="eyebrow">Installation et adaptation Starter IA</p>
              <h2 className="section-title">Offre pilote : 390 € TTC</h2>
              <p className="text-muted-foreground">
                Le site, les guides et le kit restent gratuits. Cette offre est un service humain ponctuel assuré par LaReponseDev, sans paiement ni réservation immédiate sur Starter IA.
              </p>
              <p className="text-sm text-muted-foreground">
                L’offre reste une hypothèse commerciale et n’est pas encore considérée comme validée par une première vente réelle.
              </p>
            </div>
            <ContactLink className="w-full lg:w-auto" />
          </CardContent>
        </Card>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start" aria-labelledby="problem-title">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow">Le problème rencontré</p>
            <h2 id="problem-title" className="section-title">Utiliser les bons outils ne suffit pas sans cadre durable.</h2>
            <p className="text-muted-foreground">
              Beaucoup de projets utilisent ChatGPT et Codex au fil des besoins, puis deviennent difficiles à comprendre, vérifier et reprendre.
            </p>
          </div>
          <ul className="grid gap-3">
            {problems.map((problem) => (
              <li key={problem} className="flex gap-3 rounded-xl border bg-card p-4">
                <Minus aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="lg:col-span-2 text-sm text-muted-foreground">
            Starter IA n’est pas une application autonome qui exécute Codex à votre place. Il fournit un cadre que vous utilisez avec vos propres outils.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="service-title">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Ce que fait l’accompagnement</p>
            <h2 id="service-title" className="section-title">Mettre en place le juste niveau de contexte, de règles et de contrôle.</h2>
            <p className="text-muted-foreground">
              L’intervention part de votre projet réel. Elle ne vous impose ni une technologie particulière, ni tous les fichiers du kit.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border bg-card p-4">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4 lg:grid-cols-2" aria-label="Public et prérequis">
          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="eyebrow">À qui l’offre s’adresse</p>
              <h2 className="mt-3 text-2xl font-semibold">Aux petits projets qui ont besoin d’un cadre net.</h2>
              <ul className="mt-5 space-y-3">
                {audiences.map((audience) => (
                  <li key={audience} className="flex gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-warning-surface p-4 text-sm text-warning">
                Ce service n’est pas adapté si vous attendez le développement complet de votre produit pour 390 € TTC.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="eyebrow">Les prérequis</p>
              <h2 className="mt-3 text-2xl font-semibold">Ce qu’il faut pour commencer.</h2>
              <ul className="mt-5 space-y-3">
                {prerequisites.map((prerequisite) => (
                  <li key={prerequisite} className="flex gap-3">
                    <ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6" aria-labelledby="process-title">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Le déroulement</p>
            <h2 id="process-title" className="section-title">Un parcours simple, du projet au passage de relais.</h2>
            <p className="text-muted-foreground">
              Les étapes suivent l’état réel du projet. Aucune durée ou disponibilité standard n’est promise.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-xl border bg-card p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="pt-1 font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6" aria-labelledby="deliverables-title">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Les livrables</p>
            <h2 id="deliverables-title" className="section-title">Des fichiers et prochaines actions adaptés au projet.</h2>
            <p className="text-muted-foreground">
              Selon le besoin, les livrables peuvent notamment comprendre les éléments suivants. Tous ne sont pas obligatoires dans tous les projets.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-3 rounded-xl bg-muted/60 p-4">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4 lg:grid-cols-2" aria-label="Limites et passage de relais">
          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="eyebrow">Ce qui n’est pas inclus</p>
              <h2 className="mt-3 text-2xl font-semibold">Des limites explicites avant de commencer.</h2>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {excluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Minus aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="eyebrow">Après l’intervention</p>
              <h2 className="mt-3 text-2xl font-semibold">Vous gardez la maîtrise du projet.</h2>
              <ul className="mt-5 space-y-3">
                {retained.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6" aria-labelledby="faq-title">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 id="faq-title" className="section-title">Comprendre l’offre avant de prendre contact.</h2>
          </div>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border bg-card">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group p-5 sm:p-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                  {question}
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="max-w-3xl pt-3 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-primary/40 bg-card p-5 sm:p-8" aria-labelledby="final-cta-title">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Offre pilote : 390 € TTC</p>
            <h2 id="final-cta-title" className="mt-3 section-title">Construire un cadre que vous pourrez continuer à utiliser seul.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              LaReponseDev est le prestataire et le point de contact commercial. Votre demande ouvre simplement la page de contact ; elle ne déclenche ni réservation ni paiement immédiat.
            </p>
            <ContactLink className="mt-6 w-full sm:w-auto" />
            <p className="mt-4 text-sm text-muted-foreground">
              Starter IA est un projet indépendant, non officiel et non affilié à OpenAI.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
