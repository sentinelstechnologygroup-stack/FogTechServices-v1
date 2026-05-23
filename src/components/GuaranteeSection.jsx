import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-24 md:py-32" aria-labelledby="guarantee-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-card border border-border/50 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative p-8 sm:p-10 md:p-16 text-center">
            <div
              className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
              aria-hidden="true"
            >
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>

            <h2 id="guarantee-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
              100% Satisfaction
              <br />
              <span className="text-primary">Guaranteed</span>
            </h2>

            <div className="w-16 h-px bg-border mx-auto my-8" aria-hidden="true" />

            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              If, for any reason, you aren't satisfied with our service, you
              can get a full refund within 30 days of your purchase. Our
              friendly Houston-based support team will either help you get the
              results you need or provide a swift refund — no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}