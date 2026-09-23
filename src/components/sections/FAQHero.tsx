import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

export default function FAQHero() {
  return (
    <Section tone="ivory" spacing="default">
      <Container size="text">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <h1 className="text-display mt-4">Questions, answered.</h1>
          <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
            Everything we're asked most often about the pen, ordering for business, and what
            happens after the ink runs out.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
