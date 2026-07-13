"use client";

import { Check, Clipboard, LockKeyhole } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  PROJECT_STEP_STATUSES,
  PROJECT_STEP_STATUS_LABELS,
  type ProjectStep,
  type ProjectStepStatus,
  type StepUpdate,
} from "@/lib/project";

type Props = {
  step: ProjectStep;
  disabled: boolean;
  onUpdate: (update: StepUpdate) => string | null;
};

export function ProjectStepCard({ step, disabled, onUpdate }: Props) {
  const [feedback, setFeedback] = useState("");

  async function copyMission(mission: string, tool: "ChatGPT" | "Codex") {
    try {
      await navigator.clipboard.writeText(mission);
      setFeedback(`Mission ${tool} copiée. Exécution non vérifiée.`);
    } catch {
      setFeedback("Copie impossible. Sélectionnez la mission dans l’export Markdown.");
    }
  }

  function update(value: StepUpdate) {
    const error = onUpdate(value);
    setFeedback(error ?? "Modification enregistrée localement.");
  }

  return (
    <Card data-step-id={step.id}>
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-xs font-bold text-primary">Étape {step.order}</p>
            <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.objective}</p>
          </div>
          <span className="w-fit rounded-full border bg-muted px-3 py-1 text-sm font-semibold">{PROJECT_STEP_STATUS_LABELS[step.status]}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div><dt className="font-semibold">Rôle mobilisé</dt><dd className="mt-1 text-muted-foreground">{step.role}</dd></div>
          <div><dt className="font-semibold">Outil recommandé</dt><dd className="mt-1 text-muted-foreground">{step.recommendedTool}</dd></div>
        </dl>

        <div className="grid gap-4 sm:grid-cols-2">
          <div><h4 className="font-semibold">Livrables attendus</h4><ul className="mt-2 space-y-2 text-sm text-muted-foreground">{step.deliverables.map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />{item}</li>)}</ul></div>
          <div><h4 className="font-semibold">Preuves attendues</h4><ul className="mt-2 space-y-2 text-sm text-muted-foreground">{step.successCriteria.map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />{item}</li>)}</ul></div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={`${step.id}-status`} className="block font-semibold">Statut déclaré par l’utilisateur</label>
            <select
              id={`${step.id}-status`}
              value={step.status}
              disabled={disabled}
              className="min-h-11 w-full rounded-xl border bg-background px-3 text-base disabled:cursor-not-allowed disabled:opacity-60"
              onChange={(event) => update({ status: event.target.value as ProjectStepStatus })}
            >
              {PROJECT_STEP_STATUSES.map((status) => <option key={status} value={status}>{PROJECT_STEP_STATUS_LABELS[status]}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor={`${step.id}-notes`} className="block font-semibold">Notes ou preuves</label>
            <Textarea
              id={`${step.id}-notes`}
              className="min-h-28"
              value={step.userNotes}
              disabled={disabled}
              placeholder="Consignez un lien, un résultat observé ou une information manquante."
              onChange={(event) => update({ userNotes: event.target.value })}
            />
          </div>
        </div>

        {step.requiresHumanApproval ? (
          <div className="rounded-xl border border-warning bg-warning-surface p-4">
            <p className="flex gap-2 font-semibold text-warning"><LockKeyhole aria-hidden="true" className="mt-0.5 size-5 shrink-0" />Validation humaine obligatoire</p>
            <p className="mt-2 text-sm text-muted-foreground">{step.humanApprovalReason}</p>
            <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border bg-background p-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring">
              <input
                type="checkbox"
                className="size-5 accent-primary"
                checked={step.humanApprovalGranted}
                disabled={disabled}
                onChange={(event) => update({ humanApprovalGranted: event.target.checked })}
              />
              <span>J’accorde cette validation humaine</span>
            </label>
          </div>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {step.chatGptMission ? <Button type="button" variant="outline" disabled={disabled} onClick={() => copyMission(step.chatGptMission!, "ChatGPT")}><Clipboard aria-hidden="true" className="size-4" />Copier la mission ChatGPT</Button> : null}
          {step.codexMission ? <Button type="button" variant="outline" disabled={disabled} onClick={() => copyMission(step.codexMission!, "Codex")}><Clipboard aria-hidden="true" className="size-4" />Copier la mission Codex</Button> : null}
        </div>
        <p role="status" aria-live="polite" className="min-h-6 text-sm text-muted-foreground">{feedback}</p>

        <details className="rounded-xl border bg-muted/25 p-4">
          <summary className="min-h-11 cursor-pointer py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Comprendre cette étape</summary>
          <div className="space-y-3 pt-3 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Pourquoi :</strong> {step.reason}</p>
            <p><strong className="text-foreground">Spécialiste :</strong> {step.role}.</p>
            <p><strong className="text-foreground">ChatGPT :</strong> {step.chatGptMission ? "prépare l’analyse ou le contenu décrit dans la mission, sans déclarer le résultat validé." : "aucune mission ChatGPT n’est nécessaire ici."}</p>
            <p><strong className="text-foreground">Codex :</strong> {step.codexMission ? "inspecte, modifie et vérifie uniquement le périmètre autorisé." : "aucune modification de fichiers n’est prévue ici."}</p>
            <p><strong className="text-foreground">Écrivain unique :</strong> un seul agent modifie les fichiers afin d’éviter les conflits et de garder une responsabilité claire.</p>
            <p><strong className="text-foreground">Livrable et vérification :</strong> {step.deliverables.join(" ; ")}. Les preuves attendues sont affichées dans la carte.</p>
            <p><strong className="text-foreground">Votre approbation :</strong> {step.requiresHumanApproval ? step.humanApprovalReason : "aucune approbation sensible n’est requise pour déclarer l’avancement de cette étape."}</p>
          </div>
        </details>
      </CardContent>
    </Card>
  );
}
