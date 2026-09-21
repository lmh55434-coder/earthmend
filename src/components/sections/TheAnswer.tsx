import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penFull from "../../assets/pen/pen-full.jpg";

/**
 * The product reveal — the first time the actual pen appears on this
 * page. Earned by everything above it, rather than leading the page.
 */
export default function TheAnswer() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>09 — The EarthMend Idea</SectionLabel>
          </div>
          <h2 className="text-h1 mt-4">Give the everyday product a second purpose.</h2>
          <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
            EarthMend was created around a simple idea: what if an everyday writing essential
            could have a life beyond its first use?
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12 lg:mt-16">
          <img
            src={penFull}
            alt="The EarthMend kraft-paper pen and its biodegradable seed capsule, resting beside its cap"
            className="w-full object-cover"
            style={{ aspectRatio: "1022 / 380" }}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
