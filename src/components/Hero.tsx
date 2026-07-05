import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, MessageCircle, PhoneCall, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Logo } from './Logo';
import { useWelcome } from '../context/WelcomeContext';

const CAROUSEL_IMAGES = [
  {
    url: "https://x0.at/rYPp.webp",
    alt: "Homme professionnel portant des lunettes de vue FAR-VISION"
  },
  {
    url: "https://x0.at/jK3b.webp",
    alt: "Femme d'affaires portant des lunettes de vue élégantes"
  },
  {
    url: "https://x0.at/O5u9.webp",
    alt: "Enfant souriant portant des lunettes de vue confortables"
  }
];

export function Hero() {
  const { isWelcomeFinished, visionPreference, showImages } = useWelcome();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval (only active when images are enabled)
  useEffect(() => {
    if (!showImages || !isWelcomeFinished) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [showImages, isWelcomeFinished]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };


  return (
    <section id="accueil" className="relative pt-32 pb-16 lg:pt-44 lg:pb-28 bg-charcoal overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        {/* Left column: Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.8,
              }
            }
          }}
          className="relative"
        >
          {/* Vector watermark logo with soft gradient-mask to dissolve outer edges */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { 
                opacity: 0.1, 
                scale: 1, 
                transition: { duration: 1.4, ease: "easeOut" } 
              }
            }}
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 75%)'
            }}
            className="absolute -top-12 -left-16 w-80 h-80 md:w-[440px] md:h-[440px] lg:w-[540px] lg:h-[540px] pointer-events-none select-none z-0 text-gold"
          >
            <Logo variant="monogram" className="w-full h-full object-contain animate-pulse duration-5000" />
          </motion.div>

          {/* Text block and CTA buttons */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: "easeOut" } 
              }
            }}
            className="relative z-10"
          >
            {/* Location Tags Eyebrow (completely solves overflow/orphaning issues on mobile) */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6">
              <span className="w-5 h-[2px] bg-gold block shrink-0"></span>
              <span className="text-gold text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase mr-1">Opticien</span>
              <span className="bg-white/5 border border-white/10 text-gold-light text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-semibold tracking-wide">Cotonou</span>
              <span className="bg-white/5 border border-white/10 text-gold-light text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-semibold tracking-wide">Porto-Novo</span>
              <span className="bg-white/5 border border-white/10 text-gold-light text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-semibold tracking-wide">Bohicon</span>
            </div>

            <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] tracking-tight mb-6">
              Ensemble, <br />
              <span className="text-gold-light italic font-medium">voyons plus loin.</span>
            </div>

            {/* Structured benefits block (replaces prose for scannability and mobile reading comfort) */}
            <div className={`space-y-3 max-w-md mb-10 leading-relaxed transition-all duration-300 ${
              (visionPreference === 'Oui' || visionPreference === 'Un peu') 
                ? 'text-white text-base sm:text-lg font-medium' 
                : 'text-[#cfcabd] text-sm sm:text-base'
            }`}>
              <div className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Vision nette à toute distance & verres correcteurs sur-mesure</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Grand choix de montures de qualité (homme, femme & enfant)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Conseils visagistes personnalisés par nos opticiens diplômés</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Garantie d'ajustement gratuit et suivi attentionné en boutique</span>
              </div>
            </div>
            
            {/* Standardized Unified CTAs (WhatsApp Primary, Call Secondary) */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/22997082358?text=Bonjour%20FAR-VISION%2C%20je%20souhaite%20prendre%20rendez-vous."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 rounded font-bold hover:bg-[#d9b65b] hover:-translate-y-0.5 transition-all shadow-lg text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Prendre RDV (WhatsApp)
              </a>
              <a
                href="tel:+22901943591"
                className="flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded font-bold hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <PhoneCall className="w-5 h-5" />
                Appeler un conseiller
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md">
              <div>
                <div className="text-gold-light font-serif text-2xl sm:text-3xl font-bold mb-1">3</div>
                <div className="text-[#a9a397] text-[10px] uppercase tracking-wider font-semibold">Boutiques</div>
              </div>
              <div>
                <div className="text-gold-light font-serif text-2xl sm:text-3xl font-bold mb-1">1000+</div>
                <div className="text-[#a9a397] text-[10px] uppercase tracking-wider font-semibold">Montures</div>
              </div>
              <div>
                <div className="text-gold-light font-serif text-2xl sm:text-3xl font-bold mb-1">7j/7</div>
                <div className="text-[#a9a397] text-[10px] uppercase tracking-wider font-semibold">Ouvert de<br/>08h à 19h30</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Image Slider/Carousel (perfectly responsive and optimized for mobile too) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] h-[360px] sm:h-[420px] md:h-[460px] lg:h-[560px] flex flex-col justify-between"
        >
          {/* Main Slide Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border border-white/10 group bg-charcoal/50">
            <AnimatePresence mode="wait">
              {!isWelcomeFinished ? (
                <div key="pre-welcome" className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal text-gold/40">
                  <Logo variant="monogram" className="w-16 h-16 animate-pulse mb-3" />
                  <span className="text-[10px] uppercase tracking-widest text-gold/60">FAR-VISION</span>
                </div>
              ) : showImages ? (
                /* Image slide with light warmth overlay filter for high-end black/gold color cohesion */
                <motion.img
                  key={currentIndex}
                  src={CAROUSEL_IMAGES[currentIndex].url}
                  alt={CAROUSEL_IMAGES[currentIndex].alt}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none filter saturate-[0.85] sepia-[15%] contrast-[1.05] brightness-[0.92]"
                />
              ) : (
                /* Thematic, interactive optometry Snellen Eye Chart - extremely creative image fallback */
                <motion.div
                  key="optometry-chart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#131211] to-[#22201e] flex flex-col items-center justify-center p-6 select-none"
                >
                  <div className="border border-gold/15 rounded-full p-8 bg-black/40 backdrop-blur-sm relative flex flex-col items-center max-w-[280px] w-full aspect-square justify-center shadow-inner">
                    {/* Simulated Lens outline */}
                    <div className="absolute inset-2 border border-gold/5 rounded-full pointer-events-none" />
                    <div className="absolute inset-0 border-2 border-dashed border-gold/10 rounded-full animate-spin duration-[20s] pointer-events-none" />
                    
                    {/* Snellen-inspired premium letters */}
                    <div className="flex flex-col items-center justify-center font-mono text-gold font-bold text-center leading-none select-none">
                      <div className="text-4xl mb-4 text-white tracking-[0.2em]">E</div>
                      <div className="text-2xl mb-3 tracking-[0.2em] text-gold-light">F &nbsp; V</div>
                      <div className="text-lg mb-2 tracking-[0.25em]">O &nbsp; P &nbsp; T</div>
                      <div className="text-sm mb-1.5 tracking-[0.25em] text-gold/80">I &nbsp; C &nbsp; I &nbsp; E</div>
                      <div className="text-xs mb-1 tracking-[0.3em] text-gold/60">N &nbsp; B &nbsp; E &nbsp; N &nbsp; I</div>
                      <div className="text-[9px] tracking-[0.35em] text-gold/40">F &nbsp; A &nbsp; R &nbsp; V &nbsp; I &nbsp; S</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="text-[10px] font-bold text-gold tracking-[0.2em] uppercase block">ÉCHELLE D'ACUITÉ VISUELLE</span>
                    <span className="text-[9px] text-white/40 block mt-1">FAR-VISION · Mode haute performance actif</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom gradient overlay for caption and address accessibility */}
            {isWelcomeFinished && showImages && (
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
            )}

            {/* Manual controls (perfect for mouse-driven devices) */}
            {isWelcomeFinished && showImages && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all z-20 cursor-pointer"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all z-20 cursor-pointer"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Dots indicators */}
            {isWelcomeFinished && showImages && (
              <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      index === currentIndex ? 'bg-gold scale-125' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Location/Store Finder floating card with high readability */}
          <div className="absolute bottom-6 left-6 right-6 z-30 bg-black/45 backdrop-blur-md border border-white/15 p-4 rounded-xl flex items-center gap-4 text-white shadow-2xl">
            <div className="bg-gold p-2.5 rounded-lg text-charcoal shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">Trouvez votre boutique</div>
              <div className="text-[10px] sm:text-xs text-gray-300">Cotonou, Porto-Novo, Bohicon</div>
            </div>
            <a 
              href="#boutiques" 
              className="ml-auto text-xs font-bold uppercase tracking-widest text-gold hover:text-gold-light shrink-0" 
              aria-label="Voir les adresses des boutiques"
            >
              Voir &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
