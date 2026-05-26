import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_SCROLL_OFFSET = 88;

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - SECTION_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      window.setTimeout(() => scrollToSection(sectionId), 80);
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "What We Do", href: "/#what-we-do", sectionId: "what-we-do" },
    { label: "Why Fog", href: "/#why-fog", sectionId: "why-fog" },
    { label: "Our Mission", href: "/#mission", sectionId: "mission" },
    { label: "Guarantee", href: "/#guarantee", sectionId: "guarantee" },
    { label: "Contact", href: "/contact" },
  ];

  const handleSectionLinkClick = (event, link) => {
    if (!link.sectionId) {
      setMobileOpen(false);
      return;
    }

    event.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${link.sectionId}`);
      return;
    }

    window.history.replaceState(null, "", `/#${link.sectionId}`);
    scrollToSection(link.sectionId);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "border-b border-border/50 bg-background/88 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-gradient-to-b from-background/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="FogTech Services — home"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="https://media.base44.com/images/public/6a10fd596a3ccc0c5e058305/c4370413d_image.png"
            alt="FogTech Services logo"
            width="120"
            height="40"
            className="h-8 w-auto sm:h-9"
            loading="eager"
            decoding="async"
          />
        </Link>

        <div className="hidden items-center gap-5 lg:gap-6 md:flex" role="list">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              role="listitem"
              onClick={(event) => handleSectionLinkClick(event, link)}
              className="rounded text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" aria-label="Get a quote from FogTech Services">
            <Button className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              Get a Quote
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(event) => handleSectionLinkClick(event, link)}
                  className="block rounded py-1 text-base text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)} aria-label="Get a quote from FogTech Services">
                <Button className="mt-2 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                  Get a Quote
                </Button>
              </Link>
              <a
                href="tel:+18327556533"
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-full border border-border/60 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
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
