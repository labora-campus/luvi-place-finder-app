
export type PriceRange = '$' | '$$' | '$$$';
export type NoiseLevel = 'bajo' | 'medio' | 'alto';
export type MoodType = 'trabajo' | 'citas' | 'familia' | 'solo';

export interface PlaceTag {
  id: string;
  name: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: PlaceTag[];
  priceRange: PriceRange;
  noiseLevel: NoiseLevel;
  distance: number; // in km
  foodType: string[];
  mood: MoodType[];
  address: string;
  rating: number;
  isFavorite?: boolean;
}

// Mock data
export const mockTags: PlaceTag[] = [
  { id: '1', name: 'tranquilo' },
  { id: '2', name: 'romántico' },
  { id: '3', name: 'buen wifi' },
  { id: '4', name: 'para trabajar' },
  { id: '5', name: 'familiar' },
  { id: '6', name: 'vistas' },
  { id: '7', name: 'terraza' },
  { id: '8', name: 'música en vivo' },
  { id: '9', name: 'vegetariano' },
];

export const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Café del Jardín',
    description: 'Un oasis tranquilo en medio de la ciudad con un hermoso jardín. Perfecto para trabajar o tener reuniones tranquilas. Ofrecemos desayunos completos y almuerzos ligeros.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    tags: [mockTags[0], mockTags[2], mockTags[3]],
    priceRange: '$$',
    noiseLevel: 'bajo',
    distance: 1.2,
    foodType: ['Café', 'Desayunos', 'Brunch'],
    mood: ['trabajo', 'solo'],
    address: 'Calle Serrano 45, Madrid',
    rating: 4.7,
  },
  {
    id: '2',
    name: 'La Terraza Azul',
    description: 'Terraza con vistas espectaculares de la ciudad. Ideal para citas románticas y cenas especiales. Nuestra cocina mediterránea fusión ha sido premiada varias veces.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    tags: [mockTags[1], mockTags[5], mockTags[6]],
    priceRange: '$$$',
    noiseLevel: 'medio',
    distance: 3.5,
    foodType: ['Mediterránea', 'Fusión'],
    mood: ['citas', 'familia'],
    address: 'Avenida Diagonal 235, Barcelona',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Bistro Familiar',
    description: 'Restaurante acogedor con menús especiales para toda la familia. Zona de juegos para niños y menú infantil. Los fines de semana ofrecemos espectáculos para los más pequeños.',
    image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=2064&auto=format&fit=crop',
    tags: [mockTags[4], mockTags[0]],
    priceRange: '$$',
    noiseLevel: 'medio',
    distance: 2.1,
    foodType: ['Casera', 'Internacional'],
    mood: ['familia'],
    address: 'Plaza Mayor 12, Valencia',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Coworking Coffee',
    description: 'Espacio diseñado para trabajadores remotos con el mejor café de especialidad. WiFi ultrarrápido, enchufes en todas las mesas y salas de reuniones privadas disponibles.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978&auto=format&fit=crop',
    tags: [mockTags[2], mockTags[3], mockTags[0]],
    priceRange: '$',
    noiseLevel: 'bajo',
    distance: 0.8,
    foodType: ['Café', 'Snacks'],
    mood: ['trabajo', 'solo'],
    address: 'Calle Gran Vía 78, Madrid',
    rating: 4.8,
  },
  {
    id: '5',
    name: 'El Rincón Veggie',
    description: 'Restaurante 100% vegetariano y vegano con opciones para todas las intolerancias. Ingredientes orgánicos y de temporada. Ambiente tranquilo y acogedor.',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop',
    tags: [mockTags[8], mockTags[0]],
    priceRange: '$$',
    noiseLevel: 'bajo',
    distance: 1.9,
    foodType: ['Vegetariano', 'Vegano'],
    mood: ['solo', 'citas'],
    address: 'Calle Hortaleza 42, Madrid',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Bar Musical',
    description: 'El lugar perfecto para disfrutar de buena música en vivo mientras tomas unas copas. Cada noche presentamos diferentes estilos musicales y artistas emergentes.',
    image: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2060&auto=format&fit=crop',
    tags: [mockTags[7]],
    priceRange: '$$',
    noiseLevel: 'alto',
    distance: 2.7,
    foodType: ['Tapas', 'Cócteles'],
    mood: ['citas'],
    address: 'Calle Argumosa 15, Madrid',
    rating: 4.4,
  },
];
