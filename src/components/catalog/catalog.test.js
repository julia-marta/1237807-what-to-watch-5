import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {Catalog} from "./catalog";
import {noop, genres, defaultState} from "../../test-data";

const mockFilteredFilms = defaultState.DATA.films;

describe(`should Catalog render correctly`, () => {
  it(`with ShowMoreButton`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Catalog filteredFilms={mockFilteredFilms} genresList={genres}
              activeGenre={genres[0]} changeGenreAction={noop} cardsCount={4}
              showMoreCardsAction={noop} resetCardsAction={noop}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without ShowMoreButton`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Catalog filteredFilms={mockFilteredFilms} genresList={genres}
              activeGenre={genres[0]} changeGenreAction={noop} cardsCount={mockFilteredFilms.length}
              showMoreCardsAction={noop} resetCardsAction={noop}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without filtered films for active genre`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Catalog filteredFilms={[]} genresList={genres}
              activeGenre={genres[2]} changeGenreAction={noop} cardsCount={4}
              showMoreCardsAction={noop} resetCardsAction={noop}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
