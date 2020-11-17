import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import MovieList from "./movie-list";
import {noop, defaultState} from "../../test-data";

const mockFilms = defaultState.DATA.films;

it(`should MovieList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieList films={mockFilms} activeCard={-1} onMovieCardOut={noop} onMovieCardOver={noop} />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
