import React, {Fragment} from "react";
import PropTypes from "prop-types";
import movieCardProp from "../../prop-types/movie-card.prop";
import {secondsToMinutes} from "../../utils";

const Player = (props) => {

  const {film, onExitClick, renderPlayer, isPlaying, duration, progress, onPlayButtonClick, onFullScreenButtonClick} = props;
  const {id, name, videoLink} = film;
  const timeElapsed = secondsToMinutes(duration - progress);
  const togglePosition = progress * 100 / duration;

  return (
    <div className="player">
      {renderPlayer(videoLink)}

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
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
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

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
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
  film: movieCardProp.isRequired,
  onExitClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

export default Player;
