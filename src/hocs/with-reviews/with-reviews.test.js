import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import withReviews from "./with-reviews";
import {MockComponent, defaultState} from "../../test-data";
import {createAPI} from "../../services/api";

const api = createAPI(() => {});
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares)(defaultState);

const MockComponentWrapped = withReviews(MockComponent);

it(`should withReviews HOC render correctly`, () => {

  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MockComponentWrapped id={`1`}>
            <React.Fragment />
          </MockComponentWrapped>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});