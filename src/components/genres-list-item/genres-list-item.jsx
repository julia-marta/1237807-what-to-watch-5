import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmTypes from "../../types/types";

export default class GenresListItem extends PureComponent {
  constructor(props) {
    super(props);

    this._handleGenreClick = this._handleGenreClick.bind(this);
  }

  _handleGenreClick() {
    const {films, genre, onGenreClick, filterFilms, resetCards} = this.props;

    onGenreClick(genre);
    filterFilms(films, genre);
    resetCards();
  }

  render() {
    const {genre, isActive} = this.props;

    return (
      <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={() => this._handleGenreClick()}>
          {genre}
        </a>
      </li>
    );
  }
}

GenresListItem.propTypes = {
  films: FilmTypes.list.isRequired,
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  filterFilms: PropTypes.func.isRequired,
  resetCards: PropTypes.func.isRequired,
};
