import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThePen from "./pages/ThePen";
import WhyItMatters from "./pages/WhyItMatters";
import ForBusiness from "./pages/ForBusiness";
import OurStory from "./pages/OurStory";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RequestQuote from "./pages/RequestQuote";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="the-pen" element={<ThePen />} />
        <Route path="why-it-matters" element={<WhyItMatters />} />
        <Route path="for-business" element={<ForBusiness />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="request-quote" element={<RequestQuote />} />
      </Route>
    </Routes>
  );
}
