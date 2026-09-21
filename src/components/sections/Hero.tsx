import Container from "../layout/Container";
import Bleed from "../layout/Bleed";
import Section from "../layout/Section";
import Button from "../ui/Button";
import penFull from "../../assets/pen/pen-full.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

/**
 * The real pen's native crop ratio (extracted from the brand's reference
 * photography) — set explicitly so the image is never cropped or distorted.
 */
const PEN_PHOTO_ASPECT = "1022 / 380";

export default function Hero() {
  return (
    <Section tone="ivory" spacing="sm">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-display">A Pen That Gives Back.</h1>
          <p className="text-body-lg mt-6 max-w-lg text-ink-muted">
            Thoughtfully designed from sustainable materials, Earthmend turns an everyday writing
            essential into something that can be used, planted and grown.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#the-pen" variant="primary">
              Explore the Pen
            </Button>
            <Button href="#for-business" variant="secondary">
              For Business
            </Button>
          </div>
        </div>
      </Container>

      {/*
        The one full-bleed moment of the homepage: the real product shot,
        shown wide and uncropped rather than forced into a boxed hero panel.
      */}
      <Bleed className="mt-14 lg:mt-16">
        <img
          src={penFull}
          alt="The Earthmend kraft-paper pen and its biodegradable seed capsule, resting beside its cap"
          className="w-full object-cover"
          style={{ aspectRatio: PEN_PHOTO_ASPECT }}
        />
      </Bleed>

      <Container>
        <div
          aria-label="The Earthmend journey: write, plant, grow"
          className="mt-8 flex items-center gap-3"
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
      </Container>
    </Section>
  );
}
