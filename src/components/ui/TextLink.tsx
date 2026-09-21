import type { AnchorHTMLAttributes, ReactNode } from "react";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "default" | "inverted";
};

/**
 * Understated inline link: no button chrome, underline reveals on hover/focus.
 */
export default function TextLink({ children, tone = "default", className = "", ...rest }: TextLinkProps) {
  return (
    <a
      className={`text-body inline-flex min-h-[44px] items-center border-b border-transparent py-1 transition-colors duration-200 ease-editorial ${
        tone === "inverted"
          ? "text-ivory hover:border-kraft"
          : "text-ink hover:border-moss hover:text-moss"
      } ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
