import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {noop} from "../../test-data";
import {Tab} from "../../const";

const {OVERVIEW} = Tab;

configure({adapter: new Adapter()});

it(`Click on tab should call callbacks`, () => {
  const handleTabClick = jest.fn();

  const wrapper = shallow(
      <Tabs renderTab={noop} activeTab={OVERVIEW} onTabClick={handleTabClick}>
        <React.Fragment />
      </Tabs>
  );

  const tabOne = wrapper.find(`.movie-nav__link`).at(0);
  const tabTwo = wrapper.find(`.movie-nav__link`).at(1);
  const tabThree = wrapper.find(`.movie-nav__link`).at(2);

  tabOne.simulate(`click`);
  tabTwo.simulate(`click`);
  tabThree.simulate(`click`);

  expect(handleTabClick).toHaveBeenCalledTimes(3);
});
