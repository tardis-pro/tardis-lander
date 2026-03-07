import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import TardisMaps from "./pages/TardisMaps";
import NotFound from "./pages/NotFound";
import OfferingsRouter from "./pages/OfferingsRouter";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ResourcesPage from "./pages/ResourcesPage";
import GlossaryPage from "./pages/GlossaryPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CompareIndexPage from "./pages/CompareIndexPage";
import CompareMapboxPage from "./pages/CompareMapboxPage";
import CompareNavratnaPage from "./pages/CompareNavratnaPage";
import CompareGISCompaniesPage from "./pages/CompareGISCompaniesPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/maps" element={<TardisMaps />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/glossary" element={<GlossaryPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/compare" element={<CompareIndexPage />} />
      <Route path="/compare/tardis-maps-vs-mapbox" element={<CompareMapboxPage />} />
      <Route path="/compare/navratna-vs-crewai-vs-langgraph" element={<CompareNavratnaPage />} />
      <Route path="/compare/best-gis-development-companies" element={<CompareGISCompaniesPage />} />
      <Route path="/offerings/:slug" element={<OfferingsRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
