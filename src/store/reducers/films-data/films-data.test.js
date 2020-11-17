import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {filmsData} from "./films-data";
import {ActionType} from "../../../const";
import {fetchFilms, fetchFilm, fetchPromoFilm, fetchReviews, addToFavorites} from "../../actions/api-actions/api-actions";
import {APIRoute} from "../../../const";
import {noop, defaultState} from "../../../test-data";
import {extend} from "../../../utils";

const api = createAPI(noop);
const {LOAD_FILMS, LOAD_FILM, LOAD_PROMO_FILM, LOAD_REVIEWS} = ActionType;
const {FILMS, PROMO, COMMENTS, FAVORITE} = APIRoute;

const mockFilms = defaultState.DATA.films;
const mockPromoFilm = defaultState.DATA.promo;
const mockCurrentFilm = defaultState.DATA.currentFilm;
const mockCurrentReviews = defaultState.DATA.currentReviews;

const mockInitialState = {
  films: [],
  promo: {},
  currentFilm: null,
  currentReviews: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsData(void 0, {})).toEqual(mockInitialState);
});

describe(`Reducer should update state`, () => {
  it(`by loaded films`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_FILMS,
      payload: mockFilms,
    })).toEqual(extend(mockInitialState, {
      films: mockFilms,
    })
    );
  });
  it(`by loaded promo film`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_PROMO_FILM,
      payload: mockPromoFilm,
    })).toEqual(extend(mockInitialState, {
      promo: mockPromoFilm,
    })
    );
  });
  it(`by loaded current film`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_FILM,
      payload: mockCurrentFilm,
    })).toEqual(extend(mockInitialState, {
      currentFilm: mockCurrentFilm,
    })
    );
  });
  it(`by loaded current reviews`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_REVIEWS,
      payload: mockCurrentReviews,
    })).toEqual(extend(mockInitialState, {
      currentReviews: mockCurrentReviews,
    })
    );
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockID = 1;
    const filmLoader = fetchFilm(mockID);

    apiMock
      .onGet(`${FILMS}/${mockID}`)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(PROMO)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockID = 1;
    const commentsLoader = fetchReviews(mockID);

    apiMock
      .onGet(`${COMMENTS}/${mockID}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API post request to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockID = 1;
    const fakeStatus = 1;
    const favoritesSender = addToFavorites(mockID, fakeStatus);

    apiMock
      .onPost(`${FAVORITE}/${mockID}/${fakeStatus}`)
      .reply(200, {fake: true});

    return favoritesSender(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
