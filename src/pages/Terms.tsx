import LegalPage from "../components/legal/LegalPage";
import TextLink from "../components/ui/TextLink";

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="23 September 2026"
      intro="These terms apply when you use earthmend.com.au or request a quote, sample or order from EarthMend (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By submitting an enquiry or placing an order, you agree to these terms."
      sections={[
        {
          heading: "1. Quotes and pricing",
          body: (
            <>
              <p>
                Pricing shown in our order builder is an estimate based on your selected
                quantity, seeds and packaging, and excludes delivery charges. It isn't a final
                invoice &mdash; we'll confirm final pricing as part of your quote.
              </p>
              <p>
                Bulk orders start at 50 pens. A free single-pen sample is available on request.
                Orders of 5,000 or more are quoted individually.
              </p>
            </>
          ),
        },
        {
          heading: "2. Turnaround & delivery",
          body: (
            <p>
              Typical turnaround for a branded order is 1&ndash;2 weeks from order confirmation,
              depending on quantity and customisation. We currently ship within Australia only.
            </p>
          ),
        },
        {
          heading: "3. Artwork & branding",
          body: (
            <p>
              If you're ordering branded pens, you're responsible for the artwork you upload or
              send us. We review submitted artwork before production and may contact you if it
              isn't suitable for printing. Your logo is printed directly onto the pen's
              kraft-paper barrel.
            </p>
          ),
        },
        {
          heading: "4. Payment",
          body: <p>Payment terms will be confirmed as part of your quote.</p>,
        },
        {
          heading: "5. Product description",
          body: (
            <p>
              We describe our products as accurately as we can, but small variations in natural
              materials like kraft paper and seed capsules are normal and not a fault.
            </p>
          ),
        },
        {
          heading: "6. Cancellations, returns & faults",
          body: (
            <p>
              If something arrives damaged or isn't what you ordered, get in touch and we'll sort
              it out. Beyond that, we consider cancellations and returns on a case-by-case basis.
              Nothing in these terms limits any rights you have under the Australian Consumer Law
              that can't be excluded.
            </p>
          ),
        },
        {
          heading: "7. Intellectual property",
          body: (
            <p>
              The EarthMend name, logo and the content of this website belong to us. You're
              welcome to link to our site, but please don't copy or reuse our content without
              asking.
            </p>
          ),
        },
        {
          heading: "8. Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, EarthMend isn't liable for indirect or consequential
              loss arising from your use of this website or our products, except where that
              liability can't be excluded under the Australian Consumer Law.
            </p>
          ),
        },
        {
          heading: "9. Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. The date at the top of this page shows
              when they were last revised.
            </p>
          ),
        },
        {
          heading: "10. Contact us",
          body: (
            <p>
              These terms are governed by the laws of Queensland, Australia. If you have any
              questions, contact us at{" "}
              <TextLink href="mailto:hello@earthmend.com.au">hello@earthmend.com.au</TextLink> or
              179 Alfred Street, Fortitude Valley QLD 4006.
            </p>
          ),
        },
      ]}
    />
  );
}
