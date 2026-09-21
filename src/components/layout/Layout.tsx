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
    if (hash) return; // let in-page anchors (e.g. #quote) do their own thing
    window.scrollTo(0, 0);
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
