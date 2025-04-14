
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Place } from '@/data/places';
import { usePlaces } from '@/context/PlacesContext';
import { Button } from '@/components/ui/button';
import PriceRange from './PriceRange';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { addToFavorites, removeFromFavorites } = usePlaces();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (place.isFavorite) {
      removeFromFavorites(place.id);
    } else {
      addToFavorites(place.id);
    }
  };

  return (
    <Link to={`/place/${place.id}`} className="place-card block rounded-lg overflow-hidden bg-white shadow-md">
      <div className="relative">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${place.isFavorite ? 'text-red-500' : 'text-gray-500'}`}
          onClick={toggleFavorite}
        >
          <Heart className={place.isFavorite ? 'fill-current' : ''} size={18} />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{place.name}</h3>
          <PriceRange range={place.priceRange} />
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {place.tags.map(tag => (
            <span 
              key={tag.id} 
              className="inline-block text-xs px-2 py-1 rounded-full bg-luvi-accent text-luvi-dark"
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{place.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-gray-500">{place.distance} km</span>
          </div>
          <span className="text-sm font-medium text-luvi-primary">Ver más</span>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
