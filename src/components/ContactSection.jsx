import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

// GA4 placeholder
function trackEvent(eventName, params = {}) {
  // window.gtag?.('event', eventName, params);
}

const contactInfo = [
  { Icon: Phone, label: "Call Us", value: "832-755-6533", href: "tel:+18327556533" },
  { Icon: Mail, label: "Email", value: "info@fogtechservices.com", href: "mailto:info@fogtechservices.com" },
  { Icon: MapPin, label: "Service Area", value: "Houston, TX & Surrounding Areas", href: null },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    trackEvent('contact_form_submit', { method: 'web_form' });
    // Simulate send — wire up to backend when ready
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Ready to make your space
            <br />
            <span className="text-primary">safe again?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-12">
          {/* Contact info */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
            aria-label="Contact information"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Drop us a message or give us a call. We serve Houston, Katy,
              Sugar Land, The Woodlands, Pearland, and the entire metro area.
            </p>

            <ul className="space-y-6 list-none p-0">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-foreground font-medium mt-0.5 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        onClick={() => trackEvent('contact_info_click', { type: label.toLowerCase() })}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium mt-0.5">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              aria-label="Contact and quote request form"
              className="bg-card border border-border/50 rounded-3xl p-7 sm:p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm text-muted-foreground">
                    Full Name <span aria-hidden="true" className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 bg-secondary/50 border-border/50 rounded-xl"
                    required
                    autoComplete="name"
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm text-muted-foreground">
                    Email <span aria-hidden="true" className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 bg-secondary/50 border-border/50 rounded-xl"
                    required
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-sm text-muted-foreground">
                  Phone Number
                </Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="832-755-6533"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 bg-secondary/50 border-border/50 rounded-xl"
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm text-muted-foreground">
                  Message <span aria-hidden="true" className="text-primary">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your space and what you need..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[120px] bg-secondary/50 border-border/50 rounded-xl resize-none"
                  required
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={sending ? "Sending your message..." : "Send your quote request"}
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" aria-hidden="true" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}