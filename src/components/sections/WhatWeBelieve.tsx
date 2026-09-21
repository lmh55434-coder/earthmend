import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

const BELIEFS = [
  "We believe useful beats disposable.",
  "We believe materials matter.",
  "We believe a small second purpose is worth designing for.",
];

/**
 * Deliberately quiet — no image, no statistics, just the values in the
 * brand's own voice. Distinct from Why It Matters' Philosophy section,
 * which argues the case rather than states a belief.
 */
export default function WhatWeBelieve() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="text">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>What We Believe</SectionLabel>
          </div>
          <h2 className="text-h1 mx-auto mt-4 max-w-lg">
            Not perfect. Just honest about what a small choice can do.
          </h2>
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-12 max-w-sm space-y-5 lg:mt-16">
          {BELIEFS.map((belief) => (
            <p key={belief} className="text-body-lg text-center text-ink-muted">
              {belief}
            </p>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
