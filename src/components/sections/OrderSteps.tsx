import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionIntro from "./SectionIntro";

const STEPS = [
  {
    number: "01",
    label: "Tell Us What You Need",
    description: "Tell us your quantity, event, branding requirements and preferred timing.",
  },
  {
    number: "02",
    label: "We Prepare Your Quote",
    description: "We'll review your requirements and provide pricing and the available options.",
  },
  {
    number: "03",
    label: "Make Your Order",
    description: "Once you're happy with the details, we'll take care of the next steps.",
  },
];

/**
 * A horizontal editorial timeline on desktop (thin dividers, no boxes),
 * stacking vertically with the same dividers on mobile.
 */
export default function OrderSteps() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <SectionIntro label="How It Works" heading="From idea to EarthMend." />

        <div className="mt-14 grid grid-cols-1 divide-y divide-line border-t border-line lg:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:border-b">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 120}
              className="py-8 lg:px-10 lg:py-2 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-display block text-4xl text-ink-muted lg:text-5xl">
                {step.number}
              </span>
              <p className="text-h3 mt-5 tracking-widest">{step.label.toUpperCase()}</p>
              <p className="text-body mt-2 max-w-xs text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 lg:mt-14">
          <Button href="/#quote" variant="primary">
            Get a Quote
          </Button>
        </div>
      </Container>
    </Section>
  );
}
