import React, {PureComponent} from "react";
import FilmTypes from "../../types/types";

export default class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeGenre: `All genres`,
    };

    this._handleGenreItemClick = this._handleGenreItemClick.bind(this);
  }

  _handleGenreItemClick(evt) {
    if (evt.target.tagName === `A`) {
      this.setState({activeGenre: evt.target.textContent});
    }
  }

  render() {
    const {genres} = this.props;
    const {activeGenre} = this.state;

    return (
      <ul className="catalog__genres-list" onClick={this._handleGenreItemClick}>

        {genres.map((genre, i) => (
          <li key ={i + 1} className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        ))}

      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: FilmTypes.genres.isRequired,
};
