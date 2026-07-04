import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled past the hero section (roughly 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          href="https://wa.me/22997082358?text=Bonjour%20FAR-VISION%2C%20je%20souhaite%20prendre%20rendez-vous."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prendre RDV (WhatsApp)"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-2xl shadow-black/50 hover:scale-110 hover:bg-[#d9b65b] hover:text-charcoal transition-all cursor-pointer border border-gold/40"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">Prendre RDV (WhatsApp)</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
