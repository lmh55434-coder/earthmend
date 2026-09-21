import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penTip from "../../assets/pen/pen-tip.jpg";

/**
 * Reversed split (text leads on desktop) for rhythm against the previous
 * section. Copy is deliberately hedged — "becoming more conscious," never
 * a universal claim about all consumers, and no invented percentages.
 */
export default function PeopleConscious() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="max-w-content-text lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <SectionLabel>02 — People</SectionLabel>
            <h2 className="text-h1 mt-4">What we choose says something about what we value.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              People are becoming more conscious of what they buy and use.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              They can be drawn to brands whose products, actions and values feel aligned with the
              things they care about.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="lg:col-span-6 lg:col-start-7 lg:row-start-1"
          >
            <img
              src={penTip}
              alt="A hand holding the EarthMend pen, close on the writing tip"
              className="w-full object-cover"
              style={{ aspectRatio: "6 / 5", objectPosition: "50% 45%" }}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
