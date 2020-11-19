import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import {getAddedFilms} from "../../store/selectors";
import movieCardProp from "../../prop-types/movie-card.prop";

const MyList = (props) => {
  const {favoriteFilms} = props;

  return (
    <div className="user-page">

      <Header classTitle={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList films={favoriteFilms} />

      </section>

      <Footer />

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
