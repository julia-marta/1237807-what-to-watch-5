import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import MovieList from "../movie-list/movie-list";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {createAPI} from "../../services/api";
import {getSimilarFilms} from "../../store/selectors";
import movieCardProp from "../../prop-types/movie-card.prop";
import {adaptFilmToClient} from "../../utils";
import {Tab, AppRoute, APIRoute} from "../../const";

const api = createAPI(() => {});

const {OVERVIEW, DETAILS, REVIEWS} = Tab;
const {ROOT, FILMS, REVIEW, LOGIN} = AppRoute;

const TabsWrapped = withActiveTab(Tabs);
const MovieListWrapped = withActiveCard(MovieList);

class MoviePage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      film: {},
      reviews: [],
    };
  }

  componentDidMount() {
    const {id} = this.props;

    api.get(`${APIRoute.FILMS}/${id}`)
      .then(({data}) => this.setState({film: adaptFilmToClient(data)}))
      .catch((error) => {
        throw error;
      });
    api.get(`${APIRoute.COMMENTS}/${id}`)
      .then(({data}) => this.setState({reviews: data}))
      .catch((error) => {
        throw error;
      });
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.id;
    const {id} = this.props;

    if (id !== prevId) {

      api.get(`${APIRoute.FILMS}/${id}`)
        .then(({data}) => this.setState({film: adaptFilmToClient(data)}))
        .catch((error) => {
          throw error;
        });
      api.get(`${APIRoute.COMMENTS}/${id}`)
        .then(({data}) => this.setState({reviews: data}))
        .catch((error) => {
          throw error;
        });
    }
  }

  render() {

    const {relatedFilms, onPlayClick} = this.props;
    const {film, reviews} = this.state;
    const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = film;

    return id ? <React.Fragment>

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg" style={{backgroundColor: film.backgroundColor}}>
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <Link to={LOGIN} className="user-block__link">Sign in</Link>
            </div>
          </header>

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
                <button className="btn btn--list movie-card__button" type="button">
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

                <Link to={`${FILMS}/${id}${REVIEW}`} className="btn movie-card__button">Add review</Link>
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

              <TabsWrapped renderTab={(activeTab) => {
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
    </React.Fragment> : ``;
  }
}

MoviePage.propTypes = {
  id: PropTypes.string.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  relatedFilms: PropTypes.arrayOf(movieCardProp).isRequired,
};

const mapStateToProps = (state, props) => ({
  relatedFilms: getSimilarFilms(state, props),
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
