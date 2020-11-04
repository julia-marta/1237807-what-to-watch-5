import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGenre, showMoreCards, resetCards} from "../../store/actions";
import MovieList from "../movie-list/movie-list";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {getGenre, getCardsCount, getFilteredFilms, getGenres} from "../../store/selectors";
import movieCardProp from "../../prop-types/movie-card.prop";

const MovieListWrapped = withActiveCard(MovieList);

const Catalog = (props) => {
  const {filteredFilms, genresList, activeGenre, changeGenreAction, cardsCount, showMoreCardsAction, resetCardsAction} = props;
  const renderedFilms = filteredFilms.slice(0, cardsCount);
  const renderedFilmsCount = renderedFilms.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList genres={genresList} activeGenre={activeGenre} onGenreClick={changeGenreAction} resetCards={resetCardsAction} />

      <MovieListWrapped films={renderedFilms} />

      {filteredFilms.length > renderedFilmsCount ?
        <ShowMoreButton onShowMoreButtonClick={showMoreCardsAction} filmsToShowCount={filteredFilms.slice(renderedFilmsCount).length}/>
        : ``}
    </section>
  );
};

Catalog.propTypes = {
  filteredFilms: PropTypes.arrayOf(movieCardProp).isRequired,
  genresList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeGenreAction: PropTypes.func.isRequired,
  cardsCount: PropTypes.number.isRequired,
  showMoreCardsAction: PropTypes.func.isRequired,
  resetCardsAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: getFilteredFilms(state),
  genresList: getGenres(state),
  activeGenre: getGenre(state),
  cardsCount: getCardsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenreAction(genre) {
    dispatch(changeGenre(genre));
  },
  showMoreCardsAction(filmsToShowCount) {
    dispatch(showMoreCards(filmsToShowCount));
  },
  resetCardsAction() {
    dispatch(resetCards());
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
