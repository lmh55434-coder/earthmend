import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penFull from "../../assets/pen/pen-full.jpg";

const STEPS = ["Your Brand", "Their Everyday", "A Second Purpose"];

/**
 * The page hero: the heading and copy lead, with a large horizontal
 * product photo underneath rather than a boxed hero panel.
 */
export default function BrandShowcase() {
  return (
    <Section tone="ivory" spacing="sm">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>For Business</SectionLabel>
          </div>
          <h1 className="text-h1 mt-4">
            Your brand shouldn&rsquo;t just be seen. It should be remembered.
          </h1>
          <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
            Add your logo or brand identity to an everyday product that people can actually use.
            From conferences to client gifts, EarthMend gives your brand a physical presence with
            a story beyond the first use.
          </p>

          <div
            aria-label="Your brand, their everyday, a second purpose"
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {STEPS.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="text-eyebrow">{step}</span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" className="text-ink-muted">
                    &rarr;
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10 lg:mt-14">
          <img
            src={penFull}
            alt="Close-up of the EarthMend pen's branded kraft-paper barrel"
            className="w-full object-cover"
            style={{ aspectRatio: "16 / 7", objectPosition: "48% 50%" }}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
