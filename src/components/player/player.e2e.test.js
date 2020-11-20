import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player";
import {film, noop} from "../../test-data";

const mockReducer = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useReducer: (initial) => [initial, mockReducer],
    }));

configure({adapter: new Adapter()});

Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
  configurable: true,
  get() {
    return () => {};
  }
});

Object.defineProperty(global.window.HTMLMediaElement.prototype, `pause`, {
  configurable: true,
  get() {
    return () => {};
  }
});

it(`Click on exit button should call callback`, () => {
  const handleExitButtonClick = jest.fn();

  const wrapper = mount(
      <Player film={film} onExitClick={handleExitButtonClick} />
  );
  const exitButton = wrapper.find(`button.player__exit`);
  exitButton.simulate(`click`);

  expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
});

it(`Click on play button should call dispatch witn change playing status action`, () => {

  const wrapper = mount(
      <Player film={film} onExitClick={noop} />
  );

  const playButton = wrapper.find(`button.player__play`);
  playButton.simulate(`click`);
  expect(mockReducer.mock.calls[0][0]).toEqual({type: `CHANGE_PLAYING_STATE`});

  expect(mockReducer).toHaveBeenCalledTimes(1);
});
