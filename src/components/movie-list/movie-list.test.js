import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import MovieList from "./movie-list";
import {defaultState} from "../../test-data";

const mockFilms = defaultState.DATA.films;

it(`should MovieList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieList films={mockFilms} />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
