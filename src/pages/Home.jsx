import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import MidPageCTA from "@/components/MidPageCTA";
import WhyFogSection from "@/components/WhyFogSection";
import MissionSection from "@/components/MissionSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Home() {
  return (
    <>
      {/* Skip-to-content link for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main id="main-content">
          <HeroSection />
          <WhatWeDoSection />

          {/* Mid-page CTA after services intro */}
          <MidPageCTA
            heading="Serving Houston, Katy, Sugar Land & Beyond"
            subtext="From downtown Houston to The Woodlands, Pearland, and Pasadena — our team is ready to protect your space today."
            location="after-what-we-do"
          />

          <WhyFogSection />
          <MissionSection />

          {/* Mid-page CTA before guarantee */}
          <MidPageCTA
            heading="Ready to breathe easier?"
            subtext="After-hours scheduling available so your business never misses a beat. Call or submit a quote request and we'll respond within one business day."
            location="before-guarantee"
          />

          <GuaranteeSection />
        </main>

        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}