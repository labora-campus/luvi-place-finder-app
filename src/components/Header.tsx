
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  toggleMobileMenu?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-luvi-primary">
          Luvi
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-luvi-primary transition-colors">
            Inicio
          </Link>
          <Link to="/explore" className="hover:text-luvi-primary transition-colors">
            Explorar
          </Link>
          <Link to="/chat" className="hover:text-luvi-primary transition-colors">
            Chat
          </Link>
          <Link to="/favorites" className="hover:text-luvi-primary transition-colors">
            Favoritos
          </Link>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
};

export default Header;
