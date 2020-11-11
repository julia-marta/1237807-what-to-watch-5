import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm, addToFavorites} from "../../store/actions/api-actions/api-actions";
import moviePageProp from "../../prop-types/movie-page.prop";

const withFilm = (Component) => {
  class WithFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
        isLoading: true,
      };
      this._handleMyListButton = this._handleMyListButton.bind(this);
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

    _handleMyListButton(status) {
      const {id, addToMyList, getFilm} = this.props;

      addToMyList(id, status);
      getFilm(id);
    }

    render() {
      const {film, isLoading} = this.state;

      return isLoading ? `` : <Component {...this.props} film={film} onMyListClick={this._handleMyListButton} />;
    }
  }

  WithFilm.propTypes = {
    id: PropTypes.string.isRequired,
    currentFilm: PropTypes.oneOfType([moviePageProp.isRequired, () => null]),
    getFilm: PropTypes.func.isRequired,
    addToMyList: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    currentFilm: DATA.currentFilm,
  });

  const mapDispatchToProps = (dispatch) => ({
    getFilm(id) {
      dispatch(fetchFilm(id));
    },
    addToMyList(id, status) {
      dispatch(addToFavorites(id, status));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFilm);
};

export {withFilm};
export default withFilm;
