import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {noop, filmCard} from "../../test-data";

configure({adapter: new Adapter()});

it(`Mouse hover on card should call callback`, () => {
  const handleMouseEnter = jest.fn();

  const wrapper = shallow(
      <MovieCard film={filmCard} isVideoPlaying={true} onMovieCardOut={noop} onMovieCardOver={handleMouseEnter} />
  );

  const card = wrapper.find(`.small-movie-card`);
  card.simulate(`mouseEnter`);

  expect(handleMouseEnter).toHaveBeenCalledTimes(1);
});

it(`Mouse away from card should call callback`, () => {
  const handleMouseLeave = jest.fn();

  const wrapper = shallow(
      <MovieCard film={filmCard} isVideoPlaying={true} onMovieCardOut={handleMouseLeave} onMovieCardOver={noop} />
  );

  const card = wrapper.find(`.small-movie-card`);
  card.simulate(`mouseLeave`);

  expect(handleMouseLeave).toHaveBeenCalledTimes(1);
});
