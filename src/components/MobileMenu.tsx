
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-2xl font-bold text-luvi-primary" onClick={onClose}>
            Luvi
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </div>
        
        <nav className="flex flex-col gap-6 text-xl">
          <Link to="/" className="py-3 border-b border-gray-100" onClick={onClose}>
            Inicio
          </Link>
          <Link to="/explore" className="py-3 border-b border-gray-100" onClick={onClose}>
            Explorar
          </Link>
          <Link to="/chat" className="py-3 border-b border-gray-100" onClick={onClose}>
            Chat
          </Link>
          <Link to="/favorites" className="py-3 border-b border-gray-100" onClick={onClose}>
            Favoritos
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
