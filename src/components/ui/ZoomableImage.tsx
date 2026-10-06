import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** Enable the zoom trigger at desktop widths too (default: mobile-only). */
  desktopZoomable?: boolean;
};

/**
 * Wraps an <img> with a tap/click-to-zoom lightbox. On wide, very landscape
 * photos (like the hero's feature diagram) the full image reads fine at
 * desktop width but shrinks to a thin strip on phones — this gives mobile
 * visitors a way to open it full-screen and scroll/pinch into the detail
 * instead. By default desktop is untouched (the trigger is inert above the
 * `lg` breakpoint), since most images already show at full size there; pass
 * `desktopZoomable` for images — like a dense infographic — that still
 * benefit from enlarging on desktop.
 */
export default function ZoomableImage({
  src,
  alt,
  className = "",
  style,
  desktopZoomable = false,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleOpen() {
    // Desktop already shows most images at full size — only open there
    // when the caller opts in.
    if (!desktopZoomable && window.matchMedia("(min-width: 1024px)").matches) return;
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label={`Zoom in on image: ${alt}`}
        className={`group relative block w-full cursor-zoom-in ${
          desktopZoomable ? "" : "lg:pointer-events-none lg:cursor-auto"
        }`}
      >
        <img src={src} alt={alt} className={className} style={style} />
        <span
          aria-hidden="true"
          className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/70 text-ivory ${
            desktopZoomable ? "" : "lg:hidden"
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
            <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="7" y1="4.5" x2="7" y2="9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="4.5" y1="7" x2="9.5" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-50 bg-charcoal/95"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close zoomed image"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div
              className="h-full w-full overflow-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex min-h-full items-center p-6 lg:items-center lg:justify-center">
                <img
                  src={src}
                  alt={alt}
                  onClick={() => setOpen(false)}
                  className="w-[220%] max-w-none cursor-zoom-out lg:w-auto lg:max-w-[90vw] lg:max-h-[85vh] lg:object-contain"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
