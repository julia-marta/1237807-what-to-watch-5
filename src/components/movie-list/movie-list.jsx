import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import MovieCard from "../movie-card/movie-card";
import FilmTypes from "../../types/types";

const MovieList = (props) => {

  const {films, activeCard, onMovieCardOver, onMovieCardOut} = props;
  const history = useHistory();

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCard key ={`${i}-${film.id}`} film={film}
          onMovieCardOver ={onMovieCardOver} onMovieCardOut={onMovieCardOut}
          isVideoPlaying ={activeCard === film.id} history={history} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: FilmTypes.list.isRequired,
  activeCard: PropTypes.number.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
};

export default MovieList;
