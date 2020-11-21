import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {MyList} from "./my-list";
import {defaultState} from "../../test-data";

const mockFavoriteFilms = defaultState.DATA.films;

jest.mock(`../header/header.jsx`, () => `Header`);

describe(`should MyList render correctly`, () => {
  it(`with favorite films`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyList favoriteFilms={mockFavoriteFilms} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without favorite films`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyList favoriteFilms={[]} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
