
import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { usePlaces } from '@/context/PlacesContext';
import { PriceRange, NoiseLevel, MoodType } from '@/data/places';

interface FilterBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ isOpen, onToggle }) => {
  const { filters, updateFilters, clearFilters } = usePlaces();

  const handleNoiseLevelChange = (level: NoiseLevel) => {
    updateFilters({ noiseLevel: filters.noiseLevel === level ? null : level });
  };

  const handlePriceRangeChange = (range: PriceRange) => {
    updateFilters({ priceRange: filters.priceRange === range ? null : range });
  };

  const handleMoodChange = (mood: MoodType) => {
    const newMoods = filters.moods.includes(mood)
      ? filters.moods.filter(m => m !== mood)
      : [...filters.moods, mood];
    
    updateFilters({ moods: newMoods });
  };

  const handleDistanceChange = (value: number[]) => {
    updateFilters({ maxDistance: value[0] });
  };

  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <Button 
          variant="outline" 
          onClick={onToggle}
          className="flex items-center gap-2"
        >
          <Filter size={16} />
          <span>Filtros</span>
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={clearFilters}
          className="text-sm text-gray-500"
        >
          Limpiar filtros
        </Button>
      </div>
      
      {isOpen && (
        <div className="p-4 border-b animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filtros</h3>
            <Button variant="ghost" size="icon" onClick={onToggle}>
              <X size={16} />
            </Button>
          </div>
          
          <div className="space-y-6">
            {/* Nivel de ruido */}
            <div>
              <h4 className="text-sm font-medium mb-2">Nivel de ruido</h4>
              <div className="flex gap-2">
                <Button 
                  variant={filters.noiseLevel === 'bajo' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handleNoiseLevelChange('bajo')}
                >
                  Bajo
                </Button>
                <Button 
                  variant={filters.noiseLevel === 'medio' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handleNoiseLevelChange('medio')}
                >
                  Medio
                </Button>
                <Button 
                  variant={filters.noiseLevel === 'alto' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handleNoiseLevelChange('alto')}
                >
                  Alto
                </Button>
              </div>
            </div>
            
            {/* Rango de precios */}
            <div>
              <h4 className="text-sm font-medium mb-2">Rango de precios</h4>
              <div className="flex gap-2">
                <Button 
                  variant={filters.priceRange === '$' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handlePriceRangeChange('$')}
                >
                  $
                </Button>
                <Button 
                  variant={filters.priceRange === '$$' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handlePriceRangeChange('$$')}
                >
                  $$
                </Button>
                <Button 
                  variant={filters.priceRange === '$$$' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handlePriceRangeChange('$$$')}
                >
                  $$$
                </Button>
              </div>
            </div>
            
            {/* Distancia */}
            <div>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium mb-2">Distancia máxima</h4>
                <span className="text-sm text-gray-500">{filters.maxDistance} km</span>
              </div>
              <Slider
                defaultValue={[filters.maxDistance]}
                max={10}
                step={0.5}
                onValueChange={handleDistanceChange}
              />
            </div>
            
            {/* Estado de ánimo */}
            <div>
              <h4 className="text-sm font-medium mb-2">Estado de ánimo</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="mood-trabajo"
                    checked={filters.moods.includes('trabajo')}
                    onCheckedChange={() => handleMoodChange('trabajo')}
                  />
                  <Label htmlFor="mood-trabajo">Trabajo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="mood-citas"
                    checked={filters.moods.includes('citas')}
                    onCheckedChange={() => handleMoodChange('citas')}
                  />
                  <Label htmlFor="mood-citas">Citas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="mood-familia"
                    checked={filters.moods.includes('familia')}
                    onCheckedChange={() => handleMoodChange('familia')}
                  />
                  <Label htmlFor="mood-familia">Familia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="mood-solo"
                    checked={filters.moods.includes('solo')}
                    onCheckedChange={() => handleMoodChange('solo')}
                  />
                  <Label htmlFor="mood-solo">Solo</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
