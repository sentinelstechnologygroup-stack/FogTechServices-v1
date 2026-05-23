import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FOG_IMG = "/images/whyfog.png";

const benefits = [
  "Reaches every nook and cranny traditional cleaning can't",
  "Hospital-grade disinfecting coverage for the entire room",
  "No residue left behind after treatment",
  "No wiping needed — ready for use immediately",
  "Complete 360° surface and air coverage",
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
                src={FOG_IMG}
                alt="Dense disinfecting fog filling a room, reaching every surface and corner"
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
              aria-label="99.9% pathogen elimination rate"
            >
              <div className="text-3xl md:text-4xl font-black text-primary">99.9%</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Pathogen Elimination
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
              Why Fog?
            </p>
            <h2 id="why-fog-heading" className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-tight">
              No residue.
              <br />
              No wiping.
              <br />
              <span className="text-primary">No sweat.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              You can only reach and wipe so much of your space. Our
              hospital-grade disinfecting fog reaches every surface for total
              coverage you can trust — whether you're in Houston's Medical Center,
              a Katy retail shop, or a Sugar Land office park.
            </p>

            <ul className="mt-10 space-y-4 list-none p-0" aria-label="Benefits of fogging disinfection">
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
