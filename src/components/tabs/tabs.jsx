import React, {Fragment, useState, useCallback} from "react";
import PropTypes from "prop-types";
import {TABS, Tab} from "../../const";

const {OVERVIEW} = Tab;

const Tabs = (props) => {

  const {renderTab} = props;

  const [activeTab, setActiveTab] = useState(OVERVIEW);

  const tabClickHandle = useCallback(
      (evt) => {
        evt.preventDefault();
        setActiveTab(evt.target.textContent);
      }, []
  );

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TABS.map((tab, i) =>
            <li key={i + tab} className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={tabClickHandle}>{tab}</a>
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
};

export default Tabs;
