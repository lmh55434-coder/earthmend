import BrandShowcase from "../components/sections/BrandShowcase";
import TheProblem from "../components/sections/TheProblem";
import TheDifference from "../components/sections/TheDifference";
import WhereItFits from "../components/sections/WhereItFits";
import BuildYourOrder from "../components/sections/BuildYourOrder";
import SampleCTA from "../components/sections/SampleCTA";
import CTASection from "../components/sections/CTASection";

export default function ForBusiness() {
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
        sampleHref="/#sample"
      />
    </>
  );
}
