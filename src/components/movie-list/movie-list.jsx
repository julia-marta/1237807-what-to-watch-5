import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card";
import FilmTypes from "../../types/types";


export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1,
    };

    this._handleCardOver = this._handleCardOver.bind(this);
    this._handleCardOut = this._handleCardOut.bind(this);
  }

  _handleCardOver(id) {
    this.setState({activeCard: id});
  }

  _handleCardOut() {
    this.setState({activeCard: -1});
  }

  render() {
    const {films} = this.props;
    const {activeCard} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard key ={`${i}-${film.id}`} film={film}
            onMovieCardOver ={this._handleCardOver} onMovieCardOut={this._handleCardOut}
            isVideoPlaying ={activeCard === film.id} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: FilmTypes.list.isRequired,
};
