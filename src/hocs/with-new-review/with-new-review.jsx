import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addReview} from "../../store/actions/api-actions/api-actions";
import {setReviewStatus} from "../../store/actions/user-actions/user-actions";
import {ReviewLength, ReviewStatus} from "../../const";

const {MIN, MAX} = ReviewLength;
const {SAVING} = ReviewStatus;
const DEFAULT_RATING = `3`;

const withNewReview = (Component) => {
  class WithNewReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING,
        text: ``,
        isSaving: false,
      };

      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
      const prevStatus = prevProps.reviewStatus;
      const {reviewStatus} = this.props;

      if (prevStatus !== reviewStatus) {
        this.setState({isSaving: reviewStatus === SAVING ? true : false});
      }
    }

    _handleFieldChange({name, value}) {
      this.setState({[name]: value});
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const {id, addReviewAction, setReviewStatusAction} = this.props;
      const {rating, text} = this.state;
      setReviewStatusAction(SAVING);
      addReviewAction(id, {rating, text});
    }

    render() {
      const {rating, text, isSaving} = this.state;
      const isReviewValid = rating && (text.length > MIN && text.length < MAX);

      return <Component {...this.props} currentRating={rating} currentText={text}
        isReviewValid={isReviewValid} isReviewSaving={isSaving}
        onFieldChange={this._handleFieldChange} onSubmit={this._handleSubmit} />;
    }
  }

  WithNewReview.propTypes = {
    id: PropTypes.number.isRequired,
    reviewStatus: PropTypes.string.isRequired,
    addReviewAction: PropTypes.func.isRequired,
    setReviewStatusAction: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({USER}) => ({
    reviewStatus: USER.reviewStatus,
  });

  const mapDispatchToProps = (dispatch) => ({
    addReviewAction(id, data) {
      dispatch(addReview(id, data));
    },
    setReviewStatusAction(status) {
      dispatch(setReviewStatus(status));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithNewReview);
};

export {withNewReview};
export default withNewReview;
