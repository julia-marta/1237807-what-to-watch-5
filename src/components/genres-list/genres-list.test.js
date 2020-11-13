import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";
import {noop, genres} from "../../test-data";

describe(`should GenresList render correctly`, () => {
  it(`with "All genres" active genre`, () => {
    const tree = renderer
      .create(
          <GenresList genres={genres} activeGenre={`All genres`} onGenreClick={noop} resetCards={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with "Thriller" active genre`, () => {
    const tree = renderer
      .create(
          <GenresList genres={genres} activeGenre={`Thriller`} onGenreClick={noop} resetCards={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
