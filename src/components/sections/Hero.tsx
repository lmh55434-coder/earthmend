import Container from "../layout/Container";
import Bleed from "../layout/Bleed";
import Section from "../layout/Section";
import ZoomableImage from "../ui/ZoomableImage";
import growthSequence from "../../assets/marketing/growth-sequence.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

/**
 * Native aspect ratio of the growth-sequence image — set explicitly so
 * it's never cropped or distorted.
 */
const PEN_PHOTO_ASPECT = "1927 / 1009";

export default function Hero() {
  return (
    <Section tone="ivory" spacing="sm">
      <Container>
        <div className="text-center">
          <h1 className="text-display lg:whitespace-nowrap">A Pen That Gives Back.</h1>
          <p className="text-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            Thoughtfully designed from sustainable materials, EarthMend turns an everyday writing
            essential into something that can be used, planted and grown.
          </p>
        </div>
      </Container>

      {/*
        The one full-bleed moment of the homepage: a real four-stage time
        lapse of the pen planted and growing, shown wide and uncropped
        rather than forced into a boxed hero panel. ZoomableImage adds a
        tap-to-enlarge lightbox on mobile, where the strip is narrower.
      */}
      <Bleed className="mt-14 lg:mt-16">
        <ZoomableImage
          src={growthSequence}
          alt="A four-photo time lapse of an EarthMend pen planted in a pot, from freshly planted beside tiny seedlings through to fully grown among flourishing leaves"
          className="w-full object-cover"
          style={{ aspectRatio: PEN_PHOTO_ASPECT }}
        />
      </Bleed>

      <Container>
        <div
          aria-label="The EarthMend journey: write, plant, grow"
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
