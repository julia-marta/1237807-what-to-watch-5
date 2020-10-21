import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import MovieList from "../movie-list/movie-list";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import FilmTypes from "../../types/types";
import {Tab} from "../../const";
import {getRelatedFilms} from "../../utils";

const {OVERVIEW, DETAILS, REVIEWS} = Tab;

const TabsWrapped = withActiveTab(Tabs);
const MovieListWrapped = withActiveCard(MovieList);

const MoviePage = (props) => {
  const {films, film, onPlayClick} = props;
  const relatedFilms = getRelatedFilms(films, film);

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
            <TabsWrapped renderTab={(activeTab) => {

              switch (activeTab) {
                case OVERVIEW:
                  return <MovieOverview film={film}/>;

                case DETAILS:
                  return <MovieDetails film={film}/>;

                case REVIEWS:
                  return <MovieReviews film={film}/>;
              }

              return null;
            }} />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieListWrapped films={relatedFilms} />
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
