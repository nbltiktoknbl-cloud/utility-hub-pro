import React from 'react';
import { Info, Shield, Zap, Globe } from 'lucide-react';
import { useLanguage, useTheme } from '@/src/context/AppContext';

const FeatureItem = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
  const { darkMode } = useTheme();
  return (
    <div className="flex gap-4 items-start">
      <div className={`p-3 rounded-2xl ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-lg font-black mb-1 tracking-tight">{title}</h4>
        <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <div className={`p-8 md:p-12 rounded-3xl glass-card shadow-2xl max-w-4xl mx-auto`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-2xl ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
          <Info size={18} />
        </div>
        <h2 className="text-3xl font-black tracking-tight">{t.aboutTitle}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className={`text-lg font-medium leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {t.aboutContent}
          </p>
          <div className="space-y-6 pt-6 border-t border-slate-500/10">
            <FeatureItem 
              icon={Shield} 
              title={t.privacyTitle} 
              description={t.privacyDesc} 
              delay={0.1}
            />
            <FeatureItem 
              icon={Zap} 
              title={t.speedTitle} 
              description={t.speedDesc} 
              delay={0.2}
            />
            <FeatureItem 
              icon={Globe} 
              title={t.globalTitle} 
              description={t.globalDesc} 
              delay={0.3}
            />
          </div>
        </div>
        <div className="relative group">
          <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-20 transition-opacity group-hover:opacity-30 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
          <img 
            src="https://picsum.photos/seed/utility/800/1000" 
            alt="Professional Utility" 
            className="rounded-3xl object-cover h-full w-full relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
