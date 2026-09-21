import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

type CTASectionProps = {
  id?: string;
  heading: string;
  supporting: string;
  quoteHref: string;
  sampleHref: string;
  quoteLabel?: string;
  sampleLabel?: string;
};

/**
 * The final, quiet closing section before the footer — dark charcoal,
 * centred, two restrained CTAs, no imagery or extra graphics.
 */
export default function CTASection({
  id,
  heading,
  supporting,
  quoteHref,
  sampleHref,
  quoteLabel = "Get a Quote",
  sampleLabel = "Request a Free Sample",
}: CTASectionProps) {
  return (
    <Section id={id} tone="charcoal" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <h2 className="text-h1 text-ivory">{heading}</h2>
          <p className="text-body-lg mt-5 text-kraft">{supporting}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={quoteHref} variant="primary-inverted">
              {quoteLabel}
            </Button>
            <Button href={sampleHref} variant="secondary-inverted">
              {sampleLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
