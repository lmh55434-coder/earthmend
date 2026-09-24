import type { ReactNode } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import { usePageMeta } from "../../hooks/usePageMeta";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared long-form layout for Privacy and Terms. Deliberately plain — a
 * document to be read and scanned, not an editorial section, so there's
 * no per-paragraph Reveal choreography beyond the opening fade.
 */
export default function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  usePageMeta(title, intro);

  return (
    <Section tone="ivory" spacing="lg">
      <Container size="text">
        <Reveal>
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-h1 mt-4">{title}</h1>
          <p className="text-small mt-3 text-ink-muted">Last updated {lastUpdated}</p>
          <p className="text-body-lg mt-8 text-ink-muted">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading} className={i > 0 ? "border-t border-line pt-10" : undefined}>
                <h2 className="text-h3 tracking-normal">{section.heading}</h2>
                <div className="text-body mt-3 space-y-3 text-ink-muted">{section.body}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
