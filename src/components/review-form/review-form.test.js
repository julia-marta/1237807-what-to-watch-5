import React from 'react';
import renderer from 'react-test-renderer';
import ReviewForm from "./review-form";
import {noop} from "../../test-data";

describe(`should ReviewForm render correctly`, () => {
  it(`with disabled post button when review is not valid`, () => {
    const tree = renderer
    .create(
        <ReviewForm currentRating={`3`} currentText={`test text`}
          isReviewValid={false} isReviewSaving={false}
          onFieldChange={noop} onSubmit={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with disabled form when review is saving`, () => {
    const tree = renderer
    .create(
        <ReviewForm currentRating={`3`} currentText={`test text`}
          isReviewValid={true} isReviewSaving={true}
          onFieldChange={noop} onSubmit={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with rating 1 star`, () => {
    const tree = renderer
    .create(
        <ReviewForm currentRating={`1`} currentText={`test text`}
          isReviewValid={true} isReviewSaving={false}
          onFieldChange={noop} onSubmit={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with rating 5 stars`, () => {
    const tree = renderer
    .create(
        <ReviewForm currentRating={`5`} currentText={`test text`}
          isReviewValid={true} isReviewSaving={false}
          onFieldChange={noop} onSubmit={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
