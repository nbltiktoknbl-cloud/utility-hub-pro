import React, { useContext } from 'react';
import { LanguageContext } from '../context/AppContext';
import { Shield, Clock, FileText, Lock, Eye, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const icons = [
    <Shield className="w-6 h-6 text-blue-500" />,
    <FileText className="w-6 h-6 text-indigo-500" />,
    <Eye className="w-6 h-6 text-purple-500" />,
    <Lock className="w-6 h-6 text-pink-500" />,
    <Lock className="w-6 h-6 text-rose-500" />,
    <Mail className="w-6 h-6 text-orange-500" />
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
            {t.privacyPolicyTitle}
          </h2>
          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            {t.privacyPolicyLastUpdated}
          </div>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
          <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      <div className="space-y-8">
        {t.privacyPolicySections.map((section, index) => (
          <div key={index} className="group">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                {section.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-14">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic">
          {t.privacyDesc}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
