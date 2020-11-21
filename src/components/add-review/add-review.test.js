import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import AddReview from "./add-review";
import {film, defaultState} from "../../test-data";

const mockStore = configureMockStore()(defaultState);

it(`should AddReview render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <AddReview id={`1`} film={film} />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
