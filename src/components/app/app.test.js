import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import App from "./app";
import {defaultState} from "../../test-data";

const mockStore = configureMockStore()(defaultState);

it(`should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
