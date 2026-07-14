import { ArrowRight, Check, ClipboardList, Laptop, LockKeyhole, Smartphone } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const phases = [
  ["Cadrer", "Décrire le problème, le résultat souhaité et les limites du projet."],
  ["Valider", "Vérifier le besoin auprès des personnes concernées et regarder les solutions existantes."],
  ["Concevoir", "Choisir une première version simple et organiser sa construction."],
  ["Construire", "Créer le parcours principal par petites étapes sur une branche séparée."],
  ["Vérifier", "Tester le résultat, la sécurité et l’accessibilité dans les conditions réelles."],
  ["Lancer et améliorer", "Préparer le lancement, demander les accords nécessaires et apprendre des retours."],
];

const outputs = [
  "Une méthode conseillée selon le matériel que vous indiquez.",
  "Des missions ChatGPT et Codex prêtes à copier, jamais présentées comme exécutées.",
  "Un résultat attendu, des points à vérifier et votre accord quand il est nécessaire.",
  "Des exports Markdown et JSON ainsi qu’un résumé de l’avancement enregistré.",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden="true" className="subtle-grid absolute inset-0 -z-10" />
        <div className="page-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="space-y-7">
            <Badge className="w-fit border-primary/40 bg-primary/10 text-foreground">MVP local · six phases</Badge>
            <div className="space-y-5">
              <h1 className="display-title text-balance">Starter IA transforme une idée en projet guidé avec ChatGPT et Codex.</h1>
              <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">Décrivez votre projet. Starter IA vous montre quoi faire maintenant, ce qu’il faut obtenir et quand votre accord est nécessaire.</p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/demo" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>Lancer un projet<ArrowRight aria-hidden="true" className="size-5" /></Link>
              <Link href="/fonctionnalites" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto" })}>Comprendre le fonctionnement</Link>
            </div>
            <p className="text-sm text-muted-foreground">Moteur local déterministe · aucun appel IA · aucun compte · aucune synchronisation</p>
          </div>

          <Card className="border-primary/40">
            <CardContent className="space-y-5 p-5 sm:p-6">
              <p className="eyebrow"><ClipboardList aria-hidden="true" className="size-4" /> Un parcours, pas une boîte noire</p>
              <h2 className="text-2xl font-semibold">Vous avancez, Starter IA organise.</h2>
              <ul className="space-y-3">
                {outputs.map((item) => <li key={item} className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" /><span>{item}</span></li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="phases-home-title">
        <div className="page-shell space-y-8">
          <div className="max-w-3xl space-y-3"><p className="eyebrow">Cycle complet</p><h2 id="phases-home-title" className="section-title">De l’idée au lancement en six phases.</h2><p className="text-muted-foreground">Chaque phase contient deux ou trois actions. L’espace projet n’affiche qu’une phase à la fois.</p></div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {phases.map(([name, description], index) => <li key={name} className="rounded-2xl border bg-card p-5"><p className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 text-lg font-semibold">{name}</h3><p className="mt-2 text-muted-foreground">{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="border-y bg-muted/35 py-14 sm:py-20" aria-labelledby="roles-title">
        <div className="page-shell grid gap-8 lg:grid-cols-2">
          <div className="space-y-4"><p className="eyebrow">Qui fait quoi</p><h2 id="roles-title" className="section-title">Des responsabilités simples.</h2><p className="text-muted-foreground">ChatGPT aide à réfléchir, rechercher et rédiger. Codex inspecte, modifie et vérifie les fichiers autorisés. Starter IA prépare le parcours et rassemble l’état local. L’humain décide pour les actions sensibles.</p></div>
          <Card><CardContent className="space-y-4 p-5 sm:p-6"><p className="flex gap-3"><ClipboardList aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" /><span><strong>Les bonnes aides</strong> — recherche, expérience utilisateur, technique, qualité ou présentation selon l’étape.</span></p><p className="flex gap-3"><Laptop aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" /><span><strong>Des fichiers protégés</strong> — un seul agent modifie les fichiers pour éviter les conflits.</span></p><p className="flex gap-3"><LockKeyhole aria-hidden="true" className="mt-1 size-5 shrink-0 text-warning" /><span><strong>Vos décisions</strong> — fusion, production, suppression, paiement, secret, publication et message exigent votre accord.</span></p></CardContent></Card>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="remote-title">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary"><Smartphone aria-hidden="true" className="size-8" /></div>
          <div className="space-y-3"><p className="eyebrow">Workflow phare, si disponible</p><h2 id="remote-title" className="section-title">iPhone + Codex Remote + Ubuntu.</h2><p className="text-muted-foreground">Starter IA recommande ce parcours uniquement si l’iPhone, Ubuntu, Codex local, Remote Control et une machine pouvant rester active sont tous déclarés disponibles. L’iPhone pilote ; le dépôt, Git et les processus restent sur Ubuntu.</p><Link href="/docs" className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">Consulter les configurations techniques</Link></div>
        </div>
      </section>

      <section className="border-y bg-muted/35 py-14 sm:py-20" aria-labelledby="limits-home-title">
        <div className="reading-shell space-y-5"><p className="eyebrow">Stockage et limites</p><h2 id="limits-home-title" className="section-title">Utile localement, clair sur ses limites.</h2><ul className="space-y-3 text-muted-foreground">{["Les projets restent dans ce navigateur et sur cet appareil.", "Aucun service d’IA, compte, stockage distant, paiement ou synchronisation n’est intégré.", "Copier une mission ne l’exécute pas.", "GitHub et Vercel peuvent aider, mais ne sont pas obligatoires."].map((item) => <li key={item} className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />{item}</li>)}</ul></div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="resources-home-title">
        <div className="page-shell rounded-2xl border bg-card p-5 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8"><div className="max-w-2xl space-y-3"><p className="eyebrow">Ressources secondaires</p><h2 id="resources-home-title" className="section-title">Guides, prompts et configurations restent disponibles.</h2><p className="text-muted-foreground">Utilisez-les pour installer ou comprendre ChatGPT, Codex local, Remote Control, Work et les passages de relais.</p></div><Link href="/tarifs" className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-6 w-full shrink-0 lg:mt-0 lg:w-auto" })}>Voir les ressources</Link></div>
      </section>
    </>
  );
}
