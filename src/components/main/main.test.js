import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import {noop, promoFilm} from "../../test-data";

jest.mock(`../header/header.jsx`, () => `Header`);
jest.mock(`../catalog/catalog.jsx`, () => `Catalog`);

it(`should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main promoFilm={promoFilm} onPlayClick={noop} addToMyList={noop} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
