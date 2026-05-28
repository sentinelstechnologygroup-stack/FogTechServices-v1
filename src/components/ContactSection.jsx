import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

function trackEvent(eventName, params = {}) {
  // window.gtag?.('event', eventName, params);
}

const contactInfo = [
  { Icon: Phone, label: "Call Us", value: "832-755-6533", href: "tel:+18327556533" },
  { Icon: Mail, label: "Email", value: "info@fogtechservices.com", href: "mailto:info@fogtechservices.com" },
  { Icon: MapPin, label: "Service Area", value: "Houston, TX & Surrounding Areas", href: null },
  { Icon: Clock, label: "Scheduling", value: "Residential, corporate, and specialty service appointments", href: null },
];

const serviceOptions = [
  "Residential Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Corporate Office Cleaning",
  "Recurring Cleaning Service",
  "Fogging & Sanitizing",
  "Pressure Washing",
  "ERV Cleaning & Maintenance",
  "Basic Non-Licensed Airflow Maintenance",
  "Filter / Vent Cleaning Support",
  "Not Sure / Need Guidance",
  "Other",
];

const propertyTypeOptions = [
  "Single-Family Home",
  "Townhome",
  "Apartment / Condo",
  "Office Building",
  "Small Business",
  "Retail / Commercial Space",
  "Multi-Family Community",
  "Property Management Portfolio",
  "Industrial / Warehouse Facility",
  "School / Childcare Facility",
  "Medical / Healthcare Facility",
  "Restaurant / Food Service",
  "Other",
];

const preferredWindowOptions = [
  "Weekday Business Hours",
  "After Hours",
  "Weekend",
  "Flexible",
];

const unitCountOptions = ["1 area", "2–5 areas", "6–10 areas", "10+ areas", "Not Sure"];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceNeeded: "",
  propertyType: "",
  preferredWindow: "",
  unitCount: "",
  message: "",
};

function SelectField({ id, label, value, onChange, options, required = false }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-muted-foreground">
        {label} {required && <span aria-hidden="true" className="text-primary">*</span>}
      </Label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required ? "true" : undefined}
        className="h-12 w-full rounded-xl border border-border/50 bg-secondary/50 px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-background text-foreground">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    trackEvent("contact_form_submit", {
      method: "web_form",
      service_needed: form.serviceNeeded,
      property_type: form.propertyType,
    });

    // Placeholder only — wire to Formspree/backend/email service before claiming email delivery.
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Thank you. Your request has been received and FogTech Services will follow up soon.");
    setForm(initialForm);
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </p>
          <h2 id="contact-heading" className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to schedule
            <br />
            <span className="text-primary">cleaning or maintenance?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tell us about your home, office, property, service needs, and preferred schedule so we can route your request correctly.
          </p>
        </motion.div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-5">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 lg:col-span-2"
            aria-label="Contact information"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              FogTech Services supports homeowners, offices, commercial properties, property teams, and facility operators across the Houston area with cleaning, maintenance, fogging, sanitizing, pressure washing, ERV service, and scheduled service options.
            </p>

            <ul className="space-y-6 p-0 list-none">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 rounded font-medium text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        onClick={() => trackEvent("contact_info_click", { type: label.toLowerCase() })}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              aria-label="Cleaning and maintenance service request form"
              className="space-y-6 rounded-3xl border border-border/50 bg-card p-7 sm:p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm text-muted-foreground">
                    Full Name <span aria-hidden="true" className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={updateField("name")}
                    className="h-12 rounded-xl border-border/50 bg-secondary/50"
                    required
                    autoComplete="name"
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-company" className="text-sm text-muted-foreground">
                    Company / Property
                  </Label>
                  <Input
                    id="contact-company"
                    name="company"
                    placeholder="Company, property, HOA, or organization name"
                    value={form.company}
                    onChange={updateField("company")}
                    className="h-12 rounded-xl border-border/50 bg-secondary/50"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
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
                    onChange={updateField("email")}
                    className="h-12 rounded-xl border-border/50 bg-secondary/50"
                    required
                    autoComplete="email"
                    aria-required="true"
                  />
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
                    onChange={updateField("phone")}
                    className="h-12 rounded-xl border-border/50 bg-secondary/50"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <SelectField
                  id="serviceNeeded"
                  label="Service Needed"
                  value={form.serviceNeeded}
                  onChange={updateField("serviceNeeded")}
                  options={serviceOptions}
                  required
                />
                <SelectField
                  id="propertyType"
                  label="Property / Facility Type"
                  value={form.propertyType}
                  onChange={updateField("propertyType")}
                  options={propertyTypeOptions}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <SelectField
                  id="preferredWindow"
                  label="Preferred Service Window"
                  value={form.preferredWindow}
                  onChange={updateField("preferredWindow")}
                  options={preferredWindowOptions}
                />
                <SelectField
                  id="unitCount"
                  label="Approximate Size / Number of Areas"
                  value={form.unitCount}
                  onChange={updateField("unitCount")}
                  options={unitCountOptions}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm text-muted-foreground">
                  Message / Service Details <span aria-hidden="true" className="text-primary">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about the property, service type, approximate size, urgency, preferred schedule, access requirements, and whether this is a one-time or recurring request."
                  value={form.message}
                  onChange={updateField("message")}
                  className="min-h-[140px] resize-none rounded-xl border-border/50 bg-secondary/50"
                  required
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="h-14 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={sending ? "Sending your service request..." : "Send your service request"}
              >
                {sending ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" aria-hidden="true" />
                ) : (
                  <>
                    Send Service Request
                    <Send className="ml-2 h-4 w-4" aria-hidden="true" />
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
