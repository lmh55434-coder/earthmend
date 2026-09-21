import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ProductImage from "../product/ProductImage";
import SectionLabel from "../ui/SectionLabel";

const USE_CASES = [
  "Corporate gifting",
  "Events",
  "Conferences",
  "Trade shows",
  "Client gifts",
  "Employee gifts",
  "Brand activations",
];

type BusinessSectionProps = {
  id?: string;
  quoteHref: string;
  sampleHref: string;
};

/**
 * The B2B section: one large image, a plain-text use-case list (not six
 * repeated cards), a large statement, and two restrained CTAs.
 */
export default function BusinessSection({ id, quoteHref, sampleHref }: BusinessSectionProps) {
  return (
    <Section id={id} tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-7">
            <ProductImage
              alt="Placeholder for Earthmend corporate gifting photography"
              aspect="5 / 4"
              placeholderLabel="Corporate Gifting"
              className="w-full"
            />
          </Reveal>

          <Reveal delay={120} className="flex max-w-content-text flex-col lg:col-span-5">
            <SectionLabel>For Business</SectionLabel>
            <h2 className="text-h1 mt-4">Make Your Brand Part of Something That Grows.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Turn an everyday promotional product into something people can use, plant and
              remember.
            </p>

            <p className="text-small mt-8 leading-loose">
              {USE_CASES.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < USE_CASES.length - 1 && <span className="px-2 text-kraft">&middot;</span>}
                </span>
              ))}
            </p>

            <p className="text-h3 mt-8 max-w-sm normal-case tracking-normal">
              Designed for businesses that want their branded merchandise to feel more considered.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={quoteHref} variant="primary">
                Get a Quote
              </Button>
              <Button href={sampleHref} variant="secondary">
                Request a Free Sample
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
