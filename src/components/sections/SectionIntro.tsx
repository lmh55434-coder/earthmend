import type { ReactNode } from "react";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

type SectionIntroProps = {
  label?: string;
  heading: ReactNode;
  supporting?: ReactNode;
  tone?: "default" | "inverted";
  align?: "left" | "center";
  className?: string;
};

/**
 * The recurring header cluster used to open most editorial sections:
 * an optional small label/number, a heading, and an optional supporting
 * line. Kept separate from body copy, which varies too much per section
 * to templatize.
 */
export default function SectionIntro({
  label,
  heading,
  supporting,
  tone = "default",
  align = "left",
  className = "",
}: SectionIntroProps) {
  return (
    <Reveal className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {label && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <SectionLabel tone={tone === "inverted" ? "inverted" : "default"}>{label}</SectionLabel>
        </div>
      )}
      <h2 className={`text-h1 mt-4 ${tone === "inverted" ? "text-ivory" : ""}`}>{heading}</h2>
      {supporting && (
        <p
          className={`text-body-lg mt-5 max-w-content-text ${align === "center" ? "mx-auto" : ""} ${
            tone === "inverted" ? "text-kraft" : "text-ink-muted"
          }`}
        >
          {supporting}
        </p>
      )}
    </Reveal>
  );
}
