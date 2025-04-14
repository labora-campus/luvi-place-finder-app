
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luvi-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-luvi-primary">
              Luvi
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Encuentra el lugar perfecto para cada momento
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-3">Navegación</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/explore" className="text-gray-300 hover:text-white transition-colors">
                    Explorar
                  </Link>
                </li>
                <li>
                  <Link to="/chat" className="text-gray-300 hover:text-white transition-colors">
                    Chat
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Luvi. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
