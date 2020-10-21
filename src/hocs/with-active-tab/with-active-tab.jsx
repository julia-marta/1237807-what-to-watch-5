import React, {PureComponent} from 'react';
import {Tab} from "../../const";

const {OVERVIEW} = Tab;

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(evt) {
      evt.preventDefault();
      this.setState({activeTab: evt.target.textContent});
    }

    render() {
      const {activeTab} = this.state;

      return <Component {...this.props} activeTab={activeTab} onTabClick={this._handleTabClick} />;
    }
  }
  WithActiveTab.propTypes = {};

  return WithActiveTab;
};

export default withActiveTab;
