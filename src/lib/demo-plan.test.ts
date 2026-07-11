import { describe, expect, it } from "vitest";

import {
  buildDemoPlan,
  MAX_IDEA_LENGTH,
  normalizeIdea,
  validateIdea,
} from "./demo-plan";

describe("demo plan", () => {
  it("normalise whitespace and limits the stored idea", () => {
    expect(normalizeIdea("  Un   produit\nclair  ")).toBe("Un produit clair");
    expect(normalizeIdea("a".repeat(MAX_IDEA_LENGTH + 20))).toHaveLength(
      MAX_IDEA_LENGTH,
    );
  });

  it("rejects missing and overly short ideas", () => {
    expect(validateIdea("  ")).toMatch(/Décrivez/);
    expect(validateIdea("Une app courte")).toMatch(/minimum/);
  });

  it("returns all six requested sections", () => {
    const plan = buildDemoPlan(
      "Un service qui aide les artisans à préparer leurs devis plus vite",
    );

    expect(plan.valueProposition).toContain("artisans");
    expect(plan.target).toBeTruthy();
    expect(plan.mvp).toHaveLength(3);
    expect(plan.technicalPlan).toHaveLength(3);
    expect(plan.marketingPlan).toHaveLength(3);
    expect(plan.nextActions).toHaveLength(3);
  });

  it("keeps user text as data instead of interpreting markup", () => {
    const idea = "Un produit pour équipes <script>alert('test')</script> à valider";
    const plan = buildDemoPlan(idea);

    expect(plan.idea).toBe(idea);
    expect(plan.valueProposition).toContain(idea);
  });
});
