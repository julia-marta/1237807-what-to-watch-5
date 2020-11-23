import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Player} from "./player";
import {film, noop} from "../../test-data";

const mockSetState = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useState: (initial) => [initial, mockSetState],
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

it(`Click on exit button should call callback and pass id`, () => {
  const handleExitButtonClick = jest.fn();
  const mockId = `1`;

  const wrapper = mount(
      <Player id={mockId} film={film} loadFilm={noop} onExitClick={handleExitButtonClick} />
  );
  const exitButton = wrapper.find(`button.player__exit`);
  exitButton.simulate(`click`);

  expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
  expect(handleExitButtonClick.mock.calls[0][0]).toEqual(mockId);
});

it(`Click on play button should set playing status in the state`, () => {

  const wrapper = mount(
      <Player id={`1`} film={film} loadFilm={noop} onExitClick={noop} />
  );

  const playButton = wrapper.find(`button.player__play`);
  playButton.simulate(`click`);

  expect(mockSetState).toHaveBeenCalledTimes(1);
});
