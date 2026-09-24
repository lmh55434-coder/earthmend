import Container from "./Container";
import TextLink from "../ui/TextLink";
import SocialLinks from "../ui/SocialLinks";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "The Pen", href: "/the-pen" },
      { label: "Why It Matters", href: "/why-it-matters" },
      { label: "For Business", href: "/for-business" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Get a Quote", href: "/for-business#build-your-order" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-inverted bg-charcoal text-ivory">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-section-sm sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm space-y-4">
            <p className="font-serif text-xl font-medium">EarthMend</p>
            <p className="text-body text-kraft">
              A pen that gives back. Sustainable, plantable writing tools for Australian
              businesses that mean it.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="text-eyebrow text-kraft">{column.heading}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href} tone="inverted" className="min-h-0 py-0">
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div aria-label="Contact">
            <p className="text-eyebrow text-kraft">Contact</p>
            <div className="mt-4 space-y-3">
              <TextLink
                href="mailto:hello@earthmend.com.au"
                tone="inverted"
                className="min-h-0 py-0"
              >
                hello@earthmend.com.au
              </TextLink>
              <p className="text-body text-kraft">
                179 Alfred Street
                <br />
                Fortitude Valley QLD 4006
              </p>
              <SocialLinks className="!-ml-2 pt-1" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-inverted py-8 text-small !text-kraft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} EarthMend. Made in Australia.</p>
          <div className="flex items-center gap-6">
            <TextLink href="/privacy" tone="inverted" className="min-h-0 py-0">
              Privacy
            </TextLink>
            <TextLink href="/terms" tone="inverted" className="min-h-0 py-0">
              Terms
            </TextLink>
          </div>
          <p>Write. Plant. Grow.</p>
        </div>
      </Container>
    </footer>
  );
}
