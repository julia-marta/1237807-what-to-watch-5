import React, {useCallback} from "react";
import PropTypes from "prop-types";

const GenresListItem = (props) => {
  const {genre, onGenreClick, resetCards, isActive} = props;

  const genresLinkHandle = useCallback(
      () => {
        onGenreClick(genre);
        resetCards();
      }, [onGenreClick]
  );

  return (
    <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
      <a className="catalog__genres-link" onClick={genresLinkHandle}>
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
