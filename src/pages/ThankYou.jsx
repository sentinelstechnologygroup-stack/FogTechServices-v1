import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// GA4 placeholder — fire conversion event on mount
function trackConversion() {
  // window.gtag?.('event', 'conversion', { send_to: 'G-XXXXXXXXXX/XXXXXXXXXX' });
  // window.gtag?.('event', 'contact_form_submitted', { method: 'web_form' });
}

export default function ThankYou() {
  useEffect(() => {
    trackConversion();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Minimal header */}
      <header className="border-b border-border/50 px-6 py-5" role="banner">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="FogTech Services — return to homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center" aria-hidden="true">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-semibold">FogTech Services</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main
        className="flex-1 flex items-center justify-center px-6 py-20"
        role="main"
        aria-labelledby="thankyou-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-lg w-full text-center"
        >
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-8"
            aria-hidden="true"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>

          <h1
            id="thankyou-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Thank You!
          </h1>
          <p className="text-xl text-primary font-semibold mb-3">
            We've received your message.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A member of our Houston team will be in touch with you shortly — usually within one business day. We look forward to making your space safe and clean.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto mb-8" aria-hidden="true" />

          {/* Contact options */}
          <p className="text-sm text-muted-foreground mb-5">
            Need to reach us sooner?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="tel:+18327556533"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Call FogTech Services at 832-755-6533"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              832-755-6533
            </a>
            <a
              href="mailto:info@fogtechservices.com"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border/50 text-foreground font-semibold text-sm hover:bg-secondary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Email FogTech Services at info@fogtechservices.com"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              info@fogtechservices.com
            </a>
          </div>

          <Link to="/">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Return to FogTech Services homepage"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </main>

      <footer className="border-t border-border/50 py-6 px-6" role="contentinfo">
        <div className="max-w-4xl mx-auto text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FogTech Services · Houston, TX · 832-755-6533</p>
        </div>
      </footer>
    </div>
  );
}