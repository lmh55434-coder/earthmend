import { useEffect } from "react";

const SITE_NAME = "EarthMend";
const ROBOTS_META_ID = "page-robots-meta";

/**
 * A plain client-side SPA has one static <title>/<meta description> in
 * index.html shared by every route, which search engines see as identical
 * across the whole site. This sets both per page on mount so each route
 * has its own title and description.
 *
 * `noIndex` adds a noindex robots tag for pages with no unique, evergreen
 * content worth indexing (e.g. the personalized quote-request page) —
 * removed again automatically once such a page unmounts.
 */
export function usePageMeta(title: string, description: string, noIndex = false) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);

    if (noIndex) {
      let robotsMeta = document.getElementById(ROBOTS_META_ID);
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.id = ROBOTS_META_ID;
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex");
      return () => robotsMeta?.remove();
    }
  }, [title, description, noIndex]);
}
