import {extend} from "../../../utils";
import {ActionType, AuthorizationStatus, ReviewStatus} from "../../../const";

const {NOT_AUTHORIZED} = AuthorizationStatus;
const {NOT_SAVING} = ReviewStatus;
const {REQUIRE_AUTHORIZATION, SET_REVIEW_STATUS, SAVE_AUTHORIZATION_INFO} = ActionType;

const initialState = {
  status: NOT_AUTHORIZED,
  reviewStatus: NOT_SAVING,
  name: null,
  avatar: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRE_AUTHORIZATION:
      return extend(state, {
        status: action.payload,
      });
    case SET_REVIEW_STATUS:
      return extend(state, {
        reviewStatus: action.payload,
      });
    case SAVE_AUTHORIZATION_INFO:
      return extend(state, {
        name: action.payload.name,
        avatar: action.payload.avatar_url,
      });
  }

  return state;
};

export {user};
