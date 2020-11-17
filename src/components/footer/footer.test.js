import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import Footer from "./footer";

describe(`should Footer render correctly`, () => {
  it(`on Main Page`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Footer isMain={true} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`on other pages`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
