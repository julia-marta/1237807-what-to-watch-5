import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onShowMoreButtonClick, filmsToShowCount} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => onShowMoreButtonClick(filmsToShowCount)}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  filmsToShowCount: PropTypes.number.isRequired,
};

export default ShowMoreButton;
