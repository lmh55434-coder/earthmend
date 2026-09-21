import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

/**
 * A deliberate visual pause — dark, minimal, no imagery. This is the
 * hinge of the page: the same question raised in "Everyday Products",
 * now isolated as the moment Earthmend began.
 */
export default function TheQuestion() {
  return (
    <Section tone="charcoal" spacing="lg">
      <Container size="text">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel tone="inverted">08 — The Question</SectionLabel>
          </div>
          <p className="text-display !text-ivory mt-6">What happens after it&rsquo;s used?</p>
          <p className="text-body-lg mt-6 !text-kraft">That question is where EarthMend began.</p>
        </Reveal>
      </Container>
    </Section>
  );
}
