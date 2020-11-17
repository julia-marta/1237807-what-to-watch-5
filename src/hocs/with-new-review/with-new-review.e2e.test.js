import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';
import withNewReview from "./with-new-review";
import {MockComponent, defaultState} from "../../test-data";

const mockStore = configureMockStore()(defaultState);
configure({adapter: new Adapter()});

const MockComponentWrapped = withNewReview(MockComponent);

it(`Should isSaving equal false`, () => {

  const wrapper = shallow(
      <MockComponentWrapped id={1} store={mockStore}>
        <React.Fragment />
      </MockComponentWrapped>)
    .find(`WithNewReview`).shallow();

  expect(wrapper.state().isSaving).toEqual(false);
});

it(`Should field change handler change state`, () => {

  const wrapper = shallow(
      <MockComponentWrapped id={1} store={mockStore}>
        <React.Fragment />
      </MockComponentWrapped>)
    .find(`WithNewReview`).shallow();

  const defaultRating = `3`;
  const defaultText = ``;

  expect(wrapper.state().rating).toEqual(defaultRating);
  wrapper.instance()._handleFieldChange({name: `rating`, value: `5`});
  expect(wrapper.state().rating).toEqual(`5`);

  expect(wrapper.state().text).toEqual(defaultText);
  wrapper.instance()._handleFieldChange({name: `text`, value: `test`});
  expect(wrapper.state().text).toEqual(`test`);
});
