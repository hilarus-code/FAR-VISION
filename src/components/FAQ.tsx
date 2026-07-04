import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Comment choisir la bonne monture de lunettes ?",
    answer: "Le choix d'une monture dépend de la forme de votre visage, de votre correction et de votre style. Chez FAR-VISION, nos opticiens visagistes vous accompagnent en boutique (Cotonou, Porto-Novo, Bohicon) pour trouver la monture homme, femme ou enfant idéale."
  },
  {
    question: "Proposez-vous des examens de la vue ?",
    answer: "Oui, nous réalisons des contrôles de la vue complets dans nos centres optiques. Prenez rendez-vous via WhatsApp ou par téléphone pour vérifier votre acuité visuelle avant de commander vos verres correcteurs."
  },
  {
    question: "Quels types de verres correcteurs proposez-vous ?",
    answer: "Nous proposons une large gamme de verres correcteurs (unifocaux, progressifs, anti-lumière bleue, photochromiques, antireflets) adaptés à tous les troubles de la vision : myopie, presbytie, astigmatisme et hypermétropie."
  },
  {
    question: "Faites-vous des réparations de lunettes ?",
    answer: "Absolument. Nous offrons un service après-vente de qualité. Si vos lunettes de vue ou lunettes de soleil sont endommagées, apportez-les dans l'une de nos boutiques au Bénin pour un ajustement ou une réparation."
  },
  {
    question: "Quels sont vos délais de livraison pour des lunettes de vue ?",
    answer: "Les délais dépendent du type de verres correcteurs nécessaires. En général, les verres simples sont prêts en 24 à 48 heures, tandis que les verres progressifs ou spécifiques peuvent nécessiter quelques jours supplémentaires."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Questions Fréquentes
            <span className="w-6 h-[1px] bg-gold block"></span>
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Tout savoir sur votre opticien au Bénin
          </h2>
          <p className="text-gray-soft text-lg">
            Retrouvez les réponses aux questions les plus courantes sur nos lunettes, verres correcteurs et services optiques.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-sable rounded-xl overflow-hidden bg-creme hover:border-gold/50 transition-colors"
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-bold text-charcoal pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 pb-5 text-gray-soft" itemProp="text">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-soft mb-4">Vous avez une autre question ?</p>
          <a
            href="https://wa.me/22997082358"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal px-6 py-3 rounded font-bold hover:bg-charcoal hover:text-white transition-all"
          >
            Discuter avec un conseiller
          </a>
        </div>
      </div>
      
      {/* Schema.org FAQ injected here for better context, although index.html has global ones */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        })}
      </script>
    </section>
  );
}
