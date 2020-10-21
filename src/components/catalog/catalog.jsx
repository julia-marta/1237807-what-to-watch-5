import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import MovieList from "../movie-list/movie-list";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import FilmTypes from "../../types/types";

const MovieListWrapped = withActiveCard(MovieList);

const Catalog = (props) => {
  const {films, filteredFilms, activeGenre, changeGenre, filterFilms, cardsCount, showMoreCards, resetCards} = props;
  const renderedFilms = filteredFilms.slice(0, cardsCount);
  const renderedFilmsCount = renderedFilms.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList films={films} activeGenre={activeGenre} onGenreClick={changeGenre}
        filterFilms={filterFilms} resetCards={resetCards} />

      <MovieListWrapped films={renderedFilms} />

      {filteredFilms.length > renderedFilmsCount ?
        <ShowMoreButton onShowMoreButtonClick={showMoreCards} filmsToShowCount={filteredFilms.slice(renderedFilmsCount).length}/>
        : ``}
    </section>
  );
};

Catalog.propTypes = {
  films: FilmTypes.list.isRequired,
  filteredFilms: FilmTypes.list.isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  filterFilms: PropTypes.func.isRequired,
  cardsCount: PropTypes.number.isRequired,
  showMoreCards: PropTypes.func.isRequired,
  resetCards: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  filteredFilms: state.filteredFilms,
  activeGenre: state.genre,
  cardsCount: state.cardsCount,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  filterFilms(films, genre) {
    dispatch(ActionCreator.filterFilms(films, genre));
  },
  showMoreCards(filmsToShowCount) {
    dispatch(ActionCreator.showMoreCards(filmsToShowCount));
  },
  resetCards() {
    dispatch(ActionCreator.resetCards());
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
