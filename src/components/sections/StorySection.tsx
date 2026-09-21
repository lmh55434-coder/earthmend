import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import Reveal from "../ui/Reveal";
import penFull from "../../assets/pen/pen-full.jpg";

type StorySectionProps = {
  id?: string;
  linkLabel: string;
  linkHref: string;
};

/**
 * The brand-story section: one large image with the text panel
 * overlapping its edge on desktop (a layered editorial moment, not a
 * bordered card) — and a clean, simple stack on mobile rather than an
 * attempt at the same overlap at small sizes.
 */
export default function StorySection({ id, linkLabel, linkHref }: StorySectionProps) {
  return (
    <Section id={id} tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="relative lg:pb-16 lg:pl-[8%]">
          <img
            src={penFull}
            alt="The Earthmend kraft-paper pen resting on its surface"
            className="w-full object-cover lg:ml-[10%] lg:w-[90%]"
            style={{ aspectRatio: "16 / 10", objectPosition: "35% 50%" }}
          />

          <div className="relative z-10 mt-8 max-w-md bg-ivory px-1 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:bg-cream lg:px-10 lg:py-10">
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
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
