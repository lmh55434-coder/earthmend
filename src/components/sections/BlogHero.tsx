import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

export default function BlogHero() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>Blog</SectionLabel>
          </div>
          <h1 className="text-display mt-4">Ideas worth planting.</h1>
          <p className="text-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            Notes on sustainable materials, responsible claims, and building brands that leave
            more than a logo behind.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
