import React from "react";
import usePageMeta from "@/hooks/use-page-meta";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

const EFFECTIVE_DATE = "January 1, 2024";
const COMPANY = "FogTech Services";
const PHONE = "832-755-6533";
const EMAIL = "info@fogtechservices.com";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | FogTech Services",
    "Read the FogTech Services privacy policy for cleaning, maintenance, fogging, sanitizing, pressure washing, ERV maintenance, and basic airflow maintenance service inquiries in the Houston area."
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal nav */}
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
          <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Effective Date: {EFFECTIVE_DATE} · Last reviewed: {EFFECTIVE_DATE}</p>
          <div className="mt-4 p-4 rounded-xl bg-card border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> This is a placeholder privacy policy pending final legal review. It reflects our current data practices in good faith. We will update this document as our practices evolve.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Who We Are</h2>
            <p>{COMPANY} ("we," "us," or "our") provides residential cleaning, corporate office cleaning, fogging, sanitizing, pressure washing, ERV maintenance, and basic airflow maintenance support in the Houston, Texas area. This Privacy Policy explains how we collect, use, and protect information you provide when you contact us or use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p>We collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-muted-foreground">
              <li>Name, email address, and phone number (from our contact form)</li>
              <li>The nature of your inquiry or service request</li>
              <li>Property type and service location (if provided)</li>
            </ul>
            <p className="mt-3">We may also collect standard technical data such as IP addresses, browser type, and pages visited through web analytics tools.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-muted-foreground">
              <li>Respond to your inquiries and service requests</li>
              <li>Schedule and provide cleaning, maintenance, fogging, sanitizing, pressure washing, ERV maintenance, and related services</li>
              <li>Send service-related communications</li>
              <li>Improve our website and customer experience</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Retention</h2>
            <p>We retain your contact and service information for as long as necessary to fulfill the purposes outlined in this policy and to comply with applicable legal obligations, typically no longer than three (3) years from your last interaction with us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Cookies & Analytics</h2>
            <p>Our website may use cookies and third-party analytics tools (such as Google Analytics) to understand site traffic and usage patterns. You may disable cookies through your browser settings. Disabling cookies will not affect your ability to contact us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
            <p>We may use trusted third-party services to operate our website or process inquiries (e.g., email providers, form processors). These parties are contractually required to handle your data securely and only for the purposes we specify.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us at:</p>
            <div className="mt-3 p-4 rounded-xl bg-card border border-border/50 text-sm space-y-1">
              <p><strong>{COMPANY}</strong></p>
              <p>Houston, TX</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></p>
              <p>Phone: <a href={`tel:+18327556533`} className="text-primary hover:underline">{PHONE}</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 13 years of age, and we do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will post the revised version on this page with an updated effective date. We encourage you to review this policy from time to time.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}