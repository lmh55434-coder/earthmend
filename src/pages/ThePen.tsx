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
import { useStructuredData } from "../hooks/useStructuredData";
import { QUANTITY_OPTIONS } from "../data/pricing";

// Derived from the same pricing table the order builder uses, so the two
// never drift — the free sample (unitPrice 0) and the 5,000+ custom-quote
// tier (unitPrice null) are excluded since neither is a fixed per-unit
// price.
const PRICED_TIERS = QUANTITY_OPTIONS.map((o) => o.unitPrice).filter(
  (price): price is number => price !== null && price > 0,
);

// Module-level so the object reference is stable across renders — it has no
// dependency on props or state, and useStructuredData re-serializes on every
// identity change.
const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EarthMend Plantable Pen",
  description:
    "A plantable ballpoint pen with a kraft-paper barrel and a biodegradable seed capsule — built for everyday writing, and for what happens after.",
  image: `https://earthmend.com.au${penFull}`,
  url: "https://earthmend.com.au/the-pen",
  brand: {
    "@type": "Brand",
    name: "EarthMend",
  },
  category: "Promotional Products > Pens",
  material: "Kraft paper",
  // Bulk, quantity-tiered pricing — there's no single fixed retail price,
  // so AggregateOffer (not Offer) is the correct fit: it reports the real
  // range shown in the order builder rather than inventing one price.
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "AUD",
    lowPrice: Math.min(...PRICED_TIERS).toFixed(2),
    highPrice: Math.max(...PRICED_TIERS).toFixed(2),
    offerCount: PRICED_TIERS.length,
    availability: "https://schema.org/InStock",
    url: "https://earthmend.com.au/for-business#build-your-order",
  },
};

/**
 * The dedicated product page: an intro, what it's made from, the planting
 * journey, and a closing CTA — the few sections most relevant to someone
 * deciding whether this pen is right for their business or event, without
 * repeating the homepage's own story.
 */
export default function ThePen() {
  usePageMeta(
    "The Plantable Pen",
    "A plantable ballpoint pen with a kraft-paper barrel and a biodegradable seed capsule — built for everyday writing, and for what happens after.",
  );
  useStructuredData("the-pen-product-schema", PRODUCT_SCHEMA);

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
            eager
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
