import { GlobeTravel } from '@/components/globe-travel';
import { TRAVEL_DATA } from '@/data/travel';

export default function TravelPage() {
  return (
    <main className="container mx-auto px-4">
      <GlobeTravel 
        locations={TRAVEL_DATA.locations} 
        stats={TRAVEL_DATA.stats} 
      />
    </main>
  );
}