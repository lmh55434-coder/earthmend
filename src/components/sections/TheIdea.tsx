import Container from "../layout/Container";
import Section from "../layout/Section";
import TextLink from "../ui/TextLink";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penFull from "../../assets/pen/pen-full.jpg";

const POINTS = [
  { number: "01", label: "Write", description: "Made for everyday writing." },
  { number: "02", label: "Brand", description: "Your brand goes with them." },
  { number: "03", label: "Second life", description: "Give it another purpose." },
];

/**
 * "The Idea" — the product introduction. Three editorial statements
 * stacked vertically beside the product photo, each marked with a subtle
 * numeral and a thin rule — never boxed cards.
 */
export default function TheIdea({ id }: { id?: string }) {
  return (
    <Section id={id} tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="lg:col-span-7">
            <img
              src={penFull}
              alt="The EarthMend kraft-paper pen with its branded barrel and biodegradable seed capsule"
              className="w-full object-cover"
              style={{ aspectRatio: "5 / 4", objectPosition: "68% 50%" }}
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:col-span-5">
            <SectionLabel>The Idea</SectionLabel>
            <h2 className="text-h1 mt-4">One pen. Your brand. A second purpose.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              An everyday writing essential designed for businesses, events and organisations —
              with a thoughtful second life after use.
            </p>

            <ol className="mt-11 space-y-8">
              {POINTS.map((point) => (
                <li key={point.number} className="flex gap-5 border-l-2 border-line pl-5">
                  <span className="text-h2 text-ink-muted/70" aria-hidden="true">
                    {point.number}
                  </span>
                  <div>
                    <p className="text-h3 tracking-widest">{point.label.toUpperCase()}</p>
                    <p className="text-body mt-1 text-ink-muted">{point.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <TextLink href="#the-pen" className="mt-10">
              Explore the Pen
            </TextLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
