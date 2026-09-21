import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";
import ProductImage from "../product/ProductImage";

const JOURNEY = ["Write", "Plant", "Grow"];

export default function Hero() {
  return (
    <Section tone="ivory" spacing="sm" className="flex items-center lg:min-h-[75vh]">
      <Container>
        {/*
          Custom grid rather than EditorialSplit: the brief asks for a
          specific mobile reading order (text → image → CTA) that differs
          from the desktop order (text+CTA in one column, image beside it),
          which needs per-block `order`, not a simple two-slot swap.
        */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          <div className="order-1 max-w-md lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h1 className="text-display">A Pen That Gives Back.</h1>
            <p className="text-body-lg mt-6 max-w-sm text-ink-muted">
              Thoughtfully designed from sustainable materials, Earthmend turns an everyday
              writing essential into something that can be used, planted and grown.
            </p>
          </div>

          <ProductImage
            alt="Placeholder for Earthmend pen product photography"
            aspect="6 / 5"
            placeholderLabel="Product Photography"
            className="order-2 w-full lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center"
          />

          <div className="order-3 max-w-md lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#the-pen" variant="primary">
                Explore the Pen
              </Button>
              <Button href="#for-business" variant="secondary">
                For Business
              </Button>
            </div>

            <div
              aria-label="The Earthmend journey: write, plant, grow"
              className="mt-14 flex items-center gap-3 lg:mt-16"
            >
              {JOURNEY.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="text-eyebrow">{step}</span>
                  {i < JOURNEY.length - 1 && (
                    <span aria-hidden="true" className="text-ink-muted">
                      &rarr;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
