import React from "react";
import moment from "moment";
import reviewProp from "../../prop-types/review.prop";

const MovieReviewsItem = (props) => {
  const {review} = props;
  const {comment, user, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>
            {moment(date).format(`MMMM DD, YYYY`)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieReviewsItem.propTypes = {
  review: reviewProp.isRequired,
};

export default MovieReviewsItem;
