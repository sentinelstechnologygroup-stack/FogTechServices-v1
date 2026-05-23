import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

const EFFECTIVE_DATE = "January 1, 2024";
const COMPANY = "FogTech Services";
const PHONE = "832-755-6533";
const EMAIL = "info@fogtechservices.com";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-semibold">{COMPANY}</span>
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Disclaimer</h1>
          <p className="text-muted-foreground text-sm">Effective Date: {EFFECTIVE_DATE} · Last reviewed: {EFFECTIVE_DATE}</p>
          <div className="mt-4 p-4 rounded-xl bg-card border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> This is a placeholder disclaimer pending final legal review. Supporting documentation for product claims will be incorporated upon completion of legal review.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold mb-3">General Disclaimer</h2>
            <p>The information provided on the {COMPANY} website is for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, or suitability of the information, products, or services described.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Service Efficacy Claims</h2>
            <p>All efficacy claims made on this website (including pathogen elimination rates, EPA certifications, and product safety claims) are based on data and documentation provided by the manufacturers of the disinfecting agents and equipment we use. These claims apply when services are performed under recommended conditions and protocols.</p>
            <p className="mt-3">Results may vary depending on factors including but not limited to: property size, ventilation, surface types, pre-existing contamination levels, and adherence to post-treatment guidelines.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">EPA &amp; Regulatory Compliance</h2>
            <p>References to EPA certification refer to the EPA List N certification of the disinfectant products used in our fogging treatments. {COMPANY} complies with all applicable federal, state, and local regulations governing the application of disinfecting agents. Product documentation and Safety Data Sheets (SDS) are available upon request.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Not Medical or Health Advice</h2>
            <p>Nothing on this website constitutes medical, public health, or infectious disease control advice. Our disinfecting services are a supplemental measure and should not be considered a substitute for professional medical guidance, public health recommendations, or comprehensive infection control programs.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">No Guarantee of Specific Outcomes</h2>
            <p>While we stand behind our work with a 100% satisfaction guarantee (subject to service agreement terms), we cannot guarantee the prevention or elimination of all illness or infection at a treated property. Environmental conditions, recontamination, and other factors outside our control may affect outcomes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party References</h2>
            <p>Any references to third-party organizations, certifications, or standards on this Site are for informational context only. {COMPANY} is not affiliated with, endorsed by, or in partnership with any government agency, health authority, or regulatory body unless explicitly stated.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, {COMPANY} shall not be liable for any loss or damage — direct or indirect — arising from reliance on information presented on this website or from the use of our services, except as expressly covered by a signed service agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p>Questions about this disclaimer may be directed to:</p>
            <div className="mt-3 p-4 rounded-xl bg-card border border-border/50 text-sm space-y-1">
              <p><strong>{COMPANY}</strong></p>
              <p>Houston, TX</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></p>
              <p>Phone: <a href="tel:+18327556533" className="text-primary hover:underline">{PHONE}</a></p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}