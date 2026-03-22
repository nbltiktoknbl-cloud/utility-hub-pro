import React from 'react';
import { useLanguage, useTheme } from '../context/AppContext';

const SEOContent: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <article className={`prose prose-sm md:prose-base max-w-none ${darkMode ? 'prose-invert' : ''}`}>
      <h2 className="text-2xl font-bold mb-4">Why use our Utility Hub?</h2>
      <p className="mb-6 leading-relaxed opacity-80">
        Our Multi-Tool Utility Hub is designed to simplify your daily calculations. Whether you need to know your exact age, check your body mass index (BMI), or calculate a discount for your next purchase, we provide precise and easy-to-use tools in one place.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img 
            src="https://picsum.photos/seed/age/400/250" 
            alt="Age Calculator" 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">Age Calculator</h3>
          <p className="opacity-80">
            Get your exact age in years, months, and days. We handle leap years and varying month lengths automatically for maximum precision.
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/health/400/250" 
            alt="BMI Calculator" 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">BMI Calculator</h3>
          <p className="opacity-80">
            Quickly determine your Body Mass Index using your weight and height. It's a simple way to track your health and fitness goals.
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/shopping/400/250" 
            alt="Discount Calculator" 
            referrerPolicy="no-referrer"
            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-3">Discount Calculator</h3>
          <p className="opacity-80">
            Never guess a sale price again. Enter the original price and discount percentage to see exactly how much you'll save and the final cost.
          </p>
        </div>
      </div>

      <div className={`mt-12 p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <h3 className="text-lg font-bold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 opacity-80">
          <li>Fast and accurate calculations for daily tasks.</li>
          <li>Clean, modern, and mobile-responsive design.</li>
          <li>Single Page Application (SPA) for a seamless experience.</li>
          <li>Supports multiple languages for global accessibility.</li>
          <li>Real-time results with a professional UI.</li>
        </ul>
      </div>
    </article>
  );
};

export default SEOContent;
