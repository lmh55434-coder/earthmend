import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import FAQAccordion from "../faq/FAQAccordion";
import { FAQ_SECTIONS } from "../../data/faq";

export default function FAQList() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="space-y-16 lg:space-y-20">
          {FAQ_SECTIONS.map((section, i) => (
            <Reveal key={section.category} delay={i * 80}>
              <SectionLabel>{section.category}</SectionLabel>
              <div className="mt-6">
                <FAQAccordion items={section.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
