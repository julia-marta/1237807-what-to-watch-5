import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType, AuthorizationStatus, ReviewStatus} from "../../../const";
import {checkAuthorization, login, addReview} from "../../actions/api-actions/api-actions";
import {noop, reviews} from "../../../test-data";
import {APIRoute, AppRoute} from "../../../const";
import {extend} from "../../../utils";

const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;
const {SAVING, NOT_SAVING} = ReviewStatus;
const {REQUIRE_AUTHORIZATION, SET_REVIEW_STATUS, SAVE_AUTHORIZATION_INFO, REDIRECT_TO_ROUTE} = ActionType;
const {LOGIN, COMMENTS} = APIRoute;
const {ROOT} = AppRoute;

const api = createAPI(noop);

const mockInitialState = {
  status: NOT_AUTHORIZED,
  reviewStatus: NOT_SAVING,
  name: null,
  avatar: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should update status to "authorized"`, () => {
  expect(user(mockInitialState, {
    type: REQUIRE_AUTHORIZATION,
    payload: AUTHORIZED
  })).toEqual(extend(mockInitialState, {
    status: AUTHORIZED,
  })
  );
});

it(`Reducer should update review status to "saving"`, () => {
  expect(user(mockInitialState, {
    type: SET_REVIEW_STATUS,
    payload: SAVING
  })).toEqual(extend(mockInitialState, {
    reviewStatus: SAVING,
  })
  );
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API get request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authorizationChecker = checkAuthorization();

    apiMock
      .onGet(LOGIN)
      .reply(200, {fake: true});

    return authorizationChecker(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRE_AUTHORIZATION,
          payload: AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: SAVE_AUTHORIZATION_INFO,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API post request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginSender = login(fakeUser);

    apiMock
      .onPost(LOGIN)
      .reply(200, {fake: true});

    return loginSender(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SAVE_AUTHORIZATION_INFO,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REQUIRE_AUTHORIZATION,
          payload: AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: REDIRECT_TO_ROUTE,
          payload: ROOT,
        });

      });
  });

  it(`Should make a correct API post request to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockID = 1;
    const fakeReview = {rating: reviews[0].rating, text: reviews[0].comment};
    const reviewSender = addReview(mockID, fakeReview);

    apiMock
      .onPost(`${COMMENTS}/${mockID}`)
      .reply(200, {fake: true});

    return reviewSender(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SET_REVIEW_STATUS,
          payload: NOT_SAVING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REDIRECT_TO_ROUTE,
          payload: `${AppRoute.FILMS}/${mockID}`,
        });
      });
  });
});
