export const signAttributes: Record<string, { element: string, modality: string, rulingPlanet: string }> = {
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

export const elementIcons: Record<string, string> = {
  fire: 'Flame',
  earth: 'Mountain',
  air: 'Wind',
  water: 'Waves'
};
