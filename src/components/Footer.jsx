import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 md:py-12" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="FogTech Services — home"
          >
            <img
              src="/images/fogtech-logo.png"
              alt="FogTech Services logo"
              width="100"
              height="33"
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          <a
            href="tel:+18327556533"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Call FogTech Services at 832-755-6533"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            832-755-6533
          </a>

          <nav aria-label="Footer legal links">
            <ul className="flex items-center gap-6 text-xs text-muted-foreground list-none p-0">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">Terms of Use</Link></li>
              <li><Link to="/disclaimer" className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">Disclaimer</Link></li>
            </ul>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FogTech Services · Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
