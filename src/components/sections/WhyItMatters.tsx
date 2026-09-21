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
 * a strong visual carrying most of the weight, with brief copy, a single
 * pull-quote moment, and no invented statistics or claims.
 */
export default function WhyItMatters({ id, linkLabel, linkHref }: WhyItMattersProps) {
  return (
    <Section id={id} tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="max-w-content-text lg:col-span-5">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="text-h1 mt-4">Small choices. Bigger meaning.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              The products businesses choose are changing. People are paying closer attention to
              what they buy, businesses are considering sustainability across more areas of their
              operations, and environmental claims are receiving greater scrutiny.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              That makes the question behind a promotional product more interesting:
            </p>

            <blockquote className="mt-6 border-l-2 border-moss py-1 pl-6">
              <p className="font-serif text-2xl italic leading-snug text-ink">
                What happens after it has been used?
              </p>
            </blockquote>

            <p className="text-body-lg mt-6 text-ink-muted">
              EarthMend starts with a simple idea — make an everyday product more thoughtful.
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
