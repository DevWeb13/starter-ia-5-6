import { Check, RefreshCw } from "lucide-react";

import { LocalProjectNotice } from "@/components/local-project-notice";
import type { Project } from "@/lib/project";
import { getProjectProgress } from "@/lib/project-report";

type Props = {
  project: Project;
  saveState: "saved" | "saving" | "error";
  disabled: boolean;
  onTitleChange: (title: string) => void;
};

export function ProjectHeader({ project, saveState, disabled, onTitleChange }: Props) {
  const progress = getProjectProgress(project);
  return (
    <header className="space-y-4 rounded-2xl border bg-card p-5 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="min-w-0 space-y-3">
          <div className="space-y-2">
            <label htmlFor="project-title" className="block text-sm font-semibold">Titre du projet</label>
            <input
              id="project-title"
              value={project.title}
              maxLength={72}
              disabled={disabled}
              className="min-h-11 w-full rounded-xl border bg-background px-3 text-xl font-semibold disabled:cursor-not-allowed disabled:opacity-60"
              onChange={(event) => onTitleChange(event.target.value)}
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Résultat recherché</p>
            <p className="mt-1 whitespace-pre-wrap text-muted-foreground [overflow-wrap:anywhere]">{project.brief.desiredOutcome}</p>
          </div>
        </div>
        <div className="min-w-40 space-y-2 rounded-xl border bg-muted/35 p-4">
          <p className="text-sm font-semibold">Progression globale</p>
          <p className="text-2xl font-bold">{progress.percentage} %</p>
          <p className="text-sm text-muted-foreground">{progress.completed}/{progress.total} étapes terminées et vérifiées</p>
          <div className="h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="Progression globale" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress.percentage}>
            <div className="h-full bg-primary" style={{ width: `${progress.percentage}%` }} />
          </div>
        </div>
      </div>

      <div className="flex min-h-11 items-center gap-2 rounded-xl border px-3 text-sm" role="status" aria-live="polite">
        {saveState === "saving" ? <><RefreshCw aria-hidden="true" className="size-4 animate-spin motion-reduce:animate-none" />Enregistrement local…</> : null}
        {saveState === "saved" ? <><Check aria-hidden="true" className="size-4 text-success" />Enregistré sur cet appareil</> : null}
        {saveState === "error" ? <span className="font-semibold text-destructive">Erreur d’enregistrement : les modifications restent ouvertes dans cette page.</span> : null}
      </div>
      <LocalProjectNotice />
    </header>
  );
}
