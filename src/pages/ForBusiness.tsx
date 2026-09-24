import BrandShowcase from "../components/sections/BrandShowcase";
import TheProblem from "../components/sections/TheProblem";
import TheDifference from "../components/sections/TheDifference";
import WhereItFits from "../components/sections/WhereItFits";
import BuildYourOrder from "../components/sections/BuildYourOrder";
import SampleCTA from "../components/sections/SampleCTA";
import CTASection from "../components/sections/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ForBusiness() {
  usePageMeta(
    "For Business",
    "Add your logo or brand identity to an everyday product that people can actually use. From conferences to client gifts, EarthMend gives your brand a physical presence with a story beyond the first use.",
  );

  return (
    <>
      <BrandShowcase />
      <TheProblem />
      <TheDifference />
      <WhereItFits />
      <BuildYourOrder />
      <SampleCTA />
      <CTASection
        heading="Give your next branded product a second purpose."
        supporting="Whether you're planning an event, gifting clients or building a campaign, let's create something people will remember."
        quoteHref="/for-business#build-your-order"
        sampleHref="/for-business#build-your-order"
      />
    </>
  );
}
