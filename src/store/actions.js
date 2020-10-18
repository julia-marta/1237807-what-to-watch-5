import {getFilmsByGenre} from "../utils";
import {FILM_CARDS_COUNT_TO_SHOW} from "../const";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_FILMS: `FILTER_FILMS`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`,
  RESET_CARDS: `RESET_CARDS`,
};

const {CHANGE_GENRE, FILTER_FILMS, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: CHANGE_GENRE,
    payload: genre,
  }),
  filterFilms: (films, genre) => ({
    type: FILTER_FILMS,
    payload: getFilmsByGenre(films, genre),
  }),
  showMoreCards: (filmsToShowCount) => ({
    type: SHOW_MORE_CARDS,
    payload: (filmsToShowCount >= FILM_CARDS_COUNT_TO_SHOW) ? FILM_CARDS_COUNT_TO_SHOW : filmsToShowCount,
  }),
  resetCards: () => ({
    type: RESET_CARDS,
  })


};
