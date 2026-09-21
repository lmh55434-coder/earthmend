import ImageBlock from "./ImageBlock";

type ProductImageProps = {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: string;
  objectPosition?: string;
  placeholderLabel?: string;
  className?: string;
};

/**
 * The framed "hero shot" treatment used for product photography across
 * the site — a catalogue-plate presentation with an optional caption line.
 * Drop a real photograph in `src/assets` and pass it as `src` once
 * available; until then this renders the ImageBlock placeholder.
 */
export default function ProductImage({
  src,
  alt,
  caption,
  aspect = "4 / 5",
  objectPosition,
  placeholderLabel,
  className = "",
}: ProductImageProps) {
  return (
    <figure className={className}>
      <ImageBlock
        src={src}
        alt={alt}
        aspect={aspect}
        objectPosition={objectPosition}
        placeholderLabel={placeholderLabel}
      />
      {caption && (
        <figcaption className="mt-4 text-eyebrow !normal-case !tracking-normal text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
