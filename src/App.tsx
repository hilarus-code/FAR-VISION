import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Products } from './components/Products';
import { CTASection } from './components/CTASection';
import { Locations } from './components/Locations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FAQ } from './components/FAQ';
import { Reviews } from './components/Reviews';

export default function App() {
  return (
    <div className="min-h-screen bg-creme font-sans text-charcoal selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <CTASection />
        <Locations />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
