import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tarifs envisagés",
  description: "Direction envisagée pour les futures offres Free et Pro d’AI Project Launcher.",
};

const plans = [
  {
    name: "Free",
    description: "Pour cadrer une idée et tester le format avant de créer un compte.",
    features: ["Démonstration locale", "Plan en six sections", "Un projet actif envisagé", "Export à venir"],
  },
  {
    name: "Pro",
    description: "Pour approfondir les hypothèses, conserver les décisions et collaborer.",
    features: ["Génération IA prévue", "Projets persistants prévus", "Historique et exports prévus", "Collaboration prévue"],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tarifs"
        badge="Offre en préparation"
        title="Une direction gratuite et Pro, sans faux prix ni faux checkout."
        description="Les formules ci-dessous servent à cadrer le futur produit. Elles ne sont pas encore disponibles et les prix ne sont pas définis."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-label="Offres envisagées">
        <h2 className="sr-only">Offres envisagées</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.name === "Pro" ? "border-primary/50" : undefined}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3"><CardTitle className="text-2xl">{plan.name}</CardTitle><Badge>Prévu</Badge></div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div><p className="text-3xl font-bold tracking-tight">Prix à confirmer</p><p className="text-sm text-muted-foreground">Aucun abonnement ni paiement dans cette version.</p></div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => <li key={feature} className="flex gap-2"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{feature}</li>)}
                </ul>
                <Link href="/demo" className={buttonVariants({ variant: plan.name === "Pro" ? "default" : "secondary", size: "lg", className: "w-full" })}>Tester ce qui existe déjà</Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-5 sm:p-6"><h2 className="text-xl font-semibold">Limites actuelles</h2><p className="text-muted-foreground">Ces éléments ne font pas partie de la fondation publiée.</p></div>
          <ul className="grid gap-px bg-border sm:grid-cols-2">
            {["Pas de compte", "Pas de véritable IA", "Pas de base de données", "Pas de paiement"].map((item) => (
              <li key={item} className="flex min-h-14 items-center gap-3 bg-card p-4"><Minus aria-hidden="true" className="size-4 text-warning" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
