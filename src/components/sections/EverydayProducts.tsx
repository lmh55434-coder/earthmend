import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

/**
 * The emotional turning point of the page — pure typography, no image,
 * building to the large closing question that the rest of the page has
 * been leading toward.
 */
export default function EverydayProducts() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="text">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>05 — Everyday Products</SectionLabel>
          </div>
          <h2 className="text-h1 mx-auto mt-4 max-w-xl">
            Even small products become part of the story.
          </h2>
          <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
            A branded pen might seem like a small decision. But promotional products are part of
            how businesses introduce themselves, thank customers, connect with employees and
            create experiences at events.
          </p>
          <p className="text-body-lg mx-auto mt-4 max-w-xl text-ink-muted">
            So perhaps the better question isn&rsquo;t simply &ldquo;what should we put our logo
            on?&rdquo;
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-12 text-center lg:mt-16">
          <p className="text-display">What happens after it&rsquo;s used?</p>
        </Reveal>
      </Container>
    </Section>
  );
}
