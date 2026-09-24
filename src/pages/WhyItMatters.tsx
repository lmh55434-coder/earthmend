import WhyMattersHero from "../components/sections/WhyMattersHero";
import AustraliaChanging from "../components/sections/AustraliaChanging";
import PeopleConscious from "../components/sections/PeopleConscious";
import BusinessConsideration from "../components/sections/BusinessConsideration";
import ClaimsMatter from "../components/sections/ClaimsMatter";
import EverydayProducts from "../components/sections/EverydayProducts";
import MaterialDifference from "../components/sections/MaterialDifference";
import ProgressNotPerfection from "../components/sections/ProgressNotPerfection";
import TheQuestion from "../components/sections/TheQuestion";
import TheAnswer from "../components/sections/TheAnswer";
import HowToPlant from "../components/sections/HowToPlant";
import Philosophy from "../components/sections/Philosophy";
import CTASection from "../components/sections/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * The intellectual and emotional foundation of EarthMend — why the choices
 * behind an everyday product matter, told as one continuous editorial
 * argument that ends at the product itself. Not a sales page: For Business
 * and The Pen carry that weight elsewhere.
 */
export default function WhyItMatters() {
  usePageMeta(
    "Why It Matters",
    "Australia is changing. The products people buy, the choices businesses make and the expectations around sustainability are all becoming part of a bigger conversation.",
  );

  return (
    <>
      <WhyMattersHero />
      <AustraliaChanging />
      <PeopleConscious />
      <BusinessConsideration />
      <ClaimsMatter />
      <EverydayProducts />
      <MaterialDifference />
      <ProgressNotPerfection />
      <TheQuestion />
      <TheAnswer />
      <HowToPlant
        label="10 — Write, Plant, Grow"
        heading="This is what happens after it's used."
        supporting="Write until the ink runs out. Plant the seed capsule. Give something new the chance to grow."
      />
      <Philosophy />
      <CTASection
        heading="Start with something small."
        supporting="A better product can start with a better question."
        quoteHref="/the-pen"
        sampleHref="/for-business"
        quoteLabel="Explore the Pen"
        sampleLabel="For Business"
      />
    </>
  );
}
