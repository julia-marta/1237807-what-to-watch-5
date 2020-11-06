import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm} from "../../store/api-actions";
import moviePageProp from "../../prop-types/movie-page.prop";

const withFilm = (Component) => {
  class WithFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
        isLoading: true,
      };
    }

    componentDidMount() {
      const {id, getFilm} = this.props;
      getFilm(id);
    }

    componentDidUpdate(prevProps) {
      const prevId = prevProps.id;
      const prevFilm = prevProps.currentFilm;
      const {id, currentFilm, getFilm} = this.props;

      if (prevFilm !== currentFilm) {
        this.setState({film: currentFilm, isLoading: false});
      }

      if (id !== prevId) {
        getFilm(id);
      }
    }

    render() {
      const {film, isLoading} = this.state;

      return isLoading ? `` : <Component {...this.props} film={film} />;
    }
  }

  WithFilm.propTypes = {
    id: PropTypes.string.isRequired,
    currentFilm: PropTypes.oneOfType([moviePageProp.isRequired, () => null]),
    getFilm: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    currentFilm: DATA.currentFilm,
  });

  const mapDispatchToProps = (dispatch) => ({
    getFilm(id) {
      dispatch(fetchFilm(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFilm);
};

export {withFilm};
export default withFilm;
