import type { Metadata } from "next";
import { ProjectEditor } from "@/components/project-editor";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Éditeur de projet",
  description: "Modifiez et exportez un projet stocké localement.",
  robots: { index: false, follow: false },
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <><PageIntro eyebrow="Démonstration locale historique" badge="Aucune véritable IA" title="Continuez votre projet local." description="Chaque modification est enregistrée automatiquement dans ce navigateur et sur cet appareil, si son stockage est disponible." /><section className="reading-shell pb-14 sm:pb-20"><ProjectEditor id={id} /></section></>;
}
