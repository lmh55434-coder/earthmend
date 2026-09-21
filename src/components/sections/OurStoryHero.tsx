import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

/**
 * A quiet, text-only opening — the page's own editorial rhythm, distinct
 * from Why It Matters' argument-driven hero.
 */
export default function OurStoryHero() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>Our Story</SectionLabel>
          </div>
          <h1 className="text-display mt-4">Better choices don&rsquo;t have to look ordinary.</h1>
          <p className="text-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            EarthMend began with a simple idea: what if an everyday product could have a life
            beyond its first use?
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
