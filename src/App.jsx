import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";
import ThankYou from "./pages/ThankYou";
import Services from "./pages/Services";

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
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <p className="text-lg opacity-70">Page not found.</p>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;