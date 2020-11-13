import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";
import {noop} from "../../test-data";

it(`should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton onShowMoreButtonClick={noop} filmsToShowCount={4} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
