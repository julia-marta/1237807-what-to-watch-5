import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from "./tabs";
import {noop} from "../../test-data";

it(`should Tabs render correctly`, () => {
  const tree = renderer
      .create(
          <Tabs renderTab={noop}>
            <React.Fragment />
          </Tabs>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
