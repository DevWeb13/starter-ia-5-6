"use client";

import { Download, FolderOpen, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteProject, readProjects, resetProjects } from "@/lib/local-project-store";
import { projectToMarkdown, type Project } from "@/lib/project";
import { LocalProjectNotice } from "./local-project-notice";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function download(name: string, content: string, type: string) { const url = URL.createObjectURL(new Blob([content], { type })); const link = document.createElement("a"); link.href = url; link.download = name; link.click(); URL.revokeObjectURL(url); }
function date(value: string) { return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)); }

export function DashboardClient() {
  const initial = () => { try { return { projects: readProjects(), error: null as string | null }; } catch (cause) { return { projects: [] as Project[], error: cause instanceof Error ? cause.message : "Erreur de stockage local." }; } };
  const [projects, setProjects] = useState<Project[]>(() => initial().projects); const [error, setError] = useState<string | null>(() => initial().error);
  const refresh = () => { try { setProjects(readProjects()); setError(null); } catch (cause) { setProjects([]); setError(cause instanceof Error ? cause.message : "Erreur de stockage local."); } };
  useEffect(() => { const onStorage = (event: StorageEvent) => { if (event.key === "ai-project-launcher.projects.v1") refresh(); }; window.addEventListener("storage", onStorage); return () => window.removeEventListener("storage", onStorage); }, []);
  const remove = (id: string) => { if (!window.confirm("Supprimer définitivement ce projet de cet appareil ?")) return; try { deleteProject(id); refresh(); } catch (cause) { setError(cause instanceof Error ? cause.message : "Suppression impossible."); } };
  const reset = () => { if (!window.confirm("Réinitialiser toutes les données locales ? Une sauvegarde locale brute sera conservée avant l’effacement.")) return; try { resetProjects(); refresh(); } catch (cause) { setError(cause instanceof Error ? cause.message : "Réinitialisation impossible."); } };
  return <div className="space-y-5">
    <LocalProjectNotice />
    {error ? <Card className="border-destructive"><CardContent className="space-y-3 p-5"><p role="alert" className="font-semibold text-destructive">Données locales indisponibles</p><p>{error}</p><Button variant="destructive" onClick={reset}>Réinitialiser les données locales</Button></CardContent></Card> : null}
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted-foreground">{projects.length} projet{projects.length > 1 ? "s" : ""} local{projects.length > 1 ? "ux" : ""}</p><Link href="/demo" className={buttonVariants({ className: "w-full sm:w-auto" })}><Plus aria-hidden="true" className="size-4" />Créer un projet</Link></div>
    {projects.length === 0 && !error ? <Card className="border-dashed"><CardContent className="grid min-h-72 place-items-center p-5 text-center"><div className="max-w-sm space-y-4"><FolderOpen aria-hidden="true" className="mx-auto size-10 text-primary" /><h2 className="text-xl font-semibold">Aucun projet local</h2><p className="text-muted-foreground">Créez un premier projet depuis votre idée. Il restera sur cet appareil.</p><Link href="/demo" className={buttonVariants({ className: "w-full" })}>Créer mon premier projet</Link></div></CardContent></Card> : null}
    <div className="grid gap-4">{projects.map((project) => <Card key={project.id}><CardHeader><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div className="min-w-0"><CardTitle className="break-words">{project.title}</CardTitle><p className="mt-2 text-sm text-muted-foreground">Modifié le {date(project.updatedAt)}</p></div><Link href={`/dashboard/${project.id}`} className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}>Reprendre</Link></div></CardHeader><CardContent className="flex flex-col gap-2 sm:flex-row"><Button variant="outline" onClick={() => download(`${project.title || "projet"}.md`, projectToMarkdown(project), "text/markdown;charset=utf-8") }><Download aria-hidden="true" className="size-4" />Exporter Markdown</Button><Button variant="outline" onClick={() => download(`${project.title || "projet"}.json`, JSON.stringify(project, null, 2), "application/json") }><Download aria-hidden="true" className="size-4" />Exporter JSON</Button><Button variant="outline" className="sm:ml-auto" onClick={() => remove(project.id)}><Trash2 aria-hidden="true" className="size-4" />Supprimer</Button></CardContent></Card>)}</div>
    {projects.length > 0 ? <Button variant="ghost" className="text-destructive" onClick={reset}>Réinitialiser toutes les données locales</Button> : null}
  </div>;
}
