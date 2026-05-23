import React from "react";
import { Zap, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    Icon: Zap,
    title: "Fast",
    description:
      "Services completed after-hours so you'll be open and ready by morning. Zero downtime for your Houston-area business.",
  },
  {
    Icon: ShieldCheck,
    title: "Safe",
    description:
      "Our disinfecting fog is 100% food-grade safe and EPA certified. Bad for germs — not for people.",
  },
  {
    Icon: MapPin,
    title: "Local",
    description:
      "Native Texan owned and operated. Proudly serving Houston, Katy, Sugar Land, The Woodlands, Pearland, and surrounding communities.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 relative" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase">
            What We Do
          </p>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            We kill germs so you can
            <br />
            <span className="text-primary">get back to business</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Our proven system eliminates 99.9% of bacteria, viruses, and other
            pathogens in your space — including Human Coronavirus. Trusted by
            businesses and homeowners across the greater Houston area.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-7 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 focus-within:border-primary/30"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500"
                aria-hidden="true"
              >
                <feature.Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}