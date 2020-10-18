import React from "react";
import PropTypes from "prop-types";
import FilmTypes from "../../types/types";
import {getGenresList} from "../../utils";

const GenresList = (props) => {

  const {films, activeGenre, onGenreClick, filterFilms, resetCards} = props;
  const genres = getGenresList(films);

  return (
    <ul className="catalog__genres-list" onClick={(evt) => {
      if (evt.target.tagName === `A`) {
        onGenreClick(evt.target.textContent);
        filterFilms(films, evt.target.textContent);
        resetCards();
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
  films: FilmTypes.list.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  filterFilms: PropTypes.func.isRequired,
  resetCards: PropTypes.func.isRequired,
};

export default GenresList;
