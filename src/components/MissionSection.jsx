import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OFFICE_IMG = "/images/ourmission.png";

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="mission-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold text-primary tracking-widest uppercase">
              Our Mission
            </p>
            <h2 id="mission-heading" className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-tight">
              When "good enough"
              <br />
              <span className="text-primary">isn't.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Traditional cleaning services focus on appearance — not health.
              Our disinfecting fogging services specifically target both common
              and nosocomial infections, giving Houston-area businesses and
              families real peace of mind.
            </p>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              Everyday disinfectants battle everyday germs. Our EPA certified
              disinfectant is anything but ordinary. We tackle the toughest
              pathogens to make your space truly safe again — from the Heights
              to the Energy Corridor and everywhere in between.
            </p>

            <blockquote className="mt-10 p-6 rounded-2xl bg-card border border-border/50 border-l-4 border-l-primary">
              <p className="text-xl font-semibold text-foreground leading-snug">
                "Together we can move forward and get back to work."
              </p>
              <footer className="text-sm text-muted-foreground mt-3">
                — The FogTech Team, Houston, TX
              </footer>
            </blockquote>

            <div className="mt-8">
              <a href="/contact" aria-label="Get started with FogTech Services">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 font-semibold group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Let's Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={OFFICE_IMG}
                alt="A spotlessly clean, modern Houston office space after professional disinfection treatment"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
