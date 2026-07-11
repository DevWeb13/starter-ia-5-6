import type { Metadata } from "next";
import { ProjectEditor } from "@/components/project-editor";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Éditeur de projet", description: "Modifiez et exportez un projet stocké localement." };
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <><PageIntro eyebrow="Éditeur local" badge="Aucune IA" title="Continuez votre projet." description="Chaque modification est enregistrée automatiquement dans ce navigateur, si son stockage est disponible." /><section className="reading-shell pb-14 sm:pb-20"><ProjectEditor id={id} /></section></>;
}
