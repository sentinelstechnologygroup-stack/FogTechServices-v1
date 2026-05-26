import React from "react";
import { Building2, Home, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    Icon: Building2,
    title: "Commercial ERV Cleaning",
    description:
      "ERV cleaning and maintenance support for offices, facilities, retail spaces, warehouses, and other Houston-area commercial properties.",
  },
  {
    Icon: CalendarCheck,
    title: "Multi-Family Scheduled Service",
    description:
      "Planned ERV service options for apartment communities, condos, townhomes, and property management portfolios that need repeatable maintenance support.",
  },
  {
    Icon: Home,
    title: "Home ERV Service",
    description:
      "ERV service support for homeowners who need cleaning, inspection support, filter/access-panel review, maintenance guidance, or installation and replacement coordination through qualified subcontractor partners.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 id="services-heading" className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            ERV service for buildings,
            <br />
            <span className="text-primary">communities, and homes</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            FogTech Services helps commercial properties, multi-family communities, and homeowners keep energy recovery ventilation systems cleaner, better maintained, and easier to schedule.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border/50 bg-card p-7 transition-all duration-500 hover:border-primary/30 focus-within:border-primary/30 md:p-8"
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20"
                aria-hidden="true"
              >
                <feature.Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
