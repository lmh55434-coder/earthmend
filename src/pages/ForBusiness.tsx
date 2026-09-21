import BusinessHero from "../components/sections/BusinessHero";
import TheProblem from "../components/sections/TheProblem";
import TheDifference from "../components/sections/TheDifference";
import WhereItFits from "../components/sections/WhereItFits";
import BrandShowcase from "../components/sections/BrandShowcase";
import Customisation from "../components/sections/Customisation";
import OrderSteps from "../components/sections/OrderSteps";
import PricingTable from "../components/sections/PricingTable";
import SampleCTA from "../components/sections/SampleCTA";
import CTASection from "../components/sections/CTASection";

export default function ForBusiness() {
  return (
    <>
      <BusinessHero />
      <TheProblem />
      <TheDifference />
      <WhereItFits />
      <BrandShowcase />
      <Customisation />
      <OrderSteps />
      <PricingTable />
      <SampleCTA />
      <CTASection
        heading="Give your next branded product a second purpose."
        supporting="Whether you're planning an event, gifting clients or building a campaign, let's create something people will remember."
        quoteHref="/#quote"
        sampleHref="/#sample"
      />
    </>
  );
}
