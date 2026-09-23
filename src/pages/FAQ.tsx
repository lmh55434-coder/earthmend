import FAQHero from "../components/sections/FAQHero";
import FAQList from "../components/sections/FAQList";
import CTASection from "../components/sections/CTASection";

export default function FAQ() {
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
