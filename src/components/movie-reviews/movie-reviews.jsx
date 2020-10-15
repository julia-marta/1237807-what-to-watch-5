import React from "react";
import FilmTypes from "../../types/types";

const MovieReviews = (props) => {
  const {film} = props;
  const evenReviews = film.reviews.filter((review, i) => i % 2 === 0);
  const oddReviews = film.reviews.filter((review, i) => i % 2 !== 0);

  const createReview = (review, i) => {
    return (
      <div key={i + 1} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>

          <footer className="review__details">
            <cite className="review__author">{review.name}</cite>
            <time className="review__date" dateTime={review.date.toISOString()}>
              {review.date.toLocaleDateString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`})}
            </time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    );
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {evenReviews.map((review, i) =>
          createReview(review, i)
        )}
      </div>

      <div className="movie-card__reviews-col">
        {oddReviews.map((review, i) =>
          createReview(review, i)
        )}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  film: FilmTypes.page.isRequired,
};

export default MovieReviews;
