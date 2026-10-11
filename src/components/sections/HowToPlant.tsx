import Container from "../layout/Container";
import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import ImageBlock from "../product/ImageBlock";
import SectionIntro from "./SectionIntro";
import ZoomableImage from "../ui/ZoomableImage";
import journeyWrite from "../../assets/marketing/journey-write.jpg";
import journeyPlant from "../../assets/marketing/journey-plant.jpg";
import journeyGrow from "../../assets/marketing/journey-grow.jpg";
import seedVarieties from "../../assets/marketing/seed-varieties.jpg";

const JOURNEY = ["Write", "Plant", "Grow"];

const STEPS = [
  {
    number: "01",
    label: "Write",
    description: "Use the pen normally until the ink runs out.",
    image: journeyWrite,
    alt: "A hand writing with the EarthMend pen in a notebook",
  },
  {
    number: "02",
    label: "Plant",
    description: "Remove the biodegradable seed capsule and gently plant it in suitable soil.",
    image: journeyPlant,
    alt: "The EarthMend pen planted in a pot of soil",
  },
  {
    number: "03",
    label: "Grow",
    description: "Give it suitable sunlight, water and time.",
    image: journeyGrow,
    alt: "The EarthMend pen planted among flowering foliage, grown in a sunny spot",
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
 * lifestyle photo. No boxed cards.
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
                src={step.image}
                alt={step.alt}
                aspect="3 / 4"
                className="w-full max-w-xs"
              />
              <p className="text-h3 mt-5 tracking-widest">{step.label.toUpperCase()}</p>
              <p className="text-body mt-2 max-w-xs text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360} className="mt-14 lg:mt-20">
          <p className="text-eyebrow">Choose Your Seeds</p>
          <p className="text-body mt-2 max-w-content-text text-ink-muted">
            A look at the herb, flower, and vegetable and fruit varieties behind each seed option.
          </p>
          <ZoomableImage
            src={seedVarieties}
            alt="A catalogue of seed varieties available in the EarthMend seed capsule: herbs (basil, thyme, sage, parsley, rucola), flowers (sunflower, forget-me-not, wildflower, daisy, eternity flower), and vegetables and fruit (cherry tomato, cucumber, melon, strawberry, chili)"
            className="mt-7 w-full border border-line"
            desktopZoomable
          />
        </Reveal>
      </Container>
    </Section>
  );
}
