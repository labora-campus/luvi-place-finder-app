
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaceCard from '@/components/PlaceCard';
import MobileMenu from '@/components/MobileMenu';
import { usePlaces } from '@/context/PlacesContext';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Favorites = () => {
  const { favorites } = usePlaces();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Mis favoritos</h1>
          
          {favorites.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No tienes lugares favoritos</h2>
              <p className="text-gray-500 mb-6">
                Guarda lugares en tu lista de favoritos para poder acceder a ellos fácilmente
              </p>
              <Link to="/explore">
                <Button className="bg-luvi-primary hover:bg-luvi-secondary">
                  Explorar lugares
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map(place => (
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

export default Favorites;
