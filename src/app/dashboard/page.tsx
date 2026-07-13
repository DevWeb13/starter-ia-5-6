import type { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard-client";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Projets de la démonstration locale",
  description: "Projets de la démonstration locale historique, stockés uniquement dans ce navigateur et sur cet appareil.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <>
      <PageIntro
        eyebrow="Démonstration locale historique"
        badge="Local uniquement"
        title="Vos projets, sur cet appareil."
        description="Créez, reprenez, exportez ou supprimez vos projets déterministes. Aucune véritable IA, aucun compte et aucune synchronisation ne sont disponibles."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-label="Dashboard local"><DashboardClient /></section>
    </>
  );
}
