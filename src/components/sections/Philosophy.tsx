import Container from "../layout/Container";
import Section from "../layout/Section";
import Reveal from "../ui/Reveal";

/**
 * The page's philosophical close, before the final CTA hands off from
 * thinking to action. Deliberately short.
 */
export default function Philosophy() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="text">
        <Reveal className="text-center">
          <h2 className="text-h1 mx-auto max-w-lg">
            We believe sustainability starts with better questions.
          </h2>
          <p className="text-body-lg mx-auto mt-5 max-w-md text-ink-muted">
            Not perfection.
            <br />
            Not louder claims.
            <br />
            Just more thoughtful choices, made one product at a time.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
