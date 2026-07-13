import { PROJECT_STEP_STATUS_LABELS, type Project } from "@/lib/project";
import { createProjectReport } from "@/lib/project-report";

export function ProjectReportPanel({ project }: { project: Project }) {
  const report = createProjectReport(project);
  const metrics = [
    ["Fait et vérifié", report.completed],
    ["Partiel", report.partial],
    ["Bloqué", report.blocked],
    ["Non tenté", report.notStarted],
    ["Preuves consignées", report.evidenceCount],
    ["Validations accordées", report.approvalsGranted],
    ["Validations manquantes", report.approvalsMissing],
  ];
  return (
    <section aria-labelledby="project-report-title" className="space-y-5 rounded-2xl border bg-card p-5 sm:p-6">
      <div>
        <p className="eyebrow">État réel enregistré</p>
        <h2 id="project-report-title" className="mt-2 text-2xl font-semibold">Rapport local</h2>
        <p className="mt-2 text-muted-foreground">{report.executionNotice}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([label, value]) => <div key={label} className="rounded-xl border bg-muted/25 p-3"><p className="text-sm text-muted-foreground">{label}</p><p className="text-2xl font-bold">{value}</p></div>)}
      </div>
      <div>
        <h3 className="font-semibold">Rôles planifiés</h3>
        <p className="mt-1 text-sm text-muted-foreground">{report.plannedRoles.join(" · ")}</p>
      </div>
      <div>
        <h3 className="font-semibold">Prochaines actions</h3>
        {report.nextActions.length ? <ol className="mt-2 space-y-2 text-sm text-muted-foreground">{report.nextActions.map((action) => <li key={`${action.phase}-${action.step}`}><strong className="text-foreground">{action.phase}</strong> — {action.step} ({PROJECT_STEP_STATUS_LABELS[action.status]})</li>)}</ol> : <p className="mt-1 text-sm text-muted-foreground">Aucune action restante déclarée.</p>}
      </div>
      <p className="rounded-xl border border-warning bg-warning-surface p-3 text-sm text-muted-foreground"><strong className="text-warning">Déclaré par l’utilisateur.</strong> Starter IA ne déduit aucune exécution à partir d’une mission préparée ou copiée.</p>
    </section>
  );
}
