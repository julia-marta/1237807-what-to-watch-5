import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from "./sign-in";
import {noop} from "../../test-data";

jest.mock(`../header/Header`, () => `Header`);

it(`should SignIn render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SignIn onSubmit={noop} />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
