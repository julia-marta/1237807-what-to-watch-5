import {FILM_CARDS_COUNT_TO_SHOW, ActionType} from "../../../const";

const {CHANGE_GENRE, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;

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
