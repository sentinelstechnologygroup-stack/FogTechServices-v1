import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// GA4 analytics hook placeholder
// TODO: Replace with actual gtag call when GA4 is configured
function trackEvent(eventName, params = {}) {
  // window.gtag?.('event', eventName, params);
  // console.debug('[Analytics]', eventName, params);
}

export default function MobileCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past the hero
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4"
          role="complementary"
          aria-label="Quick call button"
        >
          <a
            href="tel:+18327556533"
            onClick={() => trackEvent('mobile_call_button_click', { phone: '832-755-6533' })}
            className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full shadow-2xl shadow-primary/30 font-semibold text-base w-full max-w-sm justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            aria-label="Call FogTech Services at 832-755-6533"
          >
            <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>Call Now · 832-755-6533</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}