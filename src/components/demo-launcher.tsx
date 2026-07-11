"use client";

import {
  AlertCircle,
  ArrowRight,
  Check,
  CircleDashed,
  FlaskConical,
  RotateCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  buildDemoPlan,
  MAX_IDEA_LENGTH,
  type DemoPlan,
  validateIdea,
} from "@/lib/demo-plan";
import { saveProject } from "@/lib/local-project-store";
import { createProject } from "@/lib/project";
import { LocalProjectNotice } from "./local-project-notice";

type DemoState = "empty" | "error" | "loading" | "success";

const exampleIdea =
  "Un service qui aide les artisans à transformer leurs notes de chantier en devis clairs.";

const resultSections = [
  { key: "valueProposition", title: "Proposition de valeur", type: "text" },
  { key: "target", title: "Cible initiale", type: "text" },
  { key: "mvp", title: "MVP", type: "list" },
  { key: "technicalPlan", title: "Plan technique", type: "list" },
  { key: "marketingPlan", title: "Plan marketing", type: "list" },
  { key: "nextActions", title: "Prochaines actions", type: "list" },
] as const;

export function DemoLauncher() {
  const router = useRouter();
  const [idea, setIdea] = useState("");
  const [state, setState] = useState<DemoState>("empty");
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<DemoPlan | null>(null);
  const resultTitleRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (state === "success") resultTitleRef.current?.focus();
  }, [state]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  function runDemo() {
    const validationError = validateIdea(idea);

    if (validationError) {
      setError(validationError);
      setState("error");
      return;
    }

    const submittedIdea = idea;
    setError(null);
    setPlan(null);
    setState("loading");
    timerRef.current = setTimeout(() => {
      try {
        const project = createProject(submittedIdea);
        saveProject(project);
        setPlan(buildDemoPlan(submittedIdea));
        setState("success");
        router.push(`/dashboard/${project.id}`);
      } catch (cause) {
        setError(cause instanceof Error ? cause.message : "Impossible d’enregistrer ce projet localement.");
        setState("error");
      }
      timerRef.current = null;
    }, 700);
  }

  function resetDemo() {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    setIdea("");
    setError(null);
    setPlan(null);
    setState("empty");
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <Card className="lg:sticky lg:top-24">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle>Décrivez votre idée</CardTitle>
            <Badge className="border-primary/40 bg-primary/10 text-foreground">
              <FlaskConical aria-hidden="true" className="mr-1 size-3.5" />
              Démonstration locale
            </Badge>
          </div>
          <p id="idea-help" className="text-sm text-muted-foreground">
            Donnez le problème, la cible ou le résultat attendu. Rien n’est envoyé à une API.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="product-idea" className="block font-semibold">
              Idée de produit
            </label>
            <Textarea
              id="product-idea"
              name="product-idea"
              value={idea}
              maxLength={MAX_IDEA_LENGTH}
              disabled={state === "loading"}
              aria-invalid={state === "error"}
              aria-describedby={state === "error" ? "idea-help idea-error" : "idea-help"}
              placeholder="Ex. Un service qui aide…"
              onChange={(event) => {
                setIdea(event.target.value);
                setError(null);
                setPlan(null);
                setState("empty");
              }}
            />
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span>{idea.length}/{MAX_IDEA_LENGTH} caractères</span>
              <button
                type="button"
                disabled={state === "loading"}
                className="min-h-11 rounded-lg px-2 font-semibold text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-55"
                onClick={() => {
                  setIdea(exampleIdea);
                  setError(null);
                  setPlan(null);
                  setState("empty");
                }}
              >
                Utiliser l’exemple
              </button>
            </div>
          </div>

          {state === "error" ? (
            <div
              id="idea-error"
              role="alert"
              className="flex gap-3 rounded-xl border border-destructive bg-destructive-surface p-3 text-foreground"
            >
              <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
              <div>
                <p className="font-semibold">L’idée manque encore de contexte.</p>
                <p>{error}</p>
              </div>
            </div>
          ) : null}

          <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
            <Button
              type="button"
              size="lg"
              disabled={state === "loading"}
              onClick={runDemo}
            >
              {state === "loading" ? (
                <>
                  <CircleDashed aria-hidden="true" className="size-5 animate-spin motion-reduce:animate-none" />
                  Génération locale…
                </>
              ) : (
                <>
                  Générer le plan démo
                  <ArrowRight aria-hidden="true" className="size-5" />
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              disabled={state === "loading" || (!idea && state === "empty")}
              onClick={resetDemo}
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              Réinitialiser
            </Button>
          </div>
          <LocalProjectNotice />
          <p className="text-sm text-muted-foreground">Le plan est déterministe. Il ne constitue ni une analyse IA, ni une validation de marché.</p>
        </CardContent>
      </Card>

      <section
        aria-label="Résultat de la démonstration"
        aria-busy={state === "loading"}
        data-demo-state={state}
        className="min-w-0"
      >
        <p className="sr-only" aria-live="polite">
          {state === "loading"
            ? "Génération locale en cours."
            : state === "success"
              ? "Plan de démonstration généré, six sections disponibles."
              : state === "error"
                ? "Le formulaire contient une erreur à corriger."
                : "Démonstration prête."}
        </p>

        {state === "empty" || state === "error" ? (
          <Card className="border-dashed">
            <CardContent className="grid min-h-[24rem] place-items-center p-5 text-center sm:p-8">
              <div className="max-w-md space-y-4">
                <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-muted">
                  <FlaskConical aria-hidden="true" className="size-6 text-primary" />
                </span>
                <h3 id="demo-result-title" className="text-xl font-semibold">
                  Votre plan de démonstration apparaîtra ici
                </h3>
                <p className="text-muted-foreground">
                  Il contiendra une proposition de valeur, une cible, un MVP, deux plans et les
                  prochaines actions. Les hypothèses resteront clairement signalées.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {state === "loading" ? (
          <Card>
            <CardContent className="min-h-[24rem] p-5 sm:p-6">
              <div role="status" className="mb-6 flex items-center gap-3 font-semibold">
                <CircleDashed aria-hidden="true" className="size-5 animate-spin text-primary motion-reduce:animate-none" />
                Création et enregistrement local du projet…
              </div>
              <div aria-hidden="true" className="grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-32 animate-pulse rounded-xl bg-muted motion-reduce:animate-none" />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {state === "success" && plan ? (
          <div className="space-y-4">
            <div className="rounded-2xl border border-success bg-success-surface p-4">
              <div className="flex gap-3">
                <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-success" />
                <div>
                  <h3
                    id="demo-result-title"
                    ref={resultTitleRef}
                    tabIndex={-1}
                    className="font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Plan de démonstration généré
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Projet local créé. Ouverture de l’éditeur…
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {resultSections.map((section, index) => {
                const value = plan[section.key];
                return (
                  <Card key={section.key} className="min-w-0">
                    <CardHeader className="pb-3">
                      <p className="font-mono text-xs font-bold text-primary">0{index + 1}</p>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="min-w-0 [overflow-wrap:anywhere]">
                      {section.type === "list" && Array.isArray(value) ? (
                        <ul className="space-y-3 text-muted-foreground">
                          {value.map((item) => (
                            <li key={item} className="flex gap-2">
                              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">{value}</p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
