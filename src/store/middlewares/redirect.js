import browserHistory from "../../browser-history";
import {ActionType} from "../../const";

const {REDIRECT_TO_ROUTE} = ActionType;

export const redirect = (_store) => (next) => (action) => {
  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
