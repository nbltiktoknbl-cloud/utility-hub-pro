import React, { useState } from 'react';
import { Scale, Activity, Weight, Ruler } from 'lucide-react';
import { useLanguage, useTheme } from '@/src/context/AppContext';
import NumericInput from './NumericInput';

const BMICalculator: React.FC = () => {
  const { t, lang } = useLanguage();
  const { darkMode } = useTheme();
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculateBMI = React.useCallback(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      let category = '';
      if (bmi < 18.5) category = t.bmiCategories.underweight;
      else if (bmi < 25) category = t.bmiCategories.normal;
      else if (bmi < 30) category = t.bmiCategories.overweight;
      else category = t.bmiCategories.obese;
      
      setResult({ bmi: Math.round(bmi * 10) / 10, category });
    }
  }, [weight, height, t.bmiCategories]);

  return (
    <div
      className={`p-8 rounded-3xl glass-card shadow-2xl max-w-2xl mx-auto`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-2xl ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
          <Scale size={18} />
        </div>
        <h2 className="text-3xl font-black tracking-tight">{t.bmiCalculator}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
            <Weight size={14} className="text-blue-500" />
            {t.weightLabel}
          </label>
          <div className="relative">
            <NumericInput
              value={weight}
              onChange={setWeight}
              placeholder={t.weightPlaceholder}
              className={`w-full p-4 pr-12 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 text-white' 
                  : 'bg-white border-slate-100 focus:border-blue-500 text-slate-900'
              }`}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold opacity-40">kg</span>
          </div>
        </div>
        <div className="space-y-2">
          <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
            <Ruler size={14} className="text-blue-500" />
            {t.heightLabel}
          </label>
          <div className="relative">
            <NumericInput
              value={height}
              onChange={setHeight}
              placeholder={t.heightPlaceholder}
              className={`w-full p-4 pr-12 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 text-white' 
                  : 'bg-white border-slate-100 focus:border-blue-500 text-slate-900'
              }`}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold opacity-40">cm</span>
          </div>
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className={`w-full py-4 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
          darkMode
            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
        }`}
      >
        <Activity size={16} />
        {t.calculateBmiBtn}
      </button>

      {result && (
        <div
          className={`mt-8 p-8 rounded-3xl border-2 text-center ${
            darkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'
          }`}
        >
          <div className="text-5xl font-black mb-2">
            {t.bmiResult.replace('{bmi}', result.bmi.toString())}
          </div>
          <div className="text-xl font-bold opacity-80">
            {t.bmiCategory.replace('{category}', result.category)}
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
