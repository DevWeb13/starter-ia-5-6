import type { Metadata } from "next";
import Link from "next/link";

import { DemoLauncher } from "@/components/demo-launcher";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { createPublicPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPublicPageMetadata({
  path: "/demo",
  title: "Démonstration historique",
  description: "Tester l’ancien parcours local déterministe en six phases, conservé sans appel IA ni compte.",
});

export default function DemoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Démonstration historique"
        badge="Moteur local conservé"
        title="Explorer le parcours local en six phases."
        description="Cette réalisation historique organise un projet dans ce navigateur. Elle n’appelle ni ChatGPT ni Codex et ne représente plus la direction principale de Starter IA."
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
