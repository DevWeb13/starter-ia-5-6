import { Badge } from "@/components/ui/badge";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
};

export function PageIntro({ eyebrow, title, description, badge }: PageIntroProps) {
  return (
    <div className="page-shell py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow">{eyebrow}</p>
          {badge ? <Badge>{badge}</Badge> : null}
        </div>
        <h1 className="display-title text-balance">{title}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">{description}</p>
      </div>
    </div>
  );
}
