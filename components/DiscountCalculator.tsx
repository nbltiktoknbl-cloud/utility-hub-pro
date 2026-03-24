import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tag, ShoppingCart } from 'lucide-react';
import { useLanguage, useTheme } from '../context/AppContext';
import NumericInput from './NumericInput';

const DiscountCalculator: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [price, setPrice] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ finalPrice: number; savings: number } | null>(null);

  const calculateDiscount = () => {
    setError(null);
    setResult(null);

    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (isNaN(p) || p <= 0) {
      setError(t.errorInvalidPrice);
      return;
    }

    if (isNaN(d) || d < 0 || d > 100) {
      setError(t.errorInvalidDiscount);
      return;
    }

    const savings = p * (d / 100);
    const finalPrice = p - savings;
    setResult({ finalPrice: Math.round(finalPrice * 100) / 100, savings: Math.round(savings * 100) / 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-8 rounded-3xl glass-card shadow-2xl max-w-2xl mx-auto`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-2xl ${darkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
          <Tag size={18} />
        </div>
        <h2 className="text-3xl font-black tracking-tight">{t.discountCalculator}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className={`block text-sm font-bold uppercase tracking-widest opacity-70`}>
            {t.originalPriceLabel}
          </label>
          <NumericInput
            value={price}
            onChange={setPrice}
            placeholder="e.g. 100"
            className={`w-full p-4 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
              darkMode 
                ? 'bg-slate-900/50 border-slate-800 focus:border-emerald-500 text-white' 
                : 'bg-white border-slate-100 focus:border-emerald-500 text-slate-900'
            }`}
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-sm font-bold uppercase tracking-widest opacity-70`}>
            {t.discountPercentageLabel}
          </label>
          <NumericInput
            value={discount}
            onChange={setDiscount}
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
        onClick={calculateDiscount}
        className={`w-full py-4 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
          darkMode
            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20'
            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
        }`}
      >
        <ShoppingCart size={16} />
        {t.calculateDiscountBtn}
      </button>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-2xl bg-red-500/10 border-2 border-red-500/20 text-red-500 text-center font-bold"
        >
          {error}
        </motion.div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`mt-8 p-8 rounded-3xl border-2 text-center ${
            darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}
        >
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-2">Result</div>
          <div className="text-5xl font-black mb-2">${result.finalPrice}</div>
          <div className="text-xl font-bold opacity-80 text-emerald-600">You save: ${result.savings}</div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DiscountCalculator;
