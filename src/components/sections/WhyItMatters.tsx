import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import Reveal from "../ui/Reveal";
import penMood from "../../assets/pen/pen-mood.jpg";

type WhyItMattersProps = {
  id?: string;
  linkLabel: string;
  linkHref: string;
};

/**
 * A short homepage teaser for the (future) dedicated Why It Matters page —
 * a strong visual carrying most of the weight, with brief copy.
 */
export default function WhyItMatters({ id, linkLabel, linkHref }: WhyItMattersProps) {
  return (
    <Section id={id} tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="max-w-content-text lg:col-span-5">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="text-h1 mt-4">Small choices. Bigger impact.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Australia is changing. Climate and environmental challenges are becoming
              increasingly relevant to Australian communities, businesses and the economy.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              People are becoming more conscious of what they use. They are increasingly drawn to
              brands that reflect the values and priorities they care about.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              Give people something they remember. Choose promotional products that do more than
              carry your logo — give them something with a story, a purpose and a second life.
            </p>

            <TextLink href={linkHref} className="mt-7">
              {linkLabel}
            </TextLink>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <img
              src={penMood}
              alt="The EarthMend pen resting on a kraft-paper surface, with generous negative space"
              className="w-full object-cover"
              style={{ aspectRatio: "6 / 5", objectPosition: "50% 35%" }}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
