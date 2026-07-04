import { FormEvent } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nom = formData.get('nom') as string;
    const tel = formData.get('tel') as string;
    const cat = formData.get('categorie') as string;
    const msg = formData.get('message') as string;
    
    const text = `Bonjour FAR-VISION,\n\nNom : ${nom}\nTéléphone : ${tel}\nCatégorie : ${cat}\nMessage : ${msg}`;
    window.open(`https://wa.me/22997082358?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-creme" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
        
        {/* Info */}
        <div itemScope itemType="https://schema.org/ContactPoint">
          <div className="flex items-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Contactez notre centre optique
          </div>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            Une question sur vos lunettes ?<br/>Écrivez-nous.
          </h2>
          
          <ul className="space-y-6">
            <li className="flex gap-4 pb-6 border-b border-sable">
              <Phone className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
              <div>
                <b className="block text-sm uppercase tracking-wider mb-1">Téléphone</b>
                <span className="text-gray-soft text-sm">
                  <a href="tel:+2290194359191" className="font-semibold text-charcoal hover:text-gold" itemProp="telephone">+229 01 94 35 91 91</a> ·{' '}
                  <a href="tel:+2290197082358" className="font-semibold text-charcoal hover:text-gold" itemProp="telephone">+229 01 97 08 23 58</a>
                </span>
              </div>
            </li>
            <li className="flex gap-4 pb-6 border-b border-sable">
              <Mail className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
              <div>
                <b className="block text-sm uppercase tracking-wider mb-1">Email</b>
                <a href="mailto:farvision521@gmail.com" className="font-semibold text-charcoal hover:text-gold text-sm" itemProp="email">farvision521@gmail.com</a>
              </div>
            </li>
            <li className="flex gap-4 pb-6 border-b border-sable">
              <Clock className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
              <div>
                <b className="block text-sm uppercase tracking-wider mb-1">Horaires d'ouverture</b>
                <span className="text-gray-soft text-sm">Ouvert tous les jours · 08h00 – 19h30</span>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
              <div>
                <b className="block text-sm uppercase tracking-wider mb-1">Opticiens au Bénin</b>
                <span className="text-gray-soft text-sm">Boutiques à Cotonou · Porto-Novo · Bohicon</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-sable shadow-xl shadow-sable/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-xs font-bold tracking-wider uppercase text-charcoal mb-2">Nom complet</label>
                <input required id="nom" name="nom" type="text" placeholder="Votre nom" className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm" />
              </div>
              <div>
                <label htmlFor="tel" className="block text-xs font-bold tracking-wider uppercase text-charcoal mb-2">Téléphone</label>
                <input required id="tel" name="tel" type="tel" placeholder="+229 ..." className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="categorie" className="block text-xs font-bold tracking-wider uppercase text-charcoal mb-2">Catégorie souhaitée</label>
              <select id="categorie" name="categorie" className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm appearance-none">
                <option>Lunettes de vue</option>
                <option>Lunettes de soleil</option>
                <option>Montures Homme</option>
                <option>Montures Femme</option>
                <option>Montures Enfant</option>
                <option>Autre demande / SAV</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-charcoal mb-2">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Décrivez votre besoin (devis, rendez-vous...)" className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm resize-y"></textarea>
            </div>
            <button type="submit" className="w-full bg-gold text-charcoal font-bold py-4 rounded-lg hover:bg-[#d9b65b] transition-colors">
              Envoyer la demande sur WhatsApp
            </button>
            <p className="text-xs text-gray-soft text-center mt-4">
              En envoyant, votre message s'ouvrira directement dans WhatsApp pour un traitement rapide.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
