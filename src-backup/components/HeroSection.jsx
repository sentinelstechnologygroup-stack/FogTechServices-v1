import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function trackEvent(eventName, params = {}) {
  // window.gtag?.('event', eventName, params);
}

const HERO_IMG = "/images/home-hero.png";

const trustBadges = [
  { Icon: Clock, label: "Scheduled Cleaning & Maintenance" },
  { Icon: Shield, label: "Residential, Corporate & Specialty Support" },
  { Icon: MapPin, label: "Houston, TX & Surrounding Areas" },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "clamp(680px, 88vh, 860px)" }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMG}
          alt=""
          role="presentation"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover brightness-[0.72] contrast-[0.92] [object-position:62%_center] md:[object-position:60%_center] lg:[object-position:58%_center]"
          width="1920"
          height="1080"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,10,15,0.97) 0%, rgba(5,10,15,0.88) 42%, rgba(5,10,15,0.56) 70%, rgba(5,10,15,0.38) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,10,15,0.36) 0%, transparent 34%, rgba(5,10,15,0.68) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20"
        style={{
          paddingTop: "clamp(118px, 13vh, 156px)",
          paddingBottom: "clamp(48px, 8vh, 96px)",
        }}
      >
        <div className="max-w-[960px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            aria-hidden="true"
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Houston Cleaning, Maintenance & Specialty Service Support
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 max-w-[920px] text-[clamp(2.75rem,5.4vw,5.35rem)] font-black leading-[0.95] tracking-tight"
          >
            Cleaning &amp; Maintenance
            <br className="hidden lg:block" /> for{" "}
            <span className="text-primary">Homes, Offices & Facilities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-10 max-w-[700px] text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            FogTech Services helps homeowners, property managers, offices, and small businesses keep spaces cleaner, better maintained, and easier to manage with routine cleaning, fogging, sanitizing, pressure washing, ERV service, and basic airflow maintenance support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              onClick={() => trackEvent("hero_cta_click", { type: "request_service" })}
              aria-label="Request cleaning or maintenance service from FogTech Services"
            >
              <Button
                size="lg"
                className="h-13 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
              >
                Request Service
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </a>

            <Link to="/services" aria-label="View FogTech cleaning and maintenance services">
              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/25 bg-black/10 px-8 text-base text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Services
              </Button>
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex list-none flex-wrap gap-6 p-0"
            aria-label="Service highlights"
          >
            {trustBadges.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-slate-300">
                <Icon className="h-4 w-4 flex-shrink-0 text-primary/80" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
