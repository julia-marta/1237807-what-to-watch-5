import {ActionType} from "../../actions";
import {extend} from "../../../utils";
import {ALL_GENRES, FILM_CARDS_COUNT_TO_SHOW} from "../../../const";

const {CHANGE_GENRE, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;

const initialState = {
  genre: ALL_GENRES,
  cardsCount: FILM_CARDS_COUNT_TO_SHOW,
};

const filmsFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
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

export {filmsFilter};
