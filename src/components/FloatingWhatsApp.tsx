import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/22997082358?text=Bonjour%20FAR-VISION%2C%20je%20souhaite%20des%20renseignements."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
}
