import { Award, ShieldCheck, UserCheck, Wrench, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <Award className="w-8 h-8" aria-hidden="true" />,
    title: "Centre optique reconnu",
    description: "Une marque de confiance, certifiée et plébiscitée par de nombreuses familles béninoises pour ses lunettes de vue."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" aria-hidden="true" />,
    title: "Produits de qualité",
    description: "Des montures et verres correcteurs soigneusement sélectionnés pour leur durabilité et votre confort visuel."
  },
  {
    icon: <UserCheck className="w-8 h-8" aria-hidden="true" />,
    title: "Opticiens visagistes",
    description: "Un accompagnement sur-mesure pour trouver la paire idéale adaptée à votre morphologie et votre style."
  },
  {
    icon: <Wrench className="w-8 h-8" aria-hidden="true" />,
    title: "SAV & Réparations",
    description: "Ajustements gratuits, réparations de montures et un suivi professionnel pour des lunettes qui durent."
  },
  {
    icon: <MapPin className="w-8 h-8" aria-hidden="true" />,
    title: "Proximité garantie",
    description: "Retrouvez nos opticiens experts dans nos 3 centres à Cotonou, Porto-Novo et Bohicon."
  }
];

export function WhyChooseUs() {
  return (
    <section id="apropos" className="py-24 bg-creme" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Pourquoi nous choisir
            <span className="w-6 h-[1px] bg-gold block"></span>
          </div>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Votre référence optique au Bénin
          </h2>
          <p className="text-gray-soft text-lg">
            Depuis nos boutiques de Cotonou, Porto-Novo et Bohicon, nos opticiens diplômés mettent leur expertise au service de la santé de vos yeux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-sable border border-sable rounded-xl overflow-hidden shadow-sm">
          {reasons.map((reason, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-creme p-8 hover:bg-white transition-colors group relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-gold before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform origin-left">{reason.icon}</div>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-soft text-sm leading-relaxed">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
