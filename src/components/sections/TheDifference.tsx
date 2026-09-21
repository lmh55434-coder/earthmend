import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penMood from "../../assets/pen/pen-mood.jpg";

const POINTS = [
  { number: "01", label: "Write", description: "Use it every day." },
  { number: "02", label: "Brand", description: "Carry your message with them." },
  { number: "03", label: "Plant", description: "Give the seed capsule a second purpose." },
  { number: "04", label: "Grow", description: "Let something new begin." },
];

/**
 * The four-step editorial sequence — an extended version of the same
 * numbered-rule device used on the homepage's "The Idea" section, beside
 * a second real photo for variety.
 */
export default function TheDifference() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="max-w-content-text lg:col-span-6">
            <SectionLabel>The EarthMend Difference</SectionLabel>
            <h2 className="text-h1 mt-4">More than a logo on a pen.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              EarthMend combines everyday usefulness with a second purpose. Your brand travels
              with the person who receives it. And when the writing is done, the pen has another
              story to tell.
            </p>

            <ol className="mt-11 space-y-6">
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
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <img
              src={penMood}
              alt="The EarthMend pen resting on a kraft-paper surface"
              className="w-full object-cover"
              style={{ aspectRatio: "4 / 5", objectPosition: "50% 45%" }}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
