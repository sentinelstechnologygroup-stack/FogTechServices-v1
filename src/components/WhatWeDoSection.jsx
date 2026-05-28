import React from "react";
import { Building2, Home, SprayCan, Wind, Droplets, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    Icon: Home,
    title: "Residential Cleaning",
    description:
      "Routine and deep cleaning support for houses, townhomes, apartments, move-in/move-out needs, and recurring household upkeep.",
  },
  {
    Icon: Building2,
    title: "Corporate Office Cleaning",
    description:
      "Cleaning support for offices, small commercial spaces, property teams, shared work areas, and scheduled facility upkeep.",
  },
  {
    Icon: Droplets,
    title: "Fogging, Sanitizing & Pressure Washing",
    description:
      "Specialty cleaning support for interior freshness, surface sanitizing needs, exterior cleaning, walkways, patios, and common areas.",
  },
  {
    Icon: Wind,
    title: "ERV & Basic Airflow Maintenance",
    description:
      "ERV cleaning, filter/access checks, vent cleaning support, and basic non-licensed HVAC-adjacent maintenance for homes and facilities.",
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
            Cleaning and maintenance for
            <br />
            <span className="text-primary">homes, offices, and properties</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            FogTech Services is being repositioned as a practical cleaning and maintenance company first, with specialty support for fogging, sanitizing, pressure washing, ERV maintenance, and basic non-licensed airflow-related service needs.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
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
