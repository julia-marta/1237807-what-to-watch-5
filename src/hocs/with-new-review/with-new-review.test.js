import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import withNewReview from "./with-new-review";
import {MockComponent, defaultState} from "../../test-data";

const mockStore = configureMockStore()(defaultState);

const MockComponentWrapped = withNewReview(MockComponent);

it(`should withNewReview HOC render correctly`, () => {

  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MockComponentWrapped id={1}>
            <React.Fragment />
          </MockComponentWrapped>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
