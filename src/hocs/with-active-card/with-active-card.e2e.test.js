import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveCard from "./with-active-card";
import {SimpleMockComponent} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponentWrapped = withActiveCard(SimpleMockComponent);

it(`Should activeCard id equal -1`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeCard).toEqual(-1);
});
