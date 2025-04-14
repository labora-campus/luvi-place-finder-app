
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import { usePlaces } from '@/context/PlacesContext';
import { ArrowLeft, Heart, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PriceRange from '@/components/PriceRange';

const PlaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { places, addToFavorites, removeFromFavorites } = usePlaces();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const place = places.find(p => p.id === id);
  
  if (!place) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Lugar no encontrado</h1>
            <p className="mb-6">El lugar que buscas no existe o ha sido eliminado</p>
            <Link 
              to="/explore" 
              className="inline-flex items-center text-luvi-primary hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver a explorar
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  const toggleFavorite = () => {
    if (place.isFavorite) {
      removeFromFavorites(place.id);
    } else {
      addToFavorites(place.id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/explore" 
            className="inline-flex items-center text-gray-600 hover:text-luvi-primary mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a explorar
          </Link>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 md:h-96">
              <img 
                src={place.image} 
                alt={place.name} 
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${place.isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                onClick={toggleFavorite}
              >
                <Heart className={place.isFavorite ? 'fill-current' : ''} size={20} />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span>{place.address}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 mr-1" />
                    <span className="font-semibold">{place.rating}</span>
                  </div>
                  <PriceRange range={place.priceRange} />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {place.tags.map(tag => (
                  <span 
                    key={tag.id} 
                    className="inline-block text-sm px-3 py-1 rounded-full bg-luvi-accent text-luvi-dark"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Acerca de este lugar</h2>
                <p className="text-gray-700 leading-relaxed">{place.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Nivel de ruido</h3>
                  <p className="capitalize">{place.noiseLevel}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Tipo de comida</h3>
                  <p>{place.foodType.join(', ')}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Ideal para</h3>
                  <p className="capitalize">{place.mood.map(m => {
                    switch(m) {
                      case 'trabajo': return 'Trabajo';
                      case 'citas': return 'Citas';
                      case 'familia': return 'Familia';
                      case 'solo': return 'Ir solo';
                      default: return m;
                    }
                  }).join(', ')}</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-luvi-primary hover:bg-luvi-secondary"
                  onClick={toggleFavorite}
                >
                  {place.isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlaceDetail;
