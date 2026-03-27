import React, { useState } from 'react';
import { Percent, Hash, Calculator } from 'lucide-react';
import { useLanguage, useTheme } from '@/src/context/AppContext';
import NumericInput from './NumericInput';

const PercentageCalculator: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [number, setNumber] = useState<string>('');
  const [percentage, setPercentage] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = React.useCallback(() => {
    const n = parseFloat(number);
    const p = parseFloat(percentage);
    if (!isNaN(n) && !isNaN(p)) {
      setResult((n * p) / 100);
    }
  }, [number, percentage]);

  return (
    <div className={`p-8 rounded-3xl glass-card shadow-2xl max-w-2xl mx-auto`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-2xl ${darkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
          <Percent size={18} />
        </div>
        <h2 className="text-3xl font-black tracking-tight">{t.percentageCalculator}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
            <Hash size={14} className="text-emerald-500" />
            {t.numberLabel}
          </label>
          <NumericInput
            value={number}
            onChange={setNumber}
            placeholder="e.g. 500"
            className={`w-full p-4 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
              darkMode 
                ? 'bg-slate-900/50 border-slate-800 focus:border-emerald-500 text-white' 
                : 'bg-white border-slate-100 focus:border-emerald-500 text-slate-900'
            }`}
          />
        </div>
        <div className="space-y-2">
          <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
            <Percent size={14} className="text-emerald-500" />
            {t.percentageLabel}
          </label>
          <NumericInput
            value={percentage}
            onChange={setPercentage}
            placeholder="e.g. 20"
            className={`w-full p-4 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
              darkMode 
                ? 'bg-slate-900/50 border-slate-800 focus:border-emerald-500 text-white' 
                : 'bg-white border-slate-100 focus:border-emerald-500 text-slate-900'
            }`}
          />
        </div>
      </div>

      <button
        onClick={calculatePercentage}
        className={`w-full py-4 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
          darkMode
            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20'
            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
        }`}
      >
        <Calculator size={16} />
        {t.calculatePercentageBtn}
      </button>

      {result !== null && (
        <div className={`mt-8 p-8 rounded-3xl border-2 text-center ${
            darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}
        >
          <div className="text-5xl font-black mb-2">
            {t.percentageResult
              .replace('{percentage}', percentage)
              .replace('{number}', number)
              .replace('{result}', result.toString())}
          </div>
        </div>
      )}
    </div>
  );
};

export default PercentageCalculator;
