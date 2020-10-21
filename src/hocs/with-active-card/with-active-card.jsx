import React, {PureComponent} from 'react';

const TRAILER_START_TIME = 1000;

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.timeout = null;

      this.state = {
        activeCard: -1,
      };

      this._handleCardOver = this._handleCardOver.bind(this);
      this._handleCardOut = this._handleCardOut.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    _handleCardOver(id) {
      this.timeout = setTimeout(() => this.setState({activeCard: id}), TRAILER_START_TIME);
    }

    _handleCardOut() {
      clearTimeout(this.timeout);
      this.setState({activeCard: -1});
    }

    render() {
      const {activeCard} = this.state;

      return <Component {...this.props} activeCard={activeCard}
        onMovieCardOver ={this._handleCardOver} onMovieCardOut={this._handleCardOut} />;
    }
  }

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
