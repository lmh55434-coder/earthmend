import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

const CONSIDERATIONS = ["Products", "Packaging", "Procurement", "Communication", "Customer Experience"];

/**
 * Typography-only — no cards, no icons. The list is the visual, carried by
 * horizontal rules and letter-spacing alone.
 */
export default function BusinessConsideration() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="max-w-content-text">
          <SectionLabel>03 — Business</SectionLabel>
          <h2 className="text-h1 mt-4">Sustainability is becoming a business consideration.</h2>
          <p className="text-body-lg mt-5 text-ink-muted">
            Sustainability can influence more than internal operations. It can shape how
            businesses think about products, packaging, procurement, communication and the
            experiences they create for customers.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 lg:mt-16">
          <ul className="divide-y divide-line border-y border-line">
            {CONSIDERATIONS.map((item) => (
              <li key={item} className="py-5">
                <span className="text-h3 tracking-widest">{item.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180} className="mt-8 max-w-content-text border-l-2 border-line pl-5">
          <p className="text-small">
            Not every consideration is a legal requirement. Some are shaped by regulation, some by
            government policy, and others by changing expectations in the market.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
