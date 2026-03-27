import React from 'react';
import { useLanguage, useTheme } from '@/src/context/AppContext';

const SEOContent: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <article className={`prose prose-sm md:prose-base max-w-none ${darkMode ? 'prose-invert' : ''}`}>
      <h2 className="text-2xl font-bold mb-4">{t.seoSectionTitle}</h2>
      <p className="mb-6 leading-relaxed opacity-80">
        {t.seoSectionContent}
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img 
            src="https://picsum.photos/seed/age/400/250" 
            alt={t.title} 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
          <p className="opacity-80 text-sm">
            {t.seoSectionAge}
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/health/400/250" 
            alt={t.bmiCalculator} 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">{t.bmiCalculator}</h3>
          <p className="opacity-80 text-sm">
            {t.seoSectionBmi}
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/shopping/400/250" 
            alt={t.discountCalculator} 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">{t.discountCalculator}</h3>
          <p className="opacity-80 text-sm">
            {t.seoSectionDiscount}
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/math/400/250" 
            alt={t.percentageCalculator} 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">{t.percentageCalculator}</h3>
          <p className="opacity-80 text-sm">
            {t.seoSectionPercentage}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SEOContent;
