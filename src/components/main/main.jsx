import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import Catalog from "../catalog/catalog";
import {addToFavorites} from "../../store/actions/api-actions/api-actions";
import promoFilmProp from "../../prop-types/promo-film.prop";

const Main = (props) => {
  const {promoFilm, onPlayClick, addToMyList} = props;
  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = promoFilm;

  const myListButtonClickHandle = useCallback(
      () => {
        addToMyList(id, Number(!isFavorite));
      }, [promoFilm, id, isFavorite]
  );

  const playButtonClickHandle = useCallback(
      () => {
        onPlayClick(id);
      }, [id]
  );

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header isMain={true} classTitle={`movie-card__head`} />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster" style={{backgroundColor: promoFilm.backgroundColor}}>
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={playButtonClickHandle}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={myListButtonClickHandle}>
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <Catalog />

      <Footer isMain={true}/>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  promoFilm: promoFilmProp.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  addToMyList: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  promoFilm: DATA.promo,
});

const mapDispatchToProps = (dispatch) => ({
  addToMyList(id, status) {
    dispatch(addToFavorites(id, status));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
