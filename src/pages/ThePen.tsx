import Container from "../components/layout/Container";
import Bleed from "../components/layout/Bleed";
import Section from "../components/layout/Section";
import SectionLabel from "../components/ui/SectionLabel";
import ZoomableImage from "../components/ui/ZoomableImage";
import ProductFeature from "../components/sections/ProductFeature";
import HowToPlant from "../components/sections/HowToPlant";
import CTASection from "../components/sections/CTASection";
import penFull from "../assets/pen/pen-full.jpg";
import penFeatureDiagram from "../assets/marketing/pen-feature-diagram-v3.jpg";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * The dedicated product page: an intro, what it's made from, the planting
 * journey, and a closing CTA — the few sections most relevant to someone
 * deciding whether this pen is right for their business or event, without
 * repeating the homepage's own story.
 */
export default function ThePen() {
  usePageMeta(
    "The Pen",
    "A ballpoint pen with a kraft-paper barrel and a biodegradable seed capsule — built for everyday writing, and for what happens after.",
  );

  return (
    <>
      <Section tone="ivory" spacing="sm">
        <Container>
          <div className="text-center">
            <SectionLabel>The Pen</SectionLabel>
            <h1 className="text-display mt-4">
              Designed for the first life.
              <br />
              Prepared for the second.
            </h1>
            <p className="text-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
              A ballpoint pen with a kraft-paper barrel and a biodegradable seed capsule — built
              for everyday writing, and for what happens after.
            </p>
          </div>
        </Container>

        <Bleed className="mt-14 lg:mt-16">
          <ZoomableImage
            src={penFeatureDiagram}
            alt="An EarthMend pen labelled with its features: kraft-paper barrel, a printed logo area on the barrel, and a biodegradable seed capsule with seeds in its cap"
            className="w-full object-cover"
            style={{ aspectRatio: "2000 / 627" }}
          />
        </Bleed>
      </Section>

      <ProductFeature
        number="01"
        label="Materials"
        heading="Made to be used. Made to be planted."
        body="The barrel is kraft paper, the ink is a standard ballpoint fill, and the cap holds a biodegradable seed capsule — everything needed for the pen's first life, and its second."
        linkLabel="See How to Plant"
        linkHref="#journey"
        imageSrc={penFull}
        imageAlt="The EarthMend pen's kraft-paper barrel and branding"
        imageAspect="4 / 5"
        imageObjectPosition="38% 50%"
        imageSide="end"
      />

      <HowToPlant id="journey" />

      <CTASection
        heading="Bring EarthMend to your business."
        supporting="Branded, plantable, and ready for your next event, conference or gift order."
        quoteHref="/for-business#build-your-order"
        sampleHref="/for-business#build-your-order"
      />
    </>
  );
}
