import React from "react";
import PropTypes from "prop-types";
import {useHistory, Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import FilmTypes from "../../types/types";

const MovieCard = (props) => {
  const {film, onMovieCardOver, onMovieCardOut, isVideoPlaying} = props;
  const history = useHistory();

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieCardOver(film.id)} onMouseLeave={() => onMovieCardOut()}
      onClick={() => history.push(`/films/${film.id}`)} >

      {isVideoPlaying ?
        <VideoPlayer trailer={film.trailer} preview={`img/${film.preview}`}/>
        : <div className="small-movie-card__image">
          <img src={`img/${film.preview}`} alt={film.title} width="280" height="175" />
        </div>
      }

      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link">{film.title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmTypes.card.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
