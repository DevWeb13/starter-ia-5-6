import type { Metadata } from "next";
import { Check, Code2, FlaskConical, GitPullRequest, Terminal } from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Démarrage et documentation",
  description: "Installer, tester et comprendre la fondation AI Project Launcher.",
};

export default function DocsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Documentation"
        badge="Première fondation"
        title="Lancer le produit, comprendre ses limites, préparer la suite."
        description="AI Project Launcher est le produit exemple. Starter IA 5.6 reste la méthode open source qui encadre le travail, les agents et la qualité."
      />

      <div className="reading-shell space-y-12 pb-14 sm:pb-20">
        <section aria-labelledby="quick-start" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><Terminal aria-hidden="true" className="size-4" /> Démarrage local</p><h2 id="quick-start" className="section-title">Quatre commandes reproductibles.</h2></div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card p-5 font-mono text-sm" tabIndex={0} aria-label="Commandes de démarrage local"><pre><code>{`npm ci\nnpm run dev\nnpm test\nnpm run build`}</code></pre></div>
          <p className="text-muted-foreground">Ouvrez ensuite <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">http://localhost:3000</code>. Aucune variable d’environnement n’est nécessaire pour cette PR.</p>
        </section>

        <section aria-labelledby="current-flow" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><FlaskConical aria-hidden="true" className="size-4" /> Parcours actuel</p><h2 id="current-flow" className="section-title">Ce qui se passe réellement.</h2></div>
          <ol className="space-y-3">
            {["L’utilisateur saisit une idée dans le navigateur.", "Une fonction TypeScript pure valide et normalise le texte.", "Après un court état de chargement simulé, six sections prédéfinies s’affichent.", "Le résultat reste en mémoire et disparaît au rechargement."].map((item, index) => <li key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4"><span className="font-mono text-sm font-bold text-primary">0{index + 1}</span><span>{item}</span></li>)}
          </ol>
        </section>

        <section aria-labelledby="architecture" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><Code2 aria-hidden="true" className="size-4" /> Architecture</p><h2 id="architecture" className="section-title">Des composants serveur par défaut.</h2></div>
          <p className="text-muted-foreground">Les pages et le contenu marketing sont rendus côté serveur. Seuls le thème, le menu mobile et le lanceur de démonstration utilisent des composants client. Il n’existe ni route API, ni base de données, ni SDK IA.</p>
          <Link href="https://github.com/DevWeb13/starter-ia-5-6/blob/work/01-foundation/ARCHITECTURE.md" className={buttonVariants({ variant: "secondary" })}>Lire l’architecture du dépôt</Link>
        </section>

        <section aria-labelledby="work" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow"><GitPullRequest aria-hidden="true" className="size-4" /> Utilisation avec Work</p><h2 id="work" className="section-title">Une mission, un écrivain, des contrôles indépendants.</h2></div>
          <Card><CardHeader><CardTitle>Workflow recommandé</CardTitle></CardHeader><CardContent><ul className="space-y-3 text-muted-foreground">{["Donner un résultat et des critères observables.", "Utiliser jusqu’à trois sous-agents en lecture seule.", "Laisser un seul agent modifier les fichiers et GitHub.", "Vérifier, revoir, corriger au plus deux fois, puis livrer un statut honnête."].map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{item}</li>)}</ul></CardContent></Card>
        </section>

        <section aria-labelledby="limits" className="space-y-5">
          <div className="space-y-2"><p className="eyebrow">Limites actuelles</p><h2 id="limits" className="section-title">Pas d’IA, pas de compte, pas de persistance, pas de paiement.</h2></div>
          <p className="text-muted-foreground">La fondation valide l’interface, le responsive, le discours et la chaîne qualité. La prochaine mission <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">work/02-product-core</code> préparera le cœur produit sans masquer les prérequis encore absents.</p>
        </section>
      </div>
    </>
  );
}
