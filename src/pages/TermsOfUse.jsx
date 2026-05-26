import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

const EFFECTIVE_DATE = "January 1, 2024";
const COMPANY = "FogTech Services";
const PHONE = "832-755-6533";
const EMAIL = "info@fogtechservices.com";

export default function TermsOfUse() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Use</h1>
          <p className="text-muted-foreground text-sm">Effective Date: {EFFECTIVE_DATE} · Last reviewed: {EFFECTIVE_DATE}</p>
          <div className="mt-4 p-4 rounded-xl bg-card border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> This is a placeholder terms document pending final legal review. By using this website, you agree to these terms in their current form.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the {COMPANY} website (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Services Described</h2>
            <p>The Site provides information about ERV cleaning, ERV maintenance support, and related facility service coordination offered by {COMPANY} in the Houston, Texas metropolitan area. All service inquiries submitted through the Site are subject to a separate service agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Use of the Site</h2>
            <p>You agree to use this Site only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-muted-foreground">
              <li>Use the Site in any way that violates applicable federal, state, or local laws</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Engage in conduct that restricts or inhibits anyone's use of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p>All content on this Site — including text, graphics, logos, images, and software — is the property of {COMPANY} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Service Agreements & Satisfaction Guarantee</h2>
            <p>Our 100% satisfaction guarantee applies to services rendered under a signed service agreement. Refund eligibility is determined at the sole discretion of {COMPANY} and is subject to the terms of the individual service agreement. Please contact us directly to discuss any service concerns.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Disclaimer of Warranties</h2>
            <p>The Site and its content are provided on an "as is" and "as available" basis. {COMPANY} makes no warranties, express or implied, regarding the accuracy, completeness, or reliability of any information on the Site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, {COMPANY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site or our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Third-Party Links</h2>
            <p>The Site may contain links to third-party websites. These links are provided for convenience only. {COMPANY} has no control over and accepts no responsibility for the content or practices of any third-party sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law provisions. Any disputes shall be resolved in the courts of Harris County, Texas.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Site. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Contact</h2>
            <div className="p-4 rounded-xl bg-card border border-border/50 text-sm space-y-1">
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
            <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}