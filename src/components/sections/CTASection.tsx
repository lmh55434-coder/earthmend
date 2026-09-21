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
};

/**
 * The final, quiet closing section before the footer — dark charcoal,
 * centred, two restrained CTAs, no imagery or extra graphics.
 */
export default function CTASection({ id, heading, supporting, quoteHref, sampleHref }: CTASectionProps) {
  return (
    <Section id={id} tone="charcoal" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <h2 className="text-h1 text-ivory">{heading}</h2>
          <p className="text-body-lg mt-5 text-kraft">{supporting}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={quoteHref} variant="primary-inverted">
              Get a Quote
            </Button>
            <Button href={sampleHref} variant="secondary-inverted">
              Request a Free Sample
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
