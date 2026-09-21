import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

/**
 * A quiet, text-only opening — no product photo. This page is about the
 * thinking behind EarthMend, not the product itself, so the hero is
 * deliberately editorial rather than leading with the pen (that reveal is
 * earned later, once the reasoning has been made).
 */
export default function WhyMattersHero() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>Why It Matters</SectionLabel>
          </div>
          <h1 className="text-display mt-4">Small choices. Bigger impact.</h1>
          <p className="text-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            Australia is changing. The products people buy, the choices businesses make and the
            expectations around sustainability are all becoming part of a bigger conversation.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
