import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penSeedCapsule from "../../assets/pen/pen-seed-capsule.jpg";

const IS = [
  "A pen with a biodegradable seed capsule",
  "A specific material comparison, clearly explained",
  "One thoughtful choice among many",
];

const ISNT = [
  "A solution to climate change",
  "A claim of zero environmental impact",
  "A substitute for broader action",
];

/**
 * The page's own demonstration of responsible claims — a concrete "what it
 * is / what it isn't" contrast rather than an abstract lecture on
 * greenwashing.
 */
export default function ClaimsMatter() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="lg:col-span-5">
            <img
              src={penSeedCapsule}
              alt="Close-up of the EarthMend pen's biodegradable seed capsule"
              className="w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <SectionLabel>04 — Claims Matter</SectionLabel>
            <h2 className="text-h1 mt-4">Better choices also require better claims.</h2>
            <p className="text-body-lg mt-5 max-w-content-text text-ink-muted">
              As sustainability becomes more visible in business, environmental claims need to be
              communicated carefully. Claims should be truthful, accurate, clear and supported by
              reasonable grounds.
            </p>
            <p className="text-body-lg mt-4 max-w-content-text text-ink-muted">
              That means being precise about what a product actually does — and what it doesn&rsquo;t.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-eyebrow">What It Is</p>
                <ul className="mt-3 space-y-2">
                  {IS.map((item) => (
                    <li key={item} className="text-body text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-eyebrow">What It Isn&rsquo;t</p>
                <ul className="mt-3 space-y-2">
                  {ISNT.map((item) => (
                    <li key={item} className="text-body text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
