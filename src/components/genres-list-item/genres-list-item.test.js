import React from "react";
import renderer from "react-test-renderer";
import GenresListItem from "./genres-list-item";
import {noop, genres} from "../../test-data";

it(`should GenresListItem render correctly`, () => {
  const tree = renderer
    .create(
        <GenresListItem genre={genres[0]} isActive={true} onGenreClick={noop} resetCards={noop} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
