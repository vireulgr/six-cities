export const FAVORITES_EMPTY_PAGE_DATA = {
  userEmail: 'Oliver.conner@gmail.com',
  favorites: []
};

export const FAVORITES_PAGE_DATA = {
  userEmail: 'Oliver.conner@gmail.com',
  favorites: [
  {
    city: {
      name: 'Amsterdam',
      link: '#',
    },
    places: [
      {
        id: '1',
        isPremium: true,
        isFavorite: true,
        price: 180,
        description: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        link: '#',
        images: [ { preview: 'img/apartment-small-03.jpg', link:  'img/apartment-small-03.jpg' } ],
        rating: '100%' as const,
      },
      {
        id: '2',
        isPremium: false,
        isFavorite: true,
        price: 80,
        description: 'Wood and stone place',
        type: 'Room',
        link: '#',
        images: [ { preview: 'img/room-small.jpg', link: 'img/room-small.jpg' } ],
        rating: '80%' as const,
      },
    ]
  },
  {
    city: {
      name: 'Cologne',
      link: '#',
    },
    places: [
      {
        id: '1',
        isPremium: false,
        isFavorite: true,
        price: 180,
        description: 'White castle',
        type: 'Apartment',
        link: '#',
        images: [ { preview: 'img/apartment-small-04.jpg', link:  'img/apartment-small-04.jpg' } ],
        rating: '100%' as const,
      },
    ]
  }
]};
