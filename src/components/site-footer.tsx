import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="page-shell grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="max-w-xl space-y-2">
          <p className="font-semibold">AI Project Launcher</p>
          <p className="text-sm text-muted-foreground">
            Démonstration publique de Starter IA 5.6. Projet communautaire indépendant,
            non officiel et non affilié à OpenAI.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pied de page">
          <Link className="underline underline-offset-4" href="/docs">Documentation</Link>
          <Link className="underline underline-offset-4" href="/tarifs">Offre envisagée</Link>
          <a
            className="underline underline-offset-4"
            href="https://github.com/DevWeb13/starter-ia-5-6"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
