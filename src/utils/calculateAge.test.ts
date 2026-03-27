import { describe, it, expect } from 'vitest';
import { calculateAge, calculateDateDifference } from './calculateAge';

describe('calculateDateDifference', () => {
  it('calculates exactly 1 year difference', () => {
    const start = new Date(2020, 0, 1);
    const end = new Date(2021, 0, 1);
    const result = calculateDateDifference(start, end);
    expect(result.years).toBe(1);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
  });

  it('calculates difference with months and days', () => {
    const start = new Date(2020, 0, 1);
    const end = new Date(2020, 2, 15);
    const result = calculateDateDifference(start, end);
    expect(result.years).toBe(0);
    expect(result.months).toBe(2);
    expect(result.days).toBe(14); // Jan 1 to Mar 15: Jan (31) + Feb (29 in 2020) + 15 = 75 days total? 
    // Wait, 2020 is leap year. Feb has 29 days.
    // Jan 1 to Feb 1 is 1 month.
    // Feb 1 to Mar 1 is 1 month.
    // Mar 1 to Mar 15 is 14 days.
  });

  it('handles borrowing days from previous month', () => {
    const start = new Date(2020, 0, 31);
    const end = new Date(2020, 1, 28);
    const result = calculateDateDifference(start, end);
    // Jan 31 to Feb 28. 
    // months = 1 - 0 = 1. days = 28 - 31 = -3.
    // days < 0: months--, days += prevMonth.getDate() (Jan has 31).
    // result: months = 0, days = 28.
    expect(result.months).toBe(0);
    expect(result.days).toBe(28);
  });

  it('handles leap years correctly', () => {
    const start = new Date(2020, 1, 28);
    const end = new Date(2020, 2, 1); // Mar 1, 2020
    const result = calculateDateDifference(start, end);
    expect(result.days).toBe(2); // Feb 28 to Feb 29 to Mar 1
  });
});

describe('calculateAge', () => {
  const fixedNow = new Date(2024, 2, 20, 12, 0, 0); // March 20, 2024, 12:00:00

  it('calculates age for someone born 20 years ago', () => {
    const dob = new Date(2004, 2, 20, 12, 0, 0);
    const result = calculateAge(dob, fixedNow);
    expect(result.years).toBe(20);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.nextBirthday.days).toBe(0);
  });

  it('calculates next birthday correctly when it is tomorrow', () => {
    const dob = new Date(1990, 2, 21, 12, 0, 0); // March 21
    const result = calculateAge(dob, fixedNow);
    expect(result.nextBirthday.days).toBe(1);
  });

  it('calculates next birthday correctly when it was yesterday', () => {
    const dob = new Date(1990, 2, 19, 12, 0, 0); // March 19
    const result = calculateAge(dob, fixedNow);
    // Next birthday will be in 2025
    expect(result.nextBirthday.days).toBeGreaterThan(360);
  });

  it('determines correct zodiac sign', () => {
    // Aries: March 21 - April 19
    const ariesDob = new Date(1990, 2, 21);
    expect(calculateAge(ariesDob, fixedNow).zodiacSign).toBe('aries');

    // Leo: July 23 - August 22
    const leoDob = new Date(1990, 6, 25);
    expect(calculateAge(leoDob, fixedNow).zodiacSign).toBe('leo');
  });

  it('determines correct birthstone', () => {
    expect(calculateAge(new Date(1990, 0, 1), fixedNow).birthstone).toBe('january');
    expect(calculateAge(new Date(1990, 11, 1), fixedNow).birthstone).toBe('december');
  });

  it('calculates life stats', () => {
    const dob = new Date(2023, 2, 20, 12, 0, 0); // 1 year old
    const result = calculateAge(dob, fixedNow);
    expect(result.lifeStats.heartbeats).toBeGreaterThan(0);
    expect(result.lifeStats.breaths).toBeGreaterThan(0);
  });

  it('determines correct chinese zodiac', () => {
    // 2000 is Year of the Dragon
    // signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
    // (2000 - 4) % 12 = 1996 % 12 = 4. Index 4 is "dragon".
    const dob = new Date(2000, 5, 1);
    expect(calculateAge(dob, fixedNow).chineseZodiac).toBe('dragon');
  });

  it('handles leap year birthday (Feb 29)', () => {
    const dob = new Date(2000, 1, 29); // Feb 29, 2000
    const now = new Date(2004, 1, 29); // Feb 29, 2004
    const result = calculateAge(dob, now);
    expect(result.years).toBe(4);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
  });

  it('calculates age correctly when birthday just passed', () => {
    const dob = new Date(1990, 2, 19, 12, 0, 0); // March 19
    const result = calculateAge(dob, fixedNow); // March 20
    expect(result.years).toBe(34);
    expect(result.months).toBe(0);
    expect(result.days).toBe(1);
  });

  it('calculates age correctly when birthday is today but time is earlier', () => {
    const dob = new Date(1990, 2, 20, 14, 0, 0); // March 20, 2:00 PM
    const result = calculateAge(dob, fixedNow); // March 20, 12:00 PM
    // Birthday is today but time is later, so age is 33 years, 11 months, 30 days?
    // Wait, the logic handles time borrowing.
    expect(result.years).toBe(33);
    expect(result.months).toBe(11);
    // March has 31 days. Feb has 29 (2024).
    // Let's check the logic.
  });
});
