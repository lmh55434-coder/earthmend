import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import QuantitySelector from "../configurator/QuantitySelector";
import SeedSelector from "../configurator/SeedSelector";
import PackagingSelector from "../configurator/PackagingSelector";
import OrderSummary from "../configurator/OrderSummary";
import { getQuantityOption, type QuantityKey } from "../../data/pricing";
import { saveOrderConfig, type OrderConfig } from "../../lib/orderConfig";

const STEPS = [
  { number: "01", label: "Choose Your Quantity" },
  { number: "02", label: "Choose Your Seeds" },
  { number: "03", label: "Design Your Packaging" },
];

/**
 * The interactive order configurator — replaces the old separate "How It
 * Works" timeline and static pricing table with one live-calculating
 * build-your-order experience. Rendered as a dark editorial "chapter" to
 * set it apart as the page's central interaction.
 */
export default function BuildYourOrder() {
  const navigate = useNavigate();
  const [quantityKey, setQuantityKey] = useState<QuantityKey>("100");
  const [seedIds, setSeedIds] = useState<string[]>([]);
  const [packaging, setPackaging] = useState(false);

  const config: OrderConfig = { quantityKey, seedIds, packaging };
  const option = getQuantityOption(quantityKey);

  function handleContinue() {
    if (seedIds.length === 0) return;
    saveOrderConfig(config);
    navigate("/request-quote", { state: config });
  }

  return (
    <Section id="build-your-order" tone="charcoal" spacing="lg">
      <Container size="narrow">
        <Reveal className="max-w-content-text">
          <SectionLabel tone="inverted">Build Your Order</SectionLabel>
          <h2 className="text-h1 !text-ivory mt-4">Your branded pen, your way.</h2>
          <p className="text-body-lg !text-kraft mt-5">
            Choose your quantity, seed and packaging — then make it yours.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-x-16">
          <div className="lg:col-span-7">
            <Reveal className="border-t border-line-inverted pt-8">
              <div className="flex items-baseline gap-5">
                <span className="text-h2 !text-kraft" aria-hidden="true">
                  {STEPS[0].number}
                </span>
                <div>
                  <p className="text-h3 !text-ivory tracking-widest">{STEPS[0].label.toUpperCase()}</p>
                  <p className="text-body !text-kraft mt-1">
                    Select the quantity that suits your event, campaign or gifting program.
                  </p>
                </div>
              </div>
              <QuantitySelector value={quantityKey} onChange={setQuantityKey} />
            </Reveal>

            <Reveal delay={80} className="mt-12 border-t border-line-inverted pt-8">
              <div className="flex items-baseline gap-5">
                <span className="text-h2 !text-kraft" aria-hidden="true">
                  {STEPS[1].number}
                </span>
                <div>
                  <p className="text-h3 !text-ivory tracking-widest">{STEPS[1].label.toUpperCase()}</p>
                  <p className="text-body !text-kraft mt-1">
                    Select the seed options you'd like included in your order.
                  </p>
                </div>
              </div>
              <SeedSelector selected={seedIds} onChange={setSeedIds} />
            </Reveal>

            <Reveal delay={160} className="mt-12 border-t border-line-inverted pt-8">
              <div className="flex items-baseline gap-5">
                <span className="text-h2 !text-kraft" aria-hidden="true">
                  {STEPS[2].number}
                </span>
                <div>
                  <p className="text-h3 !text-ivory tracking-widest">{STEPS[2].label.toUpperCase()}</p>
                  <p className="text-body !text-kraft mt-1">
                    Add individual packaging to your order for a more finished presentation.
                  </p>
                </div>
              </div>
              <PackagingSelector checked={packaging} onChange={setPackaging} unitCount={option.units} />
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-32 lg:col-span-5">
            <OrderSummary config={config} tone="dark" onContinue={handleContinue} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
