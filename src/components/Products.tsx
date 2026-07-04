import { motion } from 'motion/react';

const products = [
  {
    image: "/types/de_vue.jpg",
    title: "Lunettes de vue",
    desc: "Verres correcteurs de haute précision adaptés à votre prescription médicale. Disponibles à Cotonou, Porto-Novo et Bohicon.",
    msg: "Bonjour FAR-VISION, je suis intéressé(e) par des lunettes de vue."
  },
  {
    image: "/types/de_soleil.jpg",
    title: "Lunettes de soleil",
    desc: "Protection solaire optimale UV400 et style pour toutes les saisons. Large choix de marques optiques.",
    msg: "Bonjour FAR-VISION, je suis intéressé(e) par des lunettes de soleil."
  },
  {
    image: "/types/homme.jpg",
    title: "Montures Homme",
    desc: "Lignes sobres, rectangulaires ou vintage pour une allure affirmée. Robustesse et confort au quotidien.",
    msg: "Bonjour FAR-VISION, je suis intéressé par des montures Homme."
  },
  {
    image: "/types/femme.jpg",
    title: "Montures Femme",
    desc: "Formes rondes, papillon et élégantes pour sublimer votre regard. Montures légères et tendances.",
    msg: "Bonjour FAR-VISION, je suis intéressée par des montures Femme."
  },
  {
    image: "/types/enfant.jpg",
    title: "Montures Enfant",
    desc: "Montures flexibles, légères et ultra-résistantes, spécialement pensées pour la sécurité des plus jeunes.",
    msg: "Bonjour FAR-VISION, je cherche des montures pour Enfant."
  }
];

export function Products() {
  return (
    <section id="produits" className="py-24 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Notre collection optique
            <span className="w-6 h-[1px] bg-gold block"></span>
          </div>
          <h2 id="products-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Une monture pour chaque regard
          </h2>
          <p className="text-gray-soft text-lg">
            Découvrez nos gammes de lunettes de vue et de soleil au Bénin. Choisissez une catégorie et envoyez-nous directement votre demande sur WhatsApp pour être conseillé(e) par un opticien expert.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((prod, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-creme border border-sable rounded-xl p-6 text-center hover:border-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-charcoal/10 transition-all duration-300 group flex flex-col"
              itemScope itemType="https://schema.org/Product"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-white mb-6 shadow-sm relative border border-sable/50">
                <img
                  src={prod.image}
                  alt={prod.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-3" itemProp="name">{prod.title}</h3>
              <p className="text-gray-soft text-sm mb-8 flex-grow" itemProp="description">{prod.desc}</p>
              <a
                href={`https://wa.me/22997082358?text=${encodeURIComponent(prod.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-[0.1em] uppercase text-gold border-b border-gold pb-1 w-fit mx-auto hover:text-charcoal hover:border-charcoal transition-colors mt-auto"
                aria-label={`Demander des informations sur les ${prod.title}`}
              >
                Demander &rarr;
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
