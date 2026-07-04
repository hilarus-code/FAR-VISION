import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const locations = [
  {
    city: "Cotonou",
    name: "FAR-VISION Étoile Rouge",
    address: "Étoile Rouge, à côté d'Atlantique Bank (en face de la quincaillerie SKH)",
    locality: "Cotonou",
    region: "Littoral",
    country: "BJ",
    phone: "+2290194359191",
    whatsapp: "+22997082358",
    mapUrl: "https://www.google.com/maps?q=Etoile+Rouge+Cotonou+Benin&output=embed",
    dirUrl: "https://www.google.com/maps/dir/?api=1&destination=Etoile+Rouge+Cotonou+Benin"
  },
  {
    city: "Porto-Novo",
    name: "FAR-VISION Cinquantenaire",
    address: "À 50 m de la Clinique NBA Gbodjie, sur la voie du Cinquantenaire",
    locality: "Porto-Novo",
    region: "Ouémé",
    country: "BJ",
    phone: "+2290197082358",
    whatsapp: "+22997082358",
    mapUrl: "https://www.google.com/maps?q=Carrefour+Akle+Porto-Novo+Benin&output=embed",
    dirUrl: "https://www.google.com/maps/dir/?api=1&destination=Carrefour+Akle+Porto-Novo+Benin"
  },
  {
    city: "Bohicon",
    name: "FAR-VISION Soglogon",
    address: "À 20 m du carrefour Soglogon, sur la route d'Abomey",
    locality: "Bohicon",
    region: "Zou",
    country: "BJ",
    phone: "+2290194359191",
    whatsapp: "+22997082358",
    mapUrl: "https://www.google.com/maps?q=Carrefour+Soglogon+Bohicon+Benin&output=embed",
    dirUrl: "https://www.google.com/maps/dir/?api=1&destination=Carrefour+Soglogon+Bohicon+Benin"
  }
];

export function Locations() {
  return (
    <section id="boutiques" className="py-24 bg-charcoal text-white" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-[1px] bg-gold-light block"></span>
            Opticien Bénin - Nos adresses
            <span className="w-6 h-[1px] bg-gold-light block"></span>
          </div>
          <h2 id="locations-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Trois boutiques d'optique à votre service
          </h2>
          <p className="text-[#a9a397] text-lg">
            Retrouvez nos centres optiques pour vos lunettes de vue et examens visuels à Cotonou, Porto-Novo et Bohicon. Cliquez sur « Itinéraire » pour obtenir le chemin exact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx}
              className="bg-charcoal-light border border-gold/20 rounded-2xl overflow-hidden flex flex-col hover:border-gold/50 transition-colors"
              itemScope itemType="https://schema.org/Optician"
            >
              <div className="h-48 w-full bg-gray-900 relative">
                <iframe
                  title={`Carte Google Maps pour l'opticien FAR-VISION à ${loc.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={loc.mapUrl}
                  className="w-full h-full border-0 grayscale opacity-80 contrast-125 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs tracking-[0.15em] uppercase text-gold-light font-bold mb-3">{loc.city}</span>
                <h3 className="text-xl font-bold mb-3" itemProp="name">{loc.name}</h3>
                
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="mb-8 flex-grow">
                  <p className="text-[#bdb8ab] text-sm leading-relaxed" itemProp="streetAddress">{loc.address}</p>
                  <p className="text-[#bdb8ab] text-sm font-semibold mt-1">
                    <span itemProp="addressLocality">{loc.locality}</span>, <span itemProp="addressCountry">{loc.country}</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-6 mt-auto text-sm font-bold pt-4 border-t border-white/10 flex-wrap">
                  <a
                    href={loc.dirUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                    aria-label={`Ouvrir l'itinéraire vers la boutique de ${loc.city} dans Google Maps`}
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    Itinéraire
                  </a>
                  <a
                    href={`tel:${loc.phone}`}
                    className="flex items-center gap-2 text-white hover:text-gold-light transition-colors"
                    aria-label={`Appeler la boutique de ${loc.city}`}
                    itemProp="telephone"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Appeler
                  </a>
                  <a
                    href={`https://wa.me/${loc.whatsapp.replace('+', '')}?text=Bonjour%20FAR-VISION%20${loc.city}%2C%20j'ai%20besoin%20de%20renseignements.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366] hover:text-[#1ebd5a] transition-colors"
                    aria-label={`Contacter la boutique de ${loc.city} sur WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
