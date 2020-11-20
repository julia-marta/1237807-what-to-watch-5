import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchFilm} from "../../store/actions/api-actions/api-actions";
import {getFilm} from "../../store/selectors";
import Header from "../header/header";
import ReviewForm from "../review-form/review-form";
import withNewReview from "../../hocs/with-new-review/with-new-review";
import moviePageProp from "../../prop-types/movie-page.prop";
import {AppRoute} from "../../const";

const ReviewFormWrapped = withNewReview(ReviewForm);
const {FILMS} = AppRoute;

const AddReview = (props) => {

  const {id, film, loadFilm} = props;
  const {name, backgroundImage, posterImage} = film || ``;

  useEffect(() => {
    loadFilm(id);
  }, [id]);

  return !film ? `` :
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg" style={{backgroundColor: film.backgroundColor}}>
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>

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
        <ReviewFormWrapped id={film.id} />
      </div>

    </section>;
};

AddReview.propTypes = {
  id: PropTypes.string.isRequired,
  film: PropTypes.oneOfType([moviePageProp.isRequired, () => null]),
  loadFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
