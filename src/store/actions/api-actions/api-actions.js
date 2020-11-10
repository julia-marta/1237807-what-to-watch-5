import swal from 'sweetalert';
import {loadFilms, loadFilm, loadPromoFilm, loadReviews} from "../data-actions/data-actions";
import {requireAuthorization, saveAuthorizationInfo, redirectToRoute, setReviewStatus} from "../user-actions/user-actions";
import {APIRoute, AppRoute, HttpCode, AuthorizationStatus, ReviewStatus} from "../../../const";

const {FILMS, PROMO, COMMENTS, LOGIN} = APIRoute;
const {ROOT} = AppRoute;
const {SUCCESS, UNAUTHORIZED} = HttpCode;
const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;
const {NOT_SAVING} = ReviewStatus;

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
    .catch((error) => {
      swal(`Error`, `Something went wrong!`, `error`);
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
      swal(`Error`, `Something went wrong!`, `error`);
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

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(LOGIN)
    .then((data) => {
      if (data.status === SUCCESS) {
        dispatch(requireAuthorization(AUTHORIZED));
        dispatch(saveAuthorizationInfo(data.data));
      } else if (data.response.status === UNAUTHORIZED) {
        dispatch(requireAuthorization(NOT_AUTHORIZED));
      }
    })
    .catch((error) => {
      swal(`Error`, `Something went wrong!`, `error`);
      throw error;
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(LOGIN, {email, password})
    .then((data) => dispatch(saveAuthorizationInfo(data.data)))
    .then(() => dispatch(requireAuthorization(AUTHORIZED)))
    .then(() => dispatch(redirectToRoute(ROOT)))
    .catch((error) => {
      swal(`Error`, `Something went wrong!`, `error`);
      throw error;
    })
);

export const addReview = (id, {rating, text}) => (dispatch, _getState, api) => (
  api.post(`${COMMENTS}/${id}`, {rating: Number(rating), comment: text})
    .then(() => dispatch(setReviewStatus(NOT_SAVING)))
    .then(() => dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`)))
    .catch((error) => {
      dispatch(setReviewStatus(NOT_SAVING));
      swal(`Error`, `Something went wrong!`, `error`);
      throw error;
    })
);
