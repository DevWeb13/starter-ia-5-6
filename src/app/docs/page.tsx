import type { Metadata } from "next";
import { Check, Code2, FlaskConical, GitPullRequest, Layers3, Terminal } from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Démarrage et documentation",
  description: "Choisir une configuration Starter IA et comprendre la démonstration locale historique.",
};

export default function DocsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Documentation"
        badge="Starter open source"
        title="Choisir une configuration et comprendre les ressources disponibles."
        description="Starter IA 5.6 est le produit actif. L’application Next.js reste une démonstration locale historique issue des phases 1 et 2."
      />

      <div className="reading-shell space-y-12 pb-14 sm:pb-20">
        <section aria-labelledby="quick-start" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><Terminal aria-hidden="true" className="size-4" /> Démarrage local</p><h2 id="quick-start" className="section-title">Quatre commandes reproductibles.</h2></div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card p-5 font-mono text-sm" tabIndex={0} aria-label="Commandes de démarrage local"><pre><code>{`npm ci\nnpm run dev\nnpm test\nnpm run build`}</code></pre></div>
          <p className="text-muted-foreground">Ouvrez ensuite <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">http://localhost:3000</code>. Aucune variable d’environnement n’est nécessaire pour cette version.</p>
        </section>

        <section aria-labelledby="current-flow" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><FlaskConical aria-hidden="true" className="size-4" /> Parcours actuel</p><h2 id="current-flow" className="section-title">Ce qui se passe réellement.</h2></div>
          <ol className="space-y-3">
            {["L’utilisateur saisit une idée dans le navigateur.", "Une fonction TypeScript pure valide et normalise le texte.", "Six sections déterministes sont créées sans appel externe.", "Le projet est enregistré dans le localStorage de cet appareil et peut être repris, exporté ou supprimé."].map((item, index) => <li key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4"><span className="font-mono text-sm font-bold text-primary">0{index + 1}</span><span>{item}</span></li>)}
          </ol>
        </section>

        <section aria-labelledby="architecture" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><Code2 aria-hidden="true" className="size-4" /> Architecture</p><h2 id="architecture" className="section-title">Des composants serveur par défaut.</h2></div>
          <p className="text-muted-foreground">Les pages restent des composants serveur par défaut. Le thème, le menu, la démonstration, le dashboard et l’éditeur portent les interactions navigateur. Il n’existe ni route API, ni base distante, ni SDK fournisseur.</p>
          <Link href="https://github.com/DevWeb13/starter-ia-5-6/blob/main/ARCHITECTURE.md" className={buttonVariants({ variant: "secondary" })}>Lire l’architecture du dépôt</Link>
        </section>

        <section aria-labelledby="configurations" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><Layers3 aria-hidden="true" className="size-4" /> Configurations</p><h2 id="configurations" className="section-title">Cinq points de départ complémentaires.</h2></div>
          <Card><CardContent className="p-5"><ul className="space-y-3 text-muted-foreground">{["Chat pour réfléchir, décider et produire un brouillon court.", "Work pour une mission complète dans le cloud.", "Codex local avec VS Code pour modifier et vérifier un dépôt.", "Codex Remote depuis iPhone pour piloter une session restée sur la machine locale.", "Work + Codex pour séparer préparation cloud et implémentation dans le dépôt."].map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{item}</li>)}</ul></CardContent></Card>
        </section>

        <section aria-labelledby="work" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><GitPullRequest aria-hidden="true" className="size-4" /> Utilisation avec Work</p><h2 id="work" className="section-title">Une mission, un écrivain, des contrôles indépendants.</h2></div>
          <Card><CardHeader><CardTitle>Workflow recommandé</CardTitle></CardHeader><CardContent><ul className="space-y-3 text-muted-foreground">{["Donner un résultat et des critères observables.", "Utiliser jusqu’à trois sous-agents en lecture seule.", "Laisser un seul agent modifier les fichiers et GitHub.", "Vérifier, revoir, corriger au plus deux fois, puis livrer un statut honnête."].map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{item}</li>)}</ul></CardContent></Card>
        </section>

        <section aria-labelledby="limits" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow">Limites actuelles</p><h2 id="limits" className="section-title">Local, sans fournisseur, compte distant ni paiement.</h2></div>
          <p className="text-muted-foreground">La phase 2 est fusionnée : les projets sont persistés uniquement dans le localStorage de l’appareil courant. Le dépôt n’intègre aucun fournisseur IA, API payante, secret, authentification, synchronisation distante ou paiement. La disponibilité de Work, Codex Remote, modèles et plugins dépend du compte et de l’environnement.</p>
        </section>
      </div>
    </>
  );
}
