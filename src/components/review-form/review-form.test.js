import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from "./review-form";
import {noop} from "../../test-data";

it(`should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm id={1} reviewStatus={`NOT_SAVING`} addReviewAction={noop} setReviewStatusAction={noop} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
