import {ActionType} from "../../../const";
import {extend} from "../../../utils";

const {LOAD_FILMS, LOAD_FILM, LOAD_PROMO_FILM, LOAD_REVIEWS} = ActionType;

const initialState = {
  films: [],
  promo: {},
  currentFilm: null,
  currentReviews: null,
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case LOAD_FILM:
      return extend(state, {
        currentFilm: action.payload,
      });
    case LOAD_PROMO_FILM:
      return extend(state, {
        promo: action.payload,
      });
    case LOAD_REVIEWS:
      return extend(state, {
        currentReviews: action.payload,
      });
  }

  return state;
};

export {filmsData};
