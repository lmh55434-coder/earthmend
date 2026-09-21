import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import penSeedCapsule from "../../assets/pen/pen-seed-capsule.jpg";

/**
 * A tactile, personal closing moment before the final dark CTA — a large
 * close-up and a direct, simple invitation to try the product firsthand.
 */
export default function SampleCTA() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="lg:col-span-7">
            <img
              src={penSeedCapsule}
              alt="Close-up of the EarthMend pen's biodegradable seed capsule"
              className="w-full object-cover"
              style={{ aspectRatio: "6 / 5" }}
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:col-span-5">
            <SectionLabel>Request a Sample</SectionLabel>
            <h2 className="text-h1 mt-4">See it. Hold it. Plant it.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Want to experience EarthMend before placing a larger order? Request a sample and
              see the product for yourself.
            </p>
            <Button href="/for-business#build-your-order" variant="primary" className="mt-8">
              Request a Free Sample
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
