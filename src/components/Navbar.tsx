import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Produits', href: '#produits' },
    { name: 'Boutiques', href: '#boutiques' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-lg' : 'bg-charcoal/80 backdrop-blur-sm py-6 border-b border-gold/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <nav className="hidden lg:flex items-center gap-8 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 text-sm font-semibold tracking-wide hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Brand Logo & Name Area */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 text-white group absolute left-1/2 -translate-x-1/2">
          {/* Logo component: monogram variant for compact mobile header, full variant or monogram+text for desktop */}
          <Logo 
            variant="monogram"
            className="h-[50px] sm:h-[64px] w-auto text-gold group-hover:scale-105 transition-transform" 
          />
          <div className="text-left">
            <div className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white leading-none">FAR-VISION</div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.15em] text-gold-light uppercase mt-1 opacity-90">Opticien de confiance au Bénin</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <a
            href="tel:+22901943591"
            className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold border border-white/40 text-white hover:bg-white/10 hover:border-white transition-all"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
          <a
            href="https://wa.me/22997082358"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded text-sm font-bold bg-gold text-charcoal hover:bg-[#d9b65b] hover:-translate-y-0.5 transition-all shadow-md"
          >
            Prendre RDV (WhatsApp)
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2 ml-auto relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-charcoal border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <a
                href="tel:+22901943591"
                className="flex items-center justify-center gap-2 py-3 rounded font-bold border border-white/40 text-white hover:bg-white/5 transition-all"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>
              <a
                href="https://wa.me/22997082358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 rounded font-bold bg-gold text-charcoal hover:bg-[#d9b65b] transition-all shadow-md"
              >
                Prendre RDV (WhatsApp)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
