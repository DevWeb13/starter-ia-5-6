import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="page-shell grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="max-w-xl space-y-2">
          <p className="font-semibold">Starter IA 5.6</p>
          <p className="text-sm text-muted-foreground">
            MVP local déterministe pour organiser un projet en six phases avec des missions ChatGPT et Codex. Projet communautaire indépendant, non officiel et non affilié à OpenAI.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pied de page">
          <Link className="underline underline-offset-4" href="/demo">Lancer un projet</Link>
          <Link className="underline underline-offset-4" href="/dashboard">Mes projets</Link>
          <Link className="underline underline-offset-4" href="/fonctionnalites">Fonctionnement</Link>
          <Link className="underline underline-offset-4" href="/tarifs">Ressources</Link>
          <Link className="text-muted-foreground underline underline-offset-4" href="/docs">Configurations</Link>
          <a
            className="underline underline-offset-4"
            href="https://github.com/DevWeb13/starter-ia-5-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
