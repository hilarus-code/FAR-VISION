import { motion } from 'motion/react';
import { MapPin, MessageCircle, PhoneCall } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-charcoal overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
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
          {/* Large background logo that fades in first */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9, filter: "brightness(1.2)" },
              visible: { 
                opacity: 0.35, 
                scale: 1, 
                filter: "brightness(1.6) contrast(1.1)",
                transition: { duration: 1.0, ease: "easeOut" } 
              }
            }}
            className="absolute -top-12 -left-16 w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px] pointer-events-none select-none z-0"
          >
            <img 
              src="/logo.png" 
              alt="FAR-VISION Logo en arrière-plan" 
              className="w-full h-full object-contain animate-pulse" 
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Text and buttons that fade in second */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
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
                className="flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 rounded font-bold hover:bg-[#d9b65b] hover:-translate-y-1 transition-all"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-auto lg:h-[600px]"
        >
          <div className="grid grid-cols-2 gap-4 h-full relative z-0">
            <div className="col-span-1 h-full pt-12 pb-4">
              <img 
                src="/carousel/image1.webp" 
                alt="Homme professionnel portant des lunettes de vue FAR-VISION" 
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover rounded-2xl shadow-xl shadow-black/40"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-4 h-full pb-12 pt-4">
              <img 
                src="/carousel/image2.webp" 
                alt="Femme d'affaires portant des lunettes de vue élégantes" 
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-1/2 object-cover rounded-2xl shadow-xl shadow-black/40"
              />
              <img 
                src="/carousel/image3.webp" 
                alt="Enfant souriant portant des lunettes de vue confortables" 
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-1/2 object-cover rounded-2xl shadow-xl shadow-black/40"
              />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 text-white shadow-2xl">
            <div className="bg-gold p-3 rounded-lg text-charcoal">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold">Trouvez votre boutique</div>
              <div className="text-sm text-gray-300">Cotonou, Porto-Novo, Bohicon</div>
            </div>
            <a href="#boutiques" className="ml-auto text-sm font-bold uppercase tracking-wider text-gold hover:text-gold-light" aria-label="Voir les adresses des boutiques">Voir &rarr;</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
