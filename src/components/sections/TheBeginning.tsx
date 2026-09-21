import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import penMood from "../../assets/pen/pen-mood.jpg";

/**
 * The origin thought — kept honest and general rather than inventing a
 * founding story with specifics (names, dates, places) this project has
 * no real facts for.
 */
export default function TheBeginning() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          <Reveal className="lg:col-span-6">
            <img
              src={penMood}
              alt="The EarthMend pen resting on a kraft-paper surface"
              className="w-full object-cover"
              style={{ aspectRatio: "5 / 4", objectPosition: "50% 40%" }}
            />
          </Reveal>

          <Reveal delay={120} className="max-w-content-text lg:col-span-6">
            <SectionLabel>The Beginning</SectionLabel>
            <h2 className="text-h1 mt-4">A question, before a pen.</h2>
            <p className="text-body-lg mt-5 text-ink-muted">
              Every business hands out something. A pen, a notebook, a bag — small objects that
              carry a logo for a while, then usually end up in a drawer, or in the bin.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              We kept coming back to the same question: what happens after it&rsquo;s used? Not as
              a slogan, but as a genuine design brief.
            </p>
            <p className="text-body-lg mt-4 text-ink-muted">
              EarthMend is our answer — an everyday writing tool with a second purpose built in,
              not bolted on.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
