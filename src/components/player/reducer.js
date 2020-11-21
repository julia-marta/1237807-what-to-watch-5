import {extend} from "../../utils";

const ActionType = {
  CHANGE_PLAYING_STATE: `CHANGE_PLAYING_STATE`,
  SET_DURATION: `SET_DURATION`,
  SET_PROGRESS: `SET_PROGRESS`,
};

const {CHANGE_PLAYING_STATE, SET_DURATION, SET_PROGRESS} = ActionType;

export const initialState = {
  isPlaying: true,
  duration: 0,
  progress: 0,
};

export const ActionCreator = {
  changePlayingState: () => ({
    type: CHANGE_PLAYING_STATE,
  }),
  setDuration: (duration) => ({
    type: SET_DURATION,
    payload: Math.floor(duration),
  }),
  setProgress: (progress) => ({
    type: SET_PROGRESS,
    payload: Math.floor(progress),
  }),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_PLAYING_STATE:
      return extend(state, {
        isPlaying: !state.isPlaying,
      });
    case SET_DURATION:
      return extend(state, {
        duration: action.payload,
      });
    case SET_PROGRESS:
      return extend(state, {
        progress: action.payload,
      });
    default:
      return state;
  }
};
