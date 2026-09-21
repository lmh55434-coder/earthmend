import Container from "../layout/Container";
import Section from "../layout/Section";
import TextLink from "../ui/TextLink";
import Reveal from "../ui/Reveal";

/**
 * A short bridge to Why It Matters rather than re-arguing the case here —
 * the two pages have different jobs, so this links out instead of repeating.
 */
export default function StoryBridge() {
  return (
    <Section tone="cream" spacing="default">
      <Container size="text">
        <Reveal className="text-center">
          <h2 className="text-h2 mx-auto max-w-md">
            We don&rsquo;t think one pen changes everything.
          </h2>
          <p className="text-body-lg mx-auto mt-4 max-w-md text-ink-muted">
            But we think it&rsquo;s worth asking what happens after it&rsquo;s used.
          </p>
          <TextLink href="/why-it-matters" className="mt-6">
            Read Why It Matters
          </TextLink>
        </Reveal>
      </Container>
    </Section>
  );
}
