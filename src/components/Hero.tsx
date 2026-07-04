import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, MessageCircle, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <section id="accueil" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-charcoal overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10 w-full">
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
          {/* Large background watermark logo (fades in first) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { 
                opacity: 0.15, 
                scale: 1, 
                transition: { duration: 1.2, ease: "easeOut" } 
              }
            }}
            className="absolute -top-16 -left-16 w-96 h-96 md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] pointer-events-none select-none z-0"
          >
            <img 
              src="https://x0.at/ubf0.jpg" 
              alt="FAR-VISION Logo en filigrane" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain animate-pulse duration-4000" 
            />
          </motion.div>

          {/* Text and buttons (fades in second, sliding smoothly from below) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 1.0, ease: "easeOut" } 
              }
            }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-[2px] bg-gold block"></span>
              <h1>Opticien · Cotonou · Porto-Novo · Bohicon</h1>
            </div>
            <div className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] tracking-tight mb-6">
              Ensemble, <br />
              <span className="text-gold-light italic font-medium">voyons plus loin.</span>
            </div>
            <p className="text-[#cfcabd] text-lg max-w-lg mb-10 leading-relaxed">
              FAR-VISION est votre opticien de référence au Bénin. Nous vous accompagnons pour une vision nette à toute distance avec des montures homme, femme et enfant de qualité, des conseils personnalisés et des verres correcteurs sur-mesure dans nos boutiques de Cotonou, Porto-Novo et Bohicon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+2290194359191"
                className="flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 rounded font-bold hover:bg-[#d9b65b] hover:-translate-y-1 transition-all shadow-lg"
              >
                <PhoneCall className="w-5 h-5" />
                Appeler un conseiller
              </a>
              <a
                href="https://wa.me/22997082358?text=Bonjour%20FAR-VISION%2C%20je%20souhaite%20des%20renseignements%20sur%20vos%20lunettes."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded font-bold hover:bg-white/10 hover:border-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Prendre RDV (WhatsApp)
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-gold-light font-serif text-3xl font-bold mb-1">3</div>
                <div className="text-[#a9a397] text-xs uppercase tracking-wider font-semibold">Centres Optiques</div>
              </div>
              <div>
                <div className="text-gold-light font-serif text-3xl font-bold mb-1">5+</div>
                <div className="text-[#a9a397] text-xs uppercase tracking-wider font-semibold">Gammes de montures</div>
              </div>
              <div>
                <div className="text-gold-light font-serif text-3xl font-bold mb-1">7j/7</div>
                <div className="text-[#a9a397] text-xs uppercase tracking-wider font-semibold">Ouvert<br/>08h–19h30</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Elegant Auto-Playing Slider/Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] h-[400px] sm:h-[480px] md:h-[520px] lg:h-[580px] flex flex-col justify-between"
        >
          {/* Main Slide Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 group bg-charcoal/50">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={CAROUSEL_IMAGES[currentIndex].url}
                alt={CAROUSEL_IMAGES[currentIndex].alt}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />
            </AnimatePresence>

            {/* Dark overlay for text readability of address card */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

            {/* Manual Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all z-20 cursor-pointer"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all z-20 cursor-pointer"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Indicators (Dots) */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
          </div>

          {/* Floating Address/Location Card */}
          <div className="absolute bottom-6 left-6 right-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 text-white shadow-2xl">
            <div className="bg-gold p-3 rounded-lg text-charcoal shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">Trouvez votre boutique</div>
              <div className="text-xs sm:text-sm text-gray-300">Cotonou, Porto-Novo, Bohicon</div>
            </div>
            <a 
              href="#boutiques" 
              className="ml-auto text-xs sm:text-sm font-bold uppercase tracking-wider text-gold hover:text-gold-light shrink-0" 
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
