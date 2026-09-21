import type { ReactNode } from "react";

type BleedProps = {
  children: ReactNode;
  className?: string;
  /** Cap on how far the moment extends — still short of full viewport width by default. */
  maxWidth?: string;
};

/**
 * Breaks a single visual moment out of the 1200px content column so it can
 * extend wider — used sparingly, for the occasional large photograph, never
 * as the page's default width. Requires `overflow-x: hidden` on the body
 * (set globally in index.css) so the negative-margin breakout can't
 * introduce a horizontal scrollbar.
 */
export default function Bleed({ children, className = "", maxWidth = "1600px" }: BleedProps) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <div className={`mx-auto ${className}`} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
}
