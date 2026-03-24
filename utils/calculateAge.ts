export interface DateDiffResult {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMonths: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export interface AgeResult extends DateDiffResult {
  lunarAge: number;
  nextBirthday: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  zodiacSign: string;
  chineseZodiac: string;
  lunarPhase: string;
  birthstone: string;
  birthChart: {
    sunSign: string;
    sunDegree: number;
    sunHouse: number;
    moonSign: string;
    moonDegree: number;
    moonHouse: number;
    risingSign: string;
    risingDegree: number;
  };
  planetaryPositions: {
    mercury: string;
    mercuryDegree: number;
    mercuryHouse: number;
    venus: string;
    venusDegree: number;
    venusHouse: number;
    mars: string;
    marsDegree: number;
    marsHouse: number;
    jupiter: string;
    jupiterDegree: number;
    jupiterHouse: number;
    saturn: string;
    saturnDegree: number;
    saturnHouse: number;
    uranus: string;
    uranusDegree: number;
    uranusHouse: number;
    neptune: string;
    neptuneDegree: number;
    neptuneHouse: number;
    pluto: string;
    plutoDegree: number;
    plutoHouse: number;
  };
  houses: string[];
  aspects: {
    planet1: string;
    planet2: string;
    type: string;
  }[];
  lifeStats: {
    heartbeats: number;
    eyeBlinks: number;
    sleepDays: number;
    breaths: number;
  };
}

export const calculateDateDifference = (start: Date, end: Date): DateDiffResult => {
  const isNegative = start > end;
  const d1 = new Date(isNegative ? end : start);
  const d2 = new Date(isNegative ? start : end);

  let seconds = d2.getSeconds() - d1.getSeconds();
  let minutes = d2.getMinutes() - d1.getMinutes();
  let hours = d2.getHours() - d1.getHours();
  let days = d2.getDate() - d1.getDate();
  let months = d2.getMonth() - d1.getMonth();
  let years = d2.getFullYear() - d1.getFullYear();

  // Borrowing logic for time
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }

  // Borrowing logic for date
  if (days < 0) {
    months--;
    // Get days in the previous month
    const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalMs = d2.getTime() - d1.getTime();
  const totalSeconds = Math.floor(totalMs / 1000);
  const totalMinutes = Math.floor(totalMs / (1000 * 60));
  const totalHours = Math.floor(totalMs / (1000 * 60 * 60));
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const totalMonths = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
  const weeks = Math.floor(totalDays / 7);

  return {
    years: isNegative ? -years : years,
    months: isNegative ? -months : months,
    weeks: isNegative ? -weeks : weeks,
    days: isNegative ? -days : days,
    hours: isNegative ? -hours : hours,
    minutes: isNegative ? -minutes : minutes,
    seconds: isNegative ? -seconds : seconds,
    totalMonths,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds
  };
};

export const calculateAge = (dob: Date, now: Date = new Date()): AgeResult => {
  const diff = calculateDateDifference(dob, now);

  // Next Birthday Countdown
  let nextBirthdayDate = new Date(now.getFullYear(), dob.getMonth(), dob.getDate(), dob.getHours(), dob.getMinutes(), dob.getSeconds());
  if (nextBirthdayDate < now) {
    nextBirthdayDate.setFullYear(now.getFullYear() + 1);
  }
  const msToNext = nextBirthdayDate.getTime() - now.getTime();
  const nextBirthday = {
    days: Math.floor(msToNext / (1000 * 60 * 60 * 24)),
    hours: Math.floor((msToNext % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((msToNext % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((msToNext % (1000 * 60)) / 1000)
  };

  // Birthstone
  const birthstoneKeys = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];
  const birthstone = birthstoneKeys[dob.getMonth()];

  // Life Stats
  const lifeStats = {
    heartbeats: diff.totalMinutes * 80,
    eyeBlinks: diff.totalMinutes * 17.5,
    sleepDays: Math.floor(diff.totalDays * (8 / 24)),
    breaths: diff.totalMinutes * 16
  };

  // Lunar Age (Approximate lunar years: 354.367 days per lunar year)
  const lunarAge = Math.floor(diff.totalDays / 354.367);

  // Zodiac Sign & Degree
  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  let zodiacSign = "";
  let signStartDay = 0;
  let signStartMonth = 0;

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSign = "aquarius";
    signStartMonth = 1;
    signStartDay = 20;
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiacSign = "pisces";
    signStartMonth = 2;
    signStartDay = 19;
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    zodiacSign = "aries";
    signStartMonth = 3;
    signStartDay = 21;
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    zodiacSign = "taurus";
    signStartMonth = 4;
    signStartDay = 20;
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    zodiacSign = "gemini";
    signStartMonth = 5;
    signStartDay = 21;
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    zodiacSign = "cancer";
    signStartMonth = 6;
    signStartDay = 21;
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = "leo";
    signStartMonth = 7;
    signStartDay = 23;
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = "virgo";
    signStartMonth = 8;
    signStartDay = 23;
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    zodiacSign = "libra";
    signStartMonth = 9;
    signStartDay = 23;
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    zodiacSign = "scorpio";
    signStartMonth = 10;
    signStartDay = 23;
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    zodiacSign = "sagittarius";
    signStartMonth = 11;
    signStartDay = 22;
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    zodiacSign = "capricorn";
    signStartMonth = 12;
    signStartDay = 22;
  }

  // Calculate Sun Degree (Approximate: 1 degree per day)
  const signStartDate = new Date(dob.getFullYear(), signStartMonth - 1, signStartDay);
  if (signStartDate > dob) {
    signStartDate.setFullYear(dob.getFullYear() - 1);
  }
  const daysInSign = (dob.getTime() - signStartDate.getTime()) / (1000 * 60 * 60 * 24);
  const sunDegree = Math.floor(daysInSign % 30);

  // Chinese Zodiac (Approximate based on year)
  const chineseZodiacSigns = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
  const chineseZodiac = chineseZodiacSigns[((dob.getFullYear() - 4) % 12 + 12) % 12];

  // Lunar Phase (Approximate cycle 29.53 days)
  // New Moon Jan 6, 2000
  const refNewMoon = new Date(2000, 0, 6);
  const daysSinceNewMoon = (dob.getTime() - refNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const lunarCycleDay = (daysSinceNewMoon % 29.53 + 29.53) % 29.53;
  let lunarPhase = "";
  if (lunarCycleDay < 1.84) lunarPhase = "new_moon";
  else if (lunarCycleDay < 5.53) lunarPhase = "waxing_crescent";
  else if (lunarCycleDay < 9.22) lunarPhase = "first_quarter";
  else if (lunarCycleDay < 12.91) lunarPhase = "waxing_gibbous";
  else if (lunarCycleDay < 16.61) lunarPhase = "full_moon";
  else if (lunarCycleDay < 20.3) lunarPhase = "waning_gibbous";
  else if (lunarCycleDay < 23.99) lunarPhase = "last_quarter";
  else if (lunarCycleDay < 27.68) lunarPhase = "waning_crescent";
  else lunarPhase = "new_moon";

  // Birth Chart Calculations (Simplified)
  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ];
  
  const wrapIndex = (i: number) => ((i % 12) + 12) % 12;
  
  const sunSignIndex = wrapIndex(signs.indexOf(zodiacSign));
  
  // Moon Sign Approximation (Cycle of ~27.32 days)
  const refDate = new Date(2000, 0, 1);
  const daysSinceRef = (dob.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24);
  const moonDaysPerSign = 27.32 / 12;
  const moonSignIndex = wrapIndex(Math.floor(daysSinceRef / moonDaysPerSign) + 6);
  const moonSign = signs[moonSignIndex];
  const moonDegree = Math.floor((Math.abs(daysSinceRef) % moonDaysPerSign) / moonDaysPerSign * 30);

  // Rising Sign Approximation (Depends on Sun sign and birth time)
  const birthTimeInHours = dob.getHours() + dob.getMinutes() / 60;
  const risingSignIndex = wrapIndex(sunSignIndex + Math.floor((birthTimeInHours - 6 + 24) / 2));
  const risingSign = signs[risingSignIndex];
  const risingDegree = Math.floor(((birthTimeInHours - 6 + 24) % 2) / 2 * 30);

  // For each planet, calculate its house (Simplified: 1st house starts at Rising Sign)
  const getHouse = (planetSignIndex: number) => wrapIndex(planetSignIndex - risingSignIndex) + 1;

  // Planetary Positions (Simplified approximations based on orbital periods)
  // Mercury: ~88 days, Venus: ~225 days, Mars: ~687 days
  // Jupiter: ~4333 days, Saturn: ~10759 days, Uranus: ~30687 days, Neptune: ~60190 days, Pluto: ~90560 days
  const mercuryDaysPerSign = 88 / 12;
  const venusDaysPerSign = 225 / 12;
  const marsDaysPerSign = 687 / 12;
  const jupiterDaysPerSign = 4333 / 12;
  const saturnDaysPerSign = 10759 / 12;
  const uranusDaysPerSign = 30687 / 12;
  const neptuneDaysPerSign = 60190 / 12;
  const plutoDaysPerSign = 90560 / 12;

  const mercurySignIndex = wrapIndex(Math.floor(daysSinceRef / mercuryDaysPerSign) + 9);
  const venusSignIndex = wrapIndex(Math.floor(daysSinceRef / venusDaysPerSign) + 10);
  const marsSignIndex = wrapIndex(Math.floor(daysSinceRef / marsDaysPerSign) + 5);
  const jupiterSignIndex = wrapIndex(Math.floor(daysSinceRef / jupiterDaysPerSign) + 1);
  const saturnSignIndex = wrapIndex(Math.floor(daysSinceRef / saturnDaysPerSign) + 2);
  const uranusSignIndex = wrapIndex(Math.floor(daysSinceRef / uranusDaysPerSign) + 3);
  const neptuneSignIndex = wrapIndex(Math.floor(daysSinceRef / neptuneDaysPerSign) + 4);
  const plutoSignIndex = wrapIndex(Math.floor(daysSinceRef / plutoDaysPerSign) + 5);

  const mercuryDegree = Math.floor((Math.abs(daysSinceRef) % mercuryDaysPerSign) / mercuryDaysPerSign * 30);
  const venusDegree = Math.floor((Math.abs(daysSinceRef) % venusDaysPerSign) / venusDaysPerSign * 30);
  const marsDegree = Math.floor((Math.abs(daysSinceRef) % marsDaysPerSign) / marsDaysPerSign * 30);
  const jupiterDegree = Math.floor((Math.abs(daysSinceRef) % jupiterDaysPerSign) / jupiterDaysPerSign * 30);
  const saturnDegree = Math.floor((Math.abs(daysSinceRef) % saturnDaysPerSign) / saturnDaysPerSign * 30);
  const uranusDegree = Math.floor((Math.abs(daysSinceRef) % uranusDaysPerSign) / uranusDaysPerSign * 30);
  const neptuneDegree = Math.floor((Math.abs(daysSinceRef) % neptuneDaysPerSign) / neptuneDaysPerSign * 30);
  const plutoDegree = Math.floor((Math.abs(daysSinceRef) % plutoDaysPerSign) / plutoDaysPerSign * 30);

  const planetaryPositions = {
    mercury: signs[mercurySignIndex],
    mercuryDegree,
    mercuryHouse: getHouse(mercurySignIndex),
    venus: signs[venusSignIndex],
    venusDegree,
    venusHouse: getHouse(venusSignIndex),
    mars: signs[marsSignIndex],
    marsDegree,
    marsHouse: getHouse(marsSignIndex),
    jupiter: signs[jupiterSignIndex],
    jupiterDegree,
    jupiterHouse: getHouse(jupiterSignIndex),
    saturn: signs[saturnSignIndex],
    saturnDegree,
    saturnHouse: getHouse(saturnSignIndex),
    uranus: signs[uranusSignIndex],
    uranusDegree,
    uranusHouse: getHouse(uranusSignIndex),
    neptune: signs[neptuneSignIndex],
    neptuneDegree,
    neptuneHouse: getHouse(neptuneSignIndex),
    pluto: signs[plutoSignIndex],
    plutoDegree,
    plutoHouse: getHouse(plutoSignIndex)
  };

  // Houses (Simplified: 1st house starts at Rising Sign)
  const houses = Array.from({ length: 12 }, (_, i) => signs[(risingSignIndex + i) % 12]);

  // Aspects (Simplified calculation between major planets)
  const planetPositions = [
    { name: 'sun', index: sunSignIndex },
    { name: 'moon', index: moonSignIndex },
    { name: 'mercury', index: mercurySignIndex },
    { name: 'venus', index: venusSignIndex },
    { name: 'mars', index: marsSignIndex },
    { name: 'jupiter', index: jupiterSignIndex },
    { name: 'saturn', index: saturnSignIndex },
    { name: 'uranus', index: uranusSignIndex },
    { name: 'neptune', index: neptuneSignIndex },
    { name: 'pluto', index: plutoSignIndex },
  ];

  const aspects: { planet1: string; planet2: string; type: string }[] = [];
  for (let i = 0; i < planetPositions.length; i++) {
    for (let j = i + 1; j < planetPositions.length; j++) {
      const p1 = planetPositions[i];
      const p2 = planetPositions[j];
      const diff = Math.abs(p1.index - p2.index);
      const dist = diff > 6 ? 12 - diff : diff; // Shortest distance in signs

      let type = '';
      if (dist === 0) type = 'conjunction';
      else if (dist === 2) type = 'sextile';
      else if (dist === 3) type = 'square';
      else if (dist === 4) type = 'trine';
      else if (dist === 6) type = 'opposition';

      if (type) {
        aspects.push({ planet1: p1.name, planet2: p2.name, type });
      }
    }
  }

  const birthChart = {
    sunSign: zodiacSign,
    sunDegree,
    sunHouse: getHouse(sunSignIndex),
    moonSign,
    moonDegree,
    moonHouse: getHouse(moonSignIndex),
    risingSign,
    risingDegree
  };

  return {
    ...diff,
    lunarAge,
    nextBirthday,
    zodiacSign,
    chineseZodiac,
    lunarPhase,
    birthstone,
    birthChart,
    planetaryPositions,
    houses,
    aspects,
    lifeStats
  };
};
