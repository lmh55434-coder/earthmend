import Container from "../layout/Container";
import Bleed from "../layout/Bleed";
import Section from "../layout/Section";
import penFeatureDiagram from "../../assets/marketing/pen-feature-diagram-v3.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

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
        diagram. The full, uncropped image only reads clearly at desktop
        widths — on mobile its very wide aspect ratio would shrink to a
        barely-visible sliver, so a tighter crop (anchored to the right edge,
        trimming only the unlabelled cap end) keeps the pen legibly sized
        while still showing all four callouts.
      */}
      <Bleed className="mt-14 lg:mt-16">
        <img
          src={penFeatureDiagram}
          alt="An EarthMend pen labelled with its features: kraft-paper barrel, a printed logo area on the barrel, and a biodegradable seed capsule with seeds in its cap"
          className="aspect-[2.2/1] w-full object-cover object-right lg:aspect-[2000/627] lg:object-center"
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
