export function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 text-[#a9a397] border-t border-white/5" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6" aria-label="Retour à l'accueil">
              <div className="font-serif text-xl font-bold tracking-wider text-white">FAR-VISION</div>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              L'opticien de référence au Bénin. Pour une vision nette à toute distance, optez pour FAR-VISION. Ensemble, voyons plus loin avec expertise et style.
            </p>
          </div>

          <nav aria-label="Navigation principale du pied de page">
            <h2 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Navigation</h2>
            <ul className="space-y-4">
              <li><a href="#accueil" className="hover:text-gold-light transition-colors text-sm">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-gold-light transition-colors text-sm">Pourquoi nous choisir</a></li>
              <li><a href="#produits" className="hover:text-gold-light transition-colors text-sm">Lunettes & Montures</a></li>
              <li><a href="#boutiques" className="hover:text-gold-light transition-colors text-sm">Boutiques optiques</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Nos Centres Optiques</h2>
            <ul className="space-y-4">
              <li className="text-sm">Opticien Cotonou — Étoile Rouge</li>
              <li className="text-sm">Opticien Porto-Novo — Cinquantenaire</li>
              <li className="text-sm">Opticien Bohicon — Soglogon</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Contactez-nous</h2>
            <ul className="space-y-4">
              <li><a href="tel:+2290194359191" className="hover:text-gold-light transition-colors text-sm font-semibold">+229 01 94 35 91 91</a></li>
              <li><a href="mailto:farvision521@gmail.com" className="hover:text-gold-light transition-colors text-sm">farvision521@gmail.com</a></li>
              <li><a href="https://wa.me/22997082358" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors text-sm font-semibold text-gold">Contacter sur WhatsApp</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs">
          <p>© {new Date().getFullYear()} FAR-VISION Opticien Bénin. Tous droits réservés.</p>
          <p>01BP 5484 Cotonou, Bénin</p>
        </div>
      </div>
    </footer>
  );
}
