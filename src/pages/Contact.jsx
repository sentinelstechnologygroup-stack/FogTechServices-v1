import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Contact() {
  useEffect(() => {
    const previousTitle = document.title;
    const description =
      "Contact FogTech Services for ERV cleaning, scheduled ERV service, multi-family community service, home ERV service, and maintenance support across the Houston area.";

    document.title = "Contact ERV Service | FogTech Services";

    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        metaDescription?.setAttribute("content", previousDescription);
      }
    };
  }, []);

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
                  Request ERV service or ask a question.
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                  Tell us about your facility, multi-family community, home, ERV service needs, and preferred schedule. FogTech Services supports building operators, property teams, and homeowners across the Houston area.
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
