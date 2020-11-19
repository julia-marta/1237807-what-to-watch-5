import React, {useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import movieCardProp from "../../prop-types/movie-card.prop";

const TRAILER_START_TIME = 1000;

const MemoMovieCard = React.memo(MovieCard);

const MovieList = (props) => {

  const {films} = props;
  const [activeCard, setActiveCard] = useState(-1);

  let timer = null;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  const cardOverHandle = useCallback(
      (id) => {
        timer = setTimeout(() => setActiveCard(id), TRAILER_START_TIME);
      }
  );

  const cardOutHandle = useCallback(
      () => {
        clearTimeout(timer);
        setActiveCard(-1);
      }
  );

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MemoMovieCard key ={`${i}-${film.id}`} film={film}
          onMovieCardOver ={() => cardOverHandle(film.id)}
          onMovieCardOut={cardOutHandle}
          isVideoPlaying ={activeCard === film.id} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(movieCardProp).isRequired,
};

export default MovieList;
