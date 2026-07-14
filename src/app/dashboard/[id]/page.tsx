import type { Metadata } from "next";
import { ProjectEditor } from "@/components/project-editor";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Espace projet guidé",
  description: "Avancez dans les six phases d’un projet stocké localement.",
  robots: { index: false, follow: false },
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <><PageIntro eyebrow="Espace projet" badge="Six phases guidées" title="Avancez une étape à la fois." description="Les missions sont préparées localement. Vous consignez les preuves et gardez les décisions sensibles sous contrôle humain." /><section className="page-shell pb-14 sm:pb-20"><ProjectEditor id={id} /></section></>;
}
