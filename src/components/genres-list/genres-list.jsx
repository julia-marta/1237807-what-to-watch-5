import React from "react";
import PropTypes from "prop-types";
import GenresListItem from "../genres-list-item/genres-list-item";
import FilmTypes from "../../types/types";
import {getGenresList} from "../../utils";

const GenresList = (props) => {

  const {films, activeGenre, onGenreClick, filterFilms, resetCards} = props;
  const genres = getGenresList(films);

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre, i) => (
        <GenresListItem key ={i + genre} films={films} genre={genre} isActive={genre === activeGenre}
          onGenreClick={onGenreClick} filterFilms={filterFilms} resetCards={resetCards}/>
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
