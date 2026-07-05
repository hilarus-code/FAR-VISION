import React, { createContext, useContext, useState, useEffect } from 'react';

export type VisionOption = 'Oui' | 'Un peu' | 'Non';
export type ImageQualityOption = 'Oui' | 'Non' | 'Je ne sais pas encore';

interface WelcomeContextType {
  isWelcomeFinished: boolean;
  visionPreference: VisionOption;
  showImages: boolean;
  isPreloading: boolean;
  preloadProgress: number;
  setPreferences: (vision: VisionOption, quality: ImageQualityOption) => void;
  resetPreferences: () => void;
}

const WelcomeContext = createContext<WelcomeContextType | undefined>(undefined);

const IMAGES_TO_PRELOAD = [
  "https://x0.at/rYPp.webp",
  "https://x0.at/jK3b.webp",
  "https://x0.at/O5u9.webp",
  "https://x0.at/8mHP.jpg",
  "https://x0.at/aQB9.jpg",
  "https://x0.at/FvPq.jpg",
  "https://x0.at/TOLY.jpg",
  "https://x0.at/fMd3.jpg",
  "/hero.webp"
];

export function WelcomeProvider({ children }: { children: React.ReactNode }) {
  const [isWelcomeFinished, setIsWelcomeFinished] = useState<boolean>(false);
  const [visionPreference, setVisionPreference] = useState<VisionOption>('Non');
  const [showImages, setShowImages] = useState<boolean>(true);
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const [preloadProgress, setPreloadProgress] = useState<number>(0);

  // Check if user has already completed the questionnaire in this or a previous session
  useEffect(() => {
    const savedVision = localStorage.getItem('fv_pref_vision') as VisionOption | null;
    const savedQuality = localStorage.getItem('fv_pref_quality') as ImageQualityOption | null;
    const finished = localStorage.getItem('fv_pref_finished') === 'true';

    if (finished && savedVision && savedQuality) {
      setVisionPreference(savedVision);
      setShowImages(savedQuality === 'Oui' || savedQuality === 'Je ne sais pas encore');
      setIsWelcomeFinished(true);
      setIsPreloading(false);
      setPreloadProgress(100);
    } else {
      // Start preloading immediately if the survey is going to be shown
      startPreloading();
    }
  }, []);

  // Trigger preloading of images programmatically
  const startPreloading = () => {
    setIsPreloading(true);
    let loadedCount = 0;
    const total = IMAGES_TO_PRELOAD.length;
    
    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      
      const handleLoad = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / total) * 100);
        setPreloadProgress(progress);
        if (loadedCount === total) {
          setIsPreloading(false);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Count error as complete to not block forever
    });
  };

  const setPreferences = (vision: VisionOption, quality: ImageQualityOption) => {
    setVisionPreference(vision);
    setShowImages(quality === 'Oui' || quality === 'Je ne sais pas encore');
    setIsWelcomeFinished(true);
    
    // Save to localStorage
    localStorage.setItem('fv_pref_vision', vision);
    localStorage.setItem('fv_pref_quality', quality);
    localStorage.setItem('fv_pref_finished', 'true');
  };

  const resetPreferences = () => {
    localStorage.removeItem('fv_pref_vision');
    localStorage.removeItem('fv_pref_quality');
    localStorage.removeItem('fv_pref_finished');
    setVisionPreference('Non');
    setShowImages(true);
    setIsWelcomeFinished(false);
    setPreloadProgress(0);
    startPreloading();
  };

  return (
    <WelcomeContext.Provider
      value={{
        isWelcomeFinished,
        visionPreference,
        showImages,
        isPreloading,
        preloadProgress,
        setPreferences,
        resetPreferences,
      }}
    >
      {children}
    </WelcomeContext.Provider>
  );
}

export function useWelcome() {
  const context = useContext(WelcomeContext);
  if (context === undefined) {
    throw new Error('useWelcome must be used within a WelcomeProvider');
  }
  return context;
}
