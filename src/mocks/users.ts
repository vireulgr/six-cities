import { getRandomArrayElement } from '../utils/common';
import { User } from '../utils/types';

const USER_NAMES = [
  'Andrey Kolmogorov',
  'Arnold Schwarzenegger',
  'Arthur Schopenhauer',
  'Bernhard Riemann',
  'Bill Gates',
  'Bill Murray',
  'Bjarne Stroustroup',
  'Bram Moolenaar',
  'Carl Gauss',
  'Carl Gustav Jung',
  'Chris Christodoulou',
  'Derek Trucks',
  'Donald Glover',
  'Edmund Husserl',
  'Eric Clapton',
  'Franco Columbu',
  'Ildemar Rodriguez',
  'Immanuel Kant',
  'Isaac Newton',
  'Jean-Paul Belmondo',
  'Jordan Rhodes',
  'Joseph Fourier',
  'Kendrick Lamar',
  'Leonhard Euler',
  'Margaret Thatcher',
  'Marshall Mathers',
  'Mike Portnoy',
  'Mike Tyson',
  'Mircea Eliade',
  'Niklaus Wirth',
  'Nikolay Lobachevsky',
  'Sigmund Freud',
  'Sofi Kovalevskaya',
  'Yoanis Meneses',
];


export function getUser(): User {
  return {
    name: getRandomArrayElement(USER_NAMES),
    avatarUrl: 'https://i.pravatar.cc/150',
    isPro: Boolean(Math.round(Math.random()))
  };
}
