import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ressources open source",
  description: "Starter IA ne propose aucune offre payante intégrée dans son périmètre actuel.",
};

const plans = [
  {
    name: "Starter",
    description: "Pour choisir une configuration et cadrer une mission vérifiable.",
    features: ["Cinq guides", "Workflow", "Prompts", "Templates"],
  },
  {
    name: "Démonstration locale",
    description: "Pour explorer le parcours applicatif hérité sans service distant.",
    features: ["Projet local", "Six sections", "Exports Markdown et JSON", "Stockage navigateur"],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ressources"
        badge="Aucune offre payante"
        title="Des guides et templates open source, sans offre commerciale."
        description="Starter IA n’intègre actuellement ni paiement, ni compte, ni fournisseur IA."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-label="Ressources disponibles">
        <h2 className="sr-only">Ressources disponibles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.name === "Démonstration locale" ? "border-primary/50" : undefined}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3"><CardTitle className="text-2xl">{plan.name}</CardTitle><Badge>Disponible</Badge></div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div><p className="text-3xl font-bold tracking-tight">Open source</p><p className="text-sm text-muted-foreground">Aucun abonnement ni paiement intégré.</p></div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => <li key={feature} className="flex gap-2"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{feature}</li>)}
                </ul>
                <Link href={plan.name === "Starter" ? "/docs" : "/demo"} className={buttonVariants({ variant: plan.name === "Démonstration locale" ? "default" : "secondary", size: "lg", className: "w-full" })}>Voir ce qui existe déjà</Link>
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
