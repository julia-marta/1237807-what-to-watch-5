import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from "./with-video";
import {filmCard} from "../../test-data";

configure({adapter: new Adapter()});

Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
  configurable: true,
  get() {
    return () => {};
  }
});

Object.defineProperty(global.window.HTMLMediaElement.prototype, `pause`, {
  configurable: true,
  get() {
    return () => {};
  }
});

const MockComponent = (props) => {
  const {children, renderPlayer} = props;

  return (
    <React.Fragment>
      {renderPlayer(filmCard.previewVideoLink)}
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`Should isLoading equal true`, () => {
  const wrapper = mount(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>);

  expect(wrapper.state().isLoading).toEqual(true);
});

it(`Should isPlaying equal false`, () => {
  const wrapper = mount(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>);

  expect(wrapper.state().isPlaying).toEqual(false);
});

it(`Should play button handler change state`, () => {
  const wrapper = mount(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>);

  wrapper.instance()._handlePlayButton();
  expect(wrapper.state().isPlaying).toEqual(true);
  wrapper.instance()._handlePlayButton();
  expect(wrapper.state().isPlaying).toEqual(false);
});
