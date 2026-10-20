import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "EarthMend";
const SITE_URL = "https://earthmend.com.au";
const ROBOTS_META_ID = "page-robots-meta";
const CANONICAL_LINK_ID = "page-canonical-link";

/**
 * A plain client-side SPA has one static <title>/<meta description> in
 * index.html shared by every route, which search engines see as identical
 * across the whole site. This sets both per page on mount so each route
 * has its own title and description, plus a canonical link so the
 * prerendered dist/<route>/index.html file (see scripts/prerender.mjs)
 * always points back at the clean, trailing-slash-free URL.
 *
 * `noIndex` adds a noindex robots tag for pages with no unique, evergreen
 * content worth indexing (e.g. the personalized quote-request page) —
 * removed again automatically once such a page unmounts.
 */
export function usePageMeta(title: string, description: string, noIndex = false) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);

    let canonical = document.getElementById(CANONICAL_LINK_ID) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.id = CANONICAL_LINK_ID;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
    canonical.href = `${SITE_URL}${cleanPath}`;

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
  }, [title, description, noIndex, pathname]);
}
