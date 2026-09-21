import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThePen from "./pages/ThePen";
import ForBusiness from "./pages/ForBusiness";
import RequestQuote from "./pages/RequestQuote";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="the-pen" element={<ThePen />} />
        <Route path="for-business" element={<ForBusiness />} />
        <Route path="request-quote" element={<RequestQuote />} />
      </Route>
    </Routes>
  );
}
