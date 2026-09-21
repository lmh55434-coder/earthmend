import type { ReactNode } from "react";

type Tone = "ivory" | "cream" | "charcoal";

const toneClasses: Record<Tone, string> = {
  ivory: "bg-background text-ink",
  cream: "bg-surface text-ink",
  charcoal: "bg-charcoal text-ivory",
};

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  /** Tighter vertical rhythm for compact sections (e.g. the hero). */
  spacing?: "sm" | "default" | "lg";
  as?: "section" | "div";
};

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-section-sm",
  default: "py-section",
  lg: "py-section-lg",
};

/**
 * Full-bleed section wrapper: owns background tone and vertical rhythm.
 * Pair with `Container` for the actual content column.
 */
export default function Section({
  children,
  id,
  tone = "ivory",
  spacing = "default",
  className = "",
  as: As = "section",
}: SectionProps) {
  return (
    <As id={id} className={`${toneClasses[tone]} ${spacingClasses[spacing]} ${className}`}>
      {children}
    </As>
  );
}
