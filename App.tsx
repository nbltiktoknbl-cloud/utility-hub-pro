import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import AgeCalculator from './components/AgeCalculator';
import BMICalculator from './components/BMICalculator';
import DiscountCalculator from './components/DiscountCalculator';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';
import { LanguageCode, translations } from './utils/translations';
import { LanguageContext, ThemeContext } from './context/AppContext';
import { motion, AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'es' || saved === 'fr' || saved === 'de' || saved === 'hi')) {
      return saved as LanguageCode;
    }
    return 'en';
  });
  const [activeTool, setActiveTool] = useState<'age' | 'bmi' | 'discount'>('age');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const langContextValue = {
    lang,
    setLang,
    t: translations[lang]
  };

  const themeContextValue = {
    darkMode,
    toggleDarkMode
  };

  const renderTool = () => {
    switch (activeTool) {
      case 'age': return <AgeCalculator />;
      case 'bmi': return <BMICalculator />;
      case 'discount': return <DiscountCalculator />;
      default: return <AgeCalculator />;
    }
  };

  const getToolTitle = () => {
    switch (activeTool) {
      case 'age': return translations[lang].title;
      case 'bmi': return translations[lang].bmiCalculator;
      case 'discount': return translations[lang].discountCalculator;
      default: return translations[lang].title;
    }
  };

  return (
    <LanguageContext.Provider value={langContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
            <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-400'}`}></div>
          </div>
          
          <Navbar activeTool={activeTool} setActiveTool={setActiveTool} />
          
          <main className="flex-grow container mx-auto px-4 py-8 md:py-12 relative z-10">
            <section className="max-w-5xl mx-auto mb-12">
              <div className="flex justify-center mb-8">
                <Logo size={48} showText={false} />
              </div>
              <motion.h1 
                key={activeTool}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-4xl md:text-7xl font-black text-center mb-4 tracking-tighter transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}
              >
                {getToolTitle()}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-center mb-12 max-w-2xl mx-auto text-lg font-medium transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
              >
                {translations[lang].subtitle}
              </motion.p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTool}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderTool()}
                </motion.div>
              </AnimatePresence>
            </section>

            <section className="max-w-4xl mx-auto">
              <SEOContent />
            </section>
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
