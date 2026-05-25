import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/services", isRoute: true },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Why Fog", href: "/#why-fog" },
    { label: "Our Mission", href: "/#mission" },
    { label: "Guarantee", href: "/#guarantee" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label="FogTech Services — home"
        >
          <img
            src="/images/logo.png"
            alt="FogTech Services logo"
            width="120"
            height="40"
            className="h-10 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                role="listitem"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                role="listitem"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:block">
          <a href="/#contact" aria-label="Get a quote from FogTech Services">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              Get a Quote
            </Button>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav aria-label="Mobile navigation" className="px-6 py-6 space-y-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base text-muted-foreground hover:text-foreground transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base text-muted-foreground hover:text-foreground transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a href="/#contact" onClick={() => setMobileOpen(false)} aria-label="Get a quote from FogTech Services">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold mt-2">
                  Get a Quote
                </Button>
              </a>
              <a
                href="tel:+18327556533"
                className="flex items-center justify-center gap-2 w-full border border-border/60 rounded-full py-2.5 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors mt-1"
                aria-label="Call FogTech Services"
              >
                Call: 832-755-6533
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
