'use client';

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { MapPin, Calendar, Camera } from 'lucide-react';
import type { Location, TravelStats } from '@/data/travel';

// Dynamic import
const Globe = dynamic(() => import('react-globe.gl'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading Globe...</p>
      </div>
    </div>
  )
});

interface GlobeTravelProps {
  locations: Location[];
  stats: TravelStats;
}

export function GlobeTravel({ locations, stats }: GlobeTravelProps) {
  const globeRef = useRef<any>();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);

  // Determine current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  // Ensure component is mounted before rendering (prevents hydration issues)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable zoom but keep rotation - FIXED: use controls() as a method
  useEffect(() => {
    if (globeReady && globeRef.current) {
      // controls() is a METHOD that returns the OrbitControls instance
      const controls = globeRef.current.controls();
      if (controls) {
        controls.enableZoom = false;
        // Optional: you can also configure other controls here
        // controls.enablePan = false; // Disable panning if needed
        // controls.autoRotate = true; // Enable auto-rotation
        // controls.autoRotateSpeed = 0.5; // Set rotation speed
      }
    }
  }, [globeReady]);
  
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  
  // Add this useEffect to handle responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 480) {
        setDimensions({ width: 400, height: 400 });
      } else if (screenWidth < 768) {
        setDimensions({ width: 400, height: 400 });
      } else if (screenWidth < 1024) {
        setDimensions({ width: 600, height: 600 });
      } else {
        setDimensions({ width: 1400, height: 1400 });
      }
    };
  
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Transform locations for globe markers
  const markerData = locations.map((loc) => ({
    lat: loc.coordinates[0],
    lng: loc.coordinates[1],
    size: 0.8,
    color: '#f59e0b',
    label: loc.name,
    location: loc,
  }));

  const handleMarkerClick = (marker: any) => {
    setSelectedLocation(marker.location);
    setDialogOpen(true);
  };

  // Handle globe ready event
  const handleGlobeReady = () => {
    setGlobeReady(true);
  };

  // Globe configuration - same for both themes
  const globeConfig = {
    globeImageUrl: 'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
    backgroundColor: 'rgba(0,0,0,0)',
    atmosphereColor: isDark ? '#3b82f6' : '#93c5fd',
    atmosphereAltitude: 0.15,
    showAtmosphere: true,
  };

  // Don't render until mounted (prevents theme flash)
  if (!mounted) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section id="travel" className="w-full py-12 relative">
      {/* Background gradient - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />
      
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel & Experiences</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to check out some of the cities I&apos;ve visited! Click on a marker to see more!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 md:-mb-12 lg:-mb-48 max-w-3xl mx-auto">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm w-32">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.countriesVisited}</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm w-32">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.citiesVisited}</div>
              <div className="text-sm text-muted-foreground">Major Cities</div>
            </div>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm w-32">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.continents}</div>
              <div className="text-sm text-muted-foreground">Continents</div>
            </div>
          </div>
        </div>

        {/* Globe Container - no border, centered */}
        <div className="relative w-full mx-auto mb-8">
          <div className="w-full flex items-center justify-center overflow-y-clip -my-16 md:-my-24">
            <Globe
              ref={globeRef}
              width={dimensions.width}
              height={dimensions.height}
              
              // Performance optimization
              rendererConfig={{ 
                antialias: false,
                alpha: true 
              }}
              
              // Globe configuration
              {...globeConfig}
              
              // Labels (markers)
              labelsData={markerData}
              labelLat={(d: any) => d.lat}
              labelLng={(d: any) => d.lng}
              labelText={(d: any) => ''}
              labelSize={(d: any) => d.size}
              labelDotRadius={(d: any) => 0.4}
              labelColor={(d: any) => d.color}
              labelResolution={2}
              onLabelClick={handleMarkerClick}
              
              ringsData={markerData}
              ringLat={(d: any) => d.lat}
              ringLng={(d: any) => d.lng}
              ringColor={() => '#fbbf2480'}
              ringMaxRadius={1}
              ringPropagationSpeed={3}
              ringRepeatPeriod={1000}
              
              // Animation
              animateIn={true}
              waitForGlobeReady={true}
              enablePointerInteraction={true}
              
              // Globe ready callback - IMPORTANT for disabling zoom
              onGlobeReady={handleGlobeReady}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
          </div>
        </div>

        {/* Location Dialog */}
        {dialogOpen && selectedLocation && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setDialogOpen(false)}>
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setDialogOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span className="sr-only">Close</span>
              </button>

              {/* Content */}
              <div className="flex items-center gap-2 text-2xl font-semibold">
                <span className="text-3xl">{selectedLocation.flag}</span>
                {selectedLocation.name}
              </div>

              <div className="space-y-4">
                {/* Info badges */}
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedLocation.country}
                  </div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary">
                    <Calendar className="w-3 h-3 mr-1" />
                    {selectedLocation.visitDate}
                  </div>
                </div>

                {/* Story */}
                {selectedLocation.story && (
                  <div>
                    <h4 className="font-semibold mb-2">Story</h4>
                    <p className="text-muted-foreground">{selectedLocation.story}</p>
                  </div>
                )}

                {/* Highlights */}
                {selectedLocation.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.highlights.map((highlight, idx) => (
                        <div key={idx} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photos */}
                {selectedLocation.photos.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      Photos
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedLocation.photos.map((photo, idx) => (
                        <div 
                          key={idx}
                          className="relative aspect-square rounded-lg overflow-hidden bg-muted"
                        >
                          <img
                            src={photo}
                            alt={`${selectedLocation.name} - ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}