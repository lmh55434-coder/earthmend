import type { ReactNode } from "react";

type Size = "wide" | "default" | "narrow" | "text";

const sizeClasses: Record<Size, string> = {
  wide: "max-w-content-wide", // 1240px — full-bleed hero/visual compositions
  default: "max-w-content", // 1200px — the site's standard column
  narrow: "max-w-content-narrow", // 1100px — editorial sections
  text: "max-w-content-text", // 760px — long-form reading measure
};

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: Size;
};

/**
 * The site's content column. Everything sits inside one of these measures,
 * centred, with responsive side padding so nothing touches the viewport edge.
 */
export default function Container({ children, className = "", size = "default" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizeClasses[size]} px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
