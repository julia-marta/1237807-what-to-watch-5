import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MovieList from "../movie-list/movie-list";
import FilmTypes from "../../types/types";
import getLevel from "../../utils";

const RELATED_FILMS_COUNT = 4;

const MoviePage = (props) => {
  const {films, film, onPlayClick} = props;
  const relatedFilms = films.slice(0, RELATED_FILMS_COUNT);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={`img/${film.cover}`} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to='/' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            <Link to="/login" className="user-block__link">Sign in</Link>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(film.id)}>
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
              <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={`img/${film.poster}`} alt={`${film.title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{film.overview.score}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getLevel(parseInt(film.overview.score, 10))}</span>
                <span className="movie-rating__count">{film.overview.ratings} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">

              {film.overview.description.split(/\n/).map((item, i) => <p key={i + 1}>{item}</p>)}
              <p className="movie-card__director"><strong>Director: {film.overview.director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {film.overview.starring}</strong></p>

            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList films={relatedFilms} />
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
  </React.Fragment>;
};

MoviePage.propTypes = {
  films: FilmTypes.list.isRequired,
  film: FilmTypes.page.isRequired,
  onPlayClick: PropTypes.func.isRequired,
};

export default MoviePage;
