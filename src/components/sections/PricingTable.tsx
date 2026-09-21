import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionIntro from "./SectionIntro";

const TIERS = [
  { quantity: "50", price: "A$5.50 each" },
  { quantity: "100", price: "A$4.30 each" },
  { quantity: "250", price: "A$4.00 each" },
  { quantity: "500", price: "A$3.70 each" },
  { quantity: "1,000", price: "A$3.10 each" },
  { quantity: "2,500", price: "A$2.80 each" },
  { quantity: "5,000", price: "A$2.40 each" },
  { quantity: "Above 5,000", price: "Custom quote" },
];

/**
 * An editorial pricing table — a real <table>, thin row dividers, no
 * boxed price cards. Prices are indicative; the note beneath says so.
 */
export default function PricingTable() {
  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <SectionIntro
          label="Quantity & Pricing"
          heading="Order for your next occasion."
          supporting="Choose the quantity that suits your campaign, event or gifting program."
        />

        <Reveal delay={120} className="mt-12 lg:mt-16">
          <table className="w-full max-w-2xl border-collapse">
            <caption className="sr-only">Indicative pricing by order quantity</caption>
            <thead>
              <tr className="border-b border-line-strong">
                <th scope="col" className="text-eyebrow py-3 text-left font-medium">
                  Quantity
                </th>
                <th scope="col" className="text-eyebrow py-3 text-right font-medium">
                  Indicative Price
                </th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((tier) => (
                <tr key={tier.quantity} className="border-b border-line">
                  <td className="text-h3 py-4 tracking-normal">{tier.quantity}</td>
                  <td className="text-body-lg py-4 text-right tabular-nums text-ink-muted">
                    {tier.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-small mt-6 max-w-xl">
            Pricing may vary depending on branding, packaging, quantity and order requirements.
            Contact us for a tailored quote.
          </p>

          <Button href="/#quote" variant="primary" className="mt-8">
            Get a Quote
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
