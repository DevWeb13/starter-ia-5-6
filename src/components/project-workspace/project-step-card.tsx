"use client";

import { Check, Clipboard, LockKeyhole } from "lucide-react";
import { useRef, useState } from "react";

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

const CODEX_FIRST_STEPS = new Set([
  "design-architecture",
  "build-foundation",
  "build-core",
  "build-content",
  "verify-tests",
  "verify-experience",
]);

type Mission = { tool: "ChatGPT" | "Codex"; text: string };

function missionsFor(step: ProjectStep): { primary?: Mission; secondary?: Mission } {
  const chatGpt = step.chatGptMission ? { tool: "ChatGPT" as const, text: step.chatGptMission } : undefined;
  const codex = step.codexMission ? { tool: "Codex" as const, text: step.codexMission } : undefined;
  if (step.id === "launch-release") return { secondary: codex };
  if (chatGpt && codex) {
    return CODEX_FIRST_STEPS.has(step.id)
      ? { primary: codex, secondary: chatGpt }
      : { primary: chatGpt, secondary: codex };
  }
  return { primary: chatGpt ?? codex };
}

export function ProjectStepCard({ step, disabled, onUpdate }: Props) {
  const [feedback, setFeedback] = useState("");
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const approvalInputRef = useRef<HTMLInputElement>(null);
  const { primary, secondary } = missionsFor(step);
  const humanActionFirst = step.id === "launch-release";

  async function copyMission(mission: Mission) {
    try {
      await navigator.clipboard.writeText(mission.text);
      setFeedback(`Mission copiée. Collez-la dans ${mission.tool}.`);
    } catch {
      setFeedback("Copie impossible. Sélectionnez la mission dans l’export Markdown.");
    }
  }

  function update(value: StepUpdate) {
    const error = onUpdate(value);
    setFeedback(error ?? "Modification enregistrée localement.");
  }

  function openApproval() {
    if (!detailsRef.current) return;
    detailsRef.current.open = true;
    requestAnimationFrame(() => approvalInputRef.current?.focus());
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
          <span className="w-fit rounded-full border bg-muted px-3 py-1 text-sm font-semibold">
            {PROJECT_STEP_STATUS_LABELS[step.status]}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <section aria-labelledby={`${step.id}-next-action`} className="rounded-xl border border-primary/40 bg-primary/10 p-4">
          <h4 id={`${step.id}-next-action`} className="font-semibold">Prochaine action</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            {humanActionFirst
              ? "Contrôlez la version de test et le plan de publication, puis donnez votre accord avant toute action externe."
              : primary?.tool === "Codex"
              ? "Copiez la mission, puis confiez-la à Codex pour agir sur les fichiers autorisés."
              : "Copiez la mission, puis utilisez ChatGPT pour préparer cette étape."}
          </p>
          {humanActionFirst ? (
            <Button type="button" className="mt-3 w-full sm:w-auto" disabled={disabled} onClick={openApproval}>
              <LockKeyhole aria-hidden="true" className="size-4" />
              Vérifier avant d’autoriser
            </Button>
          ) : primary ? (
            <Button type="button" className="mt-3 w-full sm:w-auto" disabled={disabled} onClick={() => copyMission(primary)}>
              <Clipboard aria-hidden="true" className="size-4" />
              {primary.tool === "Codex" ? "Copier pour Codex" : "Copier pour ChatGPT"}
            </Button>
          ) : (
            <p className="mt-3 font-semibold">Réalisez cette étape vous-même, puis notez le résultat.</p>
          )}
        </section>

        <div className="space-y-2">
          <label htmlFor={`${step.id}-status`} className="block font-semibold">Où en êtes-vous ?</label>
          <select
            id={`${step.id}-status`}
            value={step.status}
            disabled={disabled}
            className="min-h-11 w-full cursor-pointer rounded-xl border bg-background px-3 text-base disabled:cursor-not-allowed disabled:opacity-60"
            onChange={(event) => update({ status: event.target.value as ProjectStepStatus })}
          >
            {PROJECT_STEP_STATUSES.map((status) => (
              <option key={status} value={status}>{PROJECT_STEP_STATUS_LABELS[status]}</option>
            ))}
          </select>
          <p className="text-sm text-muted-foreground">Pour choisir « Terminé et vérifié », ajoutez d’abord un résultat dans les détails.</p>
        </div>

        <p role="status" aria-live="polite" className="min-h-6 text-sm text-muted-foreground">{feedback}</p>

        <details ref={detailsRef} className="rounded-xl border bg-muted/25 p-4">
          <summary className="min-h-11 cursor-pointer py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Comprendre cette étape
          </summary>
          <div className="space-y-5 pt-4 text-sm">
            <section>
              <h4 className="font-semibold">Pourquoi cette étape ?</h4>
              <p className="mt-1 text-muted-foreground">{step.reason}</p>
            </section>

            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-semibold">Qui peut aider</dt>
                <dd className="mt-1 text-muted-foreground">{step.role}</dd>
              </div>
              <div>
                <dt className="font-semibold">Outil conseillé</dt>
                <dd className="mt-1 text-muted-foreground">{step.recommendedTool}</dd>
              </div>
            </dl>

            <section>
              <h4 className="font-semibold">Ce que vous devez obtenir</h4>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="font-semibold">Comment savoir que c’est bon</h4>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                {step.successCriteria.map((item) => (
                  <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />{item}</li>
                ))}
              </ul>
            </section>

            <div className="space-y-2">
              <label htmlFor={`${step.id}-notes`} className="block font-semibold">Notes et résultats</label>
              <Textarea
                id={`${step.id}-notes`}
                className="min-h-28"
                value={step.userNotes}
                disabled={disabled}
                placeholder="Ajoutez un lien, un résultat observé ou une information manquante."
                onChange={(event) => update({ userNotes: event.target.value })}
              />
            </div>

            {step.requiresHumanApproval ? (
              <section className="rounded-xl border border-warning bg-warning-surface p-4">
                <h4 className="flex gap-2 font-semibold text-warning">
                  <LockKeyhole aria-hidden="true" className="mt-0.5 size-5 shrink-0" />Votre accord est nécessaire
                </h4>
                <p className="mt-2 text-muted-foreground">{step.humanApprovalReason}</p>
                <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border bg-background p-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60">
                  <input
                    ref={humanActionFirst ? approvalInputRef : undefined}
                    type="checkbox"
                    className="size-5 accent-primary"
                    checked={step.humanApprovalGranted}
                    disabled={disabled}
                    onChange={(event) => update({ humanApprovalGranted: event.target.checked })}
                  />
                  <span>J’ai vérifié et j’autorise cette action</span>
                </label>
              </section>
            ) : null}

            {secondary ? (
              <section>
                <h4 className="font-semibold">Mission complémentaire</h4>
                <p className="mt-1 text-muted-foreground">Utilisez-la si vous avez besoin de l’aide de {secondary.tool} en plus de l’action principale.</p>
                <Button type="button" variant="outline" className="mt-3 w-full sm:w-auto" disabled={disabled} onClick={() => copyMission(secondary)}>
                  <Clipboard aria-hidden="true" className="size-4" />
                  {secondary.tool === "Codex" ? "Copier la mission Codex" : "Copier la mission ChatGPT"}
                </Button>
              </section>
            ) : null}
          </div>
        </details>
      </CardContent>
    </Card>
  );
}
