import React, {PureComponent} from "react";

const DEFAULT_RATING = `3`;

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING,
        text: ``,
      };

      this._handleFieldChange = this._handleFieldChange.bind(this);
    }

    _handleFieldChange({name, value}) {
      this.setState({[name]: value});
    }

    render() {
      const {rating, text} = this.state;

      return <Component {...this.props} currentRating={rating} currentText={text} onFieldChange={this._handleFieldChange} />;
    }
  }

  WithRating.propTypes = {};

  return WithRating;
};

export default withRating;
