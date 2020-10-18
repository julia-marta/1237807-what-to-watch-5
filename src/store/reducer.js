import {ActionType} from "./actions";
import {extend} from "../utils";
import films from "../mocks/films";
import {ALL_GENRES, FILM_CARDS_COUNT_TO_SHOW} from "../const";

const {CHANGE_GENRE, FILTER_FILMS, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;


const initialState = {
  genre: ALL_GENRES,
  films,
  filteredFilms: films,
  cardsCount: FILM_CARDS_COUNT_TO_SHOW,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case FILTER_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });

    case SHOW_MORE_CARDS:
      return extend(state, {
        cardsCount: state.cardsCount + action.payload,
      });

    case RESET_CARDS:
      return extend(state, {
        cardsCount: FILM_CARDS_COUNT_TO_SHOW,
      });
  }

  return state;
};

export {reducer};
