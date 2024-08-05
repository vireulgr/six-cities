import PlaceCardComponent from "../../views/place-card/place-card";

type Offer = { name: string; };

export default function FavoritesPage(favorites: Offer[]): JSX.Element {

  const favoritesCards = Array.from(favorites, (favorite) => <OfferComponent />);

  return (
  );
}
