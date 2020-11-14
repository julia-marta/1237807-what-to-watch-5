import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./review-form";
import {noop} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on post submit should call callback but should not send a form`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = mount(
      <ReviewForm currentRating={`3`} currentText={`test text`}
        isReviewValid={true} isReviewSaving={false}
        onFieldChange={noop} onSubmit={handleFormSubmit} />
  );

  const form = wrapper.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {preventDefault: formSendPrevention});

  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`Change rating input should call pass to the callback event target`, () => {
  const handleFieldClick = jest.fn();

  const wrapper = mount(
      <ReviewForm currentRating={`3`} currentText={`test text`}
        isReviewValid={true} isReviewSaving={false}
        onFieldChange={handleFieldClick} onSubmit={noop} />
  );

  const inputTwo = wrapper.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});

  expect(handleFieldClick).toHaveBeenCalledTimes(1);
  expect(handleFieldClick.mock.calls[0][0]).toMatchObject(inputTwo);
});

it(`Change text of review should call pass to the callback event target`, () => {
  const handleFieldClick = jest.fn();

  const wrapper = mount(
      <ReviewForm currentRating={`3`} currentText={`test text`}
        isReviewValid={true} isReviewSaving={false}
        onFieldChange={handleFieldClick} onSubmit={noop} />
  );

  const textArea = wrapper.find(`textarea`);

  textArea.simulate(`change`);

  expect(handleFieldClick).toHaveBeenCalledTimes(1);
  expect(handleFieldClick.mock.calls[0][0]).toMatchObject(textArea);
});
