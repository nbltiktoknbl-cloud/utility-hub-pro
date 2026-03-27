import React from 'react';
import { useLanguage, useTheme } from '@/src/context/AppContext';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: 'home' | 'about' | 'contact' | 'age' | 'bmi' | 'discount' | 'percentage' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <footer className={`py-12 border-t transition-colors ${darkMode ? 'bg-gray-950 border-gray-800 text-gray-500' : 'bg-white border-gray-200 text-gray-400'}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Logo size={24} />
        </div>
        <p className="text-sm font-medium mb-4">
          {t.footerText}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto text-sm">
          <button onClick={() => setActivePage('age')} className="hover:text-blue-500 transition-colors text-left">{t.title}</button>
          <button onClick={() => setActivePage('bmi')} className="hover:text-blue-500 transition-colors text-left">{t.bmiCalculator}</button>
          <button onClick={() => setActivePage('discount')} className="hover:text-blue-500 transition-colors text-left">{t.discountCalculator}</button>
          <button onClick={() => setActivePage('percentage')} className="hover:text-blue-500 transition-colors text-left">{t.percentageCalculator}</button>
        </div>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <button onClick={() => setActivePage('privacy')} className="hover:text-blue-500 transition-colors uppercase">{t.privacyPolicy}</button>
          <button onClick={() => setActivePage('home')} className="hover:text-blue-500 transition-colors uppercase">{t.termsOfService}</button>
          <button onClick={() => setActivePage('contact')} className="hover:text-blue-500 transition-colors uppercase">{t.contact}</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
