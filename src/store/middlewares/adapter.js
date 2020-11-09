import {ActionType} from "../../const";
import {adaptFilmToClient, extend} from "../../utils";

const {LOAD_FILMS, LOAD_FILM, LOAD_PROMO_FILM} = ActionType;

export const adapter = (_store) => (next) => (action) => {

  switch (action.type) {
    case LOAD_FILMS:
      return next(
          extend(action, {
            payload: action.payload.map((film) => {
              return adaptFilmToClient(film);
            })
          })
      );
    case LOAD_FILM:
      return next(
          extend(action, {
            payload: adaptFilmToClient(action.payload)
          })
      );
    case LOAD_PROMO_FILM:
      return next(
          extend(action, {
            payload: adaptFilmToClient(action.payload)
          })
      );
  }

  return next(action);
};
