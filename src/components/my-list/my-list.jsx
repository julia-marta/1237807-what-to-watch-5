import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../header/header";
import MovieList from "../movie-list/movie-list";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {getAddedFilms} from "../../store/selectors";
import movieCardProp from "../../prop-types/movie-card.prop";

const MovieListWrapped = withActiveCard(MovieList);

const MyList = (props) => {
  const {favoriteFilms} = props;

  return (
    <div className="user-page">

      <Header classTitle={`user-page__head`} isAuthorized={true}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieListWrapped films={favoriteFilms} />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to='/' className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(movieCardProp).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getAddedFilms(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);
