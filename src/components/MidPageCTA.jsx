import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// GA4 placeholder
function trackEvent(eventName, params = {}) {
  // window.gtag?.('event', eventName, params);
}

export default function MidPageCTA({ heading, subtext, location = "mid-page" }) {
  return (
    <section aria-label="Call to action" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-primary/5 border border-primary/20 p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {heading}
            </h2>
            {subtext && (
              <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto leading-relaxed">
                {subtext}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a
                href="/contact"
                onClick={() => trackEvent('cta_click', { location, type: 'quote' })}
              >
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 font-semibold group"
                  aria-label="Get a free quote from FogTech Services"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </a>
              <a
                href="tel:+18327556533"
                onClick={() => trackEvent('cta_click', { location, type: 'call' })}
              >
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 font-semibold border-border/50"
                  aria-label="Call FogTech Services at 832-755-6533"
                >
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  832-755-6533
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}