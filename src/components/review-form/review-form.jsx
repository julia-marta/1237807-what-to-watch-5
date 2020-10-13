import React, {PureComponent} from "react";

const RATINGS = [`1`, `2`, `3`, `4`, `5`];

export default class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `3`,
      text: ``,
    };

    this._handleFieldChange = this._handleFieldChange.bind(this);
  }

  _handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {

    return (
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">

            {RATINGS.map((rating, i) => (
              <React.Fragment key={i + rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating}
                  checked={this.state.rating === rating} onChange={this._handleFieldChange}/>
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            ))}

          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="text" id="review-text" value={this.state.text}
            placeholder="Review text" onChange={this._handleFieldChange} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}
