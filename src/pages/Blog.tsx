import BlogHero from "../components/sections/BlogHero";
import BlogListing from "../components/sections/BlogListing";
import CTASection from "../components/sections/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Blog() {
  usePageMeta(
    "Sustainable Living Blog",
    "Articles on sustainable living, zero-waste tips and responsible sustainability claims, plus notes on materials and building brands that leave more than a logo behind.",
  );

  return (
    <>
      <BlogHero />
      <BlogListing />
      <CTASection
        heading="Have a question we haven't answered?"
        supporting="See the pen for yourself, or talk to us about your business."
        quoteHref="/the-pen"
        sampleHref="/for-business"
        quoteLabel="Explore the Pen"
        sampleLabel="For Business"
      />
    </>
  );
}
