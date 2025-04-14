
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaceCard from '@/components/PlaceCard';
import FilterBar from '@/components/FilterBar';
import MobileMenu from '@/components/MobileMenu';
import { usePlaces } from '@/context/PlacesContext';
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Explore = () => {
  const { filteredPlaces } = usePlaces();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className="flex-1 bg-gray-50">
        <FilterBar isOpen={isFilterOpen} onToggle={toggleFilter} />
        
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Explorar lugares</h1>
            <Button 
              variant="outline" 
              size="icon"
              onClick={toggleViewMode}
            >
              {viewMode === 'grid' ? <List size={18} /> : <Grid size={18} />}
            </Button>
          </div>
          
          {filteredPlaces.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">No hay lugares que coincidan con tus filtros</h2>
              <p className="text-gray-500">Prueba a ajustar los filtros para encontrar más opciones</p>
            </div>
          ) : (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
              {filteredPlaces.map(place => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
