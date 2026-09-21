import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  tone?: "default" | "inverted";
};

/**
 * Small tracked kicker used above headlines to orient the reader
 * ("For Business", "The Journey") without resorting to an icon.
 */
export default function SectionLabel({ children, tone = "default" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-eyebrow ${
        tone === "inverted" ? "text-kraft" : ""
      }`}
    >
      <span aria-hidden="true" className="h-[2px] w-5 bg-accent-soft" />
      {children}
    </span>
  );
}
