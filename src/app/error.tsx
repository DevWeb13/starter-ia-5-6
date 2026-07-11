"use client";

import { AlertCircle, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="reading-shell py-16 sm:py-24">
      <div className="rounded-2xl border border-destructive bg-destructive-surface p-5 sm:p-8">
        <AlertCircle aria-hidden="true" className="mb-5 size-8 text-destructive" />
        <p className="eyebrow">Erreur de page</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">La page n’a pas pu terminer son chargement.</h1>
        <p className="mt-4 text-muted-foreground">Le problème peut être temporaire. Réessayez une fois ; si l’échec continue, revenez à l’accueil.</p>
        <div className="mt-6 grid gap-3 sm:flex">
          <Button size="lg" onClick={reset}><RotateCcw aria-hidden="true" className="size-4" />Réessayer</Button>
          <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg" })}><Home aria-hidden="true" className="size-4" />Retour à l’accueil</Link>
        </div>
      </div>
    </div>
  );
}
