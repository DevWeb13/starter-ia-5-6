import type { ProjectPhase } from "@/lib/project";
import { getProjectProgress } from "@/lib/project-report";

type Props = {
  phases: ProjectPhase[];
  activePhaseId: string;
  onSelect: (id: string) => void;
};

export function PhaseNavigation({ phases, activePhaseId, onSelect }: Props) {
  return (
    <nav aria-label="Phases du projet">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase) => {
          const progress = getProjectProgress({ phases: [phase] });
          const active = phase.id === activePhaseId;
          return (
            <li key={phase.id}>
              <button
                type="button"
                aria-current={active ? "step" : undefined}
                className={`min-h-14 w-full cursor-pointer rounded-xl border px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active ? "border-primary bg-primary/10 font-semibold ring-1 ring-primary" : "bg-card hover:bg-muted"}`}
                onClick={() => onSelect(phase.id)}
              >
                <span className="block text-sm">Phase {phase.order}</span>
                <span className="block">{phase.name}</span>
                <span className="block text-xs font-normal text-muted-foreground">{progress.completed}/{progress.total} terminé et vérifié</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
