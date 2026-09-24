import FAQHero from "../components/sections/FAQHero";
import FAQList from "../components/sections/FAQList";
import CTASection from "../components/sections/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function FAQ() {
  usePageMeta(
    "FAQ",
    "Everything we're asked most often about the pen, ordering for business, and what happens after the ink runs out.",
  );

  return (
    <>
      <FAQHero />
      <FAQList />
      <CTASection
        heading="Still have a question?"
        supporting="Request a free sample, get a quote, or email us directly at hello@earthmend.com.au."
        quoteHref="/for-business#build-your-order"
        sampleHref="/for-business#build-your-order"
        quoteLabel="Get a Quote"
        sampleLabel="Request a Free Sample"
      />
    </>
  );
}
