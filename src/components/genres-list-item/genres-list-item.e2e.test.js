import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresListItem from "./genres-list-item";
import {genres} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on genre should call callbacks`, () => {
  const handleGenreClick = jest.fn();
  const handleResetCards = jest.fn();

  const wrapper = shallow(
      <GenresListItem genre={genres[0]} isActive={true} onGenreClick={handleGenreClick} resetCards={handleResetCards} />
  );

  const genreLink = wrapper.find(`.catalog__genres-link`);
  genreLink.simulate(`click`);

  expect(handleGenreClick).toHaveBeenCalledTimes(1);
  expect(handleGenreClick.mock.calls[0][0]).toEqual(genres[0]);
  expect(handleResetCards).toHaveBeenCalledTimes(1);
});
