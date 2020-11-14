import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {MockComponent} from "../../test-data";
import {Tab} from "../../const";

const {OVERVIEW} = Tab;

configure({adapter: new Adapter()});

const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should activeTab equal OVERVIEW`, () => {
  const wrapper = shallow(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>);

  expect(wrapper.state().activeTab).toEqual(OVERVIEW);
});
