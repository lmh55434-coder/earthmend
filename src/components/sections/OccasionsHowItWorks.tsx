import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionIntro from "./SectionIntro";
import Reveal from "../ui/Reveal";

const STEPS = [
  {
    number: "01",
    label: "Choose Your Occasion",
    description: "Wedding, birthday, baby shower or another special celebration.",
  },
  {
    number: "02",
    label: "Personalise Your Design",
    description: "Provide names, event date and your preferred message.",
  },
  {
    number: "03",
    label: "Confirm Your Order",
    description: "Discuss quantity, design and pricing with EarthMend.",
  },
  {
    number: "04",
    label: "Share Something Meaningful",
    description: "Give your guests a thoughtful plantable pen they can use and plant after use.",
  },
] as const;

/**
 * The enquiry-to-gift path, kept honest about what actually happens next —
 * a conversation with EarthMend, not an instant checkout — consistent with
 * "do not invent prices or delivery timelines" for this page.
 */
export default function OccasionsHowItWorks() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <SectionIntro
          label="How It Works"
          heading="From idea to something your guests keep."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <span className="text-h2 text-ink-muted/70" aria-hidden="true">
                {step.number}
              </span>
              <p className="text-h3 mt-3 tracking-widest">{step.label.toUpperCase()}</p>
              <p className="text-body mt-2 text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
