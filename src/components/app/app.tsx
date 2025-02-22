//import MainPage from '../../pages/main/main-page';
//import LoginPage from '../../pages/login/login-page';
//import { FAVORITES_PAGE_DATA } from '../../mocks/favorites';
//import FavoritesPage from '../../pages/favorites/favorites-page';

import { ONE_OFFER } from '../../mocks/offers';
import OfferPage from '../../pages/offer/offer-page';

const MOCK_LOGIN_INFO = {
  isUserLogged: false,
  user: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: 'user@domain.example.com',
    favoriteCount: 3
  },
};


export default function App(/*{offersQuantity}: AppProps*/): JSX.Element {
  //return (<MainPage offersQuantity={offersQuantity} />);
  //return (<LoginPage />);
  //return (<FavoritesPage {...FAVORITES_PAGE_DATA} />);
  const props = {
    loginInfo: MOCK_LOGIN_INFO,
    offer: ONE_OFFER,
  };
  return <OfferPage {...props}/>;
}
