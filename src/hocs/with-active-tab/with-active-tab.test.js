import React from "react";
import renderer from "react-test-renderer";
import withActiveTab from "./with-active-tab";
import {MockComponent} from "../../test-data";

const MockComponentWrapped = withActiveTab(MockComponent);

it(`should withActiveTab HOC render correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
