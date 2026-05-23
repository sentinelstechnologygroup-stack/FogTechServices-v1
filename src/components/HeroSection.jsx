import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// GA4 placeholder
function trackEvent(eventName, params = {}) {
  // window.gtag?.('event', eventName, params);
}

const HERO_IMG = "/images/fogtech-hero.png";

const trustBadges = [
  { Icon: Clock, label: "After-Hours Service" },
  { Icon: Shield, label: "EPA Certified" },
  { Icon: MapPin, label: "Houston, TX & Surrounding Areas" },
];

export default function HeroSection() {
  return (
    <section
      style={{ height: "clamp(600px, 90vh, 960px)" }}
      className="relative flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image — decorative */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMG}
          alt=""
          role="presentation"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center md:object-[60%_center]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/55 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/10" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16" style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(48px, 8vw, 96px)" }}>
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              aria-hidden="true"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary tracking-wide uppercase">
                Houston's Trusted Disinfection Experts
              </span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6"
          >
            Clean Means
            <br />
            <span className="text-primary">Safe.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Professional disinfecting services for commercial and residential
            properties across the Houston metro. Eliminate 99.9% of pathogens
            so you can get back to business — safely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={() => trackEvent('hero_cta_click', { type: 'get_started' })}
              aria-label="Get started — request a quote from FogTech Services"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </a>
            <a
              href="#what-we-do"
              aria-label="Learn more about our disinfecting services"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-border/50 hover:bg-secondary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Learn More
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-6 mt-16 list-none p-0"
            aria-label="Service highlights"
          >
            {trustBadges.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-primary/70 flex-shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
