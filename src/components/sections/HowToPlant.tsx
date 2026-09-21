import Container from "../layout/Container";
import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import ImageBlock from "../product/ImageBlock";
import SectionIntro from "./SectionIntro";
import penTip from "../../assets/pen/pen-tip.jpg";
import penSeedCapsule from "../../assets/pen/pen-seed-capsule.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

const STEPS = [
  {
    number: "01",
    label: "Write",
    description: "Use the pen normally until the ink runs out.",
    image: penTip,
    alt: "Close-up of the EarthMend pen's writing tip",
  },
  {
    number: "02",
    label: "Plant",
    description: "Remove the biodegradable seed capsule and gently plant it in suitable soil.",
    image: penSeedCapsule,
    alt: "Close-up of the EarthMend pen's biodegradable seed capsule",
  },
  {
    number: "03",
    label: "Grow",
    description: "Give it suitable sunlight, water and time.",
    image: null,
    alt: "",
  },
] as const;

type HowToPlantProps = {
  id?: string;
  label?: string;
  heading?: string;
  supporting?: string;
};

/**
 * The pen's second life, told as one continuous journey — a connecting
 * line across WRITE / PLANT / GROW, each stop carrying its own real
 * detail photo where one exists. No boxed cards; a growth photo doesn't
 * exist yet, so that stop uses the same honest placeholder treatment as
 * everywhere else rather than a fabricated image.
 */
export default function HowToPlant({
  id,
  label = "How to Plant",
  heading = "Give Your Pen a Second Life.",
  supporting = "When your EarthMend pen reaches the end of its writing life, don't simply throw it away. Plant the seed capsule and give something new the chance to grow.",
}: HowToPlantProps) {
  return (
    <Section id={id} tone="cream" spacing="lg">
      <Container size="narrow">
        <SectionIntro label={label} heading={heading} supporting={supporting} />

        <div aria-hidden="true" className="mt-14 flex items-center gap-4 text-eyebrow lg:mt-20">
          {JOURNEY.map((step, i) => (
            <span key={step} className="flex items-center gap-4">
              {step}
              {i < JOURNEY.length - 1 && <span className="h-px w-16 bg-line-strong sm:w-24" />}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 divide-y divide-line border-t border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:border-b">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 120}
              className="py-8 lg:px-10 lg:py-2 lg:first:pl-0 lg:last:pr-0"
            >
              <ImageBlock
                src={step.image ?? undefined}
                alt={step.alt || "Placeholder — growth photography to be added once available"}
                aspect="4 / 3"
                placeholderLabel={step.image ? undefined : "Photography coming soon"}
                className="w-full max-w-xs"
              />
              <p className="text-h3 mt-5 tracking-widest">{step.label.toUpperCase()}</p>
              <p className="text-body mt-2 max-w-xs text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
