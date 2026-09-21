import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "primary-inverted" | "secondary" | "secondary-inverted";

const base =
  "text-button inline-flex min-h-[44px] items-center justify-center gap-2 px-7 py-3.5 " +
  "transition-colors duration-200 ease-editorial disabled:cursor-not-allowed disabled:opacity-50";

// Each variant is a self-contained, non-overlapping set of utilities so it
// can never collide with another variant's classes when composed via className.
const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-ivory hover:bg-moss active:bg-charcoal",
  "primary-inverted": "bg-ivory text-charcoal hover:bg-kraft active:bg-ivory",
  secondary: "border border-charcoal text-charcoal hover:border-moss hover:text-moss",
  "secondary-inverted": "border border-ivory text-ivory hover:border-kraft hover:text-kraft",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Restrained rectangular button — no pill shapes, no drop shadow.
 * Renders an `<a>` when `href` is provided, otherwise a `<button>`.
 * An internal route (href starting with "/", no "#") renders a router
 * `<Link>` for client-side navigation. Anything with a hash — including a
 * homepage section like "/#quote" — stays a plain `<a>`, since that's what
 * makes the browser scroll to the fragment; `<Link>` doesn't.
 */
export default function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    if (href.startsWith("/") && !href.includes("#")) {
      return (
        <Link to={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
