import type { ReactNode } from "react";
import Button from "./Button";
import SectionLabel from "./SectionLabel";

type CTAProps = {
  label?: string;
  heading: string;
  description?: string;
  actionLabel: string;
  actionHref: string;
  tone?: "ivory" | "charcoal";
  children?: ReactNode;
};

/**
 * Compact, reusable call-to-action block for closing out a section
 * (e.g. "For Business" → get a quote). Not used on the hero itself —
 * established here for the pages that follow this stage.
 */
export default function CTA({
  label,
  heading,
  description,
  actionLabel,
  actionHref,
  tone = "ivory",
  children,
}: CTAProps) {
  const inverted = tone === "charcoal";
  return (
    <div
      className={`flex flex-col items-start gap-6 border-t ${
        inverted ? "border-line-strong" : "border-line"
      } pt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10`}
    >
      <div className="max-w-xl space-y-3">
        {label && <SectionLabel tone={inverted ? "inverted" : "default"}>{label}</SectionLabel>}
        <p className={`text-h2 ${inverted ? "text-ivory" : ""}`}>{heading}</p>
        {description && (
          <p className={`text-body ${inverted ? "text-kraft" : "text-ink-muted"}`}>{description}</p>
        )}
        {children}
      </div>
      <Button href={actionHref} variant={inverted ? "secondary-inverted" : "primary"}>
        {actionLabel}
      </Button>
    </div>
  );
}
