import React from "react";
import usePageMeta from "@/hooks/use-page-meta";
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
  usePageMeta(
    "FogTech Services | Cleaning, Maintenance & Specialty Services – Houston, TX",
    "FogTech Services provides residential and corporate cleaning, routine maintenance, fogging, sanitizing, pressure washing, ERV maintenance, and basic non-licensed airflow-related service support in Houston and surrounding areas."
  );

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
            heading="Cleaning & Maintenance Support for Homes, Offices & Properties"
            subtext="From routine cleaning to fogging, sanitizing, pressure washing, ERV maintenance, and basic non-licensed airflow upkeep, FogTech Services helps keep Houston-area spaces cleaner and better maintained."
            location="after-what-we-do"
          />

          <WhyFogSection />
          <MissionSection />

          {/* Mid-page CTA before guarantee */}
          <MidPageCTA
            heading="Ready to schedule cleaning or maintenance?"
            subtext="Residential and corporate service requests are available by appointment. Submit a request and we'll follow up to review your property, service needs, and preferred schedule."
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