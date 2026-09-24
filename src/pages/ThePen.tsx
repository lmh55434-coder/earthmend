import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SectionLabel from "../components/ui/SectionLabel";
import ProductFeature from "../components/sections/ProductFeature";
import HowToPlant from "../components/sections/HowToPlant";
import CTASection from "../components/sections/CTASection";
import penFull from "../assets/pen/pen-full.jpg";
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

        <Container className="mt-14 lg:mt-16">
          <img
            src={penFull}
            alt="The EarthMend kraft-paper pen and its biodegradable seed capsule, resting beside its cap"
            className="w-full object-cover"
            style={{ aspectRatio: "1022 / 380" }}
          />
        </Container>
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
