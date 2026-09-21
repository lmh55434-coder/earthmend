import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Use the slightly wider measure reserved for full-bleed editorial moments. */
  wide?: boolean;
};

/**
 * The site's single content column. Everything on the page sits inside
 * this — max-width 1200px (1240px for `wide`), centred, with responsive
 * side padding so the layout never touches the viewport edge.
 */
export default function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${wide ? "max-w-content-wide" : "max-w-content"} px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
