import LegalPage from "../components/legal/LegalPage";
import TextLink from "../components/ui/TextLink";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="23 September 2026"
      intro="EarthMend (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect when you visit earthmend.com.au or request a quote or sample, how we use it, and who we share it with."
      sections={[
        {
          heading: "1. Information we collect",
          body: (
            <>
              <p>
                <strong className="text-ink">Contact and order details you give us.</strong> When
                you request a quote or a free sample, we collect your full name, company name,
                phone number, email address, postal address, and any message you send us. If you
                upload a logo or brand artwork, we collect that file too.
              </p>
              <p>
                <strong className="text-ink">Order configuration.</strong> When you build an
                order &mdash; choosing a quantity, seeds and packaging &mdash; that configuration
                is temporarily stored in your browser (using session storage) so it's remembered
                if you continue on to the quote form. This stays on your device and is only sent
                to us once you submit an enquiry; it clears automatically when you close your
                browser.
              </p>
              <p>We don't use cookies, analytics trackers or advertising pixels on this site.</p>
            </>
          ),
        },
        {
          heading: "2. How we use your information",
          body: (
            <>
              <p>We use the information you give us to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>respond to your enquiry and prepare a quote;</li>
                <li>process and fulfil orders you place with us; and</li>
                <li>communicate with you about your order.</li>
              </ul>
              <p>
                We don't use your information to market to you unless you've asked us to, and we
                don't sell your information to third parties.
              </p>
            </>
          ),
        },
        {
          heading: "3. Who we share it with",
          body: (
            <>
              <p>
                <strong className="text-ink">Netlify.</strong> Quote and sample enquiries
                submitted through our website are processed and stored using Netlify's form
                service, so the information you submit passes through Netlify's infrastructure to
                reach us.
              </p>
              <p>
                <strong className="text-ink">Google Fonts.</strong> This site loads typefaces from
                Google Fonts. Loading a typeface involves your browser making a request to
                Google's servers, which may log your IP address as part of that request.
              </p>
              <p>We don't share your information with any other third party except where required by law.</p>
            </>
          ),
        },
        {
          heading: "4. Data storage & security",
          body: (
            <p>
              We take reasonable steps to protect the information you give us. No method of
              storage or transmission over the internet is completely secure, but we don't hold
              more information than we need, and we don't keep uploaded artwork or enquiry details
              any longer than is necessary to respond to you and fulfil any resulting order.
            </p>
          ),
        },
        {
          heading: "5. Your rights",
          body: (
            <p>
              You can ask us what information we hold about you, ask us to correct it, or ask us
              to delete it, by emailing{" "}
              <TextLink href="mailto:hello@earthmend.com.au">hello@earthmend.com.au</TextLink>.
            </p>
          ),
        },
        {
          heading: "6. Children's privacy",
          body: <p>This site isn't directed at children, and we don't knowingly collect information from children.</p>,
        },
        {
          heading: "7. Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time. The date at the top of this page shows
              when it was last revised.
            </p>
          ),
        },
        {
          heading: "8. Contact us",
          body: (
            <p>
              This policy is governed by the laws of Queensland, Australia. If you have any
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
