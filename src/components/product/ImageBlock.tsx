type ImageBlockProps = {
  src?: string;
  alt: string;
  /** CSS aspect-ratio value, e.g. "4 / 5". */
  aspect?: string;
  placeholderLabel?: string;
  className?: string;
};

/**
 * Generic framed image primitive. Renders the real photograph when `src`
 * is supplied; otherwise renders an intentional, clearly-labelled
 * placeholder at the correct aspect ratio — never a fabricated product
 * illustration.
 */
export default function ImageBlock({ src, alt, aspect = "4 / 5", placeholderLabel, className = "" }: ImageBlockProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover ${className}`}
        style={{ aspectRatio: aspect }}
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden border border-line bg-surface ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* corner marks, evoking a catalogue photography crop — not a product illustration */}
      <span aria-hidden="true" className="absolute left-4 top-4 h-4 w-4 border-l border-t border-line-strong" />
      <span aria-hidden="true" className="absolute right-4 top-4 h-4 w-4 border-r border-t border-line-strong" />
      <span aria-hidden="true" className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-line-strong" />
      <span aria-hidden="true" className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-line-strong" />

      {placeholderLabel && (
        <span className="absolute inset-0 flex items-center justify-center px-8 text-center text-eyebrow">
          {placeholderLabel}
        </span>
      )}
    </div>
  );
}
