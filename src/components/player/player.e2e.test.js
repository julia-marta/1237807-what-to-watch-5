import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player";
import {film, noop} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on play button should call callback`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <Player film={film} onExitClick={noop} renderPlayer={noop} isPlaying={true}
        duration={120} progress={60} onPlayButtonClick={handlePlayButtonClick} onFullScreenButtonClick={noop}>
        <React.Fragment />
      </Player>
  );
  const playButton = wrapper.find(`button.player__play`);
  playButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});

it(`Click on exit button should call callback`, () => {
  const handleExitButtonClick = jest.fn();

  const wrapper = shallow(
      <Player film={film} onExitClick={handleExitButtonClick} renderPlayer={noop} isPlaying={true}
        duration={120} progress={60} onPlayButtonClick={noop} onFullScreenButtonClick={noop}>
        <React.Fragment />
      </Player>
  );
  const exitButton = wrapper.find(`button.player__exit`);
  exitButton.simulate(`click`);

  expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
});

it(`Click on full screen button should call callback`, () => {
  const handleFullScreenButtonClick = jest.fn();

  const wrapper = shallow(
      <Player film={film} onExitClick={noop} renderPlayer={noop} isPlaying={true}
        duration={120} progress={60} onPlayButtonClick={noop} onFullScreenButtonClick={handleFullScreenButtonClick}>
        <React.Fragment />
      </Player>
  );
  const fullScreenButton = wrapper.find(`button.player__full-screen`);
  fullScreenButton.simulate(`click`);

  expect(handleFullScreenButtonClick).toHaveBeenCalledTimes(1);
});
