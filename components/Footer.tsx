import React from 'react';
import { useLanguage, useTheme } from '../context/AppContext';
import Logo from './Logo';

const Footer: React.FC = () => {
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
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
