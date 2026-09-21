import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import penFull from "../../assets/pen/pen-full.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

export default function BusinessHero() {
  return (
    <Section tone="ivory" spacing="sm">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="max-w-lg lg:col-span-5">
            <SectionLabel>For Business</SectionLabel>
            <h1 className="text-h1 mt-4">Make Your Brand Part of Something That Grows.</h1>
            <p className="text-body-lg mt-6 text-ink-muted">
              Turn an everyday promotional product into something people can use, plant and
              remember.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/#quote" variant="primary">
                Get a Quote
              </Button>
              <Button href="/#sample" variant="secondary">
                Request a Free Sample
              </Button>
            </div>

            <div
              aria-label="The EarthMend journey: write, plant, grow"
              className="mt-14 flex items-center gap-3"
            >
              {JOURNEY.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="text-eyebrow">{step}</span>
                  {i < JOURNEY.length - 1 && (
                    <span aria-hidden="true" className="text-ink-muted">
                      &rarr;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <img
              src={penFull}
              alt="The EarthMend kraft-paper pen and its biodegradable seed capsule"
              className="w-full object-cover"
              style={{ aspectRatio: "6 / 5", objectPosition: "60% 50%" }}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
