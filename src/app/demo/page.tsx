import type { Metadata } from "next";
import Link from "next/link";

import { DemoLauncher } from "@/components/demo-launcher";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Lancer un projet",
  description: "Décrivez votre projet et obtenez localement un parcours déterministe en six phases, sans appel IA ni compte.",
};

export default function DemoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Lancer un projet"
        badge="Moteur local déterministe"
        title="Quel projet voulez-vous lancer ?"
        description="Décrivez l’objectif, les contraintes et votre environnement. Starter IA prépare immédiatement six phases, sans appel IA, compte ni synchronisation."
      />
      <section className="page-shell pb-14 sm:pb-20" aria-label="Création d’un projet local">
        <div className="mb-5 flex justify-end">
          <Link href="/dashboard" className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}>
            Voir mes projets
          </Link>
        </div>
        <DemoLauncher />
      </section>
    </>
  );
}
