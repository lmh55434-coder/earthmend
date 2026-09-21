import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  tone?: "default" | "inverted";
};

/**
 * Understated inline link: no button chrome, underline reveals on hover/focus.
 * An internal route (href starting with "/", no "#") renders a router
 * `<Link>` for client-side navigation. Anything with a hash — including a
 * homepage section like "/#for-business" — stays a plain `<a>`, since
 * that's what makes the browser scroll to the fragment; `<Link>` doesn't.
 */
export default function TextLink({ href, children, tone = "default", className = "", ...rest }: TextLinkProps) {
  const classes = `text-body inline-flex min-h-[44px] items-center border-b border-transparent py-1 transition-colors duration-200 ease-editorial ${
    tone === "inverted" ? "text-ivory hover:border-kraft" : "text-ink hover:border-moss hover:text-moss"
  } ${className}`;

  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
