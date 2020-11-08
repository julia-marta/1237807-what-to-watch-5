import {ActionType} from "../../../const";

const {REQUIRE_AUTHORIZATION, SAVE_AUTHORIZATION_INFO, REDIRECT_TO_ROUTE} = ActionType;

export const requireAuthorization = (status) => ({
  type: REQUIRE_AUTHORIZATION,
  payload: status,
});

export const saveAuthorizationInfo = (data) => ({
  type: SAVE_AUTHORIZATION_INFO,
  payload: data,
});

export const redirectToRoute = (url) => ({
  type: REDIRECT_TO_ROUTE,
  payload: url,
});
