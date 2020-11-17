import React from 'react';
import renderer from 'react-test-renderer';
import Player from "./player";
import {film, noop} from "../../test-data";

describe(`should Player render correctly`, () => {
  it(`when it is playing`, () => {
    const tree = renderer
    .create(
        <Player film={film} onExitClick={noop} renderPlayer={noop} isPlaying={true}
          duration={120} progress={60} onPlayButtonClick={noop} onFullScreenButtonClick={noop}>
          <React.Fragment />
        </Player>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`when it is not playing`, () => {
    const tree = renderer
    .create(
        <Player film={film} onExitClick={noop} renderPlayer={noop} isPlaying={false}
          duration={120} progress={60} onPlayButtonClick={noop} onFullScreenButtonClick={noop}>
          <React.Fragment />
        </Player>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
