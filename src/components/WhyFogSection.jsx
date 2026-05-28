import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SERVICE_IMG = "/images/whyfog.png";

const benefits = [
  "One company for common cleaning, maintenance, and specialty service needs",
  "Residential and corporate service options for recurring or one-time work",
  "Fogging, sanitizing, pressure washing, and practical upkeep support",
  "ERV and basic non-licensed airflow maintenance available as specialty service lines",
  "Clear communication, scheduling support, and service notes when appropriate",
];

export default function WhyFogSection() {
  return (
    <section id="why-fog" className="py-24 md:py-32 relative" aria-labelledby="why-fog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={SERVICE_IMG}
                alt="Clean commercial interior environment supported by FogTech Services"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" aria-hidden="true" />
            </div>
            <div
              className="absolute -bottom-6 -right-2 sm:right-8 bg-card border border-border/50 rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/40"
              aria-label="Cleaning and maintenance service focus"
            >
              <div className="text-3xl md:text-4xl font-black text-primary">Clean</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Maintain &amp; Support
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold text-primary tracking-widest uppercase">
              Why FogTech
            </p>
            <h2 id="why-fog-heading" className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-tight">
              Cleaner spaces.
              <br />
              Practical upkeep.
              <br />
              <span className="text-primary">Specialty support.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              FogTech Services is built for customers who need practical help keeping homes, offices, and facilities clean, maintained, and ready to use. The core brand should lead with cleaning and maintenance, while ERV service and basic airflow-related upkeep remain specialty services for customers who need them.
            </p>

            <ul className="mt-10 space-y-4 list-none p-0" aria-label="Benefits of FogTech cleaning and maintenance service">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
