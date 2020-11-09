import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchReviews} from "../../store/actions/api-actions/api-actions";
import reviewProp from "../../prop-types/review.prop";

const withReviews = (Component) => {
  class WithReviews extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviews: null,
        isLoading: true,
      };
    }

    componentDidMount() {
      const {id, getReviews} = this.props;
      getReviews(id);
    }

    componentDidUpdate(prevProps) {

      const prevId = prevProps.id;
      const prevReviews = prevProps.currentReviews;
      const {id, currentReviews, getReviews} = this.props;

      if (prevReviews !== currentReviews) {
        this.setState({reviews: currentReviews, isLoading: false});
      }

      if (id !== prevId) {
        getReviews(id);
      }
    }

    render() {
      const {reviews, isLoading} = this.state;

      return isLoading ? `` : <Component {...this.props} reviews={reviews} />;
    }
  }

  WithReviews.propTypes = {
    id: PropTypes.string.isRequired,
    currentReviews: PropTypes.oneOfType([PropTypes.arrayOf(reviewProp).isRequired, () => null]),
    getReviews: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    currentReviews: DATA.currentReviews
  });

  const mapDispatchToProps = (dispatch) => ({
    getReviews(id) {
      dispatch(fetchReviews(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};

export {withReviews};
export default withReviews;
