import React from 'react';
import { useLanguage, useTheme } from '@/src/context/AppContext';

interface ToolSEOContentProps {
  type: 'age' | 'bmi' | 'discount' | 'percentage';
}

const ToolSEOContent: React.FC<ToolSEOContentProps> = ({ type }) => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  const getContent = () => {
    switch (type) {
      case 'age': return t.seoSectionAge;
      case 'bmi': return t.seoSectionBmi;
      case 'discount': return t.seoSectionDiscount;
      case 'percentage': return t.seoSectionPercentage;
      default: return '';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'age': return t.title;
      case 'bmi': return t.bmiCalculator;
      case 'discount': return t.discountCalculator;
      case 'percentage': return t.percentageCalculator;
      default: return '';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'age': return 'https://picsum.photos/seed/age/800/400';
      case 'bmi': return 'https://picsum.photos/seed/health/800/400';
      case 'discount': return 'https://picsum.photos/seed/shopping/800/400';
      case 'percentage': return 'https://picsum.photos/seed/math/800/400';
      default: return '';
    }
  };

  return (
    <div className={`mt-16 pt-16 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
      <article className={`prose prose-sm md:prose-base max-w-none ${darkMode ? 'prose-invert' : ''}`}>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{getTitle()}</h2>
            <p className="mb-6 leading-relaxed opacity-80">
              {getContent()}
            </p>
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-900' : 'bg-white shadow-sm border border-slate-100'}`}>
              <h3 className="text-lg font-semibold mb-2">{t.seoSectionTitle}</h3>
              <p className="text-sm opacity-70 italic">
                {t.seoSectionContent}
              </p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img 
              src={getIcon()} 
              alt={getTitle()} 
              referrerPolicy="no-referrer"
              className="w-full h-64 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default ToolSEOContent;
