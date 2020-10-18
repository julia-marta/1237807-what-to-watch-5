import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {

  const {genres, activeGenre, onGenreClick, filterFilms} = props;

  return (
    <ul className="catalog__genres-list" onClick={(evt) => {
      if (evt.target.tagName === `A`) {
        onGenreClick(evt.target.textContent);
        filterFilms();
      }
    }}>

      {genres.map((genre, i) => (
        <li key ={i + 1} className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}

    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  filterFilms: PropTypes.func.isRequired,
};

export default GenresList;
