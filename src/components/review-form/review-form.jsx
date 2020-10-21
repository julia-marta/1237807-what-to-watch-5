import React from "react";
import PropTypes from "prop-types";

const RATINGS = [`1`, `2`, `3`, `4`, `5`];

const ReviewForm = (props) => {
  const {currentRating, currentText, onFieldChange} = props;

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">

          {RATINGS.map((rating, i) => (
            <React.Fragment key={i + rating}>
              <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating}
                checked={currentRating === rating} onChange={() => onFieldChange(event.target)}/>
              <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
            </React.Fragment>
          ))}

        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="text" id="review-text" value={currentText}
          placeholder="Review text" onChange={() => onFieldChange(event.target)} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  currentRating: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default ReviewForm;
