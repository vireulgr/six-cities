
export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type FavoritesItem = {
  city: {
    name: string;
    link: string;
  },
  places: Place[];
};

export type Place = {
  id: string;
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  description: string;
  type: string;
  link: string;
  images: {preview: string; link: string}[];
  rating: '0%' | '20%' | '40%' | '60%' | '80%' | '100%';
};
