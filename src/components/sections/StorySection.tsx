import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import ProductImage from "../product/ProductImage";
import Reveal from "../ui/Reveal";

type StorySectionProps = {
  id?: string;
  linkLabel: string;
  linkHref: string;
};

/**
 * The brand-story section: emotional, visual, and short — a single image
 * beside a few short paragraphs, not a company-history timeline.
 */
export default function StorySection({ id, linkLabel, linkHref }: StorySectionProps) {
  return (
    <Section id={id} tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal delay={120} className="order-2 lg:order-1 lg:col-span-6">
            <ProductImage
              alt="Placeholder for Earthmend brand and materials photography"
              aspect="4 / 5"
              placeholderLabel="Our Story"
              className="w-full"
            />
          </Reveal>

          <Reveal className="order-1 max-w-content-text lg:order-2 lg:col-span-6">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-h1 mt-4">Better choices don&rsquo;t have to look ordinary.</h2>
            <div className="text-body-lg mt-5 space-y-4 text-ink-muted">
              <p>
                Earthmend began with a simple idea: what if an everyday product could have a life
                beyond its first use?
              </p>
              <p>
                We created Earthmend to make sustainability feel tangible — not complicated, not
                loud, and not perfect.
              </p>
              <p>Just a small product with a thoughtful second purpose.</p>
            </div>
            <TextLink href={linkHref} className="mt-7">
              {linkLabel}
            </TextLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
