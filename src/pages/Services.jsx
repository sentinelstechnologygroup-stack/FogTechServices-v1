import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wind,
  Building2,
  Wrench,
  Droplets,
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
import MobileCallButton from "@/components/MobileCallButton";

const services = [
  {
    Icon: Wind,
    title: "Fogging & Sanitizing",
    description:
      "FogTech Services provides fogging and sanitizing support for homes, offices, commercial spaces, and shared-use environments. Our service is designed to help support cleaner indoor spaces and reduce surface-level contaminants without making unsupported medical or health guarantees.",
  },
  {
    Icon: Building2,
    title: "Residential & Corporate Office Cleaning",
    description:
      "FogTech Services provides routine and project-based cleaning services for residential properties, offices, and corporate environments. Our team focuses on dependable service, clean presentation, and practical cleaning solutions tailored to the property.",
  },
  {
    Icon: Wrench,
    title: "ERV Service & Maintenance",
    description:
      "FogTech Services provides general ERV service and maintenance support for residential, office, and light commercial properties. Energy recovery ventilators help exchange stale indoor air with fresh outdoor air while supporting balanced ventilation. Routine maintenance can help keep filters, accessible components, and airflow paths cleaner and better maintained.",
    serviceItems: [
      "Filter inspection",
      "Filter replacement support",
      "Accessible component cleaning",
      "Intake and exhaust obstruction checks",
      "ERV core visual inspection",
      "Basic operation checks",
      "Maintenance documentation",
    ],
    safetyNote:
      "For mechanical, electrical, ducting, code-compliance, or repair issues, FogTech may recommend review by a qualified HVAC, electrical, or mechanical professional.",
  },
  {
    Icon: Droplets,
    title: "Residential & Corporate Office Pressure Washing",
    description:
      "FogTech Services provides residential and commercial pressure washing support for homes, offices, sidewalks, driveways, entryways, exterior walls, and other exterior surfaces. Our pressure washing services help improve exterior appearance with a focus on safe, professional cleaning.",
  },
];

const clientTypes = [
  { Icon: Home, label: "Residential Homes" },
  { Icon: Briefcase, label: "Corporate Offices" },
  { Icon: Store, label: "Small Businesses" },
  { Icon: Factory, label: "Commercial Properties" },
  { Icon: Users, label: "Shared-Use Spaces" },
  { Icon: UserCheck, label: "Property Managers" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

export default function Services() {
  useEffect(() => {
    document.title = "Services | FogTech Services";

    const descriptionContent =
      "FogTech Services provides fogging, sanitizing, residential and office cleaning, ERV maintenance support, and pressure washing services for homes, offices, and commercial properties.";

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", descriptionContent);
  }, []);

  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ minHeight: "clamp(620px, 72vh, 760px)" }}
          aria-labelledby="services-hero-heading"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(48,164,108,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_28%),linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--card))_52%,hsl(var(--background))_100%)]" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/20" />
          </div>

          <div
            className="relative z-10 flex min-h-[inherit] w-full items-center px-6 pt-28 pb-20 sm:px-10 lg:px-16"
          >
            <motion.div {...fadeUp(0.2)} className="max-w-3xl">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                What We Offer
              </p>
              <h1
                id="services-hero-heading"
                className="max-w-4xl text-[clamp(2.75rem,7vw,5.75rem)] font-black tracking-tight leading-[1.02] mb-6"
              >
                Professional Cleaning, <span className="text-primary">Sanitizing &amp; Maintenance</span> Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                FogTech Services helps homes, offices, and commercial spaces stay cleaner,
                fresher, and better maintained with dependable service options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" aria-label="Request a service from FogTech Services">
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
              What FogTech Services Provides
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
              Routine cleaning and maintenance help properties stay presentable, functional,
              and better prepared for daily use. FogTech Services focuses on practical service,
              clear communication, and dependable support for residential and commercial
              environments.
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
              Need Reliable Cleaning or Maintenance Support?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Contact FogTech Services to discuss your property, service needs, and scheduling
              options.
            </p>
            <Link to="/contact" aria-label="Get in touch with FogTech Services">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get in Touch
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
      <MobileCallButton />
    </>
  );
}