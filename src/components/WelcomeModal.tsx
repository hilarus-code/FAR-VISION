import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useWelcome, VisionOption, ImageQualityOption } from '../context/WelcomeContext';
import { Logo } from './Logo';
import { Eye, Image as ImageIcon, CheckCircle, Sparkles } from 'lucide-react';

export function WelcomeModal() {
  const { isWelcomeFinished, setPreferences, preloadProgress, isPreloading } = useWelcome();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [visionPref, setVisionPref] = useState<VisionOption | null>(null);
  const [qualityPref, setQualityPref] = useState<ImageQualityOption | null>(null);

  // Handle auto-progressing from Step 3 to closing after 2 seconds
  useEffect(() => {
    if (step === 3 && visionPref && qualityPref) {
      const timer = setTimeout(() => {
        setPreferences(visionPref, qualityPref);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, visionPref, qualityPref, setPreferences]);

  if (isWelcomeFinished) return null;

  const handleVisionSelect = (value: VisionOption) => {
    setVisionPref(value);
    setStep(2);
  };

  const handleQualitySelect = (value: ImageQualityOption) => {
    setQualityPref(value);
    setStep(3);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[100] bg-creme-dark/95 backdrop-blur-xl overflow-y-auto flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6 text-charcoal font-sans"
        id="welcome-portal"
      >
        {/* Ambient subtle backlights to match premium theme */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container (using min-h-0 and auto-spacing to prevent screen cut-offs) */}
        <div className="max-w-md w-full relative z-10 flex flex-col items-center py-8 sm:py-12 my-auto">
          
          {/* Logo Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-6 sm:mb-8 text-center shrink-0"
            id="welcome-logo-container"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 text-gold mb-3">
              <Logo variant="monogram" className="w-full h-full" />
            </div>
            <div className="text-sm font-bold tracking-[0.25em] uppercase text-gold">FAR-VISION</div>
            <div className="text-[10px] text-gray-soft tracking-[0.1em] mt-1">MAISON D'OPTIQUE · BENIN</div>
          </motion.div>

          {/* Stepper progress indicator */}
          {step < 3 && (
            <div className="flex gap-2 mb-6 sm:mb-8 justify-center items-center shrink-0" id="welcome-stepper">
              <span className={`w-8 h-1 rounded transition-all duration-300 ${step === 1 ? 'bg-gold' : 'bg-gold/20'}`} />
              <span className={`w-8 h-1 rounded transition-all duration-300 ${step === 2 ? 'bg-gold' : 'bg-gold/20'}`} />
            </div>
          )}

          {/* Main Card with AnimatePresence for slide/fade step transitions */}
          <div className="w-full min-h-[220px] sm:min-h-[280px] flex items-center justify-center shrink-0">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center text-center"
                  id="welcome-step-1"
                >
                  <div className="p-3 bg-gold/10 text-gold rounded-full mb-4 sm:mb-5">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold mb-6 tracking-tight text-charcoal">
                    AVEZ VOUS DES PROBLÈMES D'YEUX ?
                  </h2>
                  <div className="flex flex-col gap-2.5 w-full max-w-xs">
                    <button
                      onClick={() => handleVisionSelect('Oui')}
                      className="w-full py-3.5 px-6 bg-charcoal hover:bg-gold hover:text-charcoal text-white rounded font-bold transition-all shadow-md active:scale-98 cursor-pointer text-sm sm:text-base"
                      id="pref-vision-yes"
                    >
                      Oui
                    </button>
                    <button
                      onClick={() => handleVisionSelect('Un peu')}
                      className="w-full py-3.5 px-6 bg-white hover:bg-gold hover:text-charcoal text-charcoal border border-charcoal/10 rounded font-bold transition-all shadow-sm active:scale-98 cursor-pointer text-sm sm:text-base"
                      id="pref-vision-little"
                    >
                      Un peu
                    </button>
                    <button
                      onClick={() => handleVisionSelect('Non')}
                      className="w-full py-3.5 px-6 bg-white hover:bg-gold hover:text-charcoal text-charcoal border border-charcoal/10 rounded font-bold transition-all shadow-sm active:scale-98 cursor-pointer text-sm sm:text-base"
                      id="pref-vision-no"
                    >
                      Non
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center text-center"
                  id="welcome-step-2"
                >
                  <div className="p-3 bg-gold/10 text-gold rounded-full mb-4 sm:mb-5">
                    <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold mb-6 tracking-tight text-charcoal">
                    VOULEZ VOUS DES LUNETTES DE QUALITES ?
                  </h2>
                  <div className="flex flex-col gap-2.5 w-full max-w-xs">
                    <button
                      onClick={() => handleQualitySelect('Oui')}
                      className="w-full py-3.5 px-6 bg-charcoal hover:bg-gold hover:text-charcoal text-white rounded font-bold transition-all shadow-md active:scale-98 cursor-pointer text-sm sm:text-base"
                      id="pref-quality-yes"
                    >
                      Oui, charger les images
                    </button>
                    <button
                      onClick={() => handleQualitySelect('Non')}
                      className="w-full py-3.5 px-6 bg-white hover:bg-gold hover:text-charcoal text-charcoal border border-charcoal/10 rounded font-bold transition-all shadow-sm active:scale-98 cursor-pointer text-sm sm:text-base"
                      id="pref-quality-no"
                    >
                      Non, mode rapide sans images
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full flex flex-col items-center text-center"
                  id="welcome-step-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="p-4 bg-gold text-charcoal rounded-full mb-6 relative"
                  >
                    <CheckCircle className="w-10 h-10" />
                    <span className="absolute -top-1 -right-1 text-gold-light animate-bounce">
                      <Sparkles className="w-4 h-4 fill-gold-light" />
                    </span>
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal tracking-tight mb-3">
                    Vous êtes au bon endroit
                  </h2>
                  <p className="text-sm text-gray-soft animate-pulse">
                    Mise en place de votre univers optique personnalisé...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium Preloader Status (Fulfills the fast load and preloading assurance) */}
          {step < 3 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 w-full max-w-xs flex flex-col items-center text-center shrink-0"
              id="preload-bar-container"
            >
              <div className="flex justify-between w-full text-[10px] text-gray-soft font-mono mb-1.5 uppercase tracking-wider">
                <span>Optimisation du site</span>
                <span>{preloadProgress}%</span>
              </div>
              <div className="w-full bg-gold/10 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-gold h-full rounded-full"
                  animate={{ width: `${preloadProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              {isPreloading ? (
                <span className="text-[9px] text-gray-soft/75 mt-1.5 tracking-wide animate-pulse">Preloading ultra-high fidelity assets...</span>
              ) : (
                <span className="text-[9px] text-gold font-semibold mt-1.5 tracking-wider uppercase">Tous les visuels sont prêts !</span>
              )}
            </motion.div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
