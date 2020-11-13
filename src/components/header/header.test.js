import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./header";
import {noop, defaultState} from "../../test-data";
import {AuthorizationStatus} from "../../const";

const {name, avatar} = defaultState.USER;
const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;

describe(`should Header render correctly`, () => {
  it(`on Main Page`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header isMain={true} onAvatarClick={noop} userStatus={AUTHORIZED} userName={name} userAvatar={avatar} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`on SignIn Page`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header isSignIn={true} onAvatarClick={noop} userStatus={NOT_AUTHORIZED} userName={null} userAvatar={null}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`when user is authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header onAvatarClick={noop} userStatus={AUTHORIZED} userName={name} userAvatar={avatar} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`when user is not authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header onAvatarClick={noop} userStatus={NOT_AUTHORIZED} userName={null} userAvatar={null} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
