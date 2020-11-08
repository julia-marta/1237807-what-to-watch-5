export const ALL_GENRES = `All genres`;
export const FILM_CARDS_COUNT_TO_SHOW = 8;

export const TABS = [`Overview`, `Details`, `Reviews`];

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  REVIEW: `/review`,
  PLAYER: `/player`,
};

export const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
};

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`,
  RESET_CARDS: `RESET_CARDS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SAVE_AUTHORIZATION_INFO: `SAVE_AUTHORIZATION_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  NOT_AUTHORIZED: `NOT_AUTHORIZED`,
};

export const HttpCode = {
  SUCCESS: 200,
  UNAUTHORIZED: 401
};
