import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import logoMark from "../../assets/brand/logo-mark.png";

function AirIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path
        d="M12,10.8 12.32,10.7 12.68,10.69 13.07,10.79 13.44,11 13.77,11.32 14.01,11.75 14.15,12.25 14.16,12.8 14.02,13.37 13.73,13.92 13.29,14.4 12.71,14.77 12.03,15 11.28,15.05 10.51,14.92 9.77,14.58 9.1,14.06 8.57,13.36 8.21,12.52 8.06,11.59 8.14,10.61 8.47,9.65 9.03,8.77 9.82,8.04 10.79,7.5 11.9,7.2 13.08,7.18 14.26,7.46 15.36,8.02 16.33,8.86 17.08,9.93 17.57,11.18 17.74,12.54 17.57,13.94 17.07,15.29 16.23,16.51 15.1,17.5 13.74,18.22 12.21,18.59 10.6,18.59 9.01,18.19 7.53,17.4 6.26,16.26 5.28,14.82 4.67,13.16 4.46,11.37 4.7,9.54 5.38,7.8 6.48,6.24 7.94,4.97 9.7,4.07 11.65,3.61 13.69,3.64 15.69,4.16 17.54,5.15 19.13,6.59 20.34,8.39 21.09,10.46 21.34,12.69 21.04,14.94"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: "scale(0.72)", transformOrigin: "12px 12px" }}
      />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4,9 C6,7 10,11 12,9 C14,7 18,11 20,9" />
      <path d="M4,13 C6,11 10,15 12,13 C14,11 18,15 20,13" />
      <path d="M4,17 C6,15 10,19 12,17 C14,15 18,19 20,17" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6,8 C7,6.4 9,9.6 10,8 C11,6.4 13,9.6 14,8 C15,6.4 17,9.6 18,8" />
      <path d="M6,12.5 C7,10.9 9,14.1 10,12.5 C11,10.9 13,14.1 14,12.5 C15,10.9 17,14.1 18,12.5" />
      <path d="M6,17 C7,15.4 9,18.6 10,17 C11,15.4 13,18.6 14,17 C15,15.4 17,18.6 18,17" />
    </svg>
  );
}

function EarthIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12,3 C17,7 17,17 12,21 C7,17 7,7 12,3 Z" />
      <path d="M12,5.5 L12,18.5" />
    </svg>
  );
}

const ELEMENTS = [
  {
    Icon: AirIcon,
    label: "Air",
    description: "The spiral — movement and breath.",
    borders: "border-r border-b",
  },
  {
    Icon: WaterIcon,
    label: "Water",
    description: "Wavy lines — purity, and the resources every material draws on.",
    borders: "border-b",
  },
  {
    Icon: FireIcon,
    label: "Fire",
    description: "Small flames — transformation, one thing becoming another.",
    borders: "border-r",
  },
  {
    Icon: EarthIcon,
    label: "Earth",
    description: "A leaf — growth, and what comes after.",
    borders: "",
  },
];

/**
 * The requested "what the mark means" section — built from the real
 * EarthMend logo, not a stand-in graphic. The four small icons in the
 * grid echo the mark's own four elements (spiral, water, fire, leaf)
 * rather than a generic icon set.
 */
export default function WhatTheSymbolMeans() {
  return (
    <Section tone="charcoal" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
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
              {ELEMENTS.map(({ Icon, label, description, borders }) => (
                <div key={label} className={`border-line-inverted py-6 pr-6 ${borders}`}>
                  <div className="flex items-center gap-3 !text-ivory">
                    <Icon />
                    <p className="text-h3 !text-ivory">{label}</p>
                  </div>
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
