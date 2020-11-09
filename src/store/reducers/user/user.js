import {extend} from "../../../utils";
import {ActionType, AuthorizationStatus} from "../../../const";

const {NOT_AUTHORIZED} = AuthorizationStatus;
const {REQUIRE_AUTHORIZATION, SAVE_AUTHORIZATION_INFO} = ActionType;

const initialState = {
  status: NOT_AUTHORIZED,
  name: null,
  avatar: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRE_AUTHORIZATION:
      return extend(state, {
        status: action.payload,
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
