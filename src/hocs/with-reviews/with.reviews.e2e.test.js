import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import withReviews from "./with-reviews";
import {MockComponent, defaultState} from "../../test-data";
import {createAPI} from "../../services/api";

const api = createAPI(() => {});
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares)(defaultState);

configure({adapter: new Adapter()});

const MockComponentWrapped = withReviews(MockComponent);

it(`Should isLoading equal true`, () => {

  const wrapper = shallow(
      <MockComponentWrapped id={`1`} store={mockStore}>
        <React.Fragment />
      </MockComponentWrapped>)
    .find(`WithReviews`).shallow();

  expect(wrapper.state().isLoading).toEqual(true);
});
