import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ReviewForm from "../review-form/review-form";
import withRating from "../../hocs/with-rating/with-rating";
import moviePageProp from "../../prop-types/movie-page.prop";
import {AppRoute} from "../../const";

const ReviewFormWrapped = withRating(ReviewForm);
const {ROOT, FILMS} = AppRoute;

const AddReview = (props) => {

  const {film, onAvatarClick} = props;
  const {id, name, backgroundImage, posterImage} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg" style={{backgroundColor: film.backgroundColor}}>
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar" onClick={onAvatarClick}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapped />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  film: moviePageProp.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
};

export default AddReview;
