import type { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard-client";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Dashboard local",
  description: "Vos projets AI Project Launcher stockés localement dans ce navigateur.",
};

export default function DashboardPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dashboard"
        badge="Local uniquement"
        title="Vos projets, sur cet appareil."
        description="Créez, reprenez, exportez ou supprimez vos projets locaux. Aucun compte ni synchronisation ne sont disponibles."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-label="Dashboard local"><DashboardClient /></section>
    </>
  );
}
