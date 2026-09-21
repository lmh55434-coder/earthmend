import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

const APPLICATIONS = [
  { label: "Corporate Gifting", description: "Thoughtful gifts for clients, partners and teams." },
  {
    label: "Events & Conferences",
    description: "A useful takeaway that keeps your brand in people's hands.",
  },
  {
    label: "Trade Shows",
    description: "A memorable alternative to disposable promotional merchandise.",
  },
  { label: "Client Gifts", description: "A small gesture with a story behind it." },
  { label: "Employee Gifts", description: "A practical product with a thoughtful purpose." },
  {
    label: "Brand Activations",
    description: "Turn your brand message into something people can experience.",
  },
  {
    label: "Universities & Organisations",
    description: "Useful branded merchandise for communities and events.",
  },
];

export default function WhereItFits() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="max-w-content-text lg:col-span-5">
            <SectionLabel>Designed for Business</SectionLabel>
            <h2 className="text-h1 mt-4">Made for moments that matter.</h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {APPLICATIONS.map((item) => (
                <li
                  key={item.label}
                  className="group py-5 transition-transform duration-200 ease-editorial hover:translate-x-2"
                >
                  <p className="text-h3 tracking-widest transition-colors duration-200 ease-editorial group-hover:text-moss">
                    {item.label.toUpperCase()}
                  </p>
                  <p className="text-body mt-1 text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
