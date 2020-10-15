import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import {Tab, TABS} from "../../const";

const {OVERVIEW} = Tab;

export default class Tabs extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: OVERVIEW
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(evt) {
    evt.preventDefault();
    this.setState({activeTab: evt.target.textContent});
  }

  render() {
    const {activeTab} = this.state;
    const {renderTab} = this.props;

    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TABS.map((tab, i) =>
              <li key={i + tab} className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
                <a href="#" className="movie-nav__link" onClick={this._handleTabClick}>{tab}</a>
              </li>
            )}
          </ul>
        </nav>
        {renderTab(activeTab)}
      </Fragment>
    );
  }
}

Tabs.propTypes = {
  renderTab: PropTypes.func.isRequired,
};
