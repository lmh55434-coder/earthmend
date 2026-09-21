import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

const QUESTIONS = [
  "What is it made from?",
  "How will it be used?",
  "What happens after it is used?",
  "And can we design it with something more in mind?",
];

/**
 * Deliberately quiet — the most human section on the page. No large
 * typography, no image, just whitespace and four short questions.
 */
export default function ProgressNotPerfection() {
  return (
    <Section tone="ivory" spacing="lg">
      <Container size="text">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>07 — Progress Over Perfection</SectionLabel>
          </div>
          <h2 className="text-h1 mx-auto mt-4 max-w-xl">
            Sustainability doesn&rsquo;t have to be perfect to be thoughtful.
          </h2>
          <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
            We don&rsquo;t believe one product can solve a much bigger problem. We believe better
            choices can start with better questions.
          </p>
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-12 max-w-sm space-y-5 lg:mt-16">
          {QUESTIONS.map((question) => (
            <p key={question} className="text-body-lg text-center text-ink-muted">
              {question}
            </p>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
