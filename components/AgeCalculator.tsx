import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage, useTheme } from '../context/AppContext';
import { calculateAge, AgeResult, calculateDateDifference, DateDiffResult } from '../utils/calculateAge';
import { Calendar, Clock, Star, PartyPopper, Heart, Eye, Moon, Wind, Diamond, Share2, User, Globe, Sparkles, Copy, Check, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { commonTimezones, getUserTimezone } from '../utils/timezones';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StatCard = ({ icon: Icon, label, value, color, delay = 0 }: { icon: any, label: string, value: string | number, color: string, delay?: number }) => {
  const { darkMode } = useTheme();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`p-4 rounded-2xl glass-card transition-all hover:scale-[1.02]`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon size={14} className="text-white" />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
      </div>
      <div className="text-2xl font-black tracking-tight tabular-nums">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
    </motion.div>
  );
};

const calculateEaster = (year: number): Date => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const L = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * L) / 451);
  const month = Math.floor((h + L - 7 * m + 114) / 31);
  const day = ((h + L - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
};

const signAttributes: Record<string, { element: string, modality: string, rulingPlanet: string }> = {
  aries: { element: 'fire', modality: 'cardinal', rulingPlanet: 'mars' },
  taurus: { element: 'earth', modality: 'fixed', rulingPlanet: 'venus' },
  gemini: { element: 'air', modality: 'mutable', rulingPlanet: 'mercury' },
  cancer: { element: 'water', modality: 'cardinal', rulingPlanet: 'moon' },
  leo: { element: 'fire', modality: 'fixed', rulingPlanet: 'sun' },
  virgo: { element: 'earth', modality: 'mutable', rulingPlanet: 'mercury' },
  libra: { element: 'air', modality: 'cardinal', rulingPlanet: 'venus' },
  scorpio: { element: 'water', modality: 'fixed', rulingPlanet: 'pluto' },
  sagittarius: { element: 'fire', modality: 'mutable', rulingPlanet: 'jupiter' },
  capricorn: { element: 'earth', modality: 'cardinal', rulingPlanet: 'saturn' },
  aquarius: { element: 'air', modality: 'fixed', rulingPlanet: 'uranus' },
  pisces: { element: 'water', modality: 'mutable', rulingPlanet: 'neptune' },
};

const AgeCalculator: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [dob, setDob] = useState<Date | null>(null);
  const [dobEnd, setDobEnd] = useState<Date | null>(null);
  const [birthLocation, setBirthLocation] = useState<string>('');
  const [targetYear, setTargetYear] = useState<string>(new Date().getFullYear().toString());
  const [holidayDate, setHolidayDate] = useState<Date | null>(null);
  const [timezone, setTimezone] = useState<string>(getUserTimezone());
  const [activeTab, setActiveTab] = useState<'calculate' | 'compare'>('calculate');
  const [compareDate1, setCompareDate1] = useState<Date | null>(null);
  const [compareDate2, setCompareDate2] = useState<Date | null>(null);
  const [compareResult, setCompareResult] = useState<any | null>(null);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [ageRange, setAgeRange] = useState<{ min: AgeResult, max: AgeResult, diff: DateDiffResult } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [daysToHoliday, setDaysToHoliday] = useState<number | null>(null);
  const [easterDate, setEasterDate] = useState<Date | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setEasterDate(calculateEaster(currentYear));
  }, []);

  const handleCalculate = useCallback(() => {
    setError(null);
    setResult(null);
    setAgeRange(null);
    setCompareResult(null);

    if (!dob) {
      // Don't set error if we're just initializing
      if (result) setError(t.errorInvalidDate);
      return;
    }

    if (targetYear && (isNaN(Number(targetYear)) || Number(targetYear) < 1 || Number(targetYear) > 9999)) {
      setError(t.errorInvalidYear);
      setResult(null);
      return;
    }

    try {
      const birthDate = new Date(dob);
      if (isNaN(birthDate.getTime())) {
        setError(t.errorInvalidDate);
        setResult(null);
        return;
      }

      const baseDate = targetYear ? new Date(Number(targetYear), 11, 31, 23, 59, 59) : new Date();
      const nowInTimezoneStr = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(baseDate);

      const [datePart, timePart] = nowInTimezoneStr.split(', ');
      const [month, day, year] = datePart.split('/');
      const [hour, minute, second] = timePart.split(':');
      const nowInTimezone = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));

      if (birthDate > nowInTimezone) {
        setError(targetYear ? t.errorBirthAfterTarget : t.errorFutureDate);
        setResult(null);
        return;
      }

      setError(null);
      const mainResult = calculateAge(birthDate, nowInTimezone);
      setResult(mainResult);

      // Calculate age range if dobEnd is provided
      if (dobEnd) {
        const birthDateEnd = new Date(dobEnd);
        if (!isNaN(birthDateEnd.getTime())) {
          if (birthDateEnd > nowInTimezone) {
            setError(t.errorFutureDate);
            setResult(null);
            setAgeRange(null);
            return;
          }
          const result2 = calculateAge(birthDateEnd, nowInTimezone);
          const diffBetween = calculateDateDifference(birthDate, birthDateEnd);
          
          // Determine min and max age (min age is from the later birth date)
          if (birthDate < birthDateEnd) {
            setAgeRange({ min: result2, max: mainResult, diff: diffBetween });
          } else {
            setAgeRange({ min: mainResult, max: result2, diff: diffBetween });
          }
        } else {
          setAgeRange(null);
        }
      } else {
        setAgeRange(null);
      }

      // Calculate days to holiday
      if (holidayDate) {
        const holiday = new Date(holidayDate);
        if (!isNaN(holiday.getTime())) {
          const diffMs = holiday.getTime() - nowInTimezone.getTime();
          const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
          setDaysToHoliday(diffDays > 0 ? diffDays : null);
        } else {
          setDaysToHoliday(null);
        }
      } else {
        setDaysToHoliday(null);
      }
    } catch (err) {
      console.error(err);
      setError(t.errorInvalidDate);
      setResult(null);
    }
  }, [dob, targetYear, timezone, dobEnd, holidayDate, t, result]);

  useEffect(() => {
    if (dob) {
      handleCalculate();
    }
  }, [dob, targetYear, timezone, dobEnd, holidayDate, handleCalculate]);

  const handleCopy = async () => {
    if (!result) return;
    let summary = `🎂 ${t.title}\n` +
      `📅 ${t.ageSummary.replace('{years}', result.years.toString()).replace('{months}', result.months.toString()).replace('{days}', result.days.toString())}\n` +
      `✨ ${t.zodiacSign}: ${t.zodiacSigns[result.zodiacSign]}\n` +
      `🏮 ${t.chineseZodiacLabel}: ${t.chineseZodiacSigns[result.chineseZodiac]} (${t.chineseZodiacDescriptions[result.chineseZodiac]})\n` +
      `🌙 ${t.lunarPhaseLabel}: ${t.lunarPhases[result.lunarPhase]}\n` +
      `💎 ${t.birthstone}: ${t.birthstones[result.birthstone]}\n` +
      `🌌 ${t.birthChartTitle}:\n` +
      `   - ${t.sunSignLabel}: ${t.zodiacSigns[result.birthChart.sunSign]}\n` +
      `   - ${t.moonSignLabel}: ${t.zodiacSigns[result.birthChart.moonSign]}\n` +
      `   - ${t.risingSignLabel}: ${t.zodiacSigns[result.birthChart.risingSign]}\n` +
      `✨ ${t.aspectsTitle}: ${result.aspects.length > 0 ? result.aspects.map(a => `${t.planetNames[a.planet1]}-${t.planetNames[a.planet2]} (${t.aspectTypes[a.type]})`).join(', ') : 'None'}\n` +
      `📍 ${t.birthLocationLabel}: ${birthLocation || 'N/A'}\n` +
      `🔗 ${window.location.href}`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  const handleCompareDates = () => {
    setError(null);
    setResult(null);
    setAgeRange(null);
    setCompareResult(null);

    if (!compareDate1 || !compareDate2) {
      setError(t.errorInvalidDate);
      return;
    }

    const d1 = new Date(compareDate1);
    const d2 = new Date(compareDate2);

    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      setError(t.errorInvalidDate);
      return;
    }

    const diff = calculateAge(d1, d2);
    setCompareResult(diff);
  };

  const handleShare = async () => {
    if (!result) return;

    let shareText = `Check out my age stats on ${t.title}!\n\n` +
      `Age: ${result.years} Years, ${result.months} Months, ${result.days} Days\n` +
      `Sun Sign: ${t.zodiacSigns[result.birthChart.sunSign]}\n` +
      `Moon Sign: ${t.zodiacSigns[result.birthChart.moonSign]}\n` +
      `Rising Sign: ${t.zodiacSigns[result.birthChart.risingSign]}\n` +
      `Chinese Zodiac: ${t.chineseZodiacSigns[result.chineseZodiac]}\n` +
      `Lunar Phase: ${t.lunarPhases[result.lunarPhase]}\n` +
      `Birthstone: ${t.birthstones[result.birthstone] || result.birthstone}\n` +
      `Planetary Positions: Mercury in ${t.zodiacSigns[result.planetaryPositions.mercury]}, Venus in ${t.zodiacSigns[result.planetaryPositions.venus]}, Mars in ${t.zodiacSigns[result.planetaryPositions.mars]}\n` +
      `Aspects: ${result.aspects.length > 0 ? result.aspects.map(a => `${t.planetNames[a.planet1]}-${t.planetNames[a.planet2]} (${t.aspectTypes[a.type]})`).join(', ') : 'None'}\n\n` +
      `Calculate yours here: ${window.location.origin}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `My Age Stats - ${t.title}`,
          text: shareText,
          url: window.location.origin,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t.copiedLabel || 'Results copied to clipboard!');
      } catch (err) {
        console.error('Error copying to clipboard:', err);
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (result && dob && !targetYear) {
      interval = setInterval(() => {
        const birthDate = new Date(dob);
        const nowInTimezoneStr = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
        const [datePart, timePart] = nowInTimezoneStr.split(', ');
        const [month, day, year] = datePart.split('/');
        const [hour, minute, second] = timePart.split(':');
        const nowInTimezone = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
        
        setResult(calculateAge(birthDate, nowInTimezone));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [dob, timezone, !!result]);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => {
            setActiveTab('calculate');
            setError(null);
          }}
          className={`px-6 py-3 rounded-2xl font-bold transition-all ${
            activeTab === 'calculate'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {t.title}
        </button>
        <button
          onClick={() => {
            setActiveTab('compare');
            setError(null);
          }}
          className={`px-6 py-3 rounded-2xl font-bold transition-all ${
            activeTab === 'compare'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {t.differenceTitle}
        </button>
      </div>

      <div className={`p-6 md:p-8 rounded-3xl glass shadow-2xl mb-8 transition-all`}>
        {activeTab === 'calculate' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6 items-end">
            <div className="w-full">
              <label htmlFor="dob-input" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.dobLabel}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <DatePicker
                  id="dob-input"
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  maxDate={new Date()}
                  placeholderText={t.dobLabel}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                  wrapperClassName="w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="dob-end-input" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.dobRangeEndLabel}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <DatePicker
                  id="dob-end-input"
                  selected={dobEnd}
                  onChange={(date) => setDobEnd(date)}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  maxDate={new Date()}
                  placeholderText={t.dobRangeEndLabel}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                  wrapperClassName="w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="holiday-input" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.holidayLabel}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <DatePicker
                  id="holiday-input"
                  selected={holidayDate}
                  onChange={(date) => setHolidayDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText={t.holidayLabel}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                  wrapperClassName="w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="target-year-input" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.targetYearLabel}
              </label>
              <div className="relative space-y-3">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    id="target-year-input"
                    type="number"
                    placeholder={new Date().getFullYear().toString()}
                    value={targetYear}
                    onChange={(e) => setTargetYear(e.target.value)}
                    aria-label={t.targetYearLabel}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700 text-white' 
                        : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="px-1">
                  <input
                    type="range"
                    min="1900"
                    max="2100"
                    step="1"
                    value={targetYear || new Date().getFullYear()}
                    onChange={(e) => setTargetYear(e.target.value)}
                    className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[9px] font-bold opacity-40 mt-1">
                    <span>1900</span>
                    <span>2100</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="birth-location-input" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.birthLocationLabel}
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  id="birth-location-input"
                  type="text"
                  placeholder="e.g. New York, USA"
                  value={birthLocation}
                  onChange={(e) => setBirthLocation(e.target.value)}
                  aria-label={t.birthLocationLabel}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="timezone-select" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.timezoneLabel}
              </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <select
                id="timezone-select"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 text-white' 
                    : 'bg-white/50 border-gray-200 text-gray-900'
                }`}
              >
                {commonTimezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20 h-[50px]"
          >
            {t.calculateBtn}
          </button>
        </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="w-full">
              <label htmlFor="compare-date-1" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.date1Label}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <DatePicker
                  id="compare-date-1"
                  selected={compareDate1}
                  onChange={(date) => setCompareDate1(date)}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  placeholderText={t.date1Label}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                  wrapperClassName="w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="compare-date-2" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.date2Label}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <DatePicker
                  id="compare-date-2"
                  selected={compareDate2}
                  onChange={(date) => setCompareDate2(date)}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  placeholderText={t.date2Label}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                  wrapperClassName="w-full"
                />
              </div>
            </div>

            <button
              onClick={handleCompareDates}
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20 h-[50px]"
            >
              <Sparkles size={16} />
              {t.compareBtn}
            </button>
          </div>
        )}
        {error && <p className="mt-4 text-red-500 text-sm font-medium text-center">{error}</p>}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'compare' && compareResult && (
          <motion.div
            key="compare-result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className={`p-8 rounded-3xl text-center font-bold text-lg glass border-blue-500/20 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              {t.differenceSummary
                .replace('{years}', compareResult.years.toString())
                .replace('{months}', compareResult.months.toString())
                .replace('{days}', compareResult.days.toString())}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <StatCard icon={Calendar} label={t.years} value={compareResult.years} color="bg-blue-500" delay={0.1} />
              <StatCard icon={Calendar} label={t.months} value={compareResult.months} color="bg-indigo-500" delay={0.2} />
              <StatCard icon={Calendar} label={t.weeks} value={compareResult.weeks} color="bg-purple-500" delay={0.3} />
              <StatCard icon={Calendar} label={t.days} value={compareResult.days} color="bg-pink-500" delay={0.4} />
              <StatCard icon={Clock} label={t.hours} value={compareResult.totalHours} color="bg-orange-500" delay={0.5} />
              <StatCard icon={Clock} label={t.minutes} value={compareResult.totalMinutes} color="bg-emerald-500" delay={0.6} />
              <StatCard icon={Clock} label={t.seconds} value={compareResult.totalSeconds} color="bg-cyan-500" delay={0.7} />
            </div>
          </motion.div>
        )}

        {activeTab === 'calculate' && result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {/* Main Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <StatCard icon={Calendar} label={t.years} value={result.years} color="bg-blue-500" delay={0.1} />
              <StatCard icon={User} label={t.ageLabel} value={Math.floor(result.years)} color="bg-blue-600" delay={0.12} />
              <StatCard icon={Moon} label={t.lunarAge} value={result.lunarAge} color="bg-indigo-400" delay={0.14} />
              <StatCard icon={Calendar} label={t.months} value={result.totalMonths} color="bg-indigo-500" delay={0.15} />
              <StatCard icon={Calendar} label={t.weeks} value={result.weeks} color="bg-violet-500" delay={0.2} />
              <StatCard icon={Calendar} label={t.days} value={result.totalDays} color="bg-purple-500" delay={0.25} />
              <StatCard icon={Clock} label={t.hours} value={result.totalHours} color="bg-pink-500" delay={0.3} />
              <StatCard icon={Clock} label={t.minutes} value={result.totalMinutes} color="bg-orange-500" delay={0.35} />
              <StatCard icon={Clock} label={t.seconds} value={result.totalSeconds} color="bg-emerald-500" delay={0.4} />
              <StatCard icon={Diamond} label={t.birthstone} value={t.birthstones[result.birthstone] || result.birthstone} color="bg-cyan-500" delay={0.45} />
              <StatCard icon={Sparkles} label={t.chineseZodiacLabel} value={t.chineseZodiacSigns[result.chineseZodiac]} color="bg-red-600" delay={0.48} />
              <StatCard icon={Moon} label={t.lunarPhaseLabel} value={t.lunarPhases[result.lunarPhase]} color="bg-slate-700" delay={0.5} />
            </div>

            {/* Life Stats */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Star className="text-yellow-500" size={16} />
                {t.lifeStatsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Heart} label={t.heartbeats} value={result.lifeStats.heartbeats} color="bg-red-500" delay={0.5} />
                <StatCard icon={Eye} label={t.eyeBlinks} value={result.lifeStats.eyeBlinks} color="bg-blue-400" delay={0.55} />
                <StatCard icon={Moon} label={t.sleepTime} value={`${result.lifeStats.sleepDays} ${t.days.toLowerCase()}`} color="bg-indigo-700" delay={0.6} />
                <StatCard icon={Wind} label={t.breathCount} value={result.lifeStats.breaths} color="bg-teal-500" delay={0.65} />
              </div>
            </div>

            {/* Next Birthday Countdown Timer */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <PartyPopper className="text-yellow-500" size={16} />
                {t.nextBirthday}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: t.days, value: result.nextBirthday.days },
                  { label: t.hours, value: result.nextBirthday.hours },
                  { label: t.minutes, value: result.nextBirthday.minutes },
                  { label: t.seconds, value: result.nextBirthday.seconds },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.05 }}
                    className="p-6 rounded-3xl glass-card flex flex-col items-center justify-center text-center border-b-4 border-yellow-500/30"
                  >
                    <div className="text-4xl font-black tabular-nums text-yellow-500">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Birth Chart Section */}
            <div className="space-y-4 relative hover:z-10 transition-all duration-300">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Globe className="text-blue-500" size={16} />
                {t.birthChartTitle}
                {birthLocation && <span className="text-sm font-normal opacity-60">({birthLocation})</span>}
              </h3>

              {/* Sun Sign Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="p-8 rounded-3xl glass-card border-l-8 border-orange-500 bg-gradient-to-br from-orange-500/10 to-transparent shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="p-5 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                      <Star size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">{t.sunSignLabel}</div>
                      <h4 className="text-4xl font-black tracking-tighter">
                        {t.zodiacSigns[result.birthChart.sunSign]}
                        <span className="text-xl ml-2 opacity-60">({result.birthChart.sunDegree}°)</span>
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest border border-orange-500/20">{t.elements[signAttributes[result.birthChart.sunSign].element]}</span>
                    <span className="px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest border border-orange-500/20">{t.modalities[signAttributes[result.birthChart.sunSign].modality]}</span>
                    <span className="px-3 py-1.5 rounded-xl bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest border border-orange-500/20">{t.rulingPlanets[signAttributes[result.birthChart.sunSign].rulingPlanet]}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-sm leading-relaxed font-medium mb-4 italic text-orange-200/80">
                    "{t.zodiacDescriptions[result.birthChart.sunSign]}"
                  </p>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t.sunSignInterpretations[result.birthChart.sunSign]}
                  </p>
                  <p className={`mt-4 text-xs opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t.sunSignDetailedDescription}
                  </p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { planet: 'sun', label: t.sunSignLabel, sign: result.birthChart.sunSign, degree: result.birthChart.sunDegree, house: result.birthChart.sunHouse, color: 'border-orange-500', iconColor: 'text-orange-500', isSun: true },
                  { planet: 'moon', label: t.moonSignLabel, sign: result.birthChart.moonSign, degree: result.birthChart.moonDegree, house: result.birthChart.moonHouse, color: 'border-indigo-500', iconColor: 'text-indigo-500' },
                  { planet: 'rising', label: t.risingSignLabel, sign: result.birthChart.risingSign, house: 1, color: 'border-emerald-500', iconColor: 'text-emerald-500' },
                  { planet: 'mercury', label: t.mercuryLabel, sign: result.planetaryPositions.mercury, degree: result.planetaryPositions.mercuryDegree, house: result.planetaryPositions.mercuryHouse, color: 'border-yellow-400', iconColor: 'text-yellow-400' },
                  { planet: 'venus', label: t.venusLabel, sign: result.planetaryPositions.venus, degree: result.planetaryPositions.venusDegree, house: result.planetaryPositions.venusHouse, color: 'border-pink-400', iconColor: 'text-pink-400' },
                  { planet: 'mars', label: t.marsLabel, sign: result.planetaryPositions.mars, degree: result.planetaryPositions.marsDegree, house: result.planetaryPositions.marsHouse, color: 'border-red-400', iconColor: 'text-red-400' },
                ].map((item, idx) => {
                  const attrs = signAttributes[item.sign];
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.05 }}
                      className={`p-6 rounded-3xl glass-card border-l-4 ${item.color}`}
                    >
                      <div className={`text-xs font-bold uppercase tracking-widest ${item.iconColor} mb-1`}>{item.label}</div>
                      <div className="flex justify-between items-end">
                        <div className="text-2xl font-black">{t.zodiacSigns[item.sign]}</div>
                        {item.degree !== undefined && (
                          <div className="text-sm font-bold opacity-60 mb-1">{item.degree}°</div>
                        )}
                      </div>
                      {item.isSun && (
                        <div className="mt-3 p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                          <p className="text-[11px] font-bold text-orange-400 mb-1 flex items-center gap-1">
                            <Sparkles size={10} />
                            {t.sunSignLabel} {t.resultsTitle.split(' ')[1]}
                          </p>
                          <p className="text-[10px] leading-relaxed text-gray-300 italic">
                            {t.sunSignDetailedDescription}
                          </p>
                        </div>
                      )}
                      <div className={`text-[10px] mt-2 space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <p className="mb-2 text-gray-300 font-medium">
                          {t.planetMeanings[item.planet] || ''}
                        </p>
                        {item.degree !== undefined && (
                          <div className="flex justify-between">
                            <span>{t.degreeLabel}:</span>
                            <span className="font-bold text-gray-300">{item.degree}°</span>
                          </div>
                        )}
                        {item.house !== undefined && (
                          <div className="flex justify-between">
                            <span>{t.housesTitle.slice(0, -1)}:</span>
                            <span className="font-bold text-gray-300">{t.houseLabel.replace('{n}', item.house.toString())}</span>
                          </div>
                        )}
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs opacity-70">{t.elementLabel}:</span>
                              <span className="text-xs font-bold text-gray-300">{t.elements[attrs.element]}</span>
                            </div>
                            <p className="text-[10px] opacity-50 leading-tight italic">
                              {t.elementMeanings[attrs.element]}
                            </p>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs opacity-70">{t.modalityLabel}:</span>
                              <span className="text-xs font-bold text-gray-300">{t.modalities[attrs.modality]}</span>
                            </div>
                            <p className="text-[10px] opacity-50 leading-tight italic">
                              {t.modalityMeanings[attrs.modality]}
                            </p>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs opacity-70">{t.rulingPlanetLabel}:</span>
                              <span className="text-xs font-bold text-gray-300">{t.rulingPlanets[attrs.rulingPlanet]}</span>
                            </div>
                            <p className="text-[10px] opacity-50 leading-tight italic">
                              {t.rulingPlanetMeanings[attrs.rulingPlanet]}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 pt-4 border-t border-white/5 text-xs leading-relaxed opacity-80">
                          {t.zodiacDescriptions[item.sign]}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Houses & Aspects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="p-6 rounded-3xl glass-card"
                >
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Globe size={14} className="text-blue-500" />
                    {t.housesTitle}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {result.houses.map((sign, idx) => (
                    <div key={idx} className="flex flex-col p-2 rounded-lg bg-white/5 gap-1">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="opacity-60">{t.houseLabel.replace('{n}', (idx + 1).toString())}</span>
                        <span className="font-bold text-indigo-400">{t.zodiacSigns[sign]}</span>
                      </div>
                      <div className="flex justify-between text-[8px] opacity-40 font-medium uppercase tracking-tighter">
                        <span>{t.elements[signAttributes[sign].element]}</span>
                        <span>{t.modalities[signAttributes[sign].modality]}</span>
                      </div>
                    </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Astrological Aspects */}
              {result.aspects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 }}
                  className="p-6 rounded-3xl glass-card"
                >
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles size={14} className="text-purple-500" />
                    {t.aspectsTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {result.aspects.map((aspect, idx) => (
                      <div key={idx} className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-gray-400">{t.planetNames[aspect.planet1]}</span>
                            <div className="w-4 h-[1px] bg-gray-600"></div>
                            <span className="text-[10px] font-bold text-gray-400">{t.planetNames[aspect.planet2]}</span>
                          </div>
                          <span className={`text-[10px] font-black px-2 py-1 rounded-md ${
                            aspect.type === 'conjunction' ? 'bg-blue-500/20 text-blue-400' :
                            aspect.type === 'opposition' ? 'bg-red-500/20 text-red-400' :
                            aspect.type === 'trine' ? 'bg-emerald-500/20 text-emerald-400' :
                            aspect.type === 'square' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-indigo-500/20 text-indigo-400'
                          }`}>
                            {t.aspectTypes[aspect.type]}
                          </span>
                        </div>
                        <p className="text-[10px] opacity-70 leading-relaxed">
                          {t.aspectDescriptions[aspect.type]}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Zodiac Profile Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Sparkles className="text-purple-500" size={16} />
                {t.zodiacSign} Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: t.sunSignLabel, sign: result.birthChart.sunSign, degree: result.birthChart.sunDegree, icon: Star, color: 'from-orange-400 to-red-500' },
                  { label: t.moonSignLabel, sign: result.birthChart.moonSign, degree: result.birthChart.moonDegree, icon: Moon, color: 'from-indigo-400 to-blue-500' },
                  { label: t.risingSignLabel, sign: result.birthChart.risingSign, icon: Sparkles, color: 'from-emerald-400 to-teal-500' },
                ].map((item, idx) => {
                  const attrs = signAttributes[item.sign];
                  return (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.75 + idx * 0.1 }}
                      className={`p-6 rounded-3xl glass-card flex flex-col items-center text-center gap-4 border-t border-white/5`}
                    >
                      <div className={`p-4 rounded-full bg-white/5 text-white shadow-inner`}>
                        <item.icon size={16} />
                      </div>
                      <div>
                        <div className={`text-xs font-bold uppercase tracking-widest opacity-60 mb-1`}>{item.label}</div>
                        <h4 className={`text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                          {t.zodiacSigns[item.sign]}
                          {item.degree !== undefined && <span className="text-sm ml-1 opacity-60">({item.degree}°)</span>}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                          <span className="px-2 py-1 rounded-lg bg-white/5 text-[8px] font-bold uppercase tracking-widest">{t.elements[attrs.element]}</span>
                          <span className="px-2 py-1 rounded-lg bg-white/5 text-[8px] font-bold uppercase tracking-widest">{t.modalities[attrs.modality]}</span>
                          <span className="px-2 py-1 rounded-lg bg-white/5 text-[8px] font-bold uppercase tracking-widest">{t.rulingPlanets[attrs.rulingPlanet]}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Detailed Interpretations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-8 rounded-3xl glass-card border border-white/5"
              >
                <h3 className="text-xl font-black tracking-tight flex items-center gap-2 mb-6">
                  <BookOpen className="text-blue-500" size={16} />
                  {t.zodiacInterpretationsTitle}
                </h3>
                <div className="space-y-6">
                  {[
                    { label: t.sunSignLabel, sign: result.birthChart.sunSign, degree: result.birthChart.sunDegree, icon: Star, color: 'text-orange-400' },
                    { label: t.moonSignLabel, sign: result.birthChart.moonSign, degree: result.birthChart.moonDegree, icon: Moon, color: 'text-indigo-400' },
                    { label: t.risingSignLabel, sign: result.birthChart.risingSign, icon: Sparkles, color: 'text-emerald-400' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className={`p-3 rounded-2xl bg-white/5 ${item.color}`}>
                        <item.icon size={16} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-widest opacity-60">{item.label}:</span>
                          <span className={`text-sm font-black ${item.color}`}>
                            {t.zodiacSigns[item.sign]}
                            {item.degree !== undefined && <span className="text-xs ml-1 opacity-60">({item.degree}°)</span>}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{t.elementLabel}</span>
                              <span className="text-[10px] font-bold text-blue-400">{t.elements[signAttributes[item.sign].element]}</span>
                            </div>
                            <p className="text-[9px] opacity-60 leading-tight italic">{t.elementMeanings[signAttributes[item.sign].element]}</p>
                          </div>
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{t.modalityLabel}</span>
                              <span className="text-[10px] font-bold text-purple-400">{t.modalities[signAttributes[item.sign].modality]}</span>
                            </div>
                            <p className="text-[9px] opacity-60 leading-tight italic">{t.modalityMeanings[signAttributes[item.sign].modality]}</p>
                          </div>
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{t.rulingPlanetLabel}</span>
                              <span className="text-[10px] font-bold text-orange-400">{t.rulingPlanets[signAttributes[item.sign].rulingPlanet]}</span>
                            </div>
                            <p className="text-[9px] opacity-60 leading-tight italic">{t.rulingPlanetMeanings[signAttributes[item.sign].rulingPlanet]}</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {idx === 0 && (
                            <p className={`text-xs leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {t.sunSignDetailedDescription}
                            </p>
                          )}
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {idx === 0 ? t.sunSignInterpretations[item.sign] : 
                             idx === 1 ? t.moonSignInterpretations[item.sign] : 
                             t.risingSignInterpretations[item.sign]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Chinese Zodiac Interpretation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="p-8 rounded-3xl glass-card border border-white/5 bg-gradient-to-br from-red-500/5 to-transparent"
              >
                <div className="flex gap-6 items-center">
                  <div className="p-4 rounded-2xl bg-red-500/10 text-red-500 shadow-lg shadow-red-500/10">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-2 mb-1">
                      {t.chineseZodiacLabel}: {t.chineseZodiacSigns[result.chineseZodiac]}
                    </h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {t.chineseZodiacDescriptions[result.chineseZodiac]}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Zodiac Signs Reference */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 px-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <h3 className="text-xl font-black tracking-tight flex items-center gap-2 whitespace-nowrap">
                    <Star className="text-yellow-500" size={16} />
                    {t.zodiacReferenceTitle}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
                    'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
                  ].map((sign) => (
                    <motion.div
                      key={sign}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-3xl glass-card border border-white/5 hover:border-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {sign === 'aries' && '♈'}
                          {sign === 'taurus' && '♉'}
                          {sign === 'gemini' && '♊'}
                          {sign === 'cancer' && '♋'}
                          {sign === 'leo' && '♌'}
                          {sign === 'virgo' && '♍'}
                          {sign === 'libra' && '♎'}
                          {sign === 'scorpio' && '♏'}
                          {sign === 'sagittarius' && '♐'}
                          {sign === 'capricorn' && '♑'}
                          {sign === 'aquarius' && '♒'}
                          {sign === 'pisces' && '♓'}
                        </div>
                        <div>
                          <h4 className="text-lg font-black tracking-tight">{t.zodiacSigns[sign]}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-40">{t.elements[signAttributes[sign].element]}</span>
                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-40">•</span>
                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-40">{t.modalities[signAttributes[sign].modality]}</span>
                          </div>
                        </div>
                      </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {t.zodiacDescriptions[sign]}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {daysToHoliday !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-3xl text-center font-black text-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}
              >
                {t.daysUntilHoliday.replace('{days}', daysToHoliday.toString())}
              </motion.div>
            )}

            {ageRange && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className={`p-6 rounded-3xl text-center font-black text-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  {t.ageRangeSummary
                    .replace('{min}', `${ageRange.min.years}y ${ageRange.min.months}m ${ageRange.min.days}d`)
                    .replace('{max}', `${ageRange.max.years}y ${ageRange.max.months}m ${ageRange.max.days}d`)}
                </div>
                <div className={`p-4 rounded-2xl text-center font-bold text-sm glass border-indigo-500/20 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  {t.differenceSummary
                    .replace('{years}', Math.abs(ageRange.diff.years).toString())
                    .replace('{months}', Math.abs(ageRange.diff.months).toString())
                    .replace('{days}', Math.abs(ageRange.diff.days).toString())}
                </div>
              </motion.div>
            )}

            {/* Easter Date Section */}
            {easterDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className={`p-6 rounded-3xl glass-card flex items-center justify-between border-l-4 border-yellow-500`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-500/20 text-yellow-500">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {t.easterDate.replace('{year}', easterDate.getFullYear().toString())}
                    </div>
                    <div className="text-xl font-black">
                      {easterDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <div className={`p-8 rounded-3xl text-center font-bold text-lg glass border-blue-500/20 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                {t.ageSummary.replace('{years}', result.years.toString()).replace('{months}', result.months.toString()).replace('{days}', result.days.toString())}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleCopy}
                  className={`py-4 border rounded-2xl flex items-center justify-center gap-3 font-bold transition-all active:scale-[0.98] group ${
                    copied 
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-500' 
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  }`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} className="group-hover:text-blue-400 transition-colors" />}
                  {copied ? t.copiedLabel : t.copyBtn}
                </button>

                <button
                  onClick={handleShare}
                  className="py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all active:scale-[0.98] group"
                >
                  <Share2 size={16} className="group-hover:text-blue-400 transition-colors" />
                  {t.shareBtn}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgeCalculator;
