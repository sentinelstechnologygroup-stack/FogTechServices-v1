import React from "react";
import usePageMeta from "@/hooks/use-page-meta";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Contact() {
  usePageMeta(
    "Contact Cleaning & Maintenance Service | FogTech Services",
    "Contact FogTech Services for residential cleaning, corporate office cleaning, fogging, sanitizing, pressure washing, ERV maintenance, and basic non-licensed airflow maintenance support across the Houston area."
  );

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main id="main-content">
          <section className="relative flex min-h-[520px] items-center overflow-hidden pb-16 pt-32" aria-labelledby="contact-page-heading">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_34%),linear-gradient(135deg,_rgba(8,15,25,0.98),_rgba(3,7,18,0.96))]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl"
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                  Contact FogTech Services
                </p>
                <h1
                  id="contact-page-heading"
                  className="text-[clamp(2.75rem,6vw,5.25rem)] font-black leading-[0.98] tracking-tight"
                >
                  Request cleaning, maintenance, or specialty service.
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                  Tell us about your home, office, property, service needs, and preferred schedule. FogTech Services supports homeowners, offices, property teams, and facility operators across the Houston area.
                </p>
              </motion.div>
            </div>
          </section>

          <ContactSection />
        </main>

        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}
