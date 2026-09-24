import BlogHero from "../components/sections/BlogHero";
import BlogListing from "../components/sections/BlogListing";
import CTASection from "../components/sections/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Blog() {
  usePageMeta(
    "Blog",
    "Notes on sustainable materials, responsible claims, and building brands that leave more than a logo behind.",
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
