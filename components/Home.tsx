import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Scale, Tag, Percent, ArrowRight } from 'lucide-react';
import { useLanguage, useTheme } from '../context/AppContext';

interface ToolCardProps {
  icon: any;
  title: string;
  description: string;
  onClick: () => void;
  color: string;
  delay: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, description, onClick, color, delay }) => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className={`p-8 rounded-3xl glass-card border-2 border-transparent hover:border-blue-500/30 transition-all cursor-pointer group flex flex-col h-full`}
    >
      <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className={`text-sm font-medium mb-8 flex-grow ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {description}
      </p>
      <div className="flex items-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-widest">
        Open Tool
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};

const Home: React.FC<{ onSelectTool: (tool: any) => void }> = ({ onSelectTool }) => {
  const { t } = useLanguage();
  
  const tools = [
    {
      id: 'age',
      icon: Calendar,
      title: t.title,
      description: t.ageDescription,
      color: "bg-blue-600 shadow-lg shadow-blue-500/20"
    },
    {
      id: 'bmi',
      icon: Scale,
      title: t.bmiCalculator,
      description: t.bmiDescription,
      color: "bg-indigo-600 shadow-lg shadow-indigo-500/20"
    },
    {
      id: 'discount',
      icon: Tag,
      title: t.discountCalculator,
      description: t.discountDescription,
      color: "bg-violet-600 shadow-lg shadow-violet-500/20"
    },
    {
      id: 'percentage',
      icon: Percent,
      title: t.percentageCalculator,
      description: t.percentageDescription,
      color: "bg-emerald-600 shadow-lg shadow-emerald-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool, idx) => (
        <ToolCard
          key={tool.id}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
          onClick={() => onSelectTool(tool.id)}
          color={tool.color}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
};

export default Home;
