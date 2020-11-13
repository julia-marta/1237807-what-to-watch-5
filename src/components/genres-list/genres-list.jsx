import React from "react";
import PropTypes from "prop-types";
import GenresListItem from "../genres-list-item/genres-list-item";

const MemoGenresListItem = React.memo(GenresListItem);

const GenresList = (props) => {

  const {genres, activeGenre, onGenreClick, resetCards} = props;

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre, i) => (
        <MemoGenresListItem key ={i + genre} genre={genre} isActive={genre === activeGenre}
          onGenreClick={onGenreClick} resetCards={resetCards}/>
      ))}

    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  resetCards: PropTypes.func.isRequired,
};

export default GenresList;
