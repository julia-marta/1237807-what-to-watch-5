import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePage} from "./movie-page";
import {noop, film, reviews, defaultState} from "../../test-data";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

const {AUTHORIZED} = AuthorizationStatus;
const mockRelatedFilms = defaultState.DATA.films;

jest.mock(`../header/Header`, () => `Header`);

it(`Click on play button should call callback`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <MoviePage id={`1`} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
        userStatus={AUTHORIZED} onPlayClick={handlePlayButtonClick} onMyListClick={noop} />
  );

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  expect(handlePlayButtonClick.mock.calls[0][0]).toEqual(film.id);
});

it(`Click on add to my list button should call callback and pass number`, () => {
  const handleListButtonClick = jest.fn();

  const wrapper = shallow(
      <MoviePage id={`1`} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
        userStatus={AUTHORIZED} onPlayClick={noop} onMyListClick={handleListButtonClick} />
  );

  const listButton = wrapper.find(`button.btn--list`);
  listButton.simulate(`click`);

  expect(handleListButtonClick).toHaveBeenCalledTimes(1);
  expect(handleListButtonClick.mock.calls[0][0]).toEqual(expect.any(Number));
});
