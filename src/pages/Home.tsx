import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
