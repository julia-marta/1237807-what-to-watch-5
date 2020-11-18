import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import MovieList from "../movie-list/movie-list";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {getSimilarFilms, getUserStatus} from "../../store/selectors";
import moviePageProp from "../../prop-types/movie-page.prop";
import movieCardProp from "../../prop-types/movie-card.prop";
import reviewProp from "../../prop-types/review.prop";
import {Tab, AppRoute, AuthorizationStatus} from "../../const";

const {OVERVIEW, DETAILS, REVIEWS} = Tab;
const {FILMS, REVIEW} = AppRoute;
const {AUTHORIZED} = AuthorizationStatus;

const MovieListWrapped = withActiveCard(MovieList);

const MoviePage = (props) => {

  const {film, reviews, relatedFilms, userStatus, onPlayClick, onMyListClick} = props;
  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = film;

  return <React.Fragment>

    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg" style={{backgroundColor: film.backgroundColor}}>
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header classTitle={`movie-card__head`} />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(id)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={() => onMyListClick(Number(!isFavorite))}>
                {isFavorite ?
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  :
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                }
                <span>My list</span>
              </button>

              {userStatus === AUTHORIZED ?
                <Link to={`${FILMS}/${id}${REVIEW}`} className="btn movie-card__button">Add review</Link>
                : ``}

            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">

            <Tabs renderTab={(activeTab) => {
              switch (activeTab) {
                case OVERVIEW:
                  return <MovieOverview film={film}/>;

                case DETAILS:
                  return <MovieDetails film={film}/>;

                case REVIEWS:
                  return <MovieReviews reviews={reviews}/>;
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

      <Footer />

    </div>
  </React.Fragment>;
};

MoviePage.propTypes = {
  id: PropTypes.string.isRequired,
  film: moviePageProp.isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  relatedFilms: PropTypes.arrayOf(movieCardProp).isRequired,
  userStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  relatedFilms: getSimilarFilms(state, props),
  userStatus: getUserStatus(state),
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
