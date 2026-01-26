// src/data/travel.tsx
// Customize this file with your actual travel experiences!

export interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  flag: string;
  visitDate: string;
  type: 'vacation' | 'work' | 'living' | 'performance';
  highlights: string[];
  photos: string[];
  story: string;
}

export interface TravelStats {
  countriesVisited: number;
  citiesVisited: number;
  continents: number;
  favoritePlaces: string[];
}

export const TRAVEL_DATA = {
  locations: [
    {
      id: 'toronto-living',
      name: 'Toronto',
      country: 'Canada',
      coordinates: [43.6532, -79.3832],
      flag: '🇨🇦',
      visitDate: 'Home',
      type: 'living' as const,
      highlights: ['CN Tower', 'Kensington Market', 'Toronto Islands', 'Music Scene'],
      photos: [
        '/travel/toronto-1.jpg',
        '/travel/toronto-2.jpg',
      ],
      story: "Home sweet home. The diversity, the neighborhoods, the lake, the music venues - everything I need is here. Each season brings a different vibe to the city.",
    },
    {
      id: 'tokyo-2024',
      name: 'Tokyo',
      country: 'Japan',
      coordinates: [35.6762, 139.6503],
      flag: '🇯🇵',
      visitDate: 'March 2024',
      type: 'vacation' as const,
      highlights: ['Cherry Blossoms', 'Shibuya Crossing', 'TeamLab Borderless', 'Ramen'],
      photos: [
        '/travel/tokyo-1.jpg',
        '/travel/tokyo-2.jpg',
      ],
      story: "First time in Japan during cherry blossom season. The blend of ultra-modern technology and ancient tradition was mind-blowing. Got lost in the best way possible.",
    },
    {
      id: 'nyc-2023',
      name: 'New York City',
      country: 'USA',
      coordinates: [40.7128, -74.0060],
      flag: '🇺🇸',
      visitDate: 'September 2023',
      type: 'vacation' as const,
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/nyc-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    // Add your own locations here!
  ] as Location[],

  stats: {
    countriesVisited: 3,
    citiesVisited: 8,
    continents: 2,
    favoritePlaces: ['Toronto', 'Tokyo', 'New York City'],
  } as TravelStats,
};