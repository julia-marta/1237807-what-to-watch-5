import React from 'react';
import renderer from 'react-test-renderer';
import MovieOverview from "./movie-overview";
import {film} from "../../test-data";

it(`should MovieOverview tab render correctly`, () => {
  const tree = renderer
    .create(
        <MovieOverview film={film} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
