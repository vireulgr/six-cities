import { OffersListItem, RentalOffer } from '../utils/types';

export const OFFERS: OffersListItem[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  }
];


export const ONE_OFFER: RentalOffer =
{
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false
  },
  images: [
    { alt: 'Photo studio', preview: 'img/room-small.jpg', link: 'img/room.jpg', },
    { alt: 'Photo studio', preview: 'img/apartment-small-03.jpg', link: 'img/apartment-03.jpg', },
    { alt: 'Photo studio', preview: 'img/apartment-small-04.jpg', link: 'img/apartment-03.jpg', },
  ],
  maxAdults: 4
};
