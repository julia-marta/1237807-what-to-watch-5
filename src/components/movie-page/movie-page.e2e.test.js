import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePage} from "./movie-page";
import {noop, film, reviews, defaultState} from "../../test-data";
import {AuthorizationStatus} from "../../const";

const {AUTHORIZED} = AuthorizationStatus;
const mockRelatedFilms = defaultState.DATA.films;

jest.mock(`../header/header.jsx`, () => `Header`);

const mockEffect = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useEffect: () => mockEffect,
    }));

configure({adapter: new Adapter()});

it(`Click on play button should call callback and pass id`, () => {
  const handlePlayButtonClick = jest.fn();
  const mockId = `1`;

  const wrapper = shallow(
      <MoviePage id={mockId} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
        userStatus={AUTHORIZED} loadFilm={noop} addToMyList={noop} onPlayClick={handlePlayButtonClick} />
  );

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  expect(handlePlayButtonClick.mock.calls[0][0]).toEqual(mockId);
});

it(`Click on add to my list button should call callbacks and pass id and status number`, () => {

  const handleAddToMyListClick = jest.fn();
  const handleLoadFilm = jest.fn();
  const mockId = `1`;

  const wrapper = shallow(
      <MoviePage id={mockId} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
        userStatus={AUTHORIZED} loadFilm={handleLoadFilm} addToMyList={handleAddToMyListClick} onPlayClick={noop} />
  );

  const listButton = wrapper.find(`button.btn--list`);
  listButton.simulate(`click`);

  expect(handleAddToMyListClick).toHaveBeenCalledTimes(1);
  expect(handleAddToMyListClick.mock.calls[0][0]).toEqual(mockId);
  expect(handleAddToMyListClick.mock.calls[0][1]).toEqual(expect.any(Number));

  expect(handleLoadFilm).toHaveBeenCalledTimes(1);
  expect(handleLoadFilm.mock.calls[0][0]).toEqual(mockId);
});
