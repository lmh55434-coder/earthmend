import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const USE_CASES = [
  "Corporate gifts",
  "Conferences & events",
  "Client gifts",
  "Employee gifts",
  "Trade shows",
  "Brand activations",
  "Universities & organisations",
];

type BusinessSectionProps = {
  id?: string;
  quoteHref: string;
  sampleHref: string;
};

/**
 * The B2B section, deliberately typography-only: a large headline and a
 * plain vertical list of use cases separated by thin rules — no cards,
 * no icon grid. The one section on the page that lets type alone carry
 * the visual weight.
 */
export default function BusinessSection({ id, quoteHref, sampleHref }: BusinessSectionProps) {
  return (
    <Section id={id} tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="max-w-content-text lg:col-span-5">
            <SectionLabel>For Business</SectionLabel>
            <h2 className="text-h1 mt-4">Make Your Brand Part of Something That Grows.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Turn an everyday promotional product into something people can use, plant and
              remember.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={quoteHref} variant="primary">
                Get a Quote
              </Button>
              <Button href={sampleHref} variant="secondary">
                Request a Free Sample
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-y border-line">
              {USE_CASES.map((item, i) => (
                <li key={item} className="flex items-baseline gap-6 py-5">
                  <span className="text-small w-6 shrink-0 tabular-nums text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h3 tracking-widest">{item.toUpperCase()}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
