import React from 'react';
import renderer from 'react-test-renderer';
import {Player} from "./player";
import {film, noop} from "../../test-data";

it(`should Player render correctly`, () => {
  const tree = renderer
    .create(
        <Player id={`1`} film={film} loadFilm={noop} onExitClick={noop} />, {
          createNodeMock: () => {
            return {
              play() {},
              pause() {},
            };
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
