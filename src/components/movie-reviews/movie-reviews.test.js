import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviews from "./movie-reviews";
import {reviews} from "../../test-data";

it(`should MovieReviews tab render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviews reviews={reviews} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
