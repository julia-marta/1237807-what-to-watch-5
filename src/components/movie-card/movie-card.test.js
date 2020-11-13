import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import MovieCard from "./movie-card";
import {noop, filmCard} from "../../test-data";

describe(`should MovieCard render correctly`, () => {
  it(`with video playing`, () => {
    const tree = renderer
        .create(
            <BrowserRouter>
              <MovieCard film={filmCard} isVideoPlaying={true} onMovieCardOut={noop} onMovieCardOver={noop} />
            </BrowserRouter>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without video`, () => {
    const tree = renderer
        .create(
            <BrowserRouter>
              <MovieCard film={filmCard} isVideoPlaying={false} onMovieCardOut={noop} onMovieCardOver={noop} />
            </BrowserRouter>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
