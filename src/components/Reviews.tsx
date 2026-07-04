import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Armand D.",
    location: "Cotonou",
    text: "Excellente expérience chez FAR-VISION Cotonou ! Le personnel est très accueillant et m'a aidé à choisir la monture homme parfaite. Mes nouvelles lunettes de vue sont très confortables.",
    rating: 5
  },
  {
    name: "Béatrice H.",
    location: "Porto-Novo",
    text: "J'ai emmené mon fils pour ses premières lunettes. L'opticien a été très patient pour trouver des montures enfant solides. Service impeccable, je recommande vivement ce centre optique.",
    rating: 5
  },
  {
    name: "Cédric M.",
    location: "Bohicon",
    text: "Mes verres progressifs ont été faits rapidement et la qualité est au rendez-vous. Le meilleur opticien du Bénin selon moi. Merci pour les conseils judicieux et professionnels.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-sable/30" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Avis Clients
            <span className="w-6 h-[1px] bg-gold block"></span>
          </div>
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Ils voient plus loin avec nous
          </h2>
          <p className="text-gray-soft text-lg">
            Découvrez les témoignages de nos clients satisfaits à Cotonou, Porto-Novo et Bohicon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm relative"
              itemScope itemProp="review" itemType="https://schema.org/Review"
            >
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="FAR-VISION" />
              </div>
              <Quote className="absolute top-8 right-8 w-8 h-8 text-sable opacity-50" aria-hidden="true" />
              
              <div className="flex items-center gap-1 mb-6" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="worstRating" content="1" />
                <meta itemProp="ratingValue" content={review.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              
              <blockquote className="mb-6">
                <p className="text-gray-soft italic leading-relaxed" itemProp="reviewBody">
                  "{review.text}"
                </p>
              </blockquote>
              
              <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-charcoal text-sm" itemProp="name">{review.name}</div>
                  <div className="text-xs text-gold font-semibold uppercase tracking-wider">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Aggregate Rating Schema injected here */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.far-vision.bj/#organization",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
          }
        })}
      </script>
    </section>
  );
}
