
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-luvi-accent/20">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Encuentra el <span className="text-luvi-primary">lugar perfecto</span> para cada momento
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Luvi te ayuda a descubrir los mejores lugares según tu situación y preferencias
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link to="/chat" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-luvi-accent rounded-full flex items-center justify-center mb-6 group-hover:animate-bounce-subtle">
                    <MessageCircle size={40} className="text-luvi-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Habla con Luvi</h2>
                  <p className="text-gray-600 mb-6">
                    Cuéntale a nuestro asistente qué estás buscando y te recomendará lugares perfectos
                  </p>
                  <Button className="w-full bg-luvi-primary hover:bg-luvi-secondary">
                    Iniciar chat
                  </Button>
                </div>
              </Link>
              
              <Link to="/explore" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-luvi-accent rounded-full flex items-center justify-center mb-6 group-hover:animate-bounce-subtle">
                    <Map size={40} className="text-luvi-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Explorar lugares</h2>
                  <p className="text-gray-600 mb-6">
                    Navega por una selección de lugares recomendados filtrados según tus preferencias
                  </p>
                  <Button className="w-full bg-luvi-primary hover:bg-luvi-secondary">
                    Ver lugares
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona Luvi?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-luvi-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luvi-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dinos qué buscas</h3>
                <p className="text-gray-600">
                  Explícanos qué tipo de lugar necesitas y para qué ocasión lo estás buscando
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luvi-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luvi-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ajusta tus preferencias</h3>
                <p className="text-gray-600">
                  Utiliza los filtros para encontrar lugares que se adapten exactamente a lo que necesitas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luvi-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luvi-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Descubre lugares perfectos</h3>
                <p className="text-gray-600">
                  Explora las recomendaciones y guarda tus favoritos para futuras visitas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
