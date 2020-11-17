import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from "./tabs";
import {noop} from "../../test-data";
import {Tab} from "../../const";

const {OVERVIEW, DETAILS, REVIEWS} = Tab;

describe(`should Tabs render correctly`, () => {
  it(`with Overview active tab`, () => {
    const tree = renderer
      .create(
          <Tabs renderTab={noop} activeTab={OVERVIEW} onTabClick={noop}>
            <React.Fragment />
          </Tabs>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with Details active tab`, () => {
    const tree = renderer
      .create(
          <Tabs renderTab={noop} activeTab={DETAILS} onTabClick={noop}>
            <React.Fragment />
          </Tabs>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with Reviews active tab`, () => {
    const tree = renderer
      .create(
          <Tabs renderTab={noop} activeTab={REVIEWS} onTabClick={noop}>
            <React.Fragment />
          </Tabs>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
