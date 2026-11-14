import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import ImageBlock from "../product/ImageBlock";

const OPTIONS = [
  { number: "01", label: "Names or event details", description: "Printed on the card." },
  { number: "02", label: "Event date", description: "Your wedding, birthday or shower date." },
  {
    number: "03",
    label: "A personal message",
    description: "Your own thank-you message, printed directly on the pen barrel.",
  },
  {
    number: "04",
    label: "Card design and artwork",
    description: "Choose from EarthMend's botanical card designs.",
  },
  {
    number: "05",
    label: "Seed selection",
    description: "Herbs, flowers, or vegetables and fruit — subject to availability.",
  },
];

/**
 * How personalisation actually works, grounded in one concrete example
 * (the Emma & Daniel wedding favour) rather than left abstract. Reuses
 * TheIdea's numbered-list idiom from the homepage.
 */
export default function PersonalisationSection() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="lg:order-2 lg:col-span-6">
            <ImageBlock
              alt="An example EarthMend wedding favour design for Emma & Daniel, showing their names and wedding date printed on the card and thank-you message on the pen barrel"
              placeholderLabel="Emma & Daniel wedding favour example — to be supplied"
              aspect="4 / 5"
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:order-1 lg:col-span-6">
            <SectionLabel>Personalisation</SectionLabel>
            <h2 className="text-h1 mt-4">Make It Personal. Make It Yours.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Every Special Occasions gift is personalised around your celebration. Tell us your
              own wording and preferences, and we'll put it together with you.
            </p>

            <ol className="mt-10 space-y-6">
              {OPTIONS.map((option) => (
                <li key={option.number} className="flex gap-5 border-l-2 border-line pl-5">
                  <span className="text-h3 text-ink-muted/70" aria-hidden="true">
                    {option.number}
                  </span>
                  <div>
                    <p className="text-body font-medium text-ink">{option.label}</p>
                    <p className="text-body mt-0.5 text-ink-muted">{option.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
