import swal from 'sweetalert';
import {loadFilms, loadFilm, loadPromoFilm, loadReviews} from "./actions";
import {APIRoute} from "../const";

const {FILMS, PROMO, COMMENTS} = APIRoute;

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
    .catch((error) => {
      throw error;
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${FILMS}/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
    .catch((error) => {
      swal(`Error`, `Something went wrong!`, `error`);
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

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch((error) => {
      swal(`Error`, `Something went wrong!`, `error`);
      throw error;
    })
);
