import React from "react";
import usePageMeta from "@/hooks/use-page-meta";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wind,
  Building2,
  Wrench,
  ArrowRight,
  Home,
  Briefcase,
  Store,
  Factory,
  Users,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  Droplets,
  SprayCan,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    Icon: Home,
    title: "Residential Cleaning",
    description:
      "Routine and deep cleaning support for homes, townhomes, apartments, move-in/move-out needs, and recurring household upkeep.",
    serviceItems: [
      "General home cleaning",
      "Deep cleaning support",
      "Move-in / move-out cleaning",
      "Recurring cleaning schedules",
      "Kitchen, bath, and common-area cleaning",
    ],
  },
  {
    Icon: Building2,
    title: "Corporate Office Cleaning",
    description:
      "Cleaning support for offices, small commercial spaces, property teams, shared work areas, and scheduled facility upkeep.",
    serviceItems: [
      "Office cleaning",
      "Breakroom and common-area cleaning",
      "Restroom cleaning support",
      "Recurring service scheduling",
      "After-hours appointment options",
    ],
  },
  {
    Icon: Droplets,
    title: "Fogging & Sanitizing",
    description:
      "Specialty fogging and sanitizing support for residential, office, commercial, and shared-space environments that need a fresher reset.",
    serviceItems: [
      "Fogging support",
      "Surface sanitizing support",
      "Residential and corporate service",
      "One-time or scheduled appointments",
    ],
  },
  {
    Icon: SprayCan,
    title: "Pressure Washing",
    description:
      "Exterior cleaning support for walkways, patios, driveways, entrances, common areas, and other appropriate outdoor surfaces.",
    serviceItems: [
      "Residential pressure washing",
      "Commercial entrance and walkway cleaning",
      "Patio and exterior common-area support",
      "Scheduled exterior cleaning options",
    ],
  },
  {
    Icon: Wind,
    title: "ERV Cleaning & Maintenance",
    description:
      "Specialty ERV cleaning and maintenance support for homes, commercial spaces, and facility teams that need practical ventilation-system upkeep.",
    serviceItems: [
      "Accessible ERV component cleaning",
      "Filter area and access-panel review",
      "Visible buildup checks",
      "Basic maintenance guidance",
      "Service notes when appropriate",
    ],
    safetyNote:
      "ERV installation and replacement work is coordinated through qualified subcontractor partners unless otherwise agreed in writing. Mechanical, electrical, ducting, code-compliance, or repair issues may require a licensed professional.",
  },
  {
    Icon: Wrench,
    title: "Basic Non-Licensed Airflow Maintenance",
    description:
      "Basic HVAC-adjacent maintenance that does not require a licensed HVAC contractor, such as filter checks, vent cleaning support, and visible airflow-obstruction review.",
    serviceItems: [
      "Filter check and replacement support",
      "Vent and register cleaning support",
      "Visible obstruction checks",
      "Basic maintenance documentation",
    ],
    safetyNote:
      "FogTech does not perform licensed HVAC repair, refrigerant work, electrical repair, mechanical modification, or code-required HVAC services unless coordinated with a qualified provider.",
  },
];

const clientTypes = [
  { Icon: Home, label: "Homeowners" },
  { Icon: Briefcase, label: "Corporate Offices" },
  { Icon: Store, label: "Small Businesses" },
  { Icon: Users, label: "Multi-Family Communities" },
  { Icon: Factory, label: "Commercial Properties" },
  { Icon: UserCheck, label: "Property Managers" },
  { Icon: Users, label: "Facility Teams" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

export default function Services() {
  usePageMeta(
    "Cleaning, Maintenance & Specialty Services | FogTech Services",
    "FogTech Services provides residential cleaning, corporate office cleaning, fogging, sanitizing, pressure washing, ERV maintenance, and basic non-licensed airflow maintenance support in Houston and surrounding areas."
  );

  return (
    <>
      <Navbar />

      <main id="main-content">
        <section
          className="relative flex items-end overflow-hidden"
          style={{ minHeight: "clamp(620px, 72vh, 780px)" }}
          aria-labelledby="services-hero-heading"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="/images/services-hero.png"
              alt=""
              role="presentation"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-[62%_center] sm:object-[60%_center]"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/86 via-background/70 to-background/34" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/82 via-transparent to-background/20" />
          </div>

          <div className="relative z-10 w-full px-6 pt-32 pb-16 sm:px-10 sm:pt-36 lg:px-16">
            <motion.div {...fadeUp(0.2)} className="max-w-3xl">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                What We Offer
              </p>
              <h1
                id="services-hero-heading"
                className="max-w-[860px] text-[clamp(2.75rem,5.5vw,5.25rem)] font-black tracking-tight leading-[0.95] mb-5"
              >
                Cleaning &amp; Maintenance
                <br className="hidden sm:block" />
                <span className="text-primary">Services That Fit Real Properties</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200/90 mb-8">
                FogTech Services supports homes, offices, small businesses, property managers, and facility teams with practical cleaning, sanitizing, pressure washing, ERV maintenance, and basic non-licensed airflow maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" aria-label="Request cleaning or maintenance service from FogTech Services">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Request Service
                    <ArrowRight
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
                <Link to="/contact" aria-label="Contact FogTech Services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 h-14 text-base border-border/50 hover:bg-secondary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Contact FogTech
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
          aria-labelledby="services-grid-heading"
        >
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase">
              Our Services
            </p>
            <h2
              id="services-grid-heading"
              className="text-3xl md:text-4xl font-bold mt-4 tracking-tight"
            >
              Cleaning Services First, Specialty Maintenance When Needed
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map(({ Icon, title, description, serviceItems, safetyNote }, i) => (
              <motion.article
                key={title}
                {...fadeUp(i * 0.1)}
                className="bg-card border border-border/50 rounded-3xl p-8 flex flex-col gap-5 hover:border-primary/30 transition-colors duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>

                  {serviceItems && (
                    <ul className="space-y-2 list-none p-0">
                      {serviceItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2
                            className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {safetyNote && (
                    <div className="flex items-start gap-3 bg-secondary/40 border border-border/50 rounded-xl px-4 py-3 text-xs text-muted-foreground leading-relaxed">
                      <AlertCircle
                        className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{safetyNote}</span>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  aria-label={`Request ${title} service`}
                >
                  Request This Service{" "}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          className="py-20 md:py-28 bg-card/40 border-t border-b border-border/40"
          aria-labelledby="who-we-serve-heading"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <motion.div {...fadeUp()} className="text-center mb-12">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase">
                Clients
              </p>
              <h2
                id="who-we-serve-heading"
                className="text-3xl md:text-4xl font-bold mt-4 tracking-tight"
              >
                Who We Serve
              </h2>
            </motion.div>
            <ul className="flex flex-wrap justify-center gap-5 list-none p-0">
              {clientTypes.map(({ Icon, label }, i) => (
                <motion.li
                  key={label}
                  {...fadeUp(i * 0.08)}
                  className="flex items-center gap-3 bg-card border border-border/50 rounded-2xl px-6 py-4 text-sm font-medium"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  {label}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center"
          aria-labelledby="maintenance-heading"
        >
          <motion.div {...fadeUp()}>
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Why It Matters
            </p>
            <h2
              id="maintenance-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              Consistent Cleaning Prevents Bigger Problems
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Routine cleaning and maintenance helps homes, offices, and properties stay safer, fresher, and easier to operate. FogTech keeps the service offering practical: common cleaning first, then specialty support when the property needs fogging, sanitizing, pressure washing, ERV service, or basic airflow upkeep.
            </p>
          </motion.div>
        </section>

        <section
          className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-card/40 border-t border-border/40 text-center"
          aria-labelledby="services-cta-heading"
        >
          <motion.div {...fadeUp()} className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h2
              id="services-cta-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            >
              Need Cleaning or Maintenance Support?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Contact FogTech Services to discuss your home, office, property, service needs, and scheduling options.
            </p>
            <Link to="/contact" aria-label="Get in touch with FogTech Services">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Request Service
                <ArrowRight
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
