import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import logoMark from "../../assets/brand/logo-mark.png";
import airIcon from "../../assets/brand/elements/air.png";
import waterIcon from "../../assets/brand/elements/water.png";
import fireIcon from "../../assets/brand/elements/fire.png";
import earthIcon from "../../assets/brand/elements/earth.png";

const ELEMENTS = [
  {
    icon: airIcon,
    label: "Air",
    description: "The spiral — movement and breath.",
    borders: "border-r border-b",
  },
  {
    icon: waterIcon,
    label: "Water",
    description: "Wavy lines — purity, and the resources every material draws on.",
    borders: "border-b",
  },
  {
    icon: fireIcon,
    label: "Fire",
    description: "Small flames — transformation, one thing becoming another.",
    borders: "border-r",
  },
  {
    icon: earthIcon,
    label: "Earth",
    description: "A leaf — growth, and what comes after.",
    borders: "",
  },
];

/**
 * The requested "what the mark means" section — built from the real
 * EarthMend logo. The four small icons are cropped directly from the mark
 * itself (src/assets/brand/elements), not redrawn approximations, so they
 * match it exactly. Dark-stroke artwork, so inverted for this dark section.
 */
export default function WhatTheSymbolMeans() {
  return (
    <Section tone="charcoal" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="lg:col-span-5">
            <img
              src={logoMark}
              alt="The EarthMend mark"
              className="h-32 w-32 invert lg:h-40 lg:w-40"
            />
            <p className="text-body mt-6 max-w-xs !text-kraft">
              The intersecting lines read as balance — four elements crossing into one shape,
              standing for the materials every EarthMend product draws on, and returns to.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <SectionLabel tone="inverted">The Mark</SectionLabel>
            <h2 className="text-h1 !text-ivory mt-4">What the symbol means.</h2>

            <div className="mt-10 grid grid-cols-1 border-t border-line-inverted sm:grid-cols-2">
              {ELEMENTS.map(({ icon, label, description, borders }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center border-line-inverted px-6 py-8 text-center ${borders}`}
                >
                  <img src={icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain invert" />
                  <p className="text-h3 !text-ivory mt-3">{label}</p>
                  <p className="text-body mt-2 max-w-xs !text-kraft">{description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
