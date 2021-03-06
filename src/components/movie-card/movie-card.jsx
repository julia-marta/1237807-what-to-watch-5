import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import browserHistory from "../../browser-history";
import movieCardProp from "../../prop-types/movie-card.prop";
import {AppRoute} from "../../const";

const {FILMS} = AppRoute;

const MovieCard = (props) => {
  const {film, onMovieCardOver, onMovieCardOut, isVideoPlaying} = props;
  const {id, name, previewImage, previewVideoLink} = film;
  const history = browserHistory;

  const handleCardOver = useCallback(
      () => {
        onMovieCardOver(id);
      }, [id]
  );

  const handleCardOut = useCallback(
      () => {
        onMovieCardOut();
      }, []
  );

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleCardOver} onMouseLeave={handleCardOut}>

      {isVideoPlaying ?
        <VideoPlayer trailer={previewVideoLink} preview={previewImage}/>
        : <div className="small-movie-card__image" onClick={() => history.push(`${FILMS}/${id}`)}>
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      }

      <h3 className="small-movie-card__title">
        <Link to={`${FILMS}/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: movieCardProp.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
