import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviewsItem from "./movie-reviews-item";
import {reviews} from "../../test-data";

it(`should MovieReviewsItem render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviewsItem review={reviews[0]} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
