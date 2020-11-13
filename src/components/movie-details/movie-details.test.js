import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from "./movie-details";
import {film} from "../../test-data";

it(`should MovieDetails tab render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetails film={film} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
