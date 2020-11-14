import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

it(`Click on show more button should call callback and pass films count`, () => {
  const handleShowMoreButtonClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton onShowMoreButtonClick={handleShowMoreButtonClick} filmsToShowCount={4} />
  );

  const catalogButton = wrapper.find(`.catalog__button`);
  catalogButton.simulate(`click`);

  expect(handleShowMoreButtonClick).toHaveBeenCalledTimes(1);
  expect(handleShowMoreButtonClick.mock.calls[0][0]).toEqual(4);
});
