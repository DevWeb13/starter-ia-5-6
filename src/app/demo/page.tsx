import type { Metadata } from "next";

import { DemoLauncher } from "@/components/demo-launcher";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Démonstration locale",
  description: "Testez le parcours local d’AI Project Launcher sans compte, API ni sauvegarde.",
};

export default function DemoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Démonstration"
        badge="100 % locale"
        title="Structurez une idée sans prétendre qu’une IA l’a analysée."
        description="Saisissez une idée et observez les six sections du futur produit. Le scénario est déterministe, non sauvegardé et conçu uniquement pour tester l’expérience."
      />
      <section className="page-shell pb-14 sm:pb-20" aria-label="Lanceur de démonstration">
        <h2 className="sr-only">Lanceur de démonstration</h2>
        <DemoLauncher />
      </section>
    </>
  );
}
