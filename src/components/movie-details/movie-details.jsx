import React, {Fragment} from "react";
import moment from "moment";
import 'moment-duration-format';
import moviePageProp from "../../prop-types/movie-page.prop";

const MovieDetails = (props) => {
  const {film} = props;
  const {director, starring, runTime, genre, released} = film;

  return (
    <Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((item, i) => <Fragment key={i + 1}>{item} <br/></Fragment>)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{moment.duration(runTime, `minutes`).format(`h[h] m[m]`)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  film: moviePageProp.isRequired,
};

export default MovieDetails;
