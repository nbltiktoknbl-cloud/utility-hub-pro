import React from 'react';
import { useLanguage, useTheme } from '@/src/context/AppContext';
import { Calculator, Scale, Tag, Moon, Sun, Globe } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activePage: 'home' | 'about' | 'contact' | 'age' | 'bmi' | 'discount' | 'percentage' | 'privacy';
  setActivePage: (page: 'home' | 'about' | 'contact' | 'age' | 'bmi' | 'discount' | 'percentage' | 'privacy') => void;
  onHoverNav?: (page: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onHoverNav }) => {
  const { t, lang, setLang } = useLanguage();
  const { darkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact },
  ] as const;

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'
    } backdrop-blur-xl`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <Logo size={28} />
        </div>

        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              onMouseEnter={() => onHoverNav?.(item.id)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                activePage === item.id
                  ? (darkMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40' : 'bg-blue-600 text-white shadow-md')
                  : (darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700')
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative group">
            <button 
              title={t.tooltips.language}
              className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
            >
              <Globe size={14} />
            </button>
            <div className={`absolute right-0 top-full mt-2 p-2 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[140px] border ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
            }`}>
              {(['en', 'es', 'fr', 'de', 'hi'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    lang === l
                      ? 'bg-blue-600 text-white'
                      : (darkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-50 text-slate-600')
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            title={t.tooltips.theme}
            className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-slate-900 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
