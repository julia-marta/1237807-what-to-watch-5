import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from "./sign-in";

jest.mock(`../header/Header`, () => `header`);

configure({adapter: new Adapter()});

it(`Click on submit should call callback but should not send a form`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = mount(
      <BrowserRouter>
        <SignIn onSubmit={handleFormSubmit} />
      </BrowserRouter>
  );

  const form = wrapper.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {preventDefault: formSendPrevention});

  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
