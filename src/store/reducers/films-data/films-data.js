import {ActionType} from "../../actions";
import {extend} from "../../../utils";

const {LOAD_FILMS, LOAD_PROMO_FILM} = ActionType;

const initialState = {
  films: [],
  promo: {}
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case LOAD_PROMO_FILM:
      return extend(state, {
        promo: action.payload,
      });
  }

  return state;
};

export {filmsData};
