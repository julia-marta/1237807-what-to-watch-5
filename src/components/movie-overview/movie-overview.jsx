import React, {Fragment} from "react";
import {getLevel} from "../../utils";
import FilmTypes from "../../types/types";

const MovieOverview = (props) => {
  const {film} = props;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.overview.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getLevel(parseInt(film.overview.score, 10))}</span>
          <span className="movie-rating__count">{film.overview.ratings} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {film.overview.description.split(/\n/).map((item, i) => <p key={i + 1}>{item}</p>)}
        <p className="movie-card__director"><strong>Director: {film.overview.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {film.overview.starring}</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  film: FilmTypes.page.isRequired,
};

export default MovieOverview;
