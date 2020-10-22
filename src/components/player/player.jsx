import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import FilmTypes from "../../types/types";
import {getCurrentFilm, secondsToMinutes} from "../../utils";

const Player = (props) => {

  const {films, onExitClick, renderPlayer, isPlaying, duration, progress, onPlayButtonClick, onFullScreenButtonClick} = props;
  const currentID = Number(useParams().id);
  const film = getCurrentFilm(films, currentID);
  const timeElapsed = secondsToMinutes(duration - progress);
  const togglePosition = progress * 100 / duration;

  return (
    <div className="player">
      {renderPlayer(film.trailer)}

      <button type="button" className="player__exit" onClick={() => onExitClick(film.id)}>Exit</button>

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
          <div className="player__name">{film.title}</div>

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
  films: FilmTypes.list.isRequired,
  onExitClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {Player};
export default connect(mapStateToProps)(Player);

