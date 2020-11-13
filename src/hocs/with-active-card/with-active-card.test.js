import React from "react";
import renderer from "react-test-renderer";
import withActiveCard from "./with-active-card";
import {SimpleMockComponent} from "../../test-data";

const MockComponentWrapped = withActiveCard(SimpleMockComponent);

it(`should withActiveCard HOC render correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
