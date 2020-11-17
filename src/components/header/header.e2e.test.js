import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Header} from "./header";
import {defaultState} from "../../test-data";
import {AuthorizationStatus} from "../../const";

const {name, avatar} = defaultState.USER;
const {AUTHORIZED} = AuthorizationStatus;

configure({adapter: new Adapter()});

it(`Click on avatar should call callback`, () => {
  const handleAvatarClick = jest.fn();

  const wrapper = shallow(
      <Header onAvatarClick={handleAvatarClick} userStatus={AUTHORIZED} userName={name} userAvatar={avatar} />
  );

  const userAvatar = wrapper.find(`.user-block__avatar`);
  userAvatar.simulate(`click`);

  expect(handleAvatarClick).toHaveBeenCalledTimes(1);
});
