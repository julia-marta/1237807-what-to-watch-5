import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {TABS} from "../../const";

const Tabs = (props) => {

  const {renderTab, activeTab, onTabClick} = props;

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TABS.map((tab, i) =>
            <li key={i + tab} className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={onTabClick}>{tab}</a>
            </li>
          )}
        </ul>
      </nav>
      {renderTab(activeTab)}
    </Fragment>
  );
};


Tabs.propTypes = {
  renderTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
