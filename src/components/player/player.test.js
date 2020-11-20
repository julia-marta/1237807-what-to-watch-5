import React from 'react';
import renderer from 'react-test-renderer';
import Player from "./player";
import {film, noop} from "../../test-data";

it(`should Player render correctly`, () => {
  const tree = renderer
    .create(
        <Player film={film} onExitClick={noop} />, {
          createNodeMock: () => {
            return {
              play() {},
              pause() {},
            };
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
