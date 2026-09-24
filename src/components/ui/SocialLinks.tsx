import type { ReactNode } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/earth-mend/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="7.5" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
        <line x1="7.5" y1="10.3" x2="7.5" y2="16.5" strokeLinecap="round" />
        <path d="M11.3 16.5v-3.8a2.2 2.2 0 0 1 4.4 0v3.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="11.3" y1="10.3" x2="11.3" y2="16.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/earthmendpen",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1GjdyAgASH/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="M14 8.5h-1.4a1.6 1.6 0 0 0-1.6 1.6V12h3l-.4 3h-2.6v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

type SocialLinksProps = {
  className?: string;
};

/**
 * External social links — plain inline SVG marks in the site's own
 * monoline style (matching the hamburger icon, checkmarks, etc.) rather
 * than pulling in an icon library for three links.
 */
export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center !text-kraft transition-colors duration-200 ease-editorial hover:!text-ivory"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
