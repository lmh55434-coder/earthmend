import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

const REASONS = [
  {
    label: "Personalised",
    description: "Made for your special occasion — names, dates and your own message.",
  },
  {
    label: "Useful",
    description: "A gift your guests can actually write with, not another trinket in a drawer.",
  },
  {
    label: "A second purpose",
    description: "A plantable seed capsule gives the pen a second purpose once the ink runs out.",
  },
  {
    label: "Naturally presented",
    description: "Kraft-paper presentation, true to the rest of the EarthMend range.",
  },
  {
    label: "Memorable",
    description: "A thoughtful alternative to conventional event favours.",
  },
];

/**
 * The benefits list, in the same divided-list idiom as For Business' "Where
 * It Fits" — deliberately plain claims (useful, personalised, memorable),
 * with no sustainability superlatives beyond what the product itself does.
 */
export default function WhyChooseOccasions() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="max-w-content-text lg:col-span-5">
            <SectionLabel>Why Choose EarthMend</SectionLabel>
            <h2 className="text-h1 mt-4">Thoughtful Gifts. Meaningful Moments.</h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {REASONS.map((reason) => (
                <li
                  key={reason.label}
                  className="group py-5 transition-transform duration-200 ease-editorial hover:translate-x-2"
                >
                  <p className="text-h3 tracking-widest transition-colors duration-200 ease-editorial group-hover:text-moss">
                    {reason.label.toUpperCase()}
                  </p>
                  <p className="text-body mt-1 text-ink-muted">{reason.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
