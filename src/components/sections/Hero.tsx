import Container from "../layout/Container";
import Bleed from "../layout/Bleed";
import Section from "../layout/Section";
import penFeatureDiagram from "../../assets/marketing/pen-feature-diagram-v2.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

/**
 * Native aspect ratio of the pen-feature-diagram image — set explicitly so
 * it's never cropped or distorted.
 */
const PEN_PHOTO_ASPECT = "2000 / 566";

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
        The one full-bleed moment of the homepage: the annotated product
        diagram, shown wide and uncropped rather than forced into a boxed
        hero panel.
      */}
      <Bleed className="mt-14 lg:mt-16">
        <img
          src={penFeatureDiagram}
          alt="An EarthMend pen labelled with its features: kraft-paper barrel, a printed logo area on the barrel, and a biodegradable seed capsule with seeds in its cap"
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
