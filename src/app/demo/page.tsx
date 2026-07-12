import type { Metadata } from "next";
import Link from "next/link";

import { DemoLauncher } from "@/components/demo-launcher";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Démonstration locale historique",
  description: "Créez et exportez un projet déterministe stocké dans ce navigateur, sans véritable IA, compte ni synchronisation.",
};

export default function DemoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Support secondaire"
        badge="100 % locale"
        title="Démonstration locale historique"
        description="Saisissez une idée : six sections déterministes sont créées, puis restent éditables dans ce navigateur. Aucune véritable IA, aucun compte et aucune synchronisation ne sont disponibles."
      />
      <section className="page-shell pb-14 sm:pb-20" aria-label="Lanceur de démonstration">
        <h2 className="sr-only">Lanceur de démonstration</h2>
        <div className="mb-5 flex justify-end">
          <Link href="/dashboard" className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}>
            Voir les projets locaux
          </Link>
        </div>
        <DemoLauncher />
      </section>
    </>
  );
}
