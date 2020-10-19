import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import MovieList from "../movie-list/movie-list";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import FilmTypes from "../../types/types";

const Main = (props) => {
  const {films, filteredFilms, filmHeader, onPlayClick, activeGenre, changeGenre, filterFilms, cardsCount, showMoreCards, resetCards} = props;
  const renderedFilms = filteredFilms.slice(0, cardsCount);
  const renderedFilmsCount = renderedFilms.length;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={`img/${filmHeader.cover}`} alt={filmHeader.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={`img/${filmHeader.poster}`} alt={`${filmHeader.title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{filmHeader.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{filmHeader.genre}</span>
              <span className="movie-card__year">{filmHeader.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(filmHeader.id)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList films={films} activeGenre={activeGenre} onGenreClick={changeGenre} filterFilms={filterFilms} resetCards={resetCards} />

        <MovieList films={renderedFilms} />

        {filteredFilms.length > renderedFilmsCount ?
          <ShowMoreButton onShowMoreButtonClick={showMoreCards} filmsToShowCount={filteredFilms.slice(renderedFilmsCount).length}/>
          : ``}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  films: FilmTypes.list.isRequired,
  filteredFilms: FilmTypes.list.isRequired,
  filmHeader: FilmTypes.header.isRequired,
  onPlayClick: PropTypes.func.isRequired,
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

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
