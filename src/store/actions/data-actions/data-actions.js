import {ActionType} from "../../../const";

const {LOAD_FILMS, LOAD_FILM, LOAD_PROMO_FILM, LOAD_REVIEWS} = ActionType;

export const loadFilms = (data) => ({
  type: LOAD_FILMS,
  payload: data,
});

export const loadFilm = (data) => ({
  type: LOAD_FILM,
  payload: data,
});

export const loadPromoFilm = (data) => ({
  type: LOAD_PROMO_FILM,
  payload: data,
});

export const loadReviews = (data) => ({
  type: LOAD_REVIEWS,
  payload: data,
});
