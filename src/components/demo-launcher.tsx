"use client";

import { AlertCircle, ArrowRight, Laptop, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { LocalProjectNotice } from "@/components/local-project-notice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { saveProject } from "@/lib/local-project-store";
import { createProject } from "@/lib/project-engine";
import type { HardwareProfile, OperatingSystem } from "@/lib/project";

const DESCRIPTION_MAX = 1_200;
const OUTCOME_MAX = 600;
const CONTEXT_MAX = 1_200;

type FormErrors = Partial<Record<"description" | "desiredOutcome" | "operatingSystem" | "storage", string>>;

const initialHardware: HardwareProfile = {
  hasComputer: false,
  operatingSystem: "none",
  hasIPhone: false,
  codexLocalAvailable: false,
  remoteControlAvailable: false,
  githubAvailable: false,
  vercelAvailable: false,
  machineCanStayActive: false,
};

const environmentOptions: { key: keyof HardwareProfile; label: string; help?: string }[] = [
  { key: "hasIPhone", label: "J’ai un iPhone" },
  { key: "codexLocalAvailable", label: "Codex local est disponible sur mon ordinateur" },
  {
    key: "remoteControlAvailable",
    label: "Remote Control est réellement disponible sur mon compte",
    help: "Cochez seulement si vous avez vérifié cette fonction dans votre compte. Starter IA ne la déduit jamais.",
  },
  { key: "githubAvailable", label: "GitHub est disponible" },
  { key: "vercelAvailable", label: "Vercel est disponible" },
  { key: "machineCanStayActive", label: "La machine peut rester active, connectée et non suspendue" },
];

export function DemoLauncher() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [constraints, setConstraints] = useState("");
  const [hardware, setHardware] = useState(initialHardware);
  const [selectedOperatingSystem, setSelectedOperatingSystem] = useState<OperatingSystem | "">("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function updateSystem(operatingSystem: OperatingSystem) {
    const hasComputer = operatingSystem !== "none";
    setSelectedOperatingSystem(operatingSystem);
    setErrors((current) => ({ ...current, operatingSystem: undefined, storage: undefined }));
    setHardware((current) => ({
      ...current,
      operatingSystem,
      hasComputer,
      ...(!hasComputer ? {
        codexLocalAvailable: false,
        remoteControlAvailable: false,
        machineCanStayActive: false,
      } : {}),
    }));
  }

  function validate() {
    const next: FormErrors = {};
    if (!description.trim()) next.description = "Décrivez le projet que vous voulez lancer.";
    else if (description.trim().length < 20) next.description = "Ajoutez quelques précisions : 20 caractères minimum.";
    if (!desiredOutcome.trim()) next.desiredOutcome = "Indiquez le résultat concret que vous recherchez.";
    else if (desiredOutcome.trim().length < 10) next.desiredOutcome = "Précisez le résultat recherché en au moins 10 caractères.";
    if (!selectedOperatingSystem) next.operatingSystem = "Choisissez votre système ou indiquez qu’aucun ordinateur n’est disponible.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function launchProject() {
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});
    try {
      const project = createProject({
        brief: {
          description: description.trim(),
          desiredOutcome: desiredOutcome.trim(),
          constraints: constraints.trim(),
          existingContext: "",
        },
        hardware,
      });
      saveProject(project);
      router.push(`/dashboard/${project.id}`);
    } catch (cause) {
      setErrors({ storage: cause instanceof Error ? cause.message : "Impossible d’enregistrer ce projet localement." });
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold tracking-tight">Votre projet</h2>
          <p className="text-muted-foreground">Trois questions suffisent pour préparer le parcours initial.</p>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="project-description" className="block font-semibold">Description du projet</label>
            <p id="project-description-help" className="text-sm text-muted-foreground">Expliquez ce que vous voulez créer et à qui cela doit servir.</p>
            <Textarea
              id="project-description"
              value={description}
              maxLength={DESCRIPTION_MAX}
              aria-invalid={Boolean(errors.description)}
              aria-describedby={`project-description-help${errors.description ? " project-description-error" : ""}`}
              onChange={(event) => { setDescription(event.target.value); setErrors((current) => ({ ...current, description: undefined, storage: undefined })); }}
            />
            <p className="flex justify-between gap-3 text-sm text-muted-foreground"><span>{description.length}/{DESCRIPTION_MAX}</span></p>
            {errors.description ? <p id="project-description-error" className="text-sm font-semibold text-destructive">{errors.description}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="desired-outcome" className="block font-semibold">Résultat recherché</label>
            <p id="desired-outcome-help" className="text-sm text-muted-foreground">Qu’est-ce qui devra fonctionner à la fin ?</p>
            <Textarea
              id="desired-outcome"
              className="min-h-24"
              value={desiredOutcome}
              maxLength={OUTCOME_MAX}
              aria-invalid={Boolean(errors.desiredOutcome)}
              aria-describedby={`desired-outcome-help${errors.desiredOutcome ? " desired-outcome-error" : ""}`}
              onChange={(event) => { setDesiredOutcome(event.target.value); setErrors((current) => ({ ...current, desiredOutcome: undefined, storage: undefined })); }}
            />
            <p className="text-sm text-muted-foreground">{desiredOutcome.length}/{OUTCOME_MAX}</p>
            {errors.desiredOutcome ? <p id="desired-outcome-error" className="text-sm font-semibold text-destructive">{errors.desiredOutcome}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="project-constraints" className="block font-semibold">Contraintes <span className="font-normal text-muted-foreground">(facultatif)</span></label>
            <p id="project-constraints-help" className="text-sm text-muted-foreground">Y a-t-il un budget, un délai, un outil ou un site existant à prendre en compte ?</p>
            <Textarea
              id="project-constraints"
              className="min-h-24"
              value={constraints}
              maxLength={CONTEXT_MAX}
              aria-describedby="project-constraints-help"
              onChange={(event) => { setConstraints(event.target.value); setErrors((current) => ({ ...current, storage: undefined })); }}
            />
            <p className="text-sm text-muted-foreground">{constraints.length}/{CONTEXT_MAX}</p>
          </div>

          {Object.values(errors).some(Boolean) ? (
            <div role="alert" className="flex gap-3 rounded-xl border border-destructive bg-destructive-surface p-4">
              <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
              <div><p className="font-semibold">Le projet n’a pas encore été créé.</p><p className="text-sm">Corrigez les champs signalés. Votre saisie est conservée.</p>{errors.storage ? <p className="mt-1 text-sm">{errors.storage}</p> : null}</div>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <div className="space-y-5 lg:sticky lg:top-24">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3"><Laptop aria-hidden="true" className="size-5 text-primary" /><h2 className="text-xl font-semibold">Mon environnement</h2></div>
            <p className="text-sm text-muted-foreground">Ces réponses permettent de vous proposer la méthode la plus simple avec votre matériel.</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="operating-system" className="block font-semibold">Système de l’ordinateur</label>
              <select
                id="operating-system"
                value={selectedOperatingSystem}
                className="min-h-11 w-full rounded-xl border bg-background px-3 text-base"
                aria-invalid={Boolean(errors.operatingSystem)}
                aria-describedby={`operating-system-help${errors.operatingSystem ? " operating-system-error" : ""}`}
                onChange={(event) => updateSystem(event.target.value as OperatingSystem)}
              >
                <option value="" disabled>Choisir un système</option>
                <option value="ubuntu-linux">Ubuntu / Linux</option>
                <option value="windows">Windows</option>
                <option value="macos">macOS</option>
                <option value="none">Aucun ordinateur disponible</option>
              </select>
              <p id="operating-system-help" className="text-sm text-muted-foreground">Choisissez explicitement l’environnement réellement disponible.</p>
              {errors.operatingSystem ? <p id="operating-system-error" className="text-sm font-semibold text-destructive">{errors.operatingSystem}</p> : null}
            </div>

            <fieldset className="space-y-3">
              <legend className="font-semibold">Outils disponibles</legend>
              {environmentOptions.map((option) => {
                const disabled = !hardware.hasComputer && ["codexLocalAvailable", "remoteControlAvailable", "machineCanStayActive"].includes(option.key);
                return (
                  <div key={option.key}>
                    <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border p-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-55">
                      <input
                        type="checkbox"
                        className="mt-1 size-5 shrink-0 accent-primary"
                        checked={Boolean(hardware[option.key])}
                        disabled={disabled}
                        onChange={(event) => setHardware((current) => ({ ...current, [option.key]: event.target.checked }))}
                      />
                      <span>{option.label}</span>
                    </label>
                    {option.help ? <p className="mt-1 pl-1 text-sm text-muted-foreground">{option.help}</p> : null}
                  </div>
                );
              })}
            </fieldset>

            {!hardware.codexLocalAvailable ? (
              <div className="rounded-xl border border-warning bg-warning-surface p-3 text-sm">
                <strong className="text-warning">Exécution Codex non disponible.</strong> Starter IA préparera les missions, mais recommandera d’installer ou d’activer Codex avant de modifier des fichiers.
              </div>
            ) : null}
          </CardContent>
        </Card>

        <LocalProjectNotice />
        <Button type="button" size="lg" className="w-full" disabled={submitting} onClick={launchProject}>
          {submitting ? "Enregistrement local…" : "Lancer mon projet"}
          {!submitting ? <ArrowRight aria-hidden="true" className="size-5" /> : null}
        </Button>
        <p className="flex gap-2 text-sm text-muted-foreground"><ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0" />Le moteur est local et déterministe. Il ne contacte aucun fournisseur IA.</p>
      </div>
    </div>
  );
}
