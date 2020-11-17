import React from "react";
import PropTypes from "prop-types";
import {ReviewLength} from "../../const";

const {MIN, MAX} = ReviewLength;
const RATINGS = [`1`, `2`, `3`, `4`, `5`];

const ReviewForm = (props) => {
  const {currentRating, currentText, isReviewValid, isReviewSaving, onFieldChange, onSubmit} = props;

  return (
    <form action="#" className="add-review__form" onSubmit={(evt) => {
      evt.preventDefault();
      onSubmit();
    }}>
      <div className="rating">
        <div className="rating__stars">

          {RATINGS.map((rating, i) => (
            <React.Fragment key={i + rating}>
              <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating}
                checked={currentRating === rating} disabled={isReviewSaving} onChange={(event) => onFieldChange(event.target)}/>
              <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
            </React.Fragment>
          ))}

        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="text" id="review-text" value={currentText}
          minLength={MIN} maxLength={MAX} placeholder="Review text"
          disabled={isReviewSaving} onChange={(event) => onFieldChange(event.target)} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isReviewValid || isReviewSaving}>Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  currentRating: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired,
  isReviewValid: PropTypes.bool.isRequired,
  isReviewSaving: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
