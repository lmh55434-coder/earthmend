import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";
import logoMark from "../../assets/brand/logo-mark.png";

const NAV_LINKS = [
  { label: "The Pen", href: "/the-pen" },
  { label: "For Business", href: "/#for-business" },
  { label: "Why It Matters", href: "/#why-it-matters" },
  { label: "Our Story", href: "/#our-story" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
];

// A real route (e.g. "/the-pen") gets client-side routing via <Link>. A
// homepage-section hash (e.g. "/#for-business") stays a plain <a> — full
// page navigation is what makes the browser scroll to the fragment once
// the page loads; <Link> doesn't do that scroll for you.
function isRoute(href: string) {
  return !href.includes("#");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close the mobile panel on Escape and on viewport resize past the mobile breakpoint.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur">
      <Container>
        <div className="relative flex flex-col items-center gap-3 py-5">
          <Link to="/" className="flex flex-col items-center gap-2">
            <img src={logoMark} alt="" className="h-11 w-auto" />
            <span className="font-serif text-xl font-medium tracking-tight text-ink">
              EarthMend
            </span>
          </Link>

          {/* Nav links stay centred on their own row; the CTA is pinned to the
              right edge of that same row rather than affecting the centring. */}
          <div className="relative hidden w-full items-center justify-center xl:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-10">
                {NAV_LINKS.map((link) => {
                  const linkClasses =
                    "text-small !text-ink border-b border-transparent pb-0.5 transition-colors duration-200 ease-editorial hover:border-moss hover:text-moss";
                  return (
                    <li key={link.href}>
                      {isRoute(link.href) ? (
                        <Link to={link.href} className={linkClasses}>
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className={linkClasses}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Button
              href="/#sample"
              variant="primary"
              className="absolute right-0 px-5 py-2.5 text-xs"
            >
              Request a Free Sample
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center xl:hidden"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.4" />
              <line
                x1="0"
                y1="8"
                x2="22"
                y2="8"
                stroke="currentColor"
                strokeWidth="1.4"
                className="origin-center transition-opacity duration-150"
                opacity={open ? 0 : 1}
              />
              <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={`overflow-hidden border-t border-line bg-background transition-[max-height] duration-300 ease-editorial xl:hidden ${
          open ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => {
            const itemClasses =
              "text-body flex min-h-[44px] items-center border-b border-line py-2 last:border-b-0";
            return isRoute(link.href) ? (
              <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className={itemClasses}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={itemClasses}>
                {link.label}
              </a>
            );
          })}
          <div className="mt-4">
            <Button href="/#sample" variant="primary" onClick={() => setOpen(false)}>
              Request a Free Sample
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
