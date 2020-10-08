import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card";
import FilmTypes from "../../types/types";


export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleCardOver = this._handleCardOver.bind(this);
    this._handleCardOut = this._handleCardOut.bind(this);
  }

  _handleCardOver(id) {
    this.setState({activeCard: id});
  }

  _handleCardOut() {
    this.setState({activeCard: null});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard key ={`${i}-${film.id}`} film={film} onMovieCardOver ={this._handleCardOver} onMovieCardOut={this._handleCardOut} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: FilmTypes.list.isRequired,
};
