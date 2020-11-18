import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {noop} from "../../test-data";
import {Tab} from "../../const";

const {OVERVIEW, DETAILS, REVIEWS} = Tab;

const mockSetState = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useState: (initial) => [initial, mockSetState],
    }));

configure({adapter: new Adapter()});

it(`Click on tab should set active tab to state`, () => {

  const wrapper = mount(
      <Tabs renderTab={noop}>
        <React.Fragment />
      </Tabs>
  );

  const tabOverview = wrapper.find(`.movie-nav__link`).at(0);
  const tabDetails = wrapper.find(`.movie-nav__link`).at(1);
  const tabReviews = wrapper.find(`.movie-nav__link`).at(2);

  tabOverview.simulate(`click`);
  expect(mockSetState.mock.calls[0][0]).toEqual(OVERVIEW);
  tabDetails.simulate(`click`);
  expect(mockSetState.mock.calls[1][0]).toEqual(DETAILS);
  tabReviews.simulate(`click`);
  expect(mockSetState.mock.calls[2][0]).toEqual(REVIEWS);

  expect(mockSetState).toHaveBeenCalledTimes(3);
});
