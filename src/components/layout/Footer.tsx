import Container from "./Container";
import TextLink from "../ui/TextLink";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "The Pen", href: "#the-pen" },
      { label: "For Business", href: "#for-business" },
      { label: "Why It Matters", href: "#why-it-matters" },
      { label: "Our Story", href: "#our-story" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "FAQ", href: "#faq" },
      { label: "Get a Quote", href: "#quote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal text-ivory">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-section-sm sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm space-y-4">
            <p className="font-serif text-xl font-medium">Earthmend</p>
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
        </div>

        <div className="flex flex-col gap-3 border-t border-line-strong py-8 text-small !text-kraft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Earthmend. Made in Australia.</p>
          <p>Write. Plant. Grow.</p>
        </div>
      </Container>
    </footer>
  );
}
