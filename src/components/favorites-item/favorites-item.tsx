import { FavoritesItem, Place } from '../../utils/types';

function PlaceCard(props: Place): JSX.Element {
  const images = Array.from(props.images, (image) => {
    return (
      <a href={image.link}>
        <img className="place-card__image" src={image.preview} width="150" height="110" alt="Place image" />
      </a>
      );
  });

  return (
    <article className="favorites__card place-card">
      {
        props.isPremium
        ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
        : null
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">

        {images}

      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: props.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={props.link}>{props.description}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

type FavoritesItemComponentProps = {
  items: FavoritesItem[];
}
export default function FavoritesItemComponent({items}: FavoritesItemComponentProps): JSX.Element {
  const markupItems = Array.from(items, (favorite) => {
    const places = Array.from(favorite.places, (place) => {
      return <PlaceCard {...place} />;
    });

    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href={favorite.city.link}>
              <span>{favorite.city.name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {places}
        </div>
      </li>
    );
  });

  return (< > {markupItems} </ >);
}
