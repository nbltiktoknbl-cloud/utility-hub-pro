import React, { useState, useEffect, useCallback, useDeferredValue, useRef, Suspense } from 'react';
import { useLanguage, useTheme } from '@/src/context/AppContext';
import { calculateAge, AgeResult, calculateDateDifference, DateDiffResult, calculateLiveAge } from '../utils/calculateAge';
import { calculateEaster } from '../utils/calculateEaster';
import { signAttributes, elementIcons as astrologyElementIcons } from '../utils/astrologyData';
import { Calendar, Clock, Star, PartyPopper, Heart, Eye, Moon, Wind, Diamond, Share2, User, Globe, Sparkles, Copy, Check, BookOpen, Zap, ArrowUpRight, Award, Shield, Flame, Mountain, Waves, Percent } from 'lucide-react';
import { commonTimezones, getUserTimezone } from '../utils/timezones';

const BirthChartVisualizer = React.lazy(() => import('./BirthChartVisualizer'));

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string | number, color: string }) => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-4 rounded-2xl glass-card transition-all hover:scale-[1.02]`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon size={14} className="text-white" />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
      </div>
      <div className="text-2xl font-black tracking-tight tabular-nums">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
    </div>
  );
};

const astrologyElementIconsMap: Record<string, any> = {
  fire: Flame,
  earth: Mountain,
  air: Wind,
  water: Waves
};

import NumericInput from './NumericInput';

const AgeCalculator: React.FC = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  
  // Refs for auto-tabbing
  const birthDayRef = useRef<HTMLInputElement>(null);
  const birthMonthRef = useRef<HTMLInputElement>(null);
  const birthYearRef = useRef<HTMLInputElement>(null);
  const birthHourRef = useRef<HTMLInputElement>(null);
  const birthMinuteRef = useRef<HTMLInputElement>(null);

  const endDayRef = useRef<HTMLInputElement>(null);
  const endMonthRef = useRef<HTMLInputElement>(null);
  const endYearRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinuteRef = useRef<HTMLInputElement>(null);

  const holidayDayRef = useRef<HTMLInputElement>(null);
  const holidayMonthRef = useRef<HTMLInputElement>(null);
  const holidayYearRef = useRef<HTMLInputElement>(null);
  const holidayHourRef = useRef<HTMLInputElement>(null);
  const holidayMinuteRef = useRef<HTMLInputElement>(null);

  const comp1DayRef = useRef<HTMLInputElement>(null);
  const comp1MonthRef = useRef<HTMLInputElement>(null);
  const comp1YearRef = useRef<HTMLInputElement>(null);
  const comp1HourRef = useRef<HTMLInputElement>(null);
  const comp1MinuteRef = useRef<HTMLInputElement>(null);

  const comp2DayRef = useRef<HTMLInputElement>(null);
  const comp2MonthRef = useRef<HTMLInputElement>(null);
  const comp2YearRef = useRef<HTMLInputElement>(null);
  const comp2HourRef = useRef<HTMLInputElement>(null);
  const comp2MinuteRef = useRef<HTMLInputElement>(null);

  const [dob, setDob] = useState<Date | null>(null);
  const [birthDay, setBirthDay] = useState<string>('');
  const [birthMonth, setBirthMonth] = useState<string>('');
  const [birthYear, setBirthYear] = useState<string>('');
  const [birthHour, setBirthHour] = useState<string>('0');
  const [birthMinute, setBirthMinute] = useState<string>('0');

  const [dobEnd, setDobEnd] = useState<Date | null>(null);
  const [endDay, setEndDay] = useState<string>('');
  const [endMonth, setEndMonth] = useState<string>('');
  const [endYear, setEndYear] = useState<string>('');
  const [endHour, setEndHour] = useState<string>('0');
  const [endMinute, setEndMinute] = useState<string>('0');

  const [holidayDate, setHolidayDate] = useState<Date | null>(null);
  const [holidayDay, setHolidayDay] = useState<string>('');
  const [holidayMonth, setHolidayMonth] = useState<string>('');
  const [holidayYear, setHolidayYear] = useState<string>('');
  const [holidayHour, setHolidayHour] = useState<string>('0');
  const [holidayMinute, setHolidayMinute] = useState<string>('0');

  const [birthLocation, setBirthLocation] = useState<string>('');
  const [targetYear, setTargetYear] = useState<string>('');

  const [timezone, setTimezone] = useState<string>(getUserTimezone());
  const [activeTab, setActiveTab] = useState<'calculate' | 'compare' | 'percentage'>('calculate');
  
  const [percNumber, setPercNumber] = useState<string>('');
  const [percValue, setPercValue] = useState<string>('');
  const [percResult, setPercResult] = useState<number | null>(null);

  const [compareDate1, setCompareDate1] = useState<Date | null>(null);
  const [comp1Day, setComp1Day] = useState<string>('');
  const [comp1Month, setComp1Month] = useState<string>('');
  const [comp1Year, setComp1Year] = useState<string>('');
  const [comp1Hour, setComp1Hour] = useState<string>('0');
  const [comp1Minute, setComp1Minute] = useState<string>('0');

  const [compareDate2, setCompareDate2] = useState<Date | null>(null);
  const [comp2Day, setComp2Day] = useState<string>('');
  const [comp2Month, setComp2Month] = useState<string>('');
  const [comp2Year, setComp2Year] = useState<string>('');
  const [comp2Hour, setComp2Hour] = useState<string>('0');
  const [comp2Minute, setComp2Minute] = useState<string>('0');

  const [compareResult, setCompareResult] = useState<any | null>(null);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [ageRange, setAgeRange] = useState<{ min: AgeResult, max: AgeResult, diff: DateDiffResult } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [holidayCountdown, setHolidayCountdown] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [easterDate, setEasterDate] = useState<Date | null>(null);
  const [daysUntilEaster, setDaysUntilEaster] = useState<number | null>(null);

  const isInvalid = (type: 'day' | 'month' | 'year' | 'hour' | 'minute', val: string, mStr?: string, yStr?: string) => {
    if (!val) return false;
    const n = parseInt(val);
    if (isNaN(n)) return true;
    
    switch (type) {
      case 'day':
        if (n < 1 || n > 31) return true;
        if (mStr && yStr && yStr.length === 4) {
          const m = parseInt(mStr);
          const y = parseInt(yStr);
          if (m >= 1 && m <= 12) {
            const daysInMonth = new Date(y, m, 0).getDate();
            return n > daysInMonth;
          }
        }
        return false;
      case 'month':
        return n < 1 || n > 12;
      case 'year':
        const currentYear = new Date().getFullYear();
        return n < currentYear - 150 || n > 9999;
      case 'hour':
        return n < 0 || n > 23;
      case 'minute':
        return n < 0 || n > 59;
      default:
        return false;
    }
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const easter = calculateEaster(currentYear);
    setEasterDate(easter);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = easter.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntilEaster(diffDays);
  }, []);

  const deferredResult = useDeferredValue(result);

  const parseDate = (dStr: string, mStr: string, yStr: string, hStr: string, minStr: string): Date | null => {
    if (!dStr || !mStr || !yStr) return null;
    const d = parseInt(dStr);
    const m = parseInt(mStr) - 1;
    const y = parseInt(yStr);
    const h = parseInt(hStr || '0');
    const min = parseInt(minStr || '0');

    if (isNaN(d) || isNaN(m) || isNaN(y) || isNaN(h) || isNaN(min)) return null;
    if (d < 1 || d > 31 || m < 0 || m > 11 || y < 1 || y > 9999 || h < 0 || h > 23 || min < 0 || min > 59) return null;

    const date = new Date(y, m, d, h, min, 0, 0);
    if (date.getDate() === d && date.getMonth() === m && date.getFullYear() === y) {
      return date;
    }
    return null;
  };

  const handleCalculate = useCallback((showError = false) => {
    try {
      setError(null);
      setValidationErrors({});
      setResult(null);
      setAgeRange(null);
      setCompareResult(null);

      const newValidationErrors: Record<string, string> = {};

      // Validate Birth Date
      if (!birthDay) newValidationErrors.birthDay = t.errorInvalidDate;
      else if (isInvalid('day', birthDay, birthMonth, birthYear)) newValidationErrors.birthDay = t.errorInvalidDate;
      
      if (!birthMonth) newValidationErrors.birthMonth = t.errorInvalidDate;
      else if (isInvalid('month', birthMonth)) newValidationErrors.birthMonth = t.errorInvalidDate;
      
      if (!birthYear) newValidationErrors.birthYear = t.errorInvalidDate;
      else if (isInvalid('year', birthYear)) newValidationErrors.birthYear = t.errorInvalidDate;
      
      if (isInvalid('hour', birthHour)) newValidationErrors.birthHour = t.errorInvalidDate;
      if (isInvalid('minute', birthMinute)) newValidationErrors.birthMinute = t.errorInvalidDate;

      // Validate Range End if provided
      if (endDay || endMonth || endYear) {
        if (isInvalid('day', endDay, endMonth, endYear)) newValidationErrors.endDay = t.errorInvalidDate;
        if (isInvalid('month', endMonth)) newValidationErrors.endMonth = t.errorInvalidDate;
        if (isInvalid('year', endYear)) newValidationErrors.endYear = t.errorInvalidDate;
        if (isInvalid('hour', endHour)) newValidationErrors.endHour = t.errorInvalidDate;
        if (isInvalid('minute', endMinute)) newValidationErrors.endMinute = t.errorInvalidDate;
      }

      // Validate Holiday if provided
      if (holidayDay || holidayMonth || holidayYear) {
        if (isInvalid('day', holidayDay, holidayMonth, holidayYear)) newValidationErrors.holidayDay = t.errorInvalidDate;
        if (isInvalid('month', holidayMonth)) newValidationErrors.holidayMonth = t.errorInvalidDate;
        if (isInvalid('year', holidayYear)) newValidationErrors.holidayYear = t.errorInvalidDate;
        if (isInvalid('hour', holidayHour)) newValidationErrors.holidayHour = t.errorInvalidDate;
        if (isInvalid('minute', holidayMinute)) newValidationErrors.holidayMinute = t.errorInvalidDate;
      }

      const birthDate = parseDate(birthDay, birthMonth, birthYear, birthHour, birthMinute);
      if (!birthDate || Object.keys(newValidationErrors).length > 0) {
        if (showError) setError(t.errorInvalidDate);
        setValidationErrors(newValidationErrors);
        return;
      }

      // Check if date is in the future
      const now = new Date();
      if (birthDate > now && !targetYear) {
        setError(t.errorFutureDate);
        return;
      }

      // Check if date is unreasonably far in the past (e.g., > 150 years)
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 150);
      if (birthDate < minDate) {
        setError(t.errorTooOld);
        return;
      }

      // Validate Range End if provided
      let birthDateEnd: Date | null = null;
      if (endDay || endMonth || endYear) {
        birthDateEnd = parseDate(endDay, endMonth, endYear, endHour, endMinute);
        if (!birthDateEnd) {
          if (showError) setError(t.errorInvalidDate);
          return;
        }

        if (birthDate && birthDateEnd < birthDate) {
          setError(t.errorStartDateAfterEndDate);
          return;
        }
      }

      // Validate Holiday if provided
      let holiday: Date | null = null;
      if (holidayDay || holidayMonth || holidayYear) {
        holiday = parseDate(holidayDay, holidayMonth, holidayYear, holidayHour, holidayMinute);
        if (!holiday) {
          if (showError) setError(t.errorInvalidDate);
          return;
        }

        if (birthDate && holiday < birthDate) {
          setError(t.errorBirthAfterTarget);
          return;
        }
      }

      if (targetYear && (isNaN(Number(targetYear)) || Number(targetYear) < 1 || Number(targetYear) > 9999)) {
        setError(t.errorInvalidYear);
        return;
      }

      const baseDate = targetYear ? new Date(Number(targetYear), 11, 31, 23, 59, 59) : new Date();
      
      let nowInTimezone: Date;
      try {
        const parts = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false
        }).formatToParts(baseDate);

        const getPart = (type: string) => parts.find(p => p.type === type)?.value;
        nowInTimezone = new Date(
          Number(getPart('year')),
          Number(getPart('month')) - 1,
          Number(getPart('day')),
          Number(getPart('hour')),
          Number(getPart('minute')),
          Number(getPart('second'))
        );
      } catch (tzError) {
        console.error('Timezone error:', tzError);
        nowInTimezone = new Date();
      }

      if (birthDate > nowInTimezone) {
        setError(targetYear ? t.errorBirthAfterTarget : t.errorFutureDate);
        return;
      }

      const mainResult = calculateAge(birthDate, nowInTimezone);
      setResult(mainResult);
      setDob(birthDate);

      if (birthDateEnd) {
        if (birthDateEnd > nowInTimezone) {
          setError(t.errorFutureDate);
          return;
        }
        if (birthDateEnd < minDate) {
          setError(t.errorTooOld);
          return;
        }
        const result2 = calculateAge(birthDateEnd, nowInTimezone);
        const diffBetween = calculateDateDifference(birthDate, birthDateEnd);
        
        if (birthDate < birthDateEnd) {
          setAgeRange({ min: result2, max: mainResult, diff: diffBetween });
        } else {
          setAgeRange({ min: mainResult, max: result2, diff: diffBetween });
        }
        setDobEnd(birthDateEnd);
      } else {
        setAgeRange(null);
        setDobEnd(null);
      }

      if (holiday) {
        setHolidayDate(holiday);
      } else {
        setHolidayDate(null);
      }
    } catch (err) {
      console.error('Calculation error:', err);
      setError(t.errorInvalidDate);
    }
  }, [birthDay, birthMonth, birthYear, birthHour, birthMinute, endDay, endMonth, endYear, endHour, endMinute, holidayDay, holidayMonth, holidayYear, holidayHour, holidayMinute, targetYear, timezone, t]);

  useEffect(() => {
    if (holidayDate) {
      const interval = setInterval(() => {
        const holiday = new Date(holidayDate);
        const now = new Date();
        const diffMs = holiday.getTime() - now.getTime();
        if (diffMs > 0) {
          const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
          setHolidayCountdown({ days, hours, minutes, seconds });
        } else {
          setHolidayCountdown(null);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setHolidayCountdown(null);
    }
  }, [holidayDate]);

  const handleCopy = async () => {
    if (!result) return;
    let summary = `🎂 ${t.title}\n` +
      `📅 ${t.ageSummary.replace('{years}', result.years.toString()).replace('{months}', result.months.toString()).replace('{days}', result.days.toString())}\n` +
      `✨ ${t.zodiacSign}: ${t.zodiacSigns[result.zodiacSign]}\n` +
      `🏮 ${t.chineseZodiacLabel}: ${t.chineseZodiacSigns[result.chineseZodiac]} (${t.chineseZodiacDescriptions[result.chineseZodiac]})\n` +
      `🌙 ${t.lunarPhaseLabel}: ${t.lunarPhases[result.lunarPhase]} - ${t.lunarPhaseInterpretations[result.lunarPhase]}\n` +
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
    try {
      setError(null);
      setValidationErrors({});
      setResult(null);
      setAgeRange(null);
      setCompareResult(null);

      const newValidationErrors: Record<string, string> = {};

      // Validate Date 1
      if (!comp1Day) newValidationErrors.comp1Day = t.errorInvalidDate;
      else if (isInvalid('day', comp1Day, comp1Month, comp1Year)) newValidationErrors.comp1Day = t.errorInvalidDate;
      
      if (!comp1Month) newValidationErrors.comp1Month = t.errorInvalidDate;
      else if (isInvalid('month', comp1Month)) newValidationErrors.comp1Month = t.errorInvalidDate;
      
      if (!comp1Year) newValidationErrors.comp1Year = t.errorInvalidDate;
      else if (isInvalid('year', comp1Year)) newValidationErrors.comp1Year = t.errorInvalidDate;
      
      if (isInvalid('hour', comp1Hour)) newValidationErrors.comp1Hour = t.errorInvalidDate;
      if (isInvalid('minute', comp1Minute)) newValidationErrors.comp1Minute = t.errorInvalidDate;

      // Validate Date 2
      if (!comp2Day) newValidationErrors.comp2Day = t.errorInvalidDate;
      else if (isInvalid('day', comp2Day, comp2Month, comp2Year)) newValidationErrors.comp2Day = t.errorInvalidDate;
      
      if (!comp2Month) newValidationErrors.comp2Month = t.errorInvalidDate;
      else if (isInvalid('month', comp2Month)) newValidationErrors.comp2Month = t.errorInvalidDate;
      
      if (!comp2Year) newValidationErrors.comp2Year = t.errorInvalidDate;
      else if (isInvalid('year', comp2Year)) newValidationErrors.comp2Year = t.errorInvalidDate;
      
      if (isInvalid('hour', comp2Hour)) newValidationErrors.comp2Hour = t.errorInvalidDate;
      if (isInvalid('minute', comp2Minute)) newValidationErrors.comp2Minute = t.errorInvalidDate;

      const d1 = parseDate(comp1Day, comp1Month, comp1Year, comp1Hour, comp1Minute);
      const d2 = parseDate(comp2Day, comp2Month, comp2Year, comp2Hour, comp2Minute);

      if (!d1 || !d2 || Object.keys(newValidationErrors).length > 0) {
        setError(t.errorInvalidDate);
        setValidationErrors(newValidationErrors);
        return;
      }

      // Check if dates are unreasonably far in the past (e.g., > 150 years)
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 150);
      if (d1 < minDate || d2 < minDate) {
        setError(t.errorTooOld);
        return;
      }

      if (d1 > d2) {
        setError(t.errorStartDateAfterEndDate);
        return;
      }

      const diff = calculateAge(d1, d2);
      setCompareResult(diff);
      setCompareDate1(d1);
      setCompareDate2(d2);
    } catch (err) {
      console.error('Comparison error:', err);
      setError(t.errorInvalidDate);
    }
  };

  const handleCalculatePercentage = () => {
    const n = parseFloat(percNumber);
    const p = parseFloat(percValue);
    if (!isNaN(n) && !isNaN(p)) {
      setPercResult((n * p) / 100);
    } else {
      setPercResult(null);
    }
  };

  const handleShare = async () => {
    if (!result && !compareResult) return;

    let shareText = '';
    if (activeTab === 'calculate' && result) {
      shareText = `Check out my age stats on ${t.title}!\n\n` +
        `Age: ${result.years} Years, ${result.months} Months, ${result.days} Days\n` +
        `Sun Sign: ${t.zodiacSigns[result.birthChart.sunSign]} (${t.elements[signAttributes[result.birthChart.sunSign].element]} ${t.modalities[signAttributes[result.birthChart.sunSign].modality]})\n` +
        `Moon Sign: ${t.zodiacSigns[result.birthChart.moonSign]}\n` +
        `Rising Sign: ${t.zodiacSigns[result.birthChart.risingSign]}\n` +
        `Chinese Zodiac: ${t.chineseZodiacSigns[result.chineseZodiac]}\n` +
        `Lunar Phase: ${t.lunarPhases[result.lunarPhase]} (${t.lunarPhaseInterpretations[result.lunarPhase]})\n` +
        `Birthstone: ${t.birthstones[result.birthstone] || result.birthstone}\n` +
        `Planetary Positions: Mercury in ${t.zodiacSigns[result.planetaryPositions.mercury]}, Venus in ${t.zodiacSigns[result.planetaryPositions.venus]}, Mars in ${t.zodiacSigns[result.planetaryPositions.mars]}\n` +
        `Aspects: ${result.aspects.length > 0 ? result.aspects.map(a => `${t.planetNames[a.planet1]}-${t.planetNames[a.planet2]} (${t.aspectTypes[a.type]})`).join(', ') : 'None'}\n\n` +
        `Calculate yours here: ${window.location.origin}`;
    } else if (activeTab === 'compare' && compareResult) {
      shareText = `Check out the time difference on ${t.title}!\n\n` +
        `Difference: ${compareResult.years} Years, ${compareResult.months} Months, ${compareResult.days} Days\n` +
        `Total Hours: ${compareResult.totalHours.toLocaleString()}\n` +
        `Total Minutes: ${compareResult.totalMinutes.toLocaleString()}\n` +
        `Total Seconds: ${compareResult.totalSeconds.toLocaleString()}\n\n` +
        `Calculate yours here: ${window.location.origin}`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${t.title} - Results`,
          text: shareText,
          url: window.location.origin,
        });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Error copying to clipboard:', err);
      }
    }
  };

  // Memoize StatCard for performance
  const MemoizedStatCard = React.memo(StatCard);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (result && dob && !targetYear) {
      // Cache the formatter for performance
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      });

      interval = setInterval(() => {
        const birthDate = new Date(dob);
        const baseDate = new Date();
        
        try {
          const parts = formatter.formatToParts(baseDate);
          const getPart = (type: string) => parts.find(p => p.type === type)?.value;
          const nowInTimezone = new Date(
            Number(getPart('year')),
            Number(getPart('month')) - 1,
            Number(getPart('day')),
            Number(getPart('hour')),
            Number(getPart('minute')),
            Number(getPart('second'))
          );
          
          // Only update if the date is actually different to avoid unnecessary re-renders
          setResult(prev => {
            if (!prev) return null;
            const liveUpdate = calculateLiveAge(birthDate, nowInTimezone);
            
            // Deep check if values changed (at least seconds)
            if (prev.totalSeconds === liveUpdate.totalSeconds) return prev;
            
            return { ...prev, ...liveUpdate } as AgeResult;
          });
        } catch (e) {
          console.error('Live update error:', e);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [dob, timezone, !!result, targetYear]);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => {
            setActiveTab('calculate');
            setError(null);
          }}
          title={t.tooltips.calculate}
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
          title={t.tooltips.compare}
          className={`px-6 py-3 rounded-2xl font-bold transition-all ${
            activeTab === 'compare'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {t.differenceTitle}
        </button>
        <button
          onClick={() => {
            setActiveTab('percentage');
            setError(null);
          }}
          title={t.percentageCalculator}
          className={`px-6 py-3 rounded-2xl font-bold transition-all ${
            activeTab === 'percentage'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {t.percentageCalculator}
        </button>
      </div>

      <div className={`p-6 md:p-8 rounded-3xl glass shadow-2xl mb-8 transition-all`}>
        {activeTab === 'calculate' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6 items-end">
            <div className="w-full lg:col-span-2">
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.dobLabel}
              </label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.dayLabel}</span>
                  <NumericInput
                    ref={birthDayRef}
                    nextRef={birthMonthRef}
                    placeholder={t.dayPlaceholder}
                    value={birthDay}
                    onChange={setBirthDay}
                    maxLength={2}
                    error={!!validationErrors.birthDay || isInvalid('day', birthDay, birthMonth, birthYear)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.monthLabel}</span>
                  <NumericInput
                    ref={birthMonthRef}
                    prevRef={birthDayRef}
                    nextRef={birthYearRef}
                    placeholder={t.monthPlaceholder}
                    value={birthMonth}
                    onChange={setBirthMonth}
                    maxLength={2}
                    error={!!validationErrors.birthMonth || isInvalid('month', birthMonth)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.yearLabel}</span>
                  <NumericInput
                    ref={birthYearRef}
                    prevRef={birthMonthRef}
                    nextRef={birthHourRef}
                    placeholder={t.yearPlaceholder}
                    value={birthYear}
                    onChange={setBirthYear}
                    maxLength={4}
                    error={!!validationErrors.birthYear || isInvalid('year', birthYear)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
              </div>
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.birthTimeLabel}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.hourLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={birthHourRef}
                      prevRef={birthYearRef}
                      nextRef={birthMinuteRef}
                      placeholder={t.hourPlaceholder}
                      value={birthHour}
                      onChange={setBirthHour}
                      maxLength={2}
                      error={!!validationErrors.birthHour || isInvalid('hour', birthHour)}
                      title={t.tooltips.birthTime}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.minuteLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={birthMinuteRef}
                      prevRef={birthHourRef}
                      placeholder={t.minutePlaceholder}
                      value={birthMinute}
                      onChange={setBirthMinute}
                      maxLength={2}
                      error={!!validationErrors.birthMinute || isInvalid('minute', birthMinute)}
                      title={t.tooltips.birthTime}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-2">
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.dobRangeEndLabel}
              </label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.dayLabel}</span>
                  <NumericInput
                    ref={endDayRef}
                    nextRef={endMonthRef}
                    placeholder={t.dayPlaceholder}
                    value={endDay}
                    onChange={setEndDay}
                    maxLength={2}
                    error={!!validationErrors.endDay || isInvalid('day', endDay, endMonth, endYear)}
                    title={t.tooltips.rangeEnd}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.monthLabel}</span>
                  <NumericInput
                    ref={endMonthRef}
                    prevRef={endDayRef}
                    nextRef={endYearRef}
                    placeholder={t.monthPlaceholder}
                    value={endMonth}
                    onChange={setEndMonth}
                    maxLength={2}
                    error={!!validationErrors.endMonth || isInvalid('month', endMonth)}
                    title={t.tooltips.rangeEnd}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.yearLabel}</span>
                  <NumericInput
                    ref={endYearRef}
                    prevRef={endMonthRef}
                    nextRef={endHourRef}
                    placeholder={t.yearPlaceholder}
                    value={endYear}
                    onChange={setEndYear}
                    maxLength={4}
                    error={!!validationErrors.endYear || isInvalid('year', endYear)}
                    title={t.tooltips.rangeEnd}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.hourLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={endHourRef}
                      prevRef={endYearRef}
                      nextRef={endMinuteRef}
                      placeholder="HH"
                      value={endHour}
                      onChange={setEndHour}
                      maxLength={2}
                      error={!!validationErrors.endHour || isInvalid('hour', endHour)}
                      title={t.tooltips.rangeEnd}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.minuteLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={endMinuteRef}
                      prevRef={endHourRef}
                      placeholder="MM"
                      value={endMinute}
                      onChange={setEndMinute}
                      maxLength={2}
                      error={!!validationErrors.endMinute || isInvalid('minute', endMinute)}
                      title={t.tooltips.rangeEnd}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-2">
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.holidayLabel}
              </label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.dayLabel}</span>
                  <NumericInput
                    ref={holidayDayRef}
                    nextRef={holidayMonthRef}
                    placeholder={t.dayPlaceholder}
                    value={holidayDay}
                    onChange={setHolidayDay}
                    maxLength={2}
                    error={!!validationErrors.holidayDay || isInvalid('day', holidayDay, holidayMonth, holidayYear)}
                    title={t.tooltips.holiday}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.monthLabel}</span>
                  <NumericInput
                    ref={holidayMonthRef}
                    prevRef={holidayDayRef}
                    nextRef={holidayYearRef}
                    placeholder={t.monthPlaceholder}
                    value={holidayMonth}
                    onChange={setHolidayMonth}
                    maxLength={2}
                    error={!!validationErrors.holidayMonth || isInvalid('month', holidayMonth)}
                    title={t.tooltips.holiday}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.yearLabel}</span>
                  <NumericInput
                    ref={holidayYearRef}
                    prevRef={holidayMonthRef}
                    nextRef={holidayHourRef}
                    placeholder={t.yearPlaceholder}
                    value={holidayYear}
                    onChange={setHolidayYear}
                    maxLength={4}
                    error={!!validationErrors.holidayYear || isInvalid('year', holidayYear)}
                    title={t.tooltips.holiday}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.hourLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={holidayHourRef}
                      prevRef={holidayYearRef}
                      nextRef={holidayMinuteRef}
                      placeholder={t.hourPlaceholder}
                      value={holidayHour}
                      onChange={setHolidayHour}
                      maxLength={2}
                      error={!!validationErrors.holidayHour || isInvalid('hour', holidayHour)}
                      title={t.tooltips.holiday}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.minuteLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={holidayMinuteRef}
                      prevRef={holidayHourRef}
                      placeholder={t.minutePlaceholder}
                      value={holidayMinute}
                      onChange={setHolidayMinute}
                      maxLength={2}
                      error={!!validationErrors.holidayMinute || isInvalid('minute', holidayMinute)}
                      title={t.tooltips.holiday}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="target-year-input" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.targetYearLabel}
              </label>
              <div className="relative space-y-3">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <NumericInput
                    id="target-year-input"
                    placeholder={new Date().getFullYear().toString()}
                    value={targetYear}
                    onChange={setTargetYear}
                    maxLength={4}
                    error={isInvalid('year', targetYear)}
                    title={t.tooltips.targetYear}
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
            onClick={() => activeTab === 'calculate' ? handleCalculate(true) : handleCompareDates()}
            title={activeTab === 'calculate' ? t.tooltips.calculate : t.tooltips.compare}
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20 h-[50px]"
          >
            {activeTab === 'calculate' ? t.calculateBtn : t.compareBtn}
          </button>
        </div>
        )}
        {activeTab === 'compare' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            <div className="w-full lg:col-span-1">
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.date1Label}
              </label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.dayLabel}</span>
                  <NumericInput
                    ref={comp1DayRef}
                    nextRef={comp1MonthRef}
                    placeholder={t.dayPlaceholder}
                    value={comp1Day}
                    onChange={setComp1Day}
                    maxLength={2}
                    error={!!validationErrors.comp1Day || isInvalid('day', comp1Day, comp1Month, comp1Year)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.monthLabel}</span>
                  <NumericInput
                    ref={comp1MonthRef}
                    prevRef={comp1DayRef}
                    nextRef={comp1YearRef}
                    placeholder={t.monthPlaceholder}
                    value={comp1Month}
                    onChange={setComp1Month}
                    maxLength={2}
                    error={!!validationErrors.comp1Month || isInvalid('month', comp1Month)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.yearLabel}</span>
                  <NumericInput
                    ref={comp1YearRef}
                    prevRef={comp1MonthRef}
                    nextRef={comp1HourRef}
                    placeholder={t.yearPlaceholder}
                    value={comp1Year}
                    onChange={setComp1Year}
                    maxLength={4}
                    error={!!validationErrors.comp1Year || isInvalid('year', comp1Year)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.hourLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={comp1HourRef}
                      prevRef={comp1YearRef}
                      nextRef={comp1MinuteRef}
                      placeholder={t.hourPlaceholder}
                      value={comp1Hour}
                      onChange={setComp1Hour}
                      maxLength={2}
                      error={!!validationErrors.comp1Hour || isInvalid('hour', comp1Hour)}
                      title={t.tooltips.birthTime}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.minuteLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={comp1MinuteRef}
                      prevRef={comp1HourRef}
                      placeholder={t.minutePlaceholder}
                      value={comp1Minute}
                      onChange={setComp1Minute}
                      maxLength={2}
                      error={!!validationErrors.comp1Minute || isInvalid('minute', comp1Minute)}
                      title={t.tooltips.birthTime}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-1">
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.date2Label}
              </label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.dayLabel}</span>
                  <NumericInput
                    ref={comp2DayRef}
                    nextRef={comp2MonthRef}
                    placeholder={t.dayPlaceholder}
                    value={comp2Day}
                    onChange={setComp2Day}
                    maxLength={2}
                    error={!!validationErrors.comp2Day || isInvalid('day', comp2Day, comp2Month, comp2Year)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.monthLabel}</span>
                  <NumericInput
                    ref={comp2MonthRef}
                    prevRef={comp2DayRef}
                    nextRef={comp2YearRef}
                    placeholder={t.monthPlaceholder}
                    value={comp2Month}
                    onChange={setComp2Month}
                    maxLength={2}
                    error={!!validationErrors.comp2Month || isInvalid('month', comp2Month)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.yearLabel}</span>
                  <NumericInput
                    ref={comp2YearRef}
                    prevRef={comp2MonthRef}
                    nextRef={comp2HourRef}
                    placeholder={t.yearPlaceholder}
                    value={comp2Year}
                    onChange={setComp2Year}
                    maxLength={4}
                    error={!!validationErrors.comp2Year || isInvalid('year', comp2Year)}
                    title={t.tooltips.dob}
                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                      darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.hourLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={comp2HourRef}
                      prevRef={comp2YearRef}
                      nextRef={comp2MinuteRef}
                      placeholder={t.hourPlaceholder}
                      value={comp2Hour}
                      onChange={setComp2Hour}
                      maxLength={2}
                      error={!!validationErrors.comp2Hour || isInvalid('hour', comp2Hour)}
                      title={t.tooltips.birthTime}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold opacity-50 px-1">{t.minuteLabel}</span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <NumericInput
                      ref={comp2MinuteRef}
                      prevRef={comp2HourRef}
                      placeholder={t.minutePlaceholder}
                      value={comp2Minute}
                      onChange={setComp2Minute}
                      maxLength={2}
                      error={!!validationErrors.comp2Minute || isInvalid('minute', comp2Minute)}
                      title={t.tooltips.birthTime}
                      className={`w-full pl-9 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm ${
                        darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleCompareDates}
              title={t.tooltips.compare}
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20 h-[50px]"
            >
              <Sparkles size={16} />
              {t.compareBtn}
            </button>
          </div>
        )}
        {activeTab === 'percentage' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.numberLabel}
                </label>
                <NumericInput
                  value={percNumber}
                  onChange={setPercNumber}
                  placeholder="e.g. 500"
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.percentageLabel}
                </label>
                <NumericInput
                  value={percValue}
                  onChange={setPercValue}
                  placeholder="e.g. 20"
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/50 border-gray-200 text-gray-900'
                  }`}
                />
              </div>
            </div>

            <button
              onClick={handleCalculatePercentage}
              className="w-full px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20 h-[50px] flex items-center justify-center gap-2"
            >
              <Percent size={16} />
              {t.calculatePercentageBtn}
            </button>

            {percResult !== null && (
              <div className={`p-6 rounded-2xl border-2 text-center ${
                darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
              }`}>
                <div className="text-2xl font-black">
                  {t.percentageResult
                    .replace('{percentage}', percValue)
                    .replace('{number}', percNumber)
                    .replace('{result}', percResult.toLocaleString())}
                </div>
              </div>
            )}
          </div>
        )}
        {error && <p className="mt-4 text-red-500 text-sm font-medium text-center">{error}</p>}
      </div>

      {/* Easter Date Section for Current Year */}
      {easterDate && (
        <div
          className={`p-6 rounded-3xl glass-card flex flex-col sm:flex-row items-center justify-between border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-500/5 to-transparent mb-8 transition-all hover:scale-[1.01] gap-4`}
        >
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="p-3 rounded-2xl bg-yellow-500/20 text-yellow-500 shadow-lg shadow-yellow-500/10">
              <Sparkles size={20} />
            </div>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                {t.easterDate.replace('{year}', easterDate.getFullYear().toString())}
              </div>
              <div className="text-2xl font-black tracking-tight">
                {easterDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
            {daysUntilEaster !== null && daysUntilEaster > 0 && (
              <div className="text-right">
                <div className={`text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1`}>
                  Countdown
                </div>
                <div className="text-sm font-bold text-blue-500">
                  {daysUntilEaster} Days Left
                </div>
              </div>
            )}
            
            <div className="text-right">
              <div className={`text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1`}>
                {t.zodiacSign}
              </div>
              <div className="text-sm font-bold text-yellow-500/80">
                {easterDate.getMonth() === 2 || (easterDate.getMonth() === 3 && easterDate.getDate() <= 19) 
                  ? t.zodiacSigns['aries'] 
                  : t.zodiacSigns['taurus']}
              </div>
            </div>
          </div>
        </div>
      )}

        {activeTab === 'compare' && compareResult && (
          <div
            key="compare-result"
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
                <Clock className="text-blue-500" size={24} />
                {t.differenceTitle}
              </h2>
              <button
                onClick={handleShare}
                className={`p-3 rounded-full transition-all active:scale-95 ${
                  copied 
                    ? 'bg-emerald-500/20 text-emerald-500' 
                    : 'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20'
                }`}
                title={t.tooltips.share}
              >
                {copied ? <Check size={20} /> : <Share2 size={20} />}
              </button>
            </div>

            <div className={`p-8 rounded-3xl text-center font-bold text-lg glass border-blue-500/20 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              {t.differenceSummary
                .replace('{years}', compareResult.years.toString())
                .replace('{months}', compareResult.months.toString())
                .replace('{days}', compareResult.days.toString())}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <MemoizedStatCard icon={Calendar} label={t.years} value={compareResult.years} color="bg-blue-500" />
              <MemoizedStatCard icon={Calendar} label={t.months} value={compareResult.months} color="bg-indigo-500" />
              <MemoizedStatCard icon={Calendar} label={t.weeks} value={compareResult.weeks} color="bg-purple-500" />
              <MemoizedStatCard icon={Calendar} label={t.days} value={compareResult.days} color="bg-pink-500" />
              <MemoizedStatCard icon={Clock} label={t.hours} value={compareResult.totalHours} color="bg-orange-500" />
              <MemoizedStatCard icon={Clock} label={t.minutes} value={compareResult.totalMinutes} color="bg-emerald-500" />
              <MemoizedStatCard icon={Clock} label={t.seconds} value={compareResult.totalSeconds} color="bg-cyan-500" />
            </div>
          </div>
        )}

        {activeTab === 'calculate' && result && (
          <div
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
                <Award className="text-blue-500" size={24} />
                {t.resultsTitle}
              </h2>
              <button
                onClick={handleShare}
                className={`p-3 rounded-full transition-all active:scale-95 ${
                  copied 
                    ? 'bg-emerald-500/20 text-emerald-500' 
                    : 'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20'
                }`}
                title={t.tooltips.share}
              >
                {copied ? <Check size={20} /> : <Share2 size={20} />}
              </button>
            </div>
            {/* Main Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <MemoizedStatCard icon={Calendar} label={t.years} value={result.years} color="bg-blue-500" />
              <MemoizedStatCard icon={User} label={t.ageLabel} value={Math.floor(result.years)} color="bg-blue-600" />
              <MemoizedStatCard icon={Moon} label={t.lunarAge} value={result.lunarAge} color="bg-indigo-400" />
              <MemoizedStatCard icon={Star} label={t.sunSignLabel} value={t.zodiacSigns[result.zodiacSign]} color="bg-orange-500" />
              <MemoizedStatCard icon={Calendar} label={t.months} value={result.totalMonths} color="bg-indigo-500" />
              <MemoizedStatCard icon={Calendar} label={t.weeks} value={result.weeks} color="bg-violet-500" />
              <MemoizedStatCard icon={Calendar} label={t.days} value={result.totalDays} color="bg-purple-500" />
              <MemoizedStatCard icon={Clock} label={t.hours} value={result.totalHours} color="bg-pink-500" />
              <MemoizedStatCard icon={Clock} label={t.minutes} value={result.totalMinutes} color="bg-orange-500" />
              <MemoizedStatCard icon={Clock} label={t.seconds} value={result.totalSeconds} color="bg-emerald-500" />
              <MemoizedStatCard icon={Diamond} label={t.birthstone} value={t.birthstones[result.birthstone] || result.birthstone} color="bg-cyan-500" />
              <MemoizedStatCard icon={Sparkles} label={t.chineseZodiacLabel} value={t.chineseZodiacSigns[result.chineseZodiac]} color="bg-red-600" />
              <MemoizedStatCard icon={Moon} label={t.lunarPhaseLabel} value={t.lunarPhases[result.lunarPhase]} color="bg-slate-700" />
            </div>

            {/* The Big Three Summary */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Sparkles className="text-blue-500" size={16} />
                {t.birthChartTitle} - The Big Three
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: t.sunSignLabel, sign: result.birthChart.sunSign, icon: Star, color: 'text-orange-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30', meaning: t.planetMeanings.sun, interpretation: t.sunSignInterpretations[result.birthChart.sunSign] },
                  { label: t.moonSignLabel, sign: result.birthChart.moonSign, icon: Moon, color: 'text-indigo-500', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30', meaning: t.planetMeanings.moon, interpretation: t.moonSignInterpretations[result.birthChart.moonSign] },
                  { label: t.risingSignLabel, sign: result.birthChart.risingSign, icon: ArrowUpRight, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', meaning: t.planetMeanings.rising, interpretation: t.risingSignInterpretations[result.birthChart.risingSign] },
                ].map((item, idx) => {
                  const attrs = signAttributes[item.sign];
                  const ElementIcon = astrologyElementIconsMap[attrs.element];
                  return (
                    <div
                      key={item.label}
                      className={`p-6 rounded-3xl glass-card border-t-4 ${item.borderColor} flex flex-col gap-4 transition-all hover:scale-[1.02]`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl ${item.bgColor} ${item.color}`}>
                            <item.icon size={20} />
                          </div>
                          <div>
                            <div className={`text-[10px] font-bold uppercase tracking-widest opacity-60`}>{item.label}</div>
                            <div className="text-xl font-black tracking-tight">{t.zodiacSigns[item.sign]}</div>
                          </div>
                        </div>
                        <div className={`p-2 rounded-lg ${item.bgColor} ${item.color}`}>
                          <ElementIcon size={16} />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col gap-1">
                          <span className={`px-2 py-0.5 rounded-full ${item.bgColor} ${item.color} text-[8px] font-bold uppercase tracking-widest border border-current opacity-70 text-center`}>
                            {t.elements[attrs.element]}
                          </span>
                          <p className="text-[8px] opacity-50 leading-tight italic px-1">{t.elementMeanings[attrs.element]}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className={`px-2 py-0.5 rounded-full ${item.bgColor} ${item.color} text-[8px] font-bold uppercase tracking-widest border border-current opacity-70 text-center`}>
                            {t.modalities[attrs.modality]}
                          </span>
                          <p className="text-[8px] opacity-50 leading-tight italic px-1">{t.modalityMeanings[attrs.modality]}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className={`px-2 py-0.5 rounded-full ${item.bgColor} ${item.color} text-[8px] font-bold uppercase tracking-widest border border-current opacity-70 text-center`}>
                            {t.rulingPlanets[attrs.rulingPlanet]}
                          </span>
                          <p className="text-[8px] opacity-50 leading-tight italic px-1">{t.rulingPlanetMeanings[attrs.rulingPlanet]}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className={`text-[11px] leading-relaxed font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                            {item.meaning}
                          </p>
                          <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.interpretation}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-gray-500/10">
                          <p className={`text-[10px] leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'} italic`}>
                            {t.zodiacDescriptions[item.sign]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lunar Phase Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Moon className="text-slate-500" size={16} />
                {t.lunarPhaseLabel}
              </h3>
              <div
                className={`p-6 rounded-3xl glass-card border-t-4 border-slate-500/30 flex flex-col gap-4 transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-slate-500/10 text-slate-500`}>
                    <Moon size={20} />
                  </div>
                  <div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest opacity-60`}>{t.lunarPhaseLabel}</div>
                    <div className="text-xl font-black tracking-tight">{t.lunarPhases[result.lunarPhase]}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      {t.interpretationLabel}
                    </h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.lunarPhaseInterpretations[result.lunarPhase]}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                      {t.astrologicalSignificanceLabel}
                    </h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.lunarPhaseAstrology[result.lunarPhase]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Stats */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Star className="text-yellow-500" size={16} />
                {t.lifeStatsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MemoizedStatCard icon={Heart} label={t.heartbeats} value={result.lifeStats.heartbeats} color="bg-red-500" />
                <MemoizedStatCard icon={Eye} label={t.eyeBlinks} value={result.lifeStats.eyeBlinks} color="bg-blue-400" />
                <MemoizedStatCard icon={Moon} label={t.sleepTime} value={`${result.lifeStats.sleepDays} ${t.days.toLowerCase()}`} color="bg-indigo-700" />
                <MemoizedStatCard icon={Wind} label={t.breathCount} value={result.lifeStats.breaths} color="bg-teal-500" />
              </div>
            </div>

            {/* Next Birthday Countdown Timer */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <PartyPopper className="text-yellow-500" size={16} />
                {t.nextBirthday}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                  [
                    { label: t.days, value: result.nextBirthday.days },
                    { label: t.hours, value: result.nextBirthday.hours },
                    { label: t.minutes, value: result.nextBirthday.minutes },
                    { label: t.seconds, value: result.nextBirthday.seconds },
                  ].map((item, idx) => (
                    <div
                      key={item.label}
                      className="p-6 rounded-3xl glass-card flex flex-col items-center justify-center text-center border-b-4 border-yellow-500/30"
                    >
                      <div className="text-4xl font-black tabular-nums text-yellow-500">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.label}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Birth Chart Section */}
            <div className="space-y-4 relative hover:z-10 transition-all duration-300">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Globe className="text-blue-500" size={16} />
                {t.birthChartTitle}
                {birthLocation && <span className="text-sm font-normal opacity-60">({birthLocation})</span>}
              </h3>

              <div className="space-y-8">
                <div>
                <Suspense fallback={<div className="h-96 flex items-center justify-center opacity-50 font-bold uppercase tracking-widest">Loading Chart...</div>}>
                  <BirthChartVisualizer result={deferredResult} t={t} darkMode={darkMode} />
                </Suspense>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      planet: 'sun', 
                      label: t.sunSignLabel, 
                      sign: result.birthChart.sunSign, 
                      degree: result.birthChart.sunDegree, 
                      house: result.birthChart.sunHouse,
                      color: 'border-orange-500', 
                      bgColor: 'from-orange-500/10', 
                      iconColor: 'text-orange-400', 
                      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
                      icon: <Star size={16} />,
                      interpretations: t.sunSignInterpretations
                    },
                    { 
                      planet: 'moon', 
                      label: t.moonSignLabel, 
                      sign: result.birthChart.moonSign, 
                      degree: result.birthChart.moonDegree, 
                      house: result.birthChart.moonHouse,
                      color: 'border-indigo-500', 
                      bgColor: 'from-indigo-500/10', 
                      iconColor: 'text-indigo-400', 
                      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                      icon: <Moon size={16} />,
                      interpretations: t.moonSignInterpretations
                    },
                    { 
                      planet: 'rising', 
                      label: t.risingSignLabel, 
                      sign: result.birthChart.risingSign, 
                      degree: result.birthChart.risingDegree, 
                      house: 1,
                      color: 'border-emerald-500', 
                      bgColor: 'from-emerald-500/10', 
                      iconColor: 'text-emerald-400', 
                      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                      icon: <ArrowUpRight size={16} />,
                      interpretations: t.risingSignInterpretations
                    },
                  ].map((item, idx) => {
                    const attrs = signAttributes[item.sign] || { element: 'fire', modality: 'cardinal', rulingPlanet: 'mars' };
                    return (
                      <div
                        key={item.planet}
                        className={`p-6 rounded-3xl glass-card border-l-8 ${item.color} bg-gradient-to-br ${item.bgColor} to-transparent shadow-xl flex flex-col`}
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${item.planet === 'sun' ? 'bg-orange-500' : item.planet === 'moon' ? 'bg-indigo-500' : 'bg-emerald-500'} text-white shadow-lg`}>
                              {item.icon}
                            </div>
                            <div>
                              <div className={`text-[10px] font-bold uppercase tracking-widest ${item.iconColor} mb-0.5`}>{item.label}</div>
                              <h4 className="text-2xl font-black tracking-tighter">
                                {t.zodiacSigns[item.sign]}
                                {item.degree !== undefined && <span className="text-sm ml-1.5 opacity-60">({item.degree}°)</span>}
                              </h4>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <span className={`px-2 py-1 rounded-lg ${item.badgeColor} text-[9px] font-bold uppercase tracking-widest border`}>{t.elements[attrs.element]}</span>
                            <span className={`px-2 py-1 rounded-lg ${item.badgeColor} text-[9px] font-bold uppercase tracking-widest border`}>{t.modalities[attrs.modality]}</span>
                            <span className={`px-2 py-1 rounded-lg ${item.badgeColor} text-[9px] font-bold uppercase tracking-widest border`}>{t.rulingPlanets[attrs.rulingPlanet]}</span>
                            {item.house !== undefined && (
                              <span className={`px-2 py-1 rounded-lg ${item.badgeColor} text-[9px] font-bold uppercase tracking-widest border`}>
                                {t.houseLabel.replace('{n}', item.house.toString())}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 flex-grow">
                          <p className="text-xs leading-relaxed font-medium mb-3 italic opacity-80">
                            "{t.zodiacDescriptions[item.sign]}"
                          </p>
                          <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                            {item.interpretations[item.sign]}
                          </p>

                          <div className={`text-[10px] space-y-2 pt-4 border-t border-white/5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            <p className="mb-2 text-gray-300 font-medium italic">
                              {t.planetMeanings[item.planet] || ''}
                            </p>
                            <div className="flex justify-between">
                              <span>{t.degreeLabel}:</span>
                              <span className="font-bold text-gray-300">{item.degree}°</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t.housesTitle.slice(0, -1)}:</span>
                              <span className="font-bold text-gray-300">{t.houseLabel.replace('{n}', item.house.toString())}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t.elementLabel}:</span>
                              <span className="font-bold text-gray-300">{t.elements[attrs.element]}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t.modalityLabel}:</span>
                              <span className="font-bold text-gray-300">{t.modalities[attrs.modality]}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t.rulingPlanetLabel}:</span>
                              <span className="font-bold text-gray-300">{t.rulingPlanets[attrs.rulingPlanet]}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { planet: 'mercury', label: t.mercuryLabel, sign: result.planetaryPositions.mercury, degree: result.planetaryPositions.mercuryDegree, house: result.planetaryPositions.mercuryHouse, color: 'border-yellow-400', iconColor: 'text-yellow-400' },
                  { planet: 'venus', label: t.venusLabel, sign: result.planetaryPositions.venus, degree: result.planetaryPositions.venusDegree, house: result.planetaryPositions.venusHouse, color: 'border-pink-400', iconColor: 'text-pink-400' },
                  { planet: 'mars', label: t.marsLabel, sign: result.planetaryPositions.mars, degree: result.planetaryPositions.marsDegree, house: result.planetaryPositions.marsHouse, color: 'border-red-400', iconColor: 'text-red-400' },
                  { planet: 'jupiter', label: t.jupiterLabel, sign: result.planetaryPositions.jupiter, degree: result.planetaryPositions.jupiterDegree, house: result.planetaryPositions.jupiterHouse, color: 'border-orange-400', iconColor: 'text-orange-400' },
                  { planet: 'saturn', label: t.saturnLabel, sign: result.planetaryPositions.saturn, degree: result.planetaryPositions.saturnDegree, house: result.planetaryPositions.saturnHouse, color: 'border-stone-400', iconColor: 'text-stone-400' },
                  { planet: 'uranus', label: t.uranusLabel, sign: result.planetaryPositions.uranus, degree: result.planetaryPositions.uranusDegree, house: result.planetaryPositions.uranusHouse, color: 'border-cyan-400', iconColor: 'text-cyan-400' },
                  { planet: 'neptune', label: t.neptuneLabel, sign: result.planetaryPositions.neptune, degree: result.planetaryPositions.neptuneDegree, house: result.planetaryPositions.neptuneHouse, color: 'border-blue-400', iconColor: 'text-blue-400' },
                  { planet: 'pluto', label: t.plutoLabel, sign: result.planetaryPositions.pluto, degree: result.planetaryPositions.plutoDegree, house: result.planetaryPositions.plutoHouse, color: 'border-purple-400', iconColor: 'text-purple-400' },
                ].map((item, idx) => {
                  const attrs = signAttributes[item.sign] || { element: 'fire', modality: 'cardinal', rulingPlanet: 'mars' };
                  return (
                    <div
                      key={item.label}
                      className={`p-6 rounded-3xl glass-card border-l-4 ${item.color}`}
                    >
                      <div className={`text-xs font-bold uppercase tracking-widest ${item.iconColor} mb-1`}>{item.label}</div>
                      <div className="flex justify-between items-end">
                        <div className="text-2xl font-black">{t.zodiacSigns[item.sign]}</div>
                        {item.degree !== undefined && (
                          <div className="text-sm font-bold opacity-60 mb-1">{item.degree}°</div>
                        )}
                      </div>
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
                    </div>
                  );
                })}
              </div>

              {/* Houses & Aspects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="p-6 rounded-3xl glass-card"
                >
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Globe size={14} className="text-blue-500" />
                    {t.housesTitle}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {result.houses.map((sign, idx) => {
                      const attrs = signAttributes[sign] || { element: 'fire', modality: 'cardinal', rulingPlanet: 'mars' };
                      return (
                        <div key={idx} className="flex flex-col p-2 rounded-lg bg-white/5 gap-1">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="opacity-60">{t.houseLabel.replace('{n}', (idx + 1).toString())}</span>
                            <span className="font-bold text-indigo-400">{t.zodiacSigns[sign]}</span>
                          </div>
                          <div className="flex justify-between text-[8px] opacity-40 font-medium uppercase tracking-tighter">
                            <span>{t.elements[attrs.element]}</span>
                            <span>{t.modalities[attrs.modality]}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Astrological Aspects */}
              {result.aspects.length > 0 && (
                <div
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
                </div>
              )}
            </div>

            {/* Zodiac Profile Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Sparkles className="text-purple-500" size={16} />
                {t.zodiacSign} Profile
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: t.sunSignLabel, sign: result.birthChart.sunSign, degree: result.birthChart.sunDegree, house: result.birthChart.sunHouse, icon: Star, color: 'from-orange-400 to-red-500' },
                  { label: t.moonSignLabel, sign: result.birthChart.moonSign, degree: result.birthChart.moonDegree, house: result.birthChart.moonHouse, icon: Moon, color: 'from-indigo-400 to-blue-500' },
                  { label: t.risingSignLabel, sign: result.birthChart.risingSign, house: 1, icon: Sparkles, color: 'from-emerald-400 to-teal-500' },
                  { label: t.mercuryLabel, sign: result.planetaryPositions.mercury, degree: result.planetaryPositions.mercuryDegree, house: result.planetaryPositions.mercuryHouse, icon: Globe, color: 'from-yellow-400 to-orange-500' },
                  { label: t.venusLabel, sign: result.planetaryPositions.venus, degree: result.planetaryPositions.venusDegree, house: result.planetaryPositions.venusHouse, icon: Heart, color: 'from-pink-400 to-rose-500' },
                  { label: t.marsLabel, sign: result.planetaryPositions.mars, degree: result.planetaryPositions.marsDegree, house: result.planetaryPositions.marsHouse, icon: Zap, color: 'from-red-400 to-orange-600' },
                  { label: t.jupiterLabel, sign: result.planetaryPositions.jupiter, degree: result.planetaryPositions.jupiterDegree, house: result.planetaryPositions.jupiterHouse, icon: Award, color: 'from-orange-400 to-yellow-500' },
                  { label: t.saturnLabel, sign: result.planetaryPositions.saturn, degree: result.planetaryPositions.saturnDegree, house: result.planetaryPositions.saturnHouse, icon: Shield, color: 'from-stone-400 to-gray-600' },
                ].map((item, idx) => {
                  const attrs = signAttributes[item.sign] || { element: 'fire', modality: 'cardinal', rulingPlanet: 'mars' };
                  return (
                    <div 
                      key={idx}
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
                          {item.house !== undefined && (
                            <span className="px-2 py-1 rounded-lg bg-white/5 text-[8px] font-bold uppercase tracking-widest">
                              {t.houseLabel.replace('{n}', item.house.toString())}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Interpretations */}
              <div
                className="p-8 rounded-3xl glass-card border border-white/5"
              >
                <h3 className="text-xl font-black tracking-tight flex items-center gap-2 mb-6">
                  <BookOpen className="text-blue-500" size={16} />
                  {t.zodiacInterpretationsTitle}
                </h3>
                <div className="space-y-6">
                  {[
                    { label: t.sunSignLabel, sign: result.birthChart.sunSign, degree: result.birthChart.sunDegree, house: result.birthChart.sunHouse, icon: Star, color: 'text-orange-400', interpretation: t.sunSignInterpretations },
                    { label: t.moonSignLabel, sign: result.birthChart.moonSign, degree: result.birthChart.moonDegree, house: result.birthChart.moonHouse, icon: Moon, color: 'text-indigo-400', interpretation: t.moonSignInterpretations },
                    { label: t.risingSignLabel, sign: result.birthChart.risingSign, house: 1, icon: Sparkles, color: 'text-emerald-400', interpretation: t.risingSignInterpretations },
                    { label: t.mercuryLabel, sign: result.planetaryPositions.mercury, degree: result.planetaryPositions.mercuryDegree, house: result.planetaryPositions.mercuryHouse, icon: Globe, color: 'text-yellow-400', interpretation: t.mercurySignInterpretations },
                    { label: t.venusLabel, sign: result.planetaryPositions.venus, degree: result.planetaryPositions.venusDegree, house: result.planetaryPositions.venusHouse, icon: Heart, color: 'text-pink-400', interpretation: t.venusSignInterpretations },
                    { label: t.marsLabel, sign: result.planetaryPositions.mars, degree: result.planetaryPositions.marsDegree, house: result.planetaryPositions.marsHouse, icon: Zap, color: 'text-red-400', interpretation: t.marsSignInterpretations },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className={`p-3 rounded-2xl bg-white/5 ${item.color}`}>
                        <item.icon size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-widest opacity-60">{item.label}:</span>
                          <span className={`text-sm font-black ${item.color}`}>
                            {t.zodiacSigns[item.sign]}
                            {item.degree !== undefined && <span className="text-xs ml-1 opacity-60">({item.degree}°)</span>}
                          </span>
                          {item.house !== undefined && (
                            <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-blue-400 border border-white/10">
                              {t.houseLabel.replace('{n}', item.house.toString())}
                            </span>
                          )}
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
                            {item.interpretation[item.sign]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chinese Zodiac Interpretation */}
              <div
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
              </div>

              {/* Zodiac Signs Reference */}
              <div
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
                    <div
                      key={sign}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {holidayCountdown !== null && (
              <div
                className="p-8 rounded-3xl glass-card border border-emerald-500/30 space-y-4"
              >
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-black tracking-tight flex items-center justify-center gap-2 text-emerald-500">
                    <PartyPopper size={20} />
                    {t.holidayCountdownLabel}
                  </h3>
                  {holidayCountdown.days > 0 && (
                    <p className="text-sm opacity-60">
                      {t.daysUntilHoliday.replace('{days}', holidayCountdown.days.toString())}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: t.days, value: holidayCountdown.days },
                    { label: t.hours, value: holidayCountdown.hours },
                    { label: t.minutes, value: holidayCountdown.minutes },
                    { label: t.seconds, value: holidayCountdown.seconds },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center">
                      <span className="text-3xl font-black text-emerald-500 tabular-nums">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mt-1">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {ageRange && (
              <div
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
              </div>
            )}

            <div 
              className="space-y-4"
            >
              <div className={`p-8 rounded-3xl text-center font-bold text-lg glass border-blue-500/20 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                {t.ageSummary.replace('{years}', result.years.toString()).replace('{months}', result.months.toString()).replace('{days}', result.days.toString())}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleCopy}
                  title={t.tooltips.copy}
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
                  title={t.tooltips.share}
                  className={`py-4 border rounded-2xl flex items-center justify-center gap-3 font-bold transition-all active:scale-[0.98] group ${
                    copied 
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-500' 
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  }`}
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} className="group-hover:text-blue-400 transition-colors" />}
                  {copied ? t.copiedLabel : t.shareBtn}
                </button>
              </div>
            </div>
          </div>
        )}
      {/* </AnimatePresence> */}
    </div>
  );
};

export default AgeCalculator;
