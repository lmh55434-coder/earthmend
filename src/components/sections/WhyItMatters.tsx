import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import ProductImage from "../product/ProductImage";
import Reveal from "../ui/Reveal";

type WhyItMattersProps = {
  id?: string;
  linkLabel: string;
  linkHref: string;
};

/**
 * A short homepage teaser for the (future) dedicated Why It Matters page —
 * a strong visual carrying most of the weight, with brief copy and no
 * invented statistics or claims.
 */
export default function WhyItMatters({ id, linkLabel, linkHref }: WhyItMattersProps) {
  return (
    <Section id={id} tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="max-w-content-text lg:col-span-5">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="text-h1 mt-4">Small choices. Bigger meaning.</h2>
            <div className="text-body-lg mt-5 space-y-4 text-ink-muted">
              <p>
                The products businesses choose are changing. People are paying closer attention
                to what they buy, businesses are considering sustainability in more areas of
                their operations, and environmental claims are receiving greater scrutiny.
              </p>
              <p>That makes the question behind a promotional product more interesting:</p>
              <p className="text-h3 normal-case tracking-normal text-ink">
                What happens after it has been used?
              </p>
              <p>
                Earthmend is our answer to that question — a small product designed with a second
                purpose.
              </p>
            </div>
            <TextLink href={linkHref} className="mt-7">
              {linkLabel}
            </TextLink>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ProductImage
              alt="Placeholder for Australian landscape and natural material photography"
              aspect="6 / 5"
              placeholderLabel="Why It Matters"
              className="w-full"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
