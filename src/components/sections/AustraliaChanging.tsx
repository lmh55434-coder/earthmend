import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penMood from "../../assets/pen/pen-mood.jpg";

/**
 * Opens the page's argument proper — large asymmetric image (real material
 * texture, not a stock "eco" photo) beside a short, deliberately
 * unstatistical statement of context.
 */
export default function AustraliaChanging() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="lg:col-span-7">
            <img
              src={penMood}
              alt="Natural kraft-paper material, resting in warm light"
              className="w-full object-cover"
              style={{ aspectRatio: "6 / 5", objectPosition: "50% 40%" }}
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:col-span-5">
            <SectionLabel>01 — Australia Is Changing</SectionLabel>
            <h2 className="text-h1 mt-4">
              Environmental challenges are becoming part of the conversation.
            </h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Climate and environmental challenges are becoming increasingly relevant to
              Australian communities, businesses and the economy.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              The conversation is no longer limited to environmental organisations or government
              policy. It increasingly intersects with how businesses operate, communicate and make
              decisions.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
