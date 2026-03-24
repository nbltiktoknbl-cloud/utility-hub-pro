import React from 'react';
import { Calendar } from 'lucide-react';
import { useTheme } from '../context/AppContext';

interface DatePickerProps {
  day: string;
  month: string;
  year: string;
  onChange: (y: string, m: string, d: string) => void;
  label?: string;
  error?: boolean;
  title?: string;
  id?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  day,
  month,
  year,
  onChange,
  label,
  error,
  title,
  id
}) => {
  const { darkMode } = useTheme();

  const formatDateForInput = (y: string, m: string, d: string) => {
    if (!y || !m || !d) return '';
    // Ensure year is 4 digits, month and day are 2 digits
    const padY = y.padStart(4, '0');
    const padM = m.padStart(2, '0');
    const padD = d.padStart(2, '0');
    return `${padY}-${padM}-${padD}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) {
      onChange('', '', '');
      return;
    }
    const [y, m, d] = val.split('-');
    // Convert back to string without leading zeros for the state if needed, 
    // but the app seems to handle them fine as strings.
    // However, the original NumericInput was MM/DD/YYYY which could have leading zeros.
    onChange(y, m, d);
  };

  const value = formatDateForInput(year, month, day);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <span className="text-[10px] uppercase font-bold opacity-50 px-1">{label}</span>
      )}
      <div className="relative group">
        <Calendar 
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
            darkMode ? 'text-gray-500 group-focus-within:text-blue-400' : 'text-gray-400 group-focus-within:text-blue-500'
          }`} 
          size={18} 
        />
        <input
          id={id}
          type="date"
          value={value}
          onChange={handleChange}
          title={title}
          className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all appearance-none cursor-pointer ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-700 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500' 
              : 'bg-white/50 border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'
          } ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {/* Custom styling for the date picker icon in some browsers */}
        <style dangerouslySetInnerHTML={{ __html: `
          input[type="date"]::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
          }
        `}} />
      </div>
    </div>
  );
};

export default DatePicker;
