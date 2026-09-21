import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

/**
 * A quiet, typography-only section — deliberately no image, so it reads
 * as a pause between the hero and the more visual sections that follow.
 */
export default function TheProblem() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>The Problem</SectionLabel>
          </div>
          <h2 className="text-h1 mt-4">People don&rsquo;t need another promotional product.</h2>
          <div className="text-body-lg mx-auto mt-6 max-w-xl space-y-4 text-ink-muted">
            <p>
              Businesses invest in branded merchandise to create awareness, strengthen
              relationships and stay memorable.
            </p>
            <p>
              But many promotional products are quickly forgotten once the event is over.
            </p>
            <p>
              The opportunity is to give people something they will actually use — and
              something they may remember for a little longer.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
