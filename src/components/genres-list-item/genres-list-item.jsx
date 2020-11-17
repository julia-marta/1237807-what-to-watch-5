import React from "react";
import PropTypes from "prop-types";

const GenresListItem = (props) => {
  const {genre, onGenreClick, resetCards, isActive} = props;

  return (
    <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
      <a className="catalog__genres-link" onClick={() => {
        onGenreClick(genre);
        resetCards();
      }}>
        {genre}
      </a>
    </li>
  );
};

GenresListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  resetCards: PropTypes.func.isRequired,
};

export default GenresListItem;
