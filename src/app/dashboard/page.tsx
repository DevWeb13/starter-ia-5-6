import type { Metadata } from "next";
import { ArrowRight, Check, CircleDashed, Clock3, FolderOpen, Plus } from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dashboard de démonstration",
  description: "Aperçu fictif du futur espace projet d’AI Project Launcher.",
};

const projectSections = [
  ["Proposition de valeur", "Prête"],
  ["Cible initiale", "Prête"],
  ["MVP", "À valider"],
  ["Plan technique", "À valider"],
  ["Plan marketing", "À compléter"],
  ["Prochaines actions", "À compléter"],
];

export default function DashboardPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dashboard"
        badge="Données d’exemple"
        title="Un aperçu du futur espace de pilotage, sans données réelles."
        description="Ce dashboard est statique. Il illustre la hiérarchie et les états futurs ; aucune information n’est sauvegardée et aucun compte n’existe."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-label="Dashboard fictif">
        <h2 className="sr-only">Vue du projet exemple</h2>
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-warning bg-warning-surface p-4 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-semibold text-warning">Mode démonstration</p><p className="text-sm text-muted-foreground">Toutes les cartes et activités ci-dessous sont fictives.</p></div>
          <Link href="/demo" className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}>Créer un résultat local<ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [FolderOpen, "Projet exemple", "1 fictif"],
            [Check, "Sections prêtes", "2 sur 6"],
            [Clock3, "Dernière activité", "Exemple statique"],
          ].map(([Icon, label, value]) => {
            const IconComponent = Icon as typeof FolderOpen;
            return <Card key={String(label)}><CardContent className="p-5 sm:p-6"><IconComponent aria-hidden="true" className="mb-4 size-5 text-primary" /><p className="text-sm text-muted-foreground">{String(label)}</p><p className="text-xl font-semibold">{String(value)}</p></CardContent></Card>;
          })}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <Card>
            <CardHeader><div className="flex flex-wrap items-start justify-between gap-3"><div><Badge>Projet fictif</Badge><CardTitle className="mt-3">Assistant devis pour artisans</CardTitle></div><span className="text-sm text-muted-foreground">Progression : 2 sections sur 6</span></div></CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {projectSections.map(([name, status]) => (
                  <li key={name} className="flex min-h-14 items-center justify-between gap-3 py-2"><span className="font-medium">{name}</span><span className="flex items-center gap-2 text-sm text-muted-foreground">{status === "Prête" ? <Check aria-hidden="true" className="size-4 text-success" /> : <CircleDashed aria-hidden="true" className="size-4 text-warning" />}{status}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="grid min-h-72 place-items-center p-5 text-center sm:p-6">
              <div className="max-w-sm space-y-4"><span className="mx-auto grid size-12 place-items-center rounded-2xl bg-muted"><Plus aria-hidden="true" className="size-6 text-primary" /></span><div><h3 className="text-lg font-semibold">Aucun projet réel</h3><p className="text-muted-foreground">L’authentification et la sauvegarde arriveront dans une phase ultérieure.</p></div><Link href="/demo" className={buttonVariants({ className: "w-full" })}>Lancer la démo locale</Link></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
