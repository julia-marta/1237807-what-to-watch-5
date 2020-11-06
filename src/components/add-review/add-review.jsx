import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../header/header";
import ReviewForm from "../review-form/review-form";
import withRating from "../../hocs/with-rating/with-rating";
import moviePageProp from "../../prop-types/movie-page.prop";
import {AppRoute} from "../../const";

const ReviewFormWrapped = withRating(ReviewForm);
const {FILMS} = AppRoute;

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

        <Header onAvatarClick={onAvatarClick} isAuthorized={true}>

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

        </ Header>

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
