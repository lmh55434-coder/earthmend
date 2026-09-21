import airIcon from "../../assets/brand/elements/air.png";
import waterIcon from "../../assets/brand/elements/water.png";
import fireIcon from "../../assets/brand/elements/fire.png";
import earthIcon from "../../assets/brand/elements/earth.png";
import type { BlogCategory } from "../../data/blog";

const ICON: Record<BlogCategory, string> = {
  Sustainability: waterIcon,
  "For Business": airIcon,
  Product: earthIcon,
  "Behind the Brand": fireIcon,
};

/**
 * Each blog category maps to one of the mark's own four elements — the
 * same crops used on the Our Story page — instead of stock photography.
 */
const TILE_STYLE: Record<BlogCategory, string> = {
  Sustainability: "bg-moss-soft",
  "For Business": "bg-charcoal",
  Product: "bg-kraft",
  "Behind the Brand": "bg-ivory border border-charcoal",
};

const ICON_INVERT: Record<BlogCategory, boolean> = {
  Sustainability: true,
  "For Business": true,
  Product: false,
  "Behind the Brand": false,
};

type CategoryIconProps = {
  category: BlogCategory;
  size?: "sm" | "lg";
  className?: string;
};

export default function CategoryIcon({ category, size = "sm", className = "" }: CategoryIconProps) {
  const dimensions = size === "lg" ? "h-40 w-40 p-10" : "h-12 w-12 p-3";
  return (
    <div className={`flex shrink-0 items-center justify-center ${dimensions} ${TILE_STYLE[category]} ${className}`}>
      <img
        src={ICON[category]}
        alt=""
        aria-hidden="true"
        className={`h-full w-full object-contain ${ICON_INVERT[category] ? "invert" : ""}`}
      />
    </div>
  );
}
