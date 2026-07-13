import type { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard-client";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Mes projets locaux",
  description: "Projets Starter IA stockés uniquement dans ce navigateur et sur cet appareil.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dashboard local"
        badge="Local uniquement"
        title="Mes projets Starter IA"
        description="Créez, reprenez, exportez ou supprimez vos parcours en six phases. Les données restent dans ce navigateur, sans compte ni synchronisation."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-label="Dashboard local"><DashboardClient /></section>
    </>
  );
}
