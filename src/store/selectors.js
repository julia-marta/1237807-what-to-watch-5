import {createSelector} from "reselect";
import {getFilmsByGenre, getGenresList, getRelatedFilms, getFavoriteFilms, getCurrentFilm} from "../utils";

export const getFilms = (state) => {
  return state.DATA.films;
};

export const getFilm = (state) => {
  return state.DATA.currentFilm;
};

export const getReviews = (state) => {
  return state.DATA.currentReviews;
};

export const getGenre = (state) => {
  return state.FILTER.genre;
};

export const getCardsCount = (state) => {
  return state.FILTER.cardsCount;
};

export const getUserStatus = (state) => {
  return state.USER.status;
};

export const getCurrentFilmID = (_, props) => {
  return Number(props.id);
};

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      return getFilmsByGenre(films, genre);
    }
);

export const getSimilarFilms = createSelector(
    getFilms,
    getCurrentFilmID,
    (films, id) => {
      const currentFilm = getCurrentFilm(films, id);
      return getRelatedFilms(films, currentFilm);
    }
);

export const getAddedFilms = createSelector(
    getFilms,
    (films) => {
      return getFavoriteFilms(films);
    }
);

export const getGenres = createSelector(
    getFilms,
    (films) => {
      return getGenresList(films);
    }
);
