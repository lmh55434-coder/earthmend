import BlogHero from "../components/sections/BlogHero";
import BlogListing from "../components/sections/BlogListing";
import CTASection from "../components/sections/CTASection";

export default function Blog() {
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
