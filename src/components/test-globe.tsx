'use client';

import dynamic from 'next/dynamic';

// Dynamic import with no SSR
const Globe = dynamic(() => import('react-globe.gl'), { 
  ssr: false,
  loading: () => <div className="w-full h-[600px] flex items-center justify-center">Loading Globe...</div>
});

export function SimpleGlobeTest() {
  const markerData = [
    {
      lat: 43.6532,
      lng: -79.3832,
      size: 0.15,
      color: '#10b981',
      label: 'Toronto'
    }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="w-[600px] h-[600px] border-4 border-red-500">
        <p className="text-center mb-4">Globe should appear below:</p>
        <Globe
          width={600}
          height={600}
          globeImageUrl="https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0.1)"
          
          labelsData={markerData}
          labelLat={(d: any) => d.lat}
          labelLng={(d: any) => d.lng}
          labelText={(d: any) => d.label}
          labelSize={(d: any) => 0.15}
          labelDotRadius={(d: any) => 0.4}
          labelColor={(d: any) => d.color}
        />
      </div>
    </div>
  );
}