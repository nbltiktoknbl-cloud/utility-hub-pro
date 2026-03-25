import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import AgeCalculator from './components/AgeCalculator';
import BMICalculator from './components/BMICalculator';
import DiscountCalculator from './components/DiscountCalculator';
import PercentageCalculator from './components/PercentageCalculator';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';
import { LanguageCode, translations } from './utils/translations';
import { LanguageContext, ThemeContext } from './context/AppContext';

type Page = 'home' | 'about' | 'contact' | 'age' | 'bmi' | 'discount' | 'percentage' | 'privacy';

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'en' || saved === 'es' || saved === 'fr' || saved === 'de' || saved === 'hi')) {
        return saved as LanguageCode;
      }
    } catch (e) {
      console.error('localStorage error:', e);
    }
    return 'en';
  });
  const [activePage, setActivePage] = useState<Page>('home');
  console.log('App rendering, activePage:', activePage, 'lang:', lang);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch (e) {
      console.error('localStorage error:', e);
    }
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

  const langContextValue = React.useMemo(() => ({
    lang,
    setLang,
    t: translations[lang]
  }), [lang]);

  const themeContextValue = React.useMemo(() => ({
    darkMode,
    toggleDarkMode
  }), [darkMode]);

  const renderContent = () => {
    try {
      switch (activePage) {
        case 'home': return <Home onSelectTool={setActivePage} />;
        case 'about': return <About />;
        case 'contact': return <Contact />;
        case 'age': return <AgeCalculator />;
        case 'bmi': return <BMICalculator />;
        case 'discount': return <DiscountCalculator />;
        case 'percentage': return <PercentageCalculator />;
        case 'privacy': return <PrivacyPolicy />;
        default: return <Home onSelectTool={setActivePage} />;
      }
    } catch (e) {
      console.error('renderContent error:', e);
      return <div className="p-8 text-center text-red-500 font-bold">Error rendering content. Please refresh.</div>;
    }
  };

  const getPageTitle = () => {
    const t = translations[lang];
    switch (activePage) {
      case 'home': return "Utility Hub Pro";
      case 'about': return t.about;
      case 'contact': return t.contact;
      case 'age': return t.title;
      case 'bmi': return t.bmiCalculator;
      case 'discount': return t.discountCalculator;
      case 'percentage': return t.percentageCalculator;
      case 'privacy': return t.privacyPolicy;
      default: return "Utility Hub Pro";
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
          
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          
          <main className="flex-grow container mx-auto px-4 py-8 md:py-12 relative z-10">
            <section className="max-w-5xl mx-auto mb-12">
              <div className="flex justify-center mb-8">
                <Logo size={48} showText={false} />
              </div>
              <h1 className={`text-4xl md:text-7xl font-black text-center mb-4 tracking-tighter transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {getPageTitle()}
              </h1>
              <p className={`text-center mb-12 max-w-2xl mx-auto text-lg font-medium transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {translations[lang].subtitle}
              </p>

              <div className="relative z-10">
                {renderContent()}
              </div>
            </section>

            {activePage === 'home' && (
              <section className="max-w-4xl mx-auto">
                <SEOContent />
              </section>
            )}
          </main>
          <Footer setActivePage={setActivePage} />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
