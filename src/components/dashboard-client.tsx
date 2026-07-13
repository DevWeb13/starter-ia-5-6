"use client";

import { Download, FolderOpen, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { LocalProjectNotice } from "@/components/local-project-notice";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteProject, PROJECT_STORAGE_KEY, readProjects, resetProjects } from "@/lib/local-project-store";
import type { Project } from "@/lib/project";
import { getProjectProgress, projectToJson, projectToMarkdown } from "@/lib/project-report";

function download(name: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function filename(title: string, extension: string) {
  const base = title.normalize("NFKD").replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64);
  return `${base || "projet-starter-ia"}.${extension}`;
}

function date(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export function DashboardClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    try {
      setProjects(readProjects());
      setError(null);
    } catch (cause) {
      setProjects([]);
      setError(cause instanceof Error ? cause.message : "Erreur de stockage local.");
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    queueMicrotask(refresh);
    const onStorage = (event: StorageEvent) => { if (event.key === PROJECT_STORAGE_KEY) refresh(); };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh]);

  function remove(id: string) {
    if (!window.confirm("Supprimer définitivement ce projet de cet appareil ? Cette action n’efface pas les exports déjà téléchargés.")) return;
    try { deleteProject(id); refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Suppression impossible."); }
  }

  function reset() {
    if (!window.confirm("Réinitialiser les données Starter IA version 2 ? Une sauvegarde locale brute sera créée avant l’effacement.")) return;
    try { resetProjects(); refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Réinitialisation impossible."); }
  }

  if (!ready) return <p role="status">Chargement des projets locaux…</p>;

  return (
    <div className="space-y-5">
      <LocalProjectNotice />
      {error ? (
        <Card className="border-destructive">
          <CardContent className="space-y-3 p-5">
            <p role="alert" className="font-semibold text-destructive">Données locales indisponibles</p>
            <p>{error}</p>
            <p className="text-sm text-muted-foreground">La source illisible reste intacte jusqu’à votre confirmation. La réinitialisation crée d’abord une sauvegarde brute locale.</p>
            <Button variant="destructive" onClick={reset}>Réinitialiser les données locales</Button>
          </CardContent>
        </Card>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{projects.length} projet{projects.length > 1 ? "s" : ""} sur cet appareil</p>
        <Link href="/demo" className={buttonVariants({ className: "w-full sm:w-auto" })}><Plus aria-hidden="true" className="size-4" />Créer un nouveau projet</Link>
      </div>

      {projects.length === 0 && !error ? (
        <Card className="border-dashed"><CardContent className="grid min-h-72 place-items-center p-5 text-center"><div className="max-w-sm space-y-4"><FolderOpen aria-hidden="true" className="mx-auto size-10 text-primary" /><h2 className="text-xl font-semibold">Aucun projet local</h2><p className="text-muted-foreground">Décrivez un projet pour obtenir immédiatement son parcours déterministe en six phases.</p><Link href="/demo" className={buttonVariants({ className: "w-full" })}>Lancer mon premier projet</Link></div></CardContent></Card>
      ) : null}

      <div className="grid gap-4">
        {projects.map((project) => {
          const progress = getProjectProgress(project);
          return (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 space-y-2">
                    <CardTitle className="break-words text-xl">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.brief.desiredOutcome}</p>
                    <p className="text-sm"><strong>Workflow :</strong> {project.workflow.name}</p>
                    <p className="text-sm text-muted-foreground">Modifié le {date(project.updatedAt)}</p>
                  </div>
                  <Link href={`/dashboard/${project.id}`} className={buttonVariants({ variant: "secondary", className: "w-full shrink-0 lg:w-auto" })}>Reprendre</Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border bg-muted/25 p-3"><p className="text-sm text-muted-foreground">Progression</p><p className="text-xl font-bold">{progress.percentage} %</p></div>
                  <div className="rounded-xl border bg-muted/25 p-3"><p className="text-sm text-muted-foreground">Fait et vérifié</p><p className="text-xl font-bold">{progress.completed}/{progress.total}</p></div>
                  <div className="rounded-xl border bg-muted/25 p-3"><p className="text-sm text-muted-foreground">Bloqué</p><p className="text-xl font-bold">{progress.blocked}</p></div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Button variant="outline" onClick={() => download(filename(project.title, "md"), projectToMarkdown(project), "text/markdown;charset=utf-8")}><Download aria-hidden="true" className="size-4" />Exporter Markdown</Button>
                  <Button variant="outline" onClick={() => download(filename(project.title, "json"), projectToJson(project), "application/json")}><Download aria-hidden="true" className="size-4" />Exporter JSON</Button>
                  <Button variant="outline" className="sm:ml-auto" onClick={() => remove(project.id)}><Trash2 aria-hidden="true" className="size-4" />Supprimer</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {projects.length > 0 ? <Button variant="ghost" className="text-destructive" onClick={reset}>Réinitialiser toutes les données locales</Button> : null}
    </div>
  );
}
