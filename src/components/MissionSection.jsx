import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OFFICE_IMG = "https://media.base44.com/images/public/6a10fd596a3ccc0c5e058305/d9409370a_generated_ace5103d.png";

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="mission-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
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
              Reliable cleaning.
              <br />
              <span className="text-primary">Straightforward maintenance.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              FogTech Services focuses on dependable cleaning and maintenance support for homeowners, offices, small businesses, property managers, and facility teams. The goal is simple: show up prepared, communicate clearly, and handle the practical work that keeps spaces cleaner and better maintained.
            </p>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              From regular cleaning and sanitizing to pressure washing, ERV maintenance, and basic non-licensed airflow-related service tasks, FogTech gives customers a practical service partner for routine and specialty needs.
            </p>

            <blockquote className="mt-10 p-6 rounded-2xl bg-card border border-border/50 border-l-4 border-l-primary">
              <p className="text-xl font-semibold text-foreground leading-snug">
                "Practical cleaning and maintenance support for the spaces people depend on."
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
                alt="Clean modern facility environment supported by FogTech Services"
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
