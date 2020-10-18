import {getFilmsByGenre} from "../utils";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_FILMS: `FILTER_FILMS`,
};

const {CHANGE_GENRE, FILTER_FILMS} = ActionType;

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: CHANGE_GENRE,
    payload: genre,
  }),
  filterFilms: (films, genre) => ({
    type: FILTER_FILMS,
    payload: getFilmsByGenre(films, genre),
  })

};
