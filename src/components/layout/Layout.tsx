import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

/**
 * Shared page chrome (nav, footer, skip link) around every route.
 * Also resets scroll position on route change, since client-side
 * navigation doesn't do this the way a full page load would.
 */
export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // The browser's own scroll-to-fragment only fires once, at initial
    // load, before this page's content has rendered — so a target id that
    // only exists after React mounts (e.g. a section further down the
    // page) gets missed. Poll briefly for it instead.
    const id = hash.slice(1);
    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        return;
      }
      attempts += 1;
      if (attempts < 20) timeoutId = setTimeout(tryScroll, 50);
    };

    tryScroll();
    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
