import Container from "../layout/Container";
import Section from "../layout/Section";
import TextLink from "../ui/TextLink";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import weddingHero from "../../assets/occasions/wedding-hero.jpg";

const OCCASIONS = [
  { number: "01", label: "Weddings", description: "Personalised favours for your guests." },
  { number: "02", label: "Birthdays", description: "A thoughtful gift beyond the day." },
  { number: "03", label: "Baby Showers", description: "A small keepsake for a new beginning." },
];

/**
 * Homepage summary/teaser for the Special Occasions page — placed right
 * after The Idea, mirroring its image + numbered-list layout so the two
 * sections read as a matched pair rather than two different patterns.
 */
export default function SpecialOccasionsTeaser({ id }: { id?: string }) {
  return (
    <Section id={id} tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          {/* Mobile only: label + heading shown above the image; the
              desktop pair below (inside the text column) takes over at lg. */}
          <Reveal className="lg:hidden">
            <SectionLabel>Special Occasions</SectionLabel>
            <h2 className="text-h1 mt-4">Make Every Special Moment Grow.</h2>
          </Reveal>

          <Reveal className="lg:col-span-6">
            <img
              src={weddingHero}
              alt="A personalised EarthMend plantable pen wedding favour styled on linen with a candle, fresh flowers and eucalyptus"
              className="w-full object-cover"
              style={{ aspectRatio: "1080 / 910" }}
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:col-span-6">
            <div className="hidden lg:block">
              <SectionLabel>Special Occasions</SectionLabel>
              <h2 className="text-h1 mt-4">Make Every Special Moment Grow.</h2>
            </div>
            <p className="text-body-lg mt-5 text-ink-muted">
              Thoughtful, personalised plantable gifts for weddings, birthdays and baby showers —
              something your guests can use, plant and remember.
            </p>

            <ol className="mt-11 space-y-8">
              {OCCASIONS.map((occasion) => (
                <li key={occasion.number} className="flex gap-5 border-l-2 border-line pl-5">
                  <span className="text-h2 text-ink-muted/70" aria-hidden="true">
                    {occasion.number}
                  </span>
                  <div>
                    <p className="text-h3 tracking-widest">{occasion.label.toUpperCase()}</p>
                    <p className="text-body mt-1 text-ink-muted">{occasion.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <TextLink href="/special-occasions" className="mt-10">
              Explore Special Occasions
            </TextLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
