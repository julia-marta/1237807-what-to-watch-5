import {ActionType} from "./actions";
import {extend} from "../utils";
import films from "../mocks/films";
import {ALL_GENRES} from "../const";

const {CHANGE_GENRE, FILTER_FILMS} = ActionType;

const initialState = {
  genre: ALL_GENRES,
  films,
  filteredFilms: films
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
  }

  return state;
};

export {reducer};
