import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";
import {noop} from "../../test-data";

const mockSetState = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useState: (initial) => [initial, mockSetState],
      useEffect: () => jest.fn(),
    }));

configure({adapter: new Adapter()});

it(`Click on post submit should call callbacks but should not send a form`, () => {
  const handleAddReview = jest.fn();
  const handleSetReviewStatus = jest.fn();

  const wrapper = mount(
      <ReviewForm id={1} reviewStatus={`NOT_SAVING`}
        addReviewAction={handleAddReview} setReviewStatusAction={handleSetReviewStatus} />
  );

  const form = wrapper.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {preventDefault: formSendPrevention});

  expect(handleAddReview).toHaveBeenCalledTimes(1);
  expect(handleSetReviewStatus).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`Change fields should set it's value to the state`, () => {

  const wrapper = mount(
      <ReviewForm id={1} reviewStatus={`NOT_SAVING`} addReviewAction={noop} setReviewStatusAction={noop} />
  );

  const inputTwo = wrapper.find(`input`).at(1);
  const textArea = wrapper.find(`textarea`);

  inputTwo.simulate(`change`, {target: {checked: true}});
  textArea.simulate(`change`);

  expect(mockSetState).toHaveBeenCalledTimes(2);
});
