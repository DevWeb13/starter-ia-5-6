import type { Metadata } from "next";
import {
  Bot,
  Check,
  Database,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  Users,
} from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description: "Découvrez la fondation disponible aujourd’hui et les capacités prévues pour AI Project Launcher.",
};

const available = [
  { icon: Layers3, title: "Plan en six sections", text: "Valeur, cible, MVP, technique, marketing et prochaines actions dans un ordre lisible." },
  { icon: Gauge, title: "Parcours mobile-first", text: "Une interface rapide, clavier-accessible et utilisable dès 320 px en clair comme en sombre." },
  { icon: FileText, title: "Données de démonstration", text: "Des exemples réalistes, clairement identifiés, sans client, chiffre ou témoignage inventé." },
];

const planned = [
  { icon: Bot, title: "Génération par IA", text: "Adapter le plan au contexte, aux contraintes et aux réponses successives." },
  { icon: LockKeyhole, title: "Comptes et espaces privés", text: "Retrouver ses projets et contrôler précisément les accès." },
  { icon: Database, title: "Persistance et historique", text: "Conserver les décisions, versions et validations au fil du projet." },
  { icon: Users, title: "Collaboration", text: "Partager le cadrage avec une équipe humaine et des agents spécialisés." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fonctionnalités"
        badge="Fondation publique"
        title="Voir clairement ce qui fonctionne déjà et ce qui reste à construire."
        description="Cette première PR privilégie un parcours complet et honnête. Elle ne maquille pas une démonstration locale en produit IA terminé."
      />

      <section className="page-shell pb-14 sm:pb-20" aria-labelledby="available-title">
        <div className="mb-7 max-w-2xl space-y-3">
          <p className="eyebrow">Disponible maintenant</p>
          <h2 id="available-title" className="section-title">Une fondation testable de bout en bout.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {available.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader><Icon aria-hidden="true" className="size-6 text-primary" /><CardTitle>{title}</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">{text}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-14 sm:py-20" aria-labelledby="planned-title">
        <div className="page-shell">
          <div className="mb-7 max-w-2xl space-y-3">
            <p className="eyebrow">Prévu par étapes</p>
            <h2 id="planned-title" className="section-title">Les vraies capacités SaaS arrivent après validation du parcours.</h2>
            <p className="text-muted-foreground">Aucune date ni disponibilité n’est promise dans cette version.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {planned.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3"><Icon aria-hidden="true" className="size-6 text-primary" /><Badge>Prévu</Badge></div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-20">
        <Card className="border-primary/40">
          <CardContent className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-2"><h2 className="text-2xl font-semibold tracking-tight">Évaluez la structure avant les promesses.</h2><p className="text-muted-foreground">La démo locale montre exactement le niveau de produit disponible aujourd’hui.</p></div>
            <Link href="/demo" className={buttonVariants({ size: "lg", className: "w-full lg:w-auto" })}><Check aria-hidden="true" className="size-5" />Essayer la démo</Link>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
