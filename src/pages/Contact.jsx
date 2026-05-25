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
      "Contact FogTech Services for fogging, sanitizing, cleaning, ERV maintenance support, and pressure washing in Houston and surrounding areas.";

    document.title = "Contact | FogTech Services";

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
          <section className="relative min-h-[58vh] flex items-center overflow-hidden pt-24 pb-16" aria-labelledby="contact-page-heading">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_34%),linear-gradient(135deg,_rgba(8,15,25,0.98),_rgba(3,7,18,0.96))]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-5">
                  Contact FogTech Services
                </p>
                <h1
                  id="contact-page-heading"
                  className="font-bold tracking-tight leading-[0.98] text-[clamp(2.75rem,7vw,5.75rem)]"
                >
                  Request service or ask a question.
                </h1>
                <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Tell us about your property, service needs, and preferred schedule. FogTech Services supports residential, office, and light commercial spaces across the Houston area.
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
