import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";

const SCALE = [
  { quantity: "100 pens", amount: "≈ 500g" },
  { quantity: "500 pens", amount: "≈ 2.5kg" },
  { quantity: "1,000 pens", amount: "≈ 5kg" },
  { quantity: "2,500 pens", amount: "≈ 12.5kg" },
  { quantity: "5,000 pens", amount: "≈ 25kg" },
];

// TODO: Add documented comparison methodology and source before final
// publication. The 5g figure is currently an internal product/material
// comparison against EarthMend's own conventional-pen baseline — it has
// not been independently verified, and the copy below is written to
// avoid implying otherwise. Do not attach a specific baseline, source or
// verification claim to this figure until one actually exists.
export default function MaterialDifference() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="text">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>06 — A Small Material Difference</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-8 text-center lg:mt-10">
          <p className="text-eyebrow">Approx.</p>
          <p className="text-display mt-2" style={{ fontSize: "clamp(4.5rem, 3rem + 8vw, 9rem)" }}>
            5g
          </p>
          <p className="text-eyebrow mt-2">Less Plastic Per Pen</p>
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-10 max-w-xl text-center lg:mt-12">
          <p className="text-body-lg text-ink-muted">
            Based on EarthMend&rsquo;s current material comparison against its defined
            conventional-pen baseline, the EarthMend design uses approximately 5 grams less
            plastic per pen.
          </p>
          <p className="text-body-lg mt-4 text-ink-muted">
            One pen is a small choice. At scale, small material differences can become more
            meaningful.
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-12 lg:mt-16">
          <table className="mx-auto w-full max-w-md border-collapse">
            <caption className="sr-only">
              Approximate material difference at scale, based on 5g per pen
            </caption>
            <tbody>
              {SCALE.map((row) => (
                <tr key={row.quantity} className="border-b border-line">
                  <td className="text-body py-3 text-ink-muted">{row.quantity}</td>
                  <td className="text-h3 py-3 text-right tracking-normal">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-small mx-auto mt-4 max-w-md text-center">
            Mathematical extrapolations from the approximately 5g-per-pen comparison — not an
            independently verified measure of environmental impact.
          </p>
        </Reveal>

        <Reveal delay={260} className="mx-auto mt-10 max-w-xl border-l-2 border-line pl-5">
          <p className="text-small">
            <strong className="text-ink">How we calculate this.</strong> Approximately 5g less
            plastic per pen, based on our current material comparison. Material comparison based
            on EarthMend&rsquo;s current product specification and defined comparison baseline.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
