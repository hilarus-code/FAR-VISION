import { useWelcome } from '../context/WelcomeContext';

export function CTASection() {
  const { isWelcomeFinished, showImages } = useWelcome();

  return (
    <section className="relative py-32 text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {isWelcomeFinished && showImages ? (
          <>
            <img src="/hero.webp" alt="Opticien FAR-VISION" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/80 mix-blend-multiply"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#23201d] to-[#141312] border-y border-gold/15">
            {/* Subtle luxury geometric shapes */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        )}
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
          Trouvez la boutique FAR-VISION la plus proche
        </h2>
        <p className="text-white/90 text-lg mb-10">
          Cotonou · Porto-Novo · Bohicon — nous sommes ouverts tous les jours de 08h00 à 19h30 pour prendre soin de votre vision.
        </p>
        <a
          href="#boutiques"
          className="inline-flex items-center justify-center bg-gold text-charcoal px-8 py-4 rounded font-bold hover:bg-gold-light hover:-translate-y-1 transition-all"
        >
          Localiser une boutique
        </a>
      </div>
    </section>
  );
}

