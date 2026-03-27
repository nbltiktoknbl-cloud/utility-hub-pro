import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useLanguage, useTheme } from '@/src/context/AppContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className={`p-8 md:p-12 rounded-3xl glass-card shadow-2xl max-w-2xl mx-auto`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-2xl ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
          <Mail size={18} />
        </div>
        <h2 className="text-3xl font-black tracking-tight">{t.contactTitle}</h2>
      </div>

      {submitted ? (
        <div className={`p-12 rounded-3xl border-2 text-center flex flex-col items-center gap-4 ${
            darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}
        >
          <div className="p-4 rounded-full bg-emerald-500 text-white">
            <CheckCircle size={32} />
          </div>
          <p className="text-xl font-black text-emerald-600">{t.contactSuccess}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
              <User size={14} className="text-blue-500" />
              {t.contactName}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full p-4 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 text-white' 
                  : 'bg-white border-slate-100 focus:border-blue-500 text-slate-900'
              }`}
            />
          </div>
          <div className="space-y-2">
            <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
              <Mail size={14} className="text-blue-500" />
              {t.contactEmail}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full p-4 rounded-2xl border-2 transition-all outline-none font-bold text-lg ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 text-white' 
                  : 'bg-white border-slate-100 focus:border-blue-500 text-slate-900'
              }`}
            />
          </div>
          <div className="space-y-2">
            <label className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-70`}>
              <MessageSquare size={14} className="text-blue-500" />
              {t.contactMessage}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full p-4 rounded-2xl border-2 transition-all outline-none font-bold text-lg resize-none ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 text-white' 
                  : 'bg-white border-slate-100 focus:border-blue-500 text-slate-900'
              }`}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-4 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
            }`}
          >
            <Send size={16} />
            {t.contactSubmit}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
