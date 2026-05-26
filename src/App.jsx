import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";
import ThankYou from "./pages/ThankYou";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
