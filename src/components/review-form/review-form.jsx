import React, {useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addReview} from "../../store/actions/api-actions/api-actions";
import {setReviewStatus} from "../../store/actions/user-actions/user-actions";
import {getReviewStatus} from "../../store/selectors";
import {ReviewStatus, ReviewLength} from "../../const";
import {extend} from "../../utils";

const {MIN, MAX} = ReviewLength;
const {SAVING} = ReviewStatus;
const STARS = [`1`, `2`, `3`, `4`, `5`];
const DEFAULT_RATING = `3`;
const DEFAULT_TEXT = ``;

const ReviewForm = (props) => {
  const {id, reviewStatus, addReviewAction, setReviewStatusAction} = props;

  const [reviewData, setReviewData] = useState({
    rating: DEFAULT_RATING,
    text: DEFAULT_TEXT,
  });

  const [isSaving, setStatus] = useState(false);

  const {rating, text} = reviewData;
  const isReviewValid = rating && (text.length > MIN && text.length < MAX);

  useEffect(() => {
    setStatus(reviewStatus === SAVING);
  }, [reviewStatus]);

  const handleFieldChange = useCallback(
      ({name, value}) => {
        setReviewData((prevData) => (
          extend(prevData, {[name]: value})
        ));
      }, [reviewData]
  );

  const handleFormSubmit = useCallback(
      (evt) => {
        evt.preventDefault();
        setReviewStatusAction(SAVING);
        addReviewAction(id, {rating, text});
      }, [id, reviewData]
  );

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">

          {STARS.map((star, i) => (
            <React.Fragment key={i + star}>
              <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star}
                checked={rating === star} disabled={isSaving} onChange={(evt) => handleFieldChange(evt.target)} />
              <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
            </React.Fragment>
          ))}

        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="text" id="review-text" value={text}
          minLength={MIN} maxLength={MAX} placeholder="Review text"
          disabled={isSaving} onChange={(evt) => handleFieldChange(evt.target)} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isReviewValid || isSaving}>Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  addReviewAction: PropTypes.func.isRequired,
  setReviewStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  reviewStatus: getReviewStatus(store),
});

const mapDispatchToProps = (dispatch) => ({
  addReviewAction(id, data) {
    dispatch(addReview(id, data));
  },
  setReviewStatusAction(status) {
    dispatch(setReviewStatus(status));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
