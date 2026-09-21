import type { ReactNode } from "react";

type Ratio = "5-7" | "4-8" | "6-6" | "7-5";

const ratioClasses: Record<Ratio, { start: string; end: string }> = {
  "5-7": { start: "lg:col-span-5", end: "lg:col-span-7" },
  "4-8": { start: "lg:col-span-4", end: "lg:col-span-8" },
  "6-6": { start: "lg:col-span-6", end: "lg:col-span-6" },
  "7-5": { start: "lg:col-span-7", end: "lg:col-span-5" },
};

type EditorialSplitProps = {
  start: ReactNode;
  end: ReactNode;
  ratio?: Ratio;
  /** Stack order on mobile — content first is the default editorial read order. */
  reverseOnMobile?: boolean;
  align?: "center" | "start" | "end";
  className?: string;
};

/**
 * The site's asymmetric editorial grid: a 12-column layout split
 * unevenly between two children, collapsing to a single stacked
 * column below `lg`. Used for the hero and later for product/story
 * spreads — never a plain 50/50.
 */
export default function EditorialSplit({
  start,
  end,
  ratio = "5-7",
  reverseOnMobile = false,
  align = "center",
  className = "",
}: EditorialSplitProps) {
  const cols = ratioClasses[ratio];
  const alignClass = align === "center" ? "lg:items-center" : align === "start" ? "lg:items-start" : "lg:items-end";

  return (
    <div className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 ${alignClass} ${className}`}>
      <div className={`${cols.start} ${reverseOnMobile ? "order-2 lg:order-1" : "order-1"}`}>{start}</div>
      <div className={`${cols.end} ${reverseOnMobile ? "order-1 lg:order-2" : "order-2"}`}>{end}</div>
    </div>
  );
}
