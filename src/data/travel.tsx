// src/data/travel.tsx
// Customize this file with your actual travel experiences!

export interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  flag: string;
  visitDate: string;
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
      id: 'toronto',
      name: 'Toronto',
      country: 'Canada',
      coordinates: [43.6532, -79.3832],
      flag: '🇨🇦',
      visitDate: 'Home',
      highlights: ['CN Tower', 'Kensington Market', 'Toronto Islands', 'Music Scene'],
      photos: [
        '/travel/toronto-1.jpg',
        '/travel/toronto-2.jpg',
      ],
      story: "Home sweet home. The diversity, the neighborhoods, the lake, the music venues - everything I need is here. Each season brings a different vibe to the city.",
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      country: 'Japan',
      coordinates: [35.6762, 139.6503],
      flag: '🇯🇵',
      visitDate: 'June 2024',
      highlights: ['Cherry Blossoms', 'Shibuya Crossing', 'TeamLab Borderless', 'Ramen'],
      photos: [
        '/travel/tokyo-1.jpg',
        '/travel/tokyo-2.jpg',
      ],
      story: "First time in Japan during cherry blossom season. The blend of ultra-modern technology and ancient tradition was mind-blowing. Got lost in the best way possible.",
    },
    {
      id: 'kansai',
      name: 'Kansai',
      country: 'Japan',
      coordinates: [34.8, 135.5],
      flag: '🇯🇵',
      visitDate: 'June 2024',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'vancouver',
      name: 'Vancouver',
      country: 'Canada',
      coordinates: [49.2827, -123.1207],
      flag: '🇨🇦',
      visitDate: 'April 2024',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/vancouver-1.jpg',
        '/travel/vancouver-2.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'edmonton',
      name: 'Edmonton',
      country: 'Canada',
      coordinates: [53.5462, -113.4937],
      flag: '🇨🇦',
      visitDate: 'June 2024 | July 2025',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'austin',
      name: 'Austin',
      country: 'USA',
      coordinates: [30.2672, -97.7431],
      flag: '🇺🇸',
      visitDate: 'November 2023',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'sanfrancisco',
      name: 'San Francisco',
      country: 'USA',
      coordinates: [37.7749, -122.4194],
      flag: '🇺🇸',
      visitDate: 'March 2025',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'chicago',
      name: 'Chicago',
      country: 'USA',
      coordinates: [41.8832, -87.6324],
      flag: '🇺🇸',
      visitDate: 'April 2017 | December 2024',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'chihuahua',
      name: 'Chihuahua',
      country: 'Mexico',
      coordinates: [28.6434, -106.0588],
      flag: '🇲🇽',
      visitDate: 'June 2024 | July 2025',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'punta-cana',
      name: 'Punta Cana',
      country: 'Dominican Republic',
      coordinates: [18.5601, -68.3725],
      flag: '🇩🇴',
      visitDate: 'February 2016 | October 2024',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'ottawa',
      name: 'Ottawa',
      country: 'Canada',
      coordinates: [45.4201, -75.7003],
      flag: '🇨🇦',
      visitDate: 'Quite a few times',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'montreal',
      name: 'Montreal',
      country: 'Canada',
      coordinates: [45.5019, -73.5674],
      flag: '🇨🇦',
      visitDate: 'Spawn point',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'halifax',
      name: 'Halifax',
      country: 'Canada',
      coordinates: [44.6509, -63.5923],
      flag: '🇨🇦',
      visitDate: 'July 2007 | August 2025',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'pei',
      name: 'PEI',
      country: 'Canada',
      coordinates: [46.3188, -63.1461],
      flag: '🇨🇦',
      visitDate: 'July 2018',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'houston',
      name: 'Houston',
      country: 'USA',
      coordinates: [29.7601, -95.3701],
      flag: '🇺🇸',
      visitDate: 'November 2023',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'new-york-city',
      name: 'New York City',
      country: 'USA',
      coordinates: [40.7128, -74.0060],
      flag: '🇺🇸',
      visitDate: 'June 2007',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'boston',
      name: 'Boston',
      country: 'USA',
      coordinates: [42.3555, -75.0565],
      flag: '🇺🇸',
      visitDate: 'A few times',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
    {
      id: 'orlando',
      name: 'Orlando',
      country: 'USA',
      coordinates: [28.5384, -81.3789],
      flag: '🇺🇸',
      visitDate: 'February 2009',
      highlights: ['Brooklyn Music Scene', 'Central Park', 'Times Square', 'Pizza'],
      photos: [
        '/travel/osaka-1.jpg',
        '/travel/kyoto-1.jpg',
        '/travel/kobe-1.jpg',
      ],
      story: "The energy is incomparable. Spent days wandering through different neighborhoods, each feeling like its own city. The music scene in Brooklyn is incredible.",
    },
  ] as Location[],

  stats: {
    countriesVisited: 1,
    citiesVisited: 1,
    continents: 3,
  } as TravelStats,
};