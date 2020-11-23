import React, {Fragment, useState, useEffect, useCallback, useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm} from "../../store/actions/api-actions/api-actions";
import {getFilm} from "../../store/selectors";
import moviePageProp from "../../prop-types/movie-page.prop";
import {secondsToMinutes, defaultFilm, extend} from "../../utils";

const Player = (props) => {
  const {id, film, loadFilm, onExitClick} = props;
  const {name, videoLink} = film || defaultFilm;
  const videoRef = useRef();

  const [playerData, setPlayerData] = useState({
    isPlaying: true,
    duration: 0,
    progress: 0,
  });

  const {isPlaying, duration, progress} = playerData;

  useEffect(() => {
    loadFilm(id);
  }, [id]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {

      video.oncanplay = () => {
        setPlayerData((prevData) => (
          extend(prevData, {duration: Math.floor(video.duration)})
        ));
      };

      video.ontimeupdate = () => {
        setPlayerData((prevData) => (
          extend(prevData, {progress: Math.floor(video.currentTime)})
        ));
      };

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    return () => {
      if (video) {
        video.oncanplay = null;
        video.ontimeupdate = null;
      }
    };
  }, [isPlaying]);

  const handlePlayButtonClick = useCallback(
      () => {
        setPlayerData((prevData) => (
          extend(prevData, {isPlaying: !isPlaying})
        ));
      }, [isPlaying]
  );

  const handleFullScreenButtonClick = useCallback(
      () => {
        const video = videoRef.current;
        video.requestFullscreen();
      }, [videoRef]
  );

  const handleExitButtonClick = useCallback(
      () => {
        onExitClick(id);
      }, [id]
  );

  const timeElapsed = secondsToMinutes(duration - progress);
  const togglePosition = progress * 100 / duration || 0;

  return film ?
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster="../img/player-poster.jpg" />

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: `${togglePosition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            {isPlaying ?
              <Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause" />
                </svg>
                <span>Pause</span>
              </Fragment>
              :
              <Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Fragment>
            }
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div> : ``;
};

Player.propTypes = {
  id: PropTypes.string.isRequired,
  film: PropTypes.oneOfType([moviePageProp.isRequired, () => null]),
  loadFilm: PropTypes.func.isRequired,
  onExitClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
