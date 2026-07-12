"use client";

import { ArrowLeft, Check, Download, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECT_STORAGE_KEY, readProjects, saveProject } from "@/lib/local-project-store";
import { projectSections, projectToMarkdown, updateProject, type EditableProjectField, type Project } from "@/lib/project";
import { LocalProjectNotice } from "./local-project-notice";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";

type SaveState = "saved" | "saving" | "error";
function download(name: string, content: string, type: string) { const url = URL.createObjectURL(new Blob([content], { type })); const link = document.createElement("a"); link.href = url; link.download = name; link.click(); URL.revokeObjectURL(url); }

export function ProjectEditor({ id }: { id: string }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>("saved");
  const [conflict, setConflict] = useState(false);
  const current = useRef<Project | null>(null);
  const conflictRef = useRef<HTMLDivElement>(null);
  const load = useCallback(() => {
    try { const found = readProjects().find((item) => item.id === id) ?? null; setProject(found); current.current = found; setLoadError(null); }
    catch (cause) { setLoadError(cause instanceof Error ? cause.message : "Impossible de lire ce projet."); }
    finally { setReady(true); }
  }, [id]);

  useEffect(() => { queueMicrotask(load); }, [load]);
  useEffect(() => {
    const onStorage = (event: StorageEvent) => { if (event.key === PROJECT_STORAGE_KEY) setConflict(true); };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  useEffect(() => { if (conflict) conflictRef.current?.focus(); }, [conflict]);

  const change = (field: EditableProjectField, value: string | string[]) => {
    if (!current.current || conflict) return;
    const next = updateProject(current.current, field, value); current.current = next; setProject(next); setSaveState("saving");
    try { saveProject(next); setSaveState("saved"); } catch { setSaveState("error"); }
  };
  const keepCurrent = () => {
    if (!current.current) return;
    setSaveState("saving");
    try { saveProject(current.current); setSaveState("saved"); setConflict(false); }
    catch { setSaveState("error"); }
  };

  if (!ready) return <p role="status">Chargement du projet local…</p>;
  if (loadError) return <Card className="border-destructive"><CardContent className="p-5"><p role="alert">{loadError}</p><Link href="/dashboard" className="underline">Retour au dashboard</Link></CardContent></Card>;
  if (!project) return <Card><CardContent className="p-5"><p>Ce projet n’existe plus sur cet appareil.</p><Link href="/dashboard" className="underline">Retour au dashboard</Link></CardContent></Card>;
  return <div className="space-y-5"><Link href="/dashboard" className="inline-flex min-h-11 items-center gap-2 font-semibold underline"><ArrowLeft aria-hidden="true" className="size-4" />Dashboard</Link><LocalProjectNotice />
    <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-card p-3" role="status">{saveState === "saving" ? <><RefreshCw aria-hidden="true" className="size-4 animate-spin motion-reduce:animate-none" />Enregistrement…</> : saveState === "saved" ? <><Check aria-hidden="true" className="size-4 text-success" />Enregistré</> : <span className="text-destructive">Erreur d’enregistrement : vos modifications restent ouvertes.</span>}</div>
    {conflict ? <Card className="border-warning"><CardContent ref={conflictRef} tabIndex={-1} role="alert" className="space-y-3 p-5 outline-none focus-visible:ring-2 focus-visible:ring-ring"><p className="font-semibold text-warning">Modification détectée dans un autre onglet</p><p className="text-sm text-muted-foreground">L’édition est suspendue. Choisissez la version à conserver avant de continuer.</p><div className="flex flex-col gap-2 sm:flex-row"><Button variant="outline" onClick={() => { load(); setConflict(false); }}>Recharger la version enregistrée</Button><Button onClick={keepCurrent}>Conserver et enregistrer mon édition</Button></div></CardContent></Card> : null}
    <Card><CardHeader><CardTitle>Projet</CardTitle></CardHeader><CardContent className="space-y-2"><label htmlFor="project-title" className="font-semibold">Titre</label><input id="project-title" disabled={conflict} className="min-h-11 w-full rounded-xl border bg-background px-3 disabled:cursor-not-allowed disabled:opacity-60" value={project.title} onChange={(event) => change("title", event.target.value)} /></CardContent></Card>
    <Card><CardHeader><CardTitle>Idée d’origine</CardTitle></CardHeader><CardContent><p className="whitespace-pre-wrap text-muted-foreground">{project.originalIdea}</p></CardContent></Card>
    <div className="grid gap-4">{projectSections.map(([key, label, kind]) => <Card key={key}><CardHeader><CardTitle>{label}</CardTitle></CardHeader><CardContent><label className="sr-only" htmlFor={key}>{label}</label><Textarea id={key} disabled={conflict} value={kind === "list" ? (project[key] as string[]).join("\n") : project[key] as string} onChange={(event) => change(key, kind === "list" ? event.target.value.split("\n") : event.target.value)} aria-label={label} /></CardContent></Card>)}</div>
    <div className="flex flex-col gap-2 sm:flex-row"><Button variant="outline" disabled={conflict} onClick={() => download(`${project.title || "projet"}.md`, projectToMarkdown(project), "text/markdown;charset=utf-8") }><Download aria-hidden="true" className="size-4" />Exporter Markdown</Button><Button variant="outline" disabled={conflict} onClick={() => download(`${project.title || "projet"}.json`, JSON.stringify(project, null, 2), "application/json") }><Download aria-hidden="true" className="size-4" />Exporter JSON</Button></div>
  </div>;
}
