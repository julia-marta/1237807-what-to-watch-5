import React from "react";
import PropTypes from "prop-types";
import reviewProp from "../../prop-types/review.prop";
import MovieReviewsItem from "../movie-reviews-item/movie-reviews-item";

const MovieReviews = (props) => {
  const {reviews} = props;
  const evenReviews = reviews.filter((_review, i) => i % 2 === 0);
  const oddReviews = reviews.filter((_review, i) => i % 2 !== 0);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {evenReviews.map((review) =>
          <MovieReviewsItem key={review.id} review={review} />
        )}
      </div>

      <div className="movie-card__reviews-col">
        {oddReviews.map((review) =>
          <MovieReviewsItem key={review.id} review={review} />
        )}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default MovieReviews;
