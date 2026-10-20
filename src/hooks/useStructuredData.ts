import { useEffect } from "react";

/**
 * Injects a JSON-LD <script> tag into <head> for the lifetime of the
 * mounted component, keyed by `id` so a page can safely replace it on
 * re-render and it's cleanly removed on unmount (e.g. navigating away from
 * The Pen page shouldn't leave its Product schema attached to other pages).
 * Picked up by scripts/prerender.mjs the same way usePageMeta's title and
 * description are, since both run in a useEffect before the page is
 * snapshotted.
 */
export function useStructuredData(id: string, data: object) {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => script?.remove();
  }, [id, data]);
}
