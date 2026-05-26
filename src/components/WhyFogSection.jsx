import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ERV_IMG = "https://media.base44.com/images/public/6a10fd596a3ccc0c5e058305/3c48ab0cf_generated_image.png";

const benefits = [
  "Helps reduce buildup in ERV cores, filters, and accessible components",
  "Supports better airflow and balanced ventilation performance",
  "Service documentation provided after each maintenance visit",
  "Designed for commercial buildings, offices, and facility environments",
  "Preventive approach helps identify issues before they escalate",
];

export default function WhyFogSection() {
  return (
    <section id="why-fog" className="py-24 md:py-32 relative" aria-labelledby="why-fog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={ERV_IMG}
                alt="Technician servicing an ERV unit in a commercial facility"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" aria-hidden="true" />
            </div>
            {/* Floating stat */}
            <div
              className="absolute -bottom-6 -right-2 sm:right-8 bg-card border border-border/50 rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/40"
              aria-label="Commercial and facility ERV service focus"
            >
              <div className="text-3xl md:text-4xl font-black text-primary">ERV</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Cleaning &amp; Maintenance
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold text-primary tracking-widest uppercase">
              Why ERV Maintenance Matters
            </p>
            <h2 id="why-fog-heading" className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-tight">
              Cleaner systems.
              <br />
              Better airflow.
              <br />
              <span className="text-primary">Dependable service.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Energy recovery ventilators help exchange stale indoor air with fresh
              outdoor air. Over time, filters, cores, and accessible components can
              accumulate buildup that affects performance. FogTech Services provides
              practical ERV cleaning and maintenance support for commercial buildings
              and facility teams across the Houston area.
            </p>

            <ul className="mt-10 space-y-4 list-none p-0" aria-label="Benefits of ERV cleaning and maintenance">
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