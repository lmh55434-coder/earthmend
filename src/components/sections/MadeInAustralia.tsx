import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penTip from "../../assets/pen/pen-tip.jpg";

/**
 * Ties the story back to the physical product using only facts already
 * established elsewhere in the codebase (materials, made in Australia) —
 * no new claims invented for this page.
 */
export default function MadeInAustralia() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="max-w-content-text lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <SectionLabel>Made In Australia</SectionLabel>
            <h2 className="text-h1 mt-4">Small enough to matter, real enough to hold.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Every EarthMend pen carries a kraft-paper barrel and a biodegradable seed capsule —
              designed to be used first, and planted after.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              It&rsquo;s made in Australia, for Australian businesses who want their brand to leave
              a better impression than a pen that gets thrown away.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <img
              src={penTip}
              alt="Close-up of the EarthMend pen's kraft-paper barrel and writing tip"
              className="w-full object-cover"
              style={{ aspectRatio: "6 / 5", objectPosition: "50% 45%" }}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
