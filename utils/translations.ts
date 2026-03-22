export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'hi';

export interface TranslationSet {
  title: string;
  subtitle: string;
  dobLabel: string;
  timezoneLabel: string;
  birthTimeLabel: string;
  calculateBtn: string;
  resultsTitle: string;
  ageLabel: string;
  lunarAge: string;
  years: string;
  months: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  hourLabel: string;
  minuteLabel: string;
  dayLabel: string;
  monthLabel: string;
  yearLabel: string;
  nextBirthday: string;
  zodiacSign: string;
  birthstone: string;
  lifeStatsTitle: string;
  heartbeats: string;
  eyeBlinks: string;
  sleepTime: string;
  breathCount: string;
  weeks: string;
  ageSummary: string;
  errorInvalidDate: string;
  errorFutureDate: string;
  errorInvalidYear: string;
  errorBirthAfterTarget: string;
  errorStartDateAfterEndDate: string;
  errorInvalidPrice: string;
  errorInvalidDiscount: string;
  date1Label: string;
  date2Label: string;
  compareBtn: string;
  differenceTitle: string;
  differenceSummary: string;
  footerText: string;
  seoTitle: string;
  seoDescription: string;
  selectLanguage: string;
  shareBtn: string;
  copyBtn: string;
  copiedLabel: string;
  holidayLabel: string;
  daysUntilHoliday: string;
  dobRangeEndLabel: string;
  ageRangeSummary: string;
  easterDate: string;
  targetYearLabel: string;
  holidayCountdownLabel: string;
  bmiCalculator: string;
  discountCalculator: string;
  weightLabel: string;
  heightLabel: string;
  originalPriceLabel: string;
  discountPercentageLabel: string;
  calculateBmiBtn: string;
  calculateDiscountBtn: string;
  weightPlaceholder: string;
  heightPlaceholder: string;
  bmiResult: string;
  bmiCategory: string;
  discountResult: string;
  savingsLabel: string;
  birthChartTitle: string;
  birthLocationLabel: string;
  sunSignLabel: string;
  moonSignLabel: string;
  risingSignLabel: string;
  chineseZodiacLabel: string;
  lunarPhaseLabel: string;
  planetaryPositionsTitle: string;
  housesTitle: string;
  mercuryLabel: string;
  venusLabel: string;
  marsLabel: string;
  houseLabel: string;
  elementLabel: string;
  modalityLabel: string;
  rulingPlanetLabel: string;
  degreeLabel: string;
  aspectsTitle: string;
  aspectTypes: Record<string, string>;
  aspectDescriptions: Record<string, string>;
  planetNames: Record<string, string>;
  planetMeanings: Record<string, string>;
  zodiacInterpretationsTitle: string;
  zodiacReferenceTitle: string;
  lightMode: string;
  darkMode: string;
  zodiacSigns: Record<string, string>;
  zodiacDescriptions: Record<string, string>;
  chineseZodiacSigns: Record<string, string>;
  chineseZodiacDescriptions: Record<string, string>;
  lunarPhases: Record<string, string>;
  birthstones: Record<string, string>;
  elements: Record<string, string>;
  modalities: Record<string, string>;
  rulingPlanets: Record<string, string>;
  elementMeanings: Record<string, string>;
  modalityMeanings: Record<string, string>;
  rulingPlanetMeanings: Record<string, string>;
  sunSignDetailedDescription: string;
  sunSignInterpretations: Record<string, string>;
  moonSignInterpretations: Record<string, string>;
  risingSignInterpretations: Record<string, string>;
  mercurySignInterpretations: Record<string, string>;
  venusSignInterpretations: Record<string, string>;
  marsSignInterpretations: Record<string, string>;
}

export const translations: Record<LanguageCode, TranslationSet> = {
  en: {
    title: 'Utility Hub Pro',
    subtitle: 'All-in-one professional utility tools. Calculate your exact age, BMI fitness levels, and shopping discounts instantly.',
    dobLabel: 'Date of Birth',
    timezoneLabel: 'Timezone',
    calculateBtn: 'Calculate Age',
    resultsTitle: 'Your Exact Age',
    ageLabel: 'Age',
    lunarAge: 'Lunar Age',
    years: 'Years',
    months: 'Months',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    hourLabel: 'Hour',
    minuteLabel: 'Minute',
    dayLabel: 'Day',
    monthLabel: 'Month',
    yearLabel: 'Year',
    nextBirthday: 'Next Birthday',
    zodiacSign: 'Zodiac Sign',
    birthstone: 'Birthstone',
    lifeStatsTitle: 'Life Statistics (Estimated)',
    heartbeats: 'Heartbeats',
    eyeBlinks: 'Eye Blinks',
    sleepTime: 'Time Spent Sleeping',
    breathCount: 'Breaths Taken',
    weeks: 'Weeks',
    ageSummary: 'You are {years} years, {months} months, and {days} days old.',
    errorInvalidDate: 'Please enter a valid date.',
    errorFutureDate: 'Date of birth cannot be in the future.',
    errorInvalidYear: 'Please enter a valid year.',
    errorBirthAfterTarget: 'Date of birth cannot be after the target year.',
    errorStartDateAfterEndDate: 'Start date cannot be after end date.',
    errorInvalidPrice: 'Please enter a valid positive price.',
    errorInvalidDiscount: 'Discount must be between 0 and 100.',
    date1Label: 'Start Date',
    date2Label: 'End Date',
    compareBtn: 'Calculate Difference',
    differenceTitle: 'Time Difference',
    differenceSummary: 'The difference is {years} years, {months} months, and {days} days.',
    footerText: '© 2026 Utility Hub Pro. All rights reserved.',
    seoTitle: 'Why use an Age Calculator?',
    seoDescription: 'An age calculator is a tool that helps you determine the exact time elapsed since your birth. It is useful for legal documents, health tracking, and planning celebrations.',
    selectLanguage: 'Language',
    shareBtn: 'Share Results',
    copyBtn: 'Copy to Clipboard',
    copiedLabel: 'Copied!',
    holidayLabel: 'Upcoming Holiday (Optional)',
    daysUntilHoliday: '{days} days until your holiday!',
    dobRangeEndLabel: 'Birthdate Range End (Optional)',
    ageRangeSummary: 'Your age range is between {min} and {max}.',
    easterDate: 'Easter Date {year}',
    targetYearLabel: 'Target Year (Optional)',
    holidayCountdownLabel: 'Countdown to Holiday',
    bmiCalculator: 'BMI Calculator',
    discountCalculator: 'Discount Calculator',
    weightLabel: 'Weight (kg)',
    heightLabel: 'Height (cm)',
    originalPriceLabel: 'Original Price',
    discountPercentageLabel: 'Discount %',
    calculateBmiBtn: 'Calculate BMI',
    calculateDiscountBtn: 'Calculate Discount',
    weightPlaceholder: 'e.g. 70',
    heightPlaceholder: 'e.g. 175',
    bmiResult: 'Your BMI is {bmi}',
    bmiCategory: 'Category: {category}',
    discountResult: 'Final Price: {price}',
    savingsLabel: 'You save: {savings}',
    birthChartTitle: 'Your Birth Chart',
    birthLocationLabel: 'Birth Location (City, Country)',
    birthTimeLabel: 'Birth Time',
    sunSignLabel: 'Sun Sign',
    moonSignLabel: 'Moon Sign',
    risingSignLabel: 'Rising Sign',
    chineseZodiacLabel: 'Chinese Zodiac',
    lunarPhaseLabel: 'Lunar Phase',
    planetaryPositionsTitle: 'Planetary Positions',
    housesTitle: 'Astrological Houses',
    mercuryLabel: 'Mercury',
    venusLabel: 'Venus',
    marsLabel: 'Mars',
    houseLabel: 'House {n}',
    elementLabel: 'Element',
    modalityLabel: 'Modality',
    rulingPlanetLabel: 'Ruling Planet',
    degreeLabel: 'Degree',
    aspectsTitle: 'Astrological Aspects',
    aspectTypes: {
      conjunction: 'Conjunction',
      sextile: 'Sextile',
      square: 'Square',
      trine: 'Trine',
      opposition: 'Opposition'
    },
    aspectDescriptions: {
      conjunction: 'Planets are positioned close together, merging their energies. This creates a powerful, unified force that intensifies the qualities of both planets, often acting as a single, potent influence in your life.',
      sextile: 'A harmonious 60-degree angle that creates a supportive and friendly connection between planets. It represents latent talents and opportunities that require a bit of effort to fully activate and benefit from.',
      square: 'A challenging 90-degree angle that creates dynamic tension and friction. It acts as a catalyst for growth, pushing you to overcome internal or external obstacles and develop strength through struggle.',
      trine: 'A highly favorable 120-degree angle where energies flow naturally and effortlessly. It represents innate gifts, luck, and areas of life where things seem to fall into place without much resistance.',
      opposition: 'Planets are 180 degrees apart, creating a "see-saw" effect. This aspect highlights a need for balance and compromise between two opposing areas of your life, often manifesting through relationships or external mirrors.'
    },
    planetNames: {
      sun: 'Sun',
      moon: 'Moon',
      mercury: 'Mercury',
      venus: 'Venus',
      mars: 'Mars'
    },
    planetMeanings: {
      sun: 'Represents your core identity, ego, and life force.',
      moon: 'Governs your emotions, instincts, and inner self.',
      mercury: 'Rules communication, intellect, and reasoning.',
      venus: 'Influences love, beauty, and personal values.',
      mars: 'Drives action, energy, and physical desire.',
      rising: 'Represents your social personality and how others perceive you.'
    },
    zodiacInterpretationsTitle: 'Zodiac Interpretations',
    zodiacReferenceTitle: 'Explore the 12 Zodiac Signs',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    zodiacSigns: {
      aquarius: 'Aquarius', pisces: 'Pisces', aries: 'Aries', taurus: 'Taurus',
      gemini: 'Gemini', cancer: 'Cancer', leo: 'Leo', virgo: 'Virgo',
      libra: 'Libra', scorpio: 'Scorpio', sagittarius: 'Sagittarius', capricorn: 'Capricorn'
    },
    zodiacDescriptions: {
      aquarius: 'Innovative, progressive, and humanitarian. They are visionary thinkers who value independence, originality, and the collective well-being of society.',
      pisces: 'Compassionate, artistic, and intuitive. They are dreamy and sensitive, possessing a deep connection to the spiritual realm and the collective unconscious.',
      aries: 'Eager, dynamic, and quick-witted. As the first sign, they are pioneers, courageous, and possess a strong drive for action and leadership.',
      taurus: 'Strong, dependable, and sensual. They value stability, comfort, and tangible results, often possessing great endurance and appreciation for beauty.',
      gemini: 'Versatile, expressive, and curious. They are intellectual chameleons who thrive on variety, communication, and the exchange of ideas.',
      cancer: 'Intuitive, sentimental, and compassionate. They are deeply connected to home and family, possessing a protective nature and strong emotional depth.',
      leo: 'Dramatic, outgoing, and self-assured. They are natural leaders who radiate warmth and creativity, seeking to inspire and be recognized for their unique gifts.',
      virgo: 'Loyal, analytical, and kind. They are meticulous perfectionists who seek to understand the world through order, health, and a desire to be of service.',
      libra: 'Diplomatic, artistic, and intelligent. They seek balance and harmony in all things, valuing partnership, fairness, and aesthetic beauty.',
      scorpio: 'Passionate, stubborn, and resourceful. They are intense and transformative, possessing a magnetic presence and a need to uncover hidden truths.',
      sagittarius: 'Extroverted, optimistic, and funny. They are philosophical adventurers who seek truth and expansion through travel, learning, and freedom.',
      capricorn: 'Serious, independent, and disciplined. They are ambitious builders who value tradition, hard work, and achieving long-term goals with integrity.'
    },
    chineseZodiacSigns: {
      rat: 'Rat', ox: 'Ox', tiger: 'Tiger', rabbit: 'Rabbit', dragon: 'Dragon', snake: 'Snake',
      horse: 'Horse', goat: 'Goat', monkey: 'Monkey', rooster: 'Rooster', dog: 'Dog', pig: 'Pig'
    },
    chineseZodiacDescriptions: {
      rat: 'Quick-witted, resourceful, versatile, kind.',
      ox: 'Diligent, dependable, strong, determined.',
      tiger: 'Brave, confident, competitive, unpredictable.',
      rabbit: 'Quiet, elegant, kind, responsible.',
      dragon: 'Confident, intelligent, enthusiastic.',
      snake: 'Enigmatic, intelligent, wise.',
      horse: 'Animated, active, energetic.',
      goat: 'Calm, gentle, sympathetic.',
      monkey: 'Sharp, smart, curiosity.',
      rooster: 'Observant, hardworking, courageous.',
      dog: 'Lovely, honest, prudent.',
      pig: 'Compassionate, generous, diligent.'
    },
    lunarPhases: {
      new_moon: 'New Moon', waxing_crescent: 'Waxing Crescent', first_quarter: 'First Quarter',
      waxing_gibbous: 'Waxing Gibbous', full_moon: 'Full Moon', waning_gibbous: 'Waning Gibbous',
      last_quarter: 'Last Quarter', waning_crescent: 'Waning Crescent'
    },
    birthstones: {
      january: 'Garnet', february: 'Amethyst', march: 'Aquamarine', april: 'Diamond',
      may: 'Emerald', june: 'Pearl', july: 'Ruby', august: 'Peridot',
      september: 'Sapphire', october: 'Opal', november: 'Topaz', december: 'Turquoise'
    },
    elements: {
      fire: 'Fire', earth: 'Earth', air: 'Air', water: 'Water'
    },
    modalities: {
      cardinal: 'Cardinal', fixed: 'Fixed', mutable: 'Mutable'
    },
    rulingPlanets: {
      sun: 'Sun', moon: 'Moon', mercury: 'Mercury', venus: 'Venus', mars: 'Mars',
      jupiter: 'Jupiter', saturn: 'Saturn', uranus: 'Uranus', neptune: 'Neptune', pluto: 'Pluto'
    },
    elementMeanings: {
      fire: 'Fire signs are energetic, passionate, and dynamic. They are known for their creativity, leadership, and drive.',
      earth: 'Earth signs are grounded, practical, and reliable. They value stability, hard work, and material security.',
      air: 'Air signs are intellectual, social, and communicative. They are known for their ideas, objectivity, and social skills.',
      water: 'Water signs are emotional, intuitive, and sensitive. They are deeply connected to their feelings and the feelings of others.'
    },
    modalityMeanings: {
      cardinal: 'Cardinal signs are the initiators of the zodiac. They are ambitious, enterprising, and like to start new projects.',
      fixed: 'Fixed signs are the builders of the zodiac. They are persistent, stable, and like to maintain and improve existing things.',
      mutable: 'Mutable signs are the adapters of the zodiac. They are flexible, versatile, and like to go with the flow.'
    },
    rulingPlanetMeanings: {
      mars: 'Mars represents energy, action, and desire. It rules our drive, ambition, and physical energy.',
      venus: 'Venus represents love, beauty, and harmony. It rules our values, relationships, and aesthetic sense.',
      mercury: 'Mercury represents communication, intellect, and travel. It rules our thoughts, logic, and how we process information.',
      moon: 'The Moon represents emotions, intuition, and the subconscious. It rules our inner world and emotional needs.',
      sun: 'The Sun represents the core self, ego, and vitality. It rules our basic personality and life force.',
      pluto: 'Pluto represents transformation, power, and rebirth. It rules deep change and the subconscious mind.',
      jupiter: 'Jupiter represents expansion, luck, and wisdom. It rules our growth, philosophy, and higher learning.',
      saturn: 'Saturn represents structure, discipline, and responsibility. It rules our boundaries, lessons, and long-term goals.',
      uranus: 'Uranus represents innovation, rebellion, and sudden change. It rules our originality and future-oriented thinking.',
      neptune: 'Neptune represents dreams, intuition, and spirituality. It rules our imagination and connection to the divine.'
    },
    sunSignDetailedDescription: 'The Sun represents your core identity, your conscious mind, and your creative life force. It is the "I am" of your personality, showing how you shine and where you seek to express your unique individuality. It governs your basic character, your ego, and your primary motivations in life.',
    sunSignInterpretations: {
      aries: 'As an Aries Sun, you are the pioneer of the zodiac, embodying the raw energy of spring and new beginnings. Ruled by Mars, your core identity is defined by courage, initiative, and an unquenchable thirst for action. You possess a natural leadership quality and a direct approach to life that allows you to tackle challenges head-on. Your journey is about learning to channel your immense vitality into sustained achievements while developing patience and consideration for others. You thrive when you are initiating new projects and leading the way with infectious enthusiasm.',
      taurus: 'As a Taurus Sun, you are the anchor of the zodiac, seeking stability, beauty, and tangible results in all you do. Ruled by Venus, your essence is rooted in the physical world and a deep need for security. You possess an incredible capacity for endurance and loyalty, acting as a steady force for those around you. You appreciate fine craftsmanship and the simple pleasures of life. Your path involves building a life of lasting value and finding true inner stability that transcends material wealth, while overcoming a tendency toward stubbornness and resistance to change.',
      gemini: 'As a Gemini Sun, you are driven by an insatiable curiosity and a profound need for communication and variety. Ruled by Mercury, your mind is exceptionally versatile, quick, and adaptable. You seek to understand the world through the exchange of information and social interaction, often possessing a dual nature that allows you to see multiple perspectives simultaneously. Your journey is about learning to focus your scattered interests and finding depth amidst the breadth of your knowledge. You thrive in environments that challenge your intellect and allow you to connect with a wide range of people.',
      cancer: 'As a Cancer Sun, you are deeply intuitive and emotionally sensitive, with a core identity tied to home, family, and a need for emotional security. Ruled by the Moon, you are naturally nurturing, protective, and possess a strong connection to your past and inner feelings. You approach life with a cautious but deeply caring heart, often acting as the emotional glue in your relationships. Your path involves learning to establish healthy boundaries while embracing your vulnerability as a source of strength. You thrive when you feel safe and are able to care for those you love.',
      leo: 'As a Leo Sun, you are creative, expressive, and possess a natural desire to be recognized for your unique gifts. Ruled by the Sun itself, your energy is warm, generous, and charismatic. You approach life with a sense of drama and a desire to lead, often possessing a strong sense of pride and a need for appreciation. Your journey is about learning to lead from the heart with humility, using your creative fire to inspire others rather than just seeking attention. You thrive when you are able to express yourself authentically and receive the warmth of others\' approval.',
      virgo: 'As a Virgo Sun, you are analytical, practical, and deeply oriented toward service and self-improvement. Ruled by Mercury, you seek to understand the world through order, health, and precision. You possess a keen eye for detail and a desire to be useful, often finding fulfillment in helping others and refining your skills. Your path involves learning to balance your critical nature with self-compassion, understanding that perfection is an elusive goal. You thrive in environments where you can apply your intellect to solve practical problems and create meaningful order.',
      libra: 'As a Libra Sun, you seek balance, harmony, and partnership in every aspect of your life. Ruled by Venus, your identity is deeply tied to your relationships and your innate sense of justice. You are diplomatic, artistic, and socially graceful, often striving to see all sides of a situation to find a fair and peaceful resolution. Your journey is about learning to find your own inner balance and making decisions that reflect your true self, rather than just seeking to please others. You thrive in collaborative environments where beauty and fairness are valued.',
      scorpio: 'As a Scorpio Sun, you are intense, passionate, and deeply resourceful, with a need to understand the hidden depths of life. Ruled by Pluto and Mars, you possess a strong will and a magnetic presence that draws others in. You are not afraid of transformation and often seek emotional truth above all else. Your path involves learning to use your power for healing and regeneration rather than control or secrecy. You thrive when you are engaged in deep, meaningful work or relationships that challenge you to grow and evolve.',
      sagittarius: 'As a Sagittarius Sun, you are optimistic, adventurous, and seek meaning through the exploration of the world and ideas. Ruled by Jupiter, your energy is expansive, freedom-loving, and philosophical. You approach life with a desire for truth and a great sense of humor, often acting as a bridge between different cultures and perspectives. Your journey is about learning to ground your lofty ideals in practical reality while maintaining your sense of wonder. You thrive when you have the freedom to travel, learn, and share your wisdom with others.',
      capricorn: 'As a Capricorn Sun, you are disciplined, ambitious, and seek to build something of lasting value in the world. Ruled by Saturn, you value hard work, responsibility, and tradition. You approach life with a serious and practical mindset, often possessing a strong sense of integrity and a desire for achievement. Your path involves learning to balance your professional ambitions with your emotional needs, finding joy in the journey as much as the destination. You thrive in structured environments where your persistence and leadership can lead to tangible success.',
      aquarius: 'As an Aquarius Sun, you are innovative, independent, and seek to improve society through your unique ideas and humanitarian ideals. Ruled by Uranus and Saturn, you are progressive, intellectual, and often possess a rebellious or unconventional nature. You value friendship and collective effort, often acting as a visionary for a better future. Your journey is about learning to connect your brilliant mind with your heart, finding ways to be part of the community without losing your individuality. You thrive in environments that value original thinking and social progress.',
      pisces: 'As a Pisces Sun, you are compassionate, artistic, and deeply intuitive, with a core identity tied to your imagination and the spiritual realm. Ruled by Neptune and Jupiter, you are empathetic, sensitive, and often possess a dreamy or mystical nature. You seek to understand the world through feelings and a connection to the collective unconscious. Your path involves learning to ground your sensitive nature and establish boundaries, using your creative gifts to bring healing and beauty to the world. You thrive in environments that allow for quiet reflection, creativity, and spiritual exploration.'
    },
    moonSignInterpretations: {
      aries: 'Your emotional world is fast-paced and passionate. You react to life with immediate feelings and a need for independence. You find comfort in action and may have a quick-tempered but quickly forgiven emotional style.',
      taurus: 'You seek emotional stability and physical comfort. You are steady, loyal, and find peace in nature and the senses. You may be slow to react emotionally but possess great endurance.',
      gemini: 'Your emotions are intellectualized and communicative. You find comfort in variety, learning, and social interaction. You may experience rapidly changing moods and a need to talk through your feelings.',
      cancer: 'You are deeply sensitive and nurturing. Your emotions are tied to your home and family. You possess a strong memory and a need for emotional security and belonging.',
      leo: 'Your emotions are dramatic, warm, and generous. You seek appreciation and find comfort in creative expression and being the center of attention for those you love.',
      virgo: 'You process emotions through analysis and service. You find comfort in order, health, and being useful. You may be self-critical and seek to improve your emotional well-being through practical steps.',
      libra: 'You seek emotional balance and harmony through relationships. You are naturally diplomatic and find comfort in beauty and partnership. You may struggle with indecisiveness when emotions are involved.',
      scorpio: 'Your emotional life is intense, private, and transformative. You seek deep emotional truth and possess great resilience. You may experience powerful feelings that you keep hidden from the world.',
      sagittarius: 'Your emotions are expansive, optimistic, and freedom-loving. You find comfort in exploration, philosophy, and a good sense of humor. You seek emotional growth through new experiences.',
      capricorn: 'You are emotionally disciplined, serious, and reserved. You find comfort in structure, achievement, and tradition. You may struggle to express vulnerability but possess great emotional integrity.',
      aquarius: 'Your emotions are intellectualized, independent, and humanitarian. You find comfort in friendship and unique ideas. You may appear detached but possess a deep concern for the collective well-being.',
      pisces: 'You are deeply empathetic, imaginative, and intuitive. Your emotions are fluid and tied to the spiritual realm. You find comfort in creativity and may be highly sensitive to the feelings of others.'
    },
    risingSignInterpretations: {
      aries: 'You project a dynamic, energetic, and pioneering personality. Others see you as courageous, direct, and someone who takes the lead. You approach the world with enthusiasm and a desire for new beginnings.',
      taurus: 'You project a steady, reliable, and calm personality. Others see you as grounded, appreciative of beauty, and someone who values quality. You approach the world with patience and a practical mindset.',
      gemini: 'You project a versatile, communicative, and curious personality. Others see you as quick-witted, sociable, and intellectually engaged. You approach the world with a desire for information and variety.',
      cancer: 'You project a nurturing, sensitive, and approachable personality. Others see you as caring, intuitive, and someone who values home and family. You approach the world with a cautious but warm heart.',
      leo: 'You project a charismatic, creative, and confident personality. Others see you as warm, generous, and someone who naturally leads. You approach the world with a sense of drama and a desire to be seen.',
      virgo: 'You project an analytical, practical, and helpful personality. Others see you as detail-oriented, efficient, and someone who values health and order. You approach the world with a desire to be useful.',
      libra: 'You project a diplomatic, artistic, and socially graceful personality. Others see you as fair-minded, charming, and someone who values harmony. You approach the world with a desire for balance and partnership.',
      scorpio: 'You project an intense, magnetic, and private personality. Others see you as powerful, resourceful, and someone who seeks depth. You approach the world with a strong will and a need for truth.',
      sagittarius: 'You project an optimistic, adventurous, and freedom-loving personality. Others see you as philosophical, funny, and someone who seeks meaning. You approach the world with a sense of wonder and exploration.',
      capricorn: 'You project a disciplined, ambitious, and serious personality. Others see you as responsible, professional, and someone who values achievement. You approach the world with a practical and structured mindset.',
      aquarius: 'You project an innovative, independent, and unique personality. Others see you as progressive, intellectual, and someone who values humanitarian ideals. You approach the world with original ideas.',
      pisces: 'You project a compassionate, imaginative, and intuitive personality. Others see you as empathetic, sensitive, and someone with a mystical nature. You approach the world with a dreamy and gentle presence.'
    },
    mercurySignInterpretations: {
      aries: 'Direct, quick, and assertive communication. You think fast and speak your mind.',
      taurus: 'Practical, steady, and deliberate thinking. You value concrete facts and logic.',
      gemini: 'Versatile, curious, and highly communicative. You process information rapidly.',
      cancer: 'Intuitive, emotional, and retentive memory. Your thinking is tied to feelings.',
      leo: 'Creative, expressive, and confident communication. You speak with authority.',
      virgo: 'Analytical, precise, and detail-oriented. You seek order and clarity in thought.',
      libra: 'Diplomatic, balanced, and fair-minded. You seek harmony in communication.',
      scorpio: 'Intense, investigative, and deep thinking. You seek to uncover hidden truths.',
      sagittarius: 'Optimistic, philosophical, and broad-minded. You seek truth and expansion.',
      capricorn: 'Disciplined, structured, and practical thinking. You value logic and tradition.',
      aquarius: 'Innovative, original, and unconventional. You think outside the box.',
      pisces: 'Intuitive, imaginative, and poetic. Your thinking is fluid and sensitive.'
    },
    venusSignInterpretations: {
      aries: 'Passionate, direct, and independent in love. You value excitement and initiative.',
      taurus: 'Sensual, loyal, and seeking stability. You value comfort and physical touch.',
      gemini: 'Versatile, social, and communicative. You value intellectual connection and variety.',
      cancer: 'Nurturing, sensitive, and seeking security. You value home and emotional depth.',
      leo: 'Dramatic, generous, and seeking appreciation. You value warmth and creativity.',
      virgo: 'Practical, helpful, and seeking improvement. You value service and order in love.',
      libra: 'Diplomatic, artistic, and seeking balance. You value harmony and partnership.',
      scorpio: 'Intense, private, and transformative. You value deep emotional truth and loyalty.',
      sagittarius: 'Adventurous, freedom-loving, and optimistic. You value growth and exploration.',
      capricorn: 'Serious, disciplined, and seeking achievement. You value tradition and integrity.',
      aquarius: 'Independent, unique, and humanitarian. You value friendship and original ideas.',
      pisces: 'Compassionate, imaginative, and intuitive. You value spiritual connection and beauty.'
    },
    marsSignInterpretations: {
      aries: 'Dynamic, courageous, and direct action. You have a strong drive for leadership.',
      taurus: 'Steady, persistent, and practical energy. You possess great endurance.',
      gemini: 'Versatile, communicative, and restless energy. You thrive on variety and change.',
      cancer: 'Intuitive, protective, and emotional drive. You take action based on feelings.',
      leo: 'Creative, confident, and dramatic energy. You seek to inspire and be recognized.',
      virgo: 'Analytical, efficient, and detail-oriented action. You seek order and service.',
      libra: 'Diplomatic, balanced, and seeking harmony. You take action through partnership.',
      scorpio: 'Intense, powerful, and transformative drive. You possess a strong will.',
      sagittarius: 'Optimistic, adventurous, and freedom-loving energy. You seek truth.',
      capricorn: 'Disciplined, ambitious, and structured action. You value hard work.',
      aquarius: 'Innovative, original, and unconventional drive. You seek social progress.',
      pisces: 'Intuitive, imaginative, and gentle energy. You take action through creativity.'
    }
  },
  es: {
    title: 'Utility Hub Pro',
    subtitle: 'Herramientas de utilidad profesional todo en uno. Calcula tu edad exacta, niveles de IMC y descuentos de compras al instante.',
    dobLabel: 'Fecha de Nacimiento',
    timezoneLabel: 'Zona Horaria',
    birthTimeLabel: 'Hora de Nacimiento',
    hourLabel: 'Hora',
    minuteLabel: 'Minuto',
    calculateBtn: 'Calcular Edad',
    resultsTitle: 'Tu Edad Exacta',
    ageLabel: 'Edad',
    lunarAge: 'Edad Lunar',
    years: 'Años',
    months: 'Meses',
    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    dayLabel: 'Día',
    monthLabel: 'Mes',
    yearLabel: 'Año',
    nextBirthday: 'Próximo Cumpleaños',
    zodiacSign: 'Signo del Zodiaco',
    birthstone: 'Piedra de Nacimiento',
    lifeStatsTitle: 'Estadísticas de Vida (Estimadas)',
    heartbeats: 'Latidos del Corazón',
    eyeBlinks: 'Parpadeos',
    sleepTime: 'Tiempo Durmiendo',
    breathCount: 'Respiraciones',
    weeks: 'Semanas',
    ageSummary: 'Tienes {years} años, {months} meses y {days} días.',
    errorInvalidDate: 'Por favor, introduce una fecha válida.',
    errorFutureDate: 'La fecha de nacimiento no puede ser en el futuro.',
    errorInvalidYear: 'Por favor, introduce un año válido.',
    errorBirthAfterTarget: 'La fecha de nacimiento no puede ser posterior al año objetivo.',
    errorStartDateAfterEndDate: 'La fecha de inicio no puede ser posterior a la fecha de fin.',
    errorInvalidPrice: 'Por favor, introduce un precio positivo válido.',
    errorInvalidDiscount: 'El descuento debe estar entre 0 और 100.',
    date1Label: 'Fecha de Inicio',
    date2Label: 'Fecha de Fin',
    compareBtn: 'Calcular Diferencia',
    differenceTitle: 'Diferencia de Tiempo',
    differenceSummary: 'La diferencia es de {years} años, {months} meses y {days} días.',
    footerText: '© 2026 Utility Hub Pro. Todos los derechos reservados.',
    seoTitle: '¿Por qué usar una calculadora de edad?',
    seoDescription: 'Una calculadora de edad es una herramienta que te ayuda a determinar el tiempo exacto transcurrido desde tu nacimiento.',
    selectLanguage: 'Idioma',
    shareBtn: 'Compartir Resultados',
    copyBtn: 'Copiar al Portapapeles',
    copiedLabel: '¡Copiado!',
    holidayLabel: 'Próxima Festividad (Opcional)',
    daysUntilHoliday: '¡Faltan {days} días para tu festividad!',
    dobRangeEndLabel: 'Fin del Rango de Fecha de Nacimiento (Opcional)',
    ageRangeSummary: 'Tu rango de edad está entre {min} y {max}.',
    easterDate: 'Fecha de Pascua {year}',
    targetYearLabel: 'Año Objetivo (Opcional)',
    holidayCountdownLabel: 'Cuenta regresiva para el feriado',
    bmiCalculator: 'Calculadora de IMC',
    discountCalculator: 'Calculadora de Descuento',
    weightLabel: 'Peso (kg)',
    heightLabel: 'Altura (cm)',
    originalPriceLabel: 'Precio Original',
    discountPercentageLabel: 'Descuento %',
    calculateBmiBtn: 'Calcular IMC',
    calculateDiscountBtn: 'Calcular Descuento',
    weightPlaceholder: 'ej. 70',
    heightPlaceholder: 'ej. 175',
    bmiResult: 'Tu IMC es {bmi}',
    bmiCategory: 'Categoría: {category}',
    discountResult: 'Precio Final: {price}',
    savingsLabel: 'Ahorras: {savings}',
    birthChartTitle: 'Tu Carta Natal',
    birthLocationLabel: 'Lugar de Nacimiento (Ciudad, País)',
    sunSignLabel: 'Signo Solar',
    moonSignLabel: 'Signo Lunar',
    risingSignLabel: 'Signo Ascendente',
    chineseZodiacLabel: 'Zodiaco Chino',
    lunarPhaseLabel: 'Fase Lunar',
    planetaryPositionsTitle: 'Posiciones Planetarias',
    housesTitle: 'Casas Astrológicas',
    mercuryLabel: 'Mercurio',
    venusLabel: 'Venus',
    marsLabel: 'Marte',
    houseLabel: 'Casa {n}',
    elementLabel: 'Elemento',
    modalityLabel: 'Modalidad',
    rulingPlanetLabel: 'Planeta Regente',
    degreeLabel: 'Grado',
    aspectsTitle: 'Aspectos Astrológicos',
    aspectTypes: {
      conjunction: 'Conjunción',
      sextile: 'Sextil',
      square: 'Cuadratura',
      trine: 'Trígono',
      opposition: 'Oposición'
    },
    aspectDescriptions: {
      conjunction: 'Los planetas están situados muy cerca, fusionando sus energías. Esto crea una fuerza poderosa y unificada que intensifica las cualidades de ambos planetas, actuando a menudo como una influencia única y potente en tu vida.',
      sextile: 'Un ángulo armonioso de 60 grados que crea una conexión amistosa y de apoyo entre los planetas. Representa talentos latentes y oportunidades que requieren un poco de esfuerzo para activarse y beneficiarse plenamente.',
      square: 'Un ángulo desafiante de 90 grados que crea tensión dinámica y fricción. Actúa como un catalizador para el crecimiento, empujándote a superar obstáculos internos o externos y desarrollar fuerza a través de la lucha.',
      trine: 'Un ángulo altamente favorable de 120 grados donde las energías fluyen de forma natural y sin esfuerzo. Representa dones innatos, suerte y áreas de la vida donde las cosas parecen encajar sin mucha resistencia.',
      opposition: 'Los planetas están a 180 grados de distancia, creando un efecto de "sube y baja". Este aspecto resalta la necesidad de equilibrio y compromiso entre dos áreas opuestas de tu vida, manifestándose a menudo a través de relaciones.',
    },
    planetNames: {
      sun: 'Sol',
      moon: 'Luna',
      mercury: 'Mercurio',
      venus: 'Venus',
      mars: 'Marte'
    },
    planetMeanings: {
      sun: 'Representa tu identidad central, ego y fuerza vital.',
      moon: 'Gobierna tus emociones, instintos y yo interior.',
      mercury: 'Rige la comunicación, el intelecto y el razonamiento.',
      venus: 'Influye en el amor, la belleza y los valores personales.',
      mars: 'Impulsa la acción, la energía y el deseo físico.',
      rising: 'Representa tu personalidad social y cómo te perciben los demás.'
    },
    zodiacInterpretationsTitle: 'Interpretaciones del Zodiaco',
    zodiacReferenceTitle: 'Explora los 12 Signos del Zodiaco',
    lightMode: 'Modo Claro',
    darkMode: 'Modo Oscuro',
    zodiacSigns: {
      aquarius: 'Acuario', pisces: 'Piscis', aries: 'Aries', taurus: 'Tauro',
      gemini: 'Géminis', cancer: 'Cáncer', leo: 'Leo', virgo: 'Virgo',
      libra: 'Libra', scorpio: 'Escorpio', sagittarius: 'Sagitario', capricorn: 'Capricornio'
    },
    zodiacDescriptions: {
      aquarius: 'Innovador, progresista y humanitario. Son pensadores visionarios que valoran la independencia, la originalidad y el bienestar colectivo de la sociedad.',
      pisces: 'Compasivo, artístico e intuitivo. Son soñadores y sensibles, poseyendo una profunda conexión con el reino espiritual y el inconsciente colectivo.',
      aries: 'Entusiasta, dinámico y rápido de mente. Como el primer signo, son pioneros, valientes y poseen un fuerte impulso por la acción y el liderazgo.',
      taurus: 'Fuerte, confiable y sensual. Valoran la estabilidad, el confort y los resultados tangibles, a menudo poseyendo una gran resistencia y aprecio por la belleza.',
      gemini: 'Versátil, expresivo y curioso. Son camaleones intelectuales que prosperan con la variedad, la comunicación y el intercambio de ideas.',
      cancer: 'Intuitivo, sentimental y compasivo. Están profundamente conectados con el hogar y la familia, poseyendo una naturaleza protectora y una gran profundidad emocional.',
      leo: 'Dramático, extrovertido y seguro de sí mismo. Son líderes naturales que irradian calidez y creatividad, buscando inspirar y ser reconocidos por sus dones únicos.',
      virgo: 'Leal, analítico y amable. Son perfeccionistas meticulosos que buscan entender el mundo a través del orden, la salud y el deseo de ser útiles.',
      libra: 'Diplomático, artístico e inteligente. Buscan el equilibrio y la armonía en todas las cosas, valorando la asociación, la justicia y la belleza estética.',
      scorpio: 'Apasionado, tenaz y con recursos. Son intensos y transformadores, poseyendo una presencia magnética y la necesidad de descubrir verdades ocultas.',
      sagittarius: 'Extrovertido, optimista y divertido. Son aventureros filosóficos que buscan la verdad y la expansión a través de los viajes, el aprendizaje y la libertad.',
      capricorn: 'Serio, independiente y disciplinado. Son constructores ambiciosos que valoran la tradición, el trabajo duro y el logro de metas a largo plazo con integridad.'
    },
    chineseZodiacSigns: {
      rat: 'Rata', ox: 'Buey', tiger: 'Tigre', rabbit: 'Conejo', dragon: 'Dragón', snake: 'Serpiente',
      horse: 'Caballo', goat: 'Cabra', monkey: 'Mono', rooster: 'Gallo', dog: 'Perro', pig: 'Cerdo'
    },
    chineseZodiacDescriptions: {
      rat: 'Ingenioso, recursivo, versátil, amable.',
      ox: 'Diligente, dependiente, fuerte, determinado.',
      tiger: 'Valiente, seguro, competitivo, impredecible.',
      rabbit: 'Tranquilo, elegante, amable, responsable.',
      dragon: 'Seguro, inteligente, entusiasta.',
      snake: 'Enigmático, inteligente, sabio.',
      horse: 'Animado, activo, energético.',
      goat: 'Calmado, gentil, empático.',
      monkey: 'Agudo, inteligente, curioso.',
      rooster: 'Observador, trabajador, valiente.',
      dog: 'Encantador, honesto, prudente.',
      pig: 'Compasivo, generoso, diligente.'
    },
    lunarPhases: {
      new_moon: 'Luna Nueva', waxing_crescent: 'Luna Creciente', first_quarter: 'Cuarto Creciente',
      waxing_gibbous: 'Luna Gibosa Creciente', full_moon: 'Luna Llena', waning_gibbous: 'Luna Gibosa Menguante',
      last_quarter: 'Cuarto Menguante', waning_crescent: 'Luna Menguante'
    },
    birthstones: {
      january: 'Granate', february: 'Amatista', march: 'Aguamarina', april: 'Diamante',
      may: 'Esmeralda', june: 'Perla', july: 'Rubí', august: 'Peridoto',
      september: 'Zafiro', october: 'Ópalo', november: 'Topacio', december: 'Turquesa'
    },
    elements: {
      fire: 'Fuego', earth: 'Tierra', air: 'Aire', water: 'Agua'
    },
    modalities: {
      cardinal: 'Cardinal', fixed: 'Fijo', mutable: 'Mutable'
    },
    rulingPlanets: {
      sun: 'Sol', moon: 'Luna', mercury: 'Mercurio', venus: 'Venus', mars: 'Marte',
      jupiter: 'Júpiter', saturn: 'Saturno', uranus: 'Urano', neptune: 'Neptuno', pluto: 'Plutón'
    },
    elementMeanings: {
      fire: 'Los signos de fuego son energéticos, apasionados y dinámicos. Son conocidos por su creatividad, liderazgo e impulso.',
      earth: 'Los signos de tierra son realistas, prácticos y confiables. Valoran la estabilidad, el trabajo duro y la seguridad material.',
      air: 'Los signos de aire son intelectuales, sociales y comunicativos. Son conocidos por sus ideas, objetividad y habilidades sociales.',
      water: 'Los signos de agua son emocionales, intuitivos y sensibles. Están profundamente conectados con sus sentimientos y los de los demás.'
    },
    modalityMeanings: {
      cardinal: 'Los signos cardinales son los iniciadores del zodiaco. Son ambiciosos, emprendedores y les gusta comenzar nuevos proyectos.',
      fixed: 'Los signos fijos son los constructores del zodiaco. Son persistentes, estables y les gusta mantener y mejorar las cosas existentes.',
      mutable: 'Los signos mutables son los adaptadores del zodiaco. Son flexibles, versátiles y les gusta dejarse llevar.'
    },
    rulingPlanetMeanings: {
      mars: 'Marte representa la energía, la acción y el deseo. Rige nuestro impulso, ambición y energía física.',
      venus: 'Venus representa el amor, la belleza y la armonía. Rige nuestros valores, relaciones y sentido estético.',
      mercury: 'Mercurio representa la comunicación, el intelecto y los viajes. Rige nuestros pensamientos, lógica y cómo procesamos la información.',
      moon: 'La Luna representa las emociones, la intuición y el subconsciente. Rige nuestro mundo interior y necesidades emocionales.',
      sun: 'El Sol representa el yo central, el ego y la vitalidad. Rige nuestra personalidad básica y fuerza vital.',
      pluto: 'Plutón representa la transformación, el poder y el renacimiento. Rige el cambio profundo y la mente subconsciente.',
      jupiter: 'Júpiter representa la expansión, la suerte y la sabiduría. Rige nuestro crecimiento, filosofía y aprendizaje superior.',
      saturn: 'Saturno representa la estructura, la disciplina y la responsabilidad. Rige nuestros límites, lecciones y metas a largo plazo.',
      uranus: 'Urano representa la innovación, la rebelión y el cambio repentino. Rige nuestra originalidad y pensamiento orientado al futuro.',
      neptune: 'Neptuno representa los sueños, la intuición y la espiritualidad. Rige nuestra imaginación y conexión con lo divino.'
    },
    sunSignDetailedDescription: 'El Sol representa tu identidad central, tu mente consciente y tu fuerza vital creativa. Es el "yo soy" de tu personalidad, mostrando cómo brillas y dónde buscas expresar tu individualidad única. Gobierna tu carácter básico, tu ego y tus motivaciones primarias en la vida.',
    sunSignInterpretations: {
      aries: 'Como Sol en Aries, eres el pionero del zodiaco, encarnando la energía pura de la primavera y los nuevos comienzos. Regido por Marte, tu identidad central se define por el coraje, la iniciativa y una sed insaciable de acción. Posees una cualidad de liderazgo natural y un enfoque directo de la vida que te permite afrontar los desafíos de frente. Tu viaje consiste en aprender a canalizar tu inmensa vitalidad en logros sostenidos mientras desarrollas paciencia y consideración por los demás. Prosperas cuando inicias nuevos proyectos y lideras el camino con un entusiasmo contagioso.',
      taurus: 'Como Sol en Tauro, eres el ancla del zodiaco, buscando estabilidad, belleza y resultados tangibles en todo lo que haces. Regido por Venus, tu esencia está arraigada en el mundo físico y en una profunda necesidad de seguridad. Posees una capacidad increíble de resistencia y lealtad, actuando como una fuerza constante para quienes te rodean. Aprecias la artesanía fina y los placeres sencillos de la vida. Tu camino implica construir una vida de valor duradero y encontrar una verdadera estabilidad interior que trascienda la riqueza material, mientras superas una tendencia hacia la terquedad y la resistencia al cambio.',
      gemini: 'Como Sol en Géminis, te impulsa una curiosidad insaciable y una profunda necesidad de comunicación y variedad. Regido por Mercurio, tu mente es excepcionalmente versátil, rápida y adaptable. Buscas comprender el mundo a través del intercambio de información y la interacción social, a menudo poseyendo una naturaleza dual que te permite ver múltiples perspectivas simultáneamente. Tu viaje consiste en aprender a enfocar tus intereses dispersos y encontrar profundidad en medio de la amplitud de tus conocimientos. Prosperas en entornos que desafían tu intelecto y te permiten conectarte con una amplia gama de personas.',
      cancer: 'Como Sol en Cáncer, eres profundamente intuitivo y emocionalmente sensible, con una identidad central ligada al hogar, la familia y la necesidad de seguridad emocional. Regido por la Luna, eres naturalmente protector, cariñoso y posees una fuerte conexión con tu pasado y tus sentimientos internos. Abordas la vida con un corazón cauteloso pero profundamente afectuoso, actuando a menudo como el pegamento emocional en tus relaciones. Tu camino implica aprender a establecer límites saludables mientras abrazas tu vulnerabilidad como una fuente de fortaleza. Prosperas cuando te sientes seguro y puedes cuidar de quienes amas.',
      leo: 'Como Sol en Leo, eres creativo, expresivo y posees un deseo natural de ser reconocido por tus dones únicos. Regido por el propio Sol, tu energía es cálida, generosa y carismática. Abordas la vida con un sentido del drama y un deseo de liderar, a menudo poseyendo un fuerte sentido de orgullo y una necesidad de aprecio. Tu viaje consiste en aprender a liderar desde el corazón con humildad, usando tu fuego creativo para inspirar a otros en lugar de solo buscar atención. Prosperas cuando puedes expresarte auténticamente y recibir el calor de la aprobación de los demás.',
      virgo: 'Como Sol en Virgo, eres analítico, práctico y estás profundamente orientado hacia el servicio y la superación personal. Regido por Mercurio, buscas comprender el mundo a través del orden, la salud y la precisión. Posees un ojo agudo para los detalles y un deseo de ser útil, encontrando a menudo satisfacción en ayudar a los demás y perfeccionar tus habilidades. Tu camino implica aprender a equilibrar tu naturaleza crítica con la autocompasión, comprendiendo que la perfección es una meta esquiva. Prosperas en entornos donde puedes aplicar tu intelecto para resolver problemas prácticos y crear un orden significativo.',
      libra: 'Como Sol en Libra, buscas el equilibrio, la armonía y la asociación en cada aspecto de tu vida. Regido por Venus, tu identidad está profundamente ligada a tus relaciones y a tu sentido innato de la justicia. Eres diplomático, artístico y socialmente agraciado, a menudo esforzándote por ver todos los lados de una situación para encontrar una resolución justa y pacífica. Tu viaje consiste en aprender a encontrar tu propio equilibrio interior y tomar decisiones que reflejen tu verdadero yo, en lugar de solo buscar complacer a los demás. Prosperas en entornos colaborativos donde se valora la belleza y la justicia.',
      scorpio: 'Como Sol en Escorpio, eres intenso, apasionado y profundamente ingenioso, con la necesidad de comprender las profundidades ocultas de la vida. Regido por Plutón y Marte, posees una voluntad fuerte y una presencia magnética que atrae a los demás. No temes la transformación y a menudo buscas la verdad emocional por encima de todo. Tu camino implica aprender a usar tu poder para la curación y la regeneración en lugar del control o el secreto. Prosperas cuando estás comprometido en un trabajo profundo y significativo o en relaciones que te desafían a crecer y evolucionar.',
      sagittarius: 'Como Sol en Sagitario, eres optimista, aventurero y buscas significado a través de la exploración del mundo y las ideas. Regido por Júpiter, tu energía es expansiva, amante de la libertad y filosófica. Abordas la vida con un deseo de verdad y un gran sentido del humor, actuando a menudo como un puente entre diferentes culturas y perspectivas. Tu viaje consiste en aprender a fundamentar tus elevados ideales en la realidad práctica mientras mantienes tu sentido de asombro. Prosperas cuando tienes la libertad de viajar, aprender y compartir tu sabiduría con los demás.',
      capricorn: 'Como Sol en Capricornio, eres disciplinado, ambicioso y buscas construir algo de valor duradero en el mundo. Regido por Saturno, valoras el trabajo duro, la responsabilidad y la tradición. Abordas la vida con una mentalidad seria y práctica, a menudo poseyendo un fuerte sentido de integridad y un deseo de logro. Tu camino implica aprender a equilibrar tus ambiciones profesionales con tus necesidades emocionales, encontrando alegría en el viaje tanto como en el destino. Prosperas en entornos estructurados donde tu persistencia y liderazgo pueden conducir a un éxito tangible.',
      aquarius: 'Como Sol en Acuario, eres innovador, independiente y buscas mejorar la sociedad a través de tus ideas únicas y tus ideales humanitarios. Regido por Urano y Saturno, eres progresista, intelectual y a menudo posees una naturaleza rebelde o poco convencional. Valoras la amistad y el esfuerzo colectivo, actuando a menudo como un visionario para un futuro mejor. Tu viaje consiste en aprender a conectar tu mente brillante con tu corazón, encontrando formas de ser parte de la comunidad sin perder tu individualidad. Prosperas en entornos que valoran el pensamiento original y el progreso social.',
      pisces: 'Como Sol en Piscis, eres compasivo, artístico y profundamente intuitivo, con una identidad central ligada a tu imaginación y al reino espiritual. Regido por Neptuno y Júpiter, eres empático, sensible y a menudo posees una naturaleza soñadora o mística. Buscas comprender el mundo a través de los sentimientos y una conexión con el inconsciente colectivo. Tu camino implica aprender a fundamentar tu naturaleza sensible y establecer límites, usando tus dones creativos para traer curación y belleza al mundo. Prosperas en entornos que permiten la reflexión tranquila, la creatividad y la exploración espiritual.'
    },
    moonSignInterpretations: {
      aries: 'Tu mundo emocional es rápido y apasionado. Reaccionas a la vida con sentimientos inmediatos y una necesidad de independencia. Encuentras consuelo en la acción y puedes tener un estilo emocional de mal genio pero que se perdona rápidamente.',
      taurus: 'Buscas estabilidad emocional y comodidad física. Eres constante, leal y encuentras paz en la naturaleza y los sentidos. Puedes ser lento para reaccionar emocionalmente pero posees una gran resistencia.',
      gemini: 'Tus emociones son intelectualizadas y comunicativas. Encuentras consuelo en la variedad, el aprendizaje y la interacción social. Puedes experimentar estados de ánimo que cambian rápidamente y una necesidad de hablar sobre tus sentimientos.',
      cancer: 'Eres profundamente sensible y protector. Tus emociones están ligadas a tu hogar y familia. Posees una memoria fuerte y una necesidad de seguridad emocional y pertenencia.',
      leo: 'Tus emociones son dramáticas, cálidas y generosas. Buscas aprecio y encuentras consuelo en la expresión creativa y en ser el centro de atención para quienes amas.',
      virgo: 'Procesas las emociones a través del análisis y el servicio. Encuentras consuelo en el orden, la salud y en ser útil. Puedes ser autocrítico y buscar mejorar tu bienestar emocional a través de pasos prácticos.',
      libra: 'Buscas el equilibrio emocional y la armonía a través de las relaciones. Eres naturalmente diplomático y encuentras consuelo en la belleza y la asociación. Puedes luchar con la indecisión cuando hay emociones involucradas.',
      scorpio: 'Tu vida emocional es intensa, privada y transformadora. Buscas la verdad emocional profunda y posees una gran resiliencia. Puedes experimentar sentimientos poderosos que mantienes ocultos del mundo.',
      sagittarius: 'Tus emociones son expansivas, optimistas y amantes de la libertad. Encuentras consuelo en la exploración, la filosofía y el buen sentido del humor. Buscas el crecimiento emocional a través de nuevas experiencias.',
      capricorn: 'Eres emocionalmente disciplinado, serio y reservado. Encuentras consuelo en la estructura, el logro y la tradición. Puedes luchar para expresar vulnerabilidad pero posees una gran integridad emocional.',
      aquarius: 'Tus emociones son intelectualizadas, independientes y humanitarias. Encuentras consuelo en la amistad y en las ideas únicas. Puedes parecer distante pero posees una profunda preocupación por el bienestar colectivo.',
      pisces: 'Eres profundamente empático, imaginativo e intuitivo. Tus emociones son fluidas y están ligadas al reino espiritual. Encuentras consuelo en la creatividad y puedes ser muy sensible a los sentimientos de los demás.'
    },
    risingSignInterpretations: {
      aries: 'Proyectas una personalidad dinámica, enérgica y pionera. Los demás te ven como valiente, directo y alguien que toma la iniciativa. Abordas el mundo con entusiasmo y deseo de nuevos comienzos.',
      taurus: 'Proyectas una personalidad constante, confiable y tranquila. Los demás te ven como alguien con los pies en la tierra, que aprecia la belleza y valora la calidad. Abordas el mundo con paciencia y una mentalidad práctica.',
      gemini: 'Proyectas una personalidad versátil, comunicativa y curiosa. Los demás te ven como alguien ingenioso, sociable e intelectualmente comprometido. Abordas el mundo con deseo de información y variedad.',
      cancer: 'Proyectas una personalidad protectora, sensible y accesible. Los demás te ven como alguien cariñoso, intuitivo y que valora el hogar y la familia. Abordas el mundo con un corazón cauteloso pero cálido.',
      leo: 'Proyectas una personalidad carismática, creativa y segura de sí misma. Los demás te ven como alguien cálido, generoso y que lidera de forma natural. Abordas el mundo con un sentido del drama y deseo de ser visto.',
      virgo: 'Proyectas una personalidad analítica, práctica y servicial. Los demás te ven como alguien orientado a los detalles, eficiente y que valora la salud y el orden. Abordas el mundo con el deseo de ser útil.',
      libra: 'Proyectas una personalidad diplomática, artística y socialmente agraciada. Los demás te ven como alguien imparcial, encantador y que valora la armonía. Abordas el mundo con deseo de equilibrio y asociación.',
      scorpio: 'Proyectas una personalidad intensa, magnética y privada. Los demás te ven como alguien poderoso, ingenioso y que busca profundidad. Abordas el mundo con una voluntad fuerte y necesidad de verdad.',
      sagittarius: 'Proyectas una personalidad optimista, aventurera y amante de la libertad. Los demás te ven como alguien filosófico, divertido y que busca significado. Abordas el mundo con un sentido de asombro y exploración.',
      capricorn: 'Proyectas una personalidad disciplinada, ambiciosa y seria. Los demás te ven como alguien responsable, profesional y que valora el logro. Abordas el mundo con una mentalidad práctica y estructurada.',
      aquarius: 'Proyectas una personalidad innovadora, independiente y única. Los demás te ven como alguien progresista, intelectual y que valora los ideales humanitarios. Abordas el mundo con ideas originales.',
      pisces: 'Proyectas una personalidad compasiva, imaginativa e intuitiva. Los demás te ven como alguien empático, sensible y con una naturaleza mística. Abordas el mundo con una presencia soñadora y gentil.'
    },
    mercurySignInterpretations: {
      aries: 'Comunicación directa, rápida y asertiva. Piensas rápido y dices lo que piensas.',
      taurus: 'Pensamiento práctico, constante y deliberado. Valoras los hechos concretos y la lógica.',
      gemini: 'Versátil, curioso y muy comunicativo. Procesas la información rápidamente.',
      cancer: 'Memoria intuitiva, emocional y retentiva. Tu pensamiento está ligado a los sentimientos.',
      leo: 'Comunicación creativa, expresiva y segura. Hablas con autoridad.',
      virgo: 'Analítico, preciso y orientado al detalle. Buscas orden y claridad en el pensamiento.',
      libra: 'Diplomático, equilibrado y justo. Buscas la armonía en la comunicación.',
      scorpio: 'Pensamiento intenso, investigador y profundo. Buscas descubrir verdades ocultas.',
      sagittarius: 'Optimista, filosófico y de mente abierta. Buscas la verdad y la expansión.',
      capricorn: 'Pensamiento disciplinado, estructurado y práctico. Valoras la lógica y la tradición.',
      aquarius: 'Innovador, original y poco convencional. Piensas fuera de lo común.',
      pisces: 'Intuitivo, imaginativo y poético. Tu pensamiento es fluido y sensible.'
    },
    venusSignInterpretations: {
      aries: 'Apasionado, directo e independiente en el amor. Valoras la emoción y la iniciativa.',
      taurus: 'Sensual, leal y que busca estabilidad. Valoras la comodidad y el contacto físico.',
      gemini: 'Versátil, social y comunicativo. Valoras la conexión intelectual y la variedad.',
      cancer: 'Protector, sensible y que busca seguridad. Valoras el hogar y la profundidad emocional.',
      leo: 'Dramático, generoso y que busca aprecio. Valoras la calidez y la creatividad.',
      virgo: 'Práctico, servicial y que busca mejorar. Valoras el servicio y el orden en el amor.',
      libra: 'Diplomático, artístico y que busca equilibrio. Valoras la armonía y la asociación.',
      scorpio: 'Intenso, privado y transformador. Valoras la verdad emocional profunda y la lealtad.',
      sagittarius: 'Aventurero, amante de la libertad y optimista. Valoras el crecimiento y la exploración.',
      capricorn: 'Serio, disciplinado y que busca el logro. Valoras la tradición y la integridad.',
      aquarius: 'Independiente, único y humanitario. Valoras la amistad y las ideas originales.',
      pisces: 'Compasivo, imaginativo e intuitivo. Valoras la conexión espiritual y la belleza.'
    },
    marsSignInterpretations: {
      aries: 'Acción dinámica, valiente y directa. Tienes un fuerte impulso de liderazgo.',
      taurus: 'Energía constante, persistente y práctica. Posees una gran resistencia.',
      gemini: 'Energía versátil, comunicativa e inquieta. Prosperas con la variedad y el cambio.',
      cancer: 'Impulso intuitivo, protector y emocional. Actúas basándote en los sentimientos.',
      leo: 'Energía creativa, segura y dramática. Buscas inspirar y ser reconocido.',
      virgo: 'Acción analítica, eficiente y orientada al detalle. Buscas orden y servicio.',
      libra: 'Diplomático, equilibrado y que busca armonía. Actúas a través de la asociación.',
      scorpio: 'Impulso intenso, poderoso y transformador. Posees una voluntad fuerte.',
      sagittarius: 'Energía optimista, aventurera y amante de la libertad. Buscas la verdad.',
      capricorn: 'Acción disciplinada, ambiciosa y estructurada. Valoras el trabajo duro.',
      aquarius: 'Impulso innovador, original y poco convencional. Buscas el progreso social.',
      pisces: 'Energía intuitiva, imaginativa y gentil. Actúas a través de la creatividad.'
    }
  },
  fr: {
    title: 'Utility Hub Pro',
    subtitle: 'Outils utilitaires professionnels tout-en-un. Calculez votre âge exact, vos niveaux de forme physique IMC et vos remises d\'achat instantanément.',
    dobLabel: 'Date de Naissance',
    timezoneLabel: 'Fuseau Horaire',
    birthTimeLabel: 'Heure de Naissance',
    hourLabel: 'Heure',
    minuteLabel: 'Minute',
    calculateBtn: 'Calculer l\'Âge',
    resultsTitle: 'Votre Âge Exact',
    ageLabel: 'Âge',
    lunarAge: 'Âge Lunaire',
    years: 'Ans',
    months: 'Mois',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    dayLabel: 'Jour',
    monthLabel: 'Mois',
    yearLabel: 'Année',
    nextBirthday: 'Prochain Anniversaire',
    zodiacSign: 'Signe du Zodiaque',
    birthstone: 'Pierre de Naissance',
    lifeStatsTitle: 'Statistiques de Vie (Estimées)',
    heartbeats: 'Battements de Cœur',
    eyeBlinks: 'Clignotements d\'Yeux',
    sleepTime: 'Temps Passé à Dormir',
    breathCount: 'Respirations',
    weeks: 'Semaines',
    ageSummary: 'Vous avez {years} ans, {months} mois et {days} jours.',
    errorInvalidDate: 'Veuillez entrer une date valide.',
    errorFutureDate: 'La date de naissance ne peut pas être dans le futur.',
    errorInvalidYear: 'Veuillez entrer une année valide.',
    errorBirthAfterTarget: 'La date de naissance ne peut pas être après l\'année cible.',
    errorStartDateAfterEndDate: 'La date de début ne peut pas être après la date de fin.',
    errorInvalidPrice: 'Veuillez saisir un prix positif valide.',
    errorInvalidDiscount: 'La remise doit être comprise entre 0 et 100.',
    date1Label: 'Date de Début',
    date2Label: 'Date de Fin',
    compareBtn: 'Calculer la Différence',
    differenceTitle: 'Différence de Temps',
    differenceSummary: 'La différence est de {years} ans, {months} mois et {days} jours.',
    footerText: '© 2026 Utility Hub Pro. Tous droits réservés.',
    seoTitle: 'Pourquoi utiliser un calculateur d\'âge ?',
    seoDescription: 'Un calculateur d\'âge est un outil qui vous aide à déterminer le temps exact écoulé depuis votre naissance.',
    selectLanguage: 'Langue',
    shareBtn: 'Partager les Résultats',
    copyBtn: 'Copier dans le Presse-papiers',
    copiedLabel: 'Copié !',
    holidayLabel: 'Vacances à venir (Optionnel)',
    daysUntilHoliday: 'Plus que {days} jours avant vos vacances !',
    dobRangeEndLabel: 'Fin de la plage de date de naissance (Optionnel)',
    ageRangeSummary: 'Votre tranche d\'âge se situe entre {min} et {max}.',
    easterDate: 'Date de Pâques {year}',
    targetYearLabel: 'Année Cible (Optionnel)',
    holidayCountdownLabel: 'Compte à rebours jusqu\'au jour férié',
    bmiCalculator: 'Calculateur d\'IMC',
    discountCalculator: 'Calculateur de Remise',
    weightLabel: 'Poids (kg)',
    heightLabel: 'Taille (cm)',
    originalPriceLabel: 'Prix Original',
    discountPercentageLabel: 'Remise %',
    calculateBmiBtn: 'Calculer l\'IMC',
    calculateDiscountBtn: 'Calculer la Remise',
    weightPlaceholder: 'ex. 70',
    heightPlaceholder: 'ex. 175',
    bmiResult: 'Votre IMC est {bmi}',
    bmiCategory: 'Catégorie : {category}',
    discountResult: 'Prix Final : {price}',
    savingsLabel: 'Vous économisez : {savings}',
    birthChartTitle: 'Votre Carte du Ciel',
    birthLocationLabel: 'Lieu de Naissance (Ville, Pays)',
    sunSignLabel: 'Signe Solaire',
    moonSignLabel: 'Signe Lunaire',
    risingSignLabel: 'Signe Ascendant',
    chineseZodiacLabel: 'Zodiaque Chinois',
    lunarPhaseLabel: 'Phase Lunaire',
    planetaryPositionsTitle: 'Positions Planétaires',
    housesTitle: 'Maisons Astrologiques',
    mercuryLabel: 'Mercure',
    venusLabel: 'Vénus',
    marsLabel: 'Mars',
    houseLabel: 'Maison {n}',
    elementLabel: 'Élément',
    modalityLabel: 'Modalité',
    rulingPlanetLabel: 'Planète Régente',
    degreeLabel: 'Degré',
    aspectsTitle: 'Aspects Astrologiques',
    aspectTypes: {
      conjunction: 'Conjonction',
      sextile: 'Sextile',
      square: 'Carré',
      trine: 'Trigone',
      opposition: 'Opposition'
    },
    aspectDescriptions: {
      conjunction: 'Les planètes sont positionnées l\'une à côté de l\'autre, fusionnant leurs énergies. Cela crée une force puissante et unifiée qui intensifie les qualités des deux planètes, agissant souvent comme une influence unique et puissante dans votre vie.',
      sextile: 'Un angle harmonieux de 60 degrés qui crée une connexion de soutien et amicale entre les planètes. Il représente des talents latents et des opportunités qui nécessitent un peu d\'effort pour être pleinement activés et exploités.',
      square: 'Un angle difficile de 90 degrés qui crée une tension dynamique et une friction. Il agit comme un catalyseur pour la croissance, vous poussant à surmonter les obstacles internes ou externes et à développer votre force à travers la lutte.',
      trine: 'Un angle très favorable de 120 degrés où les énergies circulent naturellement et sans effort. Il représente les dons innés, la chance et les domaines de la vie où les choses semblent se mettre en place sans trop de résistance.',
      opposition: 'Les planètes sont distantes de 180 degrés, créant un effet de "balançoire". Cet aspect souligne un besoin d\'équilibre et de compromis entre deux domaines opposés de votre vie, se manifestant souvent à travers les relations.'
    },
    planetNames: {
      sun: 'Soleil',
      moon: 'Lune',
      mercury: 'Mercure',
      venus: 'Vénus',
      mars: 'Mars'
    },
    planetMeanings: {
      sun: 'Représente votre identité profonde, votre ego et votre force vitale.',
      moon: 'Gouverne vos émotions, vos instincts et votre moi intérieur.',
      mercury: 'Régit la communication, l\'intellect et le raisonnement.',
      venus: 'Influence l\'amour, la beauté et les valeurs personnelles.',
      mars: 'Dirige l\'action, l\'énergie et le désir physique.',
      rising: 'Représente votre personnalité sociale et la façon dont les autres vous perçoivent.'
    },
    zodiacInterpretationsTitle: 'Interprétations du Zodiaque',
    zodiacReferenceTitle: 'Explorez les 12 Signes du Zodiaque',
    lightMode: 'Mode Clair',
    darkMode: 'Mode Sombre',
    zodiacSigns: {
      aquarius: 'Verseau', pisces: 'Poissons', aries: 'Bélier', taurus: 'Taureau',
      gemini: 'Gémeaux', cancer: 'Cancer', leo: 'Lion', virgo: 'Vierge',
      libra: 'Balance', scorpio: 'Scorpion', sagittarius: 'Sagittaire', capricorn: 'Capricorne'
    },
    zodiacDescriptions: {
      aquarius: 'Innovateur, progressiste et humanitaire. Ce sont des penseurs visionnaires qui valorisent l\'indépendance, l\'originalité et le bien-être collectif de la société.',
      pisces: 'Compatissant, artistique et intuitif. Ils sont rêveurs et sensibles, possédant une connexion profonde avec le domaine spirituel et l\'inconscient collectif.',
      aries: 'Enthousiaste, dynamique et vif d\'esprit. En tant que premier signe, ils sont des pionniers, courageux et possèdent une forte motivation pour l\'action et le leadership.',
      taurus: 'Fort, fiable et sensuel. Ils apprécient la stabilité, le confort et les résultats tangibles, possédant souvent une grande endurance et une appréciation de la beauté.',
      gemini: 'Polyvalent, expressif et curieux. Ce sont des caméléons intellectuels qui s\'épanouissent dans la variété, la communication et l\'échange d\'idées.',
      cancer: 'Intuitif, sentimental et compatissant. Ils sont profondément attachés au foyer et à la famille, possédant une nature protectrice et une grande profondeur émotionnelle.',
      leo: 'Dramatique, extraverti et sûr de lui. Ce sont des leaders naturels qui rayonnent de chaleur et de créativité, cherchant à inspirer et à être reconnus pour leurs dons uniques.',
      virgo: 'Loyal, analytique et gentil. Ce sont des perfectionnistes méticuleux qui cherchent à comprendre le monde par l\'ordre, la santé et le désir d\'être utiles.',
      libra: 'Diplomate, artistique et intelligent. Ils recherchent l\'équilibre et l\'harmonie en toutes choses, valorisant le partenariat, l\'équité et la beauté esthétique.',
      scorpio: 'Passionné, têtu et ingénieux. Ils sont intenses et transformateurs, possédant une présence magnétique et un besoin de découvrir des vérités cachées.',
      sagittarius: 'Extraverti, optimiste et drôle. Ce sont des aventuriers philosophes qui recherchent la vérité et l\'expansion par les voyages, l\'apprentissage et la liberté.',
      capricorn: 'Sérieux, indépendant et discipliné. Ce sont des bâtisseurs ambitieux qui valorisent la tradition, le travail acharné et la réalisation d\'objectifs à long terme avec intégrité.'
    },
    chineseZodiacSigns: {
      rat: 'Rat', ox: 'Bœuf', tiger: 'Tigre', rabbit: 'Lapin', dragon: 'Dragon', snake: 'Serpent',
      horse: 'Cheval', goat: 'Chèvre', monkey: 'Singe', rooster: 'Coq', dog: 'Chien', pig: 'Cochon'
    },
    chineseZodiacDescriptions: {
      rat: 'Vif d\'esprit, ingénieux, polyvalent, gentil.',
      ox: 'Diligent, fiable, fort, déterminé.',
      tiger: 'Courageux, confiant, compétitif, imprévisible.',
      rabbit: 'Calme, élégant, gentil, responsable.',
      dragon: 'Confiant, intelligent, enthousiaste.',
      snake: 'Énigmatique, intelligent, sage.',
      horse: 'Animé, actif, énergique.',
      goat: 'Calme, doux, compatissant.',
      monkey: 'Vif, intelligent, curieux.',
      rooster: 'Observateur, travailleur, courageux.',
      dog: 'Aimable, honnête, prudent.',
      pig: 'Compatissant, généreux, diligent.'
    },
    lunarPhases: {
      new_moon: 'Nouvelle Lune', waxing_crescent: 'Premier Croissant', first_quarter: 'Premier Quartier',
      waxing_gibbous: 'Gibbeuse Croissante', full_moon: 'Pleine Lune', waning_gibbous: 'Gibbeuse Décroissante',
      last_quarter: 'Dernier Quartier', waning_crescent: 'Dernier Croissant'
    },
    birthstones: {
      january: 'Grenat', february: 'Améthyste', march: 'Aigue-marine', april: 'Diamant',
      may: 'Émeraude', june: 'Perle', july: 'Rubis', august: 'Péridot',
      september: 'Saphir', october: 'Opale', november: 'Topaze', december: 'Turquoise'
    },
    elements: {
      fire: 'Feu', earth: 'Terre', air: 'Air', water: 'Eau'
    },
    modalities: {
      cardinal: 'Cardinal', fixed: 'Fixe', mutable: 'Mutable'
    },
    rulingPlanets: {
      sun: 'Soleil', moon: 'Lune', mercury: 'Mercure', venus: 'Vénus', mars: 'Mars',
      jupiter: 'Jupiter', saturn: 'Saturne', uranus: 'Uranus', neptune: 'Neptune', pluto: 'Pluton'
    },
    elementMeanings: {
      fire: 'Les signes de feu sont énergiques, passionnés et dynamiques. Ils sont connus pour leur créativité, leur leadership et leur dynamisme.',
      earth: 'Les signes de terre sont ancrés, pratiques et fiables. Ils apprécient la stabilité, le travail acharné et la sécurité matérielle.',
      air: 'Les signes d\'air sont intellectuels, sociaux et communicatifs. Ils sont connus pour leurs idées, leur objectivité et leurs compétences sociales.',
      water: 'Les signes d\'eau sont émotionnels, intuitifs et sensibles. Ils sont profondément connectés à leurs sentiments et à ceux des autres.'
    },
    modalityMeanings: {
      cardinal: 'Les signes cardinaux sont les initiateurs du zodiaque. Ils sont ambitieux, entreprenants et aiment lancer de nouveaux projets.',
      fixed: 'Les signes fixes sont les bâtisseurs du zodiaque. Ils sont persistants, stables et aiment maintenir et améliorer les choses existantes.',
      mutable: 'Les signes mutables sont les adaptateurs du zodiaque. Ils sont flexibles, polyvalents et aiment suivre le mouvement.'
    },
    rulingPlanetMeanings: {
      mars: 'Mars représente l\'énergie, l\'action et le désir. Il régit notre dynamisme, notre ambition et notre énergie physique.',
      venus: 'Vénus représente l\'amour, la beauté et l\'harmonie. Elle régit nos valeurs, nos relations et notre sens esthétique.',
      mercury: 'Mercure représente la communication, l\'intellect et les voyages. Il régit nos pensées, notre logique et la façon dont nous traitons l\'information.',
      moon: 'La Lune représente les émotions, l\'intuition et le subconscient. Elle régit notre monde intérieur et nos besoins émotionnels.',
      sun: 'Le Soleil représente le moi profond, l\'ego et la vitalité. Il régit notre personnalité de base et notre force vitale.',
      pluto: 'Pluton représente la transformation, le pouvoir et la renaissance. Il régit les changements profonds et l\'esprit subconscient.',
      jupiter: 'Jupiter représente l\'expansion, la chance et la sagesse. Il régit notre croissance, notre philosophie et notre apprentissage supérieur.',
      saturn: 'Saturne représente la structure, la discipline et la responsabilité. Il régit nos limites, nos leçons et nos objectifs à long terme.',
      uranus: 'Uranus représente l\'innovation, la rébellion et le changement soudain. Il régit notre originalité et notre pensée orientée vers l\'avenir.',
      neptune: 'Neptune représente les rêves, l\'intuition et la spiritualité. Il régit notre imagination et notre connexion au divin.'
    },
      sunSignDetailedDescription: 'Le Soleil représente votre identité profonde, votre esprit conscient et votre force de vie créative. C\'est le "je suis" de votre personnalité, montrant comment vous rayonnez et où vous cherchez à exprimer votre individualité unique. Il régit votre caractère de base, votre ego et vos motivations premières dans la vie.',
    sunSignInterpretations: {
      aries: 'En tant que Soleil Bélier, vous êtes le pionnier du zodiaque, incarnant l\'énergie brute du printemps et des nouveaux départs. Dirigé par Mars, votre identité profonde est définie par le courage, l\'initiative et une soif d\'action inextinguible. Vous possédez une qualité de leadership naturelle et une approche directe de la vie qui vous permet de relever les défis de front. Votre voyage consiste à apprendre à canaliser votre immense vitalité vers des réalisations durables tout en développant la patience et la considération pour les autres. Vous vous épanouissez lorsque vous initiez de nouveaux projets et montrez la voie avec un enthousiasme contagieux.',
      taurus: 'En tant que Soleil Taureau, vous êtes l\'ancre du zodiaque, recherchant la stabilité, la beauté et des résultats tangibles dans tout ce que vous faites. Dirigé par Vénus, votre essence est enracinée dans le monde physique et un besoin profond de sécurité. Vous possédez une incroyable capacité d\'endurance et de loyauté, agissant comme une force stable pour ceux qui vous entourent. Vous appréciez le savoir-faire raffiné et les plaisirs simples de la vie. Votre chemin consiste à construire une vie de valeur durable et à trouver une véritable stabilité intérieure qui transcende la richesse matérielle, tout en surmontant une tendance à l\'entêtement et à la résistance au changement.',
      gemini: 'En tant que Soleil Gémeaux, vous êtes poussé par une curiosité insatiable et un besoin profond de communication et de variété. Dirigé par Mercure, votre esprit est exceptionnellement polyvalent, rapide et adaptable. Vous cherchez à comprendre le monde à travers l\'échange d\'informations et l\'interaction sociale, possédant souvent une double nature qui vous permet de voir plusieurs perspectives simultanément. Votre voyage consiste à apprendre à concentrer vos intérêts dispersés et à trouver de la profondeur au milieu de l\'étendue de vos connaissances. Vous vous épanouissez dans des environnements qui stimulent votre intellect et vous permettent de vous connecter avec un large éventail de personnes.',
      cancer: 'En tant que Soleil Cancer, vous êtes profondément intuitif et émotionnellement sensible, avec une identité profonde liée au foyer, à la famille et à un besoin de sécurité émotionnelle. Dirigé par la Lune, vous êtes naturellement attentionné, protecteur et possédez un lien fort avec votre passé et vos sentiments intérieurs. Vous abordez la vie avec un cœur prudent mais profondément attentionné, agissant souvent comme le ciment émotionnel de vos relations. Votre chemin consiste à apprendre à établir des limites saines tout en embrassant votre vulnérabilité comme une source de force. Vous vous épanouissez lorsque vous vous sentez en sécurité et que vous êtes capable de prendre soin de ceux que vous aimez.',
      leo: 'En tant que Soleil Lion, vous êtes créatif, expressif et possédez un désir naturel d\'être reconnu pour vos dons uniques. Dirigé par le Soleil lui-même, votre énergie est chaleureuse, généreuse et charismatique. Vous abordez la vie avec un sens du drame et un désir de diriger, possédant souvent un fort sentiment de fierté et un besoin d\'appréciation. Votre voyage consiste à apprendre à diriger avec le cœur et humilité, en utilisant votre feu créatif pour inspirer les autres plutôt que de simplement chercher l\'attention. Vous vous épanouissez lorsque vous êtes capable de vous exprimer authentiquement et de recevoir la chaleur de l\'approbation des autres.',
      virgo: 'En tant que Soleil Vierge, vous êtes analytique, pratique et profondément orienté vers le service et l\'amélioration de soi. Dirigé par Mercure, vous cherchez à comprendre le monde à travers l\'ordre, la santé et la précision. Vous possédez un œil vif pour les détails et un désir d\'être utile, trouvant souvent votre épanouissement en aidant les autres et en perfectionnant vos compétences. Votre chemin consiste à apprendre à équilibrer votre nature critique avec l\'auto-compassion, en comprenant que la perfection est un objectif insaisissable. Vous vous épanouissez dans des environnements où vous pouvez appliquer votre intellect pour résoudre des problèmes pratiques et créer un ordre significatif.',
      libra: 'En tant que Soleil Balance, vous recherchez l\'équilibre, l\'harmonie et le partenariat dans tous les aspects de votre vie. Dirigé par Vénus, votre identité est profondément liée à vos relations et à votre sens inné de la justice. Vous êtes diplomate, artistique et socialement gracieux, vous efforçant souvent de voir tous les côtés d\'une situation pour trouver une résolution juste et pacifique. Votre voyage consiste à apprendre à trouver votre propre équilibre intérieur et à prendre des décisions qui reflètent votre vrai moi, plutôt que de simplement chercher à plaire aux autres. Vous vous épanouissez dans des environnements collaboratifs où la beauté et l\'équité sont valorisées.',
      scorpio: 'En tant que Soleil Scorpion, vous êtes intense, passionné et profondément ingénieux, avec un besoin de comprendre les profondeurs cachées de la vie. Dirigé par Pluton et Mars, vous possédez une volonté forte et une présence magnétique qui attire les autres. Vous n\'avez pas peur de la transformation et recherchez souvent la vérité émotionnelle par-dessus tout. Votre chemin consiste à apprendre à utiliser votre pouvoir pour la guérison et la régénération plutôt que pour le contrôle ou le secret. Vous vous épanouissez lorsque vous êtes engagé dans un travail profond et significatif ou dans des relations qui vous mettent au défi de grandir et d\'évoluer.',
      sagittarius: 'En tant que Soleil Sagittaire, vous êtes optimiste, aventureuse et cherchez un sens à travers l\'exploration du monde et des idées. Dirigé par Jupiter, votre énergie est expansive, éprise de liberté et philosophique. Vous abordez la vie avec un désir de vérité et un grand sens de l\'humour, agissant souvent comme un pont entre différentes cultures et perspectives. Votre voyage consiste à apprendre à fonder vos idéaux élevés sur la réalité pratique tout en conservant votre sens de l\'émerveillement. Vous vous épanouissez lorsque vous avez la liberté de voyager, d\'apprendre et de partager votre sagesse avec les autres.',
      capricorn: 'En tant que Soleil Capricorne, vous êtes discipliné, ambitieux et cherchez à construire quelque chose de durable dans le monde. Dirigé par Saturne, vous appréciez le travail acharné, la responsabilité et la tradition. Vous abordez la vie avec un état d\'esprit sérieux et pratique, possédant souvent un fort sentiment d\'intégrité et un désir de réussite. Votre chemin consiste à apprendre à équilibrer vos ambitions professionnelles avec vos besoins émotionnels, en trouvant de la joie dans le voyage autant que dans la destination. Vous vous épanouissez dans des environnements structurés où votre persévérance et votre leadership peuvent mener à un succès tangible.',
      aquarius: 'En tant que Soleil Verseau, vous êtes innovant, indépendant et cherchez à améliorer la société grâce à vos idées uniques et vos idéaux humanitaires. Dirigé par Uranus et Saturne, vous êtes progressiste, intellectuel et possédez souvent une nature rebelle ou non conventionnelle. Vous appréciez l\'amitié et l\'effort collectif, agissant souvent comme un visionnaire pour un avenir meilleur. Votre voyage consiste à apprendre à connecter votre esprit brillant avec votre cœur, en trouvant des moyens de faire partie de la communauté sans perdre votre individualité. Vous vous épanouissez dans des environnements qui valorisent la pensée originale et le progrès social.',
      pisces: 'En tant que Soleil Poissons, vous êtes compatissant, artistique et profondément intuitif, avec une identité profonde liée à votre imagination et au domaine spirituel. Dirigé par Neptune et Jupiter, vous êtes empathique, sensible et possédez souvent une nature rêveuse ou mystique. Vous cherchez à comprendre le monde à travers les sentiments et une connexion à l\'inconscient collectif. Votre chemin consiste à apprendre à ancrer votre nature sensible et à établir des limites, en utilisant vos dons créatifs pour apporter guérison et beauté au monde. Vous vous épanouissez dans des environnements qui permettent une réflexion tranquille, la créativité et l\'exploration spirituelle.'
    },
    moonSignInterpretations: {
      aries: 'Votre monde émotionnel est rapide et passionné. Vous réagissez à la vie avec des sentiments immédiats et un besoin d\'indépendance. Vous trouvez du réconfort dans l\'action et pouvez avoir un style émotionnel vif mais rapidement pardonné.',
      taurus: 'Vous recherchez la stabilité émotionnelle et le confort physique. Vous êtes stable, fidèle et trouvez la paix dans la nature et les sens. Vous pouvez être lent à réagir émotionnellement mais possédez une grande endurance.',
      gemini: 'Vos émotions sont intellectualisées et communicatives. Vous trouvez du réconfort dans la variété, l\'apprentissage et l\'interaction sociale. Vous pouvez ressentir des humeurs changeant rapidement et un besoin de parler de vos sentiments.',
      cancer: 'Vous êtes profondément sensible et attentionné. Vos émotions sont liées à votre foyer et à votre famille. Vous possédez une mémoire forte et un besoin de sécurité émotionnelle et d\'appartenance.',
      leo: 'Vos émotions sont dramatiques, chaleureuses et généreuses. Vous recherchez l\'appréciation et trouvez du réconfort dans l\'expression créative et le fait d\'être le centre d\'attention pour ceux que vous aimez.',
      virgo: 'Vous traitez les émotions par l\'analyse et le service. Vous trouvez du réconfort dans l\'ordre, la santé et le fait d\'être utile. Vous pouvez être autocritique et chercher à améliorer votre bien-être émotionnel par des mesures pratiques.',
      libra: 'Vous recherchez l\'équilibre émotionnel et l\'harmonie à travers les relations. Vous êtes naturellement diplomate et trouvez du réconfort dans la beauté et le partenariat. Vous pouvez avoir du mal à prendre des décisions lorsque des émotions sont en jeu.',
      scorpio: 'Votre vie émotionnelle est intense, privée et transformatrice. Vous recherchez une vérité émotionnelle profonde et possédez une grande résilience. Vous pouvez ressentir des sentiments puissants que vous cachez au monde.',
      sagittarius: 'Vos émotions sont expansives, optimistes et éprises de liberté. Vous trouvez du réconfort dans l\'exploration, la philosophie et un bon sens de l\'humour. Vous recherchez une croissance émotionnelle à travers de nouvelles expériences.',
      capricorn: 'Vous êtes émotionnellement discipliné, sérieux et réservé. Vous trouvez du réconfort dans la structure, la réussite et la tradition. Vous pouvez avoir du mal à exprimer votre vulnérabilité mais possédez une grande intégrité émotionnelle.',
      aquarius: 'Vos émotions sont intellectualisées, indépendantes et humanitaires. Vous trouvez du réconfort dans l\'amitié et les idées uniques. Vous pouvez paraître détaché mais possédez un profond souci du bien-être collectif.',
      pisces: 'Vous êtes profondément empathique, imaginatif et intuitif. Vos émotions sont fluides et liées au domaine spirituel. Vous trouvez du réconfort dans la créativité et pouvez être très sensible aux sentiments des autres.'
    },
    risingSignInterpretations: {
      aries: 'Vous projetez une personnalité dynamique, énergique et pionnière. Les autres vous voient comme courageux, direct et comme quelqu\'un qui prend les devants. Vous abordez le monde avec enthousiasme et un désir de nouveaux départs.',
      taurus: 'Vous projetez une personnalité stable, fiable et calme. Les autres vous voient comme terre-à-terre, appréciant la beauté et valorisant la qualité. Vous abordez le monde avec patience et un esprit pratique.',
      gemini: 'Vous projetez une personnalité polyvalente, communicative et curieuse. Les autres vous voient comme vif d\'esprit, sociable et intellectuellement engagé. Vous abordez le monde avec un désir d\'information et de variété.',
      cancer: 'Vous projetez une personnalité attentionnée, sensible et accessible. Les autres vous voient comme attentionné, intuitif et comme quelqu\'un qui valorise le foyer et la famille. Vous abordez le monde avec un cœur prudent mais chaleureux.',
      leo: 'Vous projetez une personnalité charismatique, créative et confiante. Les autres vous voient comme chaleureux, généreux et comme quelqu\'un qui dirige naturellement. Vous abordez le monde avec un sens du drame et un désir d\'être vu.',
      virgo: 'Vous projetez une personnalité analytique, pratique et serviable. Les autres vous voient comme soucieux du détail, efficace et comme quelqu\'un qui valorise la santé et l\'ordre. Vous abordez le monde avec un désir d\'être utile.',
      libra: 'Vous projetez une personnalité diplomate, artistique et socialement gracieuse. Les autres vous voient comme impartial, charmant et comme quelqu\'un qui valorise l\'harmonie. Vous abordez le monde avec un désir d\'équilibre et de partenariat.',
      scorpio: 'Vous projetez une personnalité intense, magnétique et privée. Les autres vous voient comme puissant, ingénieux et comme quelqu\'un qui recherche la profondeur. Vous abordez le monde avec une volonté forte et un besoin de vérité.',
      sagittarius: 'Vous projetez une personnalité optimiste, aventureuse et éprise de liberté. Les autres vous voient comme philosophique, drôle et comme quelqu\'un qui cherche un sens. Vous abordez le monde avec un sens de l\'émerveillement et de l\'exploration.',
      capricorn: 'Vous projetez une personnalité disciplinée, ambitieuse et sérieuse. Les autres vous voient comme responsable, professionnel et comme quelqu\'un qui valorise la réussite. Vous abordez le monde avec un état d\'esprit pratique et structuré.',
      aquarius: 'Vous projetez une personnalité innovante, indépendante et unique. Les autres vous voient comme progressiste, intellectuel et comme quelqu\'un qui valorise les idéaux humanitaires. Vous abordez le monde avec des idées originales.',
      pisces: 'Vous projetez une personnalité compatissante, imaginative et intuitive. Les autres vous voient comme empathique, sensible et doté d\'une nature mystique. Vous abordez le monde avec une présence rêveuse et douce.'
    },
    mercurySignInterpretations: {
      aries: 'Direct, quick, and assertive communication. You think fast and speak your mind.',
      taurus: 'Practical, steady, and deliberate thinking. You value concrete facts and logic.',
      gemini: 'Versatile, curious, and highly communicative. You process information rapidly.',
      cancer: 'Intuitive, emotional, and retentive memory. Your thinking is tied to feelings.',
      leo: 'Creative, expressive, and confident communication. You speak with authority.',
      virgo: 'Analytical, precise, and detail-oriented. You seek order and clarity in thought.',
      libra: 'Diplomatic, balanced, and fair-minded. You seek harmony in communication.',
      scorpio: 'Intense, investigative, and deep thinking. You seek to uncover hidden truths.',
      sagittarius: 'Optimistic, philosophical, and broad-minded. You seek truth and expansion.',
      capricorn: 'Disciplined, structured, and practical thinking. You value logic and tradition.',
      aquarius: 'Innovative, original, and unconventional. You think outside the box.',
      pisces: 'Intuitive, imaginative, and poetic. Your thinking is fluid and sensitive.'
    },
    venusSignInterpretations: {
      aries: 'Passionate, direct, and independent in love. You value excitement and initiative.',
      taurus: 'Sensual, loyal, and seeking stability. You value comfort and physical touch.',
      gemini: 'Versatile, social, and communicative. You value intellectual connection and variety.',
      cancer: 'Nurturing, sensitive, and seeking security. You value home and emotional depth.',
      leo: 'Dramatic, generous, and seeking appreciation. You value warmth and creativity.',
      virgo: 'Practical, helpful, and seeking improvement. You value service and order in love.',
      libra: 'Diplomatic, artistic, and seeking balance. You value harmony and partnership.',
      scorpio: 'Intense, private, and transformative. You value deep emotional truth and loyalty.',
      sagittarius: 'Adventurous, freedom-loving, and optimistic. You value growth and exploration.',
      capricorn: 'Serious, disciplined, and seeking achievement. You value tradition and integrity.',
      aquarius: 'Independent, unique, and humanitarian. You value friendship and original ideas.',
      pisces: 'Compassionate, imaginative, and intuitive. You value spiritual connection and beauty.'
    },
    marsSignInterpretations: {
      aries: 'Dynamic, courageous, and direct action. You have a strong drive for leadership.',
      taurus: 'Steady, persistent, and practical energy. You possess great endurance.',
      gemini: 'Versatile, communicative, and restless energy. You thrive on variety and change.',
      cancer: 'Intuitive, protective, and emotional drive. You take action based on feelings.',
      leo: 'Creative, confident, and dramatic energy. You seek to inspire and be recognized.',
      virgo: 'Analytical, efficient, and detail-oriented action. You seek order and service.',
      libra: 'Diplomatic, balanced, and seeking harmony. You take action through partnership.',
      scorpio: 'Intense, powerful, and transformative drive. You possess a strong will.',
      sagittarius: 'Optimistic, adventurous, and freedom-loving energy. You seek truth.',
      capricorn: 'Disciplined, ambitious, and structured action. You value hard work.',
      aquarius: 'Innovative, original, and unconventional drive. You seek social progress.',
      pisces: 'Intuitive, imaginative, and gentle energy. You take action through creativity.'
    }
  },
  de: {
    title: 'Utility Hub Pro',
    subtitle: 'All-in-One-Profi-Utility-Tools. Berechnen Sie sofort Ihr genaues Alter, Ihren BMI-Fitnesslevel und Ihre Einkaufsrabatte.',
    dobLabel: 'Geburtsdatum',
    timezoneLabel: 'Zeitzone',
    birthTimeLabel: 'Geburtszeit',
    hourLabel: 'Stunde',
    minuteLabel: 'Minute',
    calculateBtn: 'Alter berechnen',
    resultsTitle: 'Ihr genaues Alter',
    ageLabel: 'Alter',
    lunarAge: 'Mondalter',
    years: 'Jahre',
    months: 'Monate',
    days: 'Tage',
    hours: 'Stunden',
    minutes: 'Minuten',
    seconds: 'Sekunden',
    dayLabel: 'Tag',
    monthLabel: 'Monat',
    yearLabel: 'Jahr',
    nextBirthday: 'Nächster Geburtstag',
    zodiacSign: 'Sternzeichen',
    birthstone: 'Geburtsstein',
    lifeStatsTitle: 'Lebensstatistiken (Geschätzt)',
    heartbeats: 'Herzschläge',
    eyeBlinks: 'Augenzwinkern',
    sleepTime: 'Schlafzeit',
    breathCount: 'Atemzüge',
    weeks: 'Wochen',
    ageSummary: 'Sie sind {years} Jahre, {months} Monate und {days} Tage alt.',
    errorInvalidDate: 'Bitte geben Sie ein gültiges Datum ein.',
    errorFutureDate: 'Das Geburtsdatum darf nicht in der Zukunft liegen.',
    errorInvalidYear: 'Bitte geben Sie ein gültiges Jahr ein.',
    errorBirthAfterTarget: 'Das Geburtsdatum darf nicht nach dem Zieljahr liegen.',
    errorStartDateAfterEndDate: 'Das Startdatum darf nicht nach dem Enddatum liegen.',
    errorInvalidPrice: 'Bitte geben Sie einen gültigen positiven Preis ein.',
    errorInvalidDiscount: 'Der Rabatt muss zwischen 0 und 100 liegen.',
    date1Label: 'Startdatum',
    date2Label: 'Enddatum',
    compareBtn: 'Differenz berechnen',
    differenceTitle: 'Zeitdifferenz',
    differenceSummary: 'Der Unterschied beträgt {years} Jahre, {months} Monate und {days} Tage.',
    footerText: '© 2026 Utility Hub Pro. Alle Rechte vorbehalten.',
    seoTitle: 'Warum einen Altersrechner verwenden?',
    seoDescription: 'Ein Altersrechner ist ein Werkzeug, das Ihnen hilft, die exakte Zeit seit Ihrer Geburt zu bestimmen.',
    selectLanguage: 'Sprache',
    shareBtn: 'Ergebnisse teilen',
    copyBtn: 'In Zwischenablage kopieren',
    copiedLabel: 'Kopiert!',
    holidayLabel: 'Kommender Feiertag (Optional)',
    daysUntilHoliday: 'Noch {days} Tage bis zu Ihrem Feiertag!',
    dobRangeEndLabel: 'Ende des Geburtsdatumsbereichs (Optional)',
    ageRangeSummary: 'Ihr Altersbereich liegt zwischen {min} und {max}.',
    easterDate: 'Osterdatum {year}',
    targetYearLabel: 'Zieljahr (Optional)',
    holidayCountdownLabel: 'Countdown zum Feiertag',
    bmiCalculator: 'BMI-Rechner',
    discountCalculator: 'Rabattrechner',
    weightLabel: 'Gewicht (kg)',
    heightLabel: 'Größe (cm)',
    originalPriceLabel: 'Originalpreis',
    discountPercentageLabel: 'Rabatt %',
    calculateBmiBtn: 'BMI berechnen',
    calculateDiscountBtn: 'Rabatt berechnen',
    weightPlaceholder: 'z.B. 70',
    heightPlaceholder: 'z.B. 175',
    bmiResult: 'Ihr BMI ist {bmi}',
    bmiCategory: 'Kategorie: {category}',
    discountResult: 'Endpreis: {price}',
    savingsLabel: 'Sie sparen: {savings}',
    birthChartTitle: 'Ihr Geburtshoroskop',
    birthLocationLabel: 'Geburtsort (Stadt, Land)',
    sunSignLabel: 'Sonnenzeichen',
    moonSignLabel: 'Mondzeichen',
    risingSignLabel: 'Aszendent',
    chineseZodiacLabel: 'Chinesisches Sternzeichen',
    lunarPhaseLabel: 'Mondphase',
    planetaryPositionsTitle: 'Planetenpositionen',
    housesTitle: 'Astrologische Häuser',
    mercuryLabel: 'Merkur',
    venusLabel: 'Venus',
    marsLabel: 'Mars',
    houseLabel: 'Haus {n}',
    elementLabel: 'Element',
    modalityLabel: 'Modalität',
    rulingPlanetLabel: 'Herrschender Planet',
    degreeLabel: 'Grad',
    aspectsTitle: 'Astrologische Aspekte',
    aspectTypes: {
      conjunction: 'Konjunktion',
      sextile: 'Sextil',
      square: 'Quadrat',
      trine: 'Trigon',
      opposition: 'Opposition'
    },
    aspectDescriptions: {
      conjunction: 'Planeten stehen eng beieinander und verschmelzen ihre Energien. Dies schafft eine kraftvolle, vereinte Kraft, die die Qualitäten beider Planeten verstärkt und oft als ein einziger, potenter Einfluss in Ihrem Leben wirkt.',
      sextile: 'Ein harmonischer 60-Grad-Winkel, der eine unterstützende und freundliche Verbindung zwischen Planeten schafft. Er repräsentiert latente Talente und Möglichkeiten, die ein wenig Anstrengung erfordern, um sie vollständig zu aktivieren und zu nutzen.',
      square: 'Ein herausfordernder 90-Grad-Winkel, der dynamische Spannung und Reibung erzeugt. Er wirkt als Katalysator für Wachstum und drängt Sie dazu, interne oder externe Hindernisse zu überwinden und durch Kampf Stärke zu entwickeln.',
      trine: 'Ein äußerst günstiger 120-Grad-Winkel, in dem Energien natürlich und mühelos fließen. Er repräsentiert angeborene Gaben, Glück und Lebensbereiche, in denen sich die Dinge ohne großen Widerstand zu fügen scheinen.',
      opposition: 'Planeten stehen 180 Grad auseinander, was einen "Wippen"-Effekt erzeugt. Dieser Aspekt hebt die Notwendigkeit von Gleichgewicht und Kompromiss zwischen zwei gegensätzlichen Lebensbereichen hervor, was sich oft durch Beziehungen manifestiert.'
    },
    planetNames: {
      sun: 'Sonne',
      moon: 'Mond',
      mercury: 'Merkur',
      venus: 'Venus',
      mars: 'Mars'
    },
    planetMeanings: {
      sun: 'Repräsentiert Ihre Kernidentität, Ihr Ego und Ihre Lebenskraft.',
      moon: 'Regiert Ihre Emotionen, Instinkte und Ihr inneres Selbst.',
      mercury: 'Regiert Kommunikation, Intellekt und logisches Denken.',
      venus: 'Beeinflusst Liebe, Schönheit und persönliche Werte.',
      mars: 'Treibt Handeln, Energie und körperliches Verlangen an.',
      rising: 'Repräsentiert Ihre soziale Persönlichkeit und wie andere Sie wahrnehmen.'
    },
    zodiacInterpretationsTitle: 'Tierkreiszeichen-Interpretationen',
    zodiacReferenceTitle: 'Entdecken Sie die 12 Tierkreiszeichen',
    lightMode: 'Heller Modus',
    darkMode: 'Dunkler Modus',
    zodiacSigns: {
      aquarius: 'Wassermann', pisces: 'Fische', aries: 'Widder', taurus: 'Stier',
      gemini: 'Zwillinge', cancer: 'Krebs', leo: 'Löwe', virgo: 'Jungfrau',
      libra: 'Waage', scorpio: 'Skorpion', sagittarius: 'Schütze', capricorn: 'Steinbock'
    },
    zodiacDescriptions: {
      aquarius: 'Innovativ, progressiv und humanitär. Sie sind visionäre Denker, die Unabhängigkeit, Originalität und das kollektive Wohlergehen der Gesellschaft schätzen.',
      pisces: 'Mitfühlend, künstlerisch und intuitiv. Sie sind verträumt und sensibel und besitzen eine tiefe Verbindung zur spirituellen Welt und zum kollektiven Unbewussten.',
      aries: 'Begeisterungsfähig, dynamisch und schlagfertig. Als erstes Zeichen sind sie Pioniere, mutig und besitzen einen starken Drang nach Action und Führung.',
      taurus: 'Stark, zuverlässig und sinnlich. Sie schätzen Stabilität, Komfort und greifbare Ergebnisse und besitzen oft große Ausdauer und Sinn für Schönheit.',
      gemini: 'Vielseitig, ausdrucksstark und neugierig. Sie sind intellektuelle Chamäleons, die von Abwechslung, Kommunikation und dem Austausch von Ideen leben.',
      cancer: 'Intuitiv, sentimental und mitfühlend. Sie sind tief mit Heim und Familie verbunden, besitzen eine beschützende Natur und große emotionale Tiefe.',
      leo: 'Dramatisch, kontaktfreudig und selbstbewusst. Sie sind natürliche Anführer, die Wärme und Kreativität ausstrahlen und danach streben, zu inspirieren und für ihre Gaben anerkannt zu werden.',
      virgo: 'Loyal, analytisch und freundlich. Sie sind akribische Perfektionisten, die versuchen, die Welt durch Ordnung, Gesundheit und den Wunsch, nützlich zu sein, zu verstehen.',
      libra: 'Diplomatisch, künstlerisch und intelligent. Sie suchen in allen Dingen nach Gleichgewicht und Harmonie und schätzen Partnerschaft, Fairness und ästhetische Schönheit.',
      scorpio: 'Leidenschaftlich, stur und einfallsreich. Sie sind intensiv und transformativ, besitzen eine magnetische Präsenz und das Bedürfnis, verborgene Wahrheiten aufzudecken.',
      sagittarius: 'Extrovertiert, optimistisch und lustig. Sie sind philosophische Abenteurer, die durch Reisen, Lernen und Freiheit nach Wahrheit und Erweiterung suchen.',
      capricorn: 'Ernsthaft, unabhängig und diszipliniert. Sie sind ehrgeizige Erbauer, die Tradition, harte Arbeit und das Erreichen langfristiger Ziele mit Integrität schätzen.'
    },
    chineseZodiacSigns: {
      rat: 'Ratte', ox: 'Ochse', tiger: 'Tiger', rabbit: 'Hase', dragon: 'Drache', snake: 'Schlange',
      horse: 'Pferd', goat: 'Ziege', monkey: 'Affe', rooster: 'Hahn', dog: 'Hund', pig: 'Schwein'
    },
    chineseZodiacDescriptions: {
      rat: 'Schlagfertig, einfallsreich, vielseitig, freundlich.',
      ox: 'Fleißig, zuverlässig, stark, entschlossen.',
      tiger: 'Mutig, selbstbewusst, wettbewerbsfähig, unberechenbar.',
      rabbit: 'Ruhig, elegant, gütig, verantwortungsbewusst.',
      dragon: 'Selbstbewusst, intelligent, enthusiastisch.',
      snake: 'Rätselhaft, intelligent, weise.',
      horse: 'Lebhaft, aktiv, energetisch.',
      goat: 'Ruhig, sanftmütig, mitfühlend.',
      monkey: 'Scharfsinnig, klug, neugierig.',
      rooster: 'Aufmerksam, fleißig, mutig.',
      dog: 'Liebenswert, ehrlich, umsichtig.',
      pig: 'Mitfühlend, großzügig, fleißig.'
    },
    lunarPhases: {
      new_moon: 'Neumond', waxing_crescent: 'Zunehmender Sichelmond', first_quarter: 'Erstes Viertel',
      waxing_gibbous: 'Zunehmender Dreiviertelmond', full_moon: 'Vollmond', waning_gibbous: 'Abnehmender Dreiviertelmond',
      last_quarter: 'Letztes Viertel', waning_crescent: 'Abnehmender Sichelmond'
    },
    birthstones: {
      january: 'Granat', february: 'Amethyst', march: 'Aquamarin', april: 'Diamant',
      may: 'Smaragd', june: 'Perle', july: 'Rubin', august: 'Peridot',
      september: 'Saphir', october: 'Opal', november: 'Topas', december: 'Türkis'
    },
    elements: {
      fire: 'Feuer', earth: 'Erde', air: 'Luft', water: 'Wasser'
    },
    modalities: {
      cardinal: 'Kardinal', fixed: 'Fix', mutable: 'Veränderlich'
    },
    rulingPlanets: {
      sun: 'Sonne', moon: 'Mond', mercury: 'Merkur', venus: 'Venus', mars: 'Mars',
      jupiter: 'Jupiter', saturn: 'Saturn', uranus: 'Uranus', neptune: 'Neptun', pluto: 'Pluto'
    },
    elementMeanings: {
      fire: 'Feuerzeichen sind energisch, leidenschaftlich und dynamisch. Sie sind bekannt für ihre Kreativität, Führungsstärke und ihren Tatendrang.',
      earth: 'Erdzeichen sind geerdet, praktisch und zuverlässig. Sie schätzen Stabilität, harte Arbeit und materielle Sicherheit.',
      air: 'Luftzeichen sind intellektuell, sozial und kommunikativ. Sie sind bekannt für ihre Ideen, Objektivität und sozialen Fähigkeiten.',
      water: 'Wasserzeichen sind emotional, intuitiv und sensibel. Sie sind tief mit ihren Gefühlen und den Gefühlen anderer verbunden.'
    },
    modalityMeanings: {
      cardinal: 'Kardinale Zeichen sind die Initiatoren des Tierkreises. Sie sind ehrgeizig, unternehmungslustig und fangen gerne neue Projekte an.',
      fixed: 'Fixe Zeichen sind die Erbauer des Tierkreises. Sie sind beharrlich, stabil und pflegen und verbessern gerne Bestehendes.',
      mutable: 'Veränderliche Zeichen sind die Anpasser des Tierkreises. Sie sind flexibel, vielseitig und lassen sich gerne treiben.'
    },
    rulingPlanetMeanings: {
      mars: 'Mars repräsentiert Energie, Aktion und Verlangen. Er regiert unseren Tatendrang, unseren Ehrgeiz und unsere körperliche Energie.',
      venus: 'Venus repräsentiert Liebe, Schönheit und Harmonie. Sie regiert unsere Werte, Beziehungen und unseren ästhetischen Sinn.',
      mercury: 'Merkur repräsentiert Kommunikation, Intellekt und Reisen. Er regiert unsere Gedanken, Logik und wie wir Informationen verarbeiten.',
      moon: 'Der Mond repräsentiert Emotionen, Intuition und das Unterbewusstsein. Er regiert unsere innere Welt und unsere emotionalen Bedürfnisse.',
      sun: 'Die Sonne repräsentiert das Kern-Selbst, das Ego und die Vitalität. Sie regiert unsere grundlegende Persönlichkeit und Lebenskraft.',
      pluto: 'Pluto repräsentiert Transformation, Macht und Wiedergeburt. Er regiert tiefgreifende Veränderungen und das Unterbewusstsein.',
      jupiter: 'Jupiter repräsentiert Expansion, Glück und Weisheit. Er regiert unser Wachstum, unsere Philosophie und höhere Bildung.',
      saturn: 'Saturn repräsentiert Struktur, Disziplin und Verantwortung. Er regiert unsere Grenzen, Lektionen und langfristigen Ziele.',
      uranus: 'Uranus repräsentiert Innovation, Rebellion und plötzliche Veränderungen. Er regiert unsere Originalität und zukunftsorientiertes Denken.',
      neptune: 'Neptun repräsentiert Träume, Intuition und Spiritualität. Er regiert unsere Vorstellungskraft und Verbindung zum Göttlichen.'
    },
    sunSignDetailedDescription: 'Die Sonne repräsentiert Ihre Kernidentität, Ihr Bewusstsein und Ihre kreative Lebenskraft. Sie ist das "Ich bin" Ihrer Persönlichkeit und zeigt, wie Sie strahlen und wo Sie Ihre einzigartige Individualität zum Ausdruck bringen möchten. Sie regiert Ihren grundlegenden Charakter, Ihr Ego und Ihre primären Motivationen im Leben.',
    sunSignInterpretations: {
      aries: 'Als Widder-Sonne sind Sie der Pionier des Tierkreises und verkörpern die rohe Energie des Frühlings und der Neuanfänge. Regiert von Mars, wird Ihre Kernidentität durch Mut, Initiative und einen unstillbaren Durst nach Aktion definiert. Sie besitzen eine natürliche Führungsqualität und eine direkte Herangehensweise an das Leben, die es Ihnen ermöglicht, Herausforderungen direkt anzugehen. Ihre Reise besteht darin, zu lernen, Ihre immense Vitalität in nachhaltige Erfolge zu kanalisieren und gleichzeitig Geduld und Rücksichtnahme auf andere zu entwickeln. Sie blühen auf, wenn Sie neue Projekte initiieren und mit ansteckendem Enthusiasmus vorangehen.',
      taurus: 'Als Stier-Sonne sind Sie der Anker des Tierkreises und suchen in allem, was Sie tun, nach Stabilität, Schönheit und greifbaren Ergebnissen. Regiert von Venus, ist Ihr Wesen in der physischen Welt und einem tiefen Bedürfnis nach Sicherheit verwurzelt. Sie besitzen eine unglaubliche Ausdauer und Loyalität und wirken als stetige Kraft für Ihre Mitmenschen. Sie schätzen feine Handwerkskunst und die einfachen Freuden des Lebens. Ihr Weg beinhaltet den Aufbau eines Lebens von dauerhaftem Wert und das Finden wahrer innerer Stabilität, die über materiellen Reichtum hinausgeht, während Sie eine Tendenz zu Sturheit und Widerstand gegen Veränderungen überwinden.',
      gemini: 'Als Zwillinge-Sonne werden Sie von einer unersättlichen Neugier und einem tiefen Bedürfnis nach Kommunikation und Abwechslung angetrieben. Regiert von Merkur, ist Ihr Geist außergewöhnlich vielseitig, schnell und anpassungsfähig. Sie versuchen, die Welt durch den Austausch von Informationen und soziale Interaktion zu verstehen, und besitzen oft eine duale Natur, die es Ihnen ermöglicht, mehrere Perspektiven gleichzeitig zu sehen. Ihre Reise besteht darin, zu lernen, Ihre verstreuten Interessen zu fokussieren und Tiefe inmitten der Breite Ihres Wissens zu finden. Sie blühen in Umgebungen auf, die Ihren Intellekt herausfordern und es Ihnen ermöglichen, sich mit einer Vielzahl von Menschen zu verbinden.',
      cancer: 'Als Krebs-Sonne sind Sie zutiefst intuitiv und emotional sensibel, mit einer Kernidentität, die an Heim, Familie und ein Bedürfnis nach emotionaler Sicherheit gebunden ist. Regiert vom Mond, sind Sie von Natur aus fürsorglich, beschützend und besitzen eine starke Verbindung zu Ihrer Vergangenheit und Ihren inneren Gefühlen. Sie gehen das Leben mit einem vorsichtigen, aber zutiefst fürsorglichen Herzen an und wirken oft als emotionaler Klebstoff in Ihren Beziehungen. Ihr Weg beinhaltet das Erlernen gesunder Grenzen, während Sie Ihre Verletzlichkeit als Quelle der Stärke annehmen. Sie blühen auf, wenn Sie sich sicher fühlen und in der Lage sind, für diejenigen zu sorgen, die Sie lieben.',
      leo: 'Als Löwe-Sonne sind Sie kreativ, ausdrucksstark und besitzen den natürlichen Wunsch, für Ihre einzigartigen Gaben anerkannt zu werden. Regiert von der Sonne selbst, ist Ihre Energie warm, großzügig und charismatisch. Sie gehen das Leben mit einem Sinn für Dramatik und dem Wunsch zu führen an und besitzen oft ein starkes Stolzgefühl und ein Bedürfnis nach Wertschätzung. Ihre Reise besteht darin, zu lernen, mit Demut aus dem Herzen zu führen und Ihr kreatives Feuer zu nutzen, um andere zu inspirieren, anstatt nur nach Aufmerksamkeit zu suchen. Sie blühen auf, wenn Sie in der Lage sind, sich authentisch auszudrücken und die Wärme der Anerkennung anderer zu empfangen.',
      virgo: 'Als Jungfrau-Sonne sind Sie analytisch, praktisch und zutiefst auf Dienst und Selbstverbesserung ausgerichtet. Regiert von Merkur, versuchen Sie, die Welt durch Ordnung, Gesundheit und Präzision zu verstehen. Sie besitzen ein scharfes Auge für Details und den Wunsch, nützlich zu sein, und finden oft Erfüllung darin, anderen zu helfen und Ihre Fähigkeiten zu verfeinern. Ihr Weg beinhaltet das Erlernen des Gleichgewichts zwischen Ihrer kritischen Natur und Selbstmitgefühl, wobei Sie verstehen, dass Perfektion ein schwer fassbares Ziel ist. Sie blühen in Umgebungen auf, in denen Sie Ihren Intellekt einsetzen können, um praktische Probleme zu lösen und eine sinnvolle Ordnung zu schaffen.',
      libra: 'Als Waage-Sonne suchen Sie in jedem Aspekt Ihres Lebens nach Gleichgewicht, Harmonie und Partnerschaft. Regiert von Venus, ist Ihre Identität zutiefst mit Ihren Beziehungen und Ihrem angeborenen Sinn für Gerechtigkeit verbunden. Sie sind diplomatisch, künstlerisch und sozial anmutig und bemühen sich oft, alle Seiten einer Situation zu sehen, um eine faire und friedliche Lösung zu finden. Ihre Reise besteht darin, zu lernen, Ihr eigenes inneres Gleichgewicht zu finden und Entscheidungen zu treffen, die Ihr wahres Selbst widerspiegeln, anstatt nur zu versuchen, anderen zu gefallen. Sie blühen in kollaborativen Umgebungen auf, in denen Schönheit und Fairness geschätzt werden.',
      scorpio: 'Als Skorpion-Sonne sind Sie intensiv, leidenschaftlich und zutiefst einfallsreich, mit dem Bedürfnis, die verborgenen Tiefen des Lebens zu verstehen. Regiert von Pluto und Mars, besitzen Sie einen starken Willen und eine magnetische Präsenz, die andere anzieht. Sie haben keine Angst vor Transformation und suchen oft vor allem nach emotionaler Wahrheit. Ihr Weg beinhaltet das Erlernen, Ihre Kraft für Heilung und Regeneration anstatt für Kontrolle oder Geheimhaltung einzusetzen. Sie blühen auf, wenn Sie in tiefe, bedeutungsvolle Arbeit oder Beziehungen involviert sind, die Sie herausfordern zu wachsen und sich zu entwickeln.',
      sagittarius: 'Als Schütze-Sonne sind Sie optimistisch, abenteuerlustig und suchen nach Sinn durch die Erkundung der Welt und von Ideen. Regiert von Jupiter, ist Ihre Energie expansiv, freiheitsliebend und philosophisch. Sie gehen das Leben mit einem Wunsch nach Wahrheit und einem großen Sinn für Humor an und wirken oft als Brücke zwischen verschiedenen Kulturen und Perspektiven. Ihre Reise besteht darin, zu lernen, Ihre hohen Ideale in der praktischen Realität zu verankern, während Sie Ihren Sinn für Staunen bewahren. Sie blühen auf, wenn Sie die Freiheit haben zu reisen, zu lernen und Ihre Weisheit mit anderen zu teilen.',
      capricorn: 'Als Steinbock-Sonne sind Sie diszipliniert, ehrgeizig und bestrebt, etwas von dauerhaftem Wert in der Welt aufzubauen. Regiert von Saturn, schätzen Sie harte Arbeit, Verantwortung und Tradition. Sie gehen das Leben mit einer ernsten und praktischen Denkweise an und besitzen oft ein starkes Integritätsgefühl und den Wunsch nach Leistung. Ihr Weg beinhaltet das Erlernen des Gleichgewichts zwischen Ihren beruflichen Ambitionen und Ihren emotionalen Bedürfnissen, wobei Sie Freude an der Reise ebenso finden wie am Ziel. Sie blühen in strukturierten Umgebungen auf, in denen Ihre Beharrlichkeit und Führung zu greifbarem Erfolg führen können.',
      aquarius: 'Als Wassermann-Sonne sind Sie innovativ, unabhängig und bestrebt, die Gesellschaft durch Ihre einzigartigen Ideen und humanitären Ideale zu verbessern. Regiert von Uranus und Saturn, sind Sie progressiv, intellektuell und besitzen oft eine rebellische oder unkonventionelle Natur. Sie schätzen Freundschaft und kollektive Bemühungen und wirken oft als Visionär für eine bessere Zukunft. Ihre Reise besteht darin, zu lernen, Ihren brillanten Verstand mit Ihrem Herzen zu verbinden und Wege zu finden, Teil der Gemeinschaft zu sein, ohne Ihre Individualität zu verlieren. Sie blühen in Umgebungen auf, die originelles Denken und sozialen Fortschritt schätzen.',
      pisces: 'Als Fische-Sonne sind Sie mitfühlend, künstlerisch und zutiefst intuitiv, mit einer Kernidentität, die an Ihre Vorstellungskraft und den spirituellen Bereich gebunden ist. Regiert von Neptun und Jupiter, sind Sie empathisch, sensibel und besitzen oft eine verträumte oder mystische Natur. Sie versuchen, die Welt durch Gefühle und eine Verbindung zum kollektiven Unbewussten zu verstehen. Ihr Weg beinhaltet das Erlernen, Ihre sensible Natur zu erden und Grenzen zu setzen, wobei Sie Ihre kreativen Gaben nutzen, um Heilung und Schönheit in die Welt zu bringen. Sie blühen in Umgebungen auf, die stille Reflexion, Kreativität und spirituelle Erkundung ermöglichen.'
    },
    moonSignInterpretations: {
      aries: 'Ihre Gefühlswelt ist schnelllebig und leidenschaftlich. Sie reagieren auf das Leben mit unmittelbaren Gefühlen und einem Bedürfnis nach Unabhängigkeit. Sie finden Trost in Aktion und haben möglicherweise einen temperamentvollen, aber schnell verzeihenden emotionalen Stil.',
      taurus: 'Sie suchen emotionale Stabilität und körperlichen Komfort. Sie sind beständig, loyal und finden Frieden in der Natur und den Sinnen. Sie reagieren emotional vielleicht langsam, besitzen aber große Ausdauer.',
      gemini: 'Ihre Emotionen sind intellektualisiert und kommunikativ. Sie finden Trost in Abwechslung, Lernen und sozialer Interaktion. Sie können schnell wechselnde Stimmungen und ein Bedürfnis erleben, über Ihre Gefühle zu sprechen.',
      cancer: 'Sie sind zutiefst sensibel und fürsorglich. Ihre Emotionen sind an Ihr Heim und Ihre Familie gebunden. Sie besitzen ein starkes Gedächtnis und ein Bedürfnis nach emotionaler Sicherheit und Zugehörigkeit.',
      leo: 'Ihre Emotionen sind dramatisch, warm und großzügig. Sie suchen Anerkennung und finden Trost in kreativem Ausdruck und darin, für diejenigen, die Sie lieben, im Mittelpunkt der Aufmerksamkeit zu stehen.',
      virgo: 'Sie verarbeiten Emotionen durch Analyse und Dienst. Sie finden Trost in Ordnung, Gesundheit und Nützlichkeit. Sie sind vielleicht selbstkritisch und versuchen, Ihr emotionales Wohlbefinden durch praktische Schritte zu verbessern.',
      libra: 'Sie suchen emotionales Gleichgewicht und Harmonie durch Beziehungen. Sie sind von Natur aus diplomatisch und finden Trost in Schönheit und Partnerschaft. Sie haben vielleicht mit Unentschlossenheit zu kämpfen, wenn Emotionen im Spiel sind.',
      scorpio: 'Ihr emotionales Leben ist intensiv, privat und transformativ. Sie suchen nach tiefer emotionaler Wahrheit und besitzen große Resilienz. Sie können mächtige Gefühle erleben, die Sie vor der Welt geheim halten.',
      sagittarius: 'Ihre Emotionen sind expansiv, optimistisch und freiheitsliebend. Sie finden Trost in Erkundung, Philosophie und einem guten Sinn für Humor. Sie suchen emotionales Wachstum durch neue Erfahrungen.',
      capricorn: 'Sie sind emotional diszipliniert, ernst und reserviert. Sie finden Trost in Struktur, Leistung und Tradition. Es fällt Ihnen vielleicht schwer, Verletzlichkeit zu zeigen, aber Sie besitzen große emotionale Integrität.',
      aquarius: 'Ihre Emotionen sind intellektualisiert, unabhängig und humanitär. Sie finden Trost in Freundschaft und einzigartigen Ideen. Sie wirken vielleicht distanziert, besitzen aber eine tiefe Sorge um das kollektive Wohlergehen.',
      pisces: 'Sie sind zutiefst empathisch, fantasievoll und intuitiv. Ihre Emotionen sind fließend und an den spirituellen Bereich gebunden. Sie finden Trost in Kreativität und reagieren vielleicht sehr sensibel auf die Gefühle anderer.'
    },
    risingSignInterpretations: {
      aries: 'Sie projizieren eine dynamische, energetische und bahnbrechende Persönlichkeit. Andere sehen Sie als mutig, direkt und als jemanden, der die Führung übernimmt. Sie gehen auf die Welt mit Enthusiasmus und dem Wunsch nach Neuanfängen zu.',
      taurus: 'Sie projizieren eine beständige, zuverlässige und ruhige Persönlichkeit. Andere sehen Sie als geerdet, Schönheit schätzend und als jemanden, der Qualität schätzt. Sie gehen auf die Welt mit Geduld und einer praktischen Denkweise zu.',
      gemini: 'Sie projizieren eine vielseitige, kommunikative und neugierige Persönlichkeit. Andere sehen Sie als schlagfertig, gesellig und intellektuell engagiert. Sie gehen auf die Welt mit dem Wunsch nach Information und Abwechslung zu.',
      cancer: 'Sie projizieren eine fürsorgliche, sensible und zugängliche Persönlichkeit. Andere sehen Sie als fürsorglich, intuitiv und als jemanden, der Heim und Familie schätzt. Sie gehen auf die Welt mit einem vorsichtigen, aber warmen Herzen zu.',
      leo: 'Sie projizieren eine charismatische, kreative und selbstbewusste Persönlichkeit. Andere sehen Sie als warm, großzügig und als jemanden, der natürlich führt. Sie gehen auf die Welt mit einem Sinn für Dramatik und dem Wunsch zu, gesehen zu werden.',
      virgo: 'Sie projizieren eine analytische, praktische und hilfreiche Persönlichkeit. Andere sehen Sie als detailorientiert, effizient und als jemanden, der Gesundheit und Ordnung schätzt. Sie gehen auf die Welt mit dem Wunsch zu, nützlich zu sein.',
      libra: 'Sie projizieren eine diplomatische, künstlerische und sozial anmutige Persönlichkeit. Andere sehen Sie als unvoreingenommen, charmant und als jemanden, der Harmonie schätzt. Sie gehen auf die Welt mit dem Wunsch nach Gleichgewicht und Partnerschaft zu.',
      scorpio: 'Sie projizieren eine intensive, magnetische und private Persönlichkeit. Andere sehen Sie als kraftvoll, einfallsreich und als jemanden, der Tiefe sucht. Sie gehen auf die Welt mit einem starken Willen und dem Bedürfnis nach Wahrheit zu.',
      sagittarius: 'Sie projizieren eine optimistische, abenteuerlustige und freiheitsliebende Persönlichkeit. Andere sehen Sie als philosophisch, lustig und als jemanden, der nach Sinn sucht. Sie gehen auf die Welt mit einem Sinn für Staunen und Erkundung zu.',
      capricorn: 'Sie projizieren eine disziplinierte, ehrgeizige und ernsthafte Persönlichkeit. Andere sehen Sie als verantwortlich, professionell und als jemanden, der Leistung schätzt. Sie gehen auf die Welt mit einer praktischen und strukturierten Denkweise zu.',
      aquarius: 'Sie projizieren eine innovative, unabhängige und einzigartige Persönlichkeit. Andere sehen Sie als progressiv, intellektuell und als jemanden, der humanitäre Ideale schätzt. Sie gehen auf die Welt mit originellen Ideen zu.',
      pisces: 'Sie projizieren eine mitfühlende, fantasievolle und intuitive Persönlichkeit. Andere sehen Sie als empathisch, sensibel und mit einer mystischen Natur. Sie gehen auf die Welt mit einer verträumten und sanften Präsenz zu.'
    },
    mercurySignInterpretations: {
      aries: 'Direkte, schnelle und durchsetzungsstarke Kommunikation. Sie denken schnell und sagen, was Sie denken.',
      taurus: 'Praktisches, stetiges und bewusstes Denken. Sie schätzen konkrete Fakten und Logik.',
      gemini: 'Vielseitig, neugierig und sehr kommunikativ. Sie verarbeiten Informationen schnell.',
      cancer: 'Intuitives, emotionales und ausgeprägtes Erinnerungsvermögen. Ihr Denken ist an Gefühle gebunden.',
      leo: 'Kreative, ausdrucksstarke und selbstbewusste Kommunikation. Sie sprechen mit Autorität.',
      virgo: 'Analytisch, präzise und detailorientiert. Sie suchen Ordnung und Klarheit im Denken.',
      libra: 'Diplomatisch, ausgewogen und unvoreingenommen. Sie suchen Harmonie in der Kommunikation.',
      scorpio: 'Intensives, investigatives und tiefgründiges Denken. Sie versuchen, verborgene Wahrheiten aufzudecken.',
      sagittarius: 'Optimistisches, philosophisches und weitsichtiges Denken. Sie suchen Wahrheit und Erweiterung.',
      capricorn: 'Diszipliniertes, strukturiertes und praktisches Denken. Sie schätzen Logik und Tradition.',
      aquarius: 'Innovativ, originell und unkonventionell. Sie denken über den Tellerrand hinaus.',
      pisces: 'Intuitiv, fantasievoll und poetisch. Ihr Denken ist fließend und sensibel.'
    },
    venusSignInterpretations: {
      aries: 'Leidenschaftlich, direkt und unabhängig in der Liebe. Sie schätzen Aufregung und Initiative.',
      taurus: 'Sinnlich, loyal und auf der Suche nach Stabilität. Sie schätzen Komfort und körperliche Berührung.',
      gemini: 'Vielseitig, sozial und kommunikativ. Sie schätzen intellektuelle Verbindung und Abwechslung.',
      cancer: 'Fürsorglich, sensibel und auf der Suche nach Sicherheit. Sie schätzen das Zuhause und emotionale Tiefe.',
      leo: 'Dramatisch, großzügig und auf der Suche nach Anerkennung. Sie schätzen Wärme und Kreativität.',
      virgo: 'Praktisch, hilfreich und auf der Suche nach Verbesserung. Sie schätzen Dienst und Ordnung in der Liebe.',
      libra: 'Diplomatisch, künstlerisch und auf der Suche nach Gleichgewicht. Sie schätzen Harmonie und Partnerschaft.',
      scorpio: 'Intensiv, privat und transformativ. Sie schätzen tiefe emotionale Wahrheit und Loyalität.',
      sagittarius: 'Abenteuerlustig, freiheitsliebend und optimistisch. Sie schätzen Wachstum und Erkundung.',
      capricorn: 'Ernsthaft, diszipliniert und auf der Suche nach Leistung. Sie schätzen Tradition und Integrität.',
      aquarius: 'Unabhängig, einzigartig und humanitär. Sie schätzen Freundschaft und originelle Ideen.',
      pisces: 'Mitfühlend, fantasievoll und intuitiv. Sie schätzen spirituelle Verbindung und Schönheit.'
    },
    marsSignInterpretations: {
      aries: 'Dynamisches, mutiges und direktes Handeln. Sie haben einen starken Drang zur Führung.',
      taurus: 'Stetige, beharrliche und praktische Energie. Sie besitzen große Ausdauer.',
      gemini: 'Vielseitige, kommunikative und rastlose Energie. Sie blühen bei Abwechslung und Veränderung auf.',
      cancer: 'Intuitiver, beschützender und emotionaler Antrieb. Sie handeln basierend auf Gefühlen.',
      leo: 'Kreative, selbstbewusste und dramatische Energie. Sie versuchen zu inspirieren und anerkannt zu werden.',
      virgo: 'Analytisches, effizientes und detailorientiertes Handeln. Sie suchen Ordnung und Dienst.',
      libra: 'Diplomatisch, ausgewogen und auf der Suche nach Harmonie. Sie handeln durch Partnerschaft.',
      scorpio: 'Intensiver, kraftvoller und transformativer Antrieb. Sie besitzen einen starken Willen.',
      sagittarius: 'Optimistische, abenteuerlustige und freiheitsliebende Energie. Sie suchen die Wahrheit.',
      capricorn: 'Diszipliniertes, ehrgeiziges und strukturiertes Handeln. Sie schätzen harte Arbeit.',
      aquarius: 'Innovativer, origineller und unkonventioneller Antrieb. Sie suchen sozialen Fortschritt.',
      pisces: 'Intuitive, fantasievolle und sanfte Energie. Sie handeln durch Kreativität.'
    }
  },
  hi: {
    title: 'यूटिलिटी हब प्रो',
    subtitle: 'ऑल-इन-वन पेशेवर उपयोगिता उपकरण। अपनी सटीक आयु, बीएमआई फिटनेस स्तर और खरीदारी छूट की तुरंत गणना करें।',
    dobLabel: 'जन्म तिथि',
    timezoneLabel: 'समय क्षेत्र',
    birthTimeLabel: 'जन्म का समय',
    hourLabel: 'घंटा',
    minuteLabel: 'मिनट',
    calculateBtn: 'आयु की गणना करें',
    resultsTitle: 'आपकी सही आयु',
    ageLabel: 'आयु',
    lunarAge: 'चंद्र आयु',
    years: 'वर्ष',
    months: 'महीने',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    dayLabel: 'दिन',
    monthLabel: 'महीना',
    yearLabel: 'वर्ष',
    nextBirthday: 'अगला जन्मदिन',
    zodiacSign: 'राशि',
    birthstone: 'जन्म का रत्न',
    lifeStatsTitle: 'जीवन के आंकड़े (अनुमानित)',
    heartbeats: 'दिल की धड़कन',
    eyeBlinks: 'पलकें झपकना',
    sleepTime: 'सोने में बिताया समय',
    breathCount: 'सांसें लीं',
    weeks: 'सप्ताह',
    ageSummary: 'आपकी आयु {years} वर्ष, {months} महीने और {days} दिन है।',
    errorInvalidDate: 'कृपया एक वैध तिथि दर्ज करें।',
    errorFutureDate: 'जन्म तिथि भविष्य में नहीं हो सकती।',
    errorInvalidYear: 'कृपया एक वैध वर्ष दर्ज करें।',
    errorBirthAfterTarget: 'जन्म तिथि लक्ष्य वर्ष के बाद नहीं हो सकती।',
    errorStartDateAfterEndDate: 'प्रारंभ तिथि अंतिम तिथि के बाद नहीं हो सकती।',
    errorInvalidPrice: 'कृपया एक वैध सकारात्मक मूल्य दर्ज करें।',
    errorInvalidDiscount: 'छूट 0 और 100 के बीच होनी चाहिए।',
    date1Label: 'प्रारंभ तिथि',
    date2Label: 'अंतिम तिथि',
    compareBtn: 'अंतर की गणना करें',
    differenceTitle: 'समय का अंतर',
    differenceSummary: 'अंतर {years} वर्ष, {months} महीने और {days} दिन है।',
    footerText: '© 2026 यूटिलिटी हब प्रो। सर्वाधिकार सुरक्षित।',
    seoTitle: 'आयु कैलकुलेटर का उपयोग क्यों करें?',
    seoDescription: 'आयु कैलकुलेटर एक उपकरण है जो आपको आपके जन्म के बाद से बीते हुए सटीक समय को निर्धारित करने में मदद करता है।',
    selectLanguage: 'भाषा',
    shareBtn: 'परिणाम साझा करें',
    copyBtn: 'क्लिपबोर्ड पर कॉपी करें',
    copiedLabel: 'कॉपी किया गया!',
    holidayLabel: 'आगामी अवकाश (वैकल्पिक)',
    daysUntilHoliday: 'आपके अवकाश में {days} दिन शेष हैं!',
    dobRangeEndLabel: 'जन्म तिथि सीमा समाप्ति (वैकल्पिक)',
    ageRangeSummary: 'आपकी आयु सीमा {min} और {max} के बीच है।',
    easterDate: 'ईस्टर की तिथि {year}',
    targetYearLabel: 'लक्ष्य वर्ष (वैकल्पिक)',
    holidayCountdownLabel: 'छुट्टी के लिए उलटी गिनती',
    bmiCalculator: 'बीएमआई कैलकुलेटर',
    discountCalculator: 'छूट कैलकुलेटर',
    weightLabel: 'वजन (किग्रा)',
    heightLabel: 'ऊंचाई (सेमी)',
    originalPriceLabel: 'मूल मूल्य',
    discountPercentageLabel: 'छूट %',
    calculateBmiBtn: 'बीएमआई की गणना करें',
    calculateDiscountBtn: 'छूट की गणना करें',
    weightPlaceholder: 'जैसे 70',
    heightPlaceholder: 'जैसे 175',
    bmiResult: 'आपका बीएमआई {bmi} है',
    bmiCategory: 'श्रेणी: {category}',
    discountResult: 'अंतिम मूल्य: {price}',
    savingsLabel: 'आप बचाते हैं: {savings}',
    birthChartTitle: 'आपकी जन्म कुंडली',
    birthLocationLabel: 'जन्म स्थान (शहर, देश)',
    sunSignLabel: 'सूर्य राशि',
    moonSignLabel: 'चंद्र राशि',
    risingSignLabel: 'लग्न राशि',
    chineseZodiacLabel: 'चीनी राशि',
    lunarPhaseLabel: 'चंद्र चरण',
    planetaryPositionsTitle: 'ग्रहों की स्थिति',
    housesTitle: 'ज्योतिषीय भाव',
    mercuryLabel: 'बुध',
    venusLabel: 'शुक्र',
    marsLabel: 'मंगल',
    houseLabel: 'भाव {n}',
    elementLabel: 'तत्व',
    modalityLabel: 'गुण',
    rulingPlanetLabel: 'स्वामी ग्रह',
    degreeLabel: 'अंश',
    aspectsTitle: 'ज्योतिषीय दृष्टि',
    aspectTypes: {
      conjunction: 'युति',
      sextile: 'षडाष्टक',
      square: 'केंद्र',
      trine: 'त्रिकोण',
      opposition: 'प्रतियुति'
    },
    aspectDescriptions: {
      conjunction: 'ग्रह एक-दूसरे के करीब स्थित होते हैं, जिससे उनकी ऊर्जाएं विलीन हो जाती हैं। यह एक शक्तिशाली, एकीकृत शक्ति बनाता है जो दोनों ग्रहों के गुणों को तीव्र करता है, जो अक्सर आपके जीवन में एक एकल, शक्तिशाली प्रभाव के रूप में कार्य करता है।',
      sextile: 'एक सामंजस्यपूर्ण 60-डिग्री का कोण जो ग्रहों के बीच एक सहायक और मैत्रीपूर्ण संबंध बनाता है। यह अव्यक्त प्रतिभाओं और अवसरों का प्रतिनिधित्व करता है जिन्हें पूरी तरह से सक्रिय करने और लाभ उठाने के लिए थोड़े प्रयास की आवश्यकता होती है।',
      square: 'एक चुनौतीपूर्ण 90-डिग्री का कोण जो गतिशील तनाव और घर्षण पैदा करता है। यह विकास के लिए एक उत्प्रेरक के रूप में कार्य करता है, जो आपको आंतरिक या बाहरी बाधाओं को दूर करने और संघर्ष के माध्यम से शक्ति विकसित करने के लिए प्रेरित करता है।',
      trine: 'एक अत्यधिक अनुकूल 120-डिग्री का कोण जहां ऊर्जाएं स्वाभाविक रूप से और बिना किसी प्रयास के प्रवाहित होती हैं। यह जन्मजात उपहारों, भाग्य और जीवन के उन क्षेत्रों का प्रतिनिधित्व करता है जहां चीजें बिना किसी प्रतिरोध के अपने स्थान पर आती हुई प्रतीत होती हैं।',
      opposition: 'ग्रह 180 डिग्री की दूरी पर होते हैं, जिससे "सी-सॉ" प्रभाव पैदा होता है। यह पहलू आपके जीवन के दो विपरीत क्षेत्रों के बीच संतुलन और समझौते की आवश्यकता पर प्रकाश डालता है, जो अक्सर रिश्तों के माध्यम से प्रकट होता है।'
    },
    planetNames: {
      sun: 'सूर्य',
      moon: 'चंद्र',
      mercury: 'बुध',
      venus: 'शुक्र',
      mars: 'मंगल'
    },
    planetMeanings: {
      sun: 'आपकी मुख्य पहचान, अहंकार और जीवन शक्ति का प्रतिनिधित्व करता है।',
      moon: 'आपकी भावनाओं, प्रवृत्तियों और आंतरिक स्व को नियंत्रित करता है।',
      mercury: 'संचार, बुद्धि और तर्क पर शासन करता है।',
      venus: 'प्रेम, सुंदरता और व्यक्तिगत मूल्यों को प्रभावित करता है।',
      mars: 'कार्रवाई, ऊर्जा और शारीरिक इच्छा को प्रेरित करता है।',
      rising: 'आपके सामाजिक व्यक्तित्व और दूसरों द्वारा आपको कैसे देखा जाता है, इसका प्रतिनिधित्व करता है।'
    },
    zodiacInterpretationsTitle: 'राशि व्याख्या',
    zodiacReferenceTitle: '12 राशियों का अन्वेषण करें',
    lightMode: 'लाइट मोड',
    darkMode: 'डार्क मोड',
    zodiacSigns: {
      aquarius: 'कुंभ', pisces: 'मीन', aries: 'मेष', taurus: 'वृषभ',
      gemini: 'मिथुन', cancer: 'कर्क', leo: 'सिंह', virgo: 'कन्या',
      libra: 'तुला', scorpio: 'वृश्चिक', sagittarius: 'धनु', capricorn: 'मकर'
    },
    zodiacDescriptions: {
      aquarius: 'अभिनव, प्रगतिशील और मानवीय। वे दूरदर्शी विचारक हैं जो स्वतंत्रता, मौलिकता और समाज के सामूहिक कल्याण को महत्व देते हैं।',
      pisces: 'दयालु, कलात्मक और सहज। वे स्वप्निल और संवेदनशील हैं, आध्यात्मिक क्षेत्र और सामूहिक अचेतन के साथ गहरा संबंध रखते हैं।',
      aries: 'उत्साही, गतिशील और हाजिरजवाब। पहली राशि के रूप में, वे अग्रणी, साहसी हैं और कार्रवाई और नेतृत्व के लिए एक मजबूत प्रेरणा रखते हैं।',
      taurus: 'मजबूत, भरोसेमंद और कामुक। वे स्थिरता, आराम और मूर्त परिणामों को महत्व देते हैं, अक्सर महान धीरज और सुंदरता के लिए प्रशंसा रखते हैं।',
      gemini: 'बहुमुखी, अभिव्यंजक और जिज्ञासु। वे बौद्धिक गिरगिट हैं जो विविधता, संचार और विचारों के आदान-प्रदान पर फलते-फूलते हैं।',
      cancer: 'सहज, भावुक और दयालु। वे घर और परिवार से गहराई से जुड़े हुए हैं, एक सुरक्षात्मक स्वभाव और मजबूत भावनात्मक गहराई रखते हैं।',
      leo: 'नाटकीय, मिलनसार और आत्मविश्वासी। वे प्राकृतिक नेता हैं जो गर्मी और रचनात्मकता बिखेरते हैं, प्रेरित करने और अपने अद्वितीय उपहारों के लिए पहचाने जाने की तलाश करते हैं।',
      virgo: 'वफादार, विश्लेषणात्मक और दयालु। वे सूक्ष्म पूर्णतावादी हैं जो व्यवस्था, स्वास्थ्य और सेवा करने की इच्छा के माध्यम से दुनिया को समझने की कोशिश करते हैं।',
      libra: 'राजनयिक, कलात्मक और बुद्धिमान। वे सभी चीजों में संतुलन और सद्भाव चाहते हैं, साझेदारी, निष्पक्षता और सौंदर्य की सुंदरता को महत्व देते हैं।',
      scorpio: 'भावुक, जिद्दी और साधन संपन्न। वे तीव्र और परिवर्तनकारी हैं, एक चुंबकीय उपस्थिति और छिपी हुई सच्चाइयों को उजागर करने की आवश्यकता रखते हैं।',
      sagittarius: 'बहिर्मुखी, आशावादी और मजाकिया। वे दार्शनिक साहसी हैं जो यात्रा, सीखने और स्वतंत्रता के माध्यम से सच्चाई और विस्तार की तलाश करते हैं।',
      capricorn: 'गंभीर, स्वतंत्र और अनुशासित। वे महत्वाकांक्षी निर्माता हैं जो परंपरा, कड़ी मेहनत और ईमानदारी के साथ दीर्घकालिक लक्ष्यों को प्राप्त करने को महत्व देते हैं।'
    },
    chineseZodiacSigns: {
      rat: 'चूहा', ox: 'बैल', tiger: 'बाघ', rabbit: 'खरगोश', dragon: 'ड्रैगन', snake: 'सांप',
      horse: 'घोड़ा', goat: 'बकरी', monkey: 'बंदर', rooster: 'मुर्गा', dog: 'कुत्ता', pig: 'सुअर'
    },
    chineseZodiacDescriptions: {
      rat: 'तेज-तर्रार, संसाधन संपन्न, बहुमुखी, दयालु।',
      ox: 'मेहनती, भरोसेमंद, मजबूत, दृढ़निश्चयी।',
      tiger: 'बहादुर, आत्मविश्वासी, प्रतिस्पर्धी, अप्रत्याशित।',
      rabbit: 'शांत, सुरुचिपूर्ण, दयालु, जिम्मेदार।',
      dragon: 'आत्मविश्वासी, बुद्धिमान, उत्साही।',
      snake: 'रहस्यमय, बुद्धिमान, समझदार।',
      horse: 'जीवंत, सक्रिय, ऊर्जावान।',
      goat: 'शांत, कोमल, सहानुभूतिपूर्ण।',
      monkey: 'तेज, स्मार्ट, जिज्ञासु।',
      rooster: 'सतर्क, मेहनती, साहसी।',
      dog: 'प्यारा, ईमानदार, विवेकपूर्ण।',
      pig: 'दयालु, उदार, मेहनती।'
    },
    lunarPhases: {
      new_moon: 'अमावस्या', waxing_crescent: 'शुक्ल पक्ष प्रतिपदा', first_quarter: 'शुक्ल पक्ष अष्टमी',
      waxing_gibbous: 'शुक्ल पक्ष एकादशी', full_moon: 'पूर्णिमा', waning_gibbous: 'कृष्ण पक्ष चतुर्थी',
      last_quarter: 'कृष्ण पक्ष अष्टमी', waning_crescent: 'कृष्ण पक्ष द्वादशी'
    },
    birthstones: {
      january: 'गारनेट', february: 'नीलम', march: 'एक्वामरीन', april: 'हीरा',
      may: 'पन्ना', june: 'मोती', july: 'माणिक', august: 'पेरिडॉट',
      september: 'नीलम', october: 'ओपल', november: 'पुखराज', december: 'फिरोजा'
    },
    elements: {
      fire: 'अग्नि', earth: 'पृथ्वी', air: 'वायु', water: 'जल'
    },
    modalities: {
      cardinal: 'चर', fixed: 'स्थिर', mutable: 'द्विस्वभाव'
    },
    rulingPlanets: {
      sun: 'सूर्य', moon: 'चंद्र', mercury: 'बुध', venus: 'शुक्र', mars: 'मंगल',
      jupiter: 'बृहस्पति', saturn: 'शनि', uranus: 'अरुण', neptune: 'वरुण', pluto: 'यम'
    },
    elementMeanings: {
      fire: 'अग्नि तत्व की राशियाँ ऊर्जावान, भावुक और गतिशील होती हैं। वे अपनी रचनात्मकता, नेतृत्व और प्रेरणा के लिए जानी जाती हैं।',
      earth: 'पृथ्वी तत्व की राशियाँ जमीन से जुड़ी, व्यावहारिक और भरोसेमंद होती हैं। वे स्थिरता, कड़ी मेहनत और भौतिक सुरक्षा को महत्व देती हैं।',
      air: 'वायु तत्व की राशियाँ बौद्धिक, सामाजिक और संचारी होती हैं। वे अपने विचारों, निष्पक्षता और सामाजिक कौशल के लिए जानी जाती हैं।',
      water: 'जल तत्व की राशियाँ भावुक, सहज और संवेदनशील होती हैं। वे अपनी भावनाओं और दूसरों की भावनाओं से गहराई से जुड़ी होती हैं।'
    },
    modalityMeanings: {
      cardinal: 'चर राशियाँ राशि चक्र की प्रवर्तक होती हैं। वे महत्वाकांक्षी, उद्यमशील होती हैं और नई परियोजनाएं शुरू करना पसंद करती हैं।',
      fixed: 'स्थिर राशियाँ राशि चक्र की निर्माता होती हैं। वे दृढ़, स्थिर होती हैं और मौजूदा चीजों को बनाए रखना और सुधारना पसंद करती हैं।',
      mutable: 'द्विस्वभाव राशियाँ राशि चक्र की अनुकूलक होती हैं। वे लचीली, बहुमुखी होती हैं और प्रवाह के साथ चलना पसंद करती हैं।',
    },
    rulingPlanetMeanings: {
      mars: 'मंगल ऊर्जा, क्रिया और इच्छा का प्रतिनिधित्व करता है। यह हमारे अभियान, महत्वाकांक्षा और शारीरिक ऊर्जा पर शासन करता है।',
      venus: 'शुक्र प्रेम, सौंदर्य और सद्भाव का प्रतिनिधित्व करता है। यह हमारे मूल्यों, रिश्तों और सौंदर्य बोध पर शासन करता है।',
      mercury: 'बुध संचार, बुद्धि और यात्रा का प्रतिनिधित्व करता है। यह हमारे विचारों, तर्क और हम जानकारी को कैसे संसाधित करते हैं, इस पर शासन करता है।',
      moon: 'चंद्रमा भावनाओं, अंतर्ज्ञान और अवचेतन का प्रतिनिधित्व करता है। यह हमारी आंतरिक दुनिया और भावनात्मक जरूरतों पर शासन करता है।',
      sun: 'सूर्य मुख्य स्व, अहंकार और जीवन शक्ति का प्रतिनिधित्व करता है। यह हमारे बुनियादी व्यक्तित्व और जीवन शक्ति पर शासन करता है।',
      pluto: 'यम परिवर्तन, शक्ति और पुनर्जन्म का प्रतिनिधित्व करता है। यह गहरे परिवर्तन और अवचेतन मन पर शासन करता है।',
      jupiter: 'बृहस्पति विस्तार, भाग्य और ज्ञान का प्रतिनिधित्व करता है। यह हमारे विकास, दर्शन और उच्च शिक्षा पर शासन करता है।',
      saturn: 'शनि संरचना, अनुशासन और जिम्मेदारी का प्रतिनिधित्व करता है। यह हमारी सीमाओं, पाठों और दीर्घकालिक लक्ष्यों पर शासन करता है।',
      uranus: 'अरुण नवाचार, विद्रोह और अचानक परिवर्तन का प्रतिनिधित्व करता है। यह हमारी मौलिकता और भविष्योन्मुखी सोच पर शासन करता है।',
      neptune: 'वरुण सपनों, अंतर्ज्ञान और आध्यात्मिकता का प्रतिनिधित्व करता है। यह हमारी कल्पना और परमात्मा के साथ संबंध पर शासन करता है।'
    },
    sunSignDetailedDescription: 'सूर्य आपकी मुख्य पहचान, आपके सचेत मन और आपकी रचनात्मक जीवन शक्ति का प्रतिनिधित्व करता है। यह आपके व्यक्तित्व का "मैं हूं" है, जो दिखाता है कि आप कैसे चमकते हैं और आप अपनी अद्वितीय व्यक्तित्व को कहां व्यक्त करना चाहते हैं। यह आपके बुनियादी चरित्र, आपके अहंकार और जीवन में आपकी प्राथमिक प्रेरणाओं को नियंत्रित करता है।',
    sunSignInterpretations: {
      aries: 'मेष राशि के सूर्य के रूप में, आप एक प्राकृतिक नेता हैं, जो कार्रवाई और नई शुरुआत की आवश्यकता से प्रेरित हैं। आपकी ऊर्जा अग्रणी, साहसी और प्रत्यक्ष है। आप उत्साह और पहले होने की इच्छा के साथ जीवन के करीब आते हैं, अक्सर आत्म की मजबूत भावना के साथ आवेग पर कार्य करते हैं।',
      taurus: 'वृषभ राशि के सूर्य के रूप में, आप स्थिरता, आराम और सुरक्षा चाहते हैं। आप मूर्त और स्थायी को महत्व देते हैं, धैर्य और व्यावहारिक मानसिकता के साथ जीवन के करीब आते हैं। आप अपनी दृढ़ता, वफादारी और जीवन की बेहतर चीजों की सराहना के लिए जाने जाते हैं।',
      gemini: 'मिथुन राशि के सूर्य के रूप में, आप जिज्ञासा और संचार की आवश्यकता से प्रेरित हैं। आपका मन बहुमुखी, त्वरित और अनुकूलनीय है। आप सूचना और सामाजिक संपर्क के माध्यम से दुनिया को समझने की कोशिश करते हैं, अक्सर एक दोहरी प्रकृति रखते हैं जो आपको कई दृष्टिकोणों को देखने की अनुमति देती है।',
      cancer: 'कर्क राशि के सूर्य के रूप में, आप गहराई से सहज और भावनात्मक रूप से संवेदनशील हैं। आपकी मुख्य पहचान घर, परिवार और भावनात्मक सुरक्षा की आवश्यकता से जुड़ी है। आप पोषण करने वाले, सुरक्षात्मक हैं और अपने अतीत और आंतरिक भावनाओं के साथ एक मजबूत संबंध रखते हैं।',
      leo: 'सिंह राशि के सूर्य के रूप में, आप रचनात्मक, अभिव्यंजक हैं और पहचाने जाने की तलाश में हैं। आपकी ऊर्जा गर्म, उदार और करिश्माई है। आप नाटक की भावना और नेतृत्व करने की इच्छा के साथ जीवन के करीब आते हैं, अक्सर गर्व की मजबूत भावना और प्रशंसा की आवश्यकता रखते हैं।',
      virgo: 'कन्या राशि के सूर्य के रूप में, आप विश्लेषणात्मक, व्यावहारिक और विस्तार-उन्मुख हैं। आप सेवा और दक्षता के माध्यम से अपने और अपने आसपास की दुनिया को बेहतर बनाने की कोशिश करते हैं। आप व्यवस्था, स्वास्थ्य और सटीकता को महत्व देते हैं, अक्सर एक विनम्र और सहायक स्वभाव रखते हैं।',
      libra: 'तुला राशि के सूर्य के रूप में, आप संतुलन, सद्भाव और साझेदारी चाहते हैं। आपकी पहचान आपके रिश्तों और न्याय की भावना से जुड़ी है। आप राजनयिक, कलात्मक और सामाजिक रूप से सुंदर हैं, अक्सर एक निष्पक्ष समाधान खोजने के लिए स्थिति के सभी पक्षों को देखने का प्रयास करते हैं।',
      scorpio: 'वृश्चिक राशि के सूर्य के रूप में, आप तीव्र, भावुक और गहराई से साधन संपन्न हैं। आप जीवन की छिपी गहराई को समझने की कोशिश करते हैं और परिवर्तन से डरते नहीं हैं। आपके पास एक मजबूत इच्छाशक्ति, एक चुंबकीय उपस्थिति और भावनात्मक सच्चाई की आवश्यकता है।',
      sagittarius: 'धनु राशि के सूर्य के रूप में, आप आशावादी, साहसी हैं और अन्वेषण के माध्यम से अर्थ खोजते हैं। आपकी ऊर्जा विस्तृत और स्वतंत्रता-प्रेमी है। आप एक दार्शनिक मानसिकता और सच्चाई की इच्छा के साथ जीवन के करीब आते हैं, अक्सर हास्य की एक महान भावना रखते हैं।',
      capricorn: 'मकर राशि के सूर्य के रूप में, आप अनुशासित, महत्वाकांक्षी हैं और कुछ स्थायी बनाने की कोशिश करते हैं। आप कड़ी मेहनत, जिम्मेदारी और परंपरा को महत्व देते हैं। आप एक गंभीर और व्यावहारिक मानसिकता के साथ जीवन के करीब आते हैं, अक्सर अखंडता की मजबूत भावना और उपलब्धि की इच्छा रखते हैं।',
      aquarius: 'कुंभ राशि के सूर्य के रूप में, आप अभिनव, स्वतंत्र हैं और समाज को बेहतर बनाने की कोशिश करते हैं। आपकी पहचान आपके अद्वितीय विचारों और आपके मानवीय आदर्शों से जुड़ी है। आप प्रगतिशील, बौद्धिक हैं और अक्सर एक विद्रोही या अपरंपरागत स्वभाव रखते हैं।',
      pisces: 'मीन राशि के सूर्य के रूप में, आप दयालु, कलात्मक और गहराई से सहज हैं। आपकी मुख्य पहचान आपकी कल्पना और आध्यात्मिक या सामूहिक अचेतन के साथ आपके संबंध से जुड़ी है। आप सहानुभूति रखने वाले, संवेदनशील हैं और अक्सर एक स्वप्निल या रहस्यमय स्वभाव रखते हैं।'
    },
    moonSignInterpretations: {
      aries: 'आपकी भावनात्मक दुनिया तेज़ और भावुक है। आप तत्काल भावनाओं और स्वतंत्रता की आवश्यकता के साथ जीवन पर प्रतिक्रिया करते हैं। आप कार्रवाई में आराम पाते हैं और आपका भावनात्मक स्वभाव उत्साही लेकिन जल्दी क्षमा करने वाला हो सकता है।',
      taurus: 'आप भावनात्मक स्थिरता और शारीरिक आराम चाहते हैं। आप स्थिर, वफादार हैं और प्रकृति और इंद्रियों में शांति पाते हैं। आप भावनात्मक रूप से प्रतिक्रिया करने में धीमे हो सकते हैं लेकिन आपके पास महान सहनशक्ति है।',
      gemini: 'आपकी भावनाएं बौद्धिक और संचारी हैं। आप विविधता, सीखने और सामाजिक संपर्क में आराम पाते हैं। आप तेजी से बदलती मनोदशा और अपनी भावनाओं के बारे में बात करने की आवश्यकता का अनुभव कर सकते हैं।',
      cancer: 'आप गहराई से संवेदनशील और पोषण करने वाले हैं। आपकी भावनाएं आपके घर और परिवार से जुड़ी हैं। आपके पास एक मजबूत स्मृति और भावनात्मक सुरक्षा और अपनेपन की आवश्यकता है।',
      leo: 'आपकी भावनाएं नाटकीय, गर्म और उदार हैं। आप पहचान चाहते हैं और रचनात्मक अभिव्यक्ति में आराम पाते हैं और उन लोगों के लिए ध्यान का केंद्र बनना पसंद करते हैं जिन्हें आप प्यार करते हैं।',
      virgo: 'आप विश्लेषण और सेवा के माध्यम से भावनाओं को संसाधित करते हैं। आप व्यवस्था, स्वास्थ्य और उपयोगिता में आराम पाते हैं। आप आत्म-आलोचनात्मक हो सकते हैं और व्यावहारिक कदमों के माध्यम से अपने भावनात्मक कल्याण में सुधार करना चाहते हैं।',
      libra: 'आप रिश्तों के माध्यम से भावनात्मक संतुलन और सद्भाव चाहते हैं। आप स्वभाव से राजनयिक हैं और सुंदरता और साझेदारी में आराम पाते हैं। जब भावनाएं शामिल होती हैं तो आप अनिर्णय के साथ संघर्ष कर सकते हैं।',
      scorpio: 'आपका भावनात्मक जीवन तीव्र, निजी और परिवर्तनकारी है। आप गहरी भावनात्मक सच्चाई की तलाश करते हैं और महान लचीलापन रखते हैं। आप शक्तिशाली भावनाओं का अनुभव कर सकते हैं जिन्हें आप दुनिया से गुप्त रखते हैं।',
      sagittarius: 'आपकी भावनाएं विस्तृत, आशावादी और स्वतंत्रता-प्रेमी हैं। आप अन्वेषण, दर्शन और हास्य की एक अच्छी भावना में आराम पाते हैं। आप नए अनुभवों के माध्यम से भावनात्मक विकास चाहते हैं।',
      capricorn: 'आप भावनात्मक रूप से अनुशासित, गंभीर और आरक्षित हैं। आप संरचना, उपलब्धि और परंपरा में आराम पाते हैं। आपको भेद्यता दिखाने में कठिनाई हो सकती है लेकिन आपके पास महान भावनात्मक अखंडता है।',
      aquarius: 'आपकी भावनाएं बौद्धिक, स्वतंत्र और मानवीय हैं। आप दोस्ती और अद्वितीय विचारों में आराम पाते हैं। आप अलग लग सकते हैं लेकिन सामूहिक कल्याण के लिए गहरी चिंता रखते हैं।',
      pisces: 'आप गहराई से सहानुभूति रखने वाले, कल्पनाशील और सहज हैं। आपकी भावनाएं तरल हैं और आध्यात्मिक क्षेत्र से जुड़ी हैं। आप रचनात्मकता में आराम पाते हैं और दूसरों की भावनाओं के प्रति बहुत संवेदनशील हो सकते हैं।'
    },
    risingSignInterpretations: {
      aries: 'आप एक गतिशील, ऊर्जावान और अग्रणी व्यक्तित्व पेश करते हैं। दूसरे आपको साहसी, प्रत्यक्ष और नेतृत्व करने वाले व्यक्ति के रूप में देखते हैं। आप उत्साह और नई शुरुआत की इच्छा के साथ दुनिया के करीब आते हैं।',
      taurus: 'आप एक स्थिर, विश्वसनीय और शांत व्यक्तित्व पेश करते हैं। दूसरे आपको जमीन से जुड़े, सुंदरता की सराहना करने वाले और गुणवत्ता को महत्व देने वाले व्यक्ति के रूप में देखते हैं। आप धैर्य और व्यावहारिक मानसिकता के साथ दुनिया के करीब आते हैं।',
      gemini: 'आप एक बहुमुखी, संचारी और जिज्ञासु व्यक्तित्व पेश करते हैं। दूसरे आपको तेज-तर्रार, मिलनसार और बौद्धिक रूप से व्यस्त व्यक्ति के रूप में देखते हैं। आप सूचना और विविधता की इच्छा के साथ दुनिया के करीब आते हैं।',
      cancer: 'आप एक पोषण करने वाले, संवेदनशील और सुलभ व्यक्तित्व पेश करते हैं। दूसरे आपको देखभाल करने वाले, सहज और घर और परिवार को महत्व देने वाले व्यक्ति के रूप में देखते हैं। आप एक सतर्क लेकिन गर्म दिल के साथ दुनिया के करीब आते हैं।',
      leo: 'आप एक करिश्माई, रचनात्मक और आत्मविश्वासी व्यक्तित्व पेश करते हैं। दूसरे आपको गर्म, उदार और स्वाभाविक रूप से नेतृत्व करने वाले व्यक्ति के रूप में देखते हैं। आप नाटक की भावना और देखे जाने की इच्छा के साथ दुनिया के करीब आते हैं।',
      virgo: 'आप एक विश्लेषणात्मक, व्यावहारिक और सहायक व्यक्तित्व पेश करते हैं। दूसरे आपको विस्तार-उन्मुख, कुशल और स्वास्थ्य और व्यवस्था को महत्व देने वाले व्यक्ति के रूप में देखते हैं। आप उपयोगी होने की इच्छा के साथ दुनिया के करीब आते हैं।',
      libra: 'आप एक राजनयिक, कलात्मक और सामाजिक रूप से सुंदर व्यक्तित्व पेश करते हैं। दूसरे आपको निष्पक्ष, आकर्षक और सद्भाव को महत्व देने वाले व्यक्ति के रूप में देखते हैं। आप संतुलन और साझेदारी की इच्छा के साथ दुनिया के करीब आते हैं।',
      scorpio: 'आप एक तीव्र, चुंबकीय और निजी व्यक्तित्व पेश करते हैं। दूसरे आपको शक्तिशाली, साधन संपन्न और गहराई चाहने वाले व्यक्ति के रूप में देखते हैं। आप एक मजबूत इच्छाशक्ति और सच्चाई की आवश्यकता के साथ दुनिया के करीब आते हैं।',
      sagittarius: 'आप एक आशावादी, साहसी और स्वतंत्रता-प्रेमी व्यक्तित्व पेश करते हैं। दूसरे आपको दार्शनिक, मजेदार और अर्थ खोजने वाले व्यक्ति के रूप में देखते हैं। आप आश्चर्य और अन्वेषण की भावना के साथ दुनिया के करीब आते हैं।',
      capricorn: 'आप एक अनुशासित, महत्वाकांक्षी और गंभीर व्यक्तित्व पेश करते हैं। दूसरे आपको जिम्मेदार, पेशेवर और उपलब्धि को महत्व देने वाले व्यक्ति के रूप में देखते हैं। आप एक व्यावहारिक और संरचित मानसिकता के साथ दुनिया के करीब आते हैं।',
      aquarius: 'आप एक अभिनव, स्वतंत्र और अद्वितीय व्यक्तित्व पेश करते हैं। दूसरे आपको प्रगतिशील, बौद्धिक और मानवीय आदर्शों को महत्व देने वाले व्यक्ति के रूप में देखते हैं। आप मूल विचारों के साथ दुनिया के करीब आते हैं।',
      pisces: 'आप एक दयालु, कल्पनाशील और सहज व्यक्तित्व पेश करते हैं। दूसरे आपको सहानुभूति रखने वाले, संवेदनशील और रहस्यमय स्वभाव वाले व्यक्ति के रूप में देखते हैं। आप एक स्वप्निल और कोमल उपस्थिति के साथ दुनिया के करीब आते हैं।'
    },
    mercurySignInterpretations: {
      aries: 'प्रत्यक्ष, त्वरित और मुखर संचार। आप तेजी से सोचते हैं और अपनी बात कहते हैं।',
      taurus: 'व्यावहारिक, स्थिर और विचारशील सोच। आप ठोस तथ्यों और तर्क को महत्व देते हैं।',
      gemini: 'बहुमुखी, जिज्ञासु और अत्यधिक संचारी। आप जानकारी को तेजी से संसाधित करते हैं।',
      cancer: 'सहज, भावनात्मक और धारण करने वाली स्मृति। आपकी सोच भावनाओं से जुड़ी है।',
      leo: 'रचनात्मक, अभिव्यंजक और आत्मविश्वासी संचार। आप अधिकार के साथ बोलते हैं।',
      virgo: 'विश्लेषणात्मक, सटीक और विस्तार-उन्मुख। आप विचार में व्यवस्था और स्पष्टता चाहते हैं।',
      libra: 'राजनयिक, संतुलित और निष्पक्ष। आप संचार में सद्भाव चाहते हैं।',
      scorpio: 'तीव्र, खोजी और गहरी सोच। आप छिपी हुई सच्चाइयों को उजागर करना चाहते हैं।',
      sagittarius: 'आशावादी, दार्शनिक और व्यापक सोच। आप सच्चाई और विस्तार चाहते हैं।',
      capricorn: 'अनुशासित, संरचित और व्यावहारिक सोच। आप तर्क और परंपरा को महत्व देते हैं।',
      aquarius: 'अभिनव, मौलिक और अपरंपरागत। आप लीक से हटकर सोचते हैं।',
      pisces: 'सहज, कल्पनाशील और काव्यात्मक। आपकी सोच तरल और संवेदनशील है।'
    },
    venusSignInterpretations: {
      aries: 'प्रेम में भावुक, प्रत्यक्ष और स्वतंत्र। आप उत्साह और पहल को महत्व देते हैं।',
      taurus: 'कामुक, वफादार और स्थिरता की तलाश में। आप आराम और शारीरिक स्पर्श को महत्व देते हैं।',
      gemini: 'बहुमुखी, सामाजिक और संचारी। आप बौद्धिक संबंध और विविधता को महत्व देते हैं।',
      cancer: 'पोषण करने वाला, संवेदनशील और सुरक्षा की तलाश में। आप घर और भावनात्मक गहराई को महत्व देते हैं।',
      leo: 'नाटकीय, उदार और प्रशंसा की तलाश में। आप गर्मजोशी और रचनात्मकता को महत्व देते हैं।',
      virgo: 'व्यावहारिक, सहायक और सुधार की तलाश में। आप प्रेम में सेवा और व्यवस्था को महत्व देते हैं।',
      libra: 'राजनयिक, कलात्मक और संतुलन की तलाश में। आप सद्भाव और साझेदारी को महत्व देते हैं।',
      scorpio: 'तीव्र, निजी और परिवर्तनकारी। आप गहरी भावनात्मक सच्चाई और वफादारी को महत्व देते हैं।',
      sagittarius: 'साहसी, स्वतंत्रता-प्रेमी और आशावादी। आप विकास और अन्वेषण को महत्व देते हैं।',
      capricorn: 'गंभीर, अनुशासित और उपलब्धि की तलाश में। आप परंपरा और अखंडता को महत्व देते हैं।',
      aquarius: 'स्वतंत्र, अद्वितीय और मानवीय। आप मित्रता और मूल विचारों को महत्व देते हैं।',
      pisces: 'दयालु, कल्पनाशील और सहज। आप आध्यात्मिक संबंध और सुंदरता को महत्व देते हैं।'
    },
    marsSignInterpretations: {
      aries: 'गतिशील, साहसी और प्रत्यक्ष कार्रवाई। आपके पास नेतृत्व के लिए एक मजबूत प्रेरणा है।',
      taurus: 'स्थिर, निरंतर और व्यावहारिक ऊर्जा। आपके पास महान सहनशक्ति है।',
      gemini: 'बहुमुखी, संचारी और बेचैन ऊर्जा। आप विविधता और परिवर्तन पर फलते-फूलते हैं।',
      cancer: 'सहज, सुरक्षात्मक और भावनात्मक प्रेरणा। आप भावनाओं के आधार पर कार्रवाई करते हैं।',
      leo: 'रचनात्मक, आत्मविश्वासी और नाटकीय ऊर्जा। आप प्रेरित करने और पहचाने जाने की तलाश करते हैं।',
      virgo: 'विश्लेषणात्मक, कुशल और विस्तार-उन्मुख कार्रवाई। आप व्यवस्था और सेवा चाहते हैं।',
      libra: 'राजनयिक, संतुलित और सद्भाव की तलाश में। आप साझेदारी के माध्यम से कार्रवाई करते हैं।',
      scorpio: 'तीव्र, शक्तिशाली और परिवर्तनकारी प्रेरणा। आपके पास एक मजबूत इच्छाशक्ति है।',
      sagittarius: 'आशावादी, साहसी और स्वतंत्रता-प्रेमी ऊर्जा। आप सच्चाई की तलाश करते हैं।',
      capricorn: 'अनुशासित, महत्वाकांक्षी और संरचित कार्रवाई। आप कड़ी मेहनत को महत्व देते हैं।',
      aquarius: 'अभिनव, मौलिक और अपरंपरागत प्रेरणा। आप सामाजिक प्रगति चाहते हैं।',
      pisces: 'सहज, कल्पनाशील और कोमल ऊर्जा। आप रचनात्मकता के माध्यम से कार्रवाई करते हैं।'
    }
  }
};
