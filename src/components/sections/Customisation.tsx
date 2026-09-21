import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penTip from "../../assets/pen/pen-tip.jpg";

const ANNOTATIONS = ["Logo branding", "Custom quantities", "Event orders", "Corporate gifting", "Bulk orders"];

export default function Customisation() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="lg:col-span-6">
            <img
              src={penTip}
              alt="Close-up of the EarthMend pen's kraft-paper barrel, ready for branding"
              className="w-full object-cover"
              style={{ aspectRatio: "5 / 4" }}
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:col-span-6">
            <SectionLabel>Make It Yours</SectionLabel>
            <h2 className="text-h1 mt-4">Designed to carry your brand.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Add your logo or brand identity to create a branded EarthMend pen for your next
              event, campaign or gifting program.
            </p>

            <p className="text-small mt-8 leading-loose">
              {ANNOTATIONS.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < ANNOTATIONS.length - 1 && <span className="px-2 text-kraft">&middot;</span>}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
