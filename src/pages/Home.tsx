import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import TheIdea from "../components/sections/TheIdea";
import WhyItMatters from "../components/sections/WhyItMatters";
import BusinessSection from "../components/sections/BusinessSection";
import StorySection from "../components/sections/StorySection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <Hero />

        <TheIdea id="the-pen" />

        <WhyItMatters id="why-it-matters" linkLabel="Explore Why It Matters" linkHref="#why-it-matters" />

        <BusinessSection id="for-business" quoteHref="#quote" sampleHref="#sample" />

        <StorySection id="our-story" linkLabel="Our Story" linkHref="#our-story" />

        <CTASection
          heading="Start with something small."
          supporting="A better promotional product can start with a better question: what happens after it's used?"
          quoteHref="#quote"
          sampleHref="#sample"
        />
      </main>

      <Footer />
    </div>
  );
}
