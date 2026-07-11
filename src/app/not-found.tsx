import { ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="reading-shell py-16 sm:py-24">
      <div className="rounded-2xl border border-border bg-card p-5 text-center sm:p-10">
        <Compass aria-hidden="true" className="mx-auto mb-5 size-10 text-primary" />
        <p className="font-mono text-sm font-bold text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Cette route ne fait pas partie du plan.</h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">L’adresse est peut-être incorrecte ou la page a changé. Revenez à l’accueil pour reprendre le parcours principal.</p>
        <Link href="/" className={buttonVariants({ size: "lg", className: "mt-7 w-full sm:w-auto" })}><ArrowLeft aria-hidden="true" className="size-4" />Retour à l’accueil</Link>
      </div>
    </div>
  );
}
