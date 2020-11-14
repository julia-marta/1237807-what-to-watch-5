import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {noop, promoFilm} from "../../test-data";

jest.mock(`../header/Header`, () => `Header`);
jest.mock(`../catalog/Catalog`, () => `Catalog`);

configure({adapter: new Adapter()});

it(`Click on play button should call callback`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <Main promoFilm={promoFilm} onPlayClick={handlePlayButtonClick} addToMyList={noop} />
  );

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  expect(handlePlayButtonClick.mock.calls[0][0]).toEqual(promoFilm.id);
});

it(`Click on add to my list button should call callback and pass number`, () => {
  const handleListButtonClick = jest.fn();

  const wrapper = shallow(
      <Main promoFilm={promoFilm} onPlayClick={noop} addToMyList={handleListButtonClick} />
  );

  const listButton = wrapper.find(`button.btn--list`);
  listButton.simulate(`click`);

  expect(handleListButtonClick).toHaveBeenCalledTimes(1);
  expect(handleListButtonClick.mock.calls[0][1]).toEqual(expect.any(Number));
});
