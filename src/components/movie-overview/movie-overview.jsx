import React, {Fragment} from "react";
import {getLevel} from "../../utils";
import moviePageProp from "../../prop-types/movie-page.prop";

const MovieOverview = (props) => {
  const {film} = props;
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getLevel(parseInt(rating, 10))}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  film: moviePageProp.isRequired,
};

export default MovieOverview;
