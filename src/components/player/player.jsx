import React, {Fragment, useReducer, useEffect, useCallback, createRef} from "react";
import PropTypes from "prop-types";
import moviePageProp from "../../prop-types/movie-page.prop";
import {secondsToMinutes, extend} from "../../utils";

const initialState = {
  isPlaying: true,
  duration: 0,
  progress: 0,
};

const ActionType = {
  CHANGE_PLAYING_STATE: `CHANGE_PLAYING_STATE`,
  SET_DURATION: `SET_DURATION`,
  SET_PROGRESS: `SET_PROGRESS`,
};

const {CHANGE_PLAYING_STATE, SET_DURATION, SET_PROGRESS} = ActionType;

const ActionCreator = {
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

const {changePlayingState, setDuration, setProgress} = ActionCreator;

const reducer = (state, action) => {
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

const Player = (props) => {
  const {film, onExitClick} = props;
  const {id, name, videoLink} = film;
  const videoRef = createRef();

  const [state, dispatch] = useReducer(reducer, initialState);
  const {isPlaying, duration, progress} = state;

  useEffect(() => {
    const video = videoRef.current;

    video.oncanplay = () => {
      dispatch(setDuration(video.duration));
    };

    video.ontimeupdate = () => {
      dispatch(setProgress(video.currentTime));
    };

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    return () => {
      video.oncanplay = null;
      video.ontimeupdate = null;
    };
  }, [isPlaying]);

  const playButtonClickHandle = useCallback(
      () => {
        dispatch(changePlayingState());
      }, [isPlaying]
  );

  const fullScreenButtonClickHandle = useCallback(
      () => {
        const video = videoRef.current;
        video.requestFullscreen();
      }, [videoRef]
  );

  const timeElapsed = secondsToMinutes(duration - progress);
  const togglePosition = progress * 100 / duration || 0;

  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster="../img/player-poster.jpg"></video>

      <button type="button" className="player__exit" onClick={() => onExitClick(id)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: `${togglePosition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={playButtonClickHandle}>
            {isPlaying ?
              <Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </Fragment>
              :
              <Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Fragment>
            }
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={fullScreenButtonClickHandle}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: moviePageProp.isRequired,
  onExitClick: PropTypes.func.isRequired,
};

export default Player;
