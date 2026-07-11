import type { Metadata } from "next";

import { DemoLauncher } from "@/components/demo-launcher";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Démonstration locale",
  description: "Créez un projet local AI Project Launcher sans compte ni API.",
};

export default function DemoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Démonstration"
        badge="100 % locale"
        title="Créez un projet local sans prétendre qu’une IA l’a analysé."
        description="Saisissez une idée : les six sections déterministes sont créées, puis restent éditables sur cet appareil."
      />
      <section className="page-shell pb-14 sm:pb-20" aria-label="Lanceur de démonstration">
        <h2 className="sr-only">Lanceur de démonstration</h2>
        <DemoLauncher />
      </section>
    </>
  );
}
