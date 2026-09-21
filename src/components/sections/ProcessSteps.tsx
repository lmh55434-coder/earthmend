import Container from "../layout/Container";
import Section from "../layout/Section";
import TextLink from "../ui/TextLink";
import Reveal from "../ui/Reveal";
import SectionIntro from "./SectionIntro";

type Step = {
  number: string;
  label: string;
  description: string;
};

const STEPS: Step[] = [
  { number: "01", label: "Write", description: "Use Earthmend as you would any everyday pen." },
  {
    number: "02",
    label: "Plant",
    description: "When the ink runs out, remove the biodegradable seed capsule and plant it in soil.",
  },
  { number: "03", label: "Grow", description: "Give it suitable sunlight, water and time." },
];

type ProcessStepsProps = {
  id?: string;
  linkLabel: string;
  linkHref: string;
};

/**
 * The WRITE -> PLANT -> GROW progression as an editorial sequence — large
 * serif numerals and hairline dividers, not three boxed cards.
 */
export default function ProcessSteps({ id, linkLabel, linkHref }: ProcessStepsProps) {
  return (
    <Section id={id} tone="cream" spacing="lg">
      <Container size="narrow">
        <SectionIntro
          label="How It Works"
          heading="Three simple steps."
          supporting="Use it. Plant it. Let something grow."
        />

        <div className="mt-14 grid grid-cols-1 divide-y divide-line border-t border-line lg:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:border-b">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 120} className="py-8 lg:px-10 lg:py-2 lg:first:pl-0 lg:last:pr-0">
              <span className="text-display block text-4xl text-ink-muted lg:text-5xl">{step.number}</span>
              <h3 className="text-h3 mt-4 tracking-widest">{step.label.toUpperCase()}</h3>
              <p className="text-body mt-3 max-w-xs text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 lg:mt-14">
          <TextLink href={linkHref}>{linkLabel}</TextLink>
        </div>
      </Container>
    </Section>
  );
}
