//import MainPage from '../../pages/main/main-page';
//import LoginPage from '../../pages/login/login-page';
//import { FAVORITES_PAGE_DATA } from '../../mocks/favorites';
//import FavoritesPage from '../../pages/favorites/favorites-page';

import OfferPage from "../../pages/offer/offer-page";

type AppProps = {
  offersQuantity: number
};

export default function App({offersQuantity}: AppProps): JSX.Element {
  //return (<MainPage offersQuantity={offersQuantity} />);
  //return (<LoginPage />);
  //return (<FavoritesPage {...FAVORITES_PAGE_DATA} />);
  return <OfferPage />;
}
