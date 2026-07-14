import type { Metadata } from "next";
import { ArrowUpRight, Check, Minus } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accompagnement ChatGPT + Codex",
  description:
    "Une offre pilote d’installation et d’adaptation humaine de Starter IA dans votre dépôt, à 390 € TTC.",
};

const included = [
  "Analyse du projet, du dépôt et des outils disponibles.",
  "Choix d’une configuration ChatGPT, Work ou Codex réaliste.",
  "Installation et adaptation du kit minimal dans un dépôt.",
  "Adaptation de PROJECT.md, STATUS.md et AGENTS.md.",
  "Préparation d’une première mission Codex petite et vérifiable.",
  "Définition des contrôles et du passage de relais.",
  "Synthèse des limites et des prochaines actions.",
];

const excluded = [
  "Le développement complet de votre produit.",
  "Un abonnement ChatGPT, GitHub, Vercel ou autre.",
  "Une disponibilité illimitée.",
  "La gestion de secrets.",
  "Une fusion ou une mise en production automatique.",
  "Une promesse de gain, de revenu ou de productivité chiffrée.",
  "Une affiliation à OpenAI.",
];

const audiences = [
  "Développeurs indépendants",
  "Freelances",
  "Petites agences",
  "Petites équipes qui commencent avec Codex ou dont le workflow est devenu confus",
];

export default function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="Accompagnement facultatif"
        badge="Offre pilote"
        title="Installer un workflow ChatGPT + Codex adapté à votre projet"
        description="Une intervention humaine et bornée pour installer Starter IA dans votre dépôt, choisir une configuration réaliste et préparer une première mission vérifiable."
      />

      <section className="page-shell space-y-10 pb-14 sm:pb-20">
        <Card className="border-primary/40">
          <CardContent className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl space-y-4">
              <p className="eyebrow">Installation et adaptation Starter IA</p>
              <h2 className="section-title">390 € TTC</h2>
              <p className="text-muted-foreground">
                Ce prix est celui de l’offre pilote. L’accompagnement reste un service humain ponctuel : il n’ajoute ni compte, ni paiement intégré, ni automatisation à Starter IA.
              </p>
            </div>
            <a
              href="https://www.lareponsedev.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", className: "w-full lg:w-auto" })}
            >
              Demander l’accompagnement pilote
              <span className="sr-only"> sur le site LaReponseDev (ouvre un nouvel onglet)</span>
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </a>
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="eyebrow">Ce qui est inclus</p>
              <h2 className="mt-3 text-2xl font-semibold">Un démarrage adapté et vérifiable.</h2>
              <ul className="mt-5 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="eyebrow">Ce qui n’est pas inclus</p>
              <h2 className="mt-3 text-2xl font-semibold">Des limites claires dès le départ.</h2>
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
        </div>

        <div className="rounded-2xl border bg-muted/35 p-5 sm:p-8" aria-labelledby="audience-title">
          <p className="eyebrow">Pour qui</p>
          <h2 id="audience-title" className="mt-3 section-title">Pour les petits projets qui ont besoin d’un cadre net.</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <li key={audience} className="flex gap-3">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            Les guides et le kit restent gratuits. Cette offre est une option pour les personnes qui préfèrent une installation accompagnée. Elle n’est pas encore considérée comme validée par une vente réelle.
          </p>
        </div>
      </section>
    </>
  );
}
