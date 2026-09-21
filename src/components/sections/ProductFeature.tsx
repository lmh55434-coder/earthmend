import type { ReactNode } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import ProductImage from "../product/ProductImage";
import Reveal from "../ui/Reveal";

type ProductFeatureProps = {
  id?: string;
  number: string;
  label: string;
  heading: ReactNode;
  body: ReactNode;
  linkLabel: string;
  linkHref: string;
  imageSrc?: string;
  imageAlt: string;
  imagePlaceholderLabel?: string;
  imageAspect?: string;
  imageObjectPosition?: string;
  /** Which side the image sits on at desktop width. */
  imageSide?: "start" | "end";
};

/**
 * Large asymmetric product introduction: editorial copy beside a single
 * large image, with a subtle numbered kicker. Used for "The Pen" and
 * reusable for any future single-product spotlight.
 */
export default function ProductFeature({
  id,
  number,
  label,
  heading,
  body,
  linkLabel,
  linkHref,
  imageSrc,
  imageAlt,
  imagePlaceholderLabel,
  imageAspect = "4 / 5",
  imageObjectPosition,
  imageSide = "end",
}: ProductFeatureProps) {
  const text = (
    <Reveal className="max-w-content-text lg:col-span-5">
      <SectionLabel>
        {number} — {label}
      </SectionLabel>
      <h2 className="text-h1 mt-4">{heading}</h2>
      <div className="text-body-lg mt-5 text-ink-muted">{body}</div>
      <TextLink href={linkHref} className="mt-7">
        {linkLabel}
      </TextLink>
    </Reveal>
  );

  const image = (
    <Reveal delay={120} className="lg:col-span-7">
      <ProductImage
        src={imageSrc}
        alt={imageAlt}
        aspect={imageAspect}
        objectPosition={imageObjectPosition}
        placeholderLabel={imagePlaceholderLabel}
        className="w-full"
      />
    </Reveal>
  );

  return (
    <Section id={id} tone="ivory" spacing="lg">
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          {imageSide === "start" ? (
            <>
              {image}
              {text}
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
