import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ImageBlock from "../product/ImageBlock";
import weddingHero from "../../assets/occasions/wedding-hero.jpg";

/**
 * The Special Occasions landing page's opening moment — distinct from the
 * corporate-facing For Business hero, speaking directly to someone planning
 * a wedding, birthday or baby shower rather than a business buyer.
 */
export default function OccasionsHero() {
  return (
    <Section tone="cream" spacing="sm">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>Special Occasions</SectionLabel>
          </div>
          <h1 className="text-display mt-4">Make Every Special Moment Grow.</h1>
          <p className="text-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            Thoughtful, personalised plantable gifts for the moments that matter. Give your guests
            something they can use, plant and remember.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="#occasions" variant="primary">
              Explore Personalised Gifts
            </Button>
            <Button href="#enquiry" variant="secondary">
              Create Your Gift
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-14 lg:mt-16">
          <ImageBlock
            src={weddingHero}
            alt="A personalised EarthMend plantable pen wedding favour for Emma & Daniel, styled on linen with a candle, fresh flowers and eucalyptus"
            aspect="1080 / 910"
            className="mx-auto max-w-4xl"
            eager
          />
        </Reveal>
      </Container>
    </Section>
  );
}
