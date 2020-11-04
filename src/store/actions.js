import {FILM_CARDS_COUNT_TO_SHOW} from "../const";

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`,
  RESET_CARDS: `RESET_CARDS`,
};

const {LOAD_FILMS, LOAD_PROMO_FILM, CHANGE_GENRE, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;

export const loadFilms = (data) => ({
  type: LOAD_FILMS,
  payload: data,
});

export const loadPromoFilm = (data) => ({
  type: LOAD_PROMO_FILM,
  payload: data,
});

export const changeGenre = (genre) => ({
  type: CHANGE_GENRE,
  payload: genre,
});

export const showMoreCards = (filmsToShowCount) => ({
  type: SHOW_MORE_CARDS,
  payload: (filmsToShowCount >= FILM_CARDS_COUNT_TO_SHOW) ? FILM_CARDS_COUNT_TO_SHOW : filmsToShowCount,
});

export const resetCards = () => ({
  type: RESET_CARDS,
});
