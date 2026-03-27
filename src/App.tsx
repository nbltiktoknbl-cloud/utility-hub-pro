import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import { LanguageCode, translations } from './utils/translations';
import { LanguageContext, ThemeContext } from '@/src/context/AppContext';

// Lazy load all main components to reduce initial bundle size
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const SEOContent = lazy(() => import('./components/SEOContent'));
const ToolSEOContent = lazy(() => import('./components/ToolSEOContent'));
const AgeCalculator = lazy(() => import('./components/AgeCalculator'));
const BMICalculator = lazy(() => import('./components/BMICalculator'));
const DiscountCalculator = lazy(() => import('./components/DiscountCalculator'));
const PercentageCalculator = lazy(() => import('./components/PercentageCalculator'));

// Prefetching utility for better perceived performance
const prefetch = (page: Page) => {
  switch (page) {
    case 'age': import('./components/AgeCalculator'); break;
    case 'bmi': import('./components/BMICalculator'); break;
    case 'discount': import('./components/DiscountCalculator'); break;
    case 'percentage': import('./components/PercentageCalculator'); break;
    case 'about': import('./components/About'); break;
    case 'contact': import('./components/Contact'); break;
    case 'privacy': import('./components/PrivacyPolicy'); break;
  }
};

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center p-20">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-sm font-bold text-slate-500 animate-pulse uppercase tracking-widest">Loading Tool...</p>
  </div>
);

type Page = 'home' | 'about' | 'contact' | 'age' | 'bmi' | 'discount' | 'percentage' | 'privacy';

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'en' || saved === 'es' || saved === 'fr' || saved === 'de' || saved === 'it' || saved === 'pt' || saved === 'hi')) {
        return saved as LanguageCode;
      }
    } catch (e) {
      console.error('localStorage error:', e);
    }
    return 'en';
  });
  const [activePage, setActivePage] = useState<Page>('home');
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
        case 'home': return <Home onSelectTool={setActivePage} onHoverTool={prefetch} />;
        case 'about': return <About />;
        case 'contact': return <Contact />;
        case 'age': return <AgeCalculator />;
        case 'bmi': return <BMICalculator />;
        case 'discount': return <DiscountCalculator />;
        case 'percentage': return <PercentageCalculator />;
        case 'privacy': return <PrivacyPolicy />;
        default: return <Home onSelectTool={setActivePage} onHoverTool={prefetch} />;
      }
    } catch (e) {
      console.error('renderContent error:', e);
      return <div className="p-8 text-center text-red-500 font-bold">Error rendering content. Please refresh.</div>;
    }
  };

  const getPageTitle = () => {
    const t = translations[lang];
    switch (activePage) {
      case 'home': return "Utility Hub Pro - Age, BMI & Discount Calculators";
      case 'about': return `${t.about} | Utility Hub Pro`;
      case 'contact': return `${t.contact} | Utility Hub Pro`;
      case 'age': return `${t.title} | Utility Hub Pro`;
      case 'bmi': return `${t.bmiCalculator} | Utility Hub Pro`;
      case 'discount': return `${t.discountCalculator} | Utility Hub Pro`;
      case 'percentage': return `${t.percentageCalculator} | Utility Hub Pro`;
      case 'privacy': return `${t.privacyPolicy} | Utility Hub Pro`;
      default: return "Utility Hub Pro";
    }
  };

  const getPageDescription = () => {
    const t = translations[lang];
    switch (activePage) {
      case 'home': return "Calculate your exact age, BMI, shopping discounts, and percentages instantly. High-precision tools for health, finance, and daily life.";
      case 'age': return `${t.seoSectionAge}`;
      case 'bmi': return `${t.seoSectionBmi}`;
      case 'discount': return `${t.seoSectionDiscount}`;
      case 'percentage': return `${t.seoSectionPercentage}`;
      default: return "Professional utility tools for calculating Age, BMI, Discounts, and Percentages with high precision.";
    }
  };

  const getPageKeywords = () => {
    const t = translations[lang];
    switch (activePage) {
      case 'home': return "Age Calculator, BMI Calculator, Discount Calculator, Percentage Calculator, Utility Hub, Health Tools, Finance Tools";
      case 'age': return t.seoKeywordsAge;
      case 'bmi': return t.seoKeywordsBmi;
      case 'discount': return t.seoKeywordsDiscount;
      case 'percentage': return t.seoKeywordsPercentage;
      default: return "Utility Hub, Age Calculator, BMI Calculator, Discount Calculator";
    }
  };

  return (
    <HelmetProvider>
      <LanguageContext.Provider value={langContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <Helmet>
            <title>{getPageTitle()}</title>
            <meta name="description" content={getPageDescription()} />
            <meta name="keywords" content={getPageKeywords()} />
            <html lang={lang} />
          </Helmet>
          <div className={`min-h-screen flex flex-col transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
              <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
              <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-400'}`}></div>
            </div>
            
            <Navbar activePage={activePage} setActivePage={setActivePage} onHoverNav={prefetch} />
            
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 relative z-10">
              <Suspense fallback={<LoadingSpinner />}>
                <section className="max-w-5xl mx-auto mb-12">
                  <div className="relative z-10">
                    {renderContent()}
                  </div>
                  {activePage === 'age' && <ToolSEOContent type="age" />}
                  {activePage === 'bmi' && <ToolSEOContent type="bmi" />}
                  {activePage === 'discount' && <ToolSEOContent type="discount" />}
                  {activePage === 'percentage' && <ToolSEOContent type="percentage" />}
                </section>
    
                {activePage === 'home' && (
                  <section className="max-w-5xl mx-auto mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                    <SEOContent />
                  </section>
                )}
              </Suspense>
            </main>
            <Footer setActivePage={setActivePage} />
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </HelmetProvider>
  );
};

export default App;
