"use client";

import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { PhaseNavigation } from "@/components/project-workspace/phase-navigation";
import { ProjectHeader } from "@/components/project-workspace/project-header";
import { ProjectReportPanel } from "@/components/project-workspace/project-report-panel";
import { ProjectStepCard } from "@/components/project-workspace/project-step-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECT_STORAGE_KEY, readProjects, saveProject } from "@/lib/local-project-store";
import {
  updateProjectStep,
  updateProjectTitle,
  type Project,
  type ProjectPhaseId,
  type StepUpdate,
} from "@/lib/project";
import { projectToJson, projectToMarkdown } from "@/lib/project-report";

type SaveState = "saved" | "saving" | "error";

function safeFilename(title: string, extension: string) {
  const normalized = title.normalize("NFKD").replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64);
  return `${normalized || "projet-starter-ia"}.${extension}`;
}

function download(name: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

export function ProjectEditor({ id }: { id: string }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>("saved");
  const [conflict, setConflict] = useState(false);
  const [activePhaseId, setActivePhaseId] = useState<ProjectPhaseId>("scope");
  const current = useRef<Project | null>(null);
  const conflictRef = useRef<HTMLDivElement>(null);

  const load = useCallback(() => {
    try {
      const found = readProjects().find((item) => item.id === id) ?? null;
      setProject(found);
      current.current = found;
      setLoadError(null);
    } catch (cause) {
      setLoadError(cause instanceof Error ? cause.message : "Impossible de lire ce projet.");
    } finally {
      setReady(true);
    }
  }, [id]);

  useEffect(() => { queueMicrotask(load); }, [load]);
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== PROJECT_STORAGE_KEY || !current.current) return;
      if (!event.newValue) {
        setConflict(true);
        return;
      }
      try {
        const envelope = JSON.parse(event.newValue) as { projects?: Project[] };
        const incoming = envelope.projects?.find((item) => item.id === current.current?.id);
        if (!incoming || incoming.updatedAt !== current.current.updatedAt) setConflict(true);
      } catch {
        setConflict(true);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  useEffect(() => { if (conflict) conflictRef.current?.focus(); }, [conflict]);

  function persist(next: Project) {
    current.current = next;
    setProject(next);
    setSaveState("saving");
    try {
      saveProject(next);
      setSaveState("saved");
      return null;
    } catch (cause) {
      setSaveState("error");
      return cause instanceof Error ? cause.message : "Enregistrement impossible.";
    }
  }

  function changeTitle(title: string) {
    if (!current.current || conflict) return;
    persist(updateProjectTitle(current.current, title));
  }

  function changeStep(stepId: string, update: StepUpdate) {
    if (!current.current || conflict) return "L’édition est suspendue pendant la résolution du conflit.";
    try {
      return persist(updateProjectStep(current.current, stepId, update));
    } catch (cause) {
      return cause instanceof Error ? cause.message : "Modification impossible.";
    }
  }

  function keepCurrent() {
    if (!current.current) return;
    const error = persist(current.current);
    if (!error) setConflict(false);
  }

  if (!ready) return <p role="status">Chargement du projet local…</p>;
  if (loadError) return <Card className="border-destructive"><CardContent className="space-y-3 p-5"><p role="alert" className="font-semibold text-destructive">{loadError}</p><Link href="/dashboard" className="inline-flex min-h-11 items-center underline">Retour à mes projets</Link></CardContent></Card>;
  if (!project) return <Card><CardContent className="space-y-3 p-5"><p>Ce projet n’existe plus sur cet appareil.</p><Link href="/dashboard" className="inline-flex min-h-11 items-center underline">Retour à mes projets</Link></CardContent></Card>;

  const activePhase = project.phases.find((phase) => phase.id === activePhaseId) ?? project.phases[0];

  return (
    <div className="space-y-6">
      <Link href="/dashboard" className="inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4"><ArrowLeft aria-hidden="true" className="size-4" />Mes projets</Link>

      <ProjectHeader project={project} saveState={saveState} disabled={conflict} onTitleChange={changeTitle} />

      {conflict ? (
        <Card className="border-warning">
          <CardContent ref={conflictRef} tabIndex={-1} role="alert" className="space-y-3 p-5 outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <p className="font-semibold text-warning">Modification détectée dans un autre onglet</p>
            <p className="text-sm text-muted-foreground">L’édition est suspendue. Choisissez explicitement la version à conserver avant toute nouvelle écriture.</p>
            <div className="flex flex-col gap-2 sm:flex-row"><Button variant="outline" onClick={() => { load(); setConflict(false); }}>Recharger la version enregistrée</Button><Button onClick={keepCurrent}>Conserver et enregistrer mon édition</Button></div>
          </CardContent>
        </Card>
      ) : null}

      <section aria-labelledby="phases-title" className="space-y-4">
        <div><p className="eyebrow">Parcours déterministe</p><h2 id="phases-title" className="mt-2 text-2xl font-semibold">Les six phases</h2><p className="mt-1 text-muted-foreground">Une seule phase principale est affichée. Choisissez celle que vous voulez consulter.</p></div>
        <PhaseNavigation phases={project.phases} activePhaseId={activePhase.id} onSelect={(phaseId) => setActivePhaseId(phaseId as ProjectPhaseId)} />
      </section>

      <section aria-labelledby={`phase-${activePhase.id}-title`} className="space-y-4">
        <div className="rounded-2xl border bg-muted/25 p-5 sm:p-6">
          <p className="eyebrow">Phase {activePhase.order} sur 6 · active</p>
          <h2 id={`phase-${activePhase.id}-title`} className="mt-2 text-3xl font-semibold">{activePhase.name}</h2>
          <p className="mt-2 text-muted-foreground">{activePhase.summary}</p>
        </div>
        {activePhase.steps.map((step) => <ProjectStepCard key={step.id} step={step} disabled={conflict} onUpdate={(update) => changeStep(step.id, update)} />)}
      </section>

      <ProjectReportPanel project={project} />

      <section aria-label="Exports du projet" className="flex flex-col gap-2 sm:flex-row">
        <Button variant="outline" disabled={conflict} onClick={() => download(safeFilename(project.title, "md"), projectToMarkdown(project), "text/markdown;charset=utf-8")}><Download aria-hidden="true" className="size-4" />Exporter Markdown</Button>
        <Button variant="outline" disabled={conflict} onClick={() => download(safeFilename(project.title, "json"), projectToJson(project), "application/json")}><Download aria-hidden="true" className="size-4" />Exporter JSON</Button>
      </section>
    </div>
  );
}
