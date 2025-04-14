
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Place, mockPlaces, PriceRange, NoiseLevel, MoodType } from '../data/places';

interface PlacesContextType {
  places: Place[];
  filteredPlaces: Place[];
  favorites: Place[];
  addToFavorites: (placeId: string) => void;
  removeFromFavorites: (placeId: string) => void;
  filters: {
    noiseLevel: NoiseLevel | null;
    priceRange: PriceRange | null;
    maxDistance: number;
    foodTypes: string[];
    moods: MoodType[];
  };
  updateFilters: (newFilters: Partial<PlacesContextType['filters']>) => void;
  clearFilters: () => void;
}

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

export const usePlaces = () => {
  const context = useContext(PlacesContext);
  if (!context) {
    throw new Error('usePlaces must be used within a PlacesProvider');
  }
  return context;
};

export const PlacesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [places, setPlaces] = useState<Place[]>(mockPlaces);
  const [favorites, setFavorites] = useState<Place[]>([]);
  const [filters, setFilters] = useState({
    noiseLevel: null as NoiseLevel | null,
    priceRange: null as PriceRange | null,
    maxDistance: 10,
    foodTypes: [] as string[],
    moods: [] as MoodType[],
  });
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(mockPlaces);

  useEffect(() => {
    // Apply filters
    const newFilteredPlaces = places.filter(place => {
      // Noise level filter
      if (filters.noiseLevel && place.noiseLevel !== filters.noiseLevel) {
        return false;
      }

      // Price range filter
      if (filters.priceRange && place.priceRange !== filters.priceRange) {
        return false;
      }

      // Distance filter
      if (place.distance > filters.maxDistance) {
        return false;
      }

      // Food types filter
      if (filters.foodTypes.length > 0 && !place.foodType.some(type => filters.foodTypes.includes(type))) {
        return false;
      }

      // Moods filter
      if (filters.moods.length > 0 && !place.mood.some(mood => filters.moods.includes(mood))) {
        return false;
      }

      return true;
    });

    setFilteredPlaces(newFilteredPlaces);
  }, [places, filters]);

  const addToFavorites = (placeId: string) => {
    const place = places.find(p => p.id === placeId);
    if (place && !favorites.some(f => f.id === placeId)) {
      setFavorites([...favorites, { ...place, isFavorite: true }]);
      
      // Update the places array to mark the place as favorite
      setPlaces(places.map(p => p.id === placeId ? { ...p, isFavorite: true } : p));
    }
  };

  const removeFromFavorites = (placeId: string) => {
    setFavorites(favorites.filter(f => f.id !== placeId));
    
    // Update the places array to unmark the place as favorite
    setPlaces(places.map(p => p.id === placeId ? { ...p, isFavorite: false } : p));
  };

  const updateFilters = (newFilters: Partial<typeof filters>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      noiseLevel: null,
      priceRange: null,
      maxDistance: 10,
      foodTypes: [],
      moods: [],
    });
  };

  return (
    <PlacesContext.Provider value={{
      places,
      filteredPlaces,
      favorites,
      addToFavorites,
      removeFromFavorites,
      filters,
      updateFilters,
      clearFilters,
    }}>
      {children}
    </PlacesContext.Provider>
  );
};
