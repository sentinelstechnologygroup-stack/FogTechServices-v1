import React from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    Icon: Wind,
    title: "ERV Cleaning",
    description:
      "Professional cleaning for energy recovery ventilation units to help reduce buildup, improve accessible component cleanliness, and support better system performance for commercial buildings, multi-family communities, homes, and facility teams.",
    serviceItems: [
      "Accessible ERV component cleaning",
      "Core and housing cleaning support",
      "Filter area cleaning",
      "Intake and exhaust obstruction checks",
      "Service documentation",
    ],
  },
  {
    Icon: Wrench,
    title: "ERV Maintenance Support",
    description:
      "Preventive ERV maintenance support for property managers, multi-family communities, homeowners, facility operators, and commercial building teams that need a practical service partner for recurring upkeep.",
    serviceItems: [
      "Filter inspection",
      "Filter replacement support",
      "Basic operation checks",
      "Maintenance scheduling support",
      "Service notes after each visit",
    ],
    safetyNote:
      "For mechanical, electrical, ducting, code-compliance, or repair issues, FogTech may recommend review by a qualified HVAC, electrical, or mechanical professional.",
  },
  {
    Icon: Building2,
    title: "Multi-Family Community ERV Scheduled Service",
    description:
      "Scheduled ERV service options for apartment communities, condos, townhomes, and property management portfolios that need recurring maintenance support across multiple units or buildings.",
    serviceItems: [
      "Recurring ERV service scheduling",
      "Community and portfolio service planning",
      "Unit/access coordination notes",
      "Multi-building service documentation",
    ],
  },
  {
    Icon: Home,
    title: "Home ERV Service",
    description:
      "ERV service support for homeowners who need help with cleaning, inspection support, filter/access-panel review, or maintenance guidance for residential ERV systems.",
    serviceItems: [
      "Residential ERV cleaning support",
      "Filter and access-panel review",
      "Visible buildup checks",
      "Maintenance guidance",
    ],
  },
  {
    Icon: Building2,
    title: "ERV Inspection Support",
    description:
      "Visual review and documentation support to help facility teams identify maintenance needs, access-panel concerns, filter issues, buildup, and other items that may require follow-up.",
  },
  {
    Icon: Users,
    title: "ERV Installation & Replacement Coordination",
    description:
      "When installation or replacement is needed, FogTech can coordinate support through qualified subcontractor partners. FogTech does not represent itself as the direct installer unless separately agreed in writing.",
  },
];

const clientTypes = [
  { Icon: Briefcase, label: "Corporate Offices" },
  { Icon: Factory, label: "Commercial Properties" },
  { Icon: Users, label: "Multi-Family Communities" },
  { Icon: Home, label: "Homeowners" },
  { Icon: Store, label: "Small Businesses" },
  { Icon: Users, label: "Facility Teams" },
  { Icon: UserCheck, label: "Property Managers" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

export default function Services() {
  return (
    <>
      <title>ERV Cleaning & Maintenance Services | FogTech Services</title>
      <meta
        name="description"
        content="FogTech Services provides ERV cleaning, ERV maintenance support, inspection support, and scheduled ERV service for commercial buildings, multi-family communities, homes, and facilities."
      />

      <Navbar />

      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────── */}
        <section
          className="relative flex items-end overflow-hidden"
          style={{ minHeight: "clamp(620px, 72vh, 780px)" }}
          aria-labelledby="services-hero-heading"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="https://media.base44.com/images/public/6a10fd596a3ccc0c5e058305/24959acde_generated_3602c4fc.png"
              alt=""
              role="presentation"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-[62%_center] sm:object-[60%_center]"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/65 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
          </div>

          <div className="relative z-10 w-full px-6 pt-32 pb-16 sm:px-10 sm:pt-36 lg:px-16">
            <motion.div {...fadeUp(0.2)} className="max-w-3xl">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                What We Offer
              </p>
              <h1
                id="services-hero-heading"
                className="max-w-[820px] text-[clamp(2.75rem,5.5vw,5.25rem)] font-black tracking-tight leading-[0.95] mb-5"
              >
                ERV Cleaning &amp;
                <br className="hidden sm:block" />
                <span className="text-primary">Maintenance Support</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200/90 mb-8">
                FogTech Services helps commercial properties, multi-family communities,
                homeowners, and facility teams keep energy recovery ventilation systems
                cleaner, better maintained, and documented.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" aria-label="Request a service from FogTech Services">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Request ERV Service
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

        {/* ── Services Grid ────────────────────────────── */}
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
              ERV Services FogTech Provides
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

        {/* ── Who We Serve ─────────────────────────────── */}
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

        {/* ── Why Maintenance Matters ───────────────────── */}
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
              Why Maintenance Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Routine ERV cleaning and maintenance can help reduce buildup in accessible
              components, support better airflow, and give facility teams clearer documentation
              for ongoing building maintenance decisions.
            </p>
          </motion.div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────── */}
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
              Need ERV Cleaning or Maintenance Support?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Contact FogTech Services to discuss your building, community, home, ERV service needs, and scheduling
              options.
            </p>
            <Link to="/contact" aria-label="Get in touch with FogTech Services">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Request ERV Service
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