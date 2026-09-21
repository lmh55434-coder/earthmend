import Hero from "../components/sections/Hero";
import TheIdea from "../components/sections/TheIdea";
import WhyItMatters from "../components/sections/WhyItMatters";
import BusinessSection from "../components/sections/BusinessSection";
import StorySection from "../components/sections/StorySection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <TheIdea id="the-idea" />

      <WhyItMatters id="why-it-matters" linkLabel="Explore Why It Matters" linkHref="/why-it-matters" />

      <BusinessSection
        id="for-business"
        quoteHref="/for-business#build-your-order"
        sampleHref="/for-business#build-your-order"
      />

      <StorySection id="our-story" linkLabel="Our Story" linkHref="#our-story" />

      <CTASection
        heading="Start with something small."
        supporting="A better promotional product can start with a better question: what happens after it's used?"
        quoteHref="/for-business#build-your-order"
        sampleHref="/for-business#build-your-order"
      />
    </>
  );
}
