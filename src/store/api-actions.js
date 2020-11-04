import {loadFilms, loadPromoFilm} from "./actions";
import {APIRoute} from "../const";

const {FILMS, PROMO} = APIRoute;

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
    .catch((error) => {
      throw error;
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(PROMO)
    .then(({data}) => dispatch(loadPromoFilm(data)))
    .catch((error) => {
      throw error;
    })
);
