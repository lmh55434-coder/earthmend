import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import TemperatureExplorer from "../climate/TemperatureExplorer";

/**
 * Opens the page's argument proper — an interactive look at Australia's own
 * recent temperature record (real, sourced Bureau of Meteorology figures)
 * beside a short, deliberately unstatistical statement of context. The
 * data doesn't rise every single year — 2022 and 2025 both sit below the
 * year before — so the copy is written to reflect that honestly rather
 * than implying a straight year-on-year climb.
 */
export default function AustraliaChanging() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="lg:col-span-7">
            <p className="text-eyebrow text-center">Australia&rsquo;s Average Temperature</p>
            <div className="mx-auto mt-6 max-w-sm">
              <TemperatureExplorer />
            </div>
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
            <p className="text-body-lg mt-4 text-ink-muted">
              Australia&rsquo;s own temperature record moves from year to year — but every one of
              the last five years has finished above the long-term average.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
