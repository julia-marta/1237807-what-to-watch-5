import React, {useCallback} from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onShowMoreButtonClick, filmsToShowCount} = props;

  const handleCatalogButtonClick = useCallback(
      () => {
        onShowMoreButtonClick(filmsToShowCount);
      }, [filmsToShowCount]
  );

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleCatalogButtonClick}>
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  filmsToShowCount: PropTypes.number.isRequired,
};

export default ShowMoreButton;
