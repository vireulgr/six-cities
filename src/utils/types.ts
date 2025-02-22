
export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
};

export type Image = {
  alt: string;
  preview: string;
  link: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type FavoritesItem = {
  city: {
    name: string;
    link: string;
  };
  places: Place[];
};

export type Place = {
  description: string;
  id: string;
  images: Image[];
  isFavorite: boolean;
  isPremium: boolean;
  link: string;
  price: number;
  rating: '0%' | '20%' | '40%' | '60%' | '80%' | '100%';
  type: string;
};

type BaseRentalOffer = {
  city: City;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersListItem = BaseRentalOffer & {
  previewImage: string;
};

export type RentalOffer = BaseRentalOffer & {
  description: string;
  host: User;
  bedrooms: number;
  goods: string[];
  maxAdults: number;
  images: Image[];
};

